import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-200 px-4">
          <div className="">
            <div className="text-4xl font-bold">Ucuzluk Pazarı</div>
            <div className="text-lg my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quam
              non earum eligendi molestiae est nesciunt repellat dolor ducimus
              recusandae, quas commodi delectus molestias explicabo harum
              distinctio repellendus, deserunt maxime.
            </div>
            <div className="border  hover:text-white flex justify-center items-center hover:bg-gray-500 rounded-full cursor-pointer text-2xl w-[200px] h-12 bg-gray-300">
              İncele
            </div>
          </div>
          <img
            alt=""
            src="https://cdn.dsmcdn.com/ty372/product/media/images/20220328/17/77452176/428171278/1/1_org.jpg"
          />
        </div>
        <div className="!flex items-center bg-gray-200 px-4">
          <div className="">
            <div className="text-4xl font-bold">Ucuzluk Pazarı</div>
            <div className="text-lg my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quam
              non earum eligendi molestiae est nesciunt repellat dolor ducimus
              recusandae, quas commodi delectus molestias explicabo harum
              distinctio repellendus, deserunt maxime.
            </div>
            <div className="border  hover:text-white flex justify-center items-center hover:bg-gray-500 rounded-full cursor-pointer text-2xl w-[200px] h-12 bg-gray-300">
              İncele
            </div>
          </div>
          <img
            alt=""
            src="https://cdn.dsmcdn.com/ty152/product/media/images/20210729/18/113801717/8828009/1/1_org.jpg"
          />
        </div>
        <div className="!flex items-center bg-gray-200 px-4">
          <div className="">
            <div className="text-4xl font-bold">Ucuzluk Pazarı</div>

            <div className="text-lg my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quam
              non earum eligendi molestiae est nesciunt repellat dolor ducimus
              recusandae, quas commodi delectus molestias explicabo harum
              distinctio repellendus, deserunt maxime.
            </div>
            <div className="border  hover:text-white flex justify-center items-center hover:bg-gray-500 rounded-full cursor-pointer text-2xl w-[200px] h-12 bg-gray-300">
              İncele
            </div>
          </div>
          <img
            alt=""
            src="https://cdn.dsmcdn.com/ty732/product/media/images/20230217/10/282554765/859359121/1/1_org.jpg"
          />
        </div>
      </Slider>
      
    </div>
  );
};

export default SliderComp;
