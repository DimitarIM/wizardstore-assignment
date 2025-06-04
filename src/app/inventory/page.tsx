"use client"
import {Container, Grid, Typography } from "@mui/material"
import Card from "../components/Card"
import { useLocalStorage } from "@/useLocalStorage"
import { useEffect, useState } from "react";
import { Item } from "@/types";

function Inventory() {
  const { getItems } = useLocalStorage();
  const [inventory, setInventory] = useState<Item[]>()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInventory(getItems());
    }
  },[]) 
  return (
    <Container sx={{ bgcolor: "", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5rem" }}>
      <Typography variant="h1" fontSize={{ xs: 40, sm: 60, md: 70 }}>Inventory</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
           inventory ? inventory.map((item, index) => (
             <Card key={index++} name={item.name} value={item.value} />
           )) : null
          }
        </Grid>
    </Container>
  )
}

export default Inventory