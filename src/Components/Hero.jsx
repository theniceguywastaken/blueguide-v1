import { Box, Grid, Typography, Container } from "@mui/material";
import bookCover from "../assets/bookcover.svg";
import bgShape from "../assets/bgshape.svg";
import bgShapeMobile from "../assets/bgshapemobile.svg";

const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                background: `url(${bgShape}) center no-repeat`,
                padding: "13rem 0 7rem",
                backgroundSize: "cover",
                "@media (max-width:370px)": {
                    background: `url(${bgShapeMobile}) center no-repeat`,
                    padding: "8rem 0 3rem",
                },
            }}
        >
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                sx={{ width: "90%", padding: "0 2.2rem" }}
            >
                <Grid item xs={12} md={6}>
                    <Typography variant="h1" color="secondary">
                        Discover the Magic of Chefchaouen
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={bookCover} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
