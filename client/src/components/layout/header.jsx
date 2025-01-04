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
import "../../styles/headerStyle.css";
import { colors, Divider, Drawer } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fitness from "../../images/screen.png"
import Profile from "../../images/channels4_profile.jpg"
// import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {

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
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                {/* <li>
                    <Link to={"/menu"}>Menu</Link>
                </li> */}
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <NavLink to={"/workout-todo"}>Workout Form</NavLink>
                </li>
                <li>
                    <Link to={"/workout-list"}>Workout List</Link>
                </li>
                <li>
                    <Link to={"/bmi"}>BMICalculator</Link>
                </li>
                <li>
                    {/* <Link to={"/userprofile"}>User</Link> */}
                </li>
                <li>
                    {/* <Link to={"/login"}>Logout</Link> */}
                </li>
                {/* <li>
                    <Link to={"/register"}>Sign up</Link>
                </li> */}
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
                        <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to={"/"}><img src={Fitness} className="fitness-logo" alt="logo" height={"70"} width={"250"} /></NavLink>
                        </Typography>
                        <Box className="space" sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink
                                        activeClassName="active" className="activate"
                                        to={"/"}>Home</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={"/menu"}>Menu</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/workout-todo"}>Workout</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/workout-list"}>WorkoutList</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/bmi"}>BMICalculator</NavLink>
                                </li>
                            </ul>
                        </Box>

                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                {/* <button type="button" className="profile" ><li>
                                    <NavLink to={"/userprofile"}> <img className="profile-image" src={Profile} alt="" /> </NavLink>
                                </li></button> */}
                                {/* <button type="button" className="btn"><li>
                                    <NavLink to={"/"}>Logout</NavLink>
                                </li></button> */}
                                {/* <button type="button" className="btn"><li>
                                    <NavLink to={"/register"}>Signup</NavLink>
                                </li></button> */}
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
        </>
    )
}