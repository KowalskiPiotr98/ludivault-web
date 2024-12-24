import {ReactNode} from "react";
import {Box, Typography} from "@mui/material";

class PropTypes {
    children: string | ReactNode | ReactNode[] = undefined!;
}

export default function ListItemBody({children}: PropTypes) {
    return <Box sx={{flex: 1, overflow: "hidden", textWrap: "wrap"}}>
        <Typography>
            {children}
        </Typography>
    </Box>
}
