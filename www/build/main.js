webpackJsonp([1],{

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/inbox/inbox.module.ngfactory": [
		392,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 260;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/angularfire2/database/index.js
var database = __webpack_require__(124);
var database_default = /*#__PURE__*/__webpack_require__.n(database);

// CONCATENATED MODULE: ./src/pages/about/about.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var about_AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.items = db.list("guessing_page").valueChanges();
    }
    AboutPage = __decorate([
        Object(core["k" /* Component */])({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [ionic_angular["e" /* NavController */], database["AngularFireDatabase"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map
// CONCATENATED MODULE: ./src/pages/contact/contact.ts
var contact___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var contact___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var contact_ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.items = db.list("chart_page").valueChanges();
    }
    ContactPage = contact___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-contact',
            templateUrl: 'contact.html'
        }),
        contact___metadata("design:paramtypes", [ionic_angular["e" /* NavController */], database["AngularFireDatabase"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var home_HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.items = db.list("result_page").valueChanges();
    }
    HomePage = home___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        home___metadata("design:paramtypes", [ionic_angular["e" /* NavController */], database["AngularFireDatabase"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/tabs/tabs.ts
var tabs___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabs___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tabs_TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = home_HomePage;
        this.tab2Root = about_AboutPage;
        this.tab3Root = contact_ContactPage;
    }
    TabsPage = tabs___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'tabs.html'
        }),
        tabs___metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = tabs_TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = app_component___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'app.html'
        }),
        app_component___metadata("design:paramtypes", [ionic_angular["g" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map
// EXTERNAL MODULE: ./node_modules/angularfire2/index.js
var angularfire2 = __webpack_require__(386);
var angularfire2_default = /*#__PURE__*/__webpack_require__.n(angularfire2);

// CONCATENATED MODULE: ./src/environment/environment.ts
var environment = {
    apiKey: "AIzaSyBs57tQ6l-2W4Km35u6_2a34j0tvwRg7Z4",
    authDomain: "lotto-95f51.firebaseapp.com",
    databaseURL: "https://lotto-95f51.firebaseio.com",
    projectId: "lotto-95f51",
    storageBucket: "lotto-95f51.appspot.com",
    messagingSenderId: "517513456739"
};
//# sourceMappingURL=environment.js.map
// EXTERNAL MODULE: ./node_modules/angularfire2/auth/index.js
var auth = __webpack_require__(387);
var auth_default = /*#__PURE__*/__webpack_require__.n(auth);

// EXTERNAL MODULE: ./node_modules/@angular/http/esm5/http.js
var http = __webpack_require__(297);

// CONCATENATED MODULE: ./src/app/app.module.ts
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var app_module_AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = app_module___decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                app_component_MyApp,
                about_AboutPage,
                contact_ContactPage,
                home_HomePage,
                tabs_TabsPage
            ],
            imports: [
                platform_browser["a" /* BrowserModule */],
                ionic_angular["c" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                    links: [
                        { loadChildren: '../pages/inbox/inbox.module.ngfactory#InboxPageModuleNgFactory', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] }
                    ]
                }),
                angularfire2["AngularFireModule"].initializeApp(environment),
                database["AngularFireDatabaseModule"],
                auth["AngularFireAuthModule"],
                http["e" /* HttpModule */],
            ],
            bootstrap: [ionic_angular["a" /* IonicApp */]],
            entryComponents: [
                app_component_MyApp,
                about_AboutPage,
                contact_ContactPage,
                home_HomePage,
                tabs_TabsPage
            ],
            providers: [
                status_bar["a" /* StatusBar */],
                splash_screen["a" /* SplashScreen */],
                { provide: core["q" /* ErrorHandler */], useClass: ionic_angular["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(301);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(303);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 3 modules
var select_popover_component_ngfactory = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(14);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_MyApp = [];
var RenderType_MyApp = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 22, "div", [["class", "splash"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_17" /* ɵeld */](2, 0, null, null, 19, "div", [["class", "sk-cube-grid"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](4, 0, null, null, 0, "div", [["class", "sk-cube sk-cube1"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 0, "div", [["class", "sk-cube sk-cube2"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](8, 0, null, null, 0, "div", [["class", "sk-cube sk-cube3"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](10, 0, null, null, 0, "div", [["class", "sk-cube sk-cube4"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 0, "div", [["class", "sk-cube sk-cube5"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](14, 0, null, null, 0, "div", [["class", "sk-cube sk-cube6"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](16, 0, null, null, 0, "div", [["class", "sk-cube sk-cube7"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](18, 0, null, null, 0, "div", [["class", "sk-cube sk-cube8"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](20, 0, null, null, 0, "div", [["class", "sk-cube sk-cube9"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "]))], null, null); }
function View_MyApp_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 2, "ion-nav", [], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_33" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"] }, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_MyApp_1)), core["_16" /* ɵdid */](5, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.rootPage; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.showSplash; _ck(_v, 5, 0, currVal_1); }, null); }
function View_MyApp_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["_16" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]], null, null)], null, null); }
var MyAppNgFactory = core["_13" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);

