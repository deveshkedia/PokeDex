import "./Pokedex.css";
import Pokecard from "./Pokecard";
import React, { Component } from "react";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinning) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.total}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard exp={p.base_experience} {...p}></Pokecard>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
