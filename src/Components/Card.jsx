import { Grid, Typography } from "@mui/material";

const Card = ({ icon, title, text }) => {
    const itemStyle = { padding: "0 !important" };

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={5}
            rowGap={2}
            sx={{
                backgroundColor: "#F6F6F6",
                marginTop: "0",
                height: "100%",
                borderRadius: "30px",
            }}
        >
            <Grid item sx={itemStyle}>
                <img src={icon} alt="" />
            </Grid>
            <Grid item md={12} sx={itemStyle}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item md={12} sx={itemStyle}>
                <Typography variant="p">{text}</Typography>
            </Grid>
        </Grid>
    );
};

export default Card;
