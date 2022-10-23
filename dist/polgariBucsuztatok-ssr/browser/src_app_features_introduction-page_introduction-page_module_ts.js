"use strict";
(self["webpackChunkpolgariBucsuztatok_ssr"] = self["webpackChunkpolgariBucsuztatok_ssr"] || []).push([["src_app_features_introduction-page_introduction-page_module_ts"],{

/***/ 7034:
/*!***************************************************************************!*\
  !*** ./src/app/features/introduction-page/introduction-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPageComponent": () => (/* binding */ IntroductionPageComponent)
/* harmony export */ });
/* harmony import */ var src_db_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/db-data */ 6764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _introduction_tile_introduction_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction-tile/introduction-tile.component */ 4621);





function IntroductionPageComponent_app_introduction_tile_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-introduction-tile", 4);
} if (rf & 2) {
    const person_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("personData", person_r1);
} }
class IntroductionPageComponent {
    constructor() {
        this.farewellPersons = src_db_data__WEBPACK_IMPORTED_MODULE_0__.farewellPersonData;
    }
}
IntroductionPageComponent.ɵfac = function IntroductionPageComponent_Factory(t) { return new (t || IntroductionPageComponent)(); };
IntroductionPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IntroductionPageComponent, selectors: [["app-introduction-page"]], decls: 8, vars: 1, consts: [["id", "introduction-page"], ["id", "title"], ["id", "card-holder"], [3, "personData", 4, "ngFor", "ngForOf"], [3, "personData"]], template: function IntroductionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "blockquote")(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Bemutatkozunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, IntroductionPageComponent_app_introduction_tile_6_Template, 1, 1, "app-introduction-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.farewellPersons);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _introduction_tile_introduction_tile_component__WEBPACK_IMPORTED_MODULE_1__.IntroductionTileComponent], styles: ["#introduction-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 80vw;\n}\n#introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 25px;\n  letter-spacing: 3px;\n  font-weight: bolder;\n  color: rgb(159, 32, 0);\n  margin: 20px 0 40px 0;\n  overflow: hidden;\n}\n@media (min-width: 550px) {\n  #introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media (min-width: 992px) {\n  #introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (min-width: 1010px) {\n  #introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n#introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  border: solid 2px rgba(159, 32, 0, 0.8);\n  line-height: 1.5em;\n  margin: 0;\n  padding: 0.7em;\n  position: relative;\n}\n#introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before {\n  background-color: whitesmoke;\n  bottom: -10%;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: -10%;\n  transform: rotate(-15deg) skew(5deg);\n}\n#introduction-page[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n#introduction-page[_ngcontent-%COMP%]   #card-holder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 20px;\n  width: 100%;\n}\n@media (min-width: 576px) {\n  #introduction-page[_ngcontent-%COMP%]   #card-holder[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (min-width: 1200px) {\n  #introduction-page[_ngcontent-%COMP%]   #card-holder[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQ2dCRztFRHpCRDtJQWFJLGVBQUE7RUFBSjtBQUNGO0FDS0U7RURuQkE7SUFpQkksZUFBQTtFQUNKO0FBQ0Y7QUNNRztFRHpCRDtJQXFCSSxlQUFBO0VBRUo7QUFDRjtBQUFJO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQURNO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7QUFHUjtBQURNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBR1I7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUo7QUNsREU7RUQ0Q0E7SUFTSSxlQUFBO0VBQ0o7QUFDRjtBQzVCRTtFRGlCQTtJQWFJLGlCQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9taXhpbnNcIjtcclxuXHJcbiNpbnRyb2R1Y3Rpb24tcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwdnc7XHJcblxyXG4gICN0aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHJnYigxNTksIDMyLCAwKTtcclxuICAgIG1hcmdpbjogMjBweCAwIDQwcHggMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgQGluY2x1ZGUgY3VzdG9tKDU1MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBjdXN0b20oMTAxMHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICBibG9ja3F1b3RlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMTU5LCAzMiwgMCwgMC44KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGJvdHRvbTogLTEwJTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogLTEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpIHNrZXcoNWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgPiAqIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2NhcmQtaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQGluY2x1ZGUgc20ge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgeGwge1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIFNtYWxsZXN0IGRldmljZXMge1xyXG4gIEBtaXhpbiB4cyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXNcclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXNcclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY3VzdG9tKCRzY3JlZW4pIHtcclxuICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4pIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6670:
/*!************************************************************************!*\
  !*** ./src/app/features/introduction-page/introduction-page.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPageModule": () => (/* binding */ IntroductionPageModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _introduction_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction-page.component */ 7034);
