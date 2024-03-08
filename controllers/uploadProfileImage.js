const multer = require('multer');
const User = require('./models/User');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadFile = async (userId, file) => {
  try {
    await User.findByIdAndUpdate(userId, { image: file.filename });
    return { message: 'File uploaded successfully!' };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = uploadFile;