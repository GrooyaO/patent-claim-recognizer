"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClaimCollection_1 = require("./ClaimCollection");
var Claim_1 = require("./Claim");
var TextParser = /** @class */ (function () {
    function TextParser() {
    }
    TextParser.prototype.parseClaims = function (claimText) {
        if (claimText === '') {
            throw new Error('String must not be empty!');
        }
        var claimCollection = new ClaimCollection_1.default();
        var claims = this.splitString(claimText);
        this.generateClaims(claimCollection, claims);
        return claimCollection;
    };
    //Split string against pattern
    //Returns new array of strings
    TextParser.prototype.splitString = function (text) {
        var arrOfClaims = text.replace(/\d{1,}\.\s/, '').split(/\n\d{1,}\.\s/);
        return arrOfClaims;
    };
    //Execute given statement on each distinct array element (object)
    //Returns array of objects
    TextParser.prototype.generateClaims = function (collection, claims) {
        var claimOrderNum = 1;
        for (var _i = 0, claims_1 = claims; _i < claims_1.length; _i++) {
            var claim = claims_1[_i];
            var body = claim.replace(/(\r\n|\n|\r|)/gm, '');
            collection.addClaims(new Claim_1.default(claimOrderNum, body, []));
            claimOrderNum++;
        }
        for (var _a = 0, _b = collection.claims; _a < _b.length; _a++) {
            var collectedClaim = _b[_a];
            for (var _c = 0, claims_2 = claims; _c < claims_2.length; _c++) {
                var claim = claims_2[_c];
                // var claimOrderNumber = new RegExp(`${claimOrder}`)
                // var claimPattern = new RegExp(`${pattern}`)*
                //uzmi redni broj claima
                //claim.indexof(claim broj ,)
                //ukoliko postoji ubaci ga u collectedClaim
                //.match(/\d{1,}\,\s/)
                //collectedClaim.subClaims.push(claim)
                //console.log('AAAAAAAAAAAAAA' + claim)
                if (claim.indexOf("claim " + collectedClaim.order + ","))
                    collectedClaim.subClaims.push(claim);
                console.log('AAAAAAAAAAAAAA' + claim);
            }
        }
    };
    return TextParser;
}());
exports.default = TextParser;
//claim space num, space
//# sourceMappingURL=TextParser.js.map