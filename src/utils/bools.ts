export function tryParseBool(value: string): boolean | undefined {
    value = value.toLowerCase();
    if (value === "true")
        return true;
    if (value === "false")
        return false;
    return undefined;
}
