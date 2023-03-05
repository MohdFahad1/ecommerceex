import React from 'react'
import { animation } from '../LottieAnimation/lottieData'
import LottieAnimation from '../LottieAnimation'
const Animation = () => {
  return (
    <LottieAnimation file={animation} width='500px' height='500px'/>
  )
}

export default Animation