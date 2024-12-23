import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import { Button } from "@mui/material";

class PropTypes {
    onClick: () => void = undefined!;
    title?: string | undefined;
    disabled?: boolean = false;
}

export default function CreateButton({onClick, title = undefined, disabled = false}: PropTypes) {
    return <Button type="button" title={title} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={faPlus}/>
    </Button>
}
