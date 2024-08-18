import "./App.css";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImages";

//const CAT_ENDPOINT = 'https://cataas.com/'
export function App() {
  
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact });
  
  const handleClick = async () => {
    refreshFact()
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      <img
        src={`${imgUrl}`}
        alt={`Image extracted using the first three words for  ${fact}`}
      />
    </main>
  );
}

export default App;
