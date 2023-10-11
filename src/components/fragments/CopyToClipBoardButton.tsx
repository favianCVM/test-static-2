import React from "react"
import ClipBoard from "../../assets/svg/Clipboard.svg"
import { ReactSVG } from 'react-svg'


interface CopyToClipBoardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  value: any;
};

const CopyToClipBoardButton = React.memo(({value, className, ...props}:CopyToClipBoardButtonProps) => {
  const handleCopyToClipBoard = React.useCallback(() => {
    navigator.clipboard.writeText(value);
  }, [value])

  return <button onClick={handleCopyToClipBoard} {...props} className={"bg-tertiary-1 rounded-full p-[10px] active:scale-110 transition-transform active:ring-4 text-white outline-none " + className}>
    <ReactSVG src={ClipBoard} />
  </button>
})

export {
  CopyToClipBoardButton
}