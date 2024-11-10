import {useState} from "react";
import Platform from "../../models/platform.ts";
import {deletePlatform} from "../../requests/platforms.ts";

export function usePlatformRemover() {
    const [removing, setRemoving] = useState(false);
    const [error, setError] = useState<string>();

    const remover = async (platform: Platform): Promise<string | undefined> => {
        setRemoving(true);
        setError(undefined);

        try {
            const {response} = await deletePlatform(platform);
            if (response.ok)
                return undefined;

            if (response.status === 404) {
                const tempError = "Platform not found.";
                setError(tempError);
                return tempError;
            }
            if (response.status === 409) {
                const tempError = "Platform is still in use by other items.";
                setError(tempError);
                return tempError;
            }

            throw "Unexpected response code received when removing a platform";
        } finally {
            setRemoving(false);
        }
    }

    return {remover, removing, error};
}
