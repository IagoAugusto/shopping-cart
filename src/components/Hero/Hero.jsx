import Slider from "../Slider/Slider";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <Slider arrows={false}>
        <img src={hero} />
        <img src={hero} />
      </Slider>
    </div>
  );
}
