import { useState } from "react"
import logoType from "../assets/logo.png"

const Header = ({dark, handleDarkTheme}) => {

    return (
        <header>
      <div className="logo">
      <img src={logoType} alt=""/>
      <h3>Character Counter UTN</h3>
      </div>
      <div className="powerbutton">
      <button onClick={() => handleDarkTheme(!dark)}>☀</button>
      </div>
    </header>
    )
}

export {Header}