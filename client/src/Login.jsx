import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Fitness from "./images/screen.png";
import axios from "axios";
import "./styles/homeStyle.css";
import { Box, Divider, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
// import Layout from "./components/layout/layout";
import Photo from "./images/istockphoto-1092670800-1024x1024.jpg";
import "./styles/signupStyle.css"


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

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
                </li> */}
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (data.token) {
            login(data.token);
            alert("Login successful");
        } else {
            alert("Login failed");
        }
        
        axios.post("http://localhost:5000/login", { email, password })
            .then((result) => {
                console.log(result)
                if (result.data === "Login successful") {
                    navigate("/home")
                }
            }
            )
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
                                {/* <li>
                                    <NavLink to={"/menu"}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li> */}
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
            <Box className="d-flex justify-content-center align-items-center bg-primary vh-100" sx={{
                background: `url(${Photo})`,
                backgroundSize: "contain",
                display: "flex",
                mt: 0.5
            }}>
                <div className="bg-white p-3 rounded w-25">
                    <h2>Log in</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" for="email" name="email" className="form-label"><strong>Email</strong></label>
                            <input required onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control rounded-0" placeholder="Enter Email" />
                            {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" for="password" name="password" className="form-label"><strong>Password</strong></label>
                            <input required onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control rounded-0" placeholder="Enter Password" />
                            {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                        </div>

                        <button type="submit" className="btn btn-success w-100" ><strong>Login</strong></button>
                        <div className="form-check mt-2 mb-2">
                            <input required className="form-check-input rounded-0" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                You are agree our terms and conditions
                            </label>
                        </div>
                    </form>
                    <Link to="/register" className="btn btn-default border w-100 bg-light">Create your account</Link>
                </div>
            </Box>
        </>
        // </Layout>
    )
}