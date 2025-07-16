// // components/CurvedUnderline.tsx

// import React from "react";

// interface CurvedUnderlineProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   color?: string;
//   height?: number;
//   strokeWidth?: number;
//   "data-testid"?: string;
// }

// const CurvedUnderline: React.FC<CurvedUnderlineProps> = ({
//   className = "",
//   color = "#FF5A5F",
//   height = 14,
//   strokeWidth = 4,
//   "data-testid": dataTestId,
//   ...props
// }) => {
//   return (
//     <>
//     <svg
//       className={`block ${className}`}
//       viewBox="0 0 200 14"
//       height={height}
//       width="100%"
//       preserveAspectRatio="none"
//       xmlns="http://www.w3.org/2000/svg"
//       data-testid={dataTestId}
//       {...props}
//     >
//       <path
//         d="M0,7 C30,14 70,0 100,7 C130,14 170,0 200,7"
//         stroke={color}
//         strokeWidth={strokeWidth}
//         fill="none"
//         strokeLinecap="round"
//         className="animate-draw"
//       />
//     </svg>
//     </>
//   );
// };

// export default CurvedUnderline;
