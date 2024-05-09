import data from '../data.json';
import BigText from './ui/BigText';
import SeparatorGradient from './ui/SeparatorGradient';

const HealthyBite = () => {
  const left = data['section-four'].title.left;
  const middle = data['section-four'].title.middle;
  const right = data['section-four'].title.right;

  return (
    <div id='healthybite'>
      <BigText textLeft={left} textMiddle={middle} textRight={right} />
      {/* list */}
      <div className='grid grid-cols-list gap-[50px] items-center justify-center lg:justify-around'>
        {data['section-four'].items.map((item) => (
          <div>
            <div className='flex flex-col gap-2 items-center text-center lg:flex-row'>
              <img src={item.img.url} alt={item.img.alt} />
              {/* item text */}
              <div className='lg:text-left'>
                <h4 className='font-semibold text-[16px] md:text-[18px] mb-2'>
                  {item.title}
                </h4>
                <p className='text-[12px] md:text-[14px] max-w-[350px] text-pretty leading-[1.6]'>
                  {item.desc}
                </p>
              </div>
            </div>
            <SeparatorGradient css='mt-4' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HealthyBite;
