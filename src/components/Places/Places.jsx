import { PlacesData } from "../../constants/constants";
import PlacesCard from "./PlacesCard";

const Places = ({handleOrderPopup}) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item) => (
            <PlacesCard 
            handleOrderPopup={handleOrderPopup}
            key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
