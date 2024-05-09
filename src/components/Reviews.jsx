import data from '../data.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Reviews = () => {
  return (
    <div id='reviews'>
      <div className='relative text-center'>
        <h2 className='text-[50px] font-bold md:text-[100px]  text-[#e7e7e7] '>
          {data['section-ten'].text.back}
        </h2>
        <div
          className='absolute  left-0 top-0 w-full h-full
          flex items-center justify-center 
         '
        >
          <span className='text-[20px] lg:text-[30px] font-semibold'>
            {data['section-ten'].text.front}
          </span>
        </div>
      </div>
      {/* slider */}
      <Swiper
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        className='py-[50px]'
      >
        {data['section-ten'].reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className='shadow-md  overflow-hidden rounded-md  h-[600px] lg:h-[350px]'
          >
            <div className='h-full flex  flex-col lg:flex-row gap-2'>
              {/* text */}
              <div
                className=' 
              mb-5 lg:mb-0  flex-1 text-center flex flex-col h-full 
              items-center gap-4 p-4   justify-center 
              '
              >
                <h4 className='text-primary-dark-green text-[32px] font-semibold '>
                  {review.title}
                </h4>
                <p className='text-[14px] max-w-[600px] mx-auto'>
                  {review.desc}
                </p>
                <div>
                  <h6 className='text-[20px]'>{review.author.name}</h6>
                </div>
              </div>
              {/* img */}
              <div className='h-full'>
                <img
                  src={review.img.url}
                  alt={review.img.alt}
                  className='rounded-md h-full w-full object-cover'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Reviews;
