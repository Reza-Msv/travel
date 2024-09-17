import { motion } from "framer-motion";
import img from "../../assets/cover-women.jpg";
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

const BannerImg = () => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <motion.div
      variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show"
      className="h-[400px] w-full "
      style={bgImage}
    ></motion.div>
  );
};

export default BannerImg;
