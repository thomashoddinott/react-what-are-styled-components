import React from 'react'
import {Button, TomatoButton} from './fooElements'

const Foo = () => {

  function click1() {
    alert("Normal Button")
  }

  function click2() {
    alert("Tomato Button")
  }

  return (
    <>
      <Button onClick={click1}>Normal Button</Button>
      <TomatoButton onClick={click2}>Tomato Button</TomatoButton>
    </>
  )
}

export default Foo