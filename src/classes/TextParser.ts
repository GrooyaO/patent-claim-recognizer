import ITextParser from '../interfaces/IClaimParser'
import ClaimCollection from './ClaimCollection'
import Claim from './Claim'

export default class TextParser implements ITextParser {
    public parseClaims(claimText: string): ClaimCollection {
        if (claimText === '') {
            throw new Error('String must not be empty!')
        }

        const claimCollection = new ClaimCollection()

        const claims = this.splitString(claimText)

        this.generateClaims(claimCollection, claims)

        return claimCollection
    }

    //Split string against pattern
    //Returns new array of strings
    private splitString(text: string): string[] {
        const arrOfClaims = text.replace(/\d{1,}\.\s/, '').split(/\n\d{1,}\.\s/)

        return arrOfClaims
    }

    //Execute given statement on each distinct array element (object)
    //Returns array of objects
    private generateClaims(
        collection: ClaimCollection,
        claims: string[]
    ): void {
        let claimOrderNum = 1
        let orderNum = 1
        for (let claim of claims) {
            const body = claim.replace(/(\r\n|\n|\r|)/gm, '')

            collection.addClaims(new Claim(claimOrderNum, body, []))
            claimOrderNum++
        }
        for (let collectedClaim of collection.claims) {
            for (let claim of claims) {
                if (claim.indexOf(`claim ${collectedClaim.order},`) !== -1) {
                    const body = claim.replace(/(\r\n|\n|\r|)/gm, '')
                    collectedClaim.subClaims.push(new Claim(orderNum, body, []))
                }
                orderNum++
            }
            orderNum = 1
        }
        this.replaceClaims(collection)
    }
    private replaceClaims(collection: ClaimCollection) {
        for (let collectedClaim of collection.claims) {
            for (let subClaims of collectedClaim.subClaims) {
                const index = collectedClaim.subClaims.indexOf(subClaims)
                const c = subClaims.getClaim(subClaims.order, collection)
                collectedClaim.subClaims[index] = c
            }
        }
    }
}
