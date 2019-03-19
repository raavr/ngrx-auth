(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accounts/accounts.module": [
		"./src/app/accounts/accounts.module.ts",
		"accounts-accounts-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/services/auth.guard */ "./src/app/auth/services/auth.guard.ts");
/* harmony import */ var _core_components_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/not-found.component */ "./src/app/core/components/not-found.component.ts");





var routes = [
    {
        path: 'accounts',
        loadChildren: './accounts/accounts.module#AccountsModule',
        canActivate: [
            _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
        ],
    },
    { path: '**', component: _core_components_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\r\n  <app-sidenav [open]=\"showSidenav$ | async\" (closeSidenav)=\"closeSidenav()\">\r\n    <app-nav-item *ngIf=\"loggedIn$ | async\" (navigate)=\"closeSidenav()\" routerLink=\"/\" icon=\"home\" desc=\"Go to the home page\">\r\n      Home\r\n    </app-nav-item>\r\n    <app-nav-item *ngIf=\"loggedIn$ | async\" (navigate)=\"closeSidenav()\" routerLink=\"/accounts/profile\" icon=\"person\" desc=\"View my profile\">\r\n      Profile\r\n    </app-nav-item>\r\n    <app-nav-item *ngIf=\"(loggedIn$ | async) && (isAdmin$ | async)\" (navigate)=\"closeSidenav()\" routerLink=\"/accounts/browse\" icon=\"people\" desc=\"View all accounts\">\r\n      Accounts\r\n    </app-nav-item>\r\n    <app-nav-item *ngIf=\"!(loggedIn$ | async)\" (navigate)=\"closeSidenav()\" routerLink=\"/login\">\r\n      Sign In\r\n    </app-nav-item>\r\n    <app-nav-item *ngIf=\"loggedIn$ | async\" (navigate)=\"logout()\">\r\n      Sign Out\r\n    </app-nav-item>\r\n  </app-sidenav>\r\n  <app-toolbar (openSidenav)=\"openSidenav()\">\r\n    NgRx Auth App\r\n  </app-toolbar>\r\n  <div class=\"app__container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-page-backdrop *ngIf=\"showSidenav$ | async\" (backdropClick)=\"closeSidenav()\"></app-page-backdrop>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/reducers */ "./src/app/auth/reducers/index.ts");
/* harmony import */ var _navbar_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/reducers */ "./src/app/navbar/reducers/index.ts");
/* harmony import */ var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var _navbar_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/actions */ "./src/app/navbar/actions/index.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.loggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_reducers__WEBPACK_IMPORTED_MODULE_3__["getLoggedIn"]));
        this.isAdmin$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_reducers__WEBPACK_IMPORTED_MODULE_3__["isAdmin"]));
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_reducers__WEBPACK_IMPORTED_MODULE_3__["getUser"]));
        this.showSidenav$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_navbar_reducers__WEBPACK_IMPORTED_MODULE_4__["getShowSidenav"]));
    }
    AppComponent.prototype.closeSidenav = function () {
        this.store.dispatch(new _navbar_actions__WEBPACK_IMPORTED_MODULE_6__["NavbarActions"].CloseSidenav());
    };
    AppComponent.prototype.openSidenav = function () {
        this.store.dispatch(new _navbar_actions__WEBPACK_IMPORTED_MODULE_6__["NavbarActions"].OpenSidenav());
    };
    AppComponent.prototype.logout = function () {
        this.closeSidenav();
        this.store.dispatch(new _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]());
    };
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AutoLogin"]());
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT", function() { return ENDPOINT; });
var ENDPOINT = 'https://ngrx-auth-server.herokuapp.com';


/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/fesm5/effects.js");



var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppEffects);
    return AppEffects;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/router-store */ "../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "../node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/services/token.service */ "./src/app/auth/services/token.service.ts");
