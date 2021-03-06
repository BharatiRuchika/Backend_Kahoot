var express = require("express");
var router = express.Router();
const addQuizModule=require("../module/addQuizModule");
router.post("/addQuiz",addQuizModule.createQuiz);
router.get("/getQuiz",addQuizModule.findQuiz);
router.get("/getQuiz/:id",addQuizModule.getQuiz);
router.put("/updateQuiz/:id",addQuizModule.updateQuiz);
router.delete("/deleteQuiz/:id",addQuizModule.deleteQuiz);
router.get("/getQuizzes",addQuizModule.getQuizzes);
module.exports = router;