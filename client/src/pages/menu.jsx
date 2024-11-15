import Layout from "../components/layout/layout";
import MenuList from "../data/datas";

import { Box, Card, CardActionArea, Typography, CardContent, CardMedia, Button } from "@mui/material";

export default function Menu() {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {
                    MenuList.map(menu => (
                        <Card sx={{ maxWidth: "390px", display: "flex", m: 3 }}>
                            <CardActionArea>
                                <CardMedia sx={{ minHeight: "400px" }} component={"img"} src={menu.image} />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={"div"}>
                                        {menu.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom component={"div"}>
                                        {menu.description}
                                    </Typography>

                                    <Button sx={{
                                        color: "black",
                                        border: "1px solid black",
                                        width: "100px",
                                        height: "30px",
                                    }} className="button">₹{menu.price}/-</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Layout>
    )
}