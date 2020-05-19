import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ngx-synaps-news-link',
  templateUrl: './synaps-news-link.component.html',
  styleUrls: ['./synaps-news-link.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SynapsNewsLinkComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit() {}

}
