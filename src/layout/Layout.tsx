'use client';
import React from "react";
import useSmTheme from "@/theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer/Footer";

export default function Layout({children}: any) {
    const theme = useSmTheme(true);

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    )
}