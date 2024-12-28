import {Box, Button} from "@mui/material";

class PropTypes {
    onClick: () => void = undefined!;
}

export default function FormCancelButton({onClick}: Readonly<PropTypes>) {
    return <Box sx={{p: 1, display: "flex", justifyContent: "right"}}>
        <Button variant={"outlined"} type={"reset"} onClick={onClick}>Cancel</Button>
    </Box>
}
