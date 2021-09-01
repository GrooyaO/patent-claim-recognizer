export default class Claim {
    order: number
    body: string
    subClaims: string[]

    constructor(order: number, body: string, subClaims: string[]) {
        this.order = order
        this.body = body
        this.subClaims = subClaims
    }
}