/* harmony import */ var _auth_services_jwt_options_factory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/services/jwt-options.factory */ "./src/app/auth/services/jwt-options.factory.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.module */ "./src/app/navbar/navbar.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
                    jwtOptionsProvider: {
                        provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"],
                        useFactory: _auth_services_jwt_options_factory__WEBPACK_IMPORTED_MODULE_15__["jwtOptionsFactory"],
                        deps: [_auth_services_token_service__WEBPACK_IMPORTED_MODULE_14__["TokenService"]]
                    }
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_5__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_7__["AppEffects"]]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_16__["NavbarModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_19__["HomeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/actions/auth.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/actions/auth.actions.ts ***!
  \**********************************************/
/*! exports provided: AuthActionTypes, Login, LoginSuccess, LoginFailure, LoginRedirect, AutoLogin, Logout, DecodeToken, DecodeTokenSuccess, TokenInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailure", function() { return LoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return LoginRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogin", function() { return AutoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeToken", function() { return DecodeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeTokenSuccess", function() { return DecodeTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInvalid", function() { return TokenInvalid; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Auth] Login";
    AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
    AuthActionTypes["LoginFailure"] = "[Auth] Login Failure";
    AuthActionTypes["LoginRedirect"] = "[Auth] Login Redirect";
    AuthActionTypes["AutoLogin"] = "[Auth] Auto Login";
    AuthActionTypes["Logout"] = "[Auth] Logout";
    AuthActionTypes["DecodeToken"] = "[Auth] Decode Token";
    AuthActionTypes["DecodeTokenSuccess"] = "[Auth] Decode Token Success";
    AuthActionTypes["TokenInvalid"] = "[Auth] Token Invalid";
})(AuthActionTypes || (AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return Login;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginSuccess;
    }
    return LoginSuccess;
}());

var LoginFailure = /** @class */ (function () {
    function LoginFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginFailure;
    }
    return LoginFailure;
}());

var LoginRedirect = /** @class */ (function () {
    function LoginRedirect() {
        this.type = AuthActionTypes.LoginRedirect;
    }
    return LoginRedirect;
}());

var AutoLogin = /** @class */ (function () {
    function AutoLogin() {
        this.type = AuthActionTypes.AutoLogin;
    }
    return AutoLogin;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.Logout;
    }
    return Logout;
}());

var DecodeToken = /** @class */ (function () {
    function DecodeToken(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.DecodeToken;
    }
    return DecodeToken;
}());

var DecodeTokenSuccess = /** @class */ (function () {
    function DecodeTokenSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.DecodeTokenSuccess;
    }
    return DecodeTokenSuccess;
}());

