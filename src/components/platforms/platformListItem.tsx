import Platform from "../../models/platform.ts";
import WrappableText from "../common/text/wrappableText.tsx";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import ListItemMenu from "../common/lists/listItemMenu.tsx";
import PlatformEditHandler from "./platformEditHandler.tsx";
import PlatformDeleteHandler from "./platformDeleteHandler.tsx";

class PropTypes {
    item: Platform = undefined!;
}

export default function PlatformListItem({item}: PropTypes) {
    return <ListItem>
        <ListItemBody>
            <span>({item.shortName})</span>
            <WrappableText text={item.name}/>
            <ListItemMenu>
                <PlatformEditHandler platform={item}/>
                <PlatformDeleteHandler platform={item}/>
            </ListItemMenu>
        </ListItemBody>
    </ListItem>
}
