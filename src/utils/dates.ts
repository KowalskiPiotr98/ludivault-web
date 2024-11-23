export function getDateValueString(date: Date | undefined): string {
    if (!date)
        return "";

    const isoString = date.toISOString();
    return isoString.split("T")[0];
}
