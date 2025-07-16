
import Image from "next/image";
import React from "react";

interface CurvedUnderlineTitleProps {
  text: string;
  iconSrc?: string;
  classNameHeading?: string;
}

const CurvedUnderlineTitle: React.FC<CurvedUnderlineTitleProps> = ({ text, iconSrc, classNameHeading }) => {
  return (
    <div className="inline-flex flex-col items-start relative">
      <div className="flex items-center space-x-2 z-10">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="icon"
            width={32}
            height={32}
            className="w-6 h-6 object-contain"
          />
        )}
        <h2 className={"relative z-10 " + (classNameHeading || "text-white text-3xl font-bold")}>{text}</h2>
      </div>
      <svg
        className="absolute left-0 bottom-0 z-0"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        width="100%"
        height="10"
      >
        <path
          d="M0,8 Q50,0 100,8"
          stroke="#FF5C5C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export { CurvedUnderlineTitle };
export default CurvedUnderlineTitle;
