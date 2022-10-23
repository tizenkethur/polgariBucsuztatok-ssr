"use strict";
(self["webpackChunkpolgariBucsuztatok_ssr"] = self["webpackChunkpolgariBucsuztatok_ssr"] || []).push([["src_app_features_main-page_main_module_ts"],{

/***/ 9911:
/*!***********************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class MainPageComponent {
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 17, vars: 2, consts: [["id", "greeting-container"], ["id", "image-holder"], ["src", "../../../assets/forest_sunrise.jpg", "width", "930vw"], ["id", "text-container"], [1, "quote"], ["id", "text"], ["id", "greeting"], ["id", "description"], ["mat-raised-button", "", "routerLink", "/bemutatkozas"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "blockquote")(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \"Azt mondod, vaks\u00F6t\u00E9t az \u00E9g. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Azt mondom, felvirrad, ne f\u00E9lj!\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Tisztelettel \u00E9s r\u00E9szv\u00E9ttel k\u00F6sz\u00F6ntj\u00FCk \u00D6n\u00F6ket a POLG\u00C1RI B\u00DACS\u00DAZTAT\u00D3K honlapj\u00E1n! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Bemutatkoz\u00E1sunkkal szeretn\u00E9nk lehet\u0151s\u00E9get k\u00EDn\u00E1lni \u00D6n\u00F6knek, hogy az elk\u00E9pzel\u00E9seiknek \u00E9s ig\u00E9nyeiknek legmegfelel\u0151bb polg\u00E1ri b\u00FAcs\u00FAztat\u00F3t v\u00E1lassz\u00E1k ki, - hozz\u00E1tartoz\u00F3juk, kedves bar\u00E1tjuk, ismer\u0151s\u00FCk b\u00FAcs\u00FAztat\u00E1s\u00E1ra; temet\u0151kben illetve b\u00E1rmely egy\u00E9b helysz\u00EDnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tov\u00E1bb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadePic", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeText", undefined);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["#greeting-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.2em;\n  line-height: 1.5;\n  border-radius: 5px;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 576px) {\n  #greeting-container[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 18px;\n  }\n}\n@media (min-width: 930px) {\n  #greeting-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding: 22px;\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 23%);\n          mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 23%);\n}\n@media (min-width: 930px) {\n  #greeting-container[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n@media (min-width: 992px) {\n  #greeting-container[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%] {\n    max-width: 880px;\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n@media (min-width: 576px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%] {\n    width: 450px;\n  }\n}\n@media (min-width: 930px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%] {\n    width: 500px;\n    margin-left: -530px;\n  }\n}\n@media (min-width: 1200px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%] {\n    max-width: 550px;\n    margin-left: -300px;\n    align-items: flex-end;\n  }\n}\n@media (min-width: 1400px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%] {\n    width: 500px;\n    margin-left: -40px;\n    align-items: center;\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  letter-spacing: 0.5px;\n  color: rgb(159, 32, 0);\n  margin: 1em;\n  overflow: hidden;\n}\n@media (min-width: 930px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n    opacity: 70%;\n    margin-top: -20px;\n    margin-bottom: 20px;\n  }\n}\n@media (min-width: 1400) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n    opacity: 100%;\n    margin-top: -40px;\n    margin-bottom: 50px;\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  border: solid 2px rgba(159, 32, 0, 0.8);\n  line-height: 1.5em;\n  display: inline-block;\n  margin: 0;\n  padding: 1em;\n  position: relative;\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before {\n  background-color: whitesmoke;\n  bottom: -10%;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: -10%;\n  transform: rotate(-15deg) skew(5deg);\n}\n@media (min-width: 930px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before {\n    transform: none;\n  }\n}\n@media (min-width: 1200px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before {\n    transform: rotate(-15deg) skew(5deg);\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-radius: 5px;\n  padding: 12px;\n  padding-bottom: 70px;\n  background-color: rgb(159, 32, 0);\n  color: rgb(252, 249, 249);\n  opacity: 80%;\n  position: relative;\n  text-align: justify;\n  font-weight: bolder;\n}\n@media (min-width: 992px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]   #greeting[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: \"Cormorant Upright\", serif;\n  font-weight: bolder;\n  text-align: center;\n  letter-spacing: 0px;\n}\n@media (min-width: 576px) {\n  #greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]   #greeting[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding: 0 10px;\n  font-weight: normal;\n}\n#greeting-container[_ngcontent-%COMP%]   #text-container[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 40px;\n  color: rgb(159, 32, 0);\n  letter-spacing: 0.5px;\n  background-color: whitesmoke;\n  border-radius: 2px;\n  font-size: 19px;\n  font-weight: bold;\n  position: absolute;\n  bottom: 30px;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURGO0FDTUU7RURaRjtJQVVJLGdCQUFBO0lBQ0EsYUFBQTtFQUFGO0FBQ0Y7QUNvQkc7RURoQ0g7SUFjSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0VBRUY7QUFDRjtBQURFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUZBQUE7VUFBQSwyRUFBQTtBQUdKO0FDUUc7RURkRDtJQVNJLGdCQUFBO0VBQ0o7QUFDRjtBQ0hFO0VEUkE7SUFhSSxnQkFBQTtFQUVKO0FBQ0Y7QUFESTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUMvQkU7RUQyQkE7SUFNSSxZQUFBO0VBRUo7QUFDRjtBQ2hCRztFRE9EO0lBVUksWUFBQTtJQUNBLG1CQUFBO0VBR0o7QUFDRjtBQ2ZFO0VEQUE7SUFlSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUFJSjtBQUNGO0FDN0JHO0VET0Q7SUFxQkksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFLSjtBQUNGO0FBSEk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUtOO0FDNUNHO0VEaUNDO0lBU0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFNTjtBQUNGO0FDbkRHO0VEaUNDO0lBZUksYUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFPTjtBQUNGO0FBTk07RUFDRSw0QkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRUjtBQVBRO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7QUFTVjtBQzdFRztFRDRESztJQVVJLGVBQUE7RUFXVjtBQUNGO0FDM0VFO0VEcURNO0lBY0ksb0NBQUE7RUFZVjtBQUNGO0FBVlE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFZVjtBQVBJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBU047QUM3R0U7RUQwRkU7SUFZSSxhQUFBO0VBV047QUFDRjtBQVRNO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBV1I7QUN2SUU7RUR1SEk7SUFRSSxlQUFBO0VBWVI7QUFDRjtBQVRNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVdSO0FBUk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVVSIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9taXhpbnNcIjtcclxuXHJcbiNncmVldGluZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cclxuICBAaW5jbHVkZSBzbSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgY3VzdG9tKDkzMHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgfVxyXG4gICNpbWFnZS1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB0byBsZWZ0LFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDk5KSAyMyVcclxuICAgICk7XHJcbiAgICBAaW5jbHVkZSBjdXN0b20oOTMwcHgpIHtcclxuICAgICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsZyB7XHJcbiAgICAgIG1heC13aWR0aDogODgwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3RleHQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQGluY2x1ZGUgc20ge1xyXG4gICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgY3VzdG9tKDkzMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01MzBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSB4bCB7XHJcbiAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBjdXN0b20oMTQwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdW90ZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDE1OSwgMzIsIDApO1xyXG4gICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIEBpbmNsdWRlIGN1c3RvbSg5MzBweCkge1xyXG4gICAgICAgIG9wYWNpdHk6IDcwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBjdXN0b20oMTQwMCkge1xyXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgfVxyXG4gICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMTU5LCAzMiwgMCwgMC44KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICBib3R0b206IC0xMCU7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAtMTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKSBza2V3KDVkZWcpO1xyXG4gICAgICAgICAgQGluY2x1ZGUgY3VzdG9tKDkzMHB4KSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAaW5jbHVkZSB4bCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZykgc2tldyg1ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPiAqIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3RleHQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAzMiwgMCk7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjUyLCAyNDksIDI0OSk7XHJcbiAgICAgIG9wYWNpdHk6IDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBAaW5jbHVkZSBsZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2dyZWV0aW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IFVwcmlnaHRcIiwgc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgc20ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgI2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTU5LCAzMiwgMCk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRzY3JlZW4tc20tbWluOiA1NzZweDtcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XHJcblxyXG4vLyBTbWFsbGVzdCBkZXZpY2VzIHtcclxuICBAbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGN1c3RvbSgkc2NyZWVuKSB7XHJcbiAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadePic', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(500)]),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadeText', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(1200)]),
            ]),
        ] } });


/***/ }),

/***/ 2278:
/*!***********************************************************!*\
  !*** ./src/app/features/main-page/main-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainRoutingModule": () => (/* binding */ MainRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component */ 9911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent,
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵfac = function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); };
MainRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8185:
/*!***************************************************!*\
  !*** ./src/app/features/main-page/main.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainModule": () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.component */ 9911);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ 2278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_2__.MainRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_2__.MainRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_main-page_main_module_ts.js.map