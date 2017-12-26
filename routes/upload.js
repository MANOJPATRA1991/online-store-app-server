var express = require('express');
var router = express.Router();

// Require multer for the file uploads
var multer = require('multer');

// Set the directory for the uploads to the uploaded to
var DIR = '../public/uploads/';

/**
 * Define the type of upload multer 
 * would be doing and pass in its destination
 */
var upload = multer({dest: DIR}).single('photo');

// Our file upload function.
router.post('/', function (req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("An error occured.")
        }  
        
        // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
  });     
})

module.exports = router;