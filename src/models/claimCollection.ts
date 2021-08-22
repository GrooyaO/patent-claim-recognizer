import { Claim } from './claim'

class ClaimCollection {
    claims: Claim[]

    constructor() {
        this.claims = []
    }

    addClaims(claim: Claim) {
        this.claims.push(claim)
    }
}

export { ClaimCollection }
