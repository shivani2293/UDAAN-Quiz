const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const QuestionService = require('./QuestionService');
class QuizService {

    static createQuiz(name) {
        var quiz = new Quiz(this.quizId++, name);
        this.quizes.push(quiz);
        return quiz;
    }

    static addQuestionsToQuiz(quizId, questionIds) {
        var foundQuiz;
        for (var i = 0; i < this.quizes.length; i++) {
            if (this.quizes[i].id == quizId) {
                foundQuiz = this.quizes[i];
                break;
            }
        }
        if (!foundQuiz)
            return false;
        questionIds.forEach((questionId) => {
            foundQuiz.addQuestionId(questionId);
        })
        return true;

    }

    static listQuizes(){
        var result = []
        this.quizes.forEach((eachQuiz)=>{
            var quiz = eachQuiz;
            var questions = [];
            eachQuiz.questionIds.forEach((questionId)=>{
                var question = QuestionService.getQuestion(questionId)
                questions.push(question);
            })
            delete quiz.questionIds;
            quiz.questions = questions;
            result.push(quiz);
        })
        return result;
    }

}
QuizService.quizId = 1;
QuizService.quizes = [];
module.exports = QuizService;