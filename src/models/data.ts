export interface Data{
    spanish : ParticularData,
    english : ParticularData,
}

export interface ParticularData{
    header : HeaderType,
    index : IndexType,
    howWeAre : HowWeAre
}

export interface HeaderType{
    links : Array<LinksObject>,
}

export interface LinksObject{
    text : string,
    url : string
}

export interface IndexType{
    descriptionComponent : DescriptionComponent,
    accountOptions : AccountOptions
}

export interface DescriptionComponent{
    paragraphs : Array<string>
}

export interface AccountOptions{
    title : string,
    options : Array<Option>
}

export interface Option{
    country : string,
    imageUrl : string,
    accounts : Array<string>
}

export interface HowWeAre{
    title : string,
    paragraphs : Array<string>
}

