import Layout from "../components/layout/layout";
import { Box, Paper, TableHead, TableContainer, TableCell, Table, TableRow, Typography, TableBody, colors } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function Contact() {
    return (
        <Layout>
            <Box sx={{
                textAlign: "center",
                p: 2,
                my: 15,
                mx:10,
                "& h4": {
                    fontSize: "30px",
                    fontWeight: "bold",
                    my: 2
                },
                "& p": {
                    textAlign: "justify",
                },
                "@media(max-width:600px)": {
                    mt: 0,
                    m: 2,
                    "& h4": {
                        fontSize: "1.3rem",
                    }
                }
            }}>
                <Typography variant="h4">
                    Contact Fitness Tracker website
                </Typography>
                <p>We’d love to hear from you! At Fitness Tracker, your feedback, questions, and suggestions help us improve and serve you better. Whether you’re experiencing an issue, have a feature request, or simply want to say hello, feel free to reach out to us using the details below.</p>
            </Box>
            <Box sx={{
                m: 3,
                width: "600px",
                ml: 15,
                "@media(max-width:600px)": {
                   width:"300px" ,
                   ml:3
                }
            }}>
                <TableContainer component={Paper} sx={{borderRadius:"10px"}}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 123456789(Toll Free)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MarkunreadIcon sx={{ color: "blue", pt: 1 }} /> tanishkudiya365@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <LocalPhoneIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}