import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.css']
})
export class BoxesListComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getBoxes().subscribe(data => {
      console.log(data);
    });
  }

}
