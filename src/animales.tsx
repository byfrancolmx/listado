import { useState } from "react";
import "./css/App.css";

function Animales() {
  const [animalesList, setAnimalesList] = useState([
    {
      name: "tiburon",
      type: "agua",
    },
    {
      name: "merluza",
      type: "agua",
    },
    {
      name: "dorado",
      type: "agua",
    },
    {
      name: "caballito de mar",
      type: "agua",
    },
    {
      name: "salmon",
      type: "agua",
    },
    {
      name: "pinguino",
      type: "agua y tierra",
    },
    {
      name: "caballo",
      type: "tierra",
    },
    {
      name: "perro",
      type: "tierra",
    },
    {
      name: "gato",
      type: "tierra",
    },
    {
      name: "raton",
      type: "tierra",
    },
    {
      name: "aguila",
      type: "aire",
    },
    {
      name: "ornero",
      type: "aire",
    },
    {
      name: "tero",
      type: "aire",
    },
    {
      name: "colibri",
      type: "aire",
    },
    {
      name: "abeja",
      type: "aire",
    },
  ]);

  const [animalListOriginal, setAnimalListOriginal] = useState([
    ...animalesList,
  ]);
  console.log(animalListOriginal);

  function handleFilterForType(e: any, type: string) {
    setAnimalesList(animalListOriginal);
    console.log(animalesList);
    setTimeout(() => {
      if (e.target.checked) {
        const result = animalesList.filter((animal) => animal.type === type);
        setAnimalesList(result);
      }
    }, 500);
  }

  return (
    <>
      <header>
        <nav>
          <input
            type="radio"
            name="gugu"
            onChange={(e) => handleFilterForType(e, "tierra")}
          />
          <label htmlFor="">animales de tierra</label>
          <input
            type="radio"
            name="gugu"
            onChange={(e) => handleFilterForType(e, "aire")}
          />
          <label htmlFor="">animales de aire</label>
          <input
            type="radio"
            name="gugu"
            onChange={(e) => handleFilterForType(e, "agua")}
          />
          <label htmlFor="">animales de agua</label>
          {animalesList.map((animal: any) => {
            return <div>{animal.name}</div>;
          })}
        </nav>
      </header>
    </>
  );
}

export default Animales;
