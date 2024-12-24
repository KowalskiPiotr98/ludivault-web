import GameTitleInlineEdit from "./gameTitleInlineEdit.tsx";
import InlineStack from "../../common/inlineStack.tsx";
import {Box, Paper} from "@mui/material";

export default function GameDetailsHeader() {
    return <Paper sx={{px: 2}}>
        <InlineStack>
            <Box sx={{width: "100%"}}>
                <h2>
                    <GameTitleInlineEdit/>
                </h2>
            </Box>
        </InlineStack>
    </Paper>
}
