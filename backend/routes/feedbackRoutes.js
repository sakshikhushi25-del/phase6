import express from "express";
import Feedback from "../models/feedback.js";

const router = express.Router();

router.post("/feedback", async (req, res) => {
    try {
        console.log(req.body)
        const feedback = new Feedback(req.body)
        await feedback.save();
        res.status(201).json({
            message: "Feedback saved successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to save feedback",
            error: error.message
        });
    }
})
router.get("/feedback", async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch(error) {
        res.status(500).json({
            message: "Failed to fetch feedback",
            error: error.message
        });
    }
})

export default router;