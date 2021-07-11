"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../src/main");
var getText_1 = require("../src/utils/getText");
describe('basictests', function () {
    new main_1.Mainclass("Initialised");
    var text = new getText_1.Text();
    test('expect mainclass.text to be: Initialised', function () {
        var result = text.getTextFromMain();
        expect(result).toBe("Initialised");
    });
    test('expect mainclass.text to be: newString', function () {
        var post = text.setMainText("newString");
        var result = new getText_1.Text().getTextFromMain();
        expect(result).toEqual("newString");
    });
});
