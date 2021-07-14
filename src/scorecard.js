class Scorecard {
    constructor(score, min, max){
        this._score = score;
        this._min = min;
        this._max = max;
    }

    changeMax(num){this._max = num}

    changeMin(num){this._min = num}

    get score() {return this._score}

    standardise(){
        if (this._min > this._max){return "invalid thresholds"}
        for (let i = 0 ; i < this._score.length; i++) {
            if (this._score[i] < this._min){
                this._score[i] = this._min
            }
            else if (this._score[i] > this._max) {this._score[i]= this._max}
        }
        this._score = this._score.sort()
    
    }
}

module.exports = Scorecard;