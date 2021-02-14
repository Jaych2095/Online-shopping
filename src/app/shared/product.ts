export class Product{
    public id:number;
    public title:string;
    public description:string;
    public category:string;
    public price:number;
    public avatar:String

    constructor(id:number, title:string, description:string, category:string,price:number,avatar:string)
    {
        this.id=id;
        this.title=title;
        this.description=description;
        this.category=category;
        this.price=price;
        this.avatar=avatar;
    }
}