import {ReactNode} from "react";

class PropTypes {
    children: string | ReactNode | ReactNode[] = undefined!;
}

export default function ListItemBody({children}: PropTypes) {
    return <div className="flex w-full p-1">
        {children}
    </div>
}
