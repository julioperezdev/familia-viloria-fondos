export interface Data{
    spanish : ParticularData,
    english : ParticularData,
}

export interface ParticularData{
    header : HeaderType,
    index : IndexType,
    // howWeAre : HowWeAre
}

export interface HeaderType{
    title: string,
    links : Array<LinksObject>,
}

export interface LinksObject{
    text : string,
    url : string
}

export interface IndexType{
    description : DescriptionComponent,
    accounts : AccountOptions
}

export interface DescriptionComponent{
    title: string,
    subtitle: string,
    paragraphs : Array<ParagraphsObject>
}

export interface ParagraphsObject{
    id:number,
    text: string
}

export interface AccountOptions{
    description:string,
    email : string,
    options : Array<Option>
}

export interface Option{
    country : string,
    imageUrl : string,
    accounts : Array<AccountType>
}

export interface AccountType{
    text: string,
    number: string
}

export interface HowWeAre{
    title : string,
    paragraphs : Array<string>
}

