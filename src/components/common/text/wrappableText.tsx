import {Box, SxProps, Theme} from "@mui/material";

class PropTypes {
    text: string = undefined!;
    sx?: SxProps<Theme>;
}

export default function WrappableText({text, sx}: Readonly<PropTypes>) {
    return <Box sx={{textWrap: "wrap", wordWrap: "break-word", display: "inline", ...sx}}>{text}</Box>
}
