import Layout from "../components/layout/layout";
import { Box, Typography } from "@mui/material";

export default function About() {
    return (
        <Layout>
            <Box sx={{
                my:15,
                textAlign:"center",

                p:2,
                "& h4":{
                    fontWeight:"bold",
                    fontSize:"2rem",
                    my:2
                },
                "& p":{
                    margin:"5px 0px",
                    textAlign:"justify",
                },
                "@media(max-width:600px)":{
                    mt:0,
                    "& h4":{
                        fontSize:"1.3rem",
                    }
                }
            }}>
                <Typography variant="h4">
                    Welcome to My Fitness Tracker Website
                </Typography>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas itaque et optio! Minima adipisci reiciendis, aliquid, labore, repellat deleniti excepturi nostrum praesentium odio natus sapiente aut iure magnam quidem? Quaerat, sunt. Eaque inventore eligendi, quisquam est dolores fugiat cum sapiente enim adipisci, ab maxime nisi?</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sed eaque facere eveniet beatae eligendi impedit at a. Error ratione impedit numquam! Repellendus quos voluptatem, dicta quas saepe rem commodi dolorem perspiciatis laboriosam magni quisquam accusamus? Perferendis accusamus voluptate in possimus, exercitationem tempore velit facilis!</p>
            </Box>
        </Layout>
    )
}