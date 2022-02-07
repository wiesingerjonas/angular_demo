import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-moizeit',
  templateUrl: './moizeit.component.html',
  styleUrls: ['./moizeit.component.css']
})
export class MoizeitComponent implements OnInit {

  @Input() selected!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
