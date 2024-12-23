import {Box, Button} from "@mui/material";

class PropTypes {
    onClick?: () => void = undefined!;
}

export default function FormCreateButton({onClick}: PropTypes) {
    return <Box sx={{p: 1, display: "flex", justifyContent: "right"}}>
        <Button type={"submit"} variant={"contained"} onClick={() => onClick?.()}>Create</Button>
    </Box>
}
