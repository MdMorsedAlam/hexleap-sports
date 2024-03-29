"use client";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Player from "./Player";
interface PlayerData {
  id: number;
  title: string;
  events: number;
  sport: string;
  img: string;
}
const Sports: React.FC = () => {
  const [themeLight, setThemeLight] = useState(true);
  const [show, setShow] = useState(true);

  const players: PlayerData[] = [
    {
      id: 1,
      title: "Las Vegas Aviators",
      events: 28,
      sport: "baseball",
      img: "/player-1.jpeg",
    },
    {
      id: 2,
      title: "new jersey devils",
      events: 15,
      sport: "Ice Hockey",
      img: "/player-2.jpeg",
    },
    {
      id: 3,
      title: "Las Vegas Aviators",
      events: 28,
      sport: "baseball",
      img: "/player-3.jpeg",
    },
    {
      id: 4,
      title: "Sacramento River Cats",
      events: 48,
      sport: "baseball",
      img: "/player-4.jpeg",
    },
    {
      id: 5,
      title: "Las Vegas Aviators",
      events: 28,
      sport: "baseball",
      img: "/player-5.jpeg",
    },
    {
      id: 6,
      title: "new jersey devils",
      events: 15,
      sport: "Ice Hockey",
      img: "/player-6.jpeg",
    },
    {
      id: 7,
      title: "Las Vegas Aviators",
      events: 28,
      sport: "baseball",
      img: "/player-7.jpeg",
    },
    {
      id: 8,
      title: "Sacramento River Cats",
      events: 48,
      sport: "baseball",
      img: "/player-8.jpeg",
    },
  ];
  useEffect(() => {
    if (themeLight) {
      document.documentElement.classList.toggle("dark", false);
    } else {
      document.documentElement.classList.toggle("dark", true);
    }
  }, [themeLight]);
  return (
    <div className="mx-16 py-10">
      <div className="flex gap-5 items-center">
        <h1 className="text-xl font-bold border-b-4 border-blue-400">Sports</h1>

        <Switch
          defaultSelected
          onClick={() => setThemeLight(!themeLight)}
          size="lg"
          color="default"
          className=""
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        ></Switch>
      </div>
      <section className="my-3">
        <div className="flex justify-between gap-3">
          <div className="grid gap-3 flex-1 grid-cols-4">
            {players.slice(0, show ? 4 : players?.length).map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
          <div className="p-2 bg-gray-100 h-fit lg:max-w-[15rem] top-10 rounded-lg sticky">
            <div className="flex  border border-[#006555]  flex-col items-center">
              <div className="relative">
                <Image
                  width={1000}
                  height={1000}
                  src="/adds.jpeg"
                  alt="/adds.jpeg"
                />
                <div className="bg-black px-4 font-bold py-1 text-white absolute top-0 right-0">
                  Ad
                </div>
              </div>
              <div className="p-2">
                <h1 className="text-xl font-bold">Advertisement title</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-center items-center">
          {show ? (
            <Button
              onClick={() => setShow(!show)}
              className="bg-sky-400 text-white font-semibold"
              radius="sm"
            >
              See More
            </Button>
          ) : (
            <Button
              onClick={() => setShow(!show)}
              className="bg-sky-400 text-white font-semibold"
              radius="sm"
            >
              See Less
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Sports;
