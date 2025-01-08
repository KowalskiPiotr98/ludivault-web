import useGamesIndex from "../../contexts/gamesIndexContext.ts";
import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {tryParseBool} from "../../utils/bools.ts";
import InlineStack from "../common/inlineStack.tsx";

export default function GameFilter() {
    const games = useGamesIndex();

    return <>
        <Box>
            <TextField fullWidth label={"Title"} value={games.titleFilter} onChange={e => games.setTitleFilter(e.target.value)}/>
        </Box>

        <InlineStack sx={{pt: 1}}>
            <FormControl fullWidth>
                <InputLabel id={"owned-label"}>Owned</InputLabel>
                <Select value={games.ownedFilter?.toString()} label={"Owned"} id={"owned"} labelId={"owned-label"} onChange={e => games.setOwnedFilter(tryParseBool(e.target.value))}>
                    <MenuItem value={""}>All</MenuItem>
                    <MenuItem value={"true"}>Owned only</MenuItem>
                    <MenuItem value={"false"}>Not owned only</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id={"released-label"}>Released</InputLabel>
                <Select value={games.releasedFilter?.toString()} label={"Released"} id={"released"} labelId={"released-label"} onChange={e => games.setReleasedFilter(tryParseBool(e.target.value))}>
                    <MenuItem value={""}>All</MenuItem>
                    <MenuItem value={"true"}>Released only</MenuItem>
                    <MenuItem value={"false"}>Not released only</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id={"progress-label"}>In progress</InputLabel>
                <Select value={games.inProgressFilter?.toString()} label={"In progress"} id={"progress"} labelId={"progress-label"} onChange={e => games.setInProgressFilter(tryParseBool(e.target.value))}>
                    <MenuItem value={""}>All</MenuItem>
                    <MenuItem value={"true"}>In progress only</MenuItem>
                    <MenuItem value={"false"}>Not in progress only</MenuItem>
                </Select>
            </FormControl>
        </InlineStack>
    </>
}
