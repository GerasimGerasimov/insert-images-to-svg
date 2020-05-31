import {strToXML, getObjectURL} from './utils'

export class TSvgContents {
    public aContents: Map<string, any> = new Map();//массив картинок с их ObjectURL

    get Contents(){
        return this.aContents;
    }

    public async getImg (key: string, path: string = '') {//key-название картинки, path-имя файла с путём до неё
        const content: any = this.aContents.get(key);
        if (content) return content;
        var ObjectURL: any = await this.loadImg(key, path);
        if (ObjectURL!== undefined) {
            this.aContents.set(key, ObjectURL);//вставляю в хранилище
            return ObjectURL;
        }
    }

    private async loadImg (key: string, path: string) {
        var ObjectURL: any = await getObjectURL(path);
        return ObjectURL;
    }

}
