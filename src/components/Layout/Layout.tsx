import React from "react"

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement>{};

export const Layout = ({children, ...props}: LayoutProps) => {

  return<div className="bg-neutro-1 px-2.4 py-[67px] min-h-screen h-full relative flex flex-col" {...props}>
    {children}
  </div>
}