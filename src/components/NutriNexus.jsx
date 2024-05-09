import data from '../data.json';
import BigText from './ui/BigText';

const pClass = 'text-[14px]';
const h2Class = 'font-semibold';

const NutriNexus = () => {
  const { title, texts, images } = data['section-twelve'];
  const left = title.left;
  const right = title.right;

  return (
    <div id='future_feast'>
      <BigText textLeft={left} textRight={right} toRigth />
      <div className='flex flex-col gap-5 mt-10 text-center mx-auto max-w-[700px]'>
        <div>
          <h2 className={h2Class}>{texts.one.subtitle}</h2>
          <p className={pClass}>{texts.one.desc}</p>
        </div>
        <div>
          <h2 className={h2Class}>{texts.two.subtitle}</h2>
          <p className={pClass}>{texts.two.desc}</p>
        </div>
      </div>
      {/* images */}
      <ul className='grid grid-cols-2 gap-5 mt-10'>
        {images.map((image) => (
          <li key={image.id}>
            <img
              src={image}
              alt="woman's smiling"
              className='w-full h-full object-cover rounded-md max-h-[400px]'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NutriNexus;
