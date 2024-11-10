import {useState} from "react";
import Platform from "../../models/platform.ts";
import {updatePlatform} from "../../requests/platforms.ts";

export function usePlatformEditor() {
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState<string>();

    const editor = async (editPlatform: Platform): Promise<Platform | undefined> => {
        setEditing(true);
        setError(undefined);

        try {
            const {platform, response} = await updatePlatform(editPlatform);
            if (platform)
                return platform;

            if (response.status === 400) {
                setError('Invalid data provided.');
                return undefined;
            }
            if (response.status === 404) {
                setError('Platform could not be found.');
                return undefined;
            }
            if (response.status === 409) {
                setError('Platform with this name or short name already exists.');
                return undefined;
            }

            throw "Unexpected response code received when updating a platform";
        } finally {
            setEditing(false);
        }
    }

    return {editor, editing, error};
}
