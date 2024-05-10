import data from '../data.json';
import BigText from './ui/BigText';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Products = () => {
  const left = data['section-seven'].title.left;
  const right = data['section-seven'].title.right;
  const products = data['section-seven']['list-products'];
  const slogan = data['section-seven'].slogan;

  return (
    <div className='p-5 lg:p-8  bg-bg rounded-md shadow-md' id='products'>
      <BigText textLeft={left} textRight={right} toRigth={true} />
      <div className='w-full'>
        <p className='text-center text-[14px] text-pretty'>
          {data['section-seven'].desc}
        </p>
        {/* list */}
        <ul className='my-[50px] flex gap-5  lg:gap-10 flex-col lg:flex-row lg:justify-center w-full'>
          {data['section-seven']['list-texts'].map((item) => (
            <li className='flex  justify-start items-center gap-4'>
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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
                className='mx-auto w-full mt-4 lg:mt-0 h-[200px] object-cover rounded-md'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* btn */}
      {/* <PrimaryButton>
        <a
          href={data['section-seven'].btn.href}
          target='_blank'
          rel='noreferrer'
        >
          {data['section-seven'].btn.text}
        </a>
      </PrimaryButton> */}
      <div className='mt-8 text-center mx-auto  max-w-[800px]'>
        <h2 className='text-[18px] font-semibold'>{slogan.title}</h2>
        <p className='text-[14px] mt-2'>{slogan.desc}</p>
      </div>
    </div>
  );
};
export default Products;
