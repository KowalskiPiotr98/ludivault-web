import {Checkbox} from "@headlessui/react";

class PropTypes {
    id?: string | undefined;
    disabled?: boolean | undefined;
    checked: boolean = undefined!;
    onChange: (checked: boolean) => void = undefined!;
}

export default function StyledCheckbox({id, disabled, checked, onChange}: PropTypes) {
    return <Checkbox
            className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
            id={id}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
        >
        <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
            <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Checkbox>
}
