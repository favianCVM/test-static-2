import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
};

const Button = React.memo(({className = "", children, ...props}: ButtonProps) => {
  return<button className={"font-inter font-semibold text-primary-4 px-[16px] py-[12px] bg-transparent border-[1.5px] border-primary rounded-[12px] active:scale-105 transition-transform active:ring-[0.4] sm:min-w-[342px] sm:max-w-fit " + className} {...props}>{children}</button>
})

export {
  Button
}