import { FourService } from './../two/three/four/four.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, OnDestroy {

  public bools: Boolean[] = [];
  private fourSubscription: Subscription;

  constructor(
    private fourService: FourService
  ) { }

  ngOnInit() {
    this.fourSubscription = this.fourService.sendSomethingObs.subscribe(foo => {
      this.bools.push(foo);
    });
  }

  public cleanBools(): void {
    this.bools = [];
  }

  ngOnDestroy() {
    if (this.fourSubscription) {
      this.fourSubscription.unsubscribe();
    }
  }


}