//# sourceMappingURL=app.component.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@angular/fire/database/index.js + 16 modules
var fire_database = __webpack_require__(89);

// CONCATENATED MODULE: ./src/pages/about/about.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_AboutPage = [];
var RenderType_AboutPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_AboutPage, data: {} });

function View_AboutPage_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](3, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.no; _ck(_v, 3, 0, currVal_0); }); }
function View_AboutPage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [["text-center", ""]], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      Today Guessing\n    "])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 6, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 2, null, View_AboutPage_1)), core["_16" /* ɵdid */](16, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_31" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = core["_38" /* ɵunv */](_v, 16, 0, core["_29" /* ɵnov */](_v, 17).transform(_co.items)); _ck(_v, 16, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_29" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_AboutPage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-about", [], null, null, null, View_AboutPage_0, RenderType_AboutPage)), core["_16" /* ɵdid */](1, 49152, null, 0, about_AboutPage, [nav_controller["a" /* NavController */], fire_database["AngularFireDatabase"]], null, null)], null, null); }
var AboutPageNgFactory = core["_13" /* ɵccf */]("page-about", about_AboutPage, View_AboutPage_Host_0, {}, {}, []);

//# sourceMappingURL=about.ngfactory.js.map
// CONCATENATED MODULE: ./src/pages/contact/contact.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_ContactPage = [];
var RenderType_ContactPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_ContactPage, data: {} });

function View_ContactPage_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 25, "tr", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](2, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](3, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](6, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](9, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](11, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](12, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](14, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](15, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](17, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](18, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](20, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](21, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](24, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.date; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.sno; _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.one; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.$implicit.two; _ck(_v, 12, 0, currVal_3); var currVal_4 = _v.context.$implicit.three; _ck(_v, 15, 0, currVal_4); var currVal_5 = _v.context.$implicit.four; _ck(_v, 18, 0, currVal_5); var currVal_6 = _v.context.$implicit.five; _ck(_v, 21, 0, currVal_6); var currVal_7 = _v.context.$implicit.six; _ck(_v, 24, 0, currVal_7); }); }
function View_ContactPage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [["text-center", ""]], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n      Chart \n    "])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 31, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](15, 0, null, 1, 27, "table", [["class", "chart"], ["width", "100%"]], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](17, 0, null, null, 25, "tbody", [], null, null, null, null, null)), (_l()(), core["_17" /* ɵeld */](18, 0, null, null, 19, "tr", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](20, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["Date"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["S.No"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](26, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](28, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](30, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](32, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](34, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](36, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n          \n        "])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 2, null, View_ContactPage_1)), core["_16" /* ɵdid */](40, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_31" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n \n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = core["_38" /* ɵunv */](_v, 40, 0, core["_29" /* ɵnov */](_v, 41).transform(_co.items)); _ck(_v, 40, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_29" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_ContactPage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-contact", [], null, null, null, View_ContactPage_0, RenderType_ContactPage)), core["_16" /* ɵdid */](1, 49152, null, 0, contact_ContactPage, [nav_controller["a" /* NavController */], fire_database["AngularFireDatabase"]], null, null)], null, null); }
var ContactPageNgFactory = core["_13" /* ɵccf */]("page-contact", contact_ContactPage, View_ContactPage_Host_0, {}, {}, []);

//# sourceMappingURL=contact.ngfactory.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_HomePage = [];
var RenderType_HomePage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_1(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](-1, null, [" \n    "])), (_l()(), core["_17" /* ɵeld */](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), core["_37" /* ɵted */](3, null, ["", ""])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n    "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.result; _ck(_v, 3, 0, currVal_0); }); }
function View_HomePage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [["color", "primary"]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], { color: [0, "color"] }, null), (_l()(), core["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [["text-center", ""]], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["Today Result"])), (_l()(), core["_37" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 6, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 2, null, View_HomePage_1)), core["_16" /* ɵdid */](16, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_31" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["i" /* ChangeDetectorRef */]]), (_l()(), core["_37" /* ɵted */](-1, 1, ["\n\n    \n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 1, 0, currVal_0); var currVal_5 = core["_38" /* ɵunv */](_v, 16, 0, core["_29" /* ɵnov */](_v, 17).transform(_co.items)); _ck(_v, 16, 0, currVal_5); }, function (_ck, _v) { var currVal_1 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_2 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 13).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_3, currVal_4); }); }
function View_HomePage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["_16" /* ɵdid */](1, 49152, null, 0, home_HomePage, [nav_controller["a" /* NavController */], fire_database["AngularFireDatabase"]], null, null)], null, null); }
var HomePageNgFactory = core["_13" /* ɵccf */]("page-home", home_HomePage, View_HomePage_Host_0, {}, {}, []);

