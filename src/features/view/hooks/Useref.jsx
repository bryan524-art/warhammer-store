import * as React from 'react'
import { useState, useRef, useEffect } from 'react';
        
export const Useref = () => {

const [inputValue, setInputValue] = useState("");
const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return (
    <>
      <p>Escribe el nombre de un capítulo del Imperio:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Reportes del Mechanicus recibidos: {count.current}</h1>
    </>
  );
}