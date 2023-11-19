import { Box, Grid, Typography } from "@mui/material";
import bookCover from "../assets/eguidecover.png";
import bgShape from "../assets/bgshape.svg";
import bgShapeMobile from "../assets/bgshapemobile.svg";
import ButtonBG from "./ButtonBG";
import Header from "./Header";

const Hero = () => {
    return (
        <Grid
            container
            justifyContent="center"
            rowGap={{ md: 10, xs: 3 }}
            sx={{
                background: `url(${bgShape}) center no-repeat`,
                padding: "3em 0 7em",
                backgroundSize: "cover",
                "@media (max-width:450px)": {
                    background: `url(${bgShapeMobile}) center no-repeat`,
                    padding: "2em 0 0",
                    backgroundSize: "cover",
                },
            }}
        >
            {" "}
            <Grid item md={12} xs={12}>
                <Header />
            </Grid>
            <Grid
                item
                container
                spacing={0}
                rowSpacing={{ xs: 4 }}
                direction="row"
                justifyContent="center"
                sx={{
                    width: "90%",
                    padding: "0 2.2em",
                    "@media (max-width:600px)": {
                        // margin: "2em 0",
                        // padding: "0 0.5em",
                    },
                }}
            >
                <Grid item xs={12} md={6}>
                    <Grid
                        container
                        alignItems="center"
                        rowSpacing={{ xs: 2, md: 4 }}
                        // columnSpacing={{ xs: 2 }}
                        columnGap={{ xs: 2, sm: 2, md: 0 }}
                    >
                        <Grid item md={12}>
                            <Typography variant="h1" color="secondary">
                                Discover the Magic of Chefchaouen
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Typography variant="p" color="secondary">
                                Created by Locals, for Travelers Seeking
                                Authentic Experiences
                            </Typography>
                        </Grid>
                        <Grid item sm={3} md={4} lg={4}>
                            <ButtonBG
                                content="Download Now"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item sm={8} md={8} lg={8}>
                            <ButtonBG
                                content="About Us"
                                color="secondary"
                                varient="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={bookCover} alt="" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Hero;
