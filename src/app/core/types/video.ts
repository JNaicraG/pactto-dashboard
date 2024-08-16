export interface Video{
    name:string,
    videoSource?:string,
    file?:File,
    thumbnailSource?:string
    date:string,
    hour:string,
    tags:string[],
}