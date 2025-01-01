import useCurrentUser from "../../contexts/currentUserContext.ts";
import {Box, Link} from "@mui/material";

export default function LoginBar() {
    const user = useCurrentUser();

    if (user.currentUser)
        return <Box>
            <Link href={'/api/v1/auth/logout'} underline={"hover"} color={"inherit"}>Log out ({user.currentUser.email})</Link>
        </Box>
    return <Link href={'/login'} underline={"hover"} color={"inherit"}>Log in</Link>
}
