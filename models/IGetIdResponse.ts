import IOutput from "./IOutput";

export interface IGetIdResponsePayload {
  ids: string[];
}

export default interface IGetIdResponse extends IOutput {
  payload: IGetIdResponsePayload | null;
}
