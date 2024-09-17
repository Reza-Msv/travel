import Img1 from "../assets/places/boat.jpg";
import Img2 from "../assets/places/tajmahal.jpg";
import Img3 from "../assets/places/water.jpg";
import Img4 from "../assets/places/place4.jpg";
import Img5 from "../assets/places/place5.jpg";
import Img6 from "../assets/places/place6.jpg";

import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

const navBarList = [
  { id: 1, name: "Home", path: "/travel" },
  { id: 2, name: "Blogs", path: "travel/blogs" },
  { id: 3, name: "Best Places", path: "travel/places" },
  { id: 4, name: "About", path: "travel/about" },
];

const dropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const blogData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: slider1,
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: slider2,
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: slider3,
  },
];

const FooterLinks = [
  {
    title: "Home",
    link: "/travel",
  },
  {
    title: "About",
    link: "/travel/about",
  },
  {
    title: "Best Places",
    link: "/travel/places",
  },
  {
    title: "Blogs",
    link: "/travel/blogs",
  },
];

export {
  navBarList,
  dropdownLinks,
  PlacesData,
  blogData,
  testimonialData,
  FooterLinks,
};
