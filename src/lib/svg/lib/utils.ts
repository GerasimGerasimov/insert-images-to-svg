//Библиотека полезных функций

export function  changeSingleQuotesToDouble(attr: string): any {
    const str: any = [].map.call(attr, c => c!=='\''? c : '\"').join('')
    let res = JSON.parse(str);
    return res;
  }
//Получение содержимого файла (синхронно)
//fileName - название файла (на сервере) с указанием пути
//Возвращает:
//  1) строку с содержимым файла 
//  2) undefine - если файл по какой-то причине не загрузился
async function getTextByURL (url: string) {
    try {
        const res  = await fetch(url)
        const text = await res.text();
        return text;
    } catch (e) {
        console.log('getObjectURL:', e)
        return ''
    }
}

async function blobToDataURL(blob: any) {
    return new Promise<any>((resolve, reject) => {
        var reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });
}

export async function getObjectURL(url: string) {
    const text: string = await getTextByURL(url)
    var DataURL = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(text);
    //const DataURL = await blobToDataURL(blob);
    return DataURL;
    //return window.URL.createObjectURL(blob)
}

//преобоазует строку в XML-объект (в зависимости от ключа)
//если key = 'image/svg+xml' получаю SVG-объект
export function strToXML(source: string, key: any): any {
    var parser = new DOMParser();
    var content: any = parser.parseFromString(source, key);
    return content;//да, документ получил. Можно парсить    
}