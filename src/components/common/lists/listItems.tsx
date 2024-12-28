import {Stack} from "@mui/material";
import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ListItems({children}: Readonly<PropTypes>) {
    return <Stack spacing={2}>{children}</Stack>
}
