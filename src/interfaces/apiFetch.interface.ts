
export default interface APIFetchInterface {
    getHomePage(): Promise<string | Error>
    get(url: string): Promise<string | Error>
    getAll(pageNumber: number): Promise< string | Error>
}