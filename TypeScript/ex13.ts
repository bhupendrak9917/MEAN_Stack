interface login{
    username: string
    password: string
}
 
class acc implements login{
    public username: string
    public password: string
    constructor(username: string, password: string){
        this.username = username
        this.password = password
    }
    public getPassword(): string{
        return this.password
    }
}