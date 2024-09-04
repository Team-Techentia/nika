import { Blog } from '../models/models.js';

const submitForm = async (req, res) => {

  try {
    const newBlog = new Blog(req.body);

    console.log(req.body)

    const response = await newBlog.save();

    console.log(response)

    res.status(201).json({ success: true, message: "Blog data saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving Blog data", error: error.message.split(":").pop() || error.message });
  }
};

const fetchEntries = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching blogs", error });
  }
};

export const fetchEntry = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({ success: true, blog });
    console.log(blog)
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching blog", error });
  }
};

const deleteEntry = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the entry by ID
    const entry = await Blog.findById(id);

    if (!entry) {
      return res.status(404).json({ success: false, message: "Entry not found" });
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Entry deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting entry", error });
  }
};

export { submitForm, fetchEntries, deleteEntry };
