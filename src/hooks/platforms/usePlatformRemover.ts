import {useState} from "react";
import Platform from "../../models/platform.ts";
import {deletePlatform} from "../../requests/platforms.ts";

export function usePlatformRemover() {
    const [removing, setRemoving] = useState(false);
    const [error, setError] = useState<string>();

    const remover = async (platform: Platform) => {
        setRemoving(true);
        setError(undefined);

        try {
            const {response} = await deletePlatform(platform);

            if (response.status === 404) {
                setError('Platform not found.');
                return undefined;
            }
            if (response.status === 409) {
                setError('Platform is still in use by other items.');
                return undefined;
            }

            throw "Unexpected response code received when removing a platform";
        } finally {
            setRemoving(false);
        }
    }

    return {remover, removing, error};
}
