import Layout from "../components/layout/layout";
import { Box, Typography } from "@mui/material";

export default function About() {
    return (
        <Layout>
            <Box sx={{
                my:15,
                textAlign:"center",
                mx:10,

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
                    mb:0,
                    "& h4":{
                        fontSize:"1.3rem",
                    }
                }
            }}>
                <Typography variant="h4">
                    Welcome to My Fitness Tracker Website
                </Typography>
        

<p>At Fitness Tracker, we believe that staying fit should be simple, enjoyable, and empowering. <br /> Our platform is designed to help you set goals, track your workouts, and monitor your progress—all in one place. Whether you’re a beginner just starting your fitness journey or an experienced athlete looking to fine-tune your routine, Fitness Tracker is here to support you every step of the way.
<br />
<br />
<h5>Our Mission</h5>
We aim to create a space where fitness enthusiasts can stay organized and motivated. By focusing on personalization and ease of use, our platform allows you to log your workouts, track your progress, and build a routine that fits your unique goals and lifestyle.
<br />
<br />
<h4>Why Choose Us?</h4>
User-Centered Design: Fitness Tracker is tailored to meet your specific needs. Log workouts, view your history, and stay motivated—all with a seamless, user-friendly interface.
Secure & Private: Your data is yours alone. Only you can access your workout entries, ensuring your privacy is always protected.
<br />
All-In-One Solution: Whether it’s strength training, cardio, or yoga, track every aspect of your fitness regimen in one convenient location.
Motivation & Progress: Watch yourself grow stronger and healthier with clear progress tracking, helping you stay focused and motivated.
<br />
<br />
<b>Join Us</b>
<br />
At Fitness Tracker, we understand that every fitness journey is unique. That’s why we’re committed to providing a personalized experience that adapts to your goals.
<br />
Take charge of your health today—because your journey to a better you starts here.
<br />
Thank you for choosing Fitness Tracker. Let’s move forward, together!</p>
                </Box>
        </Layout>
    )
}