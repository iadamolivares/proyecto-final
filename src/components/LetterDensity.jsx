const LetterDensity = ({visibleLetters, showAll, setShowAll}) => {
    return (
    <>
    {
     <section>
        <h2>Cantidad de letras</h2>
        <article>
            <button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos 🔼" : "Ver todos 🔽"}</button>
          {
            visibleLetters.map(letter => 
            <div key={letter.letterName}>
            <span>{letter.letterName.toLocaleUpperCase()}</span>
            <meter min="0" max="100" value={letter.percentage}></meter>
            <span>{letter.amount}({letter.percentage.toFixed(1)})%</span>
          </div>)
          }
        </article>
      </section>
    }
    </>
    )
}

export { LetterDensity }