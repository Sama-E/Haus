import "/src/assets/css/components/slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({children, slidesToShow, arrowsScroll}) => {
  return (
    <div className="slide">
      <div className="container">
      <Slider slidesToShow={5} arrowsScroll={5}>
        {children}
      </Slider>
      </div>
    </div>
  )
}

export default Slide;