import NewsInterface from "./news.interface"

export interface ITransformHtml {
    executeAll(): NewsInterface[]
    // executeOne(): NewsInterface
    totalNumberOfPages(): number
}