var TokenInvalid = /** @class */ (function () {
    function TokenInvalid() {
        this.type = AuthActionTypes.TokenInvalid;
    }
    return TokenInvalid;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/login.component */ "./src/app/auth/containers/login.component.ts");




var routes = [
    { path: 'login', component: _containers_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _containers_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/login.component */ "./src/app/auth/containers/login.component.ts");
/* harmony import */ var _components_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-form.component */ "./src/app/auth/components/login-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/auth.effects */ "./src/app/auth/effects/auth.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers */ "./src/app/auth/reducers/index.ts");












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _containers_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature('auth', _reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__["AuthEffects"]]),
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/auth/components/login-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Login</mat-card-title>\r\n  <div class=\"mat-spinner__form-wrapper\" *ngIf=\"_pending\">\r\n    <mat-spinner class=\"mat-spinner__form\" [diameter]=\"25\"></mat-spinner>\r\n  </div>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\r\n        </mat-form-field>\r\n      </p>\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-form-field>\r\n      </p>\r\n      <p *ngIf=\"errorMessage\" class=\"form__error\">\r\n        {{ errorMessage }}\r\n      </p>\r\n      <p class=\"form__btn\">\r\n        <button type=\"submit\" mat-button>Login</button>\r\n      </p>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/auth/components/login-form.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/auth/components/login-form.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  margin: 72px 0; }\n\n.mat-form-field {\n  width: 100%;\n  min-width: 300px; }\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center; }\n\n.mat-spinner__form {\n  display: inline-block; }\n\n.mat-spinner__form-wrapper {\n  text-align: center; }\n\n.form__error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red; }\n\n.form__btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL0Q6XFxBbmd1bGFyX3Byb2plY3RzXFxuZ1J4Q291bnRlclxcY2xpZW50L3NyY1xcYXBwXFxhdXRoXFxjb21wb25lbnRzXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCOztBQUVEOztFQUVFLGNBQWE7RUFDYix3QkFBdUIsRUFDeEI7O0FBR0M7RUFDRSxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBSUQ7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGFBQVk7RUFDWixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA3MnB4IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtc3Bpbm5lciB7XHJcbiAgJl9fZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmX19mb3JtLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICZfX2Vycm9yIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAmX19idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/login-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/components/login-form.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(fb) {
        this.fb = fb;
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.fb.group({
            email: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            password: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    Object.defineProperty(LoginFormComponent.prototype, "pending", {
        set: function (isPending) {
            isPending
                ? this.form.disable()
                : this.form.enable();
            this._pending = isPending;
        },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.submitForm.emit(this.form.value);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], LoginFormComponent.prototype, "pending", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginFormComponent.prototype, "errorMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "submitForm", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/auth/components/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/auth/components/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/constants/auth.constant.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/constants/auth.constant.ts ***!
  \*************************************************/
/*! exports provided: DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS", function() { return DOMAINS; });
var DOMAINS = {
    WHITE_LISTED: ['ngrx-auth-server.herokuapp.com'],
    BLACK_LISTED: [] //https://github.com/auth0/angular2-jwt#blacklistedroutes-array
};


/***/ }),

/***/ "./src/app/auth/containers/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/auth/containers/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29udGFpbmVycy9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/containers/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/containers/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/app/auth/reducers/index.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
        this.pending$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getLoginPending"]));
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getLoginError"]));
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function ($event) {
        this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["Login"]($event));
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: "\n    <app-login-form \n      [pending]=\"(pending$ | async)\"\n      [errorMessage]=\"(error$ | async)\"\n      (submitForm)=\"onSubmit($event)\"\n    >\n    </app-login-form>\n  ",
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/containers/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/effects/auth.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/effects/auth.effects.ts ***!
  \**********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/token.service */ "./src/app/auth/services/token.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "../node_modules/@auth0/angular-jwt/index.js");










var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authSerivce, tokenService, router, jwtHelper) {
        var _this = this;
        this.actions$ = actions$;
        this.authSerivce = authSerivce;
        this.tokenService = tokenService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (credentials) {
            return _this.authSerivce.login(credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) { return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginSuccess"](token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (_a) {
                var message = _a.error.message;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginFailure"](message));
            }));
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LoginSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_a) {
            var token = _a.token;
            return _this.tokenService.setToken(token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) { return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["DecodeToken"](token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigate(['/']); }));
        this.decodeToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].DecodeToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (_a) {
            var token = _a.token;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["iif"])(function () { return _this.jwtHelper.isTokenExpired(token); }, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TokenInvalid"]()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) { return _this.jwtHelper.decodeToken(token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
                var id = _a.id, name = _a.name, role = _a.role;
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["DecodeTokenSuccess"]({ id: id, name: name, role: role });
            })));
        }));
        this.autoLogin$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].AutoLogin), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return _this.tokenService.getToken(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) { return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["DecodeToken"]({ token: token }); }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.tokenService.removeToken(); }));
        this.loginRedirect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LoginRedirect, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].Logout, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].TokenInvalid), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigate(['/login']); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "decodeToken$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "autoLogin$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginRedirect$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/reducers/auth.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/reducers/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, reducer, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");


var initialState = {
    user: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].DecodeTokenSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: action.payload });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].Logout: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
var getUser = function (state) { return state.user; };


/***/ }),

/***/ "./src/app/auth/reducers/index.ts":
/*!****************************************!*\
  !*** ./src/app/auth/reducers/index.ts ***!
  \****************************************/
/*! exports provided: reducers, selectAuthState, selectAuthSessionState, getUser, getLoggedIn, isAdmin, selectLoginState, getLoginError, getLoginPending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthSessionState", function() { return selectAuthSessionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedIn", function() { return getLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoginState", function() { return selectLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginError", function() { return getLoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginPending", function() { return getLoginPending; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/auth/reducers/auth.reducer.ts");
/* harmony import */ var _login_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.reducer */ "./src/app/auth/reducers/login.reducer.ts");



var reducers = {
    session: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    login: _login_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var selectAuthSessionState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthState, function (state) { return state.session; });
var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthSessionState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getUser"]);
var getLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, function (user) { return !!user; });
var isAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, function (user) { return user && user.role === 'admin'; });
var selectLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthState, function (state) { return state.login; });
var getLoginError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, _login_reducer__WEBPACK_IMPORTED_MODULE_2__["getError"]);
var getLoginPending = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, _login_reducer__WEBPACK_IMPORTED_MODULE_2__["getPending"]);


/***/ }),

/***/ "./src/app/auth/reducers/login.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/auth/reducers/login.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer, getPending, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPending", function() { return getPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");


var initialState = {
    pending: false,
    error: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].Login: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pending: true, error: null });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pending: false, error: null });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginFailure: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pending: false, error: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getPending = function (state) { return state.pending; };
var getError = function (state) { return state.error; };


/***/ }),

