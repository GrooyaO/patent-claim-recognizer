import { ClaimCollection } from '../classes/ClaimCollection'

export default interface ITextParser {
    parseClaims(fileText: string): ClaimCollection
}
