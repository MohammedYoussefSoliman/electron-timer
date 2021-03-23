import React from "react";

type Iprop = {
  size?: string | undefined;
  color?: string | undefined;
};

const MenuArrow = ({ size, color }: Iprop) => {
  const heightCof = 0.5555555555555556;
  return (
    <svg
      width={size ? size : "9"}
      height={size ? +size * heightCof : "5"}
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.49294 4.49294C4.343 4.49323 4.19769 4.44101 4.08223 4.34534L0.231828 1.13667C0.100775 1.02775 0.0183608 0.87122 0.0027155 0.701528C-0.0129298 0.531837 0.0394754 0.36288 0.148402 0.231828C0.257329 0.100775 0.413856 0.0183608 0.583547 0.00271551C0.753238 -0.0129298 0.922194 0.0394751 1.05325 0.148402L4.49294 3.02337L7.93264 0.25108C7.99828 0.197774 8.07381 0.157966 8.15488 0.133945C8.23596 0.109924 8.32098 0.102162 8.40507 0.111108C8.48915 0.120053 8.57064 0.145528 8.64485 0.186069C8.71906 0.226609 8.78452 0.281417 8.83748 0.34734C8.89625 0.413324 8.94076 0.490734 8.96822 0.57472C8.99568 0.658706 9.0055 0.747458 8.99707 0.835417C8.98864 0.923375 8.96213 1.00864 8.91921 1.08588C8.87629 1.16312 8.81788 1.23066 8.74764 1.28427L4.89723 4.38385C4.77846 4.46439 4.63611 4.50281 4.49294 4.49294V4.49294Z"
        fill={color ? color : "#3C73C7"}
      />
    </svg>
  );
};

export default MenuArrow;