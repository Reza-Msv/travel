import { motion } from "framer-motion";

import img from "../../assets/travel-cover2.jpg";

import { testimonialData } from "../../constants/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const fadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        scale: 0.4,
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <>
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        style={bgImage}
        className="h-[400px] w-full"
      ></motion.div>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>

          <div className="w-full m-auto">
            <div className=" flex gap-10mt-20">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="transition-all ease-in-out duration-200"
                modules={[Pagination]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
              >
                {testimonialData.map((item) => {
                  return (
                    <SwiperSlide
                      style={{ height: "250px" }}
                      key={item.id}
                      className="my-6 mx-auto w-full"
                    >
                      <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                        <img
                          src={item.img}
                          alt=""
                          className="rounded-full block mx-auto h-28 w-28 bg-cover bg-center"
                        />
                        <h1 className="text-xl font-bold">{item.name}</h1>
                        <p className="text-gray-500 text-sm">{item.text}</p>
                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                          ,,
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
