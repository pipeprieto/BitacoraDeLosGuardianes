import React, { Component } from 'react'
import axios from 'axios'
import Card from "../../components/Card/Card.js";

export default class HeroList extends Component {
    constructor(){
        this.state = {
          heroes:[]
        }
    }
    getHeroesList = async()=>{
      try {
       let response = await axios.get(""); 
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
        <Card imagen={hero.imagen}
        nombre={hero.nombre}
        edad={hero.edad}
        habilidades= {hero.habilidades}
        debilidades={hero.debilidades}/>
      })}</>
    )
  }
}
