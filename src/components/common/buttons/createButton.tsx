import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import { Button } from "@mui/material";

class PropTypes {
    onClick: () => void = undefined!;
    title?: string;
    disabled?: boolean = false;
}

export default function CreateButton({onClick, title = undefined, disabled = false}: Readonly<PropTypes>) {
    return <Button variant={"outlined"} type="button" title={title} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={faPlus}/>
    </Button>
}
