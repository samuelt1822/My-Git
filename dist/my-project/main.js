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
];
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

module.exports = "\n<!--<div class=\"container-fluid\">\n    <h1 id=\"main-header\">Web Development Assignment 3</h1>\n    <body>\n    Please login to view your account. If you do not have one, please select Register to create one.\n    </body>\n</div>-->\n<a routerLink=\"/login\">Enter</a>\n<!--<a routerLink=\"/profile\">Profile</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");


























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
                _safe_pipe__WEBPACK_IMPORTED_MODULE_25__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserServiceClient"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteServiceClient"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageServiceClient"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetServiceClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");



var PageServiceClient = /** @class */ (function () {
    function PageServiceClient() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('1', 'New Stories', '8', 'Archaeologists find new bones.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('2', 'Top Scores', '4', 'Player One score is 57. Player Two score is 99.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('3', 'Chats', '1', 'Open chats with 4 people.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('4', 'Directions', '4', 'Each player gets two one piece and the pieces are' +
                'different colors.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('5', 'Specials', '9', 'How The World Was Born.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('6', 'Favorites', '6', 'Umbrella, table, dress'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('7', 'About', '7', 'We are a designer clothing rental company.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('8', 'Instructions', '5', 'Each player alternates moves.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('9', 'Contact', '7', 'You can reach us via email.'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('10', 'News', '1', 'There is a lot of news today.'),
        ];
    }
    PageServiceClient.prototype.createPage = function (websiteId, page) {
        var pageLast = this.pages.slice(-1).pop();
        var pageLastNum = Number(pageLast._id);
        pageLastNum = pageLastNum + 1;
        var newPageId = pageLastNum.toString();
        var new_page = {
            _id: newPageId,
            name: page.name,
            websiteId: page.websiteId,
            description: page.description
        };
        this.pages.push(new_page);
        return this.pages;
    };
    PageServiceClient.prototype.findPagesByWebsiteId = function (websiteId) {
        return this.pages.filter(function (page) {
            return page.websiteId === websiteId;
        });
    };
    PageServiceClient.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageServiceClient.prototype.updatePage = function (pageId, page) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i] = page;
            }
        }
    };
    PageServiceClient.prototype.deletePageById = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
        return this.pages;
    };
    PageServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageServiceClient);
    return PageServiceClient;
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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");



var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('123', 'alice', 'pass1', 'Alice', 'Wonder', 'alice@gmail.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('234', 'bob', 'pass2', 'Bob', 'Marley', 'bob@gmail.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('345', 'charlie', 'pass3', 'Charlie', 'Moore', 'charlie@gmail.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('456', 'jannuzi', 'pass4', 'Jannuzi', 'Saunders', 'jannuzi@gmail.com')
        ];
    }
    /** Add delete function */
    UserServiceClient.prototype.createUser = function (user) {
        var id = Math.floor(Math.random() * 1000);
        user._id = id.toString();
        this.users.push(new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email));
        return user;
    };
    UserServiceClient.prototype.findUserById = function (userId) {
        return this.users.find(function (user) {
            return user._id === userId;
        });
    };
    UserServiceClient.prototype.findUserByCredential = function (username, password) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === user._id) {
                return this.users[i] = user;
            }
        }
    };
    UserServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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



