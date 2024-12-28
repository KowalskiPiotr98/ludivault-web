import {ReactNode} from "react";
import {Stack} from "@mui/material";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined;
}

export default function ListTopButtonRow({children}: Readonly<PropTypes>) {
    return <Stack sx={{py: 2}} spacing={2}>{children}</Stack>;
}
