import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ImageCarousel = () => {
  return (
    <>
      <h2>Image Carousel</h2>
      <div style={{width:"300px"}}>
        <Carousel>
          <div>
            <img src='images/1.png' />
            <p className='legend'>Legend 1</p>
          </div>
          <div>
            <img src='images/2.png' />
            <p className='legend'>Legend 2</p>
          </div>
          <div>
            <img src='images/3.png' />
            <p className='legend'>Legend 3</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default ImageCarousel;
