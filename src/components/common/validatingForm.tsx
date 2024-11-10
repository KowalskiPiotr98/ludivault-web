import {FormEvent, ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
    onValidSubmit: () => void = undefined!;
}

export default function ValidatingForm({children, onValidSubmit}: PropTypes) {
    const submitter = (e: FormEvent) => {
        e.preventDefault();
        // @ts-expect-error: for some reason, checkValidity() is not known to the transpiler
        if (e.target.checkValidity())
            onValidSubmit();
    }

    return <form onSubmit={submitter}>
        {children}
    </form>
}
