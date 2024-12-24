import FormActionButton from "./formActionButton.tsx";

class PropTypes {
    onClick?: () => void = undefined!;
}

export default function FormCreateButton({onClick}: PropTypes) {
    return <FormActionButton text={"Create"} onClick={onClick}/>
}
