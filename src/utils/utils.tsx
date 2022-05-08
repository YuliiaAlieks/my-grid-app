import { ApiUser, ApiUserDetails, NormalizedUser, NormalizedUserDetails } from "../features/users/types";

export const debounce = (func: (value: any) => void, timeout = 300) => {
    let timer: any;
    return (value?: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(value) }, timeout);
    };
}


export const normalizeUsers = (apiUsers: ApiUser[]): NormalizedUser[] => {
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
            id: u.id
        };
    });

    return normalizedUsers;
}

export const normalizeUserDetails = (apiUserDetails: ApiUserDetails): NormalizedUserDetails => {
    const normalizeUserDetails = {
        gender: apiUserDetails.gender,
        name: `${apiUserDetails.name.first} ${apiUserDetails.name.last}`,
        email: apiUserDetails.email,
        username: apiUserDetails.login.username,
        registerDate: apiUserDetails.registered.date,
        phone: apiUserDetails.phone,
        image: apiUserDetails.picture.large,
        nationality: apiUserDetails.nat,
        address: `${apiUserDetails.location.street.number} ${apiUserDetails.location.street.name}, 
            ${apiUserDetails.location.city}, ${apiUserDetails.location.country}`,
        age: apiUserDetails.dob.age,
        id: apiUserDetails.id
    };

    return normalizeUserDetails;
}

export const buildQuery = (params: Record<string, string | number>): string => {
    //result=10&page=1
    const queryStr = Object.entries(params)
        .filter(([, value]) => value !== '')
        .map(([key, value]) => `${key}=${value}`).join('&');
    // console.log("🧚 ~ queryStr", queryStr);

    return queryStr ? `?${queryStr}` : "";
}