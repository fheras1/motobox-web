import { BoxesService } from './../../../shared/services/boxes.service';
import { Box } from './../../../shared/model/box.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boxes-create',
  templateUrl: './boxes-create.component.html',
  styleUrls: ['./boxes-create.component.css']
})
export class BoxesCreateComponent implements OnInit{
  box: Box = new Box();
  apiError: string;
  editBox: boolean;
  @ViewChild('imageFile') imageFile;
  @ViewChild('boxForm') boxForm;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private boxService: BoxesService
  ) {}

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        console.log(data);

        if (data['box']) {
          this.box.name = data['box'].name;
          this.box.id = data['box'].id;
          this.box.contact = data['box'].contact;
          this.box.address = data['box'].address;
          this.box.reviews = data['box'].reviews;
          this.editBox = true;
        }
      });
  }


  addReview(reviews: HTMLInputElement) {
    if (reviews.value) {
      this.box.reviews.push(reviews.value);
      reviews.value = '';
    }
  }

  removeReviews(reviews: string) {
    this.box.reviews = this.box.reviews.filter(s => s !== reviews);
  }

  onSubmitBoxes(boxForm: NgForm) {
    if (this.editBox) {
      this.boxService.edit(this.box)
      .subscribe(
        (box) => {
          boxForm.reset();
          this.router.navigate(['/boxes']);
        },
        (error) => {
          this.apiError = error;
        }
      );
    } else {
// const imageFile = this.imageFile.nativeElement;
    // if (imageFile.files && imageFile.files[0]) {
    //   this.box.image = imageFile.files[0];
    this.boxService.create(this.box)
    .subscribe(
      (box) => {
        boxForm.reset();
        this.router.navigate(['/boxes']);
      },
      (error) => {
        this.apiError = error;
      }
  );
// }
    }

  }

  canLeaveTheComponent(): boolean {
    if (this.boxForm.dirty) {
      return window.confirm(`
        Unsaved changes.
        Are you sure you want to leave?
    `);
    } else {
      return true;
    }
  }
}
