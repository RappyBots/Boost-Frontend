export function getCookie(name: string) {
    const cookie = document.cookie.split(';').find((c: string) => c.trim().startsWith(name + '='))?.split('=');

    return cookie ? {
        name: cookie[0],
        value: cookie[1],
    } : null;
}