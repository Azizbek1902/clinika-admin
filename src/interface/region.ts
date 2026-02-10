import type { Province } from "./provinve";

export interface Region {
    _id?: string;
    title?: string;
    province?: Province;
}