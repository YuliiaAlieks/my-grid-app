import { ApiUser, NormalizedUser } from "../features/users/types";

export const debounce = (func: (value: any) => void, timeout = 300) => {
    let timer: any;
    return (value?: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(value) }, timeout);
    };
}


export const normalizeUsers = (apiUsers:ApiUser[]): NormalizedUser[] => {
    const normalizedUsers = apiUsers.map(u => {
        return {
            gender: u.gender,
            name: `${u.name.first} ${u.name.last}`,
            email: u.email,
            username: u.login.username,
            registerDate: u.registered.date,
            phone: u.phone,
            thumbnail: u.picture.thumbnail,
            nationality: u.nat,
        };
    });

    return normalizedUsers;
}

export const buildQuery = (params: Record<string, string | number>): string => {
    //result=10&page=1
    const queryStr = Object.entries(params)
        .filter(([, value]) => value !== '')
        .map(([key, value]) => `${key}=${value}`).join('&');
    // console.log("🧚 ~ queryStr", queryStr);

    return queryStr ? `?${queryStr}` : "";
}