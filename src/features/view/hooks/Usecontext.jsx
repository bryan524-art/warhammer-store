import * as React from 'react'
import { useState } from 'react'
        
export const Usecontext = () => {

    const [user] = useState("El Emperador");

  return (
    <>
      <h1>{`Gloria al ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Sector Imperial</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Informe del Imperio</h1>
      <h2>{`El Imperio sirve fielmente a ${user}!`}</h2>
    </>
  );
}