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

app.get("/", (request, response) => {
  response.json("You are in the root folder");
});

app.get("/posts", async (request, response) => {
  const result = await db.query(`SELECT * FROM posts`);
  response.json(result.rows);
});

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

app.put("/posts/:id/like", async (request, response) => {
  const recordId = request.params.id;
  //   const { likes } = request.body;
  let operator = "+";

  const updateLikes = await db.query(`UPDATE posts SET likes = likes ${operator} 1 WHERE id = $1 RETURNING *`, [recordId]);

  response.json(`Like added to post with id#${recordId}`);
});

app.put("/posts/:id/unlike", async (request, response) => {
  const recordId = request.params.id;
  //   const { likes } = request.body;
  let operator = "-";

  const updateLikes = await db.query(`UPDATE posts SET likes = likes ${operator} 1 WHERE id = $1 RETURNING *`, [recordId]);

  response.json(`Like added to post with id#${recordId}`);
});
