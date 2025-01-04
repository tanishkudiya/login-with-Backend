import Layout from "../components/layout/layout";
import Button from '@mui/material/Button';
import { Box, colors, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Banner from "../images/banner.jpeg"
import Photo from "../images/photo-1517244683847-7456b63c5969.avif"
import "../styles/homeStyle.css";
import Homes from "../images/home.avif"
import gymboy from "../images/gymboy.avif";
import BMICalculator from "./BMICalculator";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ToggleMode from "./ToggleMode";
// import DarkMode from "./Darkmode";

export default function Home() {

    const toggleTheme = () => {
        alert("Hi");
    }
    return (
        <Layout>
                <Box className="home"
                    sx={{
                        background: `url(${gymboy})`,
                        mt: 1,
                        "@media (max-width:600px)": {
                            // background: `url(${Homes})`,
                            // backgroundSize: "contain",
                            // backgroundRepeat: "no-repeat",
                            // backgroundPosition: "center",
                        }
                    }}>
                    <Box className="homeContainer">
                        <div>
                            <h4>Transform Your Body, Elevate Your Life.</h4>
                            <h3>Your Fitness Journey Starts Here.</h3>
                            <h4>Dream Building</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                Expedita natus culpa sequi assumenda exercitationem animi, <br />
                                non odit dolorum dolor tempora hic? Mollitia incidunt aliquid iure optio <br />
                                architecto reiciendis repudiandae quae.</p>
                            <Link to={"/workout-todo"} ><Button variant="contained" color="success" sx={{ mt: 1, cursor: "pointer" }}>Lets's start</Button></Link>
                        </div>
                    </Box>
                </Box>
                <br />
        </Layout>
    )
}