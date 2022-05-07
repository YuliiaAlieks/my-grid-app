export type FetchUsersApiResponse = {
    info: {
        page: number,
        totalSize: number,
        limit: number
    },
    results: ApiUser[]
};

export type FetchUserDetailsApiResponse = ApiUserDetails;

export type ApiUser = {
    gender: string,
    name: {
        first: string,
        last: string
    },
    email: string,
    login: {
        username: string
    },
    registered: {
        date: string,
    },
    phone: string,
    picture: {
        thumbnail: string
    },
    nat: string

};

export type ApiUserDetails = {
    gender: string,
    name: {
        first: string,
        last: string
    },
    email: string,
    login: {
        username: string
    },
    registered: {
        date: string,
    },
    phone: string,
    picture: {
        large: string
    },
    nat: string,
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        country: string
    },
    dob: {
        age: number
    }
}

export type NormalizedUser = {
    gender: string,
    name: string,
    email: string,
    username: string,
    registerDate: string,
    phone: string,
    thumbnail: string,
    nationality: string,
}

export type NormalizedUserDetails = {
    gender: string,
    name: string,
    email: string,
    username: string,
    registerDate: string,
    phone: string,
    image: string,
    nationality: string,
    address: string
    age: number
}