"use strict";
(self["webpackChunkpolgariBucsuztatok_ssr"] = self["webpackChunkpolgariBucsuztatok_ssr"] || []).push([["src_app_features_not-found_not-found_module_ts"],{

/***/ 6176:
/*!****************************************************************!*\
  !*** ./src/app/features/not-found/not-found-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRoutingModule": () => (/* binding */ NotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 5707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{ path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent }];
class NotFoundRoutingModule {
}
NotFoundRoutingModule.ɵfac = function NotFoundRoutingModule_Factory(t) { return new (t || NotFoundRoutingModule)(); };
NotFoundRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotFoundRoutingModule });
NotFoundRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5707:
/*!***********************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 5, vars: 0, consts: [["id", "main-container"], ["src", "../../../assets/page_not_found.jpg", "width", "82%", "alt", "Page not found"], ["id", "text-holder"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Az oldal nem tal\u00E1lhat\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["#main-container[_ngcontent-%COMP%] {\n  width: 98.5vw;\n  height: 98.5vh;\n  display: flex;\n  justify-content: center;\n  background-color: black;\n}\n#main-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 400px;\n  width: 40vw;\n}\n#main-container[_ngcontent-%COMP%]   #text-holder[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-left: -300px;\n  text-align: right;\n  border-radius: 4px;\n}\n#main-container[_ngcontent-%COMP%]   #text-holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 30px;\n  line-height: normal;\n  padding: 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNOIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk4LjV2dztcclxuICBoZWlnaHQ6IDk4LjV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gIH1cclxuXHJcbiAgI3RleHQtaG9sZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgcGFkZGluZzogMTglO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8924:
/*!********************************************************!*\
  !*** ./src/app/features/not-found/not-found.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 6176);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ 5707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class NotFoundModule {
}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); };
NotFoundModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotFoundModule });
NotFoundModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_not-found_not-found_module_ts.js.map