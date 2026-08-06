import angle1 from "../assets/angle.png"
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
              {showAll ? "Ver menos 🔼" : "Ver todos 🔽"}
            </button>
        </section>
      }
    </>
  );
};

export { LetterDensity };
