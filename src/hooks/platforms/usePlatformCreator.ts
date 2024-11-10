import {useState} from "react";
import Platform from "../../models/platform.ts";
import {createPlatform} from "../../requests/platforms.ts";

export function usePlatformCreator() {
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState<string>();

    const creator = async (newPlatform: Platform): Promise<Platform | undefined> => {
        setCreating(true);
        setError(undefined);

        try {
            const {platform, response} = await createPlatform(newPlatform);
            if (platform)
                return platform;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }
            if (response.status === 409) {
                setError('Platform with this name or short name already exists.');
                return undefined;
            }

            throw "Unexpected response code received when creating platform";
        } finally {
            setCreating(false);
        }
    }

    return {creator, creating, error};
}
