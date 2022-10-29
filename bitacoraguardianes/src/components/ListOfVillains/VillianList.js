import React, { Component } from 'react'
import Card from '../Card/Card';

export default class VillianList extends Component {
  constructor() {
    this.state = {
      villanos: [],
    };
    this.url = "";
  }
  getHeroesList = async () => {
    try {
      let response = await axios.get(`${this.url}/api/v1/Supers`);
      this.setState(response);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getHeroesList();
  }
  render() {
    return(
        <>
        {this.villanos.map((villano)=>{
            <Card/>
        })}
        </>
    );
  }
}
