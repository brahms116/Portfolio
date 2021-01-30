import data from "./data.json";
import IGetIdResponse from "./models/IGetIdResponse";
import IGetItemsResponse from "./models/IGetItemsResponse";
import IOutput from "./models/IOutput";

const Success = <T extends IOutput>(payload: any) => {
  return {
    isSuccess: true,
    payload: payload ? payload : null,
    error: null,
  } as T;
};

const DbService = {
  getAllItems: () => {
    return Success<IGetItemsResponse>({ items: data });
  },
  getAllId: () => {
    let result: string[] = [];
    for (const i of data) {
      result.push(i.id);
    }
    return Success<IGetIdResponse>({ ids: result });
  },
};

export default DbService;
