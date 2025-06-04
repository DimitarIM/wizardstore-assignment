"use client"
import React, { FC, useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Item } from '@/types'
import { useLocalStorage } from '@/useLocalStorage'
import { usePathname } from 'next/navigation'

const Card: FC<Item> = ({ name, value }) => {
  const { setItem, removeItem } = useLocalStorage();
  const [isRemoved, setStateRemoved] = useState<boolean>(false);
  const [isBought, setStateBought] = useState<boolean>(false)
  const pathname: string = usePathname();
  return (
    <Grid size={{ xs: 2, sm: 4, md: 4 }} bgcolor={"#883955"} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0.4rem", minWidth: "12rem" }} >
      <Typography fontSize={{ xs: 20, sm: 30, md: 30 }} variant='h4'>{name} </Typography>
      <Typography variant='h5'>{value}</Typography>

      {
        pathname === "/"
          ? <Button color={isBought ? "warning" : "primary"} variant="contained" onClick={() => {
            if (!isBought) {
              setItem(name, value);
              setStateBought(true);
            }
          }}>{isBought ? "Bought" : "Buy"}</Button>
          : <Button color='warning' variant={isRemoved ? "contained" : "outlined"} onClick={() => {
            if (!isRemoved) {
              removeItem(name);
              setStateRemoved(true);
            };
          }}>{isRemoved ? "Removed" : "Remove"}</Button>
      }
    </Grid>
  )
}

export default Card