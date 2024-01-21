import { useState } from "react";

export default function NewPost() {
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    likes: 0,
    category_id: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);

    fetch(`https://server-week7-project.onrender.com/posts`, {
      method: `POST`,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setTimeout(() => {
      window.location.href = `https://week7-project-client-x5qs.onrender.com/posts/category`;
    }, 1000);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div id="content">
      <h2>Create new post</h2>
      <br />
      <br />
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formValues.title} required onChange={handleInputChange} />
        <br />
        <br />
        <label htmlFor="content">Add content</label>
        <textarea name="content" id="content" value={formValues.content} cols="50" rows="5" required onChange={handleInputChange}></textarea>
        <select name="category_id" id="category_id" required onChange={handleInputChange} defaultValue={""}>
          <option value="">--Select category--</option>
          <option value="1">Technology</option>
          <option value="2">Travel</option>
          <option value="3">Food</option>
          <option value="4">Lifestyle</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
