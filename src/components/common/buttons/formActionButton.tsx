import {Box, Button} from "@mui/material";

class PropTypes {
    onClick?: () => void = undefined!;
    text: string = undefined!;
    disabled?: boolean;
}

export default function FormActionButton({onClick, text, disabled}: Readonly<PropTypes>) {
    return <Box sx={{p: 1, display: "flex", justifyContent: "right"}}>
        <Button type={"submit"} variant={"contained"} disabled={disabled} onClick={() => onClick?.()}>{text}</Button>
    </Box>
}
