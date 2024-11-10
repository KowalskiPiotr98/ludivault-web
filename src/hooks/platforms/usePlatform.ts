import {useEffect, useState} from "react";
import Platform from "../../models/platform.ts";
import {getPlatform} from "../../requests/platforms.ts";
import runDebounced from "../../utils/debounce.ts";

export default function usePlatform(id : string) {
    const [platform, setPlatform] = useState<Platform>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const act = async () => {
            try {
                const {platform} = await getPlatform(id);
                setPlatform(platform);
            } finally {
                setLoading(false);
            }
        }

        return runDebounced(act);
    }, [id]);

    return {platform, loading};
}
