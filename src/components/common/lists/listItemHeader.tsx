import {ReactNode} from "react";

class PropTypes {
    children: string | ReactNode | ReactNode[] = undefined!;
}

export default function ListItemHeader({children}: PropTypes) {
    return <div className="w-full uppercase border-b p-2">
        {children}
    </div>
}
