import React from "react";
import { Container, Typography, CssBaseline, AppBar, Toolbar } from "@mui/material"
import AppRoutes from "./routes"

const App = () => {

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <img
                        // src="https://manda-uploads.s3.eu-north-1.amazonaws.com/static/manda-white-logo.png"
                        src="favicon.ico" 
                        alt="Logo"
                        style={{ marginRight: '8px', height: '24px' }} 
                    />
                    <Typography variant="h6">manda_codigo</Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center">
                    Welcome to manda_codigo!
                </Typography>
                <AppRoutes />
            </Container>
        </>
    );
}

export default App;
