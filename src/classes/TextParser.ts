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
        const arrOfClaims = text.split(/\n\d{1,}\.\s/)

        return arrOfClaims
    }

    //Execute given statement on each distinct array element (object)
    //Returns array of objects
    private generateClaims(
        collection: ClaimCollection,
        claims: string[]
    ): void {
        let claimOrderNum = 1

        for (let claim of claims) {
            collection.addClaims(
                new Claim(claimOrderNum, claim.replace(/(\r\n|\n|\r)/gm, ''))
            )
        }
        claimOrderNum++
    }
}
