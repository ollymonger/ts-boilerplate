

class Mainclass {
    public text: string;

    constructor(public _text?: string) {
        this.text = _text;
    }

    getText() {
        console.log(`Text is: ${this.text}`);
    }
}


new Mainclass("Init");
