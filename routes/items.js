var express = require('express');
var router = express.Router();

var Item = require('../models/Item');
var Rating = require('../models/Rating');

var Verify = require('./verify');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

// Create new item
router.post('/create', Verify.verifyOrdinaryUser, (req, res, next) => {
    if(!req.body.image) {
        req.body.image = 'uploads/temp.jpg'
    }
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
            res.status(500).json({
                msg: 'Connection error'
            });
        }
        res.status(200).json(result);
    });
});

// Get all items created by a user
router.route('/createdBy')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    Item.find({ created_by: req.decoded._id }, (err, items) => {
        if (err) next(err);
        res.status(200).json(items);
    });
});

// Remove an item
router.delete('/remove/:itemId', Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Item.findByIdAndRemove(req.params.itemId, (err, item) => {
        if (err) next(err);
        if(item.image !== "uploads/temp.jpg") {
            fs.unlink(`public/${item.image}`, (err) => {
                if(err) {
                    console.log(err);
                }
            });
        }
        res.json(item);
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
    Item.findOneAndUpdate(
        {
            _id: req.params.itemId,
            created_by: req.decoded._id
        }, 
        {
            $set: {
              name: req.body.name, 
              image: req.body.image,
              description: req.body.description,
              max_rating: req.body.max_rating,
              time_limit: req.body.time_limit
            }
        },
        {
            upsert: false,
            new: true
        },
        (err, item) => {
            if (err) next(err);
            console.log(item);
            
            res.status(200).json(item);    
        }
    );
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
        Rating.aggregate(
            [{ 
                $match : 
                { 
                    for_item: res_rating.for_item
                } 
            },
            {
                $group: {
                    _id: null,
                    sum: {
                        $sum: '$rating'
                    }
                }
            }], (err, result) => {
            if (err) next(err);
            // Update aggregated item rating
            Item.findByIdAndUpdate(req.params.itemId, 
                {'rating': (result[0].sum*10)/15}, 
                {new: true},
                (err, data) => {
                    if (err) {
                        next(err);
                    }
                    console.log(data);
                    res.status(200).json({
                        msg: 'Rating updated',
                        item: data
                    }
                );
            }); 
        });
    });
});

// Update item approval status - only available to admin
router.route('/:itemId/approve')
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Item.findByIdAndUpdate(req.params.itemId, 
        {approved: true}, 
        {new: true},
        (err, item) => {
            if(err) {
                next(err);
            }
            console.log(item);
            res.status(200).json(item);
    });
});

// Get all items pending
router.route('/pending')
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Item.find().where('approved').equals(false)
    .exec((err, items) => {
        if(err) next(err);
        res.status(200).json(items);
    })
});

// Get all incomplete items
router.route('/incomplete')
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    Item.find().where('completed').equals(false)
    .exec((err, items) => {
        if(err) next(err);
        res.status(200).json(items);
    })
});

// Update item group - only available to admin
router.route('/:itemId/updateGroup')
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, (req, res, next) => {
    if(req.body.checked) {
        Item.findByIdAndUpdate(req.params.itemId, 
            {
                $addToSet: {
                    group: req.body.newGroup
                }
            },
            {new: true}, 
            (err, item) => {
                if(err) {
                    next(err);
                }
                res.status(200).json(item);
        });
    } else {
        Item.findByIdAndUpdate(req.params.itemId, 
            {
                $pull: {
                    group: req.body.newGroup
                }
            },
            {new: true}, 
            (err, item) => {
                if(err) {
                    next(err);
                }
                res.status(200).json(item);
        });
    }
});

module.exports = router;