var WebsiteServiceClient = /** @class */ (function () {
    function WebsiteServiceClient() {
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
    }
    WebsiteServiceClient.prototype.createWebsite = function (userId, website) {
        var websiteLast = this.websites.slice(-1).pop();
        var websiteLastNum = Number(websiteLast._id);
        websiteLastNum = websiteLastNum + 1;
        var newWebsiteId = websiteLastNum.toString();
        var new_website = {
            _id: newWebsiteId,
            name: website.name,
            developerId: website.developerId,
            description: website.description
        };
        this.websites.push(new_website);
        return this.websites;
    };
    WebsiteServiceClient.prototype.findWebsitesById = function (websiteId) {
        return this.websites.find(function (website) {
            return website._id === websiteId;
        });
    };
    /**filter vs find because we need the whole list associated with the user*/
    WebsiteServiceClient.prototype.findWebsitesByUser = function (userId) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    };
    WebsiteServiceClient.prototype.updateWebsite = function (websiteId, website) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i] = website;
            }
        }
    };
    WebsiteServiceClient.prototype.deleteWebsiteById = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
        return this.websites;
    };
    WebsiteServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('1', 'HEADING', '1', '2', 'Two months after Venezuelan President Nicolas Maduro visited his' +
                'counterpart Recep Tayyip Erdogan in Ankara, a mysterious company called Sardes sprang into existence. The firm started ' +
                'business with a bang in January of 2018, when it imported about $41 million worth of gold from Venezuela, the first such ' +
                'transaction between the two countries in records that go back 50 years. The next month its volume more than doubled.'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('2', 'HEADING', '2'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('3', 'IMAGE', '3', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('4', 'IMAGE', '4', '2', 'text', '100%', 'https://www.kalw.org/sites/kalw/files/styles/medium/public/201601/Nature-Brain.jpg'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('5', 'YOUTUBE', '3', '2', 'text', '100%', 'https://www.youtube.com/embed/x_CrVERam8c'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('6', 'HEADING', '3', '1', 'Get social with family and friends.'),
            /**new Widget('7', 'HEADING', '3', '1', 'SOCIAL INFO'),*/
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('8', 'HEADING', '4', '1', 'Gold Found!'),
        ];
    }
    WidgetServiceClient.prototype.createWidget = function (pageId, widget) {
        var widgetLast = this.widgets.slice(-1).pop();
        var widgetLastNum = Number(widgetLast._id);
        widgetLastNum = widgetLastNum + 1;
        widget._id = widgetLastNum.toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return this.widgets;
    };
    WidgetServiceClient.prototype.findWidgetsByPageId = function (pageId) {
        return this.widgets.filter(function (widget) {
            return widget.pageId === pageId;
        });
    };
    WidgetServiceClient.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    };
    WidgetServiceClient.prototype.updateWidget = function (widgetId, widget) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i] = widget;
            }
        }
    };
    WidgetServiceClient.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
            }
        }
        return this.widgets;
    };
    WidgetServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Edit Page\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Page Name</label>\n  <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Name\"/>\n  <br/>\n  <label>Page Description</label>\n  <textarea class=\"form-control\" id=\"TextArea\" required ngModel #description=\"ngModel\"\n            name=\"description\" [(ngModel)]=\"page.description\" placeholder=\"Description\" rows=\"3\"></textarea>\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"this.editPage(page)\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"this.deletePage(page._id)\">Delete</a>\n</div>\n\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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
        this.pages = [{}];
        this.userId = String;
        this.websiteId = String;
    }
    PageEditComponent.prototype.editPage = function (page) {
        console.log(page);
        this.page = this.pageService.updatePage(this.page._id, page);
        if (this.page) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
        }
    };
    PageEditComponent.prototype.deletePage = function () {
        console.log(this.pages);
        this.pages = this.pageService.deletePageById(this.page._id);
        console.log(this.pages);
        if (this.pages) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page']);
        }
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.page = _this.pageService.findPageById(params['pid']);
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
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        console.log(this.websiteId);
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
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

