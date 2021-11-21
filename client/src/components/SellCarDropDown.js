import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class SellDrop extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      _id: "",
      make: ''
    }
  }

 async getOptions(){
    const res = await axios.get('http://localhost:8080/api/sellcar')
    const data = res.data

    const options = data.data.map(d => ({
      "value" : d._id,
      "label" : d.Make
    }))
    

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({_id:e.value, Make:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    <p>You have selected <strong>{this.state.Make}</strong> whose id is <strong>{this.state._id}</strong></p>
      </div>
    )
  }
}