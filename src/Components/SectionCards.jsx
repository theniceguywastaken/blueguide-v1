import { Box, Grid, Typography } from "@mui/material";

const SectionCards = ({ title, heading, Comp: Component }) => {
    const containerStyles = {
        width: "90%",
        padding: "0 2.2em",
        margin: "5em 0",
        "@media (max-width:600px)": {
            margin: "2em 0",
            padding: "0 0.5em",
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
                rowGap={10}
                sx={containerStyles}
                justifyContent="center"
            >
                <Grid container item rowGap={3}>
                    <Grid item md={12}>
                        <Typography variant="span" color="primary">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant="h2">{heading}</Typography>
                    </Grid>
                </Grid>
                {Component ? <Component /> : null}
            </Grid>
        </Box>
    );
};

export default SectionCards;
