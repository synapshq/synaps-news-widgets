import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ngx-synaps-image',
  templateUrl: './synaps-image.component.html',
  styleUrls: ['./synaps-image.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SynapsImageComponent implements OnInit {

  @Input() src: string;
  @Input() caption: string = '';
  @Input() width: number;
  @Input() height: number;
  @Input() crop: 'fill'|'fit' = 'fit';

  constructor() { }

  ngOnInit() {}

}
