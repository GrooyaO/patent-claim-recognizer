import ClaimCollection from './ClaimCollection'

export default class Claim {
    order: number
    body: string
    subClaims: Claim[]

    constructor(order: number, body: string, subClaims: Claim[]) {
        this.order = order
        this.body = body
        this.subClaims = subClaims
    }
    getClaim(order: number, collection: ClaimCollection) {
        for (let collectedClaim of collection.claims) {
            if (order === collectedClaim.order) {
                return collectedClaim
            }
        }
    }
}
