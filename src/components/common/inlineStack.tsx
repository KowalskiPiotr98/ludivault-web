import {Stack} from "@mui/material";
import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function InlineStack({children}: PropTypes) {
    return <Stack direction={"row"} sx={{width: "100%", overflow: "hidden"}}>
        {children}
    </Stack>
}
