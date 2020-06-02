import React, {Component} from 'react'
import MotorSVG from  '../assets/vteg.svg'
import {TSVGTemplateElement, loadSVGTemplateElements} from '../lib/svg/lib/svggroup'
import {TSVGComponent, getTags, drawComponents} from '../lib/svg/lib/components/TSVGComponent'
import { createSVGComponents } from '../lib/svg/lib/components/svgCompFactory'
import { svgContents } from '../lib/svg/svgloadimages'
import { getObjectURL } from '../lib/svg/lib/utils'
import { DataSet } from '../dataset/dataset'

interface IState {
  count: number;
}

export default class Home extends Component <{}, IState> {
  private svgComponents: Array<TSVGComponent> = [];
  private DataSet: Map <string, any> = new Map();
  private handlers: Array<any> = [];
  private timer: any;

  constructor (props: any){
    super(props)
    this.state = {
      count: 0
    };
    for (let key in DataSet){
      const value:any = DataSet[key];
      this.DataSet.set(key, value)
    }

    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  private putValuesToSVGTemplate(changed: any){
    this.DataSet.forEach((item, key)=>{
      console.log(item.value);
    })
    drawComponents(this.svgComponents, this.getData.bind(this));
  }
 
  private tick(){
    console.log('tick');
    this.DataSet.forEach((item, key)=>{
      let value = (item.value === '1')? '0' : "1";
      this.DataSet.set(key, {value})
    })
    this.putValuesToSVGTemplate(true);
  }

  private getData(tag: string, properties: Array<string>): any{
    const item: any = this.DataSet.get(tag);
    return item
  }

  private createAutorunInitiatorValues(){
    //запустить автообновление при изменении времени появления новой инфы
    //const changes: Array<any> = devicesInfoStore.getObservableValues(getTags(this.svgComponents))
    //this.handlers = changes.map(item => autorun(()=>{this.putValuesToSVGTemplate(item.time)}))
  }

  handleImageLoaded() {
    console.log('svg загружен');
    const elements: Array<TSVGTemplateElement> = loadSVGTemplateElements('vteg');
    this.svgComponents = createSVGComponents(elements)
    //this.createAutorunInitiatorValues();
  }

  handleClick(){
    /*
    svgContents.aContents.forEach((value, key) => {
      console.log(`${key} : ${value}`)
    })*/
    this.putValuesToSVGTemplate(true);
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    //              <p>{key + this.state.count}</p>
    const ImagesList = Array.from(svgContents.Contents.entries(),
      ([key, item]) => {
          return (
            <li key={key}>
              <img src={item} alt=""/>
            </li>
          )
    });

    return(
      <>
        <h1>Home</h1>
    <button onClick={()=>this.handleClick()}>Button {this.state.count}</button>
        <object className="mt-1" id="vteg" type="image/svg+xml"
            data={MotorSVG}
            onLoad={()=>{this.handleImageLoaded()}}
            >
        </object>
        <ul>{ImagesList}</ul>
      </>
    )
  }
}