import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ListItemMenu({children}: PropTypes) {
    return <span>
        {children}
    </span>
}
