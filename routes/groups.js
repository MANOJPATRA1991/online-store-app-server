var express = require('express');
var router = express.Router();

var Group = require('../models/Group');

var Verify = require('./verify');

var bodyParser = require('body-parser');


router.route('/newGroup')
// Add new group
.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
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
        if (!groups[0].group.includes(req.body.newGroup)) {
            Group.findOneAndUpdate(
                { _id: groups[0]._id }, 
                {
                    $push: {
                        group: req.body.newGroup
                    }
                }, 
                (err, grp) => {
                    if (err) {
                        next(err);
                    }
                    console.log(grp);
                    res.status(200).json({
                        msg: `${req.body.newGroup} Group Added`
                    }
                );
            });
        } else {
            res.status(409).json({
                msg: `Group ${req.body.newGroup} already exists.`
            });
        }
    });
})

router.route('/')
// Get all groups
.get((Req, res, next) => {
    Group.find((err, groups) => {
        if(err) {
            next(err);
        }
        res.status(200).json(groups[0].group);
    });
});

module.exports = router;