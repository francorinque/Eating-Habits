import data from "../data.json";
import SeparatorGradient from "./ui/SeparatorGradient";

const Plans = () => {
  return (
    <div className='bg-bg p-5 rounded-md shadow-md' id='plans'>
      {/* text */}
      <div className='flex flex-col items-center justify-center gap-y-2'>
        <h2 className='font-semibold text-[20px] md:text-[25px]'>
          {data["section-three"].title}
        </h2>
        <p className='text-[16px] text-center'>{data["section-three"].desc}</p>
      </div>
      {/* separator */}
      <SeparatorGradient css='my-2' />
      {/* items */}
      <ul className='flex items-start justify-center flex-col sm:flex-row gap-2 min-w-[500px]'>
        {data["section-three"].items.map((item) => (
          <li
            key={item.id}
            className='flex-1 flex items-center justify-center  gap-2'
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
