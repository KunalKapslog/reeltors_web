import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ children, onClick }) => {
    return (
        <Button
            variant="contained"
            fullWidth
            sx={{
                background: 'linear-gradient(to right, #FF3131, #991D1D)',
                textTransform: "none",
                color: "white",
                fontWeight: 300,
                fontSize: "14px",
                marginBottom: 2,
                borderRadius: 2,
                padding: "10px",
                ":hover": { bgcolor: "#ff3d00" },
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default GradientButton;
