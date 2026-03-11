import * as React from 'react'
import { useReducer } from 'react';
        
export const Usereducer = () => {

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "Imperio de la Humanidad",
  },
  {
    id: 2,
    score: 0,
    name: "Orkos",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

function Score() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      <h2>Poder Militar de las Facciones</h2>

      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={`Reforzar ${player.name}`}
            />
            {" "} Poder: {player.score}
          </label>
        </div>
      ))}
    </>
  );
}

return <Score />;
}