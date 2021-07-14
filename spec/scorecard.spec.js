const Scorecard = require("../src/scorecard.js")

describe("Scorecard Class Test:", function(){

    beforeEach(function(){
        scorecard = new Scorecard([1,5,7],2,6)
    })

    it("Can we create a scorecard?", function(){
        expect(scorecard.score).toEqual([1,5,7])
    })

    it("Can we adjust scores correctly?", function(){
        scorecard.standardise();
        expect(scorecard.score).toEqual([2,5,6])
    })
})