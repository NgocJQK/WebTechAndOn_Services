const BlogModel = require("../models/Blog");

exports.getAllBlogs = async (filters = null) => {
  let query;
  if (filters) {
    if ("title" in filters) {
      query = { title: { $regex: filters["title"], $options: 'i' } }
    }
  } 
  return await BlogModel.find(query);
};

exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};
exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};

exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};

exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};
