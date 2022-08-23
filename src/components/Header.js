import { React, useState } from 'react'
import Button from './Button'
import InputTask from './InputTask'

const Header = ({ title, subtitle }) => {
  return (
    <div className='header'>
        <div className='subheader'>
            <div className='header-text'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <Button text="Add"/>
        </div>
        <InputTask />
    </div>
  )
}

export default Header