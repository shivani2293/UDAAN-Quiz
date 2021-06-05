var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var QuestionService = require('./services/QuestionService');
var QuizService = require('./services/QuizService')
const port = 3000
app.use(bodyParser.json());

app.post('/createQuestion', (req, res) => {
  var question = QuestionService.createQuestion(req.body.question, req.body.answers)
  res.send(question)
})
app.post('/createQuiz', (req, res) => {
  var quiz = QuizService.createQuiz(req.body.name)
  res.send(quiz)
})
app.post('/addQuestionsToQuiz', (req, res) => {
  var result = QuizService.addQuestionsToQuiz(req.body.quizId, req.body.questionIds)
  if (result)
    res.send('Success')
  else
    res.send('Something Went Wrong!')
})

app.get('/listQuizes',(req,res) => {
  var result = QuizService.listQuizes();
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})