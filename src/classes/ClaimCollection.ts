import Claim from './Claim'

export default class ClaimCollection {
    claims: Claim[]

    constructor() {
        this.claims = []
    }

    addClaims(claim: Claim) {
        this.claims.push(claim)
    }
}
