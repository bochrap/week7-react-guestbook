import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});

//ROOT ACCESS
app.get("/", (request, response) => {
  response.json("You are in the root folder");
});

//ALL POSTS
app.get("/posts", async (request, response) => {
  const result = await db.query(`SELECT * FROM posts`);
  response.json(result.rows);
});

//SINGLE POST
app.get("/posts/:id", async (request, response) => {
  const recordId = request.params.id;

  const result = await db.query(`SELECT * FROM posts WHERE id = $1`, [recordId]);
  response.json(result.rows);
});

//CATEGORY POSTS
app.get("/posts/category/:category", async (request, response) => {
  const categoryId = request.params.category;

  const result = await db.query(`SELECT posts.title, posts.content, categories.name AS category 
  FROM posts
  JOIN categories ON posts.category_id = categories.id
  WHERE categories.id = ${categoryId}`);

  response.json(result.rows);
});

//NEW POST
app.post("/posts", async (request, response) => {
  const title = request.body.title;
  const content = request.body.content;
  const likes = request.body.likes;
  const category_id = request.body.category_id;

  const newPost = await db.query(`INSERT INTO posts (title, content, likes, category_id) VALUES ($1, $2, $3, $4) RETURNING *`, [
    title,
    content,
    likes,
    category_id,
  ]);
  response.json(newPost.rows[0]);
});

app.delete("/posts/:id", async (request, response) => {
  const recordId = request.params.id;
  const result = await db.query("DELETE FROM posts WHERE id = $1", [recordId]);
  response.json(`Deleted entry wit id#${recordId}`);
});

//ADD LIKE
app.put("/posts/:id/like", async (request, response) => {
  const recordId = request.params.id;
  //   const { likes } = request.body;
  let operator = "+";

  const updateLikes = await db.query(`UPDATE posts SET likes = likes ${operator} 1 WHERE id = $1 RETURNING *`, [recordId]);

  response.json(`Like added to post with id#${recordId}`);
});

//REMOVE LIKE
app.put("/posts/:id/unlike", async (request, response) => {
  const recordId = request.params.id;
  //   const { likes } = request.body;
  let operator = "-";

  const updateLikes = await db.query(`UPDATE posts SET likes = likes ${operator} 1 WHERE id = $1 RETURNING *`, [recordId]);

  response.json(`Like removed from post with id#${recordId}`);
});
