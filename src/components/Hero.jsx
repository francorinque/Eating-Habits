import data from '../data.json';
import PrimaryButton from './ui/PrimaryButton';

const Hero = () => {
  return (
    <div
      className='max-w-maxWidth mx-auto h-full flex
      flex-col gap-10  items-center justify-center
     lg:flex-row xl:justify-between pt-[120px]
    '
      id='home'
    >
      {/* text */}
      <div
        className='max-w-[440px] flex flex-col
        gap-2 items-center justify-center text-center 
      '
      >
        <h1 className='text-[40px] leading-[1.1] mb-5 font-bold'>
          <span className='text-[60px] md:text-[80px]  text-primary-red'>
            {data['section-one'].title.big}
          </span>{' '}
          {data['section-one'].title.small}
        </h1>
        <p className='text-[20px]'>{data['section-one'].subtitle}</p>
        {/* <PrimaryButton>
          <a
            href={data["section-one"].button.href}
            target='_blank'
            rel='noreferrer'
          >
            {data["section-one"].button.text}
          </a>
        </PrimaryButton> */}
        {/* <span className='text-[14px]'>
          {data['section-one'].button.buttonDesc}
        </span> */}
      </div>
      {/* img */}
      <div className='flex-1 flex items-center justify-end'>
        <img
          src={data['section-one'].img.url}
          alt={data['section-one'].img.alt}
        />
      </div>
    </div>
  );
};
export default Hero;
