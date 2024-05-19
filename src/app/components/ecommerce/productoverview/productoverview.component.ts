import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './productoverview.component.html',
})
export class ProductOverviewComponent implements OnInit {

    color: string = 'bluegray';

    size: string = 'M';

    liked: boolean = false;

    images: string[] = [];

    selectedImageIndex: number = 0;

    quantity: number = 1;

    ngOnInit(): void {
      this.images = [
          'product-overview-4-1.png',
          'product-overview-4-2.png',
          'product-overview-4-3.png',
      ];
    }
}
