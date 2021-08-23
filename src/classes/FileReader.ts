import fs from 'fs'
import IFileReader from '../interfaces/IFileReader'

export default class FileReader implements IFileReader {
    public read(filePath: string): string {
        return fs.readFileSync(filePath, { encoding: 'utf-8' })
    }
}
