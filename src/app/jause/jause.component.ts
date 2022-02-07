import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jause',
  templateUrl: './jause.component.html',
  styleUrls: ['./jause.component.css']
})
export class JauseComponent implements OnInit {

  types = ["Butterbrot", "Lewakassemmal"]
  selected: string = this.types[0];

  constructor() { }

  ngOnInit(): void {
  }

  selectionChange($event: any) {

  }
}
