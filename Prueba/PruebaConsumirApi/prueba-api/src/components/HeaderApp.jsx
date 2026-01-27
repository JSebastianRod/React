
export function HeaderApp() {
  return (
    <>
      <ul className="characters">
        <li key={characters?.id}>
          <img
            className="imgPerso"
            src={characters?.image}
            alt={`Imagen del personaje  ${characters?.name}`}
          />
          <div className="character-data">
            <h3>{characters?.name}</h3>
            <h4>
              {characters?.status} - {characters?.species}
            </h4>
            <p>Last known location</p>
            <p>{characters?.gender}</p>
          </div>
        </li>
      </ul>
    </>
  );
}
