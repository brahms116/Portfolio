import IOutput from "./IOutput";
import IPortfolioItem from "./IPortfolioItem";

export interface IGetItemsResponsePayload {
  items: IPortfolioItem[];
}

export default interface IGetItemsResponse extends IOutput {
  payload: IGetItemsResponsePayload | null;
}
