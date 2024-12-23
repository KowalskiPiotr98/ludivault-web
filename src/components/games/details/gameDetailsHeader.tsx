import GameTitleInlineEdit from "./gameTitleInlineEdit.tsx";
import InlineStack from "../../common/inlineStack.tsx";
import {Box} from "@mui/material";

export default function GameDetailsHeader() {
    return <>
        <InlineStack>
            <Box sx={{width: "100%"}}>
                <h2>
                    <GameTitleInlineEdit/>
                </h2>
            </Box>
        </InlineStack>
    </>
}
