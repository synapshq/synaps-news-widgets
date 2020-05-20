import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
let SynapsEmbedComponent = class SynapsEmbedComponent {
    constructor(http) {
        this.http = http;
        this.html = '';
    }
    set url(value) {
        let params = new HttpParams()
            .append('url', value);
        this.http.jsonp(`https://noembed.com/embed?${params.toString()}`, 'callback').subscribe((response) => {
            this.html = response.html;
        });
    }
    ngOnInit() { }
};
SynapsEmbedComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], SynapsEmbedComponent.prototype, "url", null);
SynapsEmbedComponent = __decorate([
    Component({
        selector: 'ngx-synaps-embed',
        template: "<div [innerHTML]=\"html\"></div>",
        styles: [""]
    })
], SynapsEmbedComponent);
export { SynapsEmbedComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYXBzLWVtYmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3luYXBzLWVtYmVkL3N5bmFwcy1lbWJlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFzQjlELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBYS9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVzQixDQUFDO0lBWHpDLElBQUksR0FBRyxDQUFFLEtBQWE7UUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDMUIsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBd0IsRUFBRSxFQUFFO1lBQ25ILElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxRQUFRLEtBQUksQ0FBQztDQUVkLENBQUE7O1lBSjJCLFVBQVU7O0FBWHBDO0lBREMsS0FBSyxFQUFFOytDQVFQO0FBVFUsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsNENBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBaUJoQztTQWpCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT0VtYmVkUmVzcG9uc2Uge1xuICBodG1sOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwcm92aWRlcl91cmw6IHN0cmluZztcbiAgY2FjaGVfYWdlOiBzdHJpbmc7XG4gIGF1dGhvcl91cmw6IHN0cmluZztcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHByb3ZpZGVyX25hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgYXV0aG9yX25hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zeW5hcHMtZW1iZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3luYXBzLWVtYmVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3luYXBzLWVtYmVkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN5bmFwc0VtYmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc2V0IHVybCAodmFsdWU6IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuYXBwZW5kKCd1cmwnLCB2YWx1ZSk7XG5cbiAgICB0aGlzLmh0dHAuanNvbnAoYGh0dHBzOi8vbm9lbWJlZC5jb20vZW1iZWQ/JHtwYXJhbXMudG9TdHJpbmcoKX1gLCAnY2FsbGJhY2snKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBPRW1iZWRSZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5odG1sID0gcmVzcG9uc2UuaHRtbDtcbiAgICB9KVxuICB9XG5cbiAgaHRtbDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==