import data from "../data.json";

const Plans = () => {
  return (
    <div className='bg-bg p-5 rounded-md shadow-md'>
      {/* text */}
      <div className='flex flex-col items-center justify-center gap-y-2'>
        <h2 className='font-semibold text-[20px] md:text-[25px]'>
          {data["section-three"].title}
        </h2>
        <p className='text-[16px]'>{data["section-three"].desc}</p>
      </div>
      {/* separator */}
      <div
        className='w-full h-[3px] rounded-[50%] bg-gradient-to-r opacity-[60%]
       from-secondary-medium-green via-primary-dark-green to-secondary-medium-green my-4'
      />
      {/* items */}
      <ul className='flex items-start justify-center flex-wrap md:flex-row gap-2'>
        {data["section-three"].items.map((item) => (
          <li
            key={item.id}
            className='flex-1 flex items-center justify-center   flex-col  md:flex-row  gap-2'
          >
            <div
              className='w-[40px] h-[40px] p-2 rounded-full shadow-md object-contain
            bg-black-50
            '
            >
              <img src={item.icon} alt={item.text} className='w-full h-full' />
            </div>
            <p className='text-[14px] md:text-[16px]'>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Plans;
