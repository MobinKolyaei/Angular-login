import { Component } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string='';
  needMessage:boolean=false;
  person = {
    firstname:'',
    lastname:'',
    gender:'',
    nezam:'',
    married:false,
    children:0,
  };
  cancel(){
    this.person.firstname='';
    this.person.lastname='';
    this.person.gender='';
    this.person.nezam='';
    this.person.married=false;
    this.person.children=0;
    this.message='';
  }
  key(e:KeyboardEvent){
    if (e.key>='0' && e.key<='9') {
      e.preventDefault();
    }
  }
  number(n:KeyboardEvent){
    if(n.key.includes('-') || n.key.includes('.') || n.key.includes('+')){
      n.preventDefault();
    }
  }
  final(){
    if(this.person.firstname=='' || this.person.lastname==''){
      this.needMessage=true;
    }
    if(this.needMessage){
      this.message='لطفا نام و نام خانوادگی خود را وارد کنید';
    }
  }
}
