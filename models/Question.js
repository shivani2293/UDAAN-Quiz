class Question {
    constructor(id,prompt) {
        this.id = id;
        this.prompt = prompt;
        this.answers = [];
    }
    addAnswer(answer){
        this.answers.push(answer);
    }
}
module.exports = Question;