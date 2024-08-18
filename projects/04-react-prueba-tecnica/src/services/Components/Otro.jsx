import { useCatImage } from "../../hooks/useCatImages";

export function Otro() {
  const { imgUrl } = useCatImage({ fact: 'Random Fact' });

  return (
    <>
        {imgUrl && <img src={imgUrl}/>}
    </>
  )
}