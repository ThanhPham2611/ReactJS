import React, { useState } from "react";
import HideMe from "./excersise1-2";

const GameWrapper = () => {
  const [isChildComponentHidden, setIsChildComponentHidden] = useState(false);

  const h3 = `Xin chào lớp, đây là lớp học ReactJs của CodeGym, được dạy bởi thầy Tuấn Anh`

  const toggleShow = () => {
    setIsChildComponentHidden(!isChildComponentHidden)
  }
  return (
    <>
      {isChildComponentHidden ? <button onClick={toggleShow}>Click here to hidden child components</button> : <button onClick={toggleShow}>Click here to show child components</button>}
      <HideMe isShown={isChildComponentHidden} textH3 = {h3} />
    </>
  )
};

export default GameWrapper