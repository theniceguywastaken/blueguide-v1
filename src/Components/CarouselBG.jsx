import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@mui/material";
import reviews from "../reviews.json";

const containerStyles = {
    width: "90%",
    padding: "0 2.2em",
    margin: "5em 0",
    "@media (max-width:600px)": {
        margin: "2em 0",
        padding: "0 0.5em",
    },
};

function CarouselBG() {
    return (
        <Carousel
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

function Item({ item }) {
    return (
        <Paper elevation={0}>
            <Grid
                container
                // direction="column"
                alignItems="center"
                justifyContent="center"
                rowGap={1}
                textAlign="center"
            >
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
                    <h4>{item.name}</h4>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p>{item.title}</p>
                </Grid>
                <Grid item md={8}>
                    <p>{item.feedback}</p>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CarouselBG;
