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

















var routes = [
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

module.exports = "\n<a class = \"button\" routerLink=\"/login\">Login</a>​\n<a class = \"button\" routerLink=\"/register\">Register</a>​\n<a class = \"button\" routerLink=\"/user/:uid\">Profile</a>​\n\n<a class = \"button\" routerLink=\"user/:uid/website\">Website-List</a>​\n<a class = \"button\" routerLink=\"user/:uid/website/new\">Website-New</a>​\n<a class = \"button\" routerLink=\"user/:uid/website/:wid\">Website-Edit</a>​\n\n<a class = \"button\" routerLink=\"user/:uid/website/:wid/page\">Page-List</a>​\n<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/new\">Page-New</a>\n​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid\">Page-Edit</a>​\n\n​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Widget-List</a>​\n​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid/widget/new\">Widget-Chooser</a>​\n​<a class = \"button\" routerLink=\"user/:uid/website/:wid/page/:pid/widget/:wgid\">Widget-Edit</a>​\n\n\n<router-outlet></router-outlet>\n"

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
    function Page(_id, name, websiteId, desciption) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = desciption;
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
    function Widget(_id, type, pageId, size, text, width, url) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
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



var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]("321", "Post 1", "456", "Lorem"),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]("432", "Post 2", "456", "Lorem"),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]("543", "Post 3", "456", "Lorem")
        ];
    }
    PageService.prototype.reateWebsite = function (websiteId, page) {
        var new_page = {
            _id: (new Date()).getTime() + '',
            name: page.name,
            websiteId: page.websiteId,
            description: page.description
        };
        this.pages.push(new_page);
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
        return this.pages.filter(function (page) {
            return page.websiteId === websiteId;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].description = page.description;
            }
        }
    };
    PageService.prototype.deleteWebsite = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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



