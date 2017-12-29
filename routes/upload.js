var express = require('express');
var router = express.Router();

var path = require('path');
// Require multer for the file uploads
var multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: '../osaserver/public/uploads',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('photo');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Upload image
router.post('/', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      console.log(err);
    } else {
      res.status(200).json({
        msg: 'File Uploaded!',
        file: `uploads/${req.file.filename}`
      });
    }
  });
});

module.exports = router;