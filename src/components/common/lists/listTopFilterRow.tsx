import {ReactNode} from "react";
import {Box} from "@mui/material";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined;
}

export default function ListTopFilterRow({children}: Readonly<PropTypes>) {
    return <Box sx={{py: 2}}>{children}</Box>;
}
