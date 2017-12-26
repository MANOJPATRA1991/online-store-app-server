var express = require('express');
var router = express.Router();

var Item = require('../models/Item');
var Rating = require('../models/Rating');

var Verify = require('./verify');

var bodyParser = require('body-parser');
var ObjectId = require('mongoose').Types.ObjectId; 

// Create new item
router.post('/create', Verify.verifyOrdinaryUser, (req, res, next) => {
    let item = new Item({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        max_rating: req.body.max_rating,
        time_limit: req.body.time_limit,
        created_by: req.decoded._id
    });
    Item.create(item, (err, result) => {
        if(err) {
            next(err);
        }
        res.status(200).json({
            msg: 'Item created',
            id: result._id
        });
    });
});

// Get all items created by a user
router.route('/createdBy/:uid')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    Item.find({ created_by: req.decoded._id }, (err, items) => {
        if (err) next(err);
        res.status(200).json(items);
    });
});

// Get all items for a group
router.route('/groupedBy/:group')
.get((req, res, next) => {
    Item.find({ group: req.params.group }, (err, items) => {
        if (err) next(err);
        res.status(200).json(items);
    });
})

// Edit item details by item creator
router.route('/edit/item/:itemId')
.put(Verify.verifyOrdinaryUser, (req, res, next) => {
    Item.findById(req.params.itemId, (err, item) => {
        if (err) next(err);
        if (item.created_by == req.decoded._id) {
            item.name = req.body.name;
            item.image = req.body.image;
            item.description = req.body.description;
            item.max_rating = req.body.max_rating;
            item.time_limit = req.body.time_limit;
        }
        item.save((err, data) => {
            if (err) next(err);
            console.log(data);
            res.status(200).json("Item updated");
        })
    });
});

// Rate an item
router.route('/rate/:itemId')
.post(Verify.verifyOrdinaryUser, (req, res, next) => {
    let new_rating = new Rating({
        rating: req.body.rating,
        for_item: req.params.itemId,
        posted_by: req.decoded._id
    });

    Rating.create(new_rating, (err, res_rating) => {
        if(err) {
            next(err);
        }
        console.log(res_rating);
        Rating.aggregate(
            [{
                $group: {
                    _id: req.params.itemId,
                    average: {
                        $avg: '$rating'
                    },
                    count: {
                        $sum: 1
                    }
                }
            }], (err, result) => {
            if (err) next(err);
            
            // Update item rating only if number of users who
            // rated for the item is greater than 10
            if (result[0].count > 10) {
                // Update aggregated item rating
                Item.findByIdAndUpdate(req.params.itemId, 
                    {'rating': result[0].average}, 
                    (err, data) => {
                        if (err) {
                            next(err);
                            console.log(err);
                        }
                        res.status(200).json({
                            msg: 'Rating updated'
                        }
                    );
                });   
            }
        });
    });
});

// Find all items for which user has voted
router.route('/rated/:uid')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    Rating.find({posted_by: req.params.uid}, (err, items) => {
        if(err) next(err);
        res.status(200).json(items);
    });
});

// Update item approval status - only available to admin
router.route('/:itemId/approve')
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Item.findByIdAndUpdate(req.params.itemId, 
        {approved: true}, 
        (err, item) => {
            if(err) {
                next(err);
            }
            res.status(200).json({
                msg: "Item approved"
            }
        );
    });
});

// Update item group - only available to admin
router.route('/:itemId/updateGroup')
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Item.findByIdAndUpdate(req.params.itemId, 
        {
            $push: {
                group: req.body.newGroup
            }
        }, 
        (err, item) => {
            if(err) {
                next(err);
            }
            res.status(200).json({
                msg: "Item groups updated"
            }
        );
    });
});

module.exports = router;