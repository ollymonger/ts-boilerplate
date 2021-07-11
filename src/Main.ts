import { Text } from './utils/getText';

export class Mainclass {
    private static text: string;

    constructor(public _text: string) {
        Mainclass.text = _text;
        console.log(Mainclass.text);
    }

    public static get() {
        return `${Mainclass.text}`;
    }


    public static set(_text: string) {
        return Mainclass.text = _text;
    }

}
