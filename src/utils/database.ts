import data from "../information.json"
import {Data, ParticularData} from "../models/data"

export const SPANISH_LANGUAGE : string = "spanish"
export const ENGLISH_LANGUAGE : string = "english"
export const LOCAL_STORAGE_PARAMETER : string = "language"

const createConnection = () : Data =>{
    let converted : Data = data;
    return converted;
}

export const getSpanishData = () : ParticularData =>{
    return createConnection().spanish;
}

export const getEnglishData = () : ParticularData =>{
    return createConnection().english;
}