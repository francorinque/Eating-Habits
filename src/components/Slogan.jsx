import data from "../data.json";
import BigText from "./ui/BigText";

const Slogan = () => {
  const left = data["section-eleven"].text.left;
  const middle = data["section-eleven"].text.middle;
  const right = data["section-eleven"].text.right;

  return (
    <div>
      <BigText textLeft={left} textMiddle={middle} textRight={right} />
    </div>
  );
};
export default Slogan;
