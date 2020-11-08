import React from "react";

// Un composant React c'est une fonction

const Footer = (props) => {
  // console.log(props);

  // JSX = HTML + JS
  // Pour faire appel à une variable JS à l'intérieur de balises, je mets des accolades
  return (
    <>
      <footer>
        <p>Made with react at the reacteur By Gaby</p>
      </footer>
    </>
  );
};

export default Footer;
