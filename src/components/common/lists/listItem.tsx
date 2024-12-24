import {ReactNode} from "react";
import {Paper} from "@mui/material";
import InlineStack from "../inlineStack.tsx";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ListItem({children}: PropTypes) {
    return <Paper sx={{p: 1}}>
        <InlineStack>{children}</InlineStack>
    </Paper>
}
