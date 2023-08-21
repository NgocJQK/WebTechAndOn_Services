const BlogModel = require("../models/Blog");

exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

exports.createBlog = async (blog) => {
  console.log({blog})
  return await BlogModel.create(blog);
};