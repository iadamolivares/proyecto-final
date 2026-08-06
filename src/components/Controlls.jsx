const Controlls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValue,
  readingTime,
}) => {
  return (
    <div className="checkboxcomponent">
      <label className="exclude">
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={() => handleExcludeSpaces(!excludeSpaces)}
        />
        Excluir espacios
      </label>
      <label className="character">
        <input
          type="checkbox"
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
        />
        Limite de caracteres
      </label>
      <input
        className={`inputNumber ${limitCharacter ? "show" : "hide"}`}
        type="number"
        value={limitValue}
        onChange={(e) => handleLimitValue(e.target.value)}
      />
      <div className="readingTimeComp">
        <p>Tiempo de lectura: ~{readingTime} min</p>
      </div>
    </div>
  );
};

export { Controlls };
