class TopicDTO {
    name;
    word;

    constructor(name = '', word = []) {
        this.name = name;
        for(let i = 0;i < word.length; i++){
            this.word[i] = word[i];
        }
    }
}

module.exports = TopicDTO;