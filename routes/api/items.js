const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Item Model
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get all items
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then((items) => res.json(items));
});

// @route POST api/items
// @desc Add an item.
// @access Private
router.post("/", auth, (req, res) => {
    const new_item = new Item({
        title: req.body.title,
        content: req.body.content,
        url: req.body.url,
    });
    new_item.save().then((item) => res.json(item));
});

// @route Delete api/items
// @desc Delete an item.
// @access Private
router.delete("/:id", auth, (req, res) => {
    Item.findById(req.params.id)
        .then((item) => item.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }));
});

// @route Put api/items
// @desc Update an item.
// @access Private
router.put("/:id", auth, (req, res) => {
    Item.findById(req.params.id)
        .then((item) => {
            console.log();
            item.url = req.body.url;
            item.save().then((item) => res.json(item));
        })
        .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;