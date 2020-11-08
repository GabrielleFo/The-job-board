import React from "react";

// Un composant React c'est une fonction

const Boite = (props) => {
  // console.log(props);

  // JSX = HTML + JS
  // Pour faire appel à une variable JS à l'intérieur de balises, je mets des accolades
  return (
    <>
      <div className={props.border}>
        <h2>{props.title}</h2>
        <p>{props.contrat}</p>
        <p>{props.pays}</p>
        <p>{props.ville}</p>
      </div>
    </>
  );
};

export default Boite;
