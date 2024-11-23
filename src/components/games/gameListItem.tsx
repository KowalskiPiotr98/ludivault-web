import Game from "../../models/game.ts";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import WrappableText from "../common/text/wrappableText.tsx";

class PropTypes {
    game: Game = undefined!;
}

export default function GameListItem({game}: PropTypes) {
    return <ListItem>
        <ListItemBody>
            <WrappableText text={game.title}/>
        </ListItemBody>
    </ListItem>
}