/***/ "./src/app/auth/services/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/services/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./src/app/auth/reducers/index.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getLoggedIn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginRedirect"]());
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (credentials) {
        return this.http.post(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"] + "/login", credentials);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/services/jwt-options.factory.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/services/jwt-options.factory.ts ***!
  \******************************************************/
/*! exports provided: jwtOptionsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony import */ var _constants_auth_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/auth.constant */ "./src/app/auth/constants/auth.constant.ts");

function jwtOptionsFactory(tokenService) {
    return {
        tokenGetter: function () {
            return tokenService.getToken();
        },
        whitelistedDomains: _constants_auth_constant__WEBPACK_IMPORTED_MODULE_0__["DOMAINS"].WHITE_LISTED,
        blacklistedRoutes: _constants_auth_constant__WEBPACK_IMPORTED_MODULE_0__["DOMAINS"].BLACK_LISTED
    };
}


/***/ }),

/***/ "./src/app/auth/services/token.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/services/token.service.ts ***!
  \************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.TOKEN_NAME = 'access_token';
    }
    TokenService.prototype.getToken = function () {
        return localStorage.getItem(this.TOKEN_NAME);
    };
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem(this.TOKEN_NAME, token);
    };
    TokenService.prototype.removeToken = function () {
        localStorage.removeItem(this.TOKEN_NAME);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/core/components/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <mat-card>\n      <mat-card-title>404. Not Found</mat-card-title>\n      <mat-card-content>\n        <p>Ooops! Nothing here...</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" routerLink=\"/\">Go Home</button>\n      </mat-card-actions>\n    </mat-card>\n  ",
            styles: ["\n      :host {\n        text-align: center;\n      }\n    "]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page-backdrop.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/page-backdrop.component.ts ***!
  \************************************************************/
/*! exports provided: PageBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBackdropComponent", function() { return PageBackdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var PageBackdropComponent = /** @class */ (function () {
    function PageBackdropComponent() {
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageBackdropComponent.prototype, "backdropClick", void 0);
    PageBackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-backdrop',
            template: "\n    <div class=\"backdrop\" (click)=\"backdropClick.emit()\"></div>\n  ",
            styles: ["\n    .backdrop {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #000000;\n      opacity: 0.2;\n    }\n  "]
        })
    ], PageBackdropComponent);
    return PageBackdropComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page-container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/components/page-container.component.ts ***!
  \*************************************************************/
/*! exports provided: PageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContainerComponent", function() { return PageContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var PageContainerComponent = /** @class */ (function () {
    function PageContainerComponent() {
    }
    PageContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-container',
            template: "\n    <div class=\"page__container\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n    .page__container {\n      padding: 15px;\n      display: flex;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n  "]
        })
    ], PageContainerComponent);
    return PageContainerComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/page-header.component.ts ***!
  \**********************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageHeaderComponent.prototype, "subtitle", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: "\n    <mat-card>\n      <mat-card-title>{{title}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"subtitle\">{{subtitle}}</mat-card-subtitle>\n    </mat-card>\n  ",
            styles: ["\n    :host {\n      text-align: center;\n    }\n  "]
        })
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-header.component */ "./src/app/core/components/page-header.component.ts");
/* harmony import */ var _components_page_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-container.component */ "./src/app/core/components/page-container.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found.component */ "./src/app/core/components/not-found.component.ts");
/* harmony import */ var _components_page_backdrop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-backdrop.component */ "./src/app/core/components/page-backdrop.component.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_page_container_component__WEBPACK_IMPORTED_MODULE_4__["PageContainerComponent"],
                _components_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"],
                _components_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _components_page_backdrop_component__WEBPACK_IMPORTED_MODULE_7__["PageBackdropComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            exports: [
                _components_page_container_component__WEBPACK_IMPORTED_MODULE_4__["PageContainerComponent"],
                _components_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"],
                _components_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _components_page_backdrop_component__WEBPACK_IMPORTED_MODULE_7__["PageBackdropComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");




var routes = [{
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/reducers */ "./src/app/auth/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
        this.authUser$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_reducers__WEBPACK_IMPORTED_MODULE_2__["getUser"]));
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: "\n    <app-page-header title=\"Hi, {{(authUser$ | async).name}}\" subtitle=\"What do you want to do today?\"></app-page-header>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navbar/actions/index.ts":
/*!*****************************************!*\
  !*** ./src/app/navbar/actions/index.ts ***!
  \*****************************************/
/*! exports provided: NavbarActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.actions */ "./src/app/navbar/actions/navbar.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "NavbarActions", function() { return _navbar_actions__WEBPACK_IMPORTED_MODULE_0__; });




/***/ }),

