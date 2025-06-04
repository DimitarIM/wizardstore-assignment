import { Container, Grid, Typography } from "@mui/material";
import { store } from "../../public/data/storage";
import Card from "./components/Card";
export default function Home() {
  return (
    <>
      <Container sx={{ bgcolor: "", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5rem" }}>
        <Typography variant="h1" fontSize={{ xs:40, sm: 60, md: 70}}>Wizard Shop</Typography>
        {
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              store.map((item, index) => (
                <Card key={index++} name={item.name} value={item.value} />
              ))
            }
          </Grid>

        }
      </Container>
    </>

  );
}
