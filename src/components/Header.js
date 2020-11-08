import React from "react";

// Un composant React c'est une fonction

const Header = (props) => {
  // console.log(props);

  // JSX = HTML + JS
  // Pour faire appel à une variable JS à l'intérieur de balises, je mets des accolades
  return (
    <>
      <header>
        <h1>The Job Board</h1>
      </header>
    </>
  );
};

export default Header;