/* harmony import */ var _introduction_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction-page.routing.module */ 4115);
/* harmony import */ var _introduction_tile_introduction_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction-tile/introduction-tile.component */ 4621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class IntroductionPageModule {
}
IntroductionPageModule.ɵfac = function IntroductionPageModule_Factory(t) { return new (t || IntroductionPageModule)(); };
IntroductionPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: IntroductionPageModule });
IntroductionPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _introduction_page_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntroductionPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IntroductionPageModule, { declarations: [_introduction_page_component__WEBPACK_IMPORTED_MODULE_1__.IntroductionPageComponent, _introduction_tile_introduction_tile_component__WEBPACK_IMPORTED_MODULE_3__.IntroductionTileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _introduction_page_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntroductionPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 4115:
/*!********************************************************************************!*\
  !*** ./src/app/features/introduction-page/introduction-page.routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionPageRoutingModule": () => (/* binding */ IntroductionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _introduction_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction-page.component */ 7034);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _introduction_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroductionPageComponent,
    },
];
class IntroductionPageRoutingModule {
}
IntroductionPageRoutingModule.ɵfac = function IntroductionPageRoutingModule_Factory(t) { return new (t || IntroductionPageRoutingModule)(); };
IntroductionPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IntroductionPageRoutingModule });
IntroductionPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IntroductionPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4621:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/introduction-page/introduction-tile/introduction-tile.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionTileComponent": () => (/* binding */ IntroductionTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class IntroductionTileComponent {
}
IntroductionTileComponent.ɵfac = function IntroductionTileComponent_Factory(t) { return new (t || IntroductionTileComponent)(); };
IntroductionTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionTileComponent, selectors: [["app-introduction-tile"]], inputs: { personData: "personData" }, decls: 6, vars: 4, consts: [["id", "person-card", 3, "routerLink"], ["id", "name-holder"], ["id", "image-holder"], [3, "src", "alt"]], template: function IntroductionTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/bemutatkozas/", ctx.personData.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.personData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Picture of ", ctx.personData.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.personData.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["#person-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 300px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  padding: 20px 0;\n  cursor: pointer;\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.14), 0 4px 8px -1px rgba(0, 0, 0, 0.12);\n}\n@media (min-width: 550px) {\n  #person-card[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n}\n@media (min-width: 1200px) {\n  #person-card[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 280px;\n    margin: 10px;\n  }\n}\n@media (min-width: 1400px) {\n  #person-card[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 300px;\n    margin: 20px;\n  }\n}\n#person-card[_ngcontent-%COMP%]   #name-holder[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bolder;\n  letter-spacing: 0.7px;\n  color: rgb(159, 32, 0);\n  margin-bottom: 10px;\n}\n#person-card[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 150px;\n  height: 198px;\n}\n#person-card[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi10aWxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0hBQUE7QUFERjtBQ3NCRztFRGhDSDtJQWVJLFlBQUE7RUFERjtBQUNGO0FDd0JFO0VEdkNGO0lBbUJJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7QUNVRztFRGhDSDtJQXlCSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ04iLCJmaWxlIjoiaW50cm9kdWN0aW9uLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vbWl4aW5zXCI7XHJcblxyXG4jcGVyc29uLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gIEBpbmNsdWRlIGN1c3RvbSg1NTBweCkge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgeGwge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGN1c3RvbSgxNDAwcHgpIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gICNuYW1lLWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgY29sb3I6IHJnYigxNTksIDMyLCAwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjaW1hZ2UtaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTk4cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG4kc2NyZWVuLW1kLW1pbjogNzY4cHg7XHJcbiRzY3JlZW4tbGctbWluOiA5OTJweDtcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIFNtYWxsZXN0IGRldmljZXMge1xyXG4gIEBtaXhpbiB4cyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXNcclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXNcclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlc1xyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tbGctbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY3VzdG9tKCRzY3JlZW4pIHtcclxuICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4pIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gICB9XHJcbn1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcclxuQG1peGluIHhsIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_features_introduction-page_introduction-page_module_ts.js.map