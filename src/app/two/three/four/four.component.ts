import { FourService } from './four.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {

  constructor(
    private fourService: FourService
  ) { }

  ngOnInit() {
  }

  public onClick(): void {
    this.fourService.foo();
  }


}