//# sourceMappingURL=home.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tabs.ngfactory.js + 1 modules
var tabs_ngfactory = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tabs.js
var tabs = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tab.js
var tab = __webpack_require__(119);

// CONCATENATED MODULE: ./src/pages/tabs/tabs.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_TabsPage = [];
var RenderType_TabsPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_TabsPage, data: {} });

function View_TabsPage_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 12, "ion-tabs", [], null, null, null, tabs_ngfactory["b" /* View_Tabs_0 */], tabs_ngfactory["a" /* RenderType_Tabs */])), core["_33" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [tabs["a" /* Tabs */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, tabs["a" /* Tabs */], [[2, nav_controller["a" /* NavController */]], [2, view_controller["a" /* ViewController */]], app["a" /* App */], config["a" /* Config */], core["p" /* ElementRef */], platform_platform["a" /* Platform */], core["N" /* Renderer */], deep_linker["a" /* DeepLinker */], keyboard["a" /* Keyboard */]], null, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](4, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "apps"], ["tabTitle", "Today Result"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](5, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "cube"], ["tabTitle", "Today Guessing"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](8, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](10, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "grid"], ["tabTitle", "Chart"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](11, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_37" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_37" /* ɵted */](-1, null, ["\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tab1Root; var currVal_3 = "Today Result"; var currVal_4 = "apps"; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = _co.tab2Root; var currVal_8 = "Today Guessing"; var currVal_9 = "cube"; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9); var currVal_12 = _co.tab3Root; var currVal_13 = "Chart"; var currVal_14 = "grid"; _ck(_v, 11, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 5)._tabId; var currVal_1 = core["_29" /* ɵnov */](_v, 5)._btnId; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_5 = core["_29" /* ɵnov */](_v, 8)._tabId; var currVal_6 = core["_29" /* ɵnov */](_v, 8)._btnId; _ck(_v, 7, 0, currVal_5, currVal_6); var currVal_10 = core["_29" /* ɵnov */](_v, 11)._tabId; var currVal_11 = core["_29" /* ɵnov */](_v, 11)._btnId; _ck(_v, 10, 0, currVal_10, currVal_11); }); }
function View_TabsPage_Host_0(_l) { return core["_39" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_TabsPage_0, RenderType_TabsPage)), core["_16" /* ɵdid */](1, 49152, null, 0, tabs_TabsPage, [], null, null)], null, null); }
var TabsPageNgFactory = core["_13" /* ɵccf */]("ng-component", tabs_TabsPage, View_TabsPage_Host_0, {}, {}, []);

//# sourceMappingURL=tabs.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@angular/fire/index.js + 3 modules
var fire = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/@angular/fire/auth/index.js + 4 modules
var fire_auth = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(169);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























































var AppModuleNgFactory = core["_14" /* ɵcmf */](app_module_AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, AboutPageNgFactory, ContactPageNgFactory, HomePageNgFactory, TabsPageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](5120, core["C" /* LOCALE_ID */], core["_34" /* ɵq */], [[3, core["C" /* LOCALE_ID */]]]), core["_26" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["u" /* ɵa */]]]), core["_26" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_19" /* ɵi */], []), core["_26" /* ɵmpd */](5120, core["A" /* IterableDiffers */], core["_27" /* ɵn */], []), core["_26" /* ɵmpd */](5120, core["B" /* KeyValueDiffers */], core["_30" /* ɵo */], []), core["_26" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](6144, core["R" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_26" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_26" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["G" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_26" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](6144, core["P" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_26" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](4608, core["W" /* Testability */], core["W" /* Testability */], [core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["d" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](5120, fire["FirebaseApp"], fire["_firebaseAppFactory"], [fire["FirebaseOptionsToken"], [2, fire["FirebaseNameOrConfigToken"]]]), core["_26" /* ɵmpd */](4608, fire_database["AngularFireDatabase"], fire_database["AngularFireDatabase"], [fire["FirebaseOptionsToken"], [2, fire["FirebaseNameOrConfigToken"]], [2, fire["RealtimeDatabaseURL"]], core["J" /* PLATFORM_ID */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, fire_auth["AngularFireAuth"], fire_auth["AngularFireAuth"], [fire["FirebaseOptionsToken"], [2, fire["FirebaseNameOrConfigToken"]], core["J" /* PLATFORM_ID */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, http["c" /* BrowserXhr */], http["c" /* BrowserXhr */], []), core["_26" /* ɵmpd */](4608, http["g" /* ResponseOptions */], http["b" /* BaseResponseOptions */], []), core["_26" /* ɵmpd */](5120, http["i" /* XSRFStrategy */], http["j" /* ɵa */], []), core["_26" /* ɵmpd */](4608, http["h" /* XHRBackend */], http["h" /* XHRBackend */], [http["c" /* BrowserXhr */], http["g" /* ResponseOptions */], http["i" /* XSRFStrategy */]]), core["_26" /* ɵmpd */](4608, http["f" /* RequestOptions */], http["a" /* BaseRequestOptions */], []), core["_26" /* ɵmpd */](5120, http["d" /* Http */], http["k" /* ɵb */], [http["h" /* XHRBackend */], http["f" /* RequestOptions */]]), core["_26" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_26" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_26" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["G" /* NgZone */], dom_controller["a" /* DomController */]]), core["_26" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](5120, common["g" /* LocationStrategy */], ionic_angular_module["c" /* provideLocationStrategy */], [common["r" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, common["f" /* Location */], common["f" /* Location */], [common["g" /* LocationStrategy */]]), core["_26" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_26" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["f" /* Location */], module_loader["b" /* ModuleLoader */], core["l" /* ComponentFactoryResolver */]]), core["_26" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_26" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_26" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_26" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_26" /* ɵmpd */](512, core["q" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_26" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_26" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_26" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_26" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_26" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_26" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [{ loadChildren: "../pages/inbox/inbox.module.ngfactory#InboxPageModuleNgFactory", name: "InboxPage", segment: "inbox", priority: "low", defaultHistory: [] }] }, []), core["_26" /* ɵmpd */](512, core["j" /* Compiler */], core["j" /* Compiler */], []), core["_26" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["j" /* Compiler */]]), core["_26" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["F" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_26" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["G" /* NgZone */], core["_11" /* ɵConsole */], core["y" /* Injector */], core["q" /* ErrorHandler */], core["l" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_26" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_26" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, fire["AngularFireModule"], fire["AngularFireModule"], []), core["_26" /* ɵmpd */](512, fire_database["AngularFireDatabaseModule"], fire_database["AngularFireDatabaseModule"], []), core["_26" /* ɵmpd */](512, fire_auth["AngularFireAuthModule"], fire_auth["AngularFireAuthModule"], []), core["_26" /* ɵmpd */](512, http["e" /* HttpModule */], http["e" /* HttpModule */], []), core["_26" /* ɵmpd */](512, app_module_AppModule, app_module_AppModule, []), core["_26" /* ɵmpd */](256, fire["FirebaseOptionsToken"], { apiKey: "AIzaSyBs57tQ6l-2W4Km35u6_2a34j0tvwRg7Z4", authDomain: "lotto-95f51.firebaseapp.com", databaseURL: "https://lotto-95f51.firebaseio.com", projectId: "lotto-95f51", storageBucket: "lotto-95f51.appspot.com", messagingSenderId: "517513456739" }, []), core["_26" /* ɵmpd */](256, fire["FirebaseNameOrConfigToken"], undefined, []), core["_26" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_26" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });

//# sourceMappingURL=app.module.ngfactory.js.map
// CONCATENATED MODULE: ./src/app/main.ts



Object(core["_4" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map