import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ListItemMenu({children}: PropTypes) {
    return <span className="flex justify-end w-full">
        {children}
    </span>
}
