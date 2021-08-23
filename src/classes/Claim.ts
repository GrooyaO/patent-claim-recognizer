export default class Claim {
    order: number
    body: string

    constructor(order: number, body: string) {
        this.order = order
        this.body = body
    }
}
