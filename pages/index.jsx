import React from 'react'
import ButtonComponent from '../components/buttonComponent'

function Home() {

  return (
    <ButtonComponent onClick={() => console.log("button is clicked")} buttonText={'Hello'} appearance={'pri'} />
  )
}

export default Home