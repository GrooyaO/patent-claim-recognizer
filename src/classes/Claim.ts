export default class Claim {
    order: number
    body: string
    subClaims: Claim[]

    constructor(order: number, body: string, subClaims: Claim[]) {
        this.order = order
        this.body = body
        this.subClaims = subClaims
    }
}
