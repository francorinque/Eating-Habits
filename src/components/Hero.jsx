import data from "../data.json";
import PrimaryButton from "./ui/PrimaryButton";

const Hero = () => {
  return (
    <div
      className='max-w-maxWidth mx-auto h-full flex
      flex-col gap-10  items-center justify-center
     lg:flex-row lg:justify-around pt-[120px]
    '
    >
      {/* text */}
      <div
        className='max-w-[400px] flex flex-col
        gap-2 items-center justify-center text-center
      '
      >
        <h1 className='text-[40px] leading-[1.1] mb-5'>
          <span className='text-[60px] md:text-[80px] font-bold text-primary-red'>
            {data["section-one"].title.big}
          </span>{" "}
          {data["section-one"].title.small}
        </h1>
        <p className='text-[20px]'>{data["section-one"].subtitle}</p>
        <PrimaryButton>
          <a
            href={data["section-one"].button.href}
            target='_blank'
            rel='noreferrer'
          >
            {data["section-one"].button.text}
          </a>
        </PrimaryButton>
        <span className='text-[14px]'>
          {data["section-one"].button.buttonDesc}
        </span>
      </div>
      {/* img */}
      <img
        src={data["section-one"].img.url}
        alt={data["section-one"].img.alt}
        className='lg:translate-x-[30px]'
      />
    </div>
  );
};
export default Hero;
