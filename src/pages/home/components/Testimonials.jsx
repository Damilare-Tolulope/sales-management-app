/** @format */

import React from "react";
import Omowunmi from "../../../assets/images/Omowunmi.png";
import Michael from "../../../assets/images/Michael.png";
import Damilola from "../../../assets/images/Damilola.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  speed: 500,

  slidesToShow: 1,
  slidesToScroll: 1,
  width: 700,
  dots: true,
};
function CarouselObject({ testimonial, name, img, company }) {
  return (
    <div className="flex flex-col lg:w-[70%]  border-2 rounded-3xl px-6 pt-6 mx-auto ">
      <div className="md:flex w-[100%]">
        <div className="flex flex-col md:w-[15%] max-w-sm">
          <img
            src={img}
            className="md:w-[50px] w-[100px] h-auto rounded-sm"
            alt="testimonial"
          />
        </div>
        <div className="ml-2 w-[85%]">
          <h2 className="text-[#3C4652] font-medium text">{name}</h2>
          <h6 className="text-[#3C4652] font-normal ">{company}</h6>
        </div>
      </div>
      <div className="flex  w-[100%] max-w-sm">
        <p className="text-[#7F7F7F] my-3">{testimonial}</p>
      </div>
    </div>
  );
}
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      img: Omowunmi,
      name: "Omowunmi Duke",
      company: "CEO of Slimprytrend",
      testimonial:
        '"The features on this platform helps me to manage my shop,I am satisfied with it. I suggest you use this for better store management"',
    },
    {
      id: 2,
      img: Michael,
      name: "Michael Odubusi",
      company: "CEO of Talaray store",
      testimonial:
        '"Using Msf sales app has greatly helped us improve speed of service and better organisation of our inventory.It is a great application"',
    },
    {
      id: 3,
      img: Damilola,
      name: "Damilola Ilori",
      company: "CEO of Ace supermarket",
      testimonial:
        "“The  features are so easy to use to take inventory records in my supermarket, it has made work so much easier.I highly recommend”",
    },
  ];
  return (
    <div className=" w-full flex justify-center items-center flex-col py-8">
      <h6 className="text-[#0052CC] font-bold text-[16px] mt-10">
        Testimonials
      </h6>
      <h6 className="py-4 font-bold md:text-[30px] text-xl text-[#3C4652]">
        Hear From Our Beloved Customers
      </h6>
      <hr className="bg-[#0052CC] w-[48px] mb-[10px]  font-bold h-[4px] flex justify-center  items-center flex-col"></hr>
      <Slider {...settings} className=" md:w-1/2 w-2/3">
        {testimonials.map((item, i) => {
          return (
            <CarouselObject
              key={i}
              testimonial={item.testimonial}
              name={item.name}
              company={item.company}
              img={item.img}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Testimonials;
