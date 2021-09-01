"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.read = function (filePath) {
        return fs.readFileSync(filePath, { encoding: 'utf-8' });
    };
    return FileReader;
}());
exports.default = FileReader;
//# sourceMappingURL=FileReader.js.map