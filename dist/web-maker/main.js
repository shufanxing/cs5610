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
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/heading/heading.component */ "./src/app/views/widget/widget-edit/heading/heading.component.ts");
/* harmony import */ var _views_widget_widget_edit_image_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/image/image.component */ "./src/app/views/widget/widget-edit/image/image.component.ts");
/* harmony import */ var _views_widget_widget_edit_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/youtube/youtube.component */ "./src/app/views/widget/widget-edit/youtube/youtube.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");


















var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:header', component: _views_widget_widget_edit_heading_heading_component__WEBPACK_IMPORTED_MODULE_14__["HeadingComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:image', component: _views_widget_widget_edit_image_image_component__WEBPACK_IMPORTED_MODULE_15__["ImageComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/:youtube', component: _views_widget_widget_edit_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_16__["YoutubeComponent"] }
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<a class = \"button\" routerLink=\"/login\">Login</a>​-->\n<!--<a class = \"button\" routerLink=\"/register\">Register</a>​-->\n<!--<a class = \"button\" routerLink=\"/user/:uid\">Profile</a>​-->\n\n<!--<a class = \"button\" routerLink=\"user/:uid/website\">Website-List</a>​-->\n<!--<a class = \"button\" routerLink=\"user/:uid/website/new\">Website-New</a>​-->\n<!--<a class = \"button\" routerLink=\"user/:uid/website/:wid\">Website-Edit</a>​-->\n\n<!--<a class = \"button\" routerLink=\"user/:uid/website/:wid/page\">Page-List</a>​-->\n<!--<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/new\">Page-New</a>-->\n<!--​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid\">Page-Edit</a>​-->\n\n<!--​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Widget-List</a>​-->\n<!--​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid/widget/new\">Widget-Chooser</a>​-->\n<!--​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid/widget/:wgid\">Widget-Edit</a>​-->\n\n\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'web-maker';
    }
    AppComponent.prototype.reorderItems = function (newIndexes) {
        console.log('start: ' + newIndexes.startIndex);
        console.log('stop: ' + newIndexes.endIndex);
        // call widget service function to update widget as per index
        /*this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
          .subscribe(
            (data) => console.log(data)
          );*/
    };
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/user.service.client */ "./src/app/service/user.service.client.ts");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/website.service.client */ "./src/app/service/website.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_heading_heading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/heading/heading.component */ "./src/app/views/widget/widget-edit/heading/heading.component.ts");
/* harmony import */ var _views_widget_widget_edit_image_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/image/image.component */ "./src/app/views/widget/widget-edit/image/image.component.ts");
/* harmony import */ var _views_widget_widget_edit_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/youtube/youtube.component */ "./src/app/views/widget/widget-edit/youtube/youtube.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/widget.service.client */ "./src/app/service/widget.service.client.ts");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/page.service.client */ "./src/app/service/page.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/widget/widget-list/sortable.directive */ "./src/app/views/widget/widget-list/sortable.directive.ts");
/* harmony import */ var _views_widget_widget_list_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/widget/widget-list/order-by-pipe.pipe */ "./src/app/views/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var _views_widget_widget_list_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/widget/widget-list/safe-pipe.pipe */ "./src/app/views/widget/widget-list/safe-pipe.pipe.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__["PageListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _views_widget_widget_edit_heading_heading_component__WEBPACK_IMPORTED_MODULE_19__["HeadingComponent"],
                _views_widget_widget_edit_image_image_component__WEBPACK_IMPORTED_MODULE_20__["ImageComponent"],
                _views_widget_widget_edit_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_21__["YoutubeComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_25__["WidgetEditComponent"],
                _views_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_26__["SortableDirective"],
                _views_widget_widget_list_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"],
                _views_widget_widget_list_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_service_user_service_client__WEBPACK_IMPORTED_MODULE_17__["UserService"], _service_website_service_client__WEBPACK_IMPORTED_MODULE_18__["WebsiteService"], _service_widget_service_client__WEBPACK_IMPORTED_MODULE_23__["WidgetService"], _service_page_service_client__WEBPACK_IMPORTED_MODULE_24__["PageService"]],
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
    function User(_id, username, password, firstname, lastname, email) {
        if (firstname === void 0) { firstname = 'alice'; }
        if (lastname === void 0) { lastname = 'chase'; }
        if (email === void 0) { email = 'alice@gmail'; }
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
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
        if (_id === void 0) { _id = '9899999'; }
        if (name === void 0) { name = 'name'; }
        if (description === void 0) { description = 'description'; }
        this._id = _id;
        this.name = name;
        this.description = description;
        this.developerId = developerId;
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
    function Widget(_id, name, widgetType, pageId, size, text, width, url) {
        if (name === void 0) { name = 'name'; }
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this._id = _id;
        this.name = name;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/service/page.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/service/page.service.client.ts ***!
  \************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('321', 'Post 1', '890', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('432', 'Post 2', '890', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('543', 'Post 3', '890', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('678', 'Post 1', '678', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('7789', 'Post 2', '678', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('3456', 'Post 3', '678', 'Lorem')
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var curpage = { _id: page._id, name: page.name, websiteId: page.websiteId, description: page.description };
        return this.http.post('http://localhost:3200/api/website/' + websiteId + '/page', curpage);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var resultSet = [];
        for (var i in this.pages) {
            if (this.pages[i].websiteId === websiteId) {
                resultSet.push(this.pages[i]);
            }
        }
        return resultSet;
    };
    PageService.prototype.findPageByWebsiteId2 = function (websiteId) {
        return this.http.get('http://localhost:3200/api/website/' + websiteId + '/page');
        // return this.pages.filter(function (page) {
        //   return page.websiteId === websiteId;
        // });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get('http://localhost:3200/api/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var curpage = { _id: page['_id'], name: page['name'], websiteId: page['websiteId'], description: page['description'] };
        return this.http.put('http://localhost:3200/api/page/' + pageId, curpage);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete('http://localhost:3200/api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/service/user.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/service/user.service.client.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var UserService = /** @class */ (function () {
    // users = [
    //   {id: "111", username: "hunter", password: "hunter", firstname: "h" }
    // ]
    function UserService(http) {
        this.http = http;
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('123', 'alice', 'qq'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('234', 'bob', 'qq'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('345', 'charlie', 'qq')
        ];
    }
    UserService.prototype.createUser = function (user) {
        var userbody = { _id: '', username: user.username, password: user.password };
        return this.http.post('http://localhost:3200/api/user', userbody);
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        return this.http.get('http://localhost:3200/api/user?username=' + username + '&password=' + password);
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get('http://localhost:3200/api/user/' + userId);
    };
    UserService.prototype.getUserList = function () {
        return this.users;
    };
    UserService.prototype.findUserByName = function (username) {
        return this.http.get('http://localhost:3200/api/username?username=' + username);
    };
    UserService.prototype.updateUser = function (user) {
        var url = 'http://localhost:3200/api/user/' + user._id;
        return this.http.put(url, user);
    };
    UserService.prototype.deleteUserById = function (userId) {
        var url = 'http://localhost:3200/api/user/' + userId;
        return this.http.delete(url);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/service/website.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/service/website.service.client.ts ***!
  \***************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('123', 'Facebook', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('234', 'Tweeter', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('456', 'Gizmodo', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('890', 'Go', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('678', 'Checkers', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('789', 'Chess', '234', 'Lorem')
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var web = { _id: '', name: website.name, developerId: website.developerId, description: website.description };
        return this.http.post('http://localhost:3200/api/user/' + userId + '/website', web);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get('http://localhost:3200/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get('http://localhost:3200/api/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var web = { _id: website._id, name: website.name, developerId: website.developerId, description: website.description };
        return this.http.put('http://localhost:3200/api/website/' + websiteId, web);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete('http://localhost:3200/api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/service/widget.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/service/widget.service.client.ts ***!
  \**************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', width = '100%',url = 'url')
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'name', 'HEADER', '321', '2', 'London terror attack: Police fired \'unprecedented\' number of rounds'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('234', 'name', 'HEADER', '321', '4', 'Counter terrorism officers patrol near the scene of the attack on London Bridge.'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('345', 'name', 'IMAGE', '321', '2', 'text', '100%', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('456', 'name', 'HEADER', '321', '5', 'Armed officers responding to the London ' +
                'Bridge terror attack fired an "unprecedented" number of rounds at the three attackers because they ' +
                'were wearing what appeared to be suicide belts, police said.'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('678', 'name', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('789', 'name', 'HEADER', '321', '5', 'There is a report of an incident ' +
                'has occurred at London Bridge. From CNN London.')
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var curWidget = { _id: widget._id, name: widget.name,
            widgetType: widget.widgetType, pageId: widget.pageId, size: widget.size,
            text: widget.text, width: widget.width, url: widget.url };
        return this.http.post('http://localhost:3200/api/page/' + pageId + '/widget', curWidget);
    };
    WidgetService.prototype.findWidgetByPageId = function (pageId) {
        return this.http.get('http://localhost:3200/api/page/' + pageId + '/widget');
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get('http://localhost:3200/api/widget/' + widgetId);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var curwidget = { _id: widget['_id'], name: widget['name'], widgetType: widget['widgetType'],
            pageId: widget['pageId'], size: widget['size'],
            text: widget['text'], width: widget['width'], url: widget['url'] };
        return this.http.put('http://localhost:3200/api/widget/' + widgetId, curwidget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete('http://localhost:3200/api/widget/' + widgetId);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = 'http://localhost:3200/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div >\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-text cl-text-white cl-text-bold\" routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}\">\n        Edit Page\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click) = \"update()\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"curpage['name']\" [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"curpage['description']\" [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n  <a (click) = \"delete()\" class=\"btn btn-danger  btn-block\">Delete</a>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/page.service.client */ "./src/app/service/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageservice, pagerouter, activatedRouter) {
        this.pageservice = pageservice;
        this.pagerouter = pagerouter;
        this.activatedRouter = activatedRouter;
        this.curpage = {};
        this.pages = [];
    }
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageservice.deletePage(this.pageid).subscribe(function (data) {
            _this.pages = data;
            console.log(_this.pages);
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page';
            _this.pagerouter.navigateByUrl(url);
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.pageservice.updatePage(this.pageid, this.curpage).subscribe(function (data) {
            _this.curpage = data;
            console.log('updated page' + _this.curpage);
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid;
            _this.pagerouter.navigateByUrl(url);
            alert('update success!');
        }, function (error) {
            alert('update not successful');
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) { _this.userid = params.uid; _this.webid = params.wid, _this.pageid = params.pid; });
        this.pageservice.findPageById(this.pageid)
            .subscribe(function (data) {
            console.log('in login comp...');
            console.log(data);
            _this.curpage = data;
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<nav class=\"navbar  navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div>\n      <a routerLink=\"/user/{{userid}}/website\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-text cl-text-white cl-text-bold\" routerLink=\"/user/{{userid}}/website/{{webid}}/page\">\n        Pages\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/new\" class=\" cl-text-black\">\n          <span class=\"fas fa-plus\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let page of pages\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a  routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{page._id}}\"><span class=\"fas fa-cog float-right\"></span></a>\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\" >\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/page.service.client */ "./src/app/service/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, pageRouter, activeRouter) {
        this.pageService = pageService;
        this.pageRouter = pageRouter;
        this.activeRouter = activeRouter;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) { _this.userid = params.uid; _this.webid = params.wid; });
        this.pageService.findPageByWebsiteId2(this.webid)
            .subscribe(function (data) {
            console.log('in login comp...');
            console.log(data);
            _this.pages = data;
        });
        console.log(this.userid);
        console.log(this.webid);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class=\"navbar navbar-brand  navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div>\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-text cl-text-white cl-text-bold\" routerLink=\"/user/{{userid}}/website/{{webid}}/page/new\">\n        New Page\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"creat()\"  class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)] = \"curpage.name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n             class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)] = \"curpage.description\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n             class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/page.service.client */ "./src/app/service/page.service.client.ts");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(route, activatedroute, pageservice) {
        this.route = route;
        this.activatedroute = activatedroute;
        this.pageservice = pageservice;
        this.pages = [];
    }
    PageNewComponent.prototype.creat = function () {
        var _this = this;
        this.pageservice.createPage(this.webid, this.curpage).subscribe(function (data) {
            _this.pages = data;
            console.log(_this.pages);
            console.log('page name' + _this.curpage.name);
            console.log('description' + _this.curpage.description);
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page';
            _this.route.navigateByUrl(url);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (params) { _this.userid = params.uid; _this.webid = params.wid; });
        this.curpage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('', 'name', this.webid, 'description');
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"]])
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

module.exports = "\n.cl-padding-top{\n  padding-top: 60px;\n}\n.cl-margin-bottom{\n  width: 100%;\n  height: 40px;\n  margin-bottom: 5px;\n  padding-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2wtcGFkZGluZy10b3B7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLmNsLW1hcmdpbi1ib3R0b217XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--<div *ngIf=\"errorFlag\"-->\n     <!--class=\"alert alert-danger\">-->\n  <!--{{errorMsg}}-->\n\n<!--</div>-->\n\n\n<!--<form (ngSubmit) = \"login()\" #f=\"ngForm\">-->\n  <!--<label>Username</label>-->\n  <!--<input   placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\"-->\n           <!--ngModel required #username=\"ngModel\"/>-->\n\n  <!--<label>Password</label>-->\n  <!--<input   placeholder=\"password\" name=\"password\" type=\"text\" class=\"form-control\"-->\n           <!--ngModel required #password=\"ngModel\"/>-->\n\n  <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n        <!--Please enter username!-->\n  <!--</span>-->\n  <!--<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>-->\n  <!--<i class = \"fas fa-cogs\"></i>-->\n\n  <!--{{f.valid}}-->\n\n<!--</form>-->\n\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n\n<form (ngSubmit) = \"login()\" #f=\"ngForm\">\n<div class=\"container\" >\n  <h1 class = \"cl-padding-top\">Login</h1>\n  <input class = \"cl-margin-bottom\"\n         type=\"text\"\n         class = \"form-control\"\n         placeholder=\"username\"\n         name=\"username\"\n         ngModel required #username=\"ngModel\"/>\n  <input class = \"cl-margin-bottom\"\n         type=\"password\"\n         class = \"form-control\"\n         placeholder=\"password\"\n         name=\"password\"\n         ngModel required #password=\"ngModel\"/>\n  <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n  </span>\n  <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n  <a class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</a>\n</div>\n</form>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service.client */ "./src/app/service/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.username = 'hello world!';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.myloginForm.value.username;
        this.password = this.myloginForm.value.password;
        // alert(this.username);
        this.errorFlag = false;
        this.userService.findUserByCredential(this.username, this.password)
            .subscribe(function (user) {
            //this.user = user;
            if (user) {
                console.log(user);
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // this.users = UserService.getAllUser();
        console.log('login page!' + this.username);
        console.log(this.userService.users);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "myloginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "\nhtml, body {\n  margin: 0;\n  padding: 0\n}\n\nh3{margin-top: 0px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 25px;\n  color:white;\n  font-size: 20px\n}\n\n#header {\n  height: 40px;\n  background: #3576BE;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: -1\n}\n\n.cl-margin-left{\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxTQUFTO0VBQ1Q7QUFDRjs7QUFFQSxHQUFHLGVBQWU7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0Y7O0FBR0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwXG59XG5cbmgze21hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6IDIwcHhcbn1cblxuXG4jaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzU3NkJFO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xXG59XG4uY2wtbWFyZ2luLWxlZnR7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--<h3 class = \"cl-profile-h3\">Profile</h3>-->\n\n<!--<form (ngSubmit)=\"updateUser()\" #fp = \"ngForm\">-->\n<!--<div class = \"cl-margin-left\" class=\"container\">-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"username\">Username</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"jannunzi\"-->\n             <!--ngModel required #user.username=\"ngModel\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"email\">Email address</label>-->\n      <!--<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"jannunzi@gmail.com\"-->\n             <!--ngModel required #user.email=\"ngModel\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"firstname\">First Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"Jose\"-->\n             <!--ngModel required #user.firstname=\"ngModel\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"last-name\">Last Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"last-name\" name= \"lastname\" placeholder=\"Annunziato\"-->\n             <!--ngModel required #user.lastname=\"ngModel\">-->\n    <!--</div>-->\n  <!--<button class=\" btn btn-secondary btn-block\"-->\n     <!--type=\"submit\" >Update</button>-->\n  <!--<a class=\"btn btn-primary btn-block\"-->\n     <!--routerLink=\"/user/{{user._id}}/website\">Websites</a>-->\n  <!--<a class=\"btn btn-success  btn-block\"-->\n     <!--routerLink=\"/login\">Logout</a>-->\n\n\n\n<!--</div>-->\n\n<!--<div id=\"footer\" ></div>-->\n\n<!--</form>-->\n\n<nav class=\"navbar bg-primary fixed-top\">\n  <div class=\"container-fluid \">\n\n    <a class=\"navbar-brand cl-text-white\" routerLink=\"user/{{userId}}\">Profile</a>\n    <a (click)=\"updateUser()\" class=\"btn-primary navbar-text float-right\"><span class=\"fas fa-check\"></span></a>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <h3></h3>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user['username']\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input [(ngModel)]=\"user['email']\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"first-name\">First Name</label>\n    <input [(ngModel)]=\"user['firstname']\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"last-name\">Last Name</label>\n    <input [(ngModel)]=\"user['lastname']\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n  </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{userId}}/website\">Websites</a>\n  <a class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service.client */ "./src/app/service/user.service.client.ts");




// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   @ViewChild('fp') myProfileForm: NgForm;
//     userId: String;
//     username: String;
//     firstname: String;
//     lastname: String;
//     email: String;
//     user: User;
//   constructor(
//     private userService: UserService,
//     private route: ActivatedRoute) { this.route.params.subscribe((params: any) => {this.userId = params.uid; });
//     this.user = this.userService.findUserById(this.userId); }
//
//   updateUser() {
//     this.firstname = this.myProfileForm.value.firstname;
//     this.lastname = this.myProfileForm.value.lastname;
//     this.email = this.myProfileForm.value.email;
//     console.log(this.user._id);
//     console.log(this.user.username);
//     console.log(this.firstname);
//     console.log(this.lastname);
//     const cur_user: User = new User(this.user._id, this.user.username, this.user.password,
//       String(this.firstname), String(this.lastname), String(this.email));
//     this.user = this.userService.updateUser(cur_user);
//   }
//
//   ngOnInit() {
//     this.route.params.subscribe((params: any) => {this.userId = params.uid; });
//     this.user = this.userService.findUserById(this.userId);
//     this.username = this.user.username;
//   }
// }
//
// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// export class User {
//   _id: String;
//   username: String;
//   password: String;
//
//   firstName: String;
//   lastName: String;
//   email: String;
//
//   constructor(_id, username, password, firstName, lastName, email) {
//     this._id = _id;
//     this.username = username;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//   }
//
// }
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.user = {};
        this.errorMsg = 'Invalid username or password !';
        //this.user = this.userService.findUserById(this.userId);
        // console.log(this.user.username);
        // console.log(this.user.password);
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        // const cur_user: User = new User(this.user._id, this.user.username, this.user.password,
        //   String(this.firstname), String(this.lastname), String(this.email));
        this.userService.updateUser(this.user).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        }, function (error) {
            alert('update failed!');
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.userId = params.uid; });
        //this.user = this.userService.findUserById(this.userId);
        console.log('user id: ' + this.userId);
        //console.log('user name' + this.user.username);
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            console.log('in login comp...');
            console.log(data);
            _this.user = data;
        });
        // this.username = this.user['username'];
        // this.lastName = this.user['lastName'];
        // this.firstName = this.user['firstName'];
        // this.email = this.user['email'];
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"errorFlag1\" class=\"alert alert-danger\">\n{{errorMsg1}}\n</div>\n\n<div *ngIf=\"errorFlag2\"\n     class=\"alert alert-danger\">\n  {{errorMsg2}}\n</div>\n\n\n<form (ngSubmit)=\"register()\" #fr=\"ngForm\">\n<div class=\"container\">\n  <h1 class = \"cl-padding-top\">Register</h1>\n  <input\n         class = \"cl-margin-bottom\"\n         type=\"text\"\n         name = \"username\"\n         class=\"form-control\"\n         placeholder=\"username\"\n         ngModel required #username=\"ngModel\"/>\n  <input\n         class = \"cl-margin-bottom\"\n         type=\"password\"\n         name = \"password\"\n         class=\"form-control\"\n         placeholder=\"password\"\n         ngModel required #password=\"ngModel\"/>\n  <input\n         class = \"cl-margin-bottom\"\n         name = \"v_password\"\n         type=\"password\"\n         class=\"form-control\"\n         placeholder=\"verify password\"\n         ngModel required #v_password=\"ngModel\"/>\n  <button class=\" btn-primary btn-block\" type = \"submit\">Register</button>\n  <a class=\"btn btn-danger  btn-block\"\n     routerLink=\"/login\"> Cancel </a>\n</div>\n</form>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service.client */ "./src/app/service/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg1 = 'Password mis-matching!';
        this.errorMsg2 = 'This username has been used, please enter another username!';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.myRegisterForm.value.username;
        this.password = this.myRegisterForm.value.password;
        this.v_password = this.myRegisterForm.value.v_password;
        this.errorFlag1 = false;
        this.errorFlag2 = false;
        if (this.v_password !== this.password) {
            this.errorFlag1 = true;
            return;
        }
        this.userService.findUserByName(this.username).subscribe(function (user) {
            if (user) {
                _this.errorFlag2 = true;
            }
        }, function (error) {
            var curuser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', _this.username, _this.password);
            _this.userService.createUser(curuser).subscribe(function (user) {
                console.log(user);
            });
            alert('Registration succeed!');
            _this.router.navigate(['/', 'login']);
        });
        /*if ( (!this.errorFlag1) && (!this.errorFlag2)) {
          const user: User = new User('', this.username, this.password);
          this.userService.createUser(user);
          alert('Registration succeed!');
          this.router.navigate(['/', 'login']);
        }*/
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fr'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "myRegisterForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 0px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n@media all and (orientation:landscape) {\n\n  #icon-ok{\n    visibility: hidden;\n  }\n  #icon-user{\n    visibility: hidden;\n  }\n  #icon-chev2{\n    visibility: hidden;\n  }\n\n\n  /* Styles for Landscape screen */\n}\n@media all and (orientation: portrait){\n  #division2{\n    display: none;\n  }\n  /*#chevron-left{*/\n  /*behavior: inherit;*/\n  /*position: fixed;*/\n  /*left: 2%;*/\n  /*padding-right: 2px;*/\n  /*padding-left: 2px;*/\n  /*display: block;*/\n  /*}*/\n  /*#icon-plus{*/\n  /*positon: fixed;*/\n  /**/\n  /*}*/\n  /*#websites{*/\n  /*display: none;*/\n  /*}*/\n  /*#icon-plus{*/\n  /*display: none;*/\n  /*}*/\n  /*#division-col1{*/\n  /*display: none;*/\n  /*}*/\n\n\n  #division-col1{\n    display: none;\n  }\n  #division-col2{\n    margin-left: 5px;\n  }\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUU7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7RUFHQSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0EsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLElBQUk7RUFDSixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLEdBQUc7RUFDSCxJQUFJO0VBQ0osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixJQUFJO0VBQ0osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixJQUFJO0VBQ0osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixJQUFJOzs7RUFHSjtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOzs7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibGFja3tcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jbC10ZXh0LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2wtaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbC1oZWFkZXItcGFkZGluZ3tcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmNsLWZ1bGwtd2lkdGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWxpc3QtaXRlbXtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jbC12LWRpdmlkZXJ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4MDgwODA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1oZWFkaW5ne1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLXdpZGdldC1wYXJhZ3JhcGh7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtaGVpZ2h0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC1yZWxhdGl2ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsLWFic29sdXRlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY2wtd2lkZ2V0LWxpc3QtaWNvbnN7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2wtemVyby1yaWdodC1wYWRkaW5ne1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuLmNsLXdpZGdldC1pbWFnZXN7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDg1JTtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcblxuICAjaWNvbi1va3tcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI2ljb24tdXNlcntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI2ljb24tY2hldjJ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cblxuICAvKiBTdHlsZXMgZm9yIExhbmRzY2FwZSBzY3JlZW4gKi9cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG4gICNkaXZpc2lvbjJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAvKiNjaGV2cm9uLWxlZnR7Ki9cbiAgLypiZWhhdmlvcjogaW5oZXJpdDsqL1xuICAvKnBvc2l0aW9uOiBmaXhlZDsqL1xuICAvKmxlZnQ6IDIlOyovXG4gIC8qcGFkZGluZy1yaWdodDogMnB4OyovXG4gIC8qcGFkZGluZy1sZWZ0OiAycHg7Ki9cbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICAvKn0qL1xuICAvKiNpY29uLXBsdXN7Ki9cbiAgLypwb3NpdG9uOiBmaXhlZDsqL1xuICAvKiovXG4gIC8qfSovXG4gIC8qI3dlYnNpdGVzeyovXG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICAvKn0qL1xuICAvKiNpY29uLXBsdXN7Ki9cbiAgLypkaXNwbGF5OiBub25lOyovXG4gIC8qfSovXG4gIC8qI2RpdmlzaW9uLWNvbDF7Ki9cbiAgLypkaXNwbGF5OiBub25lOyovXG4gIC8qfSovXG5cblxuICAjZGl2aXNpb24tY29sMXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNkaXZpc2lvbi1jb2wye1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class = \"navbar navbar-brand cl-blue-navbar fixed-top cl-full-width\" >\n  <div class=\"row\" >\n    <div class=\"col-sm-4 navbar-text  cl-blue-navbar\"  id = \"division2\">\n      <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n\n      <a  class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/website\" id = \"websites\">\n        Websites\n      </a>\n      <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text float-right cl-text-white\">\n\n        <span class=\"fas fa-plus\" id = \"icon-plus cl-icon-padding\"></span>\n      </a>\n\n\n    </div>\n\n    <div class=\"col-sm-8 navbar-text  cl-blue-navbar\">\n      <!--<div class=\"container-fluid\">-->\n      <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link cl-text-white\" id = \"icon-chev2\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\"\n         routerLink=\"/user/{{userId}}/website\">\n        Edit Websites\n      </a>\n      <a (click)=\"update()\" class=\"navbar-link navbar-text float-right cl-text-white \" id = \"icon-ok\">\n        <span class=\"fas fa-check\"></span>\n      </a>\n      <!--</div>-->\n    </div>\n  </div>\n</nav>\n<div class = \"row\" >\n\n  <div class=\"col-sm-4\" id = \"division-col1\" >\n    <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a (click)=\"findWebByWebId(website['_id'])\" ><span class=\"fas fa-cog float-right\"></span></a>\n        <a routerLink= \"/user/{{userId}}/website/{{website['_id']}}/page\">{{website['name']}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\" id = \"division-col2\">\n    <form >\n      <div class=\"form-group\">\n        <label for=\"website-name\" class = \"cl-text-bold\" >Website Name</label>\n        <input [(ngModel)]=\"curweb['name']\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\" class = \"cl-text-bold\">Website Description</label>\n        <textarea [(ngModel)]=\"curweb['description']\" [ngModelOptions]=\"{standalone: true}\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"Blogger is a blog-publishing service.\"></textarea>\n      </div>\n      <a (click)=\"delete()\" class=\"btn btn-danger  btn-block\">Delete</a>\n    </form>\n  </div>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n  </div>\n  <a routerLink= \"/user/{{userId}}\" class=\"navbar-text cl-text-white cl-icon-padding\">\n    <span class=\"fas fa-user cl-text-white \" id = \"icon-user\"></span>\n  </a>\n</nav>\n\n</body>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/website.service.client */ "./src/app/service/website.service.client.ts");




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, link) {
        this.websiteService = websiteService;
        this.route = route;
        this.link = link;
        this.curweb = {};
        this.websites = [];
        // console.log(this.user.username);
        // console.log(this.user.password);
    }
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.webId).subscribe(function (data) {
            _this.websites = data;
            var url = '/user/' + _this.userId + '/website';
            console.log(url);
            _this.link.navigateByUrl(url);
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.webId, this.curweb).subscribe(function (data) {
            var url = '/user/' + _this.userId + '/website';
            _this.link.navigateByUrl(url);
        });
    };
    WebsiteEditComponent.prototype.findWebByWebId = function (curwebId) {
        var _this = this;
        console.log('curwebId is :' + curwebId);
        this.websiteService.findWebsiteById(curwebId).subscribe(function (data) {
            _this.curweb = data;
            var url = '/user/' + _this.userId + '/website/' + _this.curweb['_id'];
            _this.link.navigateByUrl(url);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.webId = params.wid;
        });
        console.log('************');
        console.log('userId' + this.userId);
        console.log('webId' + this.webId);
        this.websiteService.findWebsiteById(this.webId).subscribe(function (data) {
            _this.curweb = data;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n@media all and (orientation:landscape) {\n  #left-chev{\n    visibility: visible;\n  }\n  #icon-plus{\n    visibility: hidden;\n  }\n  #icon-user{\n    visibility: hidden;\n  }\n  div ul li a span{\n    visibility: hidden;\n  }\n}\n\nbody {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsLXdpZGdldC1pbWFnZXN7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDg1JTtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcbiAgI2xlZnQtY2hldntcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gICNpY29uLXBsdXN7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gICNpY29uLXVzZXJ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIGRpdiB1bCBsaSBhIHNwYW57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class=\"navbar fixed-top cl-blue-navbar \">\n  <div class = \"fluid-container\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link cl-text-white\">\n      <span id = \"left-chev\" class=\"fas fa-chevron-left \" ></span>\n    </a>\n    <a class=\"cl-text-white navbar-text cl-text-bold\" routerLink=\"/user/{{userId}}/website\">\n      Websites\n    </a>\n  </div>\n\n  <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text cl-text-white \">\n    <span id = \"icon-plus\" class=\"fas fa-plus cl-icon-padding \"></span>\n  </a>\n\n</nav>\n\n<div class=\"container\" >\n  <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" ><span class=\"fas float-right fa-cogs\" ></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n\n    </li>\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cogs float-right xs-visible\"></span></a>-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">Blogger</a>-->\n\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cogs float-right xs-visible\"></span></a>-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\" >Blogging App</a>-->\n\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cogs float-right xs-visible\"></span></a>-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\" >Script Testing App</a>-->\n\n    <!--</li>-->\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid row\">\n    <div class=\"float-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span id = \"icon-user\" class=\"fas fa-user cl-text-white \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n</body>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/website.service.client */ "./src/app/service/website.service.client.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
        this.websites = [];
        // console.log(this.user.username);
        // console.log(this.user.password);
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.userId = params.uid; });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "@media all and (orientation:landscape) {\n\n  #icon-ok{\n    visibility: hidden;\n  }\n  #icon-user{\n    visibility: hidden;\n  }\n  #icon-chev2{\n    visibility: hidden;\n  }\n\n\n  /* Styles for Landscape screen */\n}\n\n@media all and (orientation: portrait){\n  #division2{\n    display: none;\n  }\n  /*#chevron-left{*/\n  /*behavior: inherit;*/\n  /*position: fixed;*/\n  /*left: 2%;*/\n  /*padding-right: 2px;*/\n  /*padding-left: 2px;*/\n  /*display: block;*/\n  /*}*/\n  /*#icon-plus{*/\n  /*positon: fixed;*/\n  /**/\n  /*}*/\n  /*#websites{*/\n  /*display: none;*/\n  /*}*/\n  /*#icon-plus{*/\n  /*display: none;*/\n  /*}*/\n  /*#division-col1{*/\n  /*display: none;*/\n  /*}*/\n\n\n  #division-col1{\n    display: none;\n  }\n  #division-col2{\n    margin-left: 5px;\n  }\n\n\n}\n\nbody {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7O0VBR0EsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsSUFBSTtFQUNKLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsR0FBRztFQUNILElBQUk7RUFDSixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLElBQUk7RUFDSixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLElBQUk7RUFDSixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLElBQUk7OztFQUdKO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7OztBQUdGOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcblxuICAjaWNvbi1va3tcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI2ljb24tdXNlcntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI2ljb24tY2hldjJ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cblxuICAvKiBTdHlsZXMgZm9yIExhbmRzY2FwZSBzY3JlZW4gKi9cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG4gICNkaXZpc2lvbjJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAvKiNjaGV2cm9uLWxlZnR7Ki9cbiAgLypiZWhhdmlvcjogaW5oZXJpdDsqL1xuICAvKnBvc2l0aW9uOiBmaXhlZDsqL1xuICAvKmxlZnQ6IDIlOyovXG4gIC8qcGFkZGluZy1yaWdodDogMnB4OyovXG4gIC8qcGFkZGluZy1sZWZ0OiAycHg7Ki9cbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICAvKn0qL1xuICAvKiNpY29uLXBsdXN7Ki9cbiAgLypwb3NpdG9uOiBmaXhlZDsqL1xuICAvKiovXG4gIC8qfSovXG4gIC8qI3dlYnNpdGVzeyovXG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICAvKn0qL1xuICAvKiNpY29uLXBsdXN7Ki9cbiAgLypkaXNwbGF5OiBub25lOyovXG4gIC8qfSovXG4gIC8qI2RpdmlzaW9uLWNvbDF7Ki9cbiAgLypkaXNwbGF5OiBub25lOyovXG4gIC8qfSovXG5cblxuICAjZGl2aXNpb24tY29sMXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNkaXZpc2lvbi1jb2wye1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuXG59XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<nav class = \"navbar navbar-brand cl-blue-navbar fixed-top cl-full-width\">\n  <div class=\"row \" >\n    <div class=\"col-sm-4 navbar-text  cl-blue-navbar\"  id = \"division2\">\n      <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a  class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/website\" id = \"websites\">\n        Websites\n      </a>\n      <a (click) =\"create()\" class=\"navbar-link navbar-text float-right cl-text-white\">\n        <span class=\"fas fa-plus\" id = \"icon-plus\"></span>\n      </a>\n    </div>\n\n    <div class=\"col-sm-8 navbar-text  cl-blue-navbar\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link cl-text-white\" id = \"icon-chev2\">\n          <span class=\"fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/website/new\">\n          New Websites\n        </a>\n        <a (click) =\"create()\" class=\"navbar-link navbar-text float-right cl-text-white \" id = \"icon-ok\">\n          <span class=\"fas fa-check\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"row\">\n  <div class=\"col-sm-4\" id = \"division-col1\">\n    <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let web of websites\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"/user/{{userId}}/website/{{web['_id']}}\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a routerLink=\"/user/{{userId}}/website/{{web['_id']}}/page\">{{web['name']}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\" id = \"division-col2\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input [(ngModel)] = \"curweb['name']\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea [(ngModel)] = \"curweb['description']\" [ngModelOptions]=\"{standalone: true}\" id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n  </div>\n  <a routerLink=\"/user/{{userId}}\" class=\"navbar-text cl-text-white cl-icon-padding\">\n    <span class=\"fas fa-user cl-text-white \" id = \"icon-user\"></span>\n  </a>\n</nav>\n</body>\n"

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
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/website.service.client */ "./src/app/service/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(webservice, route, activeroute) {
        this.webservice = webservice;
        this.route = route;
        this.activeroute = activeroute;
    }
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.curweb = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"](this.curweb._id, this.curweb.name, this.userId, this.curweb.description);
        this.webservice.createWebsite(this.userId, this.curweb).subscribe(function (data) {
            console.log('cur developerid' + _this.curweb.developerId);
            var url = '/user/' + _this.userId + '/website';
            _this.route.navigateByUrl(url);
            _this.webservice.findWebsitesByUser(_this.userId).subscribe(function (webs) {
                _this.websites = webs;
            });
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeroute.params.subscribe(function (params) { _this.userId = params.uid; });
        this.webservice.findWebsitesByUser(this.userId).subscribe(function (data) {
            _this.websites = data;
        });
        this.curweb = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('id', 'name', this.userId, 'des');
        console.log(this.curweb.developerId);
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-brand navbar-text cl-text-white cl-text-bold\"\n         routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/new\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let widget of widgets\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <button (click)= \"creat(widget)\" class = \"btn btn-primary cl-text-bold\">{{widget.widgetType}}</button>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\"\n         class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(service, route, activeroute) {
        this.service = service;
        this.route = route;
        this.activeroute = activeroute;
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('id', 'name', 'HEADER', 'pageid'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('id', 'name', 'IMAGE', 'pageid'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('id', 'name', 'YOUTUBE', 'pageid')
        ];
    }
    WidgetChooserComponent.prototype.creat = function (widget) {
        var _this = this;
        var new_widget = {
            _id: (new Date()).getTime() + '',
            name: widget.name,
            pageId: this.pageid,
            widgetType: widget.widgetType,
            text: widget.text,
            url: widget.url,
            size: widget.size,
            width: widget.width
        };
        this.service.createWidget(this.pageid, new_widget).subscribe(function (newWidget) {
            console.log(newWidget);
            var url = '/user/' + _this.userid + '/website/' + _this.webid
                + '/page/' + _this.pageid + '/widget/' + new_widget._id;
            _this.route.navigateByUrl(url);
        });
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeroute.params.subscribe(function (params) {
            _this.userid = params.uid;
            _this.webid = params.wid;
            _this.pageid = params.pid;
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/heading/heading.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/heading/heading.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L2hlYWRpbmcvaGVhZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/heading/heading.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/heading/heading.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class=\" navbar navbar-brand navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div>\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\" navbar-text cl-text-white cl-text-bold\"\n         routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/{{widgetid}}/header\">\n        Widgets Edit\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click) = \"update()\"  class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget['name']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input [(ngModel)]=\"widget['text']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget['size']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\"\n     (click)=\"delete()\"\n     >Delete</a>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/heading/heading.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/heading/heading.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeadingComponent = /** @class */ (function () {
    function HeadingComponent(headingService, route, activeRoute) {
        this.headingService = headingService;
        this.route = route;
        this.activeRoute = activeRoute;
        this.widget = {};
        this.allwidgets = [];
    }
    HeadingComponent.prototype.update = function () {
        var _this = this;
        this.headingService.updateWidget(this.widgetid, this.widget).subscribe(function (data) {
            _this.widget = data;
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid + '/widget';
            _this.route.navigateByUrl(url);
            alert('header update success');
        });
    };
    HeadingComponent.prototype.delete = function () {
        var _this = this;
        this.headingService.deleteWidget(this.widgetid).subscribe(function (data) {
            _this.allwidgets = data;
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid + '/widget';
            _this.route.navigateByUrl(url);
        });
    };
    HeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.userid = params.uid;
            _this.webid = params.wid;
            _this.pageid = params.pid;
            _this.widgetid = params.wgid;
        });
        this.headingService.findWidgetById(this.widgetid).subscribe(function (data) {
            _this.widget = data;
        });
    };
    HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(/*! ./heading.component.html */ "./src/app/views/widget/widget-edit/heading/heading.component.html"),
            styles: [__webpack_require__(/*! ./heading.component.css */ "./src/app/views/widget/widget-edit/heading/heading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HeadingComponent);
    return HeadingComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/image/image.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/image/image.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/image/image.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/image/image.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div >\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a  class = \"navbar-brand navbar-text cl-text-black cl-text-bold\"\n          routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/{{widgetid}}/image\">\n        Widgets Edit\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)= \"update()\"\n         class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget['name']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget['text']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget['url']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget['width']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"exampleFormControlFile1\">Upload</label>-->\n      <!--<input (change)=\"onFileChange($event)\" type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">-->\n    <!--</div>-->\n\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{widgetid}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{webid}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageid}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userid}}\"   style=\"display: none\"/>\n      <button type=\"submit\"  onclick = \"submit()\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n  </form>\n\n  <a (click)=\"delete()\" class=\"btn btn-danger  btn-block\">Delete</a>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/image/image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/image/image.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var ImageComponent = /** @class */ (function () {
    function ImageComponent(imageService, route, activeRoute, http) {
        this.imageService = imageService;
        this.route = route;
        this.activeRoute = activeRoute;
        this.http = http;
        this.widget = {};
        this.allwidgets = [];
        this.baseUrl = 'http://localhost:3200';
    }
    ImageComponent.prototype.update = function () {
        var _this = this;
        this.imageService.updateWidget(this.widgetid, this.widget).subscribe(function (data) {
            _this.widget = data;
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid + '/widget';
            _this.route.navigateByUrl(url);
            alert('header update success');
        });
    };
    ImageComponent.prototype.delete = function () {
        var _this = this;
        this.imageService.deleteWidget(this.widgetid).subscribe(function (data) {
            _this.allwidgets = data;
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid + '/widget';
            _this.route.navigateByUrl(url);
        });
    };
    // onFileChange(event) {
    //   this.file = <File> event.target.files[0];
    //   this.input = event.target.result;
    //   console.log(event);
    // }
    // upload() {
    //   const reader = new FileReader();
    //   reader.addEventListener('load', (event: any) => {
    //     this.selectedfile = new ImageSnippet(event.target.result, this.file);
    //     this.uploadImage(this.selectedfile.file).subscribe(
    //       (res) => {
    //       },
    //       (err) => {
    //       });
    //     });
    //   reader.readAsDataURL(this.file);
    // }
    // public uploadImage(image: File) {
    //   const formData = new FormData();
    //
    //   formData.append('image', image);
    //
    //   return this.http.post('/user/' + this.userid + '/website/' + this.webid + '/page/' + this.pageid + '/widget', formData);
    // }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.userid = params.uid;
            _this.webid = params.wid;
            _this.pageid = params.pid;
            _this.widgetid = params.wgid;
        });
        this.imageService.findWidgetById(this.widgetid).subscribe(function (data) {
            _this.widget = data;
        });
    };
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/views/widget/widget-edit/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/views/widget/widget-edit/image/image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['widgetType']\" >\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-heading></app-heading>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-image></app-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-youtube></app-youtube>\n  </div>\n\n</div>\n"

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
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activeroute, service) {
        this.activeroute = activeroute;
        this.service = service;
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeroute.params.subscribe(function (params) {
            _this.userid = params.uid;
            _this.pageid = params.pid;
            _this.webid = params.wid;
            _this.widgetid = params.wgid;
        });
        this.service.findWidgetById(this.widgetid).subscribe(function (data) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/youtube/youtube.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/youtube/youtube.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3lvdXR1YmUveW91dHViZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC95b3V0dWJlL3lvdXR1YmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/youtube/youtube.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/youtube/youtube.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<!--<nav class=\"navbar navbar-default navbar-fixed-top\">-->\n<nav class=\"navbar navbar-brand navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div >\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/\"\n         class=\"cl-text-black cl-icon-padding\" >\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar navbar-text cl-text-white cl-text-bold\"\n         routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/{{widgetid}}/youtube\">\n        Widgets Edit\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\" >\n      <a  (click)=\"update()\"\n          class= \"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget['name']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget['text']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget['url']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget['width']\"\n             [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a (click)=\"delete()\"\n     class=\"btn btn-danger btn-block\" >Delete</a>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/youtube/youtube.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/youtube/youtube.component.ts ***!
  \***********************************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent(youtubeService, route, activeRoute) {
        this.youtubeService = youtubeService;
        this.route = route;
        this.activeRoute = activeRoute;
        this.widget = {};
        this.allwidgets = [];
    }
    YoutubeComponent.prototype.update = function () {
        var _this = this;
        this.youtubeService.updateWidget(this.widgetid, this.widget).subscribe(function (data) {
            _this.widget = data;
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid + '/widget';
            _this.route.navigateByUrl(url);
            alert('youtube update success');
        });
    };
    YoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.youtubeService.deleteWidget(this.widgetid).subscribe(function (data) {
            _this.allwidgets = data;
            var url = '/user/' + _this.userid + '/website/' + _this.webid + '/page/' + _this.pageid + '/widget';
            _this.route.navigateByUrl(url);
        });
    };
    YoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.userid = params.uid;
            _this.webid = params.wid;
            _this.pageid = params.pid;
            _this.widgetid = params.wgid;
        });
        this.youtubeService.findWidgetById(this.widgetid).subscribe(function (data) {
            _this.widget = data;
            console.log(_this.widget);
        });
    };
    YoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-youtube',
            template: __webpack_require__(/*! ./youtube.component.html */ "./src/app/views/widget/widget-edit/youtube/youtube.component.html"),
            styles: [__webpack_require__(/*! ./youtube.component.css */ "./src/app/views/widget/widget-edit/youtube/youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], YoutubeComponent);
    return YoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/order-by-pipe.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/widget/widget-list/order-by-pipe.pipe.ts ***!
  \****************************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (array !== undefined) {
            array.sort(function (a, b) {
                if (a[args] < b[args]) {
                    return -1;
                }
                else if (a[args] > b[args]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/safe-pipe.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/views/widget/widget-list/safe-pipe.pipe.ts ***!
  \************************************************************/
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
        // splitting input url on '='
        // the result is two elements in the output array
        var parts = url.split('=');
        var id = parts[1];
        url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
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

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<nav class=\"navbar navbar-brand navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n    <div>\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-brand navbar-text cl-text-white cl-text-bold\"\n         routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\">\n        Widgets\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/new\"\n         class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-plus\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\" >\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets | orderBy\">\n  <div [ngSwitch]=\"widget['widgetType']\">\n    <div class=\"jga-widget\">\n    <div *ngSwitchCase=\"'HEADER'\"  >\n      <div class=\"float-right\">\n        <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n           class=\"float-right\">\n          <router-outlet (click)=\"onActivate()\" >\n            <span class=\"fas fa-bars\"></span>\n          </router-outlet>\n        </a>\n        <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/{{widget['_id']}}\">\n          <span class=\"fas fa-cog\"></span>\n        </a>\n      </div>\n      <div [ngSwitch]=\"widget['size']\">\n        <div *ngSwitchCase=\"1\">\n          <h1>{{ widget['text'] }}</h1>\n        </div>\n        <div *ngSwitchCase=\"2\">\n          <h2>{{ widget['text'] }}</h2>\n        </div>\n        <div *ngSwitchCase=\"3\">\n          <h3>{{ widget['text'] }}</h3>\n        </div>\n        <div *ngSwitchCase=\"4\">\n          <h4>{{ widget['text'] }}</h4>\n        </div>\n        <div *ngSwitchCase=\"5\">\n          <p>{{ widget['text'] }}</p>\n        </div>\n        <div *ngSwitchCase=\"6\">\n          <h6>{{ widget['text'] }}</h6>\n        </div>\n      </div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'IMAGE'\" >\n        <div class=\"float-right\">\n          <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n             class=\"float-right\">\n            <router-outlet (click)=\"onActivate()\">\n              <span class=\"fas fa-bars\"></span>\n            </router-outlet>\n          </a>\n          <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/{{widget['_id']}}\">\n            <span class=\"fas fa-cog\"></span>\n          </a>\n        </div>\n        <img class=\"img-responsive img-rounded cl-widget-images\"\n             src=\"{{widget['url']}}\">\n    </div>\n\n\n    <div *ngSwitchCase=\"'YOUTUBE'\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe class = \"embed-responsive-item\" width=\"640\" height=\"360\"\n                [src]=\"getUrl(widget)\"\n                frameborder=\"0\"\n                allow=\"accelerometer autoplay encrypted-media gyroscope picture-in-picture\"\n                allowfullscreen>\n        </iframe>\n        <div class = \"overlay cl-relative-position\">\n          <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n             class=\"float-right overlay cl-relative-position\">\n            <router-outlet (click)=\"onActivate()\" >\n              <span class=\"fas fa-bars cl-white-background\" ></span>\n            </router-outlet>\n          </a>\n          <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget/{{widget['_id']}}\"\n             class=\"float-right overlay cl-relative-position\">\n            <span class=\"fas fa-cog cl-relative-position cl-white-background\" ></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    </div>\n   </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-brand navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"float-left navbar-text\">\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n         class=\"cl-icon-padding\">\n        <router-outlet (click)=\"onActivate()\" >\n          <span class=\"fas fa-play\"></span>\n        </router-outlet>\n      </a>\n      <a routerLink=\"/user/{{userid}}/website/{{webid}}/page/{{pageid}}/widget\"\n         class=\"cl-icon-padding\">\n        <router-outlet (click)=\"onActivate()\">\n          <span class=\"fas fa-eye\"></span>\n        </router-outlet>\n      </a>\n\n    </div>\n    <div class=\"float-right navbar-text\">\n\n      <a routerLink=\"/user/{{userid}}\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n</body>\n"

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
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetservice, route, activeroute, sanitizer) {
        this.widgetservice = widgetservice;
        this.route = route;
        this.activeroute = activeroute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.getUrl = function (widget) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(widget.url + '');
    };
    WidgetListComponent.prototype.onActivate = function () {
        window.scroll(0, 0);
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        var _this = this;
        // call widget service function to update widget as per index
        this.widgetservice.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageid)
            .subscribe(function (data) {
            console.log(data);
            _this.widgets = data;
        });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeroute.params.subscribe(function (params) {
            _this.userid = params.uid;
            _this.webid = params.wid;
            _this.pageid = params.pid;
        });
        this.widgetservice.findWidgetByPageId(this.pageid).subscribe(function (data) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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

module.exports = __webpack_require__(/*! /Users/macbook/Documents/GitHub/cs5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map