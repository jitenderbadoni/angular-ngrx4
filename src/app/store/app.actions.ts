import { Action } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { state } from "@angular/core";
import { User } from "../model/User";
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'ADD_USER';
export const CLEAR_USER = 'CLEAR_COUNTER';
export const GET_ALL_USER= 'GET_ALL_USER';

export class AddUserAction implements Action {
    readonly type = ADD_USER;
    constructor(public payload:User){}
}

export class ClearUserAction implements Action {
    readonly type = CLEAR_USER;
}

export class GetAllUserAction implements Action {
    readonly type = GET_ALL_USER;
}

export type Actions = AddUserAction | GetAllUserAction | ClearUserAction;