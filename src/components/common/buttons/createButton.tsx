import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "@headlessui/react";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

class PropTypes {
    onClick: () => void = undefined!;
    title?: string | undefined;
    disabled?: boolean = false;
}

export default function CreateButton({onClick, title = undefined, disabled = false}: PropTypes) {
    return <Button type="button" className="px-1" title={title} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={faPlus}/>
    </Button>
}
