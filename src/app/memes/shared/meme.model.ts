export interface IMeme
{
    id:number,
    name:string,
    title:string,
    urlOfImage:string,
    session?: ISession[]
}

export interface ISession
{
    id:number,
    name:string,
    presenter:string,
    duration:string,
    level:string,
    abstract:string,
    voters:string[]
}