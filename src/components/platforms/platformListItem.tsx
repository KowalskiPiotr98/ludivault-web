import Platform from "../../models/platform.ts";
import WrappableText from "../common/text/wrappableText.tsx";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import ListItemMenu from "../common/lists/listItemMenu.tsx";
import PlatformEditHandler from "./platformEditHandler.tsx";
import PlatformDeleteHandler from "./platformDeleteHandler.tsx";
import {Grid2} from "@mui/material";

class PropTypes {
    item: Platform = undefined!;
}

export default function PlatformListItem({item}: Readonly<PropTypes>) {
    return <ListItem>
        <ListItemBody>
            <Grid2 container>
                <Grid2 size={{xs: 12, md: 2}}>
                    ({item.shortName})
                </Grid2>
                <Grid2 size={{xs: 12, md: "grow"}}>
                    <WrappableText text={item.name}/>
                </Grid2>
            </Grid2>
        </ListItemBody>
        <ListItemMenu>
            <PlatformEditHandler platform={item}/>
            <PlatformDeleteHandler platform={item}/>
        </ListItemMenu>
    </ListItem>
}
