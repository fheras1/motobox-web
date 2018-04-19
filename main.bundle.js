webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>    \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(sessionService) {
        this.sessionService = sessionService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_resolvers_box_details_resolver_guard__ = __webpack_require__("./src/app/shared/resolvers/box-details-resolver.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_boxes_service__ = __webpack_require__("./src/app/shared/services/boxes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_global_error_handler_service__ = __webpack_require__("./src/app/shared/services/global-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_guards_can_leave_phone_create_guard__ = __webpack_require__("./src/app/shared/guards/can-leave-phone-create.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_resolvers_phone_details_resolver_guard__ = __webpack_require__("./src/app/shared/resolvers/phone-details-resolver.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_guards_is_authenticated_guard__ = __webpack_require__("./src/app/shared/guards/is-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rxjs_operators__ = __webpack_require__("./src/app/rxjs.operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_phone_phone_list_phone_list_component__ = __webpack_require__("./src/app/components/phone/phone-list/phone-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_phones_service__ = __webpack_require__("./src/app/shared/services/phones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_phone_phone_item_phone_item_component__ = __webpack_require__("./src/app/components/phone/phone-item/phone-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_misc_login_login_component__ = __webpack_require__("./src/app/components/misc/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_misc_navbar_navbar_component__ = __webpack_require__("./src/app/components/misc/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_misc_signup_signup_component__ = __webpack_require__("./src/app/components/misc/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_users_service__ = __webpack_require__("./src/app/shared/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_phone_phone_create_phone_create_component__ = __webpack_require__("./src/app/components/phone/phone-create/phone-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_phone_phone_base_phone_base_component__ = __webpack_require__("./src/app/components/phone/phone-base/phone-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_boxes_boxes_list_boxes_list_component__ = __webpack_require__("./src/app/components/boxes/boxes-list/boxes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_boxes_boxes_base_boxes_base_component__ = __webpack_require__("./src/app/components/boxes/boxes-base/boxes-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_boxes_boxes_create_boxes_create_component__ = __webpack_require__("./src/app/components/boxes/boxes-create/boxes-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_boxes_box_item_box_item_component__ = __webpack_require__("./src/app/components/boxes/box-item/box-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_phone_phone_list_phone_list_component__["a" /* PhoneListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_phone_phone_item_phone_item_component__["a" /* PhoneItemComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_misc_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_misc_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_misc_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_phone_phone_create_phone_create_component__["a" /* PhoneCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_phone_phone_base_phone_base_component__["a" /* PhoneBaseComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_boxes_boxes_list_boxes_list_component__["a" /* BoxesListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_boxes_boxes_base_boxes_base_component__["a" /* BoxesBaseComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_boxes_boxes_create_boxes_create_component__["a" /* BoxesCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_boxes_box_item_box_item_component__["a" /* BoxItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_routes__["a" /* routes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__shared_services_phones_service__["a" /* PhonesService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */],
                __WEBPACK_IMPORTED_MODULE_4__shared_resolvers_phone_details_resolver_guard__["a" /* PhoneDetailsResolverGuard */],
                __WEBPACK_IMPORTED_MODULE_0__shared_resolvers_box_details_resolver_guard__["a" /* BoxDetailsResolverGuard */],
                __WEBPACK_IMPORTED_MODULE_3__shared_guards_can_leave_phone_create_guard__["a" /* CanLeavePhoneCreateGuard */],
                __WEBPACK_IMPORTED_MODULE_1__shared_services_boxes_service__["a" /* BoxesService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__shared_services_global_error_handler_service__["a" /* GlobalErrorHandlerService */]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guards_can_leave_phone_create_guard__ = __webpack_require__("./src/app/shared/guards/can-leave-phone-create.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_resolvers_box_details_resolver_guard__ = __webpack_require__("./src/app/shared/resolvers/box-details-resolver.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_guards_is_authenticated_guard__ = __webpack_require__("./src/app/shared/guards/is-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_misc_signup_signup_component__ = __webpack_require__("./src/app/components/misc/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_misc_login_login_component__ = __webpack_require__("./src/app/components/misc/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_boxes_boxes_list_boxes_list_component__ = __webpack_require__("./src/app/components/boxes/boxes-list/boxes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_boxes_boxes_base_boxes_base_component__ = __webpack_require__("./src/app/components/boxes/boxes-base/boxes-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_boxes_boxes_create_boxes_create_component__ = __webpack_require__("./src/app/components/boxes/boxes-create/boxes-create.component.ts");








var routes = [
    { path: '', redirectTo: 'boxes', pathMatch: 'full' },
    { path: 'boxes', canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__components_boxes_boxes_list_boxes_list_component__["a" /* BoxesListComponent */] },
    {
        path: 'boxes',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__components_boxes_boxes_base_boxes_base_component__["a" /* BoxesBaseComponent */],
        children: [
            {
                path: 'new',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guards_can_leave_phone_create_guard__["a" /* CanLeavePhoneCreateGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_7__components_boxes_boxes_create_boxes_create_component__["a" /* BoxesCreateComponent */]
            },
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
                resolve: {
                    box: __WEBPACK_IMPORTED_MODULE_1__shared_resolvers_box_details_resolver_guard__["a" /* BoxDetailsResolverGuard */]
                },
                component: __WEBPACK_IMPORTED_MODULE_7__components_boxes_boxes_create_boxes_create_component__["a" /* BoxesCreateComponent */]
            }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_misc_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__components_misc_signup_signup_component__["a" /* SignupComponent */] },
];


/***/ }),

/***/ "./src/app/components/boxes/box-item/box-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/boxes/box-item/box-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  box-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/boxes/box-item/box-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxItemComponent = /** @class */ (function () {
    function BoxItemComponent() {
    }
    BoxItemComponent.prototype.ngOnInit = function () {
    };
    BoxItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-box-item',
            template: __webpack_require__("./src/app/components/boxes/box-item/box-item.component.html"),
            styles: [__webpack_require__("./src/app/components/boxes/box-item/box-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoxItemComponent);
    return BoxItemComponent;
}());



/***/ }),

/***/ "./src/app/components/boxes/boxes-base/boxes-base.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/boxes']\">\n  <i class=\"fa fa-arrow-left\"></i>\n</a>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/boxes/boxes-base/boxes-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BoxesBaseComponent = /** @class */ (function () {
    function BoxesBaseComponent() {
    }
    BoxesBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-boxes-base',
            template: __webpack_require__("./src/app/components/boxes/boxes-base/boxes-base.component.html"),
        })
    ], BoxesBaseComponent);
    return BoxesBaseComponent;
}());



/***/ }),

/***/ "./src/app/components/boxes/boxes-create/boxes-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/boxes/boxes-create/boxes-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n    <div *ngIf=\"editBox\">\n      <img src=\"{{box.image}}\" alt=\"\">\n    </div>\n\n    <form (ngSubmit)=\"onSubmitBoxes(boxForm)\" #boxForm=\"ngForm\">\n      <div class=\"form-group\" [class.has-error]=\"name.errors && name.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-fire\"></i>\n          </span>\n          <input type=\"text\" name=\"brand\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"box.name\" #name=\"ngModel\" required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"name.errors && name.touched\">\n          <ul>\n            <li *ngIf=\"name.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"address.errors && address.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"Address\" [(ngModel)]=\"box.address\" #address=\"ngModel\" required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"address.errors && address.touched\">\n          <ul>\n            <li *ngIf=\"address.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"contact.errors && contact.touched\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"fa fa-tag\"></i>\n            </span>\n            <input type=\"text\" name=\"contact\" class=\"form-control\" placeholder=\"Contact\" [(ngModel)]=\"box.contact\" #contact=\"ngModel\" required>\n          </div>\n          <label class=\"control-label\" *ngIf=\"contact.errors && contact.touched\">\n            <ul>\n              <li *ngIf=\"contact.errors.required\">Required</li>\n            </ul>\n          </label>\n        </div>\n\n      <!-- <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"specs\" class=\"form-control\" placeholder=\"Spec\" #spec>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"addSpec(spec)\"><i class=\"fa fa-plus\"></i></button>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngFor=\"let spec of phone.specs\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"spec\" class=\"form-control\" placeholder=\"Spec\" [value]=\"spec\" disabled>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"removeSpec(spec)\">\n              <i class=\"fa fa-minus\"></i>\n            </button>\n          </span>\n        </div>\n      </div> -->\n\n      <div *ngIf=\"!editBox\" class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-picture\"></i>\n          </span>\n          <input type=\"file\" name=\"name\" class=\"form-control\" #imageFile>\n        </div>\n      </div>\n\n      <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n        <label class=\"control-label\">\n          {{ apiError }}\n        </label>\n      </div>\n\n      <div class=\"form-actions\">\n        <button *ngIf=\"!editBox; else editBlock\" type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!boxForm.valid\">Add Box</button>\n        <ng-template #editBlock>\n            <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!boxForm.valid\">Edit Box</button>\n            <button (click)=\"onDeleteBox()\" type=\"button\" class=\"btn btn-block btn-danger\">Delete Box</button>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/boxes/boxes-create/boxes-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_boxes_service__ = __webpack_require__("./src/app/shared/services/boxes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_box_model__ = __webpack_require__("./src/app/shared/model/box.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoxesCreateComponent = /** @class */ (function () {
    function BoxesCreateComponent(router, routes, boxService) {
        this.router = router;
        this.routes = routes;
        this.boxService = boxService;
        this.box = new __WEBPACK_IMPORTED_MODULE_1__shared_model_box_model__["a" /* Box */]();
    }
    BoxesCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes
            .data
            .subscribe(function (data) {
            console.log(data);
            if (data['box']) {
                _this.box.name = data['box'].name;
                _this.box.id = data['box'].id;
                _this.box.contact = data['box'].contact;
                _this.box.address = data['box'].address;
                _this.box.reviews = data['box'].reviews;
                _this.box.image = data['box'].image;
                _this.editBox = true;
            }
        });
    };
    BoxesCreateComponent.prototype.addReview = function (reviews) {
        if (reviews.value) {
            this.box.reviews.push(reviews.value);
            reviews.value = '';
        }
    };
    BoxesCreateComponent.prototype.removeReviews = function (reviews) {
        this.box.reviews = this.box.reviews.filter(function (s) { return s !== reviews; });
    };
    BoxesCreateComponent.prototype.onDeleteBox = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.boxService.delete(this.box.id)
                .subscribe(function () {
                _this.router.navigate(['/boxes']);
            });
        }
    };
    BoxesCreateComponent.prototype.onSubmitBoxes = function (boxForm) {
        var _this = this;
        if (this.editBox) {
            this.boxService.edit(this.box)
                .subscribe(function (box) {
                boxForm.reset();
                _this.router.navigate(['/boxes']);
            }, function (error) {
                _this.apiError = error;
            });
        }
        else {
            var imageFile = this.imageFile.nativeElement;
            if (imageFile.files && imageFile.files[0]) {
                this.box.image = imageFile.files[0];
            }
            this.boxService.create(this.box)
                .subscribe(function (box) {
                boxForm.reset();
                _this.router.navigate(['/boxes']);
            }, function (error) {
                _this.apiError = error;
            });
        }
    };
    BoxesCreateComponent.prototype.canLeaveTheComponent = function () {
        if (this.boxForm.dirty) {
            return window.confirm("\n        Unsaved changes.\n        Are you sure you want to leave?\n    ");
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('imageFile'),
        __metadata("design:type", Object)
    ], BoxesCreateComponent.prototype, "imageFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('boxForm'),
        __metadata("design:type", Object)
    ], BoxesCreateComponent.prototype, "boxForm", void 0);
    BoxesCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-boxes-create',
            template: __webpack_require__("./src/app/components/boxes/boxes-create/boxes-create.component.html"),
            styles: [__webpack_require__("./src/app/components/boxes/boxes-create/boxes-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_boxes_service__["a" /* BoxesService */]])
    ], BoxesCreateComponent);
    return BoxesCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/boxes/boxes-list/boxes-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/boxes/boxes-list/boxes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let box of boxes\">\n    <div *ngIf=\"box.image\">\n      <img src=\"{{box.image}}\" alt=\"\" height=\"100\">\n    </div>\n    {{box.name}}<br>\n    {{box.address}}<br>\n    <a [routerLink]=\"['/boxes', box.id]\">Edit</a>\n    <hr>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/boxes/boxes-list/boxes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_boxes_service__ = __webpack_require__("./src/app/shared/services/boxes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxesListComponent = /** @class */ (function () {
    function BoxesListComponent(boxesService) {
        this.boxesService = boxesService;
        this.boxes = [];
    }
    BoxesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boxesService.list().subscribe(function (data) {
            _this.boxes = data;
        });
    };
    BoxesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-boxes-list',
            template: __webpack_require__("./src/app/components/boxes/boxes-list/boxes-list.component.html"),
            styles: [__webpack_require__("./src/app/components/boxes/boxes-list/boxes-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_boxes_service__["a" /* BoxesService */]])
    ], BoxesListComponent);
    return BoxesListComponent;
}());



