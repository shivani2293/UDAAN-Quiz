const Question = require('../models/Question');
const Answer = require('../models/Answer');

class QuestionService {

    static createQuestion(prompt,answers){
        var question = new Question(this.questionId++,prompt)
        answers.forEach((eachAnswer) =>{
            var answer = new Answer(eachAnswer);
            question.addAnswer(answer);
        })
        this.questions.push(question);
        return question;
    }

    static getQuestion(questionId){
        var foundQuestion;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == questionId) {
                foundQuestion = this.questions[i];
                break;
            }
        }
        return foundQuestion;
    }

}
QuestionService.questionId = 1;
QuestionService.questions = [];
module.exports = QuestionService