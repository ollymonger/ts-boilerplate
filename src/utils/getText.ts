import { Mainclass } from '../Main';

export class Text {

    getTextFromMain() {
        Mainclass.get();
        return;
    }

    setMainText(_text: string) {
        Mainclass.set(_text);
        return;
    }
}
