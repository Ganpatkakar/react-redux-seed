import { INITIAL_STATE} from "../enums";

export function CommonAction (data) {
    return { type: INITIAL_STATE, payload: data }
};