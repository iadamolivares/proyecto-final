import angle1 from "../assets/angle.png";
import angle2 from "../assets/angleup.png"
const LetterDensity = ({ visibleLetters, showAll, setShowAll }) => {
  return (
    <>
      {
        <section className="percentage">
          <h2>Cantidad de letras</h2>
          <article>
            {visibleLetters.map((letter) => (
              <div className="letter-row" key={letter.letterName}>
                <span className="letter">
                  {letter.letterName.toUpperCase()}
                </span>

                <meter min="0" max="100" value={letter.percentage} />

                <span className="progress">
                  {letter.amount} ({letter.percentage.toFixed(1)}%)
                </span>
              </div>
            ))}
          </article>
            <button className="btnsm" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <>
                  Ver menos
                  <img src={angle2} alt="Ver menos" />
                </>
              ) : (
                <>
                  Ver todos
                  <img src={angle1} alt="Ver todos" />
                </>
              )}
            </button>
        </section>
      }
    </>
  );
};

export { LetterDensity };
