import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listavuelos',
  templateUrl: './listavuelos.page.html',
  styleUrls: ['./listavuelos.page.scss'],
})
export class ListavuelosPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers().suscribe(res=>{
      console.log ("Res", res)
    });
  }
  getUsers(){
    return this.http
    get("assets/files/datavuelos.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }
}
