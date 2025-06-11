import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

const testimonials = [
  {
    name: "Mary Patricia",
    title: "CEO",
    image:
      "https://shopo.mamunuiux.com/uploads/custom-images/mary-patricia-20220925031348.png",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    rating: 5,
  },
  {
    name: "John Doe",
    title: "CEO",
    image:
      "https://shopo.mamunuiux.com/uploads/custom-images/john-doe-20220922033955.png",
    review:
      "As a digital marketing agency our team works day in and day out on websites of all kinds...",
    rating: 5,
  },
  {
    name: "Michael",
    title: "CEO",
    image:
      "https://shopo.mamunuiux.com/uploads/custom-images/ibrahim-khalil-20220922034002.png",
    review:
      "Almost every imaginable design is possible and customizations are allowed on every level...",
    rating: 5,
  },
  {
    name: "James Robert",
    title: "CEO",
    image:
      "https://shopo.mamunuiux.com/uploads/custom-images/james-robert-20220925031227.png",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page...",
    rating: 5,
  },
];
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="custom-arrow right-[-25px] absolute top-1/2 transform -translate-y-1/2 z-10 border border-[#FFBB38] text-[#FFBB38] text-2xl hover:text-white hover:bg-[#FFBB38] hover:border-0 cursor-pointer duration-100 rounded-full w-[50px] h-[50px] flex items-center justify-center shadow"
  >
    <FaAngleRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="custom-arrow left-[-25px] absolute top-1/2 transform -translate-y-1/2 z-10 border border-[#FFBB38] text-[#FFBB38] text-2xl hover:text-white hover:bg-[#FFBB38] hover:border-0 cursor-pointer duration-100 rounded-full w-[50px] h-[50px] flex items-center justify-center shadow"
  >
    <FaAngleLeft />
  </button>
);
    

const Star = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
  >
    <path
      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
      fill="#FFA800"
    />
  </svg>
);

const CustomerFeedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "40px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  

  return (
    <div className="w-full px-2 py-10 md:px-6 lg:py-[60px] xl:px-[75px]">
      <div className="mb-8 flex justify-center">
        <h1 className="text-[30px] font-semibold text-[#222222] capitalize">
          Customers Feedback
        </h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#F8F8F8] p-6 sm:p-8 rounded shadow">
              <div className="flex items-center mb-3 space-x-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                 <IoMdStar key={idx} className="h-5 w-5 text-[#D2D8E1]" />
                ))}
                <span className="text-sm text-[#222222]">({t.rating})</span>
              </div>
              <p className="text-[15px] text-[#8e8e8e] leading-[30px] line-clamp-6 mb-4">
                {t.review}
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-medium text-[#222222] capitalize">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-[#8e8e8e] uppercase">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerFeedback;
