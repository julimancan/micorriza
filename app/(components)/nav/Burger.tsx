import { MouseEventHandler } from "react";

interface BurgerProps {
  onClickHandler: MouseEventHandler<HTMLDivElement>;
  isNavOpen: boolean;
  barColor?: string;
}

const Burger = ({ onClickHandler, isNavOpen, barColor }: BurgerProps) => {
  return (
    <div
      className="relative z-30 grid gap-2 p-4 cursor-pointer "
      onClick={onClickHandler}
    >
      <Bar
        rotateZ={!isNavOpen ? "rotate-0" : "rotate-45 translate-y-3"}
        barColor={barColor}
        width="w-7"
        />
      <Bar width={isNavOpen ? "w-0" : "w-7"} barColor={barColor} />
      <Bar
        rotateZ={!isNavOpen ? "rotate-0" : "-rotate-45 -translate-y-3"}
        barColor={barColor}
        
        width="w-7"
      />
    </div>
  );
};
interface BarProps {
  width?: string;
  rotateZ?:
    | "rotate-45 translate-y-3"
    | "-rotate-45 -translate-y-3"
    | "rotate-0";
  barColor?: string;
}
const Bar = ({
  width = "w-10",
  rotateZ = "rotate-0",
  barColor = "bg-orange-300",
}: BarProps) => {
  return (
    <div
      className={`${width} ${rotateZ} transition-all h-1  ${barColor} rounded-md`}
    />
  );
};
export default Burger;
