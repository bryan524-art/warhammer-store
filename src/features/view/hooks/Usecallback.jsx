import * as React from 'react'
import { useState, useCallback } from 'react';

export const Usecallback = () => {

const Button = React.memo(({ onClick, text }) => {
  console.log(`Escuadrón ${text} renderizado`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component WITH useCallback
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
    alert("¡Los Space Marines llegan al campo de batalla!");
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
    alert("¡WAAAGH! Los Orkos atacan!");
  }, []);

  console.log("El Imperio está organizando tropas");

  return (
    <div>
      <h2>Ejército del Imperio</h2>

      <p>Escuadrones de Space Marines: {count1}</p>
      <p>Hordas de Orkos: {count2}</p>

      <Button onClick={handleClick1} text="Invocar Space Marines" />
      <Button onClick={handleClick2} text="Llamar Waaagh Orko" />
    </div>
  );
}

return <WithCallbackExample />;
}