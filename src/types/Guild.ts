export default class Guild {
    id: string
    name: string
    icon: string
    banner: string
    
    constructor(data: any) {
        this.id = data.id
        this.name = data.name
        this.icon = data.icon
        this.banner = data.banner
    }
}