export async function get(url: string, ...query: {name: string, value: string | undefined}[]) {
    const params = new URLSearchParams();

    for (const param of query) {
        if (param.value === undefined)
            continue;

        params.set(param.name, param.value);
    }

    return await fetch(prependPath(`${url}?${params.toString()}`), {method: "GET"});
}

export async function post<T>(url: string, body: T) {
    return await fetch(prependPath(url), {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
    });
}

export async function put<T>(url: string, body: T) {
    return await fetch(prependPath(url), {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
    });
}

export async function deleteReq(url: string) {
    return await fetch(prependPath(url), {method: "DELETE"});
}

function prependPath(url: string) {
    if (url.startsWith("/"))
        url = url.substring(1);

    return `/api/v1/${url}`;
}
