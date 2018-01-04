import { Component, OnInit } from '@angular/core';
import { Http , Headers ,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  mesg: any;
  constructor( private http:Http) { }
  ngOnInit() {
  }
   onSubmit = function (user) {
    console.log(user);
    //this.http.post('http://xxx/externalapi/add', user);
    let parm=JSON.stringify(user);
    console.log(parm);
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.post("/api/send", parm, options).map(res=>this.mesg =res.json()).subscribe(data => {
      //(res =>res.json()).then(res=> console.log(res.json()));
     });
  }

}
