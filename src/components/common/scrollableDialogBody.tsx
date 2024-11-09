import {ReactNode} from "react";
import {DialogPanel} from "@headlessui/react";

class PropTypes {
    children: ReactNode | ReactNode[] = undefined!;
}

export default function ScrollableDialogBody({children}: PropTypes) {
    return <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                {children}
            </DialogPanel>
        </div>
    </div>
}
