import { BoxesService } from './../../../shared/services/boxes.service';
import { Box } from './../../../shared/model/box.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-boxes-create',
  templateUrl: './boxes-create.component.html',
  styleUrls: ['./boxes-create.component.css']
})
export class BoxesCreateComponent {
  box: Box = new Box();
  apiError: string;
  @ViewChild('imageFile') imageFile;
  @ViewChild('boxForm') boxForm;

  constructor(
    private router: Router,
    private boxService: BoxesService) {}


  addReview(reviews: HTMLInputElement) {
    if (reviews.value) {
      this.box.reviews.push(reviews.value);
      reviews.value = '';
    }
  }

  removeReviews(reviews: string) {
    this.box.reviews = this.box.reviews.filter(s => s !== reviews);
  }

  onSubmitBox(boxForm: NgForm) {
    const imageFile = this.imageFile.nativeElement;
    if (imageFile.files && imageFile.files[0]) {
      this.box.image = imageFile.files[0];
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
