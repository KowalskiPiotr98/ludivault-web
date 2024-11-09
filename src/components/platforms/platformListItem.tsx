import Platform from "../../models/platform.ts";
import WrappableText from "../common/text/wrappableText.tsx";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import ListItemMenu from "../common/lists/listItemMenu.tsx";
import DeleteButton from "../common/buttons/deleteButton.tsx";
import PlatformEditHandler from "./platformEditHandler.tsx";

class PropTypes {
    item: Platform = undefined!;
}

export default function PlatformListItem({item}: PropTypes) {
    return <ListItem>
        <ListItemBody>
            <span className="me-1 text-right min-w-24">({item.shortName})</span>
            <WrappableText text={item.name}/>
            <ListItemMenu>
                <PlatformEditHandler platform={item}/>
                <DeleteButton onTrigger={() => {}} title={`Delete platform ${item.name}`}/>
            </ListItemMenu>
        </ListItemBody>
    </ListItem>
}
