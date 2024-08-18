import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
    const [fact, setFact] = useState();
  
    const refreshFact = () => {
      getRandomFact().then((newFact) => setFact(newFact));
    }
    //Recuperar el dato curioso cada vez que se recarga la pagina
    useEffect(() => refreshFact, []);
  
    return { fact, refreshFact }
  }