import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class SellDrop extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      _id: "",
      make: '',
      mode: '',
      data: []
    }
  }

 async getOptions(){
    const res = await axios.get('http://localhost:8080/api/sellcar')
    const data = res.data.data

    let lookup = {};
    let options = [];

    for (let item, i = 0; item = data[i++];) {
      let make = item.Make;

      if (!(make in lookup)) {
        lookup[make] = 1;
        options.push({
          "value" : item._id,
          "label" : item.Make
        });
      }
    }

    // const options = data.map(d => ({
    //   "value" : d._id,
    //   "label" : d.Make
    // }))
    

    this.setState({selectOptions: options, data})

  }

  handleMakeChange(e){
    const filteredMakeData = this.state.data.filter(value => {
      return value.Make == e.label
    });
    // console.log(filteredData);

    let lookup = {};
    let options = [];

    for (let item, i = 0; item = filteredMakeData[i++];) {
      let model = item.Model;

      if (!(model in lookup)) {
        lookup[model] = 1;
        options.push({
          "value" : item._id,
          "label" : item.Model
        });
      }
    }
    console.log(options);

   this.setState({_id:e.value, Make:e.label})
  }


  componentDidMount(){
      this.getOptions()
  }

  render() {
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleMakeChange.bind(this)} />
      </div>
    )
  }
}