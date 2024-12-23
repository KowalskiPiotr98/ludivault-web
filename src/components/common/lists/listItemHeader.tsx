import {ReactNode} from "react";

class PropTypes {
    children: string | ReactNode | ReactNode[] = undefined!;
}

export default function ListItemHeader({children}: PropTypes) {
    return <div>
        {children}
    </div>
}