/***/ }),

/***/ "./src/app/components/misc/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n\n        <form (ngSubmit)=\"onSubmitLogin(loginForm)\" #loginForm=\"ngForm\">\n          <div class=\"form-group\" [class.has-error]=\"email.errors && email.touched\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n            </div>\n            <label class=\"control-label\" *ngIf=\"email.errors && email.touched\">\n              <ul>\n                <li *ngIf=\"email.errors.required\">Required</li>\n                <li *ngIf=\"email.errors.email\">Invalid email format</li>\n              </ul>\n            </label>\n          </div>\n\n          <div class=\"form-group\" [class.has-error]=\"password.errors && password.touched\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-lock\"></i>\n              </span>\n              <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n            </div>\n            <label class=\"control-label\" *ngIf=\"password.errors && password.touched\">\n              <ul>\n                <li *ngIf=\"password.errors.required\">Required</li>\n              </ul>\n            </label>\n          </div>\n\n          <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n            <label class=\"control-label\">\n              {{ apiError }}\n            </label>\n          </div>\n\n          <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n          </div>\n        </form>\n  </div>\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n    <hr>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading text-center\">\n        Dont't have an account?\n        <a [routerLink]=\"['/signup']\">Sign up </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/misc/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_user_model__ = __webpack_require__("./src/app/shared/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_model_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmitLogin = function (loginForm) {
        var _this = this;
        this.sessionService.authenticate(this.user).subscribe(function (user) {
            loginForm.reset();
            _this.router.navigate(['/boxes']);
        }, function (error) {
            _this.apiError = error.message;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/misc/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/misc/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/misc/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-brand * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.navbar-brand img {\n    max-width: 20px;\n    width: 100%;\n}\n\n.logo {\n    width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/misc/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    \n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-navbar-collapse\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\"></span><!-- Toggle navigation antes de cierre span  -->\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n        <img class= logo alt=\"Logo\" src=\"./assets/img/vector-retro-vespa.svg\">\n        <span>Moto Box</span>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"main-navbar-collapse\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"user\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/boxes']\">Boxes\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li>\n            <a [routerLink]=\"['/boxes/new']\">Create\n            </a>\n          </li>\n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!user\">\n          <a [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"user\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ user.email }}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a (click)=\"onClickLogout()\">Logout</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/misc/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sessionService.getUser();
        this.userSubscription = this.sessionService.onUserChanges()
            .subscribe(function (user) { return _this.user = user; });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    NavbarComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.sessionService.logout()
            .subscribe(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/misc/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/misc/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/misc/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/misc/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n\n    <form (ngSubmit)=\"onSubmitSignup(signupForm)\" #signupForm=\"ngForm\">\n      <div class=\"form-group\" [class.has-error]=\"email.errors && email.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-user\"></i>\n          </span>\n          <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required\n            email>\n        </div>\n        <label class=\"control-label\" *ngIf=\"email.errors && email.touched\">\n          <ul>\n            <li *ngIf=\"email.errors.required\">Required</li>\n            <li *ngIf=\"email.errors.email\">Invalid email format</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"password.errors && password.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-lock\"></i>\n          </span>\n          <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\" #password=\"ngModel\"\n            required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"password.errors && password.touched\">\n          <ul>\n            <li *ngIf=\"password.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n        <label class=\"control-label\">\n          {{ apiError }}\n        </label>\n      </div>\n      \n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!signupForm.valid\">Sign up!</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n    <hr>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading text-center\">\n        All ready have an account?\n        <a [routerLink]=\"['/login']\">Sign in</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/misc/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_users_service__ = __webpack_require__("./src/app/shared/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_user_model__ = __webpack_require__("./src/app/shared/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_model_user_model__["a" /* User */]();
    }
    SignupComponent.prototype.onSubmitSignup = function (signupForm) {
        var _this = this;
        this.usersService.create(this.user).subscribe(function (user) {
            signupForm.reset();
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.apiError = error.message;
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/misc/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/misc/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_users_service__["a" /* UsersService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/phone/phone-base/phone-base.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/phones']\">\n  <i class=\"fa fa-arrow-left\"></i>\n</a>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/phone/phone-base/phone-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneBaseComponent = /** @class */ (function () {
    function PhoneBaseComponent() {
    }
    PhoneBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-phone-base',
            template: __webpack_require__("./src/app/components/phone/phone-base/phone-base.component.html")
        })
    ], PhoneBaseComponent);
    return PhoneBaseComponent;
}());



/***/ }),

/***/ "./src/app/components/phone/phone-create/phone-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/phone/phone-create/phone-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n\n    <form (ngSubmit)=\"onSubmitPhone(phoneForm)\" #phoneForm=\"ngForm\">\n      <div class=\"form-group\" [class.has-error]=\"brand.errors && brand.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-fire\"></i>\n          </span>\n          <input type=\"text\" name=\"brand\" class=\"form-control\" placeholder=\"Brand\" [(ngModel)]=\"phone.brand\" #brand=\"ngModel\" required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"brand.errors && brand.touched\">\n          <ul>\n            <li *ngIf=\"brand.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"name.errors && name.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"phone.name\" #name=\"ngModel\" required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"name.errors && name.touched\">\n          <ul>\n            <li *ngIf=\"name.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"specs\" class=\"form-control\" placeholder=\"Spec\" #spec>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"addSpec(spec)\"><i class=\"fa fa-plus\"></i></button>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngFor=\"let spec of phone.specs\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"spec\" class=\"form-control\" placeholder=\"Spec\" [value]=\"spec\" disabled>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"removeSpec(spec)\">\n              <i class=\"fa fa-minus\"></i>\n            </button>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-picture\"></i>\n          </span>\n          <input type=\"file\" name=\"name\" class=\"form-control\" #imageFile>\n        </div>\n      </div>\n\n      <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n        <label class=\"control-label\">\n          {{ apiError }}\n        </label>\n      </div>\n\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!phoneForm.valid\">Add Phone</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/phone/phone-create/phone-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_phones_service__ = __webpack_require__("./src/app/shared/services/phones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_phone_model__ = __webpack_require__("./src/app/shared/model/phone.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneCreateComponent = /** @class */ (function () {
    function PhoneCreateComponent(router, phonesService) {
        this.router = router;
        this.phonesService = phonesService;
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__shared_model_phone_model__["a" /* Phone */]();
    }
    PhoneCreateComponent.prototype.addSpec = function (spec) {
        if (spec.value) {
            this.phone.specs.push(spec.value);
            spec.value = '';
        }
    };
    PhoneCreateComponent.prototype.removeSpec = function (spec) {
        this.phone.specs = this.phone.specs.filter(function (s) { return s !== spec; });
    };
    PhoneCreateComponent.prototype.onSubmitPhone = function (phoneForm) {
        var _this = this;
        var imageFile = this.imageFile.nativeElement;
        if (imageFile.files && imageFile.files[0]) {
            this.phone.image = imageFile.files[0];
            this.phonesService.create(this.phone)
                .subscribe(function (phone) {
                phoneForm.reset();
                _this.router.navigate(['/phones']);
            }, function (error) {
                _this.apiError = error;
            });
        }
    };
    PhoneCreateComponent.prototype.canLeaveTheComponent = function () {
        if (this.phoneForm.dirty) {
            return window.confirm("\n        Unsaved changes.\n        Are you sure you want to leave?\n    ");
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('imageFile'),
        __metadata("design:type", Object)
    ], PhoneCreateComponent.prototype, "imageFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('phoneForm'),
        __metadata("design:type", Object)
    ], PhoneCreateComponent.prototype, "phoneForm", void 0);
    PhoneCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-phone-create',
            template: __webpack_require__("./src/app/components/phone/phone-create/phone-create.component.html"),
            styles: [__webpack_require__("./src/app/components/phone/phone-create/phone-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_phones_service__["a" /* PhonesService */]])
    ], PhoneCreateComponent);
    return PhoneCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/phone/phone-item/phone-item.component.css":
/***/ (function(module, exports) {

module.exports = ".phone-info, .phone-thumbnail {\n    display: inline-block;\n    vertical-align: top;\n    margin-right: 20px;\n}"

/***/ }),

/***/ "./src/app/components/phone/phone-item/phone-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"phone\">\n  <div class=\"phone-thumbnail\">\n    <img height=\"300\" [src]=\"phone.image\" />\n  </div>\n\n  <div class=\"phone-info\">\n    <h2> {{ phone.name }}</h2>\n    <h3> {{ phone.brand }} </h3>\n\n    <div *ngIf=\"phone.specs.length\">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor=\"let spec of phone.specs\"> {{ spec }} </li>\n      </ul>\n    </div>\n    <button class=\"btn btn-danger\" (click)=\"onClickDelete()\">Delete</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/phone/phone-item/phone-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_phones_service__ = __webpack_require__("./src/app/shared/services/phones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_phone_model__ = __webpack_require__("./src/app/shared/model/phone.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneItemComponent = /** @class */ (function () {
    function PhoneItemComponent(router, routes, phonesService) {
        this.router = router;
        this.routes = routes;
        this.phonesService = phonesService;
        this.phone = new __WEBPACK_IMPORTED_MODULE_2__shared_model_phone_model__["a" /* Phone */]();
    }
    PhoneItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes
            .data
            .subscribe(function (data) {
            _this.phone = data['phone'];
        });
    };
    PhoneItemComponent.prototype.onClickDelete = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.phonesService.delete(this.phone.id)
                .subscribe(function () {
                _this.router.navigate(['/phones']);
            });
        }
    };
    PhoneItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-phone-item',
            template: __webpack_require__("./src/app/components/phone/phone-item/phone-item.component.html"),
            styles: [__webpack_require__("./src/app/components/phone/phone-item/phone-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_phones_service__["a" /* PhonesService */]])
    ], PhoneItemComponent);
    return PhoneItemComponent;
}());



/***/ }),

/***/ "./src/app/components/phone/phone-list/phone-list.component.css":
/***/ (function(module, exports) {

module.exports = ".phone {\n    margin: 10px;\n    text-align: center;\n}\n\n.phone img {\n    height: 300px;\n}"

/***/ }),

/***/ "./src/app/components/phone/phone-list/phone-list.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/phones/new']\">\n  <i class=\"fa fa-plus\"></i>\n</a>\n<div class=\"row\">\n  <div *ngFor=\"let phone of phones\" class=\"phone col-xs-12 col-sm-3\">\n    <img [src]=\"phone.image\" />\n    <h3> {{ phone.name }} </h3>\n    <p> {{ phone.brand }} </p>\n    <a [routerLink]=\"['/phones', phone.id]\"> View Details </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/phone/phone-list/phone-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_phones_service__ = __webpack_require__("./src/app/shared/services/phones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneListComponent = /** @class */ (function () {
    function PhoneListComponent(phonesService) {
        this.phonesService = phonesService;
        this.phones = [];
    }
    PhoneListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phonesService.list()
            .subscribe(function (phones) { return _this.phones = phones; });
    };
    PhoneListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-phone-list',
            template: __webpack_require__("./src/app/components/phone/phone-list/phone-list.component.html"),
            styles: [__webpack_require__("./src/app/components/phone/phone-list/phone-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_phones_service__["a" /* PhonesService */]])
    ], PhoneListComponent);
    return PhoneListComponent;
}());



/***/ }),

/***/ "./src/app/rxjs.operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// Statics

// Operators








/***/ }),

/***/ "./src/app/shared/guards/can-leave-phone-create.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanLeavePhoneCreateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanLeavePhoneCreateGuard = /** @class */ (function () {
    function CanLeavePhoneCreateGuard() {
    }
    CanLeavePhoneCreateGuard.prototype.canDeactivate = function (component) {
        return component.canLeaveTheComponent();
    };
    CanLeavePhoneCreateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CanLeavePhoneCreateGuard);
    return CanLeavePhoneCreateGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/is-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    IsAuthenticatedGuard.prototype.canActivate = function (next, state) {
        var isAuthenticated = this.sessionService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return isAuthenticated;
    };
    IsAuthenticatedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/shared/model/box.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
var Box = /** @class */ (function () {
    function Box() {
        this.reviews = new Array();
    }
    Box.prototype.asFormData = function () {
        var data = new FormData();
        data.append('address', this.address);
        data.append('name', this.name);
        data.append('contact', this.contact);
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var reviews = _a[_i];
            data.append('reviews', reviews);
        }
        data.append('image', this.image);
        return data;
    };
    return Box;
}());



/***/ }),

/***/ "./src/app/shared/model/phone.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phone; });
var Phone = /** @class */ (function () {
    function Phone() {
        this.specs = new Array();
    }
    Phone.prototype.asFormData = function () {
        var data = new FormData();
        data.append('brand', this.brand);
        data.append('name', this.name);
        for (var _i = 0, _a = this.specs; _i < _a.length; _i++) {
            var spec = _a[_i];
            data.append('specs', spec);
        }
        data.append('image', this.image);
        return data;
    };
    return Phone;
}());



/***/ }),

/***/ "./src/app/shared/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/resolvers/box-details-resolver.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxDetailsResolverGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_boxes_service__ = __webpack_require__("./src/app/shared/services/boxes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoxDetailsResolverGuard = /** @class */ (function () {
    function BoxDetailsResolverGuard(router, boxesService) {
        this.router = router;
        this.boxesService = boxesService;
    }
    BoxDetailsResolverGuard.prototype.resolve = function (route) {
        var _this = this;
        return this.boxesService
            .get(route.params['id'])
            .catch(function (error) {
            _this.router.navigate(['/boxes']);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(error);
        });
    };
    BoxDetailsResolverGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_boxes_service__["a" /* BoxesService */]])
    ], BoxDetailsResolverGuard);
    return BoxDetailsResolverGuard;
}());



/***/ }),

/***/ "./src/app/shared/resolvers/phone-details-resolver.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDetailsResolverGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_phones_service__ = __webpack_require__("./src/app/shared/services/phones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneDetailsResolverGuard = /** @class */ (function () {
    function PhoneDetailsResolverGuard(router, phonesService) {
        this.router = router;
        this.phonesService = phonesService;
    }
    PhoneDetailsResolverGuard.prototype.resolve = function (route) {
        var _this = this;
        return this.phonesService
            .get(route.params['id'])
            .catch(function (error) {
            _this.router.navigate(['/phones']);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(error);
        });
    };
    PhoneDetailsResolverGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_phones_service__["a" /* PhonesService */]])
    ], PhoneDetailsResolverGuard);
    return PhoneDetailsResolverGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_API = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseApi;
    }
    ApiService.prototype.getBoxes = function () {
        return this.http.get(this.BASE_API + "/boxes");
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/base-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseApiService = /** @class */ (function () {
    function BaseApiService() {
    }
    BaseApiService_1 = BaseApiService;
    BaseApiService.prototype.handleError = function (error) {
        if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            console.error(this.constructor.name + " error: " + error);
        }
        var errorData = error.json();
        errorData.status = error.status;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].throw(errorData);
    };
    BaseApiService.BASE_API = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseApi;
    BaseApiService.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    BaseApiService.defaultOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: BaseApiService_1.defaultHeaders, withCredentials: true });
    BaseApiService = BaseApiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaseApiService);
    return BaseApiService;
    var BaseApiService_1;
}());



/***/ }),

/***/ "./src/app/shared/services/boxes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoxesService = /** @class */ (function (_super) {
    __extends(BoxesService, _super);
    function BoxesService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    BoxesService_1 = BoxesService;
    BoxesService.prototype.list = function () {
        var _this = this;
        return this.http.get(BoxesService_1.BOXES_API, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    BoxesService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(BoxesService_1.BOXES_API + "/" + id, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    BoxesService.prototype.create = function (box) {
        var _this = this;
        return this.http.post(BoxesService_1.BOXES_API, box.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    BoxesService.prototype.edit = function (box) {
        var _this = this;
        return this.http.put(BoxesService_1.BOXES_API + "/" + box.id, box.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    BoxesService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(BoxesService_1.BOXES_API + "/" + id, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    BoxesService.BOXES_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/boxes";
    BoxesService = BoxesService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], BoxesService);
    return BoxesService;
    var BoxesService_1;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));



/***/ }),

/***/ "./src/app/shared/services/global-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalErrorHandlerService = /** @class */ (function () {
    function GlobalErrorHandlerService(sessionService, injector) {
        this.sessionService = sessionService;
        this.injector = injector;
    }
    GlobalErrorHandlerService.prototype.handleError = function (error) {
        var _this = this;
        if (error.status === 403) {
            this.sessionService.logout()
                .subscribe(function () {
                _this.getRouterService().navigate(['/login']);
            });
        }
        throw error;
    };
    GlobalErrorHandlerService.prototype.getRouterService = function () {
        return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]);
    };
    GlobalErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injector */]])
    ], GlobalErrorHandlerService);
    return GlobalErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/shared/services/phones.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhonesService = /** @class */ (function (_super) {
    __extends(PhonesService, _super);
    function PhonesService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    PhonesService_1 = PhonesService;
    PhonesService.prototype.list = function () {
        var _this = this;
        return this.http.get(PhonesService_1.PHONES_API, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PhonesService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(PhonesService_1.PHONES_API + "/" + id, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PhonesService.prototype.create = function (phone) {
        var _this = this;
        return this.http.post(PhonesService_1.PHONES_API, phone.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PhonesService.prototype.edit = function (phone) {
        var _this = this;
        return this.http.put("PhonesService.PHONES_API/" + phone.id, phone.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PhonesService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(PhonesService_1.PHONES_API + "/" + id, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PhonesService.PHONES_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/phones";
    PhonesService = PhonesService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PhonesService);
    return PhonesService;
    var PhonesService_1;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));



/***/ }),

/***/ "./src/app/shared/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CURRENT_USER_KEY = 'currentUser';
var SessionService = /** @class */ (function (_super) {
    __extends(SessionService, _super);
    function SessionService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.userSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        _this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
        _this.notifyUserChanges();
        return _this;
    }
    SessionService_1 = SessionService;
    SessionService.prototype.authenticate = function (user) {
        var _this = this;
        return this.http.post(SessionService_1.SESSION_API, JSON.stringify(user), __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            return _this.doAuthentication(res.json());
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.delete(SessionService_1.SESSION_API, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            return _this.doLogout();
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    SessionService.prototype.isAuthenticated = function () {
        return this.user ? true : false;
    };
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    SessionService.prototype.onUserChanges = function () {
        return this.userSubject.asObservable();
    };
    SessionService.prototype.doAuthentication = function (user) {
        this.user = user;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
        this.notifyUserChanges();
        return this.user;
    };
    SessionService.prototype.doLogout = function () {
        this.user = null;
        localStorage.removeItem(CURRENT_USER_KEY);
        this.notifyUserChanges();
    };
    SessionService.prototype.notifyUserChanges = function () {
        this.userSubject.next(this.user);
    };
    SessionService.SESSION_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/session";
    SessionService = SessionService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SessionService);
    return SessionService;
    var SessionService_1;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));



/***/ }),

/***/ "./src/app/shared/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function (_super) {
    __extends(UsersService, _super);
    function UsersService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UsersService_1 = UsersService;
    UsersService.prototype.create = function (user) {
        var _this = this;
        return this.http.post(UsersService_1.USERS_API, JSON.stringify(user), __WEBPACK_IMPORTED_MODULE_1__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsersService.USERS_API = __WEBPACK_IMPORTED_MODULE_1__base_api_service__["a" /* BaseApiService */].BASE_API + "/users";
    UsersService = UsersService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], UsersService);
    return UsersService;
    var UsersService_1;
}(__WEBPACK_IMPORTED_MODULE_1__base_api_service__["a" /* BaseApiService */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseApi: 'https://motobox-api.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map