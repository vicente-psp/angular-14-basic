import { Injectable } from '@angular/core';

export interface IReview {
  id: number;
  company: string;
  contact: string;
  country: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private list: IReview[] = [
    {
      id: 1,
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
      status: true
    },
    {
      id: 2,
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexicos',
      status: false
    },
    {
      id: 3,
      company: 'Centro comercial Moctezuma 2',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 4,
      company: 'Centro comercial Moctezuma 3',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 5,
      company: 'Centro comercial Moctezuma 4',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 6,
      company: 'Centro comercial Moctezuma 6',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 7,
      company: 'Centro comercial Moctezuma 7',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 8,
      company: 'Centro comercial Moctezuma 8',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 9,
      company: 'Centro comercial Moctezuma 9',
      contact: 'Francisco Chang',
      country: 'Mexico',
      status: false
    },
    {
      id: 10,
      company: 'Centro comercial Moctezuma 10',
      contact: 'Francisco Chang',
      country: 'Brazil',
      status: false
    }
  ];

  constructor() { }

  getList() {
    return this.list;
  }

}
