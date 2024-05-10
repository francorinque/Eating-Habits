import data from '../data.json';
import BigText from './ui/BigText';

const Projects = () => {
  const left = data['section-projects'].text.left;
  const right = data['section-projects'].text.right;

  return (
    <div id='projects'>
      <BigText textLeft={left} textRight={right} toRigth={true} />
      <div className='flex items-center justify-center mt-10'>
        {data['section-projects'].projects.map((project) => (
          <div key={project.id} className='flex-1'>
            <img
              src={project.img.url}
              alt={project.img.alt}
              className='rounded-md h-[350px] w-full object-cover'
            />
            <div className='bg-bg py-10 rounded-sm shadow-md text-center'>
              <h3 className='font-semibold text-[18px] max-w-[900px] mx-auto text-primary-dark-green'>
                {project.title}
              </h3>
              <p className='text-[14px] max-w-[700px] mx-auto mt-4'>
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
