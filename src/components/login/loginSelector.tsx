import useProviders from "../../hooks/auth/useProviders.ts";
import Loader from "../common/loader.tsx";
import ProviderDisplay from "./providerDisplay.tsx";
import {Box, Container, Stack} from "@mui/material";

export default function LoginSelector() {
    const {providers, loading} = useProviders();

    if (loading)
        return <Loader/>
    return <Box sx={{alignItems: "center", m: 2}}>
        <Container maxWidth={'sm'}>
            <h4>Login with your selected provider</h4>
            <Stack>
                {providers.map(p => <ProviderDisplay name={p} key={p}/>)}
            </Stack>
        </Container>
    </Box>
}
