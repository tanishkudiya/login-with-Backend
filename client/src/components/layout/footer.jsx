import React from "react";
// import {Footer} from "@mui/material"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import { colors } from "@mui/material";
import "../../styles/headerStyle.css";
import Fitness from "../../images/screen.png"

export default function Footer() {
    return (
        <>
            <Box sx={{ textAlign: "left", justifyContent: "space-between", color: "white", padding: 3, bgcolor: "gray", mt: 1 }}>
                {/* <Box>
                    <Box sx={{
                        my: 2, "& svg": {
                            fontSize: "35px",
                            mr: 2,
                            cursor: "pointer",
                            color:"black"
                        },
                        "& svg: hover": {
                            color: "goldenrod",
                            transform: "translateX(5px)",
                            transition: "all 400ms"
                        },
                        "& svg: active": {
                            color: "goldenrod",
                            transform: "translateX(5px)",
                            transition: "all 400ms"
                        },


                    }}>
                        <Link className="instagram" to={"https://www.google.com/"}><InstagramIcon /></Link>
                        <Link className="instagram" to={"https://www.google.com/"}><FacebookIcon /></Link>
                        <Link className="instagram" to={"https://www.google.com/"}><XIcon /></Link>
                        <Link className="instagram" to={"https://www.google.com/"}><GitHubIcon /></Link>
                        <Link className="instagram" to={"https://www.google.com/"}><YouTubeIcon /></Link>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{ "@media (max-width:600px)": { fontSize: "1rem" }, color:"black" }}>
                    All rights are reserved &copy; Technical info
                </Typography> */}
                <Box className="d-flex justify-content-space-between flex-wrap">
                    <Box className="mx-3">
                        <img src={Fitness} width="300px" height="100px" alt="" />
                        <Box className="mx-3">
                            <p>&copy; 2024 Fitness Umpire</p>
                            <p>All rights reserved</p>
                        </Box>
                    </Box>
                    <Box className="d-flex  flex-column mx-5">
                        <h4>About</h4>
                        <Box className="d-flex  flex-column">
                        <ul className="list-unstyled">
                                <li>
                                    <Link className="text-decoration-none text-white" to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Features</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Plan</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Routine</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>About</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box className="d-flex  flex-column mx-5">
                        <h4>Follow</h4>
                        <Box className="d-flex  flex-column" >
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.instagram.com/"}><InstagramIcon /> <span className="mx-2">Instagram</span> </Link>
                                </li>
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.twitter.com/"}><XIcon /> <span className="mx-2">Twitter</span></Link>
                                </li>
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.github.com/"}><GitHubIcon /> <span className="mx-2">Github</span> </Link>
                                </li>
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.youtube.com/"}><YouTubeIcon /> <span className="mx-2">Youtube</span> </Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}