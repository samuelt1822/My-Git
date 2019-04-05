(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/pages/page-new/page-new.component */ "./src/app/views/pages/page-new/page-new.component.ts");
/* harmony import */ var _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pages/page-list/page-list.component */ "./src/app/views/pages/page-list/page-list.component.ts");
/* harmony import */ var _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/pages/page-edit/page-edit.component */ "./src/app/views/pages/page-edit/page-edit.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");


















var routes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'profile/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"] },
    { path: 'profile/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"] },
    { path: 'profile/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"] },
    { path: 'profile/:uid/website/:wid/page', component: _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'profile/:uid/website/:wid/page/new', component: _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_6__["PageNewComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid', component: _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__["PageEditComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__["WidgetHeaderComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__["WidgetImageComponent"] },
    { path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__["WidgetYoutubeComponent"] }
];
/** Make sure to update this routing for A6*/
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-header {\n    position: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container-fluid\">\n    <h1 id=\"main-header\">Web Development Assignment 3</h1>\n    <body>\n    Please login to view your account. If you do not have one, please select Register to create one.\n    </body>\n</div>-->\n<a routerLink=\"/login\">Enter</a>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Web Development';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/pages/page-new/page-new.component */ "./src/app/views/pages/page-new/page-new.component.ts");
/* harmony import */ var _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/pages/page-edit/page-edit.component */ "./src/app/views/pages/page-edit/page-edit.component.ts");
/* harmony import */ var _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/pages/page-list/page-list.component */ "./src/app/views/pages/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/widget/widget-list/sortable.directive */ "./src/app/views/widget/widget-list/sortable.directive.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteListComponent"],
                _views_pages_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__["PageNewComponent"],
                _views_pages_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__["PageEditComponent"],
                _views_pages_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"],
                _views_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["SortableDirective"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_29__["WidgetHtmlComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_31__["WidgetTextComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_30__["QuillModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserServiceClient"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteServiceClient"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageServiceClient"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetServiceClient"], _services_shared_service__WEBPACK_IMPORTED_MODULE_25__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] /**add a line here for the cannot get*/
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageServiceClient", function() { return PageServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PageServiceClient = /** @class */ (function () {
    function PageServiceClient(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    PageServiceClient.prototype.createPage = function (websiteId, page) {
        var currentPage = { _id: page._id, name: page.name, websiteId: page.websiteId, description: page.description };
        return this.http.post(this.baseURL + '/api/website/' + websiteId + '/page', currentPage);
    };
    PageServiceClient.prototype.findAllPagesForWebsite = function (websiteId) {
        return this.http.get(this.baseURL + '/api/website/' + websiteId + '/page');
    };
    PageServiceClient.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseURL + '/api/website/' + websiteId + '/page');
    };
    PageServiceClient.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseURL + '/api/page/' + pageId);
    };
    PageServiceClient.prototype.updatePage = function (pageId, page) {
        var currentPage = { _id: page['_id'], name: page['name'], websiteId: page['websiteId'], description: page['description'] };
        return this.http.put(this.baseURL + '/api/page/' + pageId, currentPage);
    };
    PageServiceClient.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseURL + '/api/page/' + pageId);
    };
    PageServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageServiceClient);
    return PageServiceClient;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = {};
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);





