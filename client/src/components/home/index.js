import React, { Component, useRef, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Form, Card, Container } from 'react-bootstrap'

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
      year: '',
      fromPrice: '',
      toPrice: '',
      data: []
    }
  }

 async getOptions(){
    const res = await axios.get('http://localhost:8080/api/sellcar')
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

   setOdmeter = (e) =>  {
    this.setState({odmeter: e.target.value })

    // console.log('fromPrice',this.state.fromPrice)
    // console.log('toPrice',this.state.toPrice)

    // console.log('odmeter',this.state.odmeter)


    }

    clickMe = (e) => {
        e.preventDefault()
        console.log("first od",this.state.odmeter)
        let finalFrom =  parseInt(this.state.fromPrice)
        let finalto = parseInt(this.state.toPrice)
        let newOd = parseInt(this.state.odmeter)

        if(newOd < 25000){

            finalFrom =  (finalFrom/100)*30 + finalFrom
            finalto =  (finalto/100)*30 + finalto
            console.log({
                form:finalFrom,
                to: finalto
            })
            
        }else if(newOd > 80000){
            finalFrom =  finalFrom - (finalFrom/100)*30 
            finalto =  finalto - (finalto/100)*30

            console.log({
                form:finalFrom,
                to: finalto
            })
        }else{
            console.log(this.state.odmeter)
            console.log({
                form:finalFrom,
                to: finalto
            })
        }
    }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    return (
      <>
        <div className='container'>
            <div className='row' style={{height:'150px'}}></div>
            <div className='row' >
                <div className='col'></div>
                
                <div className='col card card-danger' >
                    <h3 className='card-header display-6'>What Do you Want?</h3>
                    <div className='card-body'>
                
                            <Form>
                                <Select options={this.state.selectMakeOptions} onChange={this.handleMakeChange.bind(this)} />
                                <Select options={this.state.selectModelOptions} onChange={this.handleModelChange.bind(this)} />
                                <Select options={this.state.selectTrimOptions} onChange={this.handleTrimChange.bind(this)} />
                                <Select options={this.state.selectYearOptions} onChange={this.handleYearChange.bind(this)} />
                                <input 
                                type='number' 
                                placeholder='Enter od meter' 
                                className='form-control form-control-lg' 
                                odmeter={this.state.value}
                                onChange={this.setOdmeter}/>
                                <p>From: {this.state.fromPrice} - To: {this.state.toPrice}</p> 

                                <br />
                                <button className='btn btn-lg btn-danger col-lg-12' onClick={this.clickMe}>Check Out</button>
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