import React, {Component} from "react";
import axios from "axios";
import { server } from './helper'

class CarsList extends Component {

     constructor(props) {
         super(props)

         this.state = {
            sellcars: []
         }
     }

    componentDidMount(){
        axios.get(`${server}/api/sellcar`)
        .then(response => {
            this.setState({
                sellcars: response.data.data
            })
            // console.log(response.data.data)
        })
    }

    render() {
        // eslint-disable-next-line no-unused-vars
        const {sellcars} = this.state
        console.log(sellcars)
        return (
            <div>
                <h1>List of Cars</h1>
                {
                    sellcars.map(sellcar => <div key={sellcar._id}>{sellcar.Make} {sellcar.Model} {sellcar.Trim} {sellcar.Year}</div>)
                }
            </div>
        )
    }
}


export default CarsList;