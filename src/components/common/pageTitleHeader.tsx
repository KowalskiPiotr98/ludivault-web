import {ReactNode} from "react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function PageTitleHeader({children}: PropTypes) {
    return <h3 className={"w-full border p-2 m-1 text-center"}>{children}</h3>
}
