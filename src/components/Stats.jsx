import card1 from "../assets/card-orange.png"
import card2 from "../assets/card-tomato.png"
import card3 from "../assets/card-violet.png"

const Stats = ({ characters, words, sentences }) => {
  return (
    <section className="stats">

        <div className="totalCharacters">
          <span>{characters}</span>
          <p>Cantidad de caracteres: </p>
        </div>

        <div className="wordCount">
          <span>{words}</span> 
          <p>Cantidad de palabras:</p>
        </div>

        <div className="sentenceCount">
          <span>{sentences}</span>
          <p>Cantidad de oraciones: </p>
        </div>

    
    </section>
  );
};

export { Stats };
