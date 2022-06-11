import "./Testimonial.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
// import "swiper/swiper-bundle.min.css";
// swiper core styles
// import "swiper/swiper.min.css";
// modules styles
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// testimonial img
import coder1 from "../images/testimonial/coder1.jpg";
import coder2 from "../images/testimonial/coder2.jpg";
import coder3 from "../images/testimonial/coder3.jpg";
import coder4 from "../images/testimonial/coder4.jpg";
import coder5 from "../images/testimonial/coder5.jpg";
const Testimonial = () => {
  return (
    <div className="container ">
      <div className="testimonial_section p-5">
        <h2>Testimonial</h2>
        <h3>What people say about me</h3>

        <div className="text-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img className="img-fluid" src={coder1} alt="coder"></img>
              <h2>Salim Uddin</h2>
              <p>
                Form your own dedicated, top-notch software .NET dev team, put
                together by you for you. Cut costs not clients.{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={coder2} alt="coder"></img>
              <h2>Tahmid Hasan</h2>
              <p>
                Form your own dedicated, top-notch software .NET dev team, put
                together by you for you. Cut costs not clients.{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={coder3} alt="coder"></img>
              <h2>Nabil Hasan </h2>
              <p>
                Form your own dedicated, top-notch software .NET dev team, put
                together by you for you. Cut costs not clients.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={coder4} alt="coder"></img>
              <h2>Salim Uddin</h2>
              <p>
                Form your own dedicated, top-notch software .NET dev team, put
                together by you for you. Cut costs not clients.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid" src={coder5} alt="coder"></img>
              <h2>Abir Uddin</h2>
              <p>
                Form your own dedicated, top-notch software .NET dev team, put
                together by you for you. Cut costs not clients.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
