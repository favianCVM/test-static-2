import React from "react"

interface AnchorButtonProps extends React.ComponentPropsWithoutRef<"a">{
};

const AnchorButton = React.memo(({className = "", children, ...props}: AnchorButtonProps) => {
  return<a className={"font-inter font-semibold text-primary-4  " + className} {...props}>
    <div className="py-[12px] bg-transparent rounded-[12px] active:ring-[0.4] active:scale-105 transition-transform px-[16px] sm:min-w-[342px] sm:max-w-fit text-center border-[1.5px] border-primary-1">
      {children}
    </div>
  </a>
})

export {
  AnchorButton
}