const express = require("express");
const {
  getAllBlogs,
  createBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/submit").post(createBlog);

module.exports = router;
