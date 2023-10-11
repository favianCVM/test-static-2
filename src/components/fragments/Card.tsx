import React from "react"

interface CopyToClipBoardButtonProps extends React.AllHTMLAttributes<HTMLElement>{
};

const Card = React.memo(({className, children, ...props}: CopyToClipBoardButtonProps) => {
  return<article {...props} className={"bg-white rounded-[10px] p-[19px] flex flex-col items-center sm:min-w-[342px] sm:max-w-fit " + className}>
    {children}
  </article>
});

export {
  Card
}