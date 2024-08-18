import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
    const [imgUrl, setImgUrl] = useState();
  
    //Recuperar la imagen cada vez que tenemos un dato curioso nuevo
    useEffect(() => {
      if (!fact) return;
      const threeWords = fact.split(" ").slice(0, 3).join(" ");
      fetch(
        `https://cataas.com/cat/says/${threeWords}?fontSize=50&fontColor=red`
      ).then((response) => {
        const { url } = response;
        setImgUrl(url);
      });
    }, [fact]);
  
    return { imgUrl };
  }