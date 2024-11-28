import usePaginationContext from "../../contexts/paginationContext.ts";
import {Button} from "@headlessui/react";

export default function PageSelector() {
    const pagination = usePaginationContext();

    //todo: needs styling, placeholder for now
    return <div>
        {pagination.data.current > 1 && <Button onClick={() => pagination.goToPrevious()}>Prev</Button>}
        {pagination.data.current}
        {!pagination.data.isLast && <Button onClick={() => pagination.goToNext()}>Next</Button>}
    </div>
}
