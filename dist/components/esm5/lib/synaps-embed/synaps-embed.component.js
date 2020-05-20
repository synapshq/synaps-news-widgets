import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
var SynapsEmbedComponent = /** @class */ (function () {
    function SynapsEmbedComponent(http) {
        this.http = http;
        this.html = '';
    }
    Object.defineProperty(SynapsEmbedComponent.prototype, "url", {
        set: function (value) {
            var _this = this;
            var params = new HttpParams()
                .append('url', value);
            this.http.jsonp("https://noembed.com/embed?" + params.toString(), 'callback').subscribe(function (response) {
                _this.html = response.html;
            });
        },
        enumerable: true,
        configurable: true
    });
    SynapsEmbedComponent.prototype.ngOnInit = function () { };
    SynapsEmbedComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
    return SynapsEmbedComponent;
}());
export { SynapsEmbedComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYXBzLWVtYmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3luYXBzLWVtYmVkL3N5bmFwcy1lbWJlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFzQjlEO0lBYUUsOEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVzQixDQUFDO0lBWHpDLHNCQUFJLHFDQUFHO2FBQVAsVUFBUyxLQUFhO1lBRHRCLGlCQVFDO1lBTkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7aUJBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsK0JBQTZCLE1BQU0sQ0FBQyxRQUFRLEVBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUF3QjtnQkFDL0csS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQzs7O09BQUE7SUFNRCx1Q0FBUSxHQUFSLGNBQVksQ0FBQzs7Z0JBRmEsVUFBVTs7SUFYcEM7UUFEQyxLQUFLLEVBQUU7bURBUVA7SUFUVSxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qiw0Q0FBNEM7O1NBRTdDLENBQUM7T0FDVyxvQkFBb0IsQ0FpQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT0VtYmVkUmVzcG9uc2Uge1xuICBodG1sOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwcm92aWRlcl91cmw6IHN0cmluZztcbiAgY2FjaGVfYWdlOiBzdHJpbmc7XG4gIGF1dGhvcl91cmw6IHN0cmluZztcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHByb3ZpZGVyX25hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgYXV0aG9yX25hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zeW5hcHMtZW1iZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3luYXBzLWVtYmVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3luYXBzLWVtYmVkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN5bmFwc0VtYmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc2V0IHVybCAodmFsdWU6IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuYXBwZW5kKCd1cmwnLCB2YWx1ZSk7XG5cbiAgICB0aGlzLmh0dHAuanNvbnAoYGh0dHBzOi8vbm9lbWJlZC5jb20vZW1iZWQ/JHtwYXJhbXMudG9TdHJpbmcoKX1gLCAnY2FsbGJhY2snKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBPRW1iZWRSZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5odG1sID0gcmVzcG9uc2UuaHRtbDtcbiAgICB9KVxuICB9XG5cbiAgaHRtbDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==