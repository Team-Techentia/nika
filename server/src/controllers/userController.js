import { User } from '../models/models.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js'; // Import the Cloudinary upload function
import { deleteImageFromCloudinary } from '../utils/cloudinary.js';

const submitForm = async (req, res) => {
  const { title, post, date, tag } = req.body;

  try {
    const localFilePath = req.file.path;
    const uploadResult = await uploadOnCloudinary(localFilePath);

    if (!uploadResult) {
      return res.status(500).json({ success: false, message: "Failed to upload image" });
    }

    const newUser = new User({
      coverImage: uploadResult.secure_url,
      title,
      post,
      date,  
      tag  
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "User data saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving user data", error });
  }
};

const fetchEntries = async (req, res) => {
  try {
    const entries = await User.find();
    res.status(200).json({ success: true, data: entries });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching entries", error });
  }
};


const deleteEntry = async (req, res) => {
  const { id } = req.params;

  try {
      // Find the entry by ID
      const entry = await User.findById(id);

      if (!entry) {
          return res.status(404).json({ success: false, message: "Entry not found" });
      }

      await deleteImageFromCloudinary(entry.coverImage);

      await User.findByIdAndDelete(id);

      res.status(200).json({ success: true, message: "Entry deleted successfully!" });
  } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting entry", error });
  }
};

export { submitForm, fetchEntries, deleteEntry };
