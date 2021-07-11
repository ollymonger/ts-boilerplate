import { Mainclass } from '../Main';

export class Text {

    getTextFromMain() {
        return Mainclass.get();
    }

    setMainText(_text: string) {
        return Mainclass.set(_text);;
    }
}
