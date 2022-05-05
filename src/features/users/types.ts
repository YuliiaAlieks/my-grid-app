export type FetchUsersApiResponse = {
    info: {
        page: number,
        totalSize: number,
        limit: number
    },
    results: ApiUser[]
}

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