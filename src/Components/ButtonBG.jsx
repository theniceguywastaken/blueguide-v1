import { ArrowForward } from "@mui/icons-material";
import Button from "@mui/material/Button";

const ButtonBG = ({ color, content, varient, icon, hideXs }) => {
    const show = hideXs
        ? { xs: "none", sm: "flex" }
        : { xs: "flex", sm: "flex" };
    const styles = {
        display: show,
        alignItems: "center",
    };
    return (
        <Button
            color={color}
            variant={varient ? varient : "contained"}
            sx={styles}
            endIcon={icon ? <ArrowForward /> : null}
        >
            {content}
        </Button>
    );
};

export default ButtonBG;
