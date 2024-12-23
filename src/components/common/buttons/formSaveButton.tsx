import FormActionButton from "./formActionButton.tsx";

class PropTypes {
    onClick?: () => void = undefined!;
}

export default function FormSaveButton({onClick}: PropTypes) {
    return <FormActionButton text={"Save"} onClick={onClick}/>
}
