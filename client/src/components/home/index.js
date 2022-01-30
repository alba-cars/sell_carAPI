import React, { Component} from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import Nav from '../core/Nav'
import { server } from './helper'


export default class SellDrop extends Component { 
 

  constructor(props){
    super(props)
    this.state = {
      selectMakeOptions : [],
      selectModelOptions : [],
      selectTrimOptions : [],
      selectYearOptions : [],
      odmeter: '',
      make: '',
      model: '',
      trim: '',
      spec: '',
      year: '',
      fromPrice: '',
      toPrice: '',
      newFrom: '',
      newTo: '',
      data: []
    }
  }

 async getOptions(){
    const res = await axios.get(`${server}/api/sellcar`)
    const data = res.data.data
    // console.log(data)

    let lookup = {};
    let options = [];

    for (let item, i = 0; item = data[i++];) {
      let make = item.Make;

      if (!(make in lookup)) {
        lookup[make] = 1;
        options.push({
          "value" : item._id,
          "label" : make
        });
      }
    }

    this.setState({selectMakeOptions: options, data})

  }

  handleMakeChange(e){
    const filteredMakeData = this.state.data.filter(value => {
      return value.Make == e.label
    });

    let lookup = {};
    let options = [];

    for (let item, i = 0; item = filteredMakeData[i++];) {
      let model = item.Model;

      if (!(model in lookup)) {
        lookup[model] = 1;
        options.push({
          "value" : item._id,
          "label" : model
        });
      }
    }
    // console.log(options);

    this.setState({selectModelOptions: options, make: e.label})
  }

  handleModelChange(e){
    const filteredModelData = this.state.data.filter(value => {
      return value.Make == this.state.make && value.Model == e.label
    });

    let lookup = {};
    let options = [];

    for (let item, i = 0; item = filteredModelData[i++];) {
      let trim = item.Trim;

      if (!(trim in lookup)) {
        lookup[trim] = 1;
        options.push({
          "value" : item._id,
          "label" : trim
        });
      }
    }
    // console.log(options);

    this.setState({selectTrimOptions: options, model: e.label})
  }

  handleTrimChange(e){
    const filteredTrimData = this.state.data.filter(value => {
      return value.Make == this.state.make && value.Model == this.state.model && value.Trim == e.label
    });

    let lookup = {};
    let options = [];

    for (let item, i = 0; item = filteredTrimData[i++];) {
      let year = item.Year;

      if (!(year in lookup)) {
        lookup[year] = 1;
        options.push({
          "value" : item._id,
          "label" : year
        });
      }
    }
    // console.log(options);

    this.setState({selectYearOptions: options, trim: e.label})
  }

  handleYearChange(e){
    const finalItem = this.state.data.find(value => {
      return value.Make == this.state.make && value.Model == this.state.model && value.Trim == this.state.trim && value.Year == e.label
    });
    this.setState({year: e.label, fromPrice: finalItem['Average From'], toPrice: finalItem.To})
  }

   setOdmeter = (e) =>  {this.setState({odmeter: e.target.value })}

    clickMe = (e) => {
        e.preventDefault()
        console.log("first od",this.state.odmeter)
        let finalFrom =  parseInt(this.state.fromPrice)
        let finalto = parseInt(this.state.toPrice)
        let newOd = parseInt(this.state.odmeter)

        if(newOd <= 25000){ // price is plus 15%
          this.setState({newFrom: (finalFrom/100)*15 + finalFrom, newTo: (finalto/100)*15 + finalto})
            finalFrom =  (finalFrom/100)*15 + finalFrom
            finalto =  (finalto/100)*15 + finalto
            console.log({
                form:finalFrom,
                to: finalto
            })
            
        }else if(newOd >= 25000 && newOd <= 80000){  // price is plus 0%
            this.setState({newFrom: finalFrom, newTo: finalto})
        }else if(newOd >= 80000 && newOd <= 120000){ // price is manus 30%
          finalFrom =  finalFrom - (finalFrom/100)*30 
          finalto =  finalto - (finalto/100)*30

          this.setState({newFrom: finalFrom - (finalFrom/100)*30, newTo: finalto - (finalto/100)*30})
        }else if(newOd >= 120000 && newOd <= 200000){
          finalFrom =  finalFrom - (finalFrom/100)*45 
          finalto =  finalto - (finalto/100)*45

          this.setState({newFrom: finalFrom - (finalFrom/100)*45, newTo: finalto - (finalto/100)*45})

    }else{
    finalFrom =  0
    finalto =  0

    this.setState({newFrom: 0, newTo: 0})
        }
    }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    return (
      <>
        <div className='container-fluid'>
        <Nav />
            <div className='row' style={{height:'150px'}}>
              
            </div>
            <div className='row' >
                <div className='col'></div>
                
                <div className='col card card-danger' >
                    <h3 className='card-header display-6'>What Do you Want? </h3>
                    <div className='card-body'>
                
                            <Form>
                                <Select options={this.state.selectMakeOptions} onChange={this.handleMakeChange.bind(this)} />
                                <Select options={this.state.selectModelOptions} onChange={this.handleModelChange.bind(this)} />
                                <Select options={this.state.selectTrimOptions} onChange={this.handleTrimChange.bind(this)} />
                                <Select options={this.state.selectYearOptions} onChange={this.handleYearChange.bind(this)} />
                                <select className='form-control form-control-lg'>
                                  <option value={''}>Select Type</option>
                                  <option value={'gcc'}>GCC</option>
                                  <option value={'american'}>American</option>
                                </select>
                                <input 
                                type='number' 
                                placeholder='Enter od meter' 
                                className='form-control form-control-lg' 
                                odmeter={this.state.value}
                                onChange={this.setOdmeter}/>
                                {this.state.fromPrice > 0 ? <p>Before OD Meter: From: {this.state.fromPrice} - To: {this.state.toPrice}</p> : ''} 
                                {this.state.newFrom > 0 ? <h4 className='text-center display-5'>After OD Meter<br /> From: {this.state.newFrom} - To: {this.state.newTo}</h4> : ''} 
                                {this.state.odmeter > 300000 ? <h4 className='text-center display-5'> Please contact Albacars via:<br /> albacars@albacars.ae</h4> : ''} 
                                <br />
                                <button className='btn btn-lg btn-danger col-lg-12' onClick={this.clickMe}>Find Out</button>
                            </Form>
                    </div>               
                </div>

                <div className='col'></div>
            </div>
            
        </div>
      </>
    )
  }
}