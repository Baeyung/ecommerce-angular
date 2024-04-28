import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../layout/service/app.layout.service';
import { CarouselModel } from '../shared/carousel/carousel.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
})
export class LandingComponent {
    items: CarouselModel[] = [];
    constructor(
        public layoutService: LayoutService,
        public router: Router
    ) {}

    ngOnInit(): void {
        this.items = [
            {
                id: 1,
                title: 'Karandi',
                price: 5000,
                children: [
                    {
                        templateContent: './../../../assets/suits/1.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/2.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/3.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/4.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/5.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/6.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/7.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/8.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/9.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/10.jpg'
                    },
                ]
            },
            {
                id: 1,
                price: 5000,
                title: 'Cotton',
                children: [
                    {
                        templateContent: './../../../assets/suits/3.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/4.jpg'
                    }
                ]
            },
            {
                id: 1,
                price: 5000,
                title: 'Silk',
                children: [
                    {
                        templateContent: './../../../assets/suits/5.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/6.jpg'
                    }
                ]
            },
            {
                id: 1,
                price: 5000,
                title: 'Boski',
                children: [
                    {
                        templateContent: './../../../assets/suits/7.jpg'
                    },
                    {
                        templateContent: './../../../assets/suits/8.jpg'
                    }
                ]
            }
        ];
    }
}