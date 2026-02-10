import type { Province } from "./provinve";
import type { Region } from "./region";

export interface User {
    _id?: string;
    firstName?: string,
    lastName?: string,
    middleName?: string,
    phone?: string,
    password?: string,
    role?: string,
    photo?: string,
    province?: Province,
    region?: Region
}