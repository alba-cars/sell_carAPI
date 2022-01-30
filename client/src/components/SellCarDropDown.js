import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { server } from './helper'

export default class SellDrop extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectMakeOptions : [],
      selectModelOptions : [],
      selectTrimOptions : [],
      selectYearOptions : [],
      make: '',
      model: '',
      trim: '',
      year: '',
      fromPrice: '',
      toPrice: '',
      aveOdo: '',
      data: []
    }
  }

 async getOptions(){
    const res = await axios.get(`${server}/api/sellcar`)
    const data = res.data.data
    console.log(data)

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
    console.log(options);

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
    console.log(options);

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
    console.log(options);

    this.setState({selectYearOptions: options, trim: e.label})
  }

  handleYearChange(e){
    const finalItem = this.state.data.find(value => {
      return value.Make == this.state.make && value.Model == this.state.model && value.Trim == this.state.trim && value.Year == e.label
    });

    const AveOdo = this.state.data.find(value => {
      return value.Make == this.state.make && value.Model == this.state.model && value.Trim == this.state.trim && value.Year == e.label
    });


    this.setState({year: e.label, fromPrice: finalItem['Average From'], toPrice: finalItem.To});

    this.setState({year: e.label, aveOdo: AveOdo['Average Odometer']});
  }

  // handleOdoChange(e){
  //   const AveOdo = this.state.data.find(value => {
  //     return value.Make == this.state.make && value.Model == this.state.model && value.Trim == this.state.trim && value.Year == e.label
  //   });
  //   this.setState({year: e.label, aveOdo: AveOdo['Average Odometer']})
  // }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    return (
      <div>
        <Select options={this.state.selectMakeOptions} onChange={this.handleMakeChange.bind(this)} />
        <Select options={this.state.selectModelOptions} onChange={this.handleModelChange.bind(this)} />
        <Select options={this.state.selectTrimOptions} onChange={this.handleTrimChange.bind(this)} />
        <Select options={this.state.selectYearOptions} onChange={this.handleYearChange.bind(this)} />
        <p>Average Odometer: {this.state.aveOdo} KM</p>
        <p>From: {this.state.fromPrice} - To: {this.state.toPrice}</p>
      </div>
    )
  }
}