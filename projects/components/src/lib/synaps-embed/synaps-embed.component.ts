import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface OEmbedResponse {
  html: string;
  version: string;
  type: string;
  provider_url: string;
  cache_age: string;
  author_url: string;
  height: number;
  provider_name: string;
  width: number;
  author_name: string;
  title: string;
  url: string;
}

@Component({
  selector: 'ngx-synaps-embed',
  templateUrl: './synaps-embed.component.html',
  styleUrls: ['./synaps-embed.component.scss'],
})
export class SynapsEmbedComponent implements OnInit {
  @Input()
  set url (value: string) {
    let params = new HttpParams()
      .append('url', value);

    this.http.jsonp(`https://noembed.com/embed?${params.toString()}`, 'callback').subscribe((response: OEmbedResponse) => {
      this.html = response.html;
    })
  }

  html: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {}

}
