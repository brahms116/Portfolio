import IError from "./IError";

export default interface IOutput {
  isSuccess: boolean;
  payload: any;
  error: IError | null;
}
