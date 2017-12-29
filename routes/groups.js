var express = require('express');
var router = express.Router();

var Group = require('../models/Group');

var Verify = require('./verify');

var bodyParser = require('body-parser');

// Add new group
router.post('/newGroup', Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Group.find((err, groups) => {
        if(err) {
            console.log(err);
        }
        if(groups.length == 0) {
            Group.create(new Group(), (err, nwGrp) => {
                if (err) {
                    next(err);
                }
                console.log(nwGrp);
            })
        }
        Group.findOneAndUpdate(
            { _id: groups[0]._id }, 
            {
                $addToSet: {
                    group: req.body.newGroup
                }
            },
            {new: true}, 
            (err, grp) => {
                if (err) {
                    next(err);
                }
                console.log(grp);
                res.status(200).json({
                    msg: `${req.body.newGroup} Group Added`,
                    groups: grp.group
                }
            );
        });
    });
})

// Get all groups
router.route('/')
// Get all groups
.get((Req, res, next) => {
    Group.find((err, groups) => {
        if(err) {
            next(err);
            console.log(err);
        }
        res.status(200).json(groups[0].group);
    });
});

module.exports = router;