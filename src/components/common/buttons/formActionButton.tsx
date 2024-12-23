import {Box, Button} from "@mui/material";

class PropTypes {
    onClick?: () => void = undefined!;
    text: string = undefined!;
}

export default function FormActionButton({onClick, text}: PropTypes) {
    return <Box sx={{p: 1, display: "flex", justifyContent: "right"}}>
        <Button type={"submit"} variant={"contained"} onClick={() => onClick?.()}>{text}</Button>
    </Box>
}
