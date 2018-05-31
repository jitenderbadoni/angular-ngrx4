import { User } from "../model/User";
import * as userAction from "../store/app.actions"
export const initialState: User = { id : 0, name : 'Jitender'};

export function reducer(state: User[] = [], action: userAction.Actions){
    switch(action.type) {
      case userAction.ADD_USER:
        return [...state, action.payload];
      default:
          return state;
      }
  }