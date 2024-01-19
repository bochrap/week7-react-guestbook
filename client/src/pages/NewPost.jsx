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
    // setFormValues({
    //   title: "",
    //   content: "",
    //   likes: 0,
    //   category_id: ""
    // });
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formValues.title} required onChange={handleInputChange} />
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
      <div>
        <p>Title is: {formValues.title}</p>
        <p>Content is: {formValues.content}</p>
        <p>Category is: {formValues.category_id}</p>
      </div>
    </div>
  );
}
