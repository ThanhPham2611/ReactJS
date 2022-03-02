import React from 'react'

const HideMe = ({isShown,textH3}) => {
  function notify() {
    if(isShown === false) {
      alert('Child components was hidden!')
    }else {
      alert('Child components is shown now!')
    }
  }
  return (
    <>
      {isShown && <h3>{textH3}</h3>}
      {notify()}
    </>
  )
}   

export default HideMe