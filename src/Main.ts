import { Text } from './utils/getText';

export class Mainclass {

    private static text: string;

    constructor(public _text: string) {
        Mainclass.text = _text;
    }

    public static get() {
        return `${Mainclass.text}`;
    }


    public static set(_text: string) {
        return Mainclass.text = _text;
    }

}


let Main = new Mainclass("Init");

let text = new Text();

console.log(text.getTextFromMain());

text.setMainText("Test test test!")

console.log(text.getTextFromMain());
