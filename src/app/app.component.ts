import { Component, OnInit } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { Actions} from "../app/store/app.actions";
import * as userAction from '../app/store/app.actions'
import { AppState } from "./store/app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public id;
  public name;

  public users$;
  constructor(public store:  Store<AppState>){
    this.store.select('user')
    .subscribe((result)=>{
      if(result != null){
        this.users$ = result;
      }
    })
  }
  ngOnInit(){  }

  onAdd(){
   this.store.dispatch(new userAction.AddUserAction({id:parseInt(this.id), name:this.name}));    
  }
}
