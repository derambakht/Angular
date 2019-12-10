import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.css']
})
export class ProductFeatureComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
    this.data.title = "AAAAAAAAAAAA";
  }

}
