export class ToDoItemModel{
    icon: string;
    title: string;
    description: string;
    finished: boolean;

    constructor(icon:string = "",title:string ="",desription:string ="",finished:boolean = false){
        this.icon = icon,
        this.title = title,
        this.description = desription,
        this.finished = finished
    }
        
}