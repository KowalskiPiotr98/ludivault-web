import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ListItem({children}: PropTypes) {
    return <div>
        {children}
    </div>
}
