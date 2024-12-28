import Game from "../../models/game.ts";
import ListItem from "../common/lists/listItem.tsx";
import ListItemBody from "../common/lists/listItemBody.tsx";
import WrappableText from "../common/text/wrappableText.tsx";
import ListItemMenu from "../common/lists/listItemMenu.tsx";
import EditButton from "../common/buttons/editButton.tsx";
import {useNavigate} from "react-router";

class PropTypes {
    game: Game = undefined!;
}

export default function GameListItem({game}: Readonly<PropTypes>) {
    const navigate = useNavigate();

    return <ListItem>
        <ListItemBody>
            <WrappableText text={game.title}/>
        </ListItemBody>
        <ListItemMenu>
            <EditButton onClick={() => navigate(`/games/${game.id}`)}/>
        </ListItemMenu>
    </ListItem>
}
