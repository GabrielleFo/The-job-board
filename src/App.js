import React from "react";
import "./App.css";

//import du composant Header
import Header from "./components/Header";
import Footer from "./components/Footer";
import Boite from "./components/Boite";
function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Boite
          title="Full time Sales Associate"
          contrat="CDI"
          pays="Australie"
          ville="Sydney"
          border="styleBorder"
        />
        <Boite
          title="Agent de Sécurité "
          contrat="CDI"
          pays="France"
          ville="Pantin"
          border="styleBorder-red"
        />
        <Boite
          title="Responsable d'atelier"
          contrat="CDD"
          pays="France"
          ville="Paris"
          border="styleBorder-blue"
        />
        <Boite
          title="Chef de Projets"
          contrat="CDD"
          pays="France"
          ville="Paris"
          border="styleBorder-yellow"
        />
        <Boite
          title="Développeur React.js"
          contrat="CDD"
          pays="France"
          ville="Paris"
          border="styleBorder"
        />
        <Boite
          title="Sales Associate Stockholm"
          contrat="CDI"
          pays="Suede"
          ville="Stockholm"
          border="styleBorder-red"
        />
        <Boite
          title="Vendeur/se - Crans Montana"
          contrat="CDI"
          pays="Suisse"
          ville="Cran-Montana"
          border="styleBorder-blue"
        />
        <Boite
          title="CRM Data Quality"
          contrat="CDI"
          pays="USA"
          ville="New York"
          border="styleBorder-yellow"
        />
        <Boite
          title="Infirmier (H/F)"
          contrat="CDI"
          pays="France"
          ville="Pantin"
          border="styleBorder"
        />
      </div>

      <Footer />
    </>
  );
}
export default App;
