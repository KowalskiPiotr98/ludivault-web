import {useEffect, useState} from "react";
import {getProviders} from "../../requests/users.ts";

export default function useProviders() {
    const [loading, setLoading] = useState(false);
    const [providers, setProviders] = useState<string[]>([]);

    useEffect(() => {
        const act = async () => {
            setLoading(true);
            try {
                setProviders(await getProviders());
            } finally {
                setLoading(false);
            }
        }

        act();
    }, []);

    return {providers, loading};
}
