export default function NewPost() {
  return (
    <div>
      <h1>Create a new post</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="content">Add content</label>
        <textarea name="content" id="content" cols="50" rows="5" required></textarea>
        <select name="category" id="category" required>
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
