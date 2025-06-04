"use client"
import React from 'react'
import { AppBar, Box, Toolbar, Button, Typography, Link} from '@mui/material'
import { usePathname } from 'next/navigation'

export default function navBar() {
  const pathname:string = usePathname();
  return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar color='secondary' position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Wizard Shop
          </Typography>      
          {
            pathname === "/" 
            ? <Link href="/inventory"><Button variant='contained'>Inventory</Button></Link>
            : <Link href="/"><Button variant='contained'>Store</Button></Link>    
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}