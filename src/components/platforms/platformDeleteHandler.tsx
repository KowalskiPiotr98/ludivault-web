import Platform from "../../models/platform.ts";
import DeleteButton from "../common/buttons/deleteButton.tsx";
import {usePlatformRemover} from "../../hooks/platforms/usePlatformRemover.ts";
import usePlatformsIndex from "../../contexts/platformsIndexContext.ts";

class PropTypes {
    platform: Platform = undefined!;
}

export default function PlatformDeleteHandler({platform}: PropTypes) {
    const {remover, removing} = usePlatformRemover();
    const platforms = usePlatformsIndex();

    const submit = async () => {
        const error = await remover(platform);
        if (error) {
            alert(`Failed to remove platform: ${error}`);
            return;
        }

        platforms.deletePlatform(platform);
    }

    return <>
        <DeleteButton onTrigger={submit} disabled={removing} title={`Delete platform ${platform.name}`}/>
    </>
}
