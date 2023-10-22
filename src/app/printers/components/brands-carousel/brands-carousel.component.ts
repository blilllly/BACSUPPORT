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
    { img: 'https://blilllly.github.io/images/bacsupport/brands/ricoh_logo.png'},
    { img: 'https://blilllly.github.io/images/bacsupport/brands/lanier_logo.png'},
    { img: 'https://blilllly.github.io/images/bacsupport/brands/intercopy_logo.png'},
    { img: 'https://blilllly.github.io/images/bacsupport/brands/3m_logo.png'},
    { img: 'https://blilllly.github.io/images/bacsupport/brands/ikon_logo.png'},
    { img: 'https://blilllly.github.io/images/bacsupport/brands/xerox_logo.png'},
    { img: 'https://blilllly.github.io/images/bacsupport/brands/savin_logo.png'}
  ]

}
