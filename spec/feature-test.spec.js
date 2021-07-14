const Scorecard = require("../src/scorecard.js")

describe("Feature Test", function(){
    it("Test 1", function(){
        let scorecard;
        scorecard = new Scorecard([1,2,3,4,5,6,7,8,9,10], 3, 8)
        scorecard.standardise()
        expect(scorecard.score).toEqual([3,3,3,4,5,6,7,8,8,8])
    })

    it("Test 2", function(){
        let scorecard;
        scorecard = new Scorecard([1,4,5,6,10], 2, 8)
        scorecard.standardise()
        expect(scorecard.score).toEqual( [2, 4, 5, 6, 8])
    })

    it("Test 3", function(){
        let scorecard;
        scorecard = new Scorecard([4, 1, 5, 10, 6], 1, 10)
        scorecard.standardise()
        expect(scorecard.score).toEqual([1, 4, 5, 6, 10])
    })

    it("Test 4", function(){
        let scorecard;
        scorecard = new Scorecard([1, 4, 5, 6, 10], 8, 2)
        expect(scorecard.standardise()).toEqual("invalid thresholds")
    })

    it("Test 5", function(){
        let scorecard;
        scorecard = new Scorecard([1, 4, 5, 6, 10], 5, 5)
        scorecard.standardise()
        expect(scorecard.score).toEqual([5, 5, 5, 5, 5])
    })

    

})