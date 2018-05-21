import { Box } from './../../../shared/model/box.model';
import { BoxesService } from './../../../shared/services/boxes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.css']
})
export class BoxesListComponent implements OnInit {
  public boxes: Box[] = [];

  constructor(public boxesService: BoxesService) { }

  ngOnInit() {
    this.boxesService.list().subscribe(data => {
      this.boxes = data;
    });
  }

}