var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('123', 'alice', 'qq'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('234', 'bob', 'qq'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('345', 'charlie', 'qq')
        ];
    }
    // users = [
    //   {id: "111", username: "hunter", password: "hunter", firstname: "h" }
    // ]
    UserService.prototype.createUser = function (user) {
        user._id = Math.floor(Math.random() * 1000).toString();
        this.users.push(new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"](user._id, user.username, user.password));
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.getUserList = function () {
        return this.users;
    };
    UserService.prototype.findUserByName = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === user._id) {
                this.users[i].firstname = user.firstname;
                this.users[i].lastname = user.lastname;
                this.users[i].email = user.email;
                return this.users[i];
            }
        }
    };
    UserService.prototype.deleteUserById = function (userId) {
        for (var i in this.users) {
            if (this.users[i]._id === userId) {
                var j = +i;
                this.users.splice(j, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
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



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
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
        var new_website = {
            _id: (new Date()).getTime() + '',
            name: website.name,
            developerId: userId,
            description: website.description
        };
        this.websites.push(new_website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        return this.websites.filter(function (website) {
            return website._id === websiteId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
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



var WidgetService = /** @class */ (function () {
    function WidgetService() {
        // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', width = '100%',url = 'url')
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HEADER', '321', '2', 'GIZMODO'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HEADER', '321', '2', 'GIZMODO'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token'),
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetByPageId = function (pageId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return true;
                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                }
            }
        }
        return false;
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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

module.exports = "<body>\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div >\n      <a href=\"page-list.html\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-text cl-text-white cl-text-bold\" href=\"#\">\n        Edit Page\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a href=\"page-list.html\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" href=\"page-list.html\">Delete</a>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a href=\"profile.html\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

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


var PageEditComponent = /** @class */ (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<body>\n\n<nav class=\"navbar  navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div>\n      <a href=\"website-list.html\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-text cl-text-white cl-text-bold\" href=\"#\">\n        Pages\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a href=\"page-new.html\" class=\" cl-text-black\">\n          <span class=\"fas fa-plus\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n\n      <a  href=\"page-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n      <a href=\"widget-list.html\">Blog Post</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n\n      <a  href=\"page-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n      <a href=\"widget-list.html\">Blogs</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n\n      <a href=\"page-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n      <a href=\"widget-list.html\">Home</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n\n      <a  href=\"page-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n      <a href=\"widget-list.html\">About</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n\n      <a  href=\"page-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n      <a href=\"widget-list.html\">Contact Us</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a href=\"profile.html\" >\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

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


var PageListComponent = /** @class */ (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<body>\n<nav class=\"navbar navbar-brand  navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div>\n      <a href=\"page-list.html\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-text cl-text-white cl-text-bold\" href=\"#\">\n        New Page\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a href=\"page-list.html\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-check\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a href=\"profile.html\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

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


var PageNewComponent = /** @class */ (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
    /*login(username: String, password: String) {
      //alert('username: ' + username);
     // if (username === 'alice' && password == "qqq") {
        const user: User = this.userService.findUserByCredential(username, password);
        if (user) {
          this.router.navigate(['/profile', user._id ]);
        }
     // }
    }*/
    LoginComponent.prototype.login = function () {
        this.username = this.myloginForm.value.username;
        this.password = this.myloginForm.value.password;
        alert(this.username);
        this.errorFlag = false;
        var user = this.userService.findUserByCredential(this.username, this.password);
        if (user) {
            this.router.navigate(['/user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--<h3 class = \"cl-profile-h3\">Profile</h3>-->\n\n<!--<form (ngSubmit)=\"updateUser()\" #fp = \"ngForm\">-->\n<!--<div class = \"cl-margin-left\" class=\"container\">-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"username\">Username</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"jannunzi\"-->\n             <!--ngModel required #user.username=\"ngModel\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"email\">Email address</label>-->\n      <!--<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"jannunzi@gmail.com\"-->\n             <!--ngModel required #user.email=\"ngModel\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"firstname\">First Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"Jose\"-->\n             <!--ngModel required #user.firstname=\"ngModel\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"last-name\">Last Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"last-name\" name= \"lastname\" placeholder=\"Annunziato\"-->\n             <!--ngModel required #user.lastname=\"ngModel\">-->\n    <!--</div>-->\n  <!--<button class=\" btn btn-secondary btn-block\"-->\n     <!--type=\"submit\" >Update</button>-->\n  <!--<a class=\"btn btn-primary btn-block\"-->\n     <!--routerLink=\"/user/{{user._id}}/website\">Websites</a>-->\n  <!--<a class=\"btn btn-success  btn-block\"-->\n     <!--routerLink=\"/login\">Logout</a>-->\n\n\n\n<!--</div>-->\n\n<!--<div id=\"footer\" ></div>-->\n\n<!--</form>-->\n\n<nav class=\"navbar bg-primary fixed-top\">\n  <div class=\"container-fluid \">\n\n    <a class=\"navbar-brand cl-text-white\" routerLink=\"\">Profile</a>\n    <a (click)=\"updateUser()\" class=\"btn-primary navbar-text float-right\"><span class=\"fas fa-check\"></span></a>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <h1>Profile</h1>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"first-name\">First Name</label>\n    <input [(ngModel)]=\"user.firstname\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"last-name\">Last Name</label>\n    <input [(ngModel)]=\"user.lastname\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n  </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{user._id}}/website\">Websites</a>\n  <a class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n\n"

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
        //this.user = this.userService.findUserById(this.userId);
        // console.log(this.user.username);
        // console.log(this.user.password);
    }
    ProfileComponent.prototype.updateUser = function () {
        console.log(this.user.username);
        console.log(this.user.firstname);
        console.log(this.user.lastname);
        // const cur_user: User = new User(this.user._id, this.user.username, this.user.password,
        //   String(this.firstname), String(this.lastname), String(this.email));
        this.user = this.userService.updateUser(this.user);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.userId = params.uid; });
        this.user = this.userService.findUserById(this.userId);
        console.log('user id: ' + this.userId);
        console.log('user name' + this.user.username);
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
        this.username = this.myRegisterForm.value.username;
        this.password = this.myRegisterForm.value.password;
        this.v_password = this.myRegisterForm.value.v_password;
        this.errorFlag1 = false;
        this.errorFlag2 = false;
        if (this.v_password === this.password && !this.userService.findUserByName(this.username)) {
            var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', this.username, this.password);
            this.userService.createUser(user);
            alert('Registration succeed!');
            this.router.navigate(['/', 'login']);
        }
        else if (this.userService.findUserByName(this.username)) {
            this.errorFlag2 = true;
        }
        else {
            this.errorFlag1 = true;
        }
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

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n@media all and (orientation:landscape) {\n\n  #icon-ok{\n    visibility: hidden;\n  }\n  #icon-user{\n    visibility: hidden;\n  }\n  #icon-chev2{\n    visibility: hidden;\n  }\n\n\n  /* Styles for Landscape screen */\n}\n\n@media all and (orientation: portrait){\n  #division2{\n    display: none;\n  }\n  /*#chevron-left{*/\n  /*behavior: inherit;*/\n  /*position: fixed;*/\n  /*left: 2%;*/\n  /*padding-right: 2px;*/\n  /*padding-left: 2px;*/\n  /*display: block;*/\n  /*}*/\n  /*#icon-plus{*/\n  /*positon: fixed;*/\n  /**/\n  /*}*/\n  /*#websites{*/\n  /*display: none;*/\n  /*}*/\n  /*#icon-plus{*/\n  /*display: none;*/\n  /*}*/\n  /*#division-col1{*/\n  /*display: none;*/\n  /*}*/\n\n\n  #division-col1{\n    display: none;\n  }\n  #division-col2{\n    margin-left: 5px;\n  }\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7O0VBR0EsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsSUFBSTtFQUNKLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsR0FBRztFQUNILElBQUk7RUFDSixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLElBQUk7RUFDSixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLElBQUk7RUFDSixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLElBQUk7OztFQUdKO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7OztBQUdGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XG5cbiAgI2ljb24tb2t7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gICNpY29uLXVzZXJ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gICNpY29uLWNoZXYye1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG5cbiAgLyogU3R5bGVzIGZvciBMYW5kc2NhcGUgc2NyZWVuICovXG59XG5cbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAjZGl2aXNpb24ye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyojY2hldnJvbi1sZWZ0eyovXG4gIC8qYmVoYXZpb3I6IGluaGVyaXQ7Ki9cbiAgLypwb3NpdGlvbjogZml4ZWQ7Ki9cbiAgLypsZWZ0OiAyJTsqL1xuICAvKnBhZGRpbmctcmlnaHQ6IDJweDsqL1xuICAvKnBhZGRpbmctbGVmdDogMnB4OyovXG4gIC8qZGlzcGxheTogYmxvY2s7Ki9cbiAgLyp9Ki9cbiAgLyojaWNvbi1wbHVzeyovXG4gIC8qcG9zaXRvbjogZml4ZWQ7Ki9cbiAgLyoqL1xuICAvKn0qL1xuICAvKiN3ZWJzaXRlc3sqL1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbiAgLyp9Ki9cbiAgLyojaWNvbi1wbHVzeyovXG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICAvKn0qL1xuICAvKiNkaXZpc2lvbi1jb2wxeyovXG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICAvKn0qL1xuXG5cbiAgI2RpdmlzaW9uLWNvbDF7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZGl2aXNpb24tY29sMntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<nav class = \"navbar navbar-brand cl-blue-navbar fixed-top cl-full-width\" >\n  <div class=\"row\" >\n    <div class=\"col-sm-4 navbar-text  cl-blue-navbar\"  id = \"division2\">\n      <a href=\"website-list.html\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n\n      <a  class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\" id = \"websites\">\n        Websites\n      </a>\n      <a href=\"#\" class=\"navbar-link navbar-text float-right cl-text-white\">\n\n        <span class=\"fas fa-plus\" id = \"icon-plus cl-icon-padding\"></span>\n      </a>\n\n\n    </div>\n\n    <div class=\"col-sm-8 navbar-text  cl-blue-navbar\">\n      <!--<div class=\"container-fluid\">-->\n      <a href=\"website-list.html\" class=\"navbar-link cl-text-white\" id = \"icon-chev2\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Edit Websites\n      </a>\n      <a href=\"website-list.html\" class=\"navbar-link navbar-text float-right cl-text-white \" id = \"icon-ok\">\n        <span class=\"fas fa-check\"></span>\n      </a>\n      <!--</div>-->\n    </div>\n  </div>\n</nav>\n<div class = \"row\">\n\n  <div class=\"col-sm-4\" id = \"division-col1\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Blogging App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Address Book App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Script Testing App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Blogger</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\" id = \"division-col2\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\" class = \"cl-text-bold\" >Website Name</label>\n        <input [(ngModel)]=\"website.website\" )]type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\" class = \"cl-text-bold\">Website Description</label>\n        <textarea id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"Blogger is a blog-publishing service.\"></textarea>\n      </div>\n      <a class=\"btn btn-danger  btn-block\" href=\"website-list.html\">Delete</a>\n    </form>\n  </div>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n  </div>\n  <a href=\"profile.html\" class=\"navbar-text cl-text-white cl-icon-padding\">\n    <span class=\"fas fa-user cl-text-white \" id = \"icon-user\"></span>\n  </a>\n</nav>\n\n</body>\n"

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
    function WebsiteEditComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        // console.log(this.user.username);
        // console.log(this.user.password);
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.userId = params.uid; });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<body>\n<nav class=\"navbar fixed-top cl-blue-navbar \">\n  <div class = \"fluid-container\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link cl-text-white\">\n      <span id = \"left-chev\" class=\"fas fa-chevron-left \" ></span>\n    </a>\n    <a class=\"cl-text-white navbar-text cl-text-bold\" href=\"#\">\n      Websites\n    </a>\n  </div>\n\n  <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text cl-text-white \">\n    <span id = \"icon-plus\" class=\"fas fa-plus cl-icon-padding \"></span>\n  </a>\n\n</nav>\n\n<div class=\"container\" >\n  <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" ><span class=\"fas float-right fa-cogs\" ></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">Address Book App</a>\n\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cogs float-right xs-visible\"></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">Blogger</a>\n\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cogs float-right xs-visible\"></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\" >Blogging App</a>\n\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fas fa-cogs float-right xs-visible\"></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\" >Script Testing App</a>\n\n    </li>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid row\">\n    <div class=\"float-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span id = \"icon-user\" class=\"fas fa-user cl-text-white \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n</body>\n"

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
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        // console.log(this.user.username);
        // console.log(this.user.password);
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.userId = params.uid; });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
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

module.exports = "<body>\n\n<nav class = \"navbar navbar-brand cl-blue-navbar fixed-top cl-full-width\">\n  <div class=\"row \" >\n    <div class=\"col-sm-4 navbar-text  cl-blue-navbar\"  id = \"division2\">\n      <a href=\"website-list.html\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a  class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\" id = \"websites\">\n        Websites\n      </a>\n      <a href=\"#\" class=\"navbar-link navbar-text float-right cl-text-white\">\n        <span class=\"fas fa-plus\" id = \"icon-plus\"></span>\n      </a>\n    </div>\n\n    <div class=\"col-sm-8 navbar-text  cl-blue-navbar\">\n      <div class=\"container-fluid\">\n        <a href=\"website-list.html\" class=\"navbar-link cl-text-white\" id = \"icon-chev2\">\n          <span class=\"fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          New Websites\n        </a>\n        <a href=\"website-list.html\" class=\"navbar-link navbar-text float-right cl-text-white \" id = \"icon-ok\">\n          <span class=\"fas fa-check\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class = \"row\">\n  <div class=\"col-sm-4\" id = \"division-col1\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Blogging App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Address Book App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Script Testing App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a href=\"website-edit.html\"><span class=\"fas fa-cog float-right\"></span></a>\n        <a href=\"page-list.html\">Blogger</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\" id = \"division-col2\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n  </div>\n  <a href=\"profile.html\" class=\"navbar-text cl-text-white cl-icon-padding\">\n    <span class=\"fas fa-user cl-text-white \" id = \"icon-user\"></span>\n  </a>\n</nav>\n</body>\n"

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


var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n<body>\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a href=\"widget-list.html\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-brand navbar-text cl-text-white cl-text-bold\" href=\"#\">\n        Choose Widget\n      </a>\n    </div>\n\n\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-heading.html\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-image.html\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-youtube.html\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar  navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n    </div>\n    <div class = \"navbar-text\">\n      <a href=\"profile.html\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n</body>\n"

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


var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/heading/heading.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/heading/heading.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  heading works!\n</p>\n"

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


var HeadingComponent = /** @class */ (function () {
    function HeadingComponent() {
    }
    HeadingComponent.prototype.ngOnInit = function () {
    };
    HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(/*! ./heading.component.html */ "./src/app/views/widget/widget-edit/heading/heading.component.html"),
            styles: [__webpack_require__(/*! ./heading.component.css */ "./src/app/views/widget/widget-edit/heading/heading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/image/image.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/image/image.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  image works!\n</p>\n"

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


var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/views/widget/widget-edit/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/views/widget/widget-edit/image/image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/youtube/youtube.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/youtube/youtube.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC95b3V0dWJlL3lvdXR1YmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/youtube/youtube.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/youtube/youtube.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  youtube works!\n</p>\n"

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


var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent() {
    }
    YoutubeComponent.prototype.ngOnInit = function () {
    };
    YoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-youtube',
            template: __webpack_require__(/*! ./youtube.component.html */ "./src/app/views/widget/widget-edit/youtube/youtube.component.html"),
            styles: [__webpack_require__(/*! ./youtube.component.css */ "./src/app/views/widget/widget-edit/youtube/youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YoutubeComponent);
    return YoutubeComponent;
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

module.exports = "<body>\n<nav class=\"navbar navbar-brand navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div >\n      <a href=\"page-list.html\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"fas fa-chevron-left\">\n          </span>\n      </a>\n      <a class=\"navbar-brand navbar-text cl-text-white cl-text-bold\" href=\"#\">\n        Widgets\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a href=\"widget-chooser.html\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"fas fa-plus\">\n          </span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div>\n    <div class=\"float-right\">\n      <a href=\"#\" class=\"float-right\">\n        <span class=\"fas fa-bars\"></span>\n      </a>\n      <a href=\"widget-heading.html\">\n        <span class=\"fas fa-cog\"></span>\n      </a>\n    </div>\n    <h1>London terror attack: Police fired 'unprecedented' number of rounds</h1>\n  </div>\n\n  <div>\n    <div class=\"float-right\">\n      <a href=\"#\" class=\"float-right\">\n        <span class=\"fas fa-bars\"></span>\n      </a>\n      <a href=\"widget-heading.html\">\n        <span class=\"fas fa-cog\"></span>\n      </a>\n    </div>\n    <h3>Counterterrorism officers patrol near the scene of the attack on London Bridge.</h3>\n  </div>\n\n  <div>\n    <div class=\"float-right\">\n      <div class=\"float-right\">\n\n        <a href=\"#\" class=\"float-right\">\n          <span class=\"fas fa-bars\"></span>\n        </a>\n        <a href=\"widget-image.html\">\n          <span class=\"fas fa-cog\"></span>\n        </a>\n      </div>\n      <img class=\"img-responsive img-rounded cl-widget-images\"\n           src=\"http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg\">\n\n\n      <div>\n        <div class=\" float-right\">\n\n          <a href=\"#\" class=\"float-right\">\n            <span class=\"fas fa-bars\"></span>\n          </a>\n          <a href=\"widget-heading.html\">\n            <span class=\"fas fa-cog\"></span>\n          </a>\n        </div>\n        <p>Armed officers responding to the London Bridge terror attack fired an \"unprecedented\" number of rounds at the three attackers because they were wearing what appeared to be suicide belts, police said.\n        </p>\n\n      </div>\n    </div>\n  </div>\n\n\n  <div>\n    <div class=\"float-right\">\n      <a href=\"#\" class=\"float-right\">\n        <span class=\"fas fa-bars\"></span>\n      </a>\n      <a href=\"widget-heading.html\">\n        <span class=\"fas fa-cog\"></span>\n      </a>\n    </div>\n    <h3>Report: Incident at London Bridge</h3>\n  </div>\n\n  <div>\n    <div class=\"embed-responsive embed-responsive-16by9 main\">\n      <iframe class = \"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/APexI9Zb6iE\" frameborder=\"0\" allowfullscreen></iframe>\"\n      <div class = \"overlay cl-relative-position\">\n        <a href=\"#\" class=\"float-right overlay cl-relative-position\">\n\n          <span class=\"fas fa-bars cl-white-background\" ></span>\n        </a>\n        <a href=\"widget-youtube.html\" class=\"float-right overlay cl-relative-position\">\n          <span class=\"fas fa-cog cl-relative-position cl-white-background\" ></span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <div class=\"float-right\">\n      <a href=\"#\" class=\"float-right\">\n        <span class=\"fas fa-bars\"></span>\n      </a>\n      <a href=\"widget-heading.html\">\n        <span class=\"fas fa-cog\"></span>\n      </a>\n    </div>\n    <p>There is a report of an incident has occurred at London Bridge. From CNN London.</p>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-brand navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid row\">\n\n\n    <div class=\"float-left navbar-text\">\n      <a href=\"#\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-play\"></span>\n      </a>\n      <a href=\"#\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-eye\"></span>\n      </a>\n\n    </div>\n    <div class=\"float-right navbar-text\">\n\n      <a href=\"profile.html\" class=\"cl-icon-padding\">\n        <span class=\"fas fa-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n</body>\n"

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


var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = __webpack_require__(/*! /Users/macbook/Documents/GitHub/cs5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map