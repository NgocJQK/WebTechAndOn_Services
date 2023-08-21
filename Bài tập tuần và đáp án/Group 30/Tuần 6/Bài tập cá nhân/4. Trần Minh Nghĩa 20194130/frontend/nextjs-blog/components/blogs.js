import { useEffect, useState } from "react";
import Blog from "./blog";
import axios from "axios";
const API = "http://localhost:3001/api/blogs";

export default function Blogs() {
  useEffect(() => {
    getItems();
  }, []);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const getItems = async () => {
    try {
        // const response = await axios.get(`${API}`);
      const response = await fetch(`${API}`);
      console.log(response);
      const jsonData = await response.json();
    //   const blogs = response.data;
      const blogs = jsonData.data;
      setData(blogs);
      setLoading(false);
      console.log(blogs);
      return blogs;
    } catch (errors) {
      console.error(errors);
    }
  };
  
  function deleteBlog(id) {
    const res = fetch(`${API + "/" + id}`, { method: 'DELETE' }).then(getItems());
  }

  if (isLoading) {
    return (
      <div className="edit-container">
        <h1>List of blogs</h1>
        <div>Loading ...</div>
      </div>
    );
  } else {
    return (
      <div className="edit-container">
        {console.log(data)}
        <h1>List of blogs</h1>
        <div className="list">
          {data.map((data) => {
            return (
              <Blog
                title={data.title}
                body={data.body}
                img={data.image}
                id={data._id}
                handleDelete={() => deleteBlog(data._id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
