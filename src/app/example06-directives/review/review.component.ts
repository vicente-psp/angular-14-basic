import { Component, OnInit } from '@angular/core';

import { IReview, ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {

  list: IReview[] = [];

  constructor(private service: ReviewService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.list = this.service.getList();
    }, 1500);
  }

  styles(isEven: boolean): any {
    if (!isEven) {
      return null;
    }
    return {
      'background-color': 'gray',
      'color': 'red'
    }
  }

}
