import React, { useState } from "react";
import {
    Box,
    Drawer,
    IconButton,
} from "@mui/material";
import HeaderSection from "./components/header";
import GradientButton from "./components/postProperty";
import { FavouritesGrid, PropertyGrid } from "./components/favouriteGrid";
import FooterSideBar from "./components/footer";
import { ReactComponent as CloseSideBar } from "../../assets/icons/Frame.svg";


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <Drawer anchor="right" open={isOpen} onClose={toggleSidebar}>
            <Box
                sx={{
                    width: 350,
                    bgcolor: "white",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                }}
            >
                <Box

                    sx={{
                        display: "flex",
                        justifyContent: 'flex-start',
                    }}
                >
                    <IconButton onClick={toggleSidebar}>
                        <CloseSideBar height={30} width={30} />
                    </IconButton>

                </Box>

                {/* Header Section */}
                <HeaderSection />

                {/* Menu Items */}
                <FavouritesGrid />
                <GradientButton >
                    Post your property for free
                </GradientButton>
                <PropertyGrid />

                {/* Footer Links */}

            </Box>
            <FooterSideBar />

        </Drawer>
    );
};

export default Sidebar;
