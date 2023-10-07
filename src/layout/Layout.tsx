'use client';
import React from "react";
import useSmTheme from "@/theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/Footer";

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