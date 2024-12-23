import {Box} from "@mui/material";

class PropTypes {
    text: string = undefined!;
}

export default function WrappableText({text}: PropTypes) {
    return <Box sx={{textWrap: "wrap", wordWrap: "break-word", display: "inline"}}>{text}</Box>
}
