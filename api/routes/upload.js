const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './images/');
  },
  filename(req, file, cb) {
    cb(null, req.body.name);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

// Upload post image
router.post('/', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded successfully');
});

module.exports = router;