module.exports = "<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; New Page\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-success\"> {{successMsg}} </div>\n  <form (ngSubmit) = \"addPage()\" #f=\"ngForm\">\n    <label>Page Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"page.name\" name=\"name\"\n           id=\"nameInput\" placeholder=\"Name\">\n    <br/>\n    <label>Page Description</label>\n    <textarea class=\"form-control\" id=\"TextArea\" required ngModel #description=\"ngModel\"\n              name=\"description\" [(ngModel)]=\"page.description\" placeholder=\"Description\" rows=\"3\"></textarea>\n    <br/>\n    <a class=\"btn btn-success btn-block\" id=\"addPage-button\" (click)=\"addPage()\">Add</a>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">Pages</a>\n  </form>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n"

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
        this.pages = [{}];
        this.successMsg = 'Your page has been added. You may add another or select Pages to return to your page list.';
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"];
        console.log(this.page);
    }
    PageNewComponent.prototype.addPage = function () {
        this.page.name = this.addPageForm.value.name;
        console.log(this.page.name);
        this.page.description = this.addPageForm.value.description;
        console.log(this.page.description);
        this.page.websiteId = this.websiteId;
        console.log(this.websiteId);
        this.pages = this.pageService.createPage(this.websiteId, this.page);
        console.log(this.page);
        console.log(this.pages);
        if (this.page) {
            this.errorFlag = true;
        }
        else {
            this.errorFlag = false;
        }
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        console.log(this.userId);
        console.log(this.websiteId);
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

module.exports = "<h1 id=\"title\">Login</h1>\n<div class=\"container-fluid\">\n  <!--Below renders error message if the password does not match-->\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\"> {{errorMsg}} </div>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" required ngModel\n           #username=\"ngModel\" placeholder=\"username\"/>\n    <!--Below renders message between tag if the username is not valid and the user has clicked on the field.-->\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\"> Username is required. </span>\n      <br/>\n      <input class=\"form-control\" type=\"text\" name=\"password\" required ngModel\n           #password=\"ngModel\" placeholder=\"password\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\"> Password is required. </span>\n      <br/>\n      <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n  </form>\n  <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>\n</div>\n"

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






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
        this.username = 'test';
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredential(this.username, this.password);
        if (user) {
            this.router.navigate(['/profile', user._id]);
        }
        else {
            this.errorFlag = true;
        }
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-blue\">\n    <h1 id=\"profile-header\">Profile\n      <a [routerLink]=\"['/profile', user._id]\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n  <div class=\"container-fluid\">\n    <h2> User: {{user.username}} </h2>\n    <br/>\n    <label>Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Alice\"/>\n    <br/>\n    <label>Password</label>\n    <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\"/>\n    <br/>\n    <label>First Name</label>\n    <input [(ngModel)]=\"user.firstName\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\"/>\n    <br/>\n    <label>Last Name</label>\n    <input [(ngModel)]=\"user.lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\"/>\n    <br/>\n    <label>Email</label>\n    <input [(ngModel)]=\"user.email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"/>\n    <br/>\n    <a class=\"btn btn-success btn-block\" id=\"update-button\" (click)=\"this.updateUser(user)\">Update</a>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/profile/{{user._id}}/website\">Websites</a>\n    <a class=\"btn btn-warning btn-block\" id=\"logout-button\" [routerLink]=\"['/login']\">Logout</a>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n  </div>\n<footer id=\"blue-footer\">\n    <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n</footer>\n</body>\n"

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
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    ProfileComponent.prototype.updateUser = function (user) {
        console.log(user);
        this.user = this.userService.updateUser(user);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.userService.findUserById(params['uid']);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<h1 id=\"register-header\">Register</h1>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\"> {{errorMsg}}</div>\n  <form (ngSubmit) = \"register(v_password)\" #f=\"ngForm\">\n\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\"\n           id=\"usernameInput\" placeholder=\"username\">\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\"> Username is required. </span>\n  <br/>\n    <input type=\"password\" class=\"form-control\" required ngModel #password=\"ngModel\" name=\"password\"\n           [(ngModel)]=\"user.password\" id=\"passwordInput\" placeholder=\"password\">\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\"> Password is required. </span>\n    <br/>\n    <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"v_password\" name=\"v_password\"\n           id=\"passwordInput2\" placeholder=\"verify password\">\n  <br/>\n\n    <a class=\"btn btn-primary btn-block\" id=\"register-button\" (click)=\"register(v_password)\">Register</a>\n    <a class=\"btn btn-warning btn-block\" id=\"cancel-button\" [routerLink]=\"['/login']\">Cancel</a>\n  </form>\n</div>\n\n"

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
    RegisterComponent.prototype.register = function (v_password) {
        this.user.username = this.registerForm.value.username;
        console.log(this.user.username);
        this.user.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        if (v_password === this.user.password) {
            this.errorFlag = false;
            this.userService.createUser(this.user);
            console.log(this.user);
            console.log(this.userService.users);
            if (this.user) {
                this.router.navigate(['/login']);
            }
        }
        else {
            this.errorFlag = true;
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-blue\">\n    <h1 id=\"profile-header\">&nbsp;&nbsp; Edit Website\n      <a [routerLink]=\"['/profile', website.developerId, 'website']\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron\"></i>\n      </a>\n      <a [routerLink]=\"['/profile', website.developerId, 'website']\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Website Name</label>\n  <input [(ngModel)]=\"website.name\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Name\"/>\n  <br/>\n  <label>Website Description</label>\n  <textarea class=\"form-control\" id=\"TextArea\" required ngModel #description=\"ngModel\"\n            name=\"description\" [(ngModel)]=\"website.description\" placeholder=\"Description\" rows=\"3\"></textarea>\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"this.editWebsite(website)\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"this.deleteWebsite(website._id)\">Delete</a>\n</div>\n<footer id=\"blue-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{website.developerId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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
    function WebsiteEditComponent(websiteService, router, activatedRouter) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.editWebsite = function (website) {
        console.log(website);
        this.website = this.websiteService.updateWebsite(this.website._id, website);
        if (this.website) {
            this.router.navigate(['/profile', this.website.developerId, 'website']);
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        console.log(this.websites);
        this.websites = this.websiteService.deleteWebsiteById(this.website._id);
        console.log(this.websites);
        if (this.websites) {
            this.router.navigate(['/profile', this.website.developerId, 'website']);
        }
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.website = _this.websiteService.findWebsitesById(params['wid']);
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-blue\">\n    <h1 id=\"profile-header\">&nbsp;&nbsp; Websites\n      <a routerLink=\"/profile/{{userId}}\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id=\"back-chevron\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/new\">\n        <i class=\"fas fa-plus fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n\n<ul id=\"bulletLessList\">\n  <li *ngFor = \"let website of websites\">\n    <a routerLink=\"/profile/{{userId}}/website/{{website._id}}/page\">\n    {{website.name}}\n    </a>\n    <a routerLink=\"/profile/{{website.developerId}}/website/{{website._id}}\">\n      <i class=\"fas fa-cog fontawsome_icon\" id=\"cog-position\"></i>\n    </a>\n  </li>\n</ul>\n<br/>\n<footer id=\"blue-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log(this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
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

module.exports = "<header>\n  <div class=\"container-fluid\" id=\"profile-blue\" style=\"display: inline-block\">\n    <h1 id=\"profile-header\">&nbsp;&nbsp; New Website\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-success\"> {{successMsg}} </div>\n  <form (ngSubmit) = \"addWebsite()\" #f=\"ngForm\">\n    <label>Website Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"website.name\" name=\"name\"\n           id=\"nameInput\" placeholder=\"Name\">\n    <br/>\n    <label>Website Description</label>\n    <textarea class=\"form-control\" id=\"TextArea\" required ngModel #description=\"ngModel\"\n              name=\"description\" [(ngModel)]=\"website.description\" placeholder=\"Description\" rows=\"3\"></textarea>\n    <br/>\n    <a class=\"btn btn-success btn-block\" id=\"addWebsite-button\" (click)=\"addWebsite()\">Add</a>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/profile/{{userId}}/website\">Websites</a>\n  </form>\n</div>\n<footer id=\"blue-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-white\"></i>\n    </a>\n  </div>\n</footer>\n"

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
        this.websites = [{}];
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]();
        console.log(this.website);
    }
    WebsiteNewComponent.prototype.addWebsite = function () {
        this.website.name = this.addWebsiteForm.value.name;
        console.log(this.website.name);
        this.website.description = this.addWebsiteForm.value.description;
        console.log(this.website.description);
        this.website.developerId = this.userId;
        console.log(this.website.developerId);
        this.websites = this.websiteService.createWebsite(this.userId, this.website);
        console.log(this.website);
        console.log(this.websites);
        if (this.website) {
            this.errorFlag = true;
            /**this.router.navigate(['profile/', this.userId, '/website']);*/
        }
        else {
            this.errorFlag = false;
        }
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log(this.userId);
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Choose Widget\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id=\"back-chevron-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n  <ul id=\"bulletLessList\">\n    <li (click)=\"this.addWidgetHeader()\"> Header</li>\n    <li (click)=\"this.addWidgetImage()\"> Image</li>\n    <li (click)=\"this.addWidgetVideo()\"> YouTube</li>\n    <!--Commented out as it needs a new component and that isn't in the homework structure\n    <li (click)=\"this.addWidgetHTML()\"> HTML</li>-->\n  </ul>\n  <br/>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n"

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
        this.widgets = [{}];
        this.successMsg = 'Your widget has been created. You are now being routed to the edit page for your new widget. ' +
            'You may edit it or use the gray back arrow to add another widget.';
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        console.log(this.widget);
    }
    WidgetChooserComponent.prototype.addWidgetHeader = function () {
        this.widget.widgetType = 'HEADING';
        this.widget.pageId = this.pageId;
        this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
        alert(this.successMsg);
        console.log(this.widget);
        console.log(this.widgets);
        var newId = this.widget._id;
        if (this.widget) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
        }
        else {
            this.errorFlag = false;
        }
    };
    WidgetChooserComponent.prototype.addWidgetImage = function () {
        this.widget.widgetType = 'IMAGE';
        this.widget.pageId = this.pageId;
        this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
        alert(this.successMsg);
        console.log(this.widget);
        console.log(this.widgets);
        var newId = this.widget._id;
        if (this.widget) {
            this.errorFlag = true;
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
        }
        else {
            this.errorFlag = false;
        }
    };
    WidgetChooserComponent.prototype.addWidgetVideo = function () {
        this.widget.widgetType = 'YOUTUBE';
        this.widget.pageId = this.pageId;
        this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
        alert(this.successMsg);
        console.log(this.widget);
        console.log(this.widgets);
        var newId = this.widget._id;
        if (this.widget) {
            this.errorFlag = true;
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
        }
        else {
            this.errorFlag = false;
        }
    };
    WidgetChooserComponent.prototype.addWidgetHTML = function () {
        this.widget.widgetType = 'HTML';
        this.widget.pageId = this.pageId;
        this.widgets = this.widgetService.createWidget(this.pageId, this.widget);
        alert(this.successMsg);
        console.log(this.widget);
        console.log(this.widgets);
        var newId = this.widget._id;
        if (this.widget) {
            this.errorFlag = true;
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newId]);
        }
        else {
            this.errorFlag = false;
        }
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

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n\n"

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
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.widget = _this.widgetService.findWidgetById(params['wgid']);
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Name</label>\n  <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Name\"/>\n  <br/>\n  <label>Size</label>\n  <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" placeholder=\"Description\"/>\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"this.editWidget(widget)\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"this.deleteWidget(widget._id)\">Delete</a>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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
        this.widgets = [{}];
    }
    WidgetHeaderComponent.prototype.editWidget = function (widget) {
        console.log(widget);
        this.widget = this.widgetService.updateWidget(this.widget._id, widget);
        console.log(this.widget);
        if (this.widgets) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        console.log(this.widgets);
        this.widgets = this.widgetService.deleteWidget(this.widget._id);
        console.log(this.widgets);
        if (this.widgets) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['wgid']);
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

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Name</label>\n  <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Name\"/>\n  <br/>\n  <label>URL</label>\n  <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" placeholder=\"URL\"/>\n  <br/>\n  <label>Size</label>\n  <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" placeholder=\"Size\"/>\n  <br/>\n  <label>Width</label>\n  <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" placeholder=\"Width\"/>\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"this.editWidget(widget)\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"this.deleteWidget(widget._id)\">Delete</a>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activatedRouter) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.widgets = [{}];
    }
    WidgetImageComponent.prototype.editWidget = function (widget) {
        console.log(widget);
        this.widget = this.widgetService.updateWidget(this.widget._id, widget);
        console.log(this.widget);
        if (this.widgets) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        console.log(this.widgets);
        this.widgets = this.widgetService.deleteWidget(this.widget._id);
        console.log(this.widgets);
        if (this.widgets) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['wgid']);
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

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid:hover {\n    text-decoration: none;\n}\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#website-edit-button {\n    color: white;\n}\n#website-delete-button {\n    color: white;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3Byb2ZpbGUtZ3JheSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbn1cbiNwcm9maWxlLWhlYWRlci1ncmF5IHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGNvbG9yOiAjNjk2OTY5XG59XG4jYmFjay1jaGV2cm9uLWdyYXkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBkaW1ncmF5O1xufVxuI2NoZWNrLWljb24tZ3JheSB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY29sb3I6IGRpbWdyYXk7XG59XG4jd2Vic2l0ZS1lZGl0LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3dlYnNpdGUtZGVsZXRlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3VzZXItYmx1ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4jZ3JheS1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\" style=\"display: inline-block\">\n    <h1 id=\"profile-header-gray\">&nbsp; Widget Edit\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id= \"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n        <i class=\"fas fa-check fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br />\n<div class=\"container-fluid\">\n  <br />\n  <label>Name</label>\n  <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Name\"/>\n  <br/>\n  <label>URL</label>\n  <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" placeholder=\"URL\"/>\n  <br/>\n  <label>Size</label>\n  <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" placeholder=\"Size\"/>\n  <br/>\n  <label>Width</label>\n  <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" placeholder=\"Width\"/>\n  <br/>\n  <a class=\"btn btn-success btn-block\" id=\"website-edit-button\" (click)=\"this.editWidget(widget)\">Update</a>\n  <a class=\"btn btn-warning btn-block\" id=\"website-delete-button\" (click)=\"this.deleteWidget(widget._id)\">Delete</a>\n</div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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
        this.widgets = [{}];
    }
    WidgetYoutubeComponent.prototype.editWidget = function (widget) {
        console.log(widget);
        this.widget = this.widgetService.updateWidget(this.widget._id, widget);
        console.log(this.widget);
        if (this.widgets) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        console.log(this.widgets);
        this.widgets = this.widgetService.deleteWidget(this.widget._id);
        console.log(this.widgets);
        if (this.widgets) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['wgid']);
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

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#profile-gray {\n    padding: 10px;\n    display: inline-block;\n    background-color: #DDDDDD;\n}\n#profile-header-gray {\n    font-size: 1.7em;\n    color: #696969\n}\n#back-chevron-gray {\n    float: left;\n    color: dimgray;\n}\n#widget-height {\n    margin-bottom: 75px;\n}\n.container {\n    position: relative;\n}\n.top-right-position {\n    position: absolute;\n    top: 0px;\n    right: -35px;\n    background-color: whitesmoke;\n    background-size: 100px 100px;\n}\n#check-icon-gray {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray2 {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray3 {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray4 {\n    float:right;\n    color: dimgray;\n}\n#check-icon-gray5 {\n    float:right;\n    color: dimgray;\n}\n#gray-footer {\n    background-color: #DDDDDD;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n}\n#user-blue {\n    float: right;\n    color: dodgerblue;\n    padding: 15px;\n}\n.container-fluid:hover {\n    text-decoration: none;\n}\n.image {\n    position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNwcm9maWxlLWdyYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG59XG4jcHJvZmlsZS1oZWFkZXItZ3JheSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogIzY5Njk2OVxufVxuI2JhY2stY2hldnJvbi1ncmF5IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiN3aWRnZXQtaGVpZ2h0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcC1yaWdodC1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAtMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XG59XG4jY2hlY2staWNvbi1ncmF5IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNjaGVjay1pY29uLWdyYXkyIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNjaGVjay1pY29uLWdyYXkzIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNjaGVjay1pY29uLWdyYXk0IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNjaGVjay1pY29uLWdyYXk1IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBjb2xvcjogZGltZ3JheTtcbn1cbiNncmF5LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuI3VzZXItYmx1ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY29udGFpbmVyLWZsdWlkOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<header>\n  <div class=\"container-fluid\" id=\"profile-gray\">\n    <h1 id=\"profile-header-gray\">&nbsp;&nbsp; Widgets\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\" id=\"back-chevron-gray\"></i>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        <i class=\"fas fa-plus fontawsome_icon\" id=\"check-icon-gray\"></i>\n      </a>\n    </h1>\n  </div>\n</header>\n<br/>\n  <div *ngFor = \"let widget of widgets\" id=\"widget-height\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"container\">\n          {{widget.text}}\n          <div class=\"top-right-position\">\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <i class=\"fas fa-cog fontawsome_icon\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"container\">\n          <img width=\"560\" height=\"315\" alt=\"widget\" [src]=\"widget.url\" />\n          <div class=\"top-right-position\">\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <i class=\"fas fa-cog fontawsome_icon\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"container\">\n        {{widget.text}}\n          <div class=\"top-right-position\">\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <i class=\"fas fa-cog fontawsome_icon\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"container\">\n          <iframe width=\"560\" height=\"315\" [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n          <div class=\"top-right-position\">\n            <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <i class=\"fas fa-cog fontawsome_icon\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<footer id=\"gray-footer\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <i class=\"fas fa-user fontawsome_icon\" id=\"user-blue\"></i>\n    </a>\n  </div>\n</footer>\n</body>\n"

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




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRouter) {
        this.widgetService = widgetService;
        this.activatedRouter = activatedRouter;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        console.log(this.pageId);
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
        console.log(this.widgets);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
    production: false
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