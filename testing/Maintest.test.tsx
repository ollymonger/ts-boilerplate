import { Mainclass } from "../src/main"
import { Text } from "../src/utils/getText";


describe('basictests', () => {
    new Mainclass("Initialised");
    let text = new Text();
    test('expect mainclass.text to be: Initialised', () => {

        let result = text.getTextFromMain();

        expect(result).toBe("Initialised");

    })

    test('expect mainclass.text to be: newString', () => {

        let post = text.setMainText(`newString`);
        let result = new Text().getTextFromMain();

        expect(result).toEqual(`newString`);

    })
})
