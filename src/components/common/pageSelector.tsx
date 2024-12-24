import {Pagination} from "@mui/material";
import usePaginationContext from "../../contexts/paginationContext.ts";

export default function PageSelector() {
    const pagination = usePaginationContext();

    return <Pagination
        sx={{py: 2}}
        onChange={(_, page) => pagination.goToPage(page)}
        count={pagination.data.isLast ? pagination.data.current : pagination.data.current + 1}
    />
}
