import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [formStatus, setFormStatus] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("Blockchain");
  const [image, setImage] = useState("");

  const onTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onBodyChange = (e) => {
    const { value } = e.target;
    setBody(value);
  };

  const onCategoryChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const onImageChange = (e) => {
    const { value } = e.target;
    setImage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/submit", {
        image: image,
        title: title,
        body: body,
        category: category,
      })
      .then(function (response) {
        setFormStatus(response.data.message);
        setTitle("");
        setBody("");
        setCategory("Blockchain");
        setImage("");
        console.log(response);
      })
      .catch(function (error) {
        setFormStatus(error.response.data.message);
        console.log(error);
      });
  };

  return (
    <div className="page">
      {/* <SideBar /> */}
      <div className="form">
        <h2 className="title">Add a blog</h2>
        <form
          acceptCharset="UTF-8"
          method="POST"
          encType="multipart/form-data"
          id="ajaxForm"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-title"
              id="title"
              placeholder="Title should not exceed 128 characters (Required)"
              required
              name="title"
              value={title}
              onChange={onTitleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              className="form-body"
              id="body"
              placeholder="Enter your body"
              name="body"
              value={body}
              onChange={onBodyChange}
            />
          </div>


          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-category"
              id="category"
              placeholder="Category should not exceed 128 characters (Required)"
              required
              name="category"
              value={category}
              onChange={onCategoryChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-image"
              id="image"
              placeholder="Image Raw link (Required)"
              required
              name="image"
              value={image}
              onChange={onImageChange}

            />
          </div>

          {formStatus !== "" ? (
            <div className="success-message">{formStatus}</div>
          ) : (
            ""
          )}
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
