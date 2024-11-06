import Platform from "../../models/platform.ts";

class PropTypes {
    item: Platform = undefined!;
}

export default function PlatformListItem({item}: PropTypes) {
    return <>{item.name}</>
}
