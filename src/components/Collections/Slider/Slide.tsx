"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./Style.css";

const Slide = () => {
  const slideData = [
    {
      id: 1,
      name: "Take Flight Collection",
      title: "Las Vegas Aviators",
      date: "OCT 15 | SUN | 4:30 PM",
      des: "Las Vegas Ballpark, Las Vegas, Nevada",
      img: "/slide-1.jpeg",
    },
    {
      id: 2,
      name: "Orange Collection",
      title: "Sacramento River Cats",
      date: "OCT 15 | SUN | 4:30 PM",
      des: "Sutter Health Park, Sacramento, California",
      img: "/slide-2.jpeg",
    },
    {
      id: 3,
      name: "Take Flight Collection",
      title: "Las Vegas Aviators",
      date: "OCT 15 | SUN | 4:30 PM",
      des: "Las Vegas Ballpark, Las Vegas, Nevada",
      img: "/slide-1.jpeg",
    },
    {
      id: 4,
      name: "Orange Collection",
      title: "Sacramento River Cats",
      date: "OCT 15 | SUN | 4:30 PM",
      des: "Sutter Health Park, Sacramento, California",
      img: "/slide-2.jpeg",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {slideData.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <div className="p-3 pb-4 relative flex-1 border-b-2 border-dashed bg-white dark:bg-zinc-800">
              <Image
                width={1000}
                className="object-cover"
                height={1000}
                src={item.img}
                alt={item.img}
              />
              <div className="w-6 h-6  dark:bg-zinc-900 bg-gray-300 rounded-full absolute -bottom-3 -left-5"></div>
              <div className="w-6 h-6 dark:bg-zinc-900 bg-gray-300 rounded-full absolute -bottom-3 -right-5"></div>
            </div>
            <div className="p-3 flex-1 flex flex-col gap-3 bg-white dark:bg-zinc-800 text-center">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <h3 className="text-xl">{item.date}</h3>
              <p>{item.des}</p>
              <div className="bg-zinc-950 p-2 flex-1 text-white">
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
