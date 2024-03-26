"use client";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Sports: React.FC = () => {
  const [themeLight, setThemeLight] = useState(true);
  const [show, setShow] = useState(false);

  const players = [
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
  ];
  if (themeLight) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  return (
    <main className="mx-16 my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold border-b-4 border-blue-400">Sports</h1>

        <Switch
          defaultSelected
          onClick={() => setThemeLight(!themeLight)}
          size="lg"
          color="default"
          className="-mr-2"
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
          <div className="flex gap-3 flex-1 justify-between items-center">
            {players.map((player) => (
              <h1 key={player.id}>{player.title}</h1>
            ))}
          </div>
          <div className="flex flex-1 lg:max-w-[20rem] bg-red-600 flex-col p-2 items-center">
            <div>
              <Image
                width={1000}
                height={1000}
                src="/adds.jpeg"
                alt="/adds.jpeg"
              />
            </div>
            <h1>Advertisement title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex mt-5 justify-center items-center">
          <Button
            onClick={() => setShow(!show)}
            className="bg-sky-400 text-white font-semibold"
            radius="sm"
          >
            See More
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Sports;
