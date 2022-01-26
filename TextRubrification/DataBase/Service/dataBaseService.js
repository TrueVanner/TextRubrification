const TopicDTO = require("../DTO/userDTO");
const topicModel = require('../Models/usersModel');
const tokenService = require('../Service/tokenService');


class DataService{
 
    async getTopics(){
        const candidate = await topicModel.find({});
        return candidate

        //userModel.deleteOne({...})
        //deleteMany
        //updateMany({...},{...})
        //updateOne({...})

    }

    async addTopic(topicDTO){

        const nameCandidate = await topicModel.findOne({name : topicDTO.name})

        if(loginCandidate){
            throw new Error('Current topic does exist')
        }

        const topic = await topicModel.create({name: topicDTO.name, words: topicDTO.words})
        

        return {
            topic: {name: topicDTO.name, words: topicDTO.words}
        }
    }

    async addWord(topicName, word){
        (topicModel.findOne({name: topicName})).words.push(word);
    }

    async deleteTopic(topicName){
        var deletionCandidate = 
    }

    
}

module.exports = new DataService();