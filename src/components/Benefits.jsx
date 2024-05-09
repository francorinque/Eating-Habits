import { DiVim } from 'react-icons/di';
import data from '../data.json';
import BigText from './ui/BigText';

const Benefits = () => {
  const { title, subtitle } = data['section-thirteen'];
  const listParagraphs = data['section-thirteen']['list-p'];
  const left = data['section-thirteen'].title.left;
  const right = data['section-thirteen'].title.right;

  return (
    <div id='benefits'>
      <div className='max-w-[800px] mx-auto'>
        <div className='text-center'>
          <BigText textLeft={left} textRight={right} toRigth />
          <p className='text-[16px]'>{subtitle}</p>
        </div>
        <div className='flex flex-col text-center gap-10 mt-10 *:text-[14px] '>
          {listParagraphs.map((p, idx) => (
            <p>
              <small className='mr-2'>{idx + 1}.</small> {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Benefits;
