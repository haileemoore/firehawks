const express = require("express")
const router = express.Router()
const Contents = require("../models/contents_model.js")

// Create
router.post("/calendar", (req, res) => {
    Contents.create(req.body, (err, createEvent) => {
        res.json(createEvent);
    })
})

// Read
router.get("/home", (req, res) => {
    Contents.find({}, (err, findInfo) => {
        res.json(findInfo)
    })
})

// Update
router.put("/:id", (req, res) => {
    Contents.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true },
        (err, updateInfo) => {
            res.json(updateInfo)
        }
    )
})

// Delete
router.delete("/:id", (req, res) => {
    Contents.findByIdAndDelete(req.params.id, (err, deleteInfo) => {
        res.json(deleteInfo)
    })
})

module.exports = router