import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import {Button} from "@headlessui/react";

class PropTypes {
    onClick: () => void = undefined!;
    title?: string | undefined;
}

export default function EditButton({onClick, title = undefined}: PropTypes) {
    return <Button type="button" className="px-1" title={title} onClick={onClick}>
        <FontAwesomeIcon icon={faPenToSquare}/>
    </Button>
}
