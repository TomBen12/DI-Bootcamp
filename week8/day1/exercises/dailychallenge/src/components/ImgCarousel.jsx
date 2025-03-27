import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="/hongkong.jpg" alt="Hong Kong" />
        <p className="legend">Hong Kong</p>
      </div>
      <div>
        <img src="/japan.webp" alt="Japan" />
        <p className="legend">Japan</p>
      </div>
      <div>
        <img src="/macao.webp" alt="Macao" />
        <p className="legend">Macao</p>
      </div>
      <div>
        <img src="/vegas.webp" alt="Las Vegas" />
        <p className="legend">Las Vegas</p>
      </div>
    </Carousel>
  );
};

export default ImgCarousel;
