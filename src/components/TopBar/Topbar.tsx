"use client";
import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SunIcon } from "../Sports/Icons/SunIcon";
import { MoonIcon } from "../Sports/Icons/MoonIcon";

const Topbar = () => {
  const [themeLight, setThemeLight] = useState(true);
  useEffect(() => {
    if (themeLight) {
      document.documentElement.classList.toggle("dark", false);
    } else {
      document.documentElement.classList.toggle("dark", true);
    }
  }, [themeLight]);
  return (
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
  );
};

export default Topbar;
