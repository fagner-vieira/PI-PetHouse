const multer = require("multer");
const path = require("path");

exports.modules = storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve("upload/"));
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();

    callback(null, `${time}_${file.originalname}`);
  },
});
