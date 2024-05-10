import data from '../data.json';
import BigText from './ui/BigText';

import { BsArrowRight } from 'react-icons/bs';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const FoodStories = () => {
  const left = data['section-eight'].title.left;
  const right = data['section-eight'].title.right;

  return (
    <div id='food_stories'>
      <BigText textLeft={left} textRight={right} toRigth={true} />
      <p className='text-center text-[14px] max-w-[700px] mx-auto'>
        {data['section-eight'].desc}
      </p>

      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 10,
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
        className='py-20 mt-10'
      >
        {data['section-eight'].stories.map((story) => (
          <SwiperSlide>
            <div className='w-full h-[400px] rounded-md overflow-hidden'>
              <img
                src={story.img.url}
                alt={story.img.alt}
                className='w-full h-full object-cover rounded-md '
              />
            </div>
            <div className='p-4 h-fit-content bg-bg rounded-md flex flex-col justify-center gap-2 shadow-md'>
              <h4 className='text-[18px] font-semibold text-primary-dark-green'>
                {story.text}
              </h4>
              <p>{story.desc}</p>
              <div className='h-[1px] w-full bg-black-200/5 mt-5' />
              <div className='flex items-center gap-2 hover:text-black-100/90'>
                <a
                  href={data['section-eight']['stories-btn'].href}
                  rel='noreferrer'
                  target='_blank'
                >
                  {data['section-eight']['stories-btn'].text}
                </a>
                <BsArrowRight />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default FoodStories;
