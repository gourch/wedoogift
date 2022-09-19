export class Message {
    type: string;
    content: string;

    constructor(content: string, type?: string) {
        this.type = type || 'information';
        this.content = content;
    }

}
