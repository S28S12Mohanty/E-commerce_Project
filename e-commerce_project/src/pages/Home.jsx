import React from "react";
import Header from "../component/ui/Header";
import Carousel from "../component/ui/Carousel";
import data from "../API/productsdata.json";
import { TbTruckDelivery, TbShoppingBagCheck } from "react-icons/tb";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { IoBagHandleOutline } from "react-icons/io5";

const Home = () => {
  const S_information = [
    {
      id: 1,
      logo: <TbTruckDelivery />,
      title: "Fast Delivery",
      description: "lorem gwqefhjre uriasenjj jfidsefhhd hidfsj ",
    },
    {
      id: 2,
      logo: <IoBagHandleOutline />,
      title: "Easy Return",
      description: "lorem gwqefhjre uriasenjj jfidsefhhd hidfsj ",
    },
    {
      id: 3,
      logo: <LiaHandHoldingUsdSolid />,
      title: "Cash On Delivery",
      description: "lorem gwqefhjre uriasenjj jfidsefhhd hidfsj ",
    },
    {
      id: 4,
      logo: <TbShoppingBagCheck />,
      title: "Best Quality",
      description: "lorem gwqefhjre uriasenjj jfidsefhhd hidfsj ",
    },
  ];

  return (
    <div>
      {/* header page */}
      <Header />
      {/* carrousel page  */}
      <Carousel />

      {/* products collection section */}

      <div className="bg-gray-200 py-10 flex justify-center">
        <div className="bg-gray-100 border border-blue-100 rounded-2xl p-6 max-w-[80%] w-full">
          <h1 className="text-2xl font-bold mb-6">
            Latest Products Collection
          </h1>

          <div className="grid grid-cols-4 gap-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 border border-blue-100 rounded-xl p-3 
                         shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Image */}
                <div className="bg-gray-200 rounded-lg h-45 flex items-center justify-center overflow-hidden cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Text */}
                <p className="mt-3 text-sm">{item.title}</p>

                <h3 className="font-bold">{item.subtitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* why you shop with us */}

      <section className="bg-gray-100 py-10 flex justify-center">
        <div className="bg-gray-200 border border-blue-100 rounded-2xl p-6 max-w-[80%] w-full">
          <h1 className="text-2xl font-bold mb-6">Why You Shop With Us</h1>
          <div className="grid grid-cols-4 gap-8 place-items-center">
            {S_information.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 border border-blue-100 rounded-2xl p-6 w-55
                 shadow-md hover:shadow-xl hover:-translate-y-1 
                 transition duration-300 text-center"
              >
                {/* Icon */}
                <div className="text-4xl text-blue-500 mb-3 flex justify-center">
                  {item.logo}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
