import { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween"; // Make sure this path is correct

type Props = {};

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard"); // Example state for active navigation item

    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <img
                    alt="icon"
                    src="../../../icon-white.svg" // Adjust the path according to your project structure
                    width="30px"
                    height="30px"
                />
                {/* Replace PixIcon with an actual MUI icon component if needed */}
                <Typography variant="h4" fontSize="16px" sx={{ margin: '10px 0 0 0' }}>
                    Finance dashboard
                </Typography>
            </FlexBetween>

            {/* Add more components for the right side of the navbar if needed */}
        </FlexBetween>
    );
};

export default Navbar;
