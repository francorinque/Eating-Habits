import data from "../data.json";

const LifeStyle = () => {
  return (
    <div
      className=' flex flex-col gap-4 items-start justify-center w-full'
      id='life-style'
    >
      {/* texts */}
      <div className='relative mx-auto'>
        <h2 className='text-[40px] font-bold md:text-[100px]  text-[#e7e7e7] '>
          {data["section-two"].text.back}
        </h2>
        <div
          className='absolute  left-0 top-0 w-full h-full
          flex items-center justify-center 
         '
        >
          <span className='text-[30px] font-semibold'>
            {data["section-two"].text.front}
          </span>
        </div>
      </div>

      <div className=' flex gap-4 items-center justify-evenly w-full'>
        {/* list texts */}
        <div className='flex flex-col items-start gap-4 mt-4 '>
          {data["section-two"]["list-items"].map((item) => (
            <div className='flex items-center justify-start gap-2'>
              <img
                src='https://res.cloudinary.com/dj0postuh/image/upload/v1713560281/landing-ia/check-red.svg'
                alt='icon check red'
              />
              <p className='text-[20px]'>{item.text}</p>
            </div>
          ))}
        </div>
        {/* list images */}
        <div
          className='
          hidden md:grid grid-cols-2 gap-1
          place-items-end
          '
        >
          {data["section-two"]["list-images"].map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              className={`
                    w-full object-cover
                    ${image.id === 3 ? "col-span-2" : ""}
                    `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LifeStyle;