var UserServiceClient = /** @class */ (function () {
    function UserServiceClient(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserServiceClient.prototype.createUser = function (user) {
        var body = { _id: '', username: user.username, password: user.password };
        return this.http.post(this.baseUrl + '/api/user', body);
    };
    UserServiceClient.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/username?username=' + username);
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/api/user/' + user._id, user);
    };
    UserServiceClient.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    UserServiceClient.prototype.deleteUserById = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user' + userId);
    };
    UserServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteServiceClient", function() { return WebsiteServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var WebsiteServiceClient = /** @class */ (function () {
    function WebsiteServiceClient(http) {
        this.http = http;
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('1', 'Facebook', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('2', 'Twitter', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('3', 'Gizmodo', '234', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('4', 'Go', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('5', 'Tic Tac Toe', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('6', 'Amazon', '345', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('7', 'Rent the Runway', '345', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('8', 'NOVA', '234', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('9', 'History Channel', '456', 'Lorem'),
        ];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    WebsiteServiceClient.prototype.createWebsite = function (userId, website) {
        var newWeb = { _id: '', name: website.name, developerId: website.developerId, description: website.description };
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', newWeb);
    };
    WebsiteServiceClient.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteServiceClient.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteServiceClient.prototype.updateWebsite = function (websiteId, website) {
        var updatedWeb = { _id: website._id, name: website.name, developerId: website.developerId, description: website.description };
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, updatedWeb);
    };
    WebsiteServiceClient.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteServiceClient);
    return WebsiteServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetServiceClient.prototype.createWidget = function (pageId, widget) {
        var currentWidget = { _id: widget._id, name: widget['name'], widgetType: widget.widgetType, pageId: widget.pageId,
            size: widget.size, text: widget.text, width: widget.width, url: widget.url };
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', currentWidget);
    };
    WidgetServiceClient.prototype.findWidgetByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url);
    };
    WidgetServiceClient.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url);
    };
    WidgetServiceClient.prototype.updateWidget = function (widgetId, widget) {
        var currentWidget = { _id: widget['_id'], name: widget['name'], widgetType: widget['widgetType'],
            pageId: widget['pageId'], size: widget['size'],
            text: widget['text'], width: widget['width'], url: widget['url'] };
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, currentWidget);
    };
    WidgetServiceClient.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetServiceClient.prototype.resortWidget = function (pageId, start, end) {
        var url = this.baseUrl + '/api/page' + pageId + '/widget?initial=' + start + '&final=' + end;
        return this.http.put(url, '');
    };
    WidgetServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetServiceClient);
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/views/pages/page-edit/page-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/page-edit/page-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: dimgray;\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n.body-wrapper {\n    margin-bottom:100px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BhZ2UtZWRpdC9wYWdlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLWdyYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG59XG4jcHJvZmlsZS1oZWFkZXItZ3JheSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNiYWNrLWNoZXZyb24tZ3JheSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbi5jb250YWluZXItZmx1aWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiN1c2VyLWJsdWUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuI3dlYnNpdGUtZWRpdC1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN3ZWJzaXRlLWRlbGV0ZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNncmF5LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuaHRtbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uYm9keS13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/page-edit/page-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/page-edit/page-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Edit Page\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Page Name</label>\n  <input [(ngModel)]=\"currentPage['name']\" [ngModelOptions]=\"{standalone: true}\"\n         type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n  <br/>\n  <label>Page Description</label>\n  <input [(ngModel)]=\"currentPage['description']\" [ngModelOptions]=\"{standalone: true}\"\n         type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"this.update()\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"this.delete()\">Delete</a>\n</div>\n\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/pages/page-edit/page-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/page-edit/page-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRouter) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.pages = [];
        this.currentPage = {};
    }
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function (data) {
            _this.pages = data;
            console.log(_this.pages);
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigateByUrl(url);
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.pageService.updatePage(this.pageId, this.currentPage).subscribe(function (data) {
            _this.currentPage = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigateByUrl(url);
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (data) {
            console.log(data);
            _this.currentPage = data;
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/pages/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/pages/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/page-list/page-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/page-list/page-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: dimgray;\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#bulletLessList {\n    list-style-type: none;\n    color: #428bca;\n}\n#cog-position {\n    float:right;\n    margin-right: .5em;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3Byb2ZpbGUtZ3JheSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbn1cbiNwcm9maWxlLWhlYWRlci1ncmF5IHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI2JhY2stY2hldnJvbi1ncmF5IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNjaGVjay1pY29uLWdyYXkge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI2J1bGxldExlc3NMaXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY29sb3I6ICM0MjhiY2E7XG59XG4jY29nLXBvc2l0aW9uIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG59XG4jZ3JheS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbn1cbiN1c2VyLWJsdWUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuaHRtbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/page-list/page-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/page-list/page-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Pages\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id=\"back-chevron-gray\"></i>\n      </a>\n     <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/new\">\n        <i class=\"fas fa-plus fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<ul id=\"bulletLessList\">\n  <li *ngFor = \"let page of pages\">\n    <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">\n      {{page.name}}\n    </a>\n    <a routerLink=\"/profile/{{userId}}/website/{{page.websiteId}}/page/{{page._id}}\">\n      <i class=\"fas fa-cog fontawsome_icon\" id=\"cog-position\"></i>\n    </a>\n  </li>\n</ul>\n<br/>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/pages/page-list/page-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/page-list/page-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRouter) {
        this.pageService = pageService;
        this.activatedRouter = activatedRouter;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
            console.log('Start of page list comp');
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            console.log(data);
            _this.pages = data;
        });
        console.log(this.userId);
        console.log(this.websiteId);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/pages/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/pages/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/page-new/page-new.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/page-new/page-new.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: dimgray;\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#addPage-button {\n    color: white;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwcm9maWxlLWdyYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG59XG4jcHJvZmlsZS1oZWFkZXItZ3JheSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNiYWNrLWNoZXZyb24tZ3JheSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNhZGRQYWdlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2dyYXktZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4jdXNlci1ibHVlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/page-new/page-new.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/page-new/page-new.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; New Page\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-success\"> {{successMsg}} </div>\n  <form> <!--(ngSubmit) = \"addPage()\" #f=\"ngForm\"-->\n    <label>Page Name</label>\n    <input [(ngModel)] = \"currentPage.name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n           class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n\n    <br/>\n    <label>Page Description</label>\n    <input [(ngModel)] = \"currentPage.description\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n           class=\"form-control\" id=\"page-title\" placeholder=\"Page Description\">\n    <br/>\n    <a class=\"btn btn-success btn-block\" id=\"addPage-button\" (click)=\"create()\">Add</a>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">Pages</a>\n  </form>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/pages/page-new/page-new.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/page-new/page-new.component.ts ***!
  \************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, router, activatedRouter) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.pages = [];
        this.successMsg = 'Your page has been added. You may add another or select Pages to return to your page list.';
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"];
        console.log(this.page);
    }
    PageNewComponent.prototype.create = function () {
        var _this = this;
        this.pageService.createPage(this.websiteId, this.currentPage).subscribe(function (data) {
            _this.pages = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigateByUrl(url);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        console.log(this.userId);
        console.log(this.websiteId);
        this.currentPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageNewComponent.prototype, "addPageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/pages/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/pages/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_5__["PageServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n    margin-left:.4em;\n    color: dimgray;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0Oi40ZW07XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG5odG1sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"title\">Login</h1>\n<div class=\"container-fluid\">\n  <!--Below renders error message if the password does not match-->\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\"> {{errorMsg}} </div>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" required ngModel\n           #username=\"ngModel\" placeholder=\"username\"/>\n    <!--Below renders message between tag if the username is not valid and the user has clicked on the field.-->\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\"> Username is required. </span>\n      <br/>\n      <input class=\"form-control\" type=\"text\" name=\"password\" required ngModel\n           #password=\"ngModel\" placeholder=\"password\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\"> Password is required. </span>\n      <br/>\n      <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n      <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






"";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.errorFlag = false;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                console.log(user);
                /**Class additions - we will now be using cached info and won't be displaying user id anymore
                //this.sharedService.user = user;
                //this.router.navigate(['profile']); - class addition*/
                _this.router.navigate(['/profile', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login page!' + this.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-blue {\n    padding: 10px;\n    display: inline-block;\n    background-color: #428bca;\n}\n#blue-footer {\n    background-color: #428bca;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#profile-header {\n    font-size: 1.7em;\n    color: white;\n}\n#check-icon {\n    float:right;\n    color: white;\n}\n#user-white {\n    float: right;\n    color: white;\n    padding: 15px;\n}\n#update-button {\n    color: white;\n}\n#logout-button {\n    color: white;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\nbody {\n    margin: 0;\n    position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLWJsdWUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XG59XG4jYmx1ZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbn1cbiNwcm9maWxlLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jY2hlY2staWNvbiB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3VzZXItd2hpdGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbiN1cGRhdGUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jbG9nb3V0LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuaHRtbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-blue\">\n    <h1 id=\"profile-header\">Profile\n      <a routerLink=\"/profile/{{userId}}\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n  <div class=\"container-fluid\">\n    <br/>\n    <label>Username</label>\n    <input [(ngModel)]=\"user['username']\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Alice\"/>\n    <br/>\n    <label>Password</label>\n    <input [(ngModel)]=\"user['password']\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\"/>\n    <br/>\n    <label>First Name</label>\n    <input [(ngModel)]=\"user['firstName']\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\"/>\n    <br/>\n    <label>Last Name</label>\n    <input [(ngModel)]=\"user['lastName']\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\"/>\n    <br/>\n    <label>Email</label>\n    <input [(ngModel)]=\"user['email']\" class=\"form-control\" id=\"email\" placeholder=\"Email\"/>\n    <br/>\n    <a class=\"btn btn-success btn-block\" id=\"update-button\" (click)=\"updateUser()\">Update</a>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/profile/{{userId}}/website\">Websites</a>\n    <a class=\"btn btn-warning btn-block\" id=\"logout-button\" [routerLink]=\"['/login']\">Logout</a>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n  </div>\n<footer id=\"blue-footer\">\n    <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
        this.user2 = {};
        this.errorMsg = 'Invalid username or password.';
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.user).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        }, function (error) {
            alert('update failed!');
        });
    };
    ProfileComponent.prototype.deleteUser = function (deleteUser) {
        var _this = this;
        return this.userService.deleteUserById(deleteUser._id).subscribe(function () { return _this.router.navigate(['/login']); });
    };
    /** Maintaining this function in case more functionality is added to logout.
    logout() {
        this.router.navigate(['/login']);
    }*/
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { _this.userId = params.uid; });
        console.log(this.userId);
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register-header {\n    margin-left:.4em;\n    color: dimgray;\n}\n#register-button {\n    color: white;\n}\n#cancel-button {\n    color: white;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVnaXN0ZXItaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDouNGVtO1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI3JlZ2lzdGVyLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NhbmNlbC1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmh0bWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"register-header\">Register</h1>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\"> {{errorMsg}}</div>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\"\n           id=\"usernameInput\" placeholder=\"username\">\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\"> Username is required. </span>\n  <br/>\n    <input type=\"password\" class=\"form-control\" required ngModel #password=\"ngModel\" name=\"password\"\n           [(ngModel)]=\"user.password\" id=\"passwordInput\" placeholder=\"password\">\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\"> Password is required. </span>\n    <br/>\n    <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"v_password\" name=\"v_password\"\n           id=\"passwordInput2\" placeholder=\"verify password\">\n  <br/>\n\n    <a class=\"btn btn-primary btn-block\" id=\"register-button\" (click)=\"register()\">Register</a>\n    <a class=\"btn btn-warning btn-block\" id=\"cancel-button\" [routerLink]=\"['/login']\">Cancel</a>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Password and verified password do not match!';
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
        console.log(this.user);
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user.username = this.registerForm.value.username;
        console.log(this.user.username);
        this.user.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        if (this.user.password !== this.v_password) {
            this.errorFlag = true;
        }
        else {
            this.userService.createUser({ username: this.user.username, password: this.user.password }).subscribe(function (user) {
                _this.user = user;
                _this.router.navigate(['/profile', _this.user._id]);
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-blue {\n    padding: 10px;\n    display: inline-block;\n    background-color: #428bca;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\n#blue-footer {\n    background-color: #428bca;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#profile-header {\n    font-size: 1.7em;\n    color: white;\n}\n#check-icon {\n    float:right;\n    color: white;\n}\n#user-white {\n    float: right;\n    color: white;\n    padding: 15px;\n}\n#back-chevron {\n    float: left;\n    color: white;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUtYmx1ZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbn1cbi5jb250YWluZXItZmx1aWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNibHVlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuI3Byb2ZpbGUtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjaGVjay1pY29uIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdXNlci13aGl0ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuI2JhY2stY2hldnJvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3dlYnNpdGUtZWRpdC1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN3ZWJzaXRlLWRlbGV0ZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmh0bWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-blue\">\n    <h1 id=\"profile-header\">&nbsp;&nbsp; Edit Website\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Website Name</label>\n  <input [(ngModel)]=\"currentWeb['name']\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\"\n         id=\"website-name\" placeholder=\"Name\">\n  <br/>\n  <label>Website Description</label>\n  <textarea [(ngModel)]=\"currentWeb['description']\" [ngModelOptions]=\"{standalone: true}\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n            placeholder=\"Description\"></textarea>\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"update()\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"delete()\">Delete</a>\n</div>\n<footer id=\"blue-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, link, activatedRouter) {
        this.websiteService = websiteService;
        this.link = link;
        this.activatedRouter = activatedRouter;
        this.currentWeb = {};
        this.websites = [];
    }
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function (data) {
            _this.websites = data;
            console.log(_this.websites);
            var url = '/profile/' + _this.userId + '/website';
            console.log(url);
            _this.link.navigateByUrl(url);
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.websiteId, this.currentWeb).subscribe(function (data) {
            var url = '/profile/' + _this.userId + '/website';
            _this.link.navigateByUrl(url);
        });
    };
    WebsiteEditComponent.prototype.findWebByWebId = function (currentWebId) {
        var _this = this;
        console.log('currentWebId is :' + currentWebId);
        this.websiteService.findWebsiteById(currentWebId).subscribe(function (data) {
            _this.currentWeb = data;
            var url = '/user/' + _this.userId + '/website/' + _this.currentWeb['_id'];
            _this.link.navigateByUrl(url);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
        });
        console.log('webId' + this.websiteId);
        this.websiteService.findWebsiteById(this.websiteId).subscribe(function (data) {
            _this.currentWeb = data;
        });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-blue {\n    padding: 10px;\n    display: inline-block;\n    background-color: #428bca;\n}\n#blue-footer {\n    background-color: #428bca;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#profile-header {\n    font-size: 1.7em;\n    color: white;\n}\n#bulletLessList {\n    list-style-type: none;\n    color: #428bca;\n}\n#check-icon {\n    float:right;\n    color: white;\n}\n#cog-position {\n    float:right;\n    margin-right: .5em;\n}\n#user-white {\n    float: right;\n    color: white;\n    padding: 15px;\n}\n#back-chevron {\n    float: left;\n    color: white;\n    margin-top:.1em;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\nbody {\n    margin: 0;\n    position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZS1ibHVlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xufVxuI2JsdWUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4jcHJvZmlsZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2J1bGxldExlc3NMaXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY29sb3I6ICM0MjhiY2E7XG59XG4jY2hlY2staWNvbiB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NvZy1wb3NpdGlvbiB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xufVxuI3VzZXItd2hpdGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbiNiYWNrLWNoZXZyb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOi4xZW07XG59XG5odG1sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-blue\">\n    <h1 id=\"profile-header\">&nbsp;&nbsp; Websites\n      <a routerLink=\"/profile/{{userId}}\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id=\"back-chevron\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/new\">\n      <i class=\"fas fa-plus fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n\n<ul id=\"bulletLessList\">\n  <li *ngFor = \"let website of websites\">\n    <a routerLink=\"/profile/{{userId}}/website/{{website._id}}\" >\n      <i class=\"fas fa-cog fontawsome_icon\" id=\"cog-position\"></i>\n    </a>\n    <a routerLink=\"/profile/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n  </li>\n</ul>\n<br/>\n<footer id=\"blue-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRouter) {
        this.websiteService = websiteService;
        this.activatedRouter = activatedRouter;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log(this.userId);
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-blue {\n    padding: 10px;\n    display: inline-block;\n    background-color: #428bca;\n}\n#profile-header {\n    font-size: 1.7em;\n    color: white;\n}\n#back-chevron {\n    float: left;\n    color: white;\n}\n#check-icon {\n    float:right;\n    color: white;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\n#addWebsite-button {\n    color: white;\n}\n#blue-footer {\n    background-color: #428bca;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#user-white {\n    float: right;\n    color: white;\n    padding: 15px;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93ZWJzaXRlL3dlYnNpdGUtbmV3L3dlYnNpdGUtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZS1ibHVlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xufVxuI3Byb2ZpbGUtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNiYWNrLWNoZXZyb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjaGVjay1pY29uIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyLWZsdWlkOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jYWRkV2Vic2l0ZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNibHVlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuI3VzZXItd2hpdGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbmh0bWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid\" id=\"profile-blue\" style=\"display: inline-block\">\n    <h1 id=\"profile-header\">&nbsp;&nbsp; New Website\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-success\"> {{successMsg}} </div>\n  <!--<form (ngSubmit) = \"addWebsite()\" #f=\"ngForm\">-->\n    <label>Website Name</label>\n    <!--<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"website.name\" name=\"name\"\n           id=\"nameInput\" placeholder=\"Name\">-->\n    <input [(ngModel)] = \"website['name']\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\"\n           id=\"website-name\" placeholder=\"Name\">\n    <br/>\n    <label>Website Description</label>\n    <!--<textarea class=\"form-control\" id=\"TextArea\" required ngModel #description=\"ngModel\"\n              name=\"description\" [(ngModel)]=\"website.description\" placeholder=\"Description\" rows=\"3\"></textarea>-->\n    <textarea [(ngModel)] = \"website['description']\" [ngModelOptions]=\"{standalone: true}\" id=\"website-description\"\n              class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n    <br/>\n    <a class=\"btn btn-success btn-block\" id=\"addWebsite-button\" (click)=\"create()\">Add</a>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/profile/{{userId}}/website\">Websites</a>\n</div>\n<footer id=\"blue-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n    </a>\n  </div>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, router, activatedRouter) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.successMsg = 'Your website has been added. You may add another or select Websites to return to your website list.';
        /**this.website = new Website();*/
        console.log(this.website);
    }
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](this.website._id, this.website.name, this.userId, this.website.description);
        this.websiteService.createWebsite(this.userId, this.website).subscribe(function (data) {
            var url = '/profile/' + _this.userId + '/website';
            _this.router.navigateByUrl(url);
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) { _this.userId = params.uid; });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (data) {
            _this.websites = data;
        });
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]();
        console.log(this.website.developerId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteNewComponent.prototype, "addWebsiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#bulletLessList {\n    list-style-type: none;\n    color: #428bca;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3Byb2ZpbGUtZ3JheSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbn1cbiNwcm9maWxlLWhlYWRlci1ncmF5IHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiAjNjk2OTY5XG59XG4jYmFjay1jaGV2cm9uLWdyYXkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI2J1bGxldExlc3NMaXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY29sb3I6ICM0MjhiY2E7XG59XG4jdXNlci1ibHVlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbiNncmF5LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Choose Widget\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-chevron-left fontawesome_icon\" id=\"back-chevron-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<ul id=\"bulletLessList\">\n    <li (click)=\"createHeader(widget)\"> Header</li>\n    <li (click)=\"createImage(widget)\"> Image</li>\n    <li (click)=\"createYouTube(widget)\"> YouTube</li>\n    <li (click)=\"createHTML(widget)\"> HTML</li>\n    <li (click)=\"createTEXT(widget)\">TEXT</li>\n  </ul>\n  <br/>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawesome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, router, activatedRouter) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.widgets = [];
        this.successMsg = 'Your widget has been created. You are now being routed to the edit page for your new widget. ' +
            'You may edit it or use the gray back arrow to add another widget.';
        this.successMsg2 = 'Your widget has been created.';
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
    }
    WidgetChooserComponent.prototype.createHeader = function (widget) {
        var _this = this;
        var id = Math.floor(Math.random() * 1000);
        var widgetId = id.toString();
        var newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'HEADING',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (newWid) {
            console.log(newWid);
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id;
            alert(_this.successMsg2);
            _this.router.navigateByUrl('/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id);
        });
    };
    WidgetChooserComponent.prototype.createImage = function (widget) {
        var _this = this;
        var id = Math.floor(Math.random() * 1000);
        var widgetId = id.toString();
        var newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'IMAGE',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (newWid) {
            console.log(newWid);
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id;
            alert(_this.successMsg2);
            _this.router.navigateByUrl('/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id);
        });
    };
    WidgetChooserComponent.prototype.createHTML = function (widget) {
        var _this = this;
        var id = Math.floor(Math.random() * 1000);
        var widgetId = id.toString();
        var newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'HTML',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (newWid) {
            console.log(newWid);
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id;
            alert(_this.successMsg2);
            _this.router.navigateByUrl('/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id);
        });
    };
    WidgetChooserComponent.prototype.createYouTube = function (widget) {
        var _this = this;
        var id = Math.floor(Math.random() * 1000);
        var widgetId = id.toString();
        var newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'YOUTUBE',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (newWid) {
            console.log(newWid);
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id;
            alert(_this.successMsg2);
            _this.router.navigateByUrl('/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id);
        });
    };
    WidgetChooserComponent.prototype.createTEXT = function (widget) {
        var _this = this;
        var id = Math.floor(Math.random() * 1000);
        var widgetId = id.toString();
        var newWidget = {
            _id: widgetId,
            name: widget.name,
            pageId: this.pageId,
            widgetType: 'TEXT',
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (newWid) {
            console.log(newWid);
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id;
            alert(_this.successMsg2);
            _this.router.navigateByUrl('/profile/' + _this.userId + '/website/' + _this.websiteId
                + '/page/' + _this.pageId + '/widget/' + newWidget._id);
        });
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        console.log(this.userId);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-blue {\n    padding: 10px;\n    display: inline-block;\n    background-color: #428bca;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#blue-footer {\n    background-color: #428bca;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#profile-header {\n    font-size: 1.7em;\n    color: white;\n}\n#register-header {\n    margin-left:1.5em;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#bulletLessList {\n    list-style-type: none;\n    color: #428bca;\n}\n#check-icon {\n    float:right;\n    color: white;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#cog-position {\n    float:right;\n}\n#cog-position2 {\n    float:right;\n}\n#cog-position3 {\n    float:right;\n}\n#cog-position4 {\n    float:right;\n}\n#cog-position5 {\n    float:right;\n}\nli {\n    margin-bottom: 10px;\n}\nli:last-child{\n    margin-bottom: 0px;\n}\n#user-footer {\n    float: right;\n    color: white;\n    margin-bottom: 5px;\n    padding: 50px;\n}\n#user-white {\n    float: right;\n    color: white;\n    padding: 15px;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#back-chevron {\n    float: left;\n    color: white;\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#title {\n    margin-left:1.5em;\n}\nhtml {\n    position: relative;\n    min-height: 100%;\n}\n.body-wrapper {\n    margin-bottom:100px;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZS1ibHVlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xufVxuI3Byb2ZpbGUtZ3JheSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbn1cbiNibHVlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuI2dyYXktZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4jcHJvZmlsZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3JlZ2lzdGVyLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6MS41ZW07XG59XG4jcHJvZmlsZS1oZWFkZXItZ3JheSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogIzY5Njk2OVxufVxuI2J1bGxldExlc3NMaXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY29sb3I6ICM0MjhiY2E7XG59XG4jY2hlY2staWNvbiB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NoZWNrLWljb24tZ3JheSB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY29nLXBvc2l0aW9uIHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbiNjb2ctcG9zaXRpb24yIHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbiNjb2ctcG9zaXRpb24zIHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbiNjb2ctcG9zaXRpb240IHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbiNjb2ctcG9zaXRpb241IHtcbiAgICBmbG9hdDpyaWdodDtcbn1cbmxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxubGk6bGFzdC1jaGlsZHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4jdXNlci1mb290ZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG4jdXNlci13aGl0ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuI3VzZXItYmx1ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4jYmFjay1jaGV2cm9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jYmFjay1jaGV2cm9uLWdyYXkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI3RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDoxLjVlbTtcbn1cbmh0bWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmJvZHktd3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbn1cbi5jb250YWluZXItZmx1aWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRouter) {
        this.widgetService = widgetService;
        this.activatedRouter = activatedRouter;
        /**widget: Widget;*/
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.pageId = params.pid;
            _this.websiteId = params.wid;
            _this.widgetId = params.wgid;
            console.log(_this.widgetId);
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log(_this.widget);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWhlYWRlci93aWRnZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcHJvZmlsZS1ncmF5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xufVxuI3Byb2ZpbGUtaGVhZGVyLWdyYXkge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6ICM2OTY5Njlcbn1cbiNiYWNrLWNoZXZyb24tZ3JheSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiN3ZWJzaXRlLWVkaXQtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jd2Vic2l0ZS1kZWxldGUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdXNlci1ibHVlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbiNncmF5LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input [(ngModel)]=\"widget['name']\"\n             type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input [(ngModel)]=\"widget['text']\"\n             type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input [(ngModel)]=\"widget['size']\"\n             type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n  <a class=\"btn btn-success  btn-block\" id=\"website-edit-button\" (click)=\"update()\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"delete()\">Delete</a>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router, activatedRouter) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.widget = {};
        this.widgetList = [];
    }
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
            alert('Widget header has been updated.');
        });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widgetList = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
            alert('Widget header has been deleted.');
        });
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.webId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
        });
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3Byb2ZpbGUtZ3JheSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbn1cbiNwcm9maWxlLWhlYWRlci1ncmF5IHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiAjNjk2OTY5XG59XG4jYmFjay1jaGV2cm9uLWdyYXkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI2NoZWNrLWljb24tZ3JheSB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jd2Vic2l0ZS1lZGl0LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3dlYnNpdGUtZGVsZXRlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3VzZXItYmx1ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4jZ3JheS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n    <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n        <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n                <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n            </a>\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n                <i class=\"fas fa-check fontawesome_icon\" id=\"check-icon-gray\"></i>\n            </a>\n        </h1>\n    </div>\n</header>\n<br/>\n<div class=\"container\">\n    <div *ngIf=\"flag\"\n         class=\"alert alert-danger\">\n        {{error}}\n    </div>\n    <form novalidate name=\"model.myform\">\n        <div class=\"form-group\">\n            <label for=\"Name\">Name</label>\n            <input [(ngModel)]=\"widget['name']\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   id=\"Name\"\n                   name=\"widname\"\n                   placeholder=\"Name\"\n                   required>\n            <span class=\"alert-class\"\n                  *ngIf=\"flag\">{{alert}}</span>\n        </div>\n\n        <!-- use with ngModel-->\n        <quill-editor [(ngModel)]=\"widget['text']\" name=\"text\"></quill-editor>\n\n    </form>\n    <p></p>\n    <a class=\"btn btn-success btn-block\" (click)=\"updateWidget()\">Update</a>\n    <a class=\"btn btn-warning btn-block\" (click)=\"deleteWidget()\">Delete</a>\n\n</div>\n<footer id=\"gray-footer\">\n    <div class=\"container-fluid\">\n        <a routerLink=\"/profile/{{userId}}\">\n            <i class=\"fas fa-user fontawesome_icon\" id=\"user-blue\"></i>\n        </a>\n    </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(activatedRouter, widgetService, router) {
        this.activatedRouter = activatedRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.flag = false;
        this.widget = {};
    }
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === '') {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) { return _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId,
                'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId,
            'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        // fetch ids from current url
        this.activatedRouter.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wid'];
            _this.userId = params['uid'];
        });
        // fetching current widget based on widgetId
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) { _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwcm9maWxlLWdyYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG59XG4jcHJvZmlsZS1oZWFkZXItZ3JheSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogIzY5Njk2OVxufVxuI2JhY2stY2hldnJvbi1ncmF5IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNjaGVjay1pY29uLWdyYXkge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI3dlYnNpdGUtZWRpdC1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN3ZWJzaXRlLWRlbGV0ZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN1c2VyLWJsdWUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuI2dyYXktZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-chevron-left fontawesome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawesome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget['name']\"\n             type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget['text']\"\n             type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget['url']\"\n             type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget['width']\"\n             type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{webId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\"  onclick = \"submit()\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n\n  <a (click)=\"update()\" class=\"btn btn-success  btn-block\" id=\"website-edit-button\">Update</a>\n  <a (click)=\"delete()\" class=\"btn btn-warning  btn-block\" id=\"website-delete-button\">Delete</a>\n</div>\n<footer id=\"gray-footer\">\n    <div class=\"container-fluid\">\n        <a routerLink=\"/profile/{{userId}}\">\n            <i class=\"fas fa-user fontawesome_icon\" id=\"user-blue\"></i>\n        </a>\n    </div>\n</footer>\n</body>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(imageService, router, activeRoute) {
        this.imageService = imageService;
        this.router = router;
        this.activeRoute = activeRoute;
        /**userId: String;
        websiteId: String;
        pageId: String;
        widget: Widget;
        widgets = [{}];*/
        this.widget = {};
        this.widgetList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.imageService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
            alert('Image widget has been updated.');
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.imageService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widgetList = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.webId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
            alert('Widget image has been deleted.');
        });
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.webId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.imageService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
        });
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtdGV4dC93aWRnZXQtdGV4dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-chevron-left fontawesome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawesome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<div class=\"container\">\n  Text <input [(ngModel)]=\"widget['text']\" class=\"form-control\"/>\n  Rows <input [(ngModel)]=\"widget['rows']\" class=\"form-control\" type=\"number\"/>\n  <label for=\"Name\">Name</label>\n  <div> <input [(ngModel)]=\"widget['name']\" type=\"text\" class=\"form-control\" id=\"Name\" name=\"name\" placeholder=\"Name\">\n  </div>\n  Placeholder <input [(ngModel)]=\"widget['placeholder']\" class=\"form-control\" required/> <p></p>\n  <div class=\"input-group\"> <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n    <span class=\"input-group-addon\"> <input [(ngModel)]=\"widget['formatted']\" type=\"checkbox\"/> </span>\n  </div>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawesome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, router, activatedRouter) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.flag = false;
        this.widget = {};
    }
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (widget) {
                _this.widget = widget;
                var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/';
                _this.router.navigateByUrl(url);
            }, function (error) { return console.log(error); });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
        }, function (error) { return console.log(error); });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3Byb2ZpbGUtZ3JheSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbn1cbiNwcm9maWxlLWhlYWRlci1ncmF5IHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiAjNjk2OTY5XG59XG4jYmFjay1jaGV2cm9uLWdyYXkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI2NoZWNrLWljb24tZ3JheSB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jd2Vic2l0ZS1lZGl0LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3dlYnNpdGUtZGVsZXRlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3VzZXItYmx1ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4jZ3JheS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        <i class=\"fas fa-chevron-left fontawesome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawesome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget['name']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget['text']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget['url']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget['width']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a (click)=\"update()\" class=\"btn btn-success btn-block\" id=\"website-edit-button\">Update</a>\n  <a (click)=\"delete()\" class=\"btn btn-warning btn-block\" id=\"website-delete-button\">Delete</a>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawesome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, activatedRouter) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.widget = {};
        this.widgetList = [];
    }
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
            alert('Youtube widget has been created.');
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widgetList = data;
            var url = '/profile/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget';
            _this.router.navigateByUrl(url);
            alert('Widget Youtube has been deleted.');
        });
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log(_this.widget);
        });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/sortable.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/widget/widget-list/sortable.directive.ts ***!
  \****************************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#widget-height {\n    margin-bottom: 75px;\n}\n.container {\n    position: relative;\n}\n.top-right-position {\n    position: absolute;\n    top: 0px;\n    right: -35px;\n    background-color: whitesmoke;\n    background-size: 100px 100px;\n}\n#image-format {\n    position:absolute;\n    right:10px;\n    top:10px;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray2 {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray3 {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray4 {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray5 {\n    float:right;\n    color: dimgray;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\n.youtube-widget {\n    position: relative;\n    padding-bottom: 56.25%;\n    /* 16:9 */\n    height: 0;\n    overflow: hidden;\n}\n.youtube-widget iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.youtube-widget-holder {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    max-width: 1000px;\n    max-height: 563px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsUUFBUTtBQUNaO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNwcm9maWxlLWdyYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG59XG4jcHJvZmlsZS1oZWFkZXItZ3JheSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogIzY5Njk2OVxufVxuI2JhY2stY2hldnJvbi1ncmF5IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiN3aWRnZXQtaGVpZ2h0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcC1yaWdodC1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAtMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XG59XG4jaW1hZ2UtZm9ybWF0IHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICByaWdodDoxMHB4O1xuICAgIHRvcDoxMHB4O1xufVxuI2NoZWNrLWljb24tZ3JheSB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5MiB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5MyB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5NCB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jY2hlY2staWNvbi1ncmF5NSB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jZ3JheS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbn1cbiN1c2VyLWJsdWUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmNvbnRhaW5lci1mbHVpZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnlvdXR1YmUtd2lkZ2V0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgICAvKiAxNjo5ICovXG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ueW91dHViZS13aWRnZXQgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnlvdXR1YmUtd2lkZ2V0LWhvbGRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtYXgtaGVpZ2h0OiA1NjNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Widgets\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left fontawesome_icon\" id=\"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        <i class=\"fas fa-plus fontawesome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<div class=\"container cl-container-padding\">\n  <div class=\"widget-list\" appSortable (newIndexes)=\"sortWidget($event)\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget['widgetType']\">\n        <div class=\"float-right\">\n          <div class=\"widget-cog-edit\">\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget['_id']}}\">\n              <i class=\"fas fa-cog fontawesome_icon\"></i>\n            </a>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"widget.size\">\n            <div *ngSwitchCase=\"1\">\n              <h1>{{widget.text}}</h1>\n            </div>\n            <div *ngSwitchCase=\"2\">\n              <h2>{{widget.text}}</h2>\n            </div>\n            <div *ngSwitchCase=\"3\">\n              <h3>{{widget.text}}</h3>\n            </div>\n            <div *ngSwitchCase=\"4\">\n              <h4>{{widget.text}}</h4>\n            </div>\n            <div *ngSwitchCase=\"5\">\n              <h5>{{widget.text}}</h5>\n            </div>\n            <div *ngSwitchCase=\"6\">\n              <h6>{{widget.text}}</h6>\n            </div>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img  style=\"width: 540px; height: 360px;\" [src]=\"widget.url\">\n        </div>\n        <div class=\"youtube-widget-holder\">\n          <div *ngSwitchCase=\"'YOUTUBE'\" class= \"youtube-widget\">\n            <iframe width=\"560\" height=\"315\" [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            <!--<object style=\" float: none; clear: both; margin: 2px auto;\"\n                    [data]=\"getUrl(widget)\"></object>-->\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\">\n        </div>\n        <div *ngSwitchCase=\"'Text'\">\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n          </div>\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\" placeholder=\"{{widget.placeholder}}\"\n                 class=\"form-control\"/>\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                    rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                    class=\"form-control\">{{widget.text}}</textarea>\n        </div>\n        <p *ngSwitchDefault><br></p>\n      </div>\n    </div>\n  </div>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawesome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, sanitizer, activatedRouter) {
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
        this.activatedRouter = activatedRouter;
    }
    WidgetListComponent.prototype.getUrl = function (widget) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(widget.url + '');
    };
    WidgetListComponent.prototype.sortWidget = function (indexes) {
        this.widgetService.resortWidget(this.pageId, indexes.startIndex, indexes.endIndex).subscribe();
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
        });
        this.widgetService.findWidgetByPageId(this.pageId).subscribe(function (data) {
            _this.widgets = data;
            console.log(_this.widgets);
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetServiceClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    /**below added for a4 testing*/
    baseUrl: 'http://localhost:3200'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuelt1822/cs5610/My-Git/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map