const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
});

// Adding a custom validator to ensure the file has an image extension
fileSchema.path('filename').validate(function (value) {
  const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

  // Extracting the file extension from the filename
  const fileExtension = value.slice((value.lastIndexOf(".") - 1 >>> 0) + 2);

  // Checking if the extension is supported
  return supportedExtensions.includes(fileExtension.toLowerCase());
}, 'Invalid file format');

const FileModel = mongoose.model('File', fileSchema);

module.exports = FileModel;
