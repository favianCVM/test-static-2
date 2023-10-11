import React from "react";

export interface TextProps extends React.ComponentPropsWithoutRef<"span">{

}

const Text = React.memo(({children,className = "", ...props}: TextProps) => {
  return <span className={"font-inter break-words leading-[30px] " + className} {...props}>{children}</span>
})

export {
  Text
}