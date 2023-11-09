import { Box, Grid, Typography } from "@mui/material";
import avatar from "../assets/bilalharras.png";

const Section = ({ img, title, heading, subheading, text, author }) => {
    let authorCard = author ? (
        <Grid container columnSpacing={3}>
            <Grid item>
                <img src={avatar} alt="Bilal Harras" />
            </Grid>
            <Grid item>
                <Typography variant="h6">Bilal HARRAS</Typography>
                <Typography variant="p" color="primary">
                    Founder
                </Typography>
            </Grid>
        </Grid>
    ) : null;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid
                container
                sx={{ width: "90%", padding: "0 2.2rem", margin: "5rem 0" }}
                justifyContent="center"
            >
                <Grid item xs={12} md={6}>
                    <img src={img} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container rowSpacing={3}>
                        <Grid item>
                            <Typography variant="h3" color="primary">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">{heading}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                {subheading}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p">{text}</Typography>
                        </Grid>
                        <Grid item>{authorCard}</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Section;
