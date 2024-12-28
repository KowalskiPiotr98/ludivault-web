import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import {Button} from "@mui/material";

class PropTypes {
    onTrigger: () => void = undefined!;
    title?: string;
    disabled?: boolean = false;
}

export default function DeleteButton({onTrigger, disabled = false, title = undefined}: Readonly<PropTypes>) {
    const [clicked, setClicked] = useState(false);

    const reset = () => setClicked(false);

    const trigger = () => {
        if (!clicked) {
            setClicked(true);
            return;
        }
        
        onTrigger();
        reset();
    }

    return <Button
        color={"warning"}
        title={clicked ? "Click again to confirm" : title}
        onClick={trigger}
        disabled={disabled}
        onMouseLeave={reset}
        type="button"
    >
        {clicked ? <FontAwesomeIcon icon={faSquareCheck}/> : <FontAwesomeIcon icon={faTrash}/>}
    </Button>
}
