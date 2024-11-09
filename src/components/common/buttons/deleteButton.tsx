import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "@headlessui/react";
import {useState} from "react";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons/faSquareCheck";

class PropTypes {
    onTrigger: () => void = undefined!;
    title?: string | undefined;
    disabled?: boolean = false;
}

export default function DeleteButton({onTrigger, disabled = false, title = undefined}: PropTypes) {
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
        className="px-1 text-danger"
        title={title}
        onClick={trigger}
        disabled={disabled}
        onMouseLeave={reset}
    >
        {clicked ? <FontAwesomeIcon icon={faSquareCheck}/> : <FontAwesomeIcon icon={faTrash}/>}
    </Button>
}
