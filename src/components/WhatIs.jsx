import data from '../data.json';
import BigText from './ui/BigText';

const WhatIs = () => {
  return (
    <div id='nutri_nexus'>
      <BigText
        textLeft={data['section-six'].title.left}
        textMiddle={data['section-six'].title.middle}
        textRight={data['section-six'].title.right}
      />
      <div
        className='flex flex-col gap-[30px] items-center md:flex-row md:justify-center 
      md:gap-[40px] 
      '
      >
        <img
          src={data['section-six'].img.url}
          alt={data['section-six'].img.alt}
          className='max-w-[300px]'
        />
        {/* list */}
        <ul className='grid gap-8 items-center md:grid-cols-2'>
          {data['section-six'].items.map((item) => (
            <li className='w-full flex items-center justify-start gap-5'>
              <span className='w-5 h-5 bg-gradient-to-r from-primary-dark-green/50 to-secondary-medium-green block rounded-full' />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WhatIs;
