import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order-dimention',
  templateUrl: './add-order-dimention.component.html',
  styleUrls: ['./add-order-dimention.component.css']
})
export class AddOrderDimentionComponent implements OnInit {

  date;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

}
