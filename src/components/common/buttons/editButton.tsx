import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {Button} from "@mui/material";

class PropTypes {
    onClick: () => void = undefined!;
    title?: string | undefined;
    disabled?: boolean = false;
}

export default function EditButton({onClick, title = undefined, disabled = false}: Readonly<PropTypes>) {
    return <Button type="button" title={title} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={faPenToSquare}/>
    </Button>
}
