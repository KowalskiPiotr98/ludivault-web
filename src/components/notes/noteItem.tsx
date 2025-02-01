import Note from "../../models/note.ts";
import {ListItem} from "@mui/material";
import ListItemBody from "../common/lists/listItemBody.tsx";

class PropTypes {
    noteTitle: Note = undefined!;
}

export default function NoteItem({noteTitle}: Readonly<PropTypes>) {
    return <ListItem>
        <ListItemBody>
            {noteTitle.title}
        </ListItemBody>
    </ListItem>
}
