import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@mui/material";
import reviews from "../reviews.json";

const containerStyles = {
    width: "90%",
    padding: "0 2.2em",
    margin: "0 0 5em",
    "@media (max-width:600px)": {
        margin: "2em 0",
        padding: "0 0.5em",
    },
};

function CarouselBG() {
    return (
        <Carousel
            // autoPlay={false}
            animation="slide"
            duration={500}
            sx={containerStyles}
            indicators={false}
            navButtonsAlwaysVisible
        >
            {reviews.map((review) => (
                <Item key={review.id} item={review} />
            ))}
        </Carousel>
    );
}
const itemCardStyles = {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "300px",
    "@media (max-width:600px)": {
        padding: "0 3em",
        height: "600px",
    },
};
function Item({ item }) {
    return (
        <Paper elevation={0}>
            <Grid container rowGap={2} sx={itemCardStyles}>
                <Grid item md={12} xs={12}>
                    <img
                        src={item.img}
                        alt={item.name}
                        style={{
                            width: "80px",
                            borderRadius: "50%",
                            marginInline: "auto",
                        }}
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                    <h3>{item.name}</h3>
                </Grid>
                <Grid item md={12} xs={12} textTransform="uppercase">
                    <h4>{item.title}</h4>
                </Grid>
                <Grid item md={8}>
                    <p>{item.feedback}</p>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CarouselBG;
