import React, { Component } from 'react'
import axios from 'axios'
import Card from "../../components/Card/Card.js";
import {v4 as uuidv4} from 'uuid';

export default class HeroList extends Component {
    constructor(){
        this.state = {
          heroes:[]
        }
        this.url = "";
    }
    getHeroesList = async()=>{
      try {
       let response = await axios.get(`${this.url}/api/v1/Supers`); 
       this.setState(response);
      } catch (error) {
        console.log(error);
      }
    }

    componentDidMount(){
      this.getHeroesList();
    };


  render() {
    return (
      <>{this.heroes.map((hero)=>{
        <Card
          id={hero.super_id}
          imagen={hero.imagen}
          nombre={hero.nombre}
          edad={hero.edad}
          habilidades={hero.habilidades}
          debilidades={hero.debilidades}
        />;
      })}</>
    )
  }
}
