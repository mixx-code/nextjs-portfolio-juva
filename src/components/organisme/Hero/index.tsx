import CardHero from "../Card/CardHero";
import Ilustrasi from "../Ilustrasi";

const Hero = () => {
  return (
    <div id="About" className="flex justify-between xl:px-32 h-screen flex-col">
      <div className="md:mt-28 md:ml-40 mt-96 flex justify-center md:justify-normal ">
        <CardHero />
      </div>
      <div>
        <Ilustrasi className="absolute -right-20 -top-36 -z-10" />
      </div>
    </div>
  );
};

export default Hero;
