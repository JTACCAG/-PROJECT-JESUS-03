import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any;

  constructor(
    private appService: AppService
  ){ }

  ngOnInit(): void {
    console.log('entro');
    this.appService.getHello().subscribe(resp => {
      console.log(resp);
      this.title = resp;
    }, err => {
      console.log('ERROR');
      console.log(err);
    })
    
  }
}
