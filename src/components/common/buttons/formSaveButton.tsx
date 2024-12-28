import FormActionButton from "./formActionButton.tsx";

class PropTypes {
    onClick?: () => void = undefined!;
    disabled?: boolean;
}

export default function FormSaveButton({onClick, disabled}: Readonly<PropTypes>) {
    return <FormActionButton text={"Save"} disabled={disabled} onClick={onClick}/>
}
