import { TSvgContents } from "./lib/svgcontent";

export const svgContents = new TSvgContents();

export function loadSVGImages() {
    //загрузить SVG-шки выключателя
    svgContents.getImg('switchNoLink', '/assets/svg/switchNoLink.svg');    
    svgContents.getImg('switchOn'   ,  '/assets/svg/switchOn.svg');
    svgContents.getImg('switchOff'  ,  '/assets/svg/switchOff.svg');
    svgContents.aContents.forEach((value, key) => {
        console.log(`${key} : ${value}`)
      })
};