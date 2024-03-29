import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import './styles/header.css'

import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <IconButton color="primary">
            <MenuIcon/>
        </IconButton>
    </header>
  )
}

export default Header