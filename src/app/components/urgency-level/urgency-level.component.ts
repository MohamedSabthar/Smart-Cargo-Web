import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urgency-level',
  templateUrl: './urgency-level.component.html',
  styleUrls: ['./urgency-level.component.css']
})
export class UrgencyLevelComponent implements OnInit {
  valueChange = false;
  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }

}
