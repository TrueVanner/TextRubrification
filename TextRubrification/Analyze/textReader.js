// Class that reads given text and evaluates it into categories

class TextReader {
    constructor(){
        this.rubrics = [];
        this.rubricNumber = 0;
        this.words = [];
    }

    evaluate(text){
        
    }

    matches(word){

    }

    addRubric(rubric){
        this.rubrics.push(rubric);
        rubrics[i] = [];
        this.rubricNumber++;
    }

    addWord(rubric, word){
        for(let i = 0; i < this.rubricNumber; i++){
            if(rubric == this.rubrics[i]){
                this.rubrics[i].push(word);
                return 0;
            }
        }
        this.addRubric(rubric);
        this.rubrics[this.rubricNumber-1].push(word);
        return 1;
    }

}