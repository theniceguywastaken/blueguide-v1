import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import door from "./assets/door.png";
import bookcover2 from "./assets/bookcover2.png";
import SectionCards from "./Components/SectionCards";

const width = 90;
const padding = 2.2;
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2f81ed",
        },
        secondary: {
            main: "#fafafa",
        },
    },
    typography: {
        body1: {
            fontFamily: '"Poppins", "sans-serif"',
        },
        body2: {
            fontFamily: '"Poppins", "sans-serif"',
        },
        h1: {
            "@media (max-width:600px)": {
                fontSize: "2.3rem",
            },
            fontSize: "3.5rem",
            fontWeight: 600,
        },
        fontWeightLight: 300,
        fontSize: 14,
        h2: {
            "@media (max-width:600px)": {
                fontSize: "1.3rem",
            },
            fontSize: "2.3rem",
            fontWeight: 700,
            letterSpacing: "0em",
        },
        h3: {
            fontSize: "1.25rem",
            fontWeight: 600,
            textTransform: "uppercase",
        },
        h5: {
            fontSize: "1.188rem",
            fontWeight: 600,
            textTransform: "capitalize",
        },
        span: {
            fontSize: "1.25rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            "@media (max-width:600px)": {
                fontSize: "0.9rem",
            },
        },
        subtitle2: {
            fontWeight: 700,
        },
        fontFamily: "'Poppins', sans-serif",
        button: {
            fontWeight: 600,
            textTransform: "capitalize",
        },
    },

    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiAppBar: {
            defaultProps: {
                color: "secondary",
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    width: `${width}%`,
                    borderRadius: 50,
                    padding: `0.1rem ${padding}rem`,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                },
            },
        },
        // MuiGrid: {
        //     styleOverrides: {
        //         container: {
        //             width: `${width}%`,
        //             padding: `0 ${padding}rem`,
        //         },
        //     },
        // },
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Hero />
            <Section
                img={door}
                imgWidth={65}
                title="Founder Story"
                author
                heading="The Story Behind Blue Guide"
                subheading="From a Local's Passion to the Ultimate Guide"
                text="“As a lifelong resident of Chefchaouen, I have always been passionate about sharing the unique beauty and culture of my hometown with others. After years of exploring every nook and cranny of the blue city, I decided to create Blue Guide an e-guide that captures the true essence of Chefchaouen and all it has to offer. With the help of other local enthusiasts, we have created a comprehensive guide that showcases the best of Chefchaouen, from the hidden gems to the well known landmarks. We hope that our guide will inspire you to discover the magic of Chefchaouen and all it has to offer.”"
            />
            <SectionCards
                title="Why blue guide?"
                heading="More than just a guide..."
            />
            <Section
                img={bookcover2}
                imgWidth={65}
                title="Content Walkthrough"
                heading="Blue Guide Content "
                text="“As a lifelong resident of Chefchaouen, I have always been passionate about sharing the unique beauty and culture of my hometown with others. After years of exploring every nook and cranny of the blue city, I decided to create Blue Guide an e-guide that captures the true essence of Chefchaouen and all it has to offer. With the help of other local enthusiasts, we have created a comprehensive guide that showcases the best of Chefchaouen, from the hidden gems to the well known landmarks. We hope that our guide will inspire you to discover the magic of Chefchaouen and all it has to offer.”"
            />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
