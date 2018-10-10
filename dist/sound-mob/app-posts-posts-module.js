(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-posts-posts-module"],{

/***/ "./src/app/posts/posts-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const posts_component_1 = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
const routes = [
    { path: "", component: posts_component_1.PostsComponent },
];
let PostsRoutingModule = class PostsRoutingModule {
};
PostsRoutingModule = __decorate([
    core_1.NgModule({
        exports: [router_1.RouterModule],
        imports: [router_1.RouterModule.forChild(routes)]
    })
], PostsRoutingModule);
exports.PostsRoutingModule = PostsRoutingModule;


/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1 *ngIf=\"show\" else elseBlock>Loading...</h1>\n<p>{{data | json}}</p>\n\n<ul #elseBlock>\n  <li *ngFor=\"let person of data\">{{perso}}</li>\n</ul>\n\n\n<button routerLink=\"/dj-view\">Create Station</button>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let PostsComponent = class PostsComponent {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.firstName = '';
        this.lastName = '';
    }
    ngOnInit() {
        // console.log('yupppy');
        return this.http.get('/api/api')
            .subscribe((data) => {
            console.log(data);
            this.data.push(data[0]);
        });
    }
};
PostsComponent = __decorate([
    core_1.Component({
        selector: "app-posts",
        template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PostsComponent);
exports.PostsComponent = PostsComponent;


/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const posts_routing_module_1 = __webpack_require__(/*! ./posts-routing.module */ "./src/app/posts/posts-routing.module.ts");
const posts_component_1 = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, posts_routing_module_1.PostsRoutingModule],
        declarations: [posts_component_1.PostsComponent]
    })
], PostsModule);
exports.PostsModule = PostsModule;


/***/ })

}]);
//# sourceMappingURL=app-posts-posts-module.js.map