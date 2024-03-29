import Image from "next/image";
import React from "react";
interface playerData {
  player: any;
}
const Player: React.FC<playerData> = ({ player }) => {
  return (
    <div className="flex flex-col p-2 bg-slate-100 rounded-md">
      <div className="flex-1">
        <Image
          className="h-[100%] object-cover"
          width={1000}
          height={1000}
          src={player.img}
          alt={player.img}
        />
      </div>
      <h1 className="text-lg py-3 font-medium">{player.title}</h1>
      <div className="flex justify-between bg-gray-300 items-center p-2">
        <div>
          <p className="text-sm">Total Events</p>
          <p className="font-semibold">{player.events} Events</p>
        </div>
        <div>
          <p className="text-sm">Sport</p>
          <p className="font-semibold">{player.sport}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
