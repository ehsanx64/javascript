export function GetSamplePersons() {
    return [
        {
            id: 1,
            name: "Jack",
        },
        {
            id: 2,
            name: "George",
        },
        {
            id: 3,
            name: "John",
        },
    ];
}


export function IsDevMode() {
    return import.meta.env.VITE_DEV_MODE === 'true';
}

export function GetAppName() {
    return import.meta.env.VITE_APPNAME;
}