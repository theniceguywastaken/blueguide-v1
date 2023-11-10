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
    let containerStyles = {
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
            <Grid container sx={containerStyles} justifyContent="center">
                <Grid
                    item
                    sx={{ display: { xs: "none", md: "block" } }}
                    xs={12}
                    md={6}
                >
                    <img src={img} alt="" style={{ width: "80%" }} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    rowSpacing={{ xs: 2, md: 3 }}
                >
                    <Grid item container alignItems="center">
                        <Grid item xs={5} md={3}>
                            <Typography variant="span" color="primary">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <hr
                                style={{
                                    outline: "none",
                                    border: "1px solid #2F80ED",
                                }}
                            />
                        </Grid>
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
        </Box>
    );
};

export default Section;
