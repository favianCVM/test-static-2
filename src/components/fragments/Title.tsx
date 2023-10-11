import React from "react";

interface TitleProps extends React.ButtonHTMLAttributes<HTMLHeadElement>{

};

const Title = React.memo(({children, className = "",...props}: TitleProps) => {
  return <h1 {...props} className={"text-title-size font-inter font-medium leading-[22px] " + className}>{children}</h1>
})

export {
  Title
}