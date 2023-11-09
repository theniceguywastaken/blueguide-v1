import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import door from "./assets/door.png";

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
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
        },
        fontWeightLight: 300,
        fontSize: 14,
        h2: {
            "@media (max-width:600px)": {
                fontSize: "1.3rem",
            },
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.3rem",
            fontWeight: 700,
            letterSpacing: "0em",
        },
        h3: {
            fontSize: "1.25rem",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
        },
        h4: {
            fontFamily: "'Poppins', sans-serif",
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
                    width: "90%",
                    borderRadius: 50,
                    padding: "0.1rem 2.2rem",
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
        // MuiCard: {
        //   styleOverrides: {
        //     root: {
        //       padding: '1rem',
        //     },
        //   },
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
                title="Founder Story"
                author
                heading="The Story Behind Blue Guide"
                subheading="From a Local's Passion to the Ultimate Guide"
                text="“As a lifelong resident of Chefchaouen, I have always been passionate about sharing the unique beauty and culture of my hometown with others. After years of exploring every nook and cranny of the blue city, I decided to create Blue Guide an e-guide that captures the true essence of Chefchaouen and all it has to offer. With the help of other local enthusiasts, we have created a comprehensive guide that showcases the best of Chefchaouen, from the hidden gems to the well known landmarks. We hope that our guide will inspire you to discover the magic of Chefchaouen and all it has to offer.”"
            />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
