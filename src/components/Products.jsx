import data from "../data.json";
import BigText from "./ui/BigText";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import PrimaryButton from "./ui/PrimaryButton";

const Products = () => {
  const left = data["section-seven"].title.left;
  const right = data["section-seven"].title.right;
  const products = data["section-seven"]["list-products"];

  return (
    <div className='p-5 lg:p-8  bg-bg rounded-md shadow-md'>
      <BigText textLeft={left} textRight={right} toRigth={true} />
      <div>
        <p className='text-center lg:text-left text-[14px] text-pretty'>
          {data["section-seven"].desc}
        </p>
        {/* list */}
        <ul className='my-10 flex gap-5 flex-col '>
          {data["section-seven"]["list-texts"].map((item) => (
            <li className='flex w-full items-center gap-4'>
              <img
                src='https://res.cloudinary.com/dj0postuh/image/upload/v1713560281/landing-ia/check-red.svg'
                alt='check svg'
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* slider */}
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className='py-10'
      >
        {products.map((prod) => (
          <SwiperSlide
            key={prod.id}
            className='bg-black-50 rounded-md p-5 shadow-md'
          >
            <div className='flex flex-col lg:flex-row items-center'>
              <div className='text-center md:text-left'>
                <h4 className='max-w-[300px] font-semibold mb-2'>
                  {prod.text}
                </h4>
                <span>{prod.info}</span>
              </div>
              <div
                className='
                hidden lg:block h-[200px] w-[2px] rounded-md bg-black-100/10
                '
              />
              <img
                src={prod.img.url}
                alt={prod.alt}
                className='mx-auto max-w-[200px] mt-4 lg:mt-0'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* btn */}
      <PrimaryButton>
        <a
          href={data["section-seven"].btn.href}
          target='_blank'
          rel='noreferrer'
        >
          {data["section-seven"].btn.text}
        </a>
      </PrimaryButton>
    </div>
  );
};
export default Products;
