import Slide from "./Slider/Slide";


const Collections = () => {
  return (
    <div className="my-12">
      <div className="text-center space-y-3">
        <h1 className="md:text-5xl text-4xl font-extrabold">
          Collection Spotlight
        </h1>
        <p className="px-2 md:px-10 lg:px-20">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <Slide />
    </div>
  );
};

export default Collections;
