class TopicDTO {
    topic;
    words;

    constructor(topic = '', word = []) {
        this.topic = topic;
        for(let i = 0 ; i < word.length; i++){
            this.words[i] = word[i];
        }
    }
}

module.exports = TopicDTO;