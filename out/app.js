"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileReader_1 = require("./classes/FileReader");
var TextParser_1 = require("./classes/TextParser");
function app() {
    var fileReader = new FileReader_1.default();
    var fileText = fileReader.read('./public/claims.txt');
    var textParserService = new TextParser_1.default();
    var fetchableFormat = JSON.stringify(textParserService.parseClaims(fileText), null, '\t');
    // console.log(fetchableFormat)
}
app();
//# sourceMappingURL=app.js.map