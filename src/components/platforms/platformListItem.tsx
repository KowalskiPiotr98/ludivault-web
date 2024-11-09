import Platform from "../../models/platform.ts";
import WrappableText from "../common/text/wrappableText.tsx";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";

class PropTypes {
    item: Platform = undefined!;
}

export default function PlatformListItem({item}: PropTypes) {
    return <ListItem>
        <ListItemBody>
            <span className="me-1 text-right min-w-24">({item.shortName})</span>
            <WrappableText text={item.name}/>
        </ListItemBody>
    </ListItem>
}
