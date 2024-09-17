import travelImg from "../../assets/travelbox.png";

import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <img
                  src={travelImg}
                  alt="travelImg"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </motion.div>

              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <motion.h1
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.6,
                    },
                  }}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Explore all corners of The world with us
                </motion.h1>
                <motion.p
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.6,
                      duration: 0.6,
                    },
                  }}
                  initial={{
                    opacity: 0,
                    y: -50,
                  }}
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio ratione ex alias quis magni at optio
                  <br />
                </motion.p>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.6,
                      duration: 0.6,
                    },
                  }}
                  className="grid grid-cols-2 gap-6"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Flight</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Hotel</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Wi-fi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Foods</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
