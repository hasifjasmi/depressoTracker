import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function dome() {
  const audioRef = React.useRef();
  const [positions, setPositions] = useState({
    Open: Array(2)
      .fill(null)
      .map(() => ({
        number: "",
        cross: 0,
        crossKill: 0, // Count kills for 'cross'
        straight: 0,
        straightKill: 0, // Count kills for 'straight'
        feint: 0,
        feintKill: 0, // Count kills for 'feint'
      })),
    Opposite: Array(2)
      .fill(null)
      .map(() => ({
        number: "",
        cross: 0,
        crossKill: 0,
        straight: 0,
        straightKill: 0,
        feint: 0,
        feintKill: 0,
      })),
    Middle: Array(2)
      .fill(null)
      .map(() => ({
        number: "",
        cross: 0,
        crossKill: 0,
        straight: 0,
        straightKill: 0,
        feint: 0,
        feintKill: 0,
      })),
    Substituion: Array(2)
      .fill(null)
      .map(() => ({
        number: "",
        cross: 0,
        crossKill: 0,
        straight: 0,
        straightKill: 0,
        feint: 0,
        feintKill: 0,
      })),
  });

  // Handle updating the player's number
  const handleNumberChange = (position, playerIndex, value) => {
    setPositions((prevPositions) => ({
      ...prevPositions,
      [position]: prevPositions[position].map((player, index) =>
        index === playerIndex ? { ...player, number: value } : player
      ),
    }));
  };

  // Handle updating scores for a player
  const handleScoreUpdate = (position, playerIndex, category, increment) => {
    setPositions((prevPositions) => ({
      ...prevPositions,
      [position]: prevPositions[position].map((player, index) =>
        index === playerIndex
          ? { ...player, [category]: player[category] + increment }
          : player
      ),
    }));
  };

  return (
    <>
      <div className="p-2">
        <div className="px-24 flex flex-row gap-32">
          <label>Cross</label>
          <label className="pl-28">Straight</label>
          <label>Feint</label>
          <label>Quick</label>
        </div>
        {Object.entries(positions).map(([position, players]) => (
          <div key={position}>
            <h1 className="mt-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
              {position} Position
            </h1>
            <div className="flex flex-row gap-10">
              <div>
                {players.map((player, playerIndex) => (
                  <div className="flex flex-col gap-2 mt-5" key={playerIndex}>
                    <label>
                      Player {} Number:{" "}
                      <input
                        type="text"
                        value={player.number}
                        onChange={(e) =>
                          handleNumberChange(
                            position,
                            playerIndex,
                            e.target.value
                          )
                        }
                        placeholder="player number"
                      />
                    </label>

                    <div className="flex flex-row gap-10">
                      {Object.entries(player).map(([category, value]) =>
                        category !== "number" ? (
                          <div key={category}>
                            {/* <span>
                              {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                              : {value}
                            </span> */}
                            <button
                              className={`px-10 py-1 text-center ${
                                category.includes("Kill")
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                              } rounded-lg flex flex-row`}
                              onClick={() =>
                                handleScoreUpdate(
                                  position,
                                  playerIndex,
                                  category,
                                  1
                                )
                              }
                            >
                              {category.includes("Kill") ? "Kill" : "Hit"}
                            </button>
                            {/* <button
                          onClick={() =>
                            handleScoreUpdate(
                              position,
                              playerIndex,
                              category,
                              -1
                            )
                          }
                        >
                          Undo
                        </button> */}
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <div className="">Output</div>
                <div className="flex flex-col gap-16">
                  {players.map((player, playerIndex) => (
                    <div className="flex flex-row gap-5" key={playerIndex}>
                      <span>Cross kill=</span>
                      {player.crossKill}/{player.cross + player.crossKill} =
                      {isNaN(
                        player.crossKill / (player.cross + player.crossKill)
                      ) || player.cross + player.crossKill === 0
                        ? 0
                        : (
                            (player.crossKill /
                              (player.cross + player.crossKill)) *
                            100
                          ).toFixed(2)}
                      %<span>Straight kill = </span>
                      {player.straightKill}/
                      {player.straight + player.straightKill} =
                      {isNaN(
                        player.straightKill /
                          (player.straight + player.straightKill)
                      ) || player.straight + player.straightKill === 0
                        ? 0
                        : (
                            (player.straightKill /
                              (player.straight + player.straightKill)) *
                            100
                          ).toFixed(2)}
                      %
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
