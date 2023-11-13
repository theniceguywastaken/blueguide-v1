import { Box, Grid, Typography } from "@mui/material";
import Card from "./Card";
import houseIcon from "../assets/houseicon.svg";
import bulbIcon from "../assets/bulbicon.svg";
import hassleFreeIcon from "../assets/hasslefreeicon.svg";

const SectionCards = ({ title, heading }) => {
    const containerStyles = {
        width: "90%",
        padding: "0 2.2rem",
        margin: "5rem 0",
        "@media (max-width:600px)": {
            margin: "2rem 0",
        },
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid
                container
                textAlign={"center"}
                columnSpacing={6}
                rowGap={3}
                sx={containerStyles}
            >
                <Grid item md={12}>
                    <Typography variant="span" color="primary">
                        {title}
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography variant="h2">{heading}</Typography>
                </Grid>
                <Grid item md={4}>
                    <Card
                        icon={houseIcon}
                        title="Local expertise"
                        text="You'll get an authentic experience of Chefchaouen that no other guide can match. Our local expertise allows us to share the hidden gems of the city that you won't find in tourist guides."
                    />
                </Grid>
                <Grid item md={4}>
                    <Card
                        icon={bulbIcon}
                        title="Comprehensive Content"
                        text="Discover Chefchaouen like a local with our comprehensive guide that covers everything from the top attractions to hidden gems, including the best places to eat, sleep, shop, and explore."
                    />
                </Grid>
                <Grid item md={4}>
                    <Card
                        icon={hassleFreeIcon}
                        title="Hassle-Free Experience"
                        text="With Blue Guide, you don't have to worry about planning your trip or missing out on the best things to see and do. We've done all the hard work for you, so you can sit back, relax, and enjoy your time in Chefchaouen to the fullest."
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SectionCards;
