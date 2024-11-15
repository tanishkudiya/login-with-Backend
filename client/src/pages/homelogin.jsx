import { Children, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Link, NavLink } from "react-router-dom";
import "../styles/headerStyle.css";
import { colors, Divider, Drawer } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fitness from "../images/screen.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import gymboy1 from "../images/gymboy1.avif";
import Homes from "../images/home.avif"
// import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';


export default function HomeLogin() {

    const [mobile, setMobile] = useState(false);

    const handleDrawer = () => {
        setMobile(!mobile);
    }

    const drawer = (
        
        <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
            <Typography component="div" sx={{ flexGrow: 1, my: 2 }}>
                <img src={Fitness} alt="logo" width={"180"} />
            </Typography>
            <Divider />
            <ul className="mobile-navigation">
                {/* <li>
                    <Link to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li> */}
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/register"}>Sign up</Link>
                </li>
            </ul>
        </Box>
    )

    return (
        <>
            <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
                <AppBar className="appbar" position="static" component={"nav"} sx={{ backgroundColor: "white", justifyContent: "space-between" }}>
                    <Toolbar sx={{ padding: 2 }}>
                        <IconButton
                            edge="start"
                            color="black"
                            aria-label="open drawer"
                            sx={{ mr: 1, display: { sm: "none" } }}
                            onClick={handleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1, mr:3 }}>
                            <NavLink to={"/"}><img src={Fitness} className="fitness-logo" alt="logo" height={"70"} width={"250"} /></NavLink>
                        </Typography>
                        {/* <Box className="space" sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink
                                        activeClassName="active" className="activate"
                                        to={"/home"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/menu"}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box> */}
                        <Box sx={{ display: { xs: "none", sm: "block" } , ml:3}}>
                            <ul className="navigation-menu">
                                <button type="button" className="btn"><li>
                                    <NavLink to={"/login"}>Login</NavLink>
                                </li></button>
                                <button type="button" className="btn"><li>
                                    <NavLink to={"/register"}>Signup</NavLink>
                                </li></button>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer variant="temperory"
                        open={mobile}
                        onClose={handleDrawer}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "240px",
                            },
                        }} >
                        {drawer}
                    </Drawer>
                </Box>
            </Box >
            <Box className="home"
                sx={{
                    background: `url(${gymboy1})`,
                    mt: 1,
                    "@media (max-width:600px)": {
                        background: `url(${Homes})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"

                    }
                }}>
                <Box className="homeContainer" sx={{display:'flex',flexWrap:'wrap'}}>
                    <div>
                        <h4>Transform Your Body, Elevate Your Life.</h4>
                        <h3>Your Fitness Journey Starts Here.</h3>
                        <h4>Dream Building</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                             Expedita natus culpa sequi assumenda exercitationem animi, <br />
                              non odit dolorum dolor tempora hic? Mollitia incidunt aliquid iure optio <br />
                               architecto reiciendis repudiandae quae.</p>
                    </div>
                </Box>
            </Box>
            <Box sx={{ textAlign: "left", justifyContent: "space-between", color: "white", padding: 3, bgcolor: "gray", mt: 1 }}>
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
                                    <Link className="text-decoration-none text-white" to={""}>About</Link>
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
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.google.com/"}><InstagramIcon /> <span className="mx-2">Instagram</span> </Link>
                                </li>
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.google.com/"}><XIcon /> <span className="mx-2">Twitter</span></Link>
                                </li>
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.google.com/"}><GitHubIcon /> <span className="mx-2">Github</span> </Link>
                                </li>
                                <li>
                                    <Link className="instagram m-1 text-decoration-none" to={"https://www.google.com/"}><YouTubeIcon /> <span className="mx-2">Youtube</span> </Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box className="d-flex  flex-column mx-5">
                        <h4>Explore</h4>
                        <Box className="d-flex  flex-column">
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box className="d-flex  flex-column mx-5">
                        <h4>Explore</h4>
                        <Box className="d-flex  flex-column">
                        <ul className="list-unstyled">
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box className="d-flex  flex-column mx-5">
                        <h4>Explore</h4>
                        <Box className="d-flex  flex-column">
                        <ul className="list-unstyled">
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none text-white" to={""}>Explore</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}