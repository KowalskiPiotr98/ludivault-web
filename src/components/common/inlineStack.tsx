import {Stack, SxProps, Theme} from "@mui/material";
import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
    sx?: SxProps<Theme>;
}

export default function InlineStack({children, sx}: PropTypes) {
    return <Stack direction={"row"} sx={{width: "100%", overflow: "hidden", ...sx}}>
        {children}
    </Stack>
}
