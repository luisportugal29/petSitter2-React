
import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-crema h-screen">
       <NavBar />
      <div className="w-1/3 my-44 ml-24">
        <h1 className="text-5xl text-verde font-bold mb-6">
          Tus mascotas en las mejores manos.
        </h1>
        <p className="text-oscuro text-lg">
          Somos una empresa con mas de 2,000 personas en el cuidado de tus mascotas
        </p>
      </div>
    </div>
  );
};

export default App;