import { node } from "prop-types";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider({ children, ...props }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props,
  };
  return <SlickSlider {...settings}>{children}</SlickSlider>;
}

Slider.propTypes = {
  children: node,
};
