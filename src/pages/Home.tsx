import React, {Component} from 'react'
import MotorSVG from  '../assets/vteg.svg'
import {TSVGTemplateElement, loadSVGTemplateElements} from '../lib/svg/lib/svggroup'
import {TSVGComponent, getTags, drawComponents} from '../lib/svg/lib/components/TSVGComponent'
import { createSVGComponents } from '../lib/svg/lib/components/svgCompFactory'
import { svgContents } from '../lib/svg/svgloadimages'
import { getObjectURL } from '../lib/svg/lib/utils'

interface IState {
  count: number;
}

export default class Home extends Component <{}, IState> {
  private svgComponents: Array<TSVGComponent> = [];
  private handlers: Array<any> = [];

  constructor (props: any){
    super(props)
    this.state = {
      count: 0
    };
  }

  handleImageLoaded() {
    console.log('svg загружен');
  }

  handleClick(){
    svgContents.aContents.forEach((value, key) => {
      console.log(`${key} : ${value}`)
    })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {

    const ImagesList = Array.from(svgContents.Contents.entries(),
      ([key, item]) => {
          return (
            <li key={key}>
              <p>{key + this.state.count}</p>
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