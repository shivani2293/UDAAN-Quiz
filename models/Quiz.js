class Quiz {
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.questionIds = [];
    }
    addQuestionId(questionId) {
        this.questionIds.push(questionId);
    }
}
module.exports = Quiz