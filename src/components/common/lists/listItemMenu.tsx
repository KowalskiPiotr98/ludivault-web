import {ReactNode} from "react";
import {Box} from "@mui/material";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ListItemMenu({children}: PropTypes) {
    return <Box>
        {children}
    </Box>
}
