import debounce from "lodash.debounce";

export default function runDebounced(func: () => void): () => void {
    const req = debounce(() => func(), 500);
    req();
    return () => req.cancel()
}
