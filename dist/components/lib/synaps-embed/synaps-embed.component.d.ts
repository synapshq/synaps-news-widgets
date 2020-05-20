import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
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
export declare class SynapsEmbedComponent implements OnInit {
    private http;
    set url(value: string);
    html: string;
    constructor(http: HttpClient);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SynapsEmbedComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SynapsEmbedComponent, "ngx-synaps-embed", never, { "url": "url"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYXBzLWVtYmVkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzeW5hcHMtZW1iZWQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmV4cG9ydCBpbnRlcmZhY2UgT0VtYmVkUmVzcG9uc2Uge1xuICAgIGh0bWw6IHN0cmluZztcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHByb3ZpZGVyX3VybDogc3RyaW5nO1xuICAgIGNhY2hlX2FnZTogc3RyaW5nO1xuICAgIGF1dGhvcl91cmw6IHN0cmluZztcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBwcm92aWRlcl9uYW1lOiBzdHJpbmc7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBhdXRob3JfbmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTeW5hcHNFbWJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBodHRwO1xuICAgIHNldCB1cmwodmFsdWU6IHN0cmluZyk7XG4gICAgaHRtbDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=