/***/ "./src/app/navbar/actions/navbar.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/navbar/actions/navbar.actions.ts ***!
  \**************************************************/
/*! exports provided: NavbarActionTypes, OpenSidenav, CloseSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarActionTypes", function() { return NavbarActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSidenav", function() { return OpenSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSidenav", function() { return CloseSidenav; });
var NavbarActionTypes;
(function (NavbarActionTypes) {
    NavbarActionTypes["OpenSidenav"] = "[Navbar] Open Sidenav";
    NavbarActionTypes["CloseSidenav"] = "[Navbar] Close Sidenav";
})(NavbarActionTypes || (NavbarActionTypes = {}));
var OpenSidenav = /** @class */ (function () {
    function OpenSidenav() {
        this.type = NavbarActionTypes.OpenSidenav;
    }
    return OpenSidenav;
}());

var CloseSidenav = /** @class */ (function () {
    function CloseSidenav() {
        this.type = NavbarActionTypes.CloseSidenav;
    }
    return CloseSidenav;
}());



/***/ }),

/***/ "./src/app/navbar/components/nav-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navbar/components/nav-item.component.ts ***!
  \*********************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.icon = '';
        this.desc = '';
        this.routerLink = '/';
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavItemComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavItemComponent.prototype, "desc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavItemComponent.prototype, "routerLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavItemComponent.prototype, "navigate", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-item',
            template: "\n    <a mat-list-item [routerLink]=\"routerLink\" (click)=\"navigate.emit()\">\n      <mat-icon mat-list-icon>{{ icon }}</mat-icon>\n      <span mat-line>\n        <ng-content></ng-content>\n      </span>\n      <span mat-line class=\"secondary\">{{ desc }}</span>\n    </a>\n  "
        })
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/navbar/components/sidenav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/navbar/components/sidenav.component.ts ***!
  \********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.open = false;
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "closeSidenav", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: "\n    <mat-sidenav #sidenav [opened]=\"open\" (keydown.escape)=\"sidenav.close(); closeSidenav.emit()\" disableClose>\n      <mat-nav-list>\n        <ng-content></ng-content>\n      </mat-nav-list>\n    </mat-sidenav>\n  ",
            styles: ["\n      mat-sidenav {\n        width: 300px;\n      }\n  "]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/navbar/components/toolbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/navbar/components/toolbar.component.ts ***!
  \********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.openSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "openSidenav", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: "\n    <mat-toolbar color=\"primary\">\n      <button mat-icon-button (click)=\"openSidenav.emit()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <ng-content></ng-content>\n    </mat-toolbar>\n  "
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidenav.component */ "./src/app/navbar/components/sidenav.component.ts");
/* harmony import */ var _components_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toolbar.component */ "./src/app/navbar/components/toolbar.component.ts");
/* harmony import */ var _components_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-item.component */ "./src/app/navbar/components/nav-item.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "./src/app/navbar/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");










var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
                _components_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                _components_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('navbar', _reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
            ],
            exports: [
                _components_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
                _components_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                _components_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/navbar/reducers/index.ts":
/*!******************************************!*\
  !*** ./src/app/navbar/reducers/index.ts ***!
  \******************************************/
/*! exports provided: reducers, getNavbarState, getSidebar, getShowSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavbarState", function() { return getNavbarState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidebar", function() { return getSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowSidenav", function() { return getShowSidenav; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _navbar_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.reducers */ "./src/app/navbar/reducers/navbar.reducers.ts");


var reducers = {
    sidenav: _navbar_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
var getNavbarState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('navbar');
var getSidebar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNavbarState, function (state) { return state.sidenav; });
var getShowSidenav = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSidebar, _navbar_reducers__WEBPACK_IMPORTED_MODULE_1__["getShowSidenav"]);


/***/ }),

/***/ "./src/app/navbar/reducers/navbar.reducers.ts":
/*!****************************************************!*\
  !*** ./src/app/navbar/reducers/navbar.reducers.ts ***!
  \****************************************************/
/*! exports provided: reducer, getShowSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowSidenav", function() { return getShowSidenav; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/navbar/actions/index.ts");

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["NavbarActions"].NavbarActionTypes.CloseSidenav:
            return {
                showSidenav: false,
            };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["NavbarActions"].NavbarActionTypes.OpenSidenav:
            return {
                showSidenav: true,
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "../node_modules/@ngrx/router-store/fesm5/router-store.js");


var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
};
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? [logger]
    : [];


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_projects\ngRxCounter\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map