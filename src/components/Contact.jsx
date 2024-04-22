import data from "../data.json";
import PrimaryButton from "./ui/PrimaryButton";

const Contact = () => {
  return (
    <div className='rounded sm bg-bg p-5 md:p-10 flex flex-col items-center justify-center shadow-md'>
      <h3 className='text-[20px]'>{data["section-five"].title}</h3>
      <PrimaryButton>
        <a
          href={data["section-five"].btn.href}
          target='_blank'
          rel='noreferrer'
        >
          {data["section-five"].btn.tex}
        </a>
      </PrimaryButton>
    </div>
  );
};
export default Contact;
