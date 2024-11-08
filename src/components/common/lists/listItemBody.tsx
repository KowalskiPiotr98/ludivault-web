import {ReactNode} from "react";

class PropTypes {
    children: string | ReactNode | ReactNode[] = undefined!;
}

export default function ListItemBody({children}: PropTypes) {
    return <div className="w-full p-1">
        {children}
    </div>
}
