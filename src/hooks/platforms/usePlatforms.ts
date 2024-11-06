import {useEffect, useState} from "react";
import Platform from "../../models/platform.ts";
import {getPlatforms} from "../../requests/platforms.ts";
import runDebounced from "../../utils/debounce.ts";

export default function usePlatforms() {
    const [platforms, setPlatforms] = useState<Platform[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {platforms} = await getPlatforms();
                setPlatforms(platforms);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, []);

    return {platforms, setPlatforms, loading};
}
