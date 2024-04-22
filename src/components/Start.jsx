import data from "../data.json";
import BigText from "./ui/BigText";
import PrimaryButton from "./ui/PrimaryButton";

const Start = () => {
  const left = data["section-nine"].text.left;
  const right = data["section-nine"].text.right;

  return (
    <div className='bg-bg rounded-sm shadow-md p-5 lg:p-10' id='contact'>
      <BigText textLeft={left} textRight={right} toRigth />
      <div className='w-min mx-auto'>
        <PrimaryButton>
          <a
            href={data["section-nine"].btn.href}
            rel='noreferrer'
            target='_blank'
          >
            {data["section-nine"].btn.text}
          </a>
        </PrimaryButton>
      </div>
      <ul className='mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data["section-nine"]["list-texts"].map((item) => (
          <li className='flex w-full items-center gap-4'>
            <img
              src='https://res.cloudinary.com/dj0postuh/image/upload/v1713560281/landing-ia/check-red.svg'
              alt='check svg'
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Start;
