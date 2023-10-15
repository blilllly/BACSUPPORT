import { Component } from '@angular/core';

interface Brand {
  img: string;
}

interface ResponsiveOptions {
  breakpoint: string,
  numVisible: number,
  numScroll: number
}

@Component({
  selector: 'app-brands-carousel',
  templateUrl: './brands-carousel.component.html',
  styleUrls: ['./brands-carousel.component.css']
})
export class BrandsCarouselComponent {

  responsiveOptions: ResponsiveOptions[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '576px',
        numVisible: 2,
        numScroll: 2
    }
  ]

  brands: Brand[] = [
    { img: '../../../../assets/images/brands/ricoh_logo.png'},
    { img: '../../../../assets/images/brands/lanier_logo.png'},
    { img: '../../../../assets/images/brands/intercopy_logo.png'},
    { img: '../../../../assets/images/brands/3m_logo.png'},
    { img: '../../../../assets/images/brands/ikon_logo.png'},
    { img: '../../../../assets/images/brands/xerox_logo.png'},
    { img: '../../../../assets/images/brands/savin_logo.png'}
  ]

}
