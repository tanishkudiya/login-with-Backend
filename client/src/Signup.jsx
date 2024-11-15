// import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
// import Validation from "./signupValidations"
import axios from "axios"
import "./styles/homeStyle.css";
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Box, colors, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
// import Layout from "./components/layout/layout";
import Photo from "./images/istockphoto-1092670800-1024x1024.jpg";
import {Divider, Drawer} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Fitness from "./images/screen.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/signupStyle.css"



export default function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    
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
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/register"}>Sign up</Link>
                </li>
            </ul>
        </Box>
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/register", { name, email, password })
            .then((result) => {
                console.log(result)
                navigate("/home");
            })
            .catch((err) => console.log(err));
    }

    return (
        // <Layout>
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
                            </ul>
                        </Box>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
            <Box className="signup vh-100" sx={{
                background: `url(${Photo})`,
                backgroundSize: "contain",
                display:"flex",
                mt:0.5
            }}>
                <Box className="bg-white rounded p-3 w-25">
                    <h2>Sign up</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <Box className="mb-3">
                            <label htmlFor="name" for="name" className="form-label"><strong>Name</strong></label>
                            <input required onChange={(e) => setName(e.target.value)} type="name" id="name" className="form-control rounded-0" placeholder="Enter Name" />
                        </Box>
                        <Box className="mb-3">
                            <label htmlFor="email" for="email" className="form-label"><strong>Email</strong></label>
                            <input required onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="form-control rounded-0" placeholder="Enter Email" />
                        </Box>
                        <Box className="mb-3">
                            <label htmlFor="password" for="password" className="form-label"><strong>Password</strong></label>
                            <input required onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="form-control rounded-0" placeholder="Enter Password" />
                        </Box>

                        <button type="submit" className="btn btn-success w-100" ><strong>Sign up</strong></button>
                        <Box className="form-check mt-2 mb-2">
                            <input required className="form-check-input rounded-0" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                You are agree our terms and conditions
                            </label>
                        </Box>
                    </form>
                    <Link to="/login" className="btn btn-default border w-100 bg-light">Log in</Link>
                </Box>
            </Box>
            </>
        // </Layout>
    )
}