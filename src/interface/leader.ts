export interface Leader {
    firstName?: string
    lastName?: string
    middleName?: string
    phone?: string
    password?: string
    role?: string
    province?: Province
    group?: Group
}

interface Province {
    _id?: string
    title?: string
}
interface Group {
    _id?: string
    title?: string
}