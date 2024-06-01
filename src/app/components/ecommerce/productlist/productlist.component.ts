import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'product-list',
    templateUrl: './productlist.component.html'
})
export class ProductListComponent {
    @Input() showTopProducts: boolean = true;
    color1: string = 'Bluegray';

    products = [
        {
            price: '$140.00',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-1.png'
        },
        {
            price: '$82.00',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-2.png'
        },
        {
            price: '$54.00',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-3.png'
        },
        {
            price: '$72.00',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-4.png'
        },
        {
            price: '$99.00',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-5.png'
        },
        {
            price: '$89.00',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-6.png'
        }
    ];

    products2 = [
        {
            color: 'Bluegray',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-1.png'
        },
        {
            color: 'Indigo',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-2.png'
        },
        {
            color: 'Purple',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-3.png'
        },
        {
            color: 'Cyan',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-4.png'
        }
    ];
}
