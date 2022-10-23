"use strict";
(self["webpackChunkpolgariBucsuztatok_ssr"] = self["webpackChunkpolgariBucsuztatok_ssr"] || []).push([["src_app_features_personal_personal_module_ts"],{

/***/ 6663:
/*!**************************************************************!*\
  !*** ./src/app/features/personal/personal-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalRoutingModule": () => (/* binding */ PersonalRoutingModule)
/* harmony export */ });
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.component */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _personal_component__WEBPACK_IMPORTED_MODULE_0__.PersonalComponent,
    },
];
class PersonalRoutingModule {
}
PersonalRoutingModule.ɵfac = function PersonalRoutingModule_Factory(t) { return new (t || PersonalRoutingModule)(); };
PersonalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonalRoutingModule });
PersonalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PersonalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7473:
/*!*********************************************************!*\
  !*** ./src/app/features/personal/personal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalComponent": () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var src_db_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/db-data */ 6764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ 2163);







function PersonalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "blockquote")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentPersonData.quote);
} }
function PersonalComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Weboldalam");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.currentPersonData.web, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PersonalComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.currentPersonData.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PersonalComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Elolvasom a cikket!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PersonalComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "youtube-player", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoId", ctx_r5.currentPersonData.videoId);
} }
function PersonalComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PersonalComponent_div_33_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.currentPersonData.videoId);
} }
class PersonalComponent {
    constructor(route) {
        this.route = route;
        this.farewellPersonData = src_db_data__WEBPACK_IMPORTED_MODULE_0__.farewellPersonData;
        this.name = this.route.snapshot.paramMap.get('name');
    }
    ngOnInit() {
        src_db_data__WEBPACK_IMPORTED_MODULE_0__.farewellPersonData.forEach((obj) => {
            if (this.name === obj.name) {
                this.currentPersonData = obj;
            }
        });
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
PersonalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 34, vars: 13, consts: [["id", "personal-container"], ["id", "button-holder"], ["mat-fab", "", "routerLink", "/bemutatkozas", "color", "currentColor", "aria-label", "Button with an arrow_back icon"], ["id", "pic-quote-contact"], ["id", "quote", 4, "ngIf"], ["id", "person-card"], ["id", "name-holder"], ["id", "image-holder"], ["width", "150px", 3, "src", "alt"], ["id", "contact"], ["id", "title"], [1, "iconWithData"], [1, "material-symbols-outlined"], [3, "href"], ["class", "iconWithData", 4, "ngIf"], ["id", "introduction-media"], ["id", "introduction"], ["mat-raised-button", "", "href", "https://nlc.hu/csalad/20161223/temetes-bucsubeszed-elmulas-szertartas/", "target", "_blank", "rel", "noopener noreferrer", 4, "ngIf"], ["id", "media", 4, "ngIf"], ["id", "quote"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["mat-raised-button", "", "href", "https://nlc.hu/csalad/20161223/temetes-bucsubeszed-elmulas-szertartas/", "target", "_blank", "rel", "noopener noreferrer"], ["id", "media"], ["id", "youtube-player", 4, "ngIf"], ["id", "youtube-player"], [3, "videoId"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PersonalComponent_div_6_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "El\u00E9rhet\u0151s\u00E9gek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11)(22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "forward_to_inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PersonalComponent_div_26_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PersonalComponent_div_27_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15)(29, "div", 16)(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, PersonalComponent_a_32_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PersonalComponent_div_33_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPersonData.quote !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentPersonData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "Picture of ", ctx.currentPersonData.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.currentPersonData.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx.currentPersonData.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentPersonData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.currentPersonData.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentPersonData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPersonData.web);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPersonData.facebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentPersonData.introduction, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPersonData.name === "Goh\u00E9r Zsuzsa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPersonData.videoId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__.YouTubePlayer], styles: ["#personal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  color: rgb(159, 32, 0);\n  font-size: 18px;\n  font-weight: bolder;\n  line-height: 1.5;\n  letter-spacing: 0.7px;\n  padding: 10px;\n}\n#personal-container[_ngcontent-%COMP%]   #button-holder[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n#personal-container[_ngcontent-%COMP%]   #button-holder[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 20px 20px 0 20px;\n  color: rgb(159, 32, 0);\n  text-align: center;\n}\n@media (min-width: 850px) {\n  #personal-container[_ngcontent-%COMP%] {\n    max-width: 850px;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  width: 100%;\n  margin-top: 70px;\n}\n@media (min-width: 768px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%] {\n    height: 400px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 50px 10px 20px 10px;\n  }\n}\n@media (min-width: 768px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    font-size: 16px;\n  }\n}\n@media (min-width: 992px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%] {\n    font-size: 16.5px;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  max-width: 300px;\n  border: solid 2px rgba(159, 32, 0, 0.8);\n  line-height: 1.5em;\n  margin: 20px 0;\n  padding: 20px;\n  position: relative;\n  text-align: center;\n  white-space: pre-line;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before {\n  background-color: whitesmoke;\n  bottom: -10%;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: -10%;\n  transform: rotate(-2deg) skew(5deg);\n}\n@media (min-width: 768px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before {\n    padding: 8px;\n    transform: none;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #person-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 300px;\n  margin: 20px 0;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.14), 0 4px 8px -1px rgba(0, 0, 0, 0.12);\n}\n@media (min-width: 768px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #person-card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #person-card[_ngcontent-%COMP%]   #name-holder[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bolder;\n  letter-spacing: 0.7px;\n  color: rgb(159, 32, 0);\n  margin-bottom: 10px;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #person-card[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 150px;\n  height: 198px;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #person-card[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  padding-bottom: 15px;\n  color: rgb(252, 249, 249);\n  background-color: rgba(159, 32, 0, 0.7);\n  text-align: justify;\n  font-weight: bolder;\n  max-width: 300px;\n  border-radius: 4px;\n  margin: 20px 0;\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.14), 0 4px 8px -1px rgba(0, 0, 0, 0.12);\n}\n@media (min-width: 768px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%] {\n    margin: 10px;\n    margin-bottom: 20px;\n  }\n}\n@media (min-width: 920px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%] {\n    margin: 10px 0 20px 10px;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 15px;\n  padding-bottom: 0;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n  padding-right: 10px;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   .iconWithData[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 20px;\n  font-size: 14px;\n}\n#personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   .iconWithData[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  margin-bottom: 12px;\n}\n@media (min-width: 920px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   .iconWithData[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (min-width: 992px) {\n  #personal-container[_ngcontent-%COMP%]   #pic-quote-contact[_ngcontent-%COMP%]   #contact[_ngcontent-%COMP%]   .iconWithData[_ngcontent-%COMP%] {\n    font-size: 16.5px;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #introduction-media[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90vw;\n  margin: 40px 0 20px 0;\n}\n@media (min-width: 768px) {\n  #personal-container[_ngcontent-%COMP%]   #introduction-media[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 850px;\n    text-align: center;\n  }\n}\n#personal-container[_ngcontent-%COMP%]   #introduction-media[_ngcontent-%COMP%]   #introduction[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n#personal-container[_ngcontent-%COMP%]   #introduction-media[_ngcontent-%COMP%]   #introduction[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(159, 32, 0);\n  font-size: 18px;\n  font-weight: bolder;\n  margin-top: 10px;\n  padding: 5px 28px;\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.14), 0 4px 8px -1px rgba(0, 0, 0, 0.12);\n}\n#personal-container[_ngcontent-%COMP%]   #introduction-media[_ngcontent-%COMP%]   #media[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n}\n#personal-container[_ngcontent-%COMP%]   #introduction-media[_ngcontent-%COMP%]   #media[_ngcontent-%COMP%]   #youtube-player[_ngcontent-%COMP%] {\n  width: 90vw;\n  max-width: 576px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBREY7QUFFRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUFKO0FBQ0k7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQ2FHO0VEaENIO0lBdUJJLGdCQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQ2RFO0VET0E7SUFVSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLHFCQUFBO0lBQ0EsMkJBQUE7RUFDSjtBQUNGO0FDdkJFO0VEd0JFO0lBRUksa0JBQUE7SUFDQSxlQUFBO0VBQ047QUFDRjtBQ3RCRTtFRGlCRTtJQU9JLGlCQUFBO0VBRU47QUFDRjtBQURNO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUdSO0FBRlE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtBQUlWO0FDdkRFO0VEMkNNO0lBV0ksWUFBQTtJQUNBLGVBQUE7RUFLVjtBQUNGO0FBSFE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFLVjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdIQUFBO0FBRU47QUM3RUU7RURpRUU7SUFjSSxtQkFBQTtFQUVOO0FBQ0Y7QUFETTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUdSO0FBQU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFUjtBQUFRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFVjtBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdIQUFBO0FBRE47QUNqSEU7RURzR0U7SUFnQkksWUFBQTtJQUNBLG1CQUFBO0VBRE47QUFDRjtBQzFHRztFRHlGQztJQXFCSSx3QkFBQTtFQUFOO0FBQ0Y7QUFFTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdNO0VBQ0Usa0VBQUE7RUFDQSxtQkFBQTtBQURSO0FBSU07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFJUTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRlY7QUNsSUc7RUQ0SEc7SUFZSSxlQUFBO0VBRlI7QUFDRjtBQzdJRTtFRGtJSTtJQWdCSSxpQkFBQTtFQURSO0FBQ0Y7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSko7QUNoS0U7RUQrSkE7SUFRSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFISjtBQUNGO0FBS0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhOO0FBS007RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnSEFBQTtBQUhSO0FBUUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFOTjtBQVFNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBTlIiLCJmaWxlIjoicGVyc29uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vbWl4aW5zXCI7XHJcblxyXG4jcGVyc29uYWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHJnYigxNTksIDMyLCAwKTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gICNidXR0b24taG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTU5LCAzMiwgMCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGN1c3RvbSg4NTBweCkge1xyXG4gICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICB9XHJcblxyXG4gICNwaWMtcXVvdGUtY29udGFjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcblxyXG4gICAgQGluY2x1ZGUgbWQge1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgbWFyZ2luOiA1MHB4IDEwcHggMjBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNxdW90ZSB7XHJcbiAgICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBsZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNi41cHg7XHJcbiAgICAgIH1cclxuICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMTU5LCAzMiwgMCwgMC44KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTAlO1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogLTEwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKSBza2V3KDVkZWcpO1xyXG5cclxuICAgICAgICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gKiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNwZXJzb24tY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgI25hbWUtaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNTksIDMyLCAwKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjaW1hZ2UtaG9sZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5OHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDI1MiwgMjQ5LCAyNDkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OSwgMzIsIDAsIDAuNyk7XHJcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgY3VzdG9tKDkyMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwiRklMTFwiIDAsIFwid2dodFwiIDQwMCwgXCJHUkFEXCIgMCwgXCJvcHN6XCIgNDg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb25XaXRoRGF0YSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGN1c3RvbSg5MjBweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgbGcge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNi41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaW50cm9kdWN0aW9uLW1lZGlhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xyXG5cclxuICAgIEBpbmNsdWRlIG1kIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNpbnRyb2R1Y3Rpb24ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmdiKDE1OSwgMzIsIDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDI4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgIDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbWVkaWEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgI3lvdXR1YmUtcGxheWVyIHtcclxuICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICBtYXgtd2lkdGg6IDU3NnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRzY3JlZW4tc20tbWluOiA1NzZweDtcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG4kc2NyZWVuLWxnLW1pbjogOTkycHg7XHJcbiRzY3JlZW4teGwtbWluOiAxMjAwcHg7XHJcblxyXG4vLyBTbWFsbGVzdCBkZXZpY2VzIHtcclxuICBAbWl4aW4geHMge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4tc20tbWlufSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzXHJcbkBtaXhpbiBtZCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1tZC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGN1c3RvbSgkc2NyZWVuKSB7XHJcbiAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuKSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7294:
/*!******************************************************!*\
  !*** ./src/app/features/personal/personal.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalModule": () => (/* binding */ PersonalModule)
/* harmony export */ });
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-routing.module */ 6663);
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.component */ 7473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ 2163);
/* harmony import */ var ang_music_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ang-music-player */ 9274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class PersonalModule {
}
PersonalModule.ɵfac = function PersonalModule_Factory(t) { return new (t || PersonalModule)(); };
PersonalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PersonalModule });
PersonalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule,
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__.YouTubePlayerModule,
        ang_music_player__WEBPACK_IMPORTED_MODULE_6__.AngMusicPlayerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PersonalModule, { declarations: [_personal_component__WEBPACK_IMPORTED_MODULE_1__.PersonalComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule,
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__.YouTubePlayerModule,
        ang_music_player__WEBPACK_IMPORTED_MODULE_6__.AngMusicPlayerModule] }); })();


/***/ }),

/***/ 9274:
/*!*********************************************************************************!*\
  !*** ./node_modules/ang-music-player/__ivy_ngcc__/fesm2015/ang-music-player.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngMusicPlayerComponent": () => (/* binding */ AngMusicPlayerComponent),
/* harmony export */   "AngMusicPlayerModule": () => (/* binding */ AngMusicPlayerModule),
/* harmony export */   "AngMusicPlayerService": () => (/* binding */ AngMusicPlayerService),
/* harmony export */   "ɵa": () => (/* binding */ AudioPlyerOptions),
/* harmony export */   "ɵb": () => (/* binding */ TimeConversionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["audioPlayer"];

function AngMusicPlayerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AngMusicPlayerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No audio Found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AngMusicPlayerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.selectedAudio == null ? null : ctx_r3.selectedAudio.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}

const _c1 = function (a0) {
  return {
    "color": a0
  };
};

function AngMusicPlayerComponent_div_6_marquee_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "marquee", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r5.audioTitleColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedAudio == null ? null : ctx_r5.selectedAudio.title, "");
  }
}

function AngMusicPlayerComponent_div_6_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r6.audioTitleColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.selectedAudio == null ? null : ctx_r6.selectedAudio.title, "");
  }
}

const _c2 = function (a0) {
  return {
    "fill": a0
  };
};

function AngMusicPlayerComponent_div_6__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_14_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.repeatAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "repeat-on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 31)(4, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r7.repeatButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_15_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.repeatAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " .cls{ fill: green } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "repeat-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 34)(6, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r8.activeRepeatButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_16_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.previousAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 37)(4, "rect", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r9.previousButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_17_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.play());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r10.playButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_18_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.pause());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r11.pauseButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_19_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.nextAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 42)(4, "rect", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r12.nextButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_21_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.muteAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs")(2, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .cls-2 { fill: none; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "volume-high");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 45)(7, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r13.pauseButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_22_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.muteAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r14.muteButtonColor));
  }
}

const _c3 = function (a0) {
  return {
    "background": a0
  };
};

function AngMusicPlayerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AngMusicPlayerComponent_div_6_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.seekAudio($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "timeConversion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "timeConversion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AngMusicPlayerComponent_div_6_marquee_11_Template, 3, 4, "marquee", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AngMusicPlayerComponent_div_6_p_12_Template, 2, 4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AngMusicPlayerComponent_div_6__svg_svg_14_Template, 5, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AngMusicPlayerComponent_div_6__svg_svg_15_Template, 7, 3, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AngMusicPlayerComponent_div_6__svg_svg_16_Template, 5, 3, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AngMusicPlayerComponent_div_6__svg_svg_17_Template, 4, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AngMusicPlayerComponent_div_6__svg_svg_18_Template, 5, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AngMusicPlayerComponent_div_6__svg_svg_19_Template, 5, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AngMusicPlayerComponent_div_6__svg_svg_21_Template, 8, 3, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AngMusicPlayerComponent_div_6__svg_svg_22_Template, 5, 3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 25)(24, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6_Template_input_click_24_listener($event) {
      return $event.stopPropagation();
    })("input", function AngMusicPlayerComponent_div_6_Template_input_input_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.volumeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r4.totalAudioLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.currentAudioTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx_r4.timeSliderColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx_r4.audioTimeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, ctx_r4.currentAudioTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 20, ctx_r4.totalAudioLength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.scrollTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.scrollTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.repeat && !ctx_r4.isRepeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.repeat && ctx_r4.isRepeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isAudioPlaying);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isAudioPlaying);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.next);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isMute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isMute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.audioVolume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c3, ctx_r4.volumeSliderColor));
  }
}

const _c4 = function (a0, a1, a2) {
  return {
    "background-color": a0,
    "width": a1,
    "height": a2
  };
};

class AngMusicPlayerService {
  constructor() {}

}

AngMusicPlayerService.ɵfac = function AngMusicPlayerService_Factory(t) {
  return new (t || AngMusicPlayerService)();
};

AngMusicPlayerService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function AngMusicPlayerService_Factory() {
    return new AngMusicPlayerService();
  },
  token: AngMusicPlayerService,
  providedIn: "root"
});

AngMusicPlayerService.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngMusicPlayerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

class AudioPlyerOptions {
  constructor() {
    this.currentAudioTime = 0;
    this.isAudioLoaded = false;
    this.isRepeat = false;
    this.audioVolume = 100;
    this.isAudioEnded = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isMute = false;
    this.playEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pauseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  } //get audio player events


  options() {
    //emit event when playing audio
    this.audioPlayer.nativeElement.addEventListener('playing', () => {}); //emit when intial loading of audio

    this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
      this.isAudioLoaded = true;
      this.getAudioLength();
    }); //emit time on playing audio

    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      //get current audio time
      this.currentAudioTime = Math.floor(this.audioPlayer.nativeElement.currentTime); //check if audio is ended for next song and pass data to component

      if (this.audioPlayer.nativeElement.ended) {
        this.isAudioEnded.next(true);
      }
    });
    this.audioPlayer.nativeElement.addEventListener('volumechange', () => {
      this.audioVolume = Math.floor(this.audioPlayer.nativeElement.volume * 100);

      if (this.audioVolume == 0) {
        this.isMute = true;
      } else {
        this.isMute = false;
      }
    });
  }

  play() {
    //toggle play-pause button
    this.isAudioPlaying = true; //play when user click play button

    setTimeout(() => {
      this.audioPlayer.nativeElement.play();
      this.playEvent.emit();
    }, 0);
  }

  pause() {
    //toggle play-pause button
    this.isAudioPlaying = false; //pause when user click pause button

    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.pauseEvent.emit();
    }, 0);
  }

  getAudioLength() {
    this.totalAudioLength = Math.floor(this.audioPlayer.nativeElement.duration);
  }

}

AudioPlyerOptions.ɵfac = function AudioPlyerOptions_Factory(t) {
  return new (t || AudioPlyerOptions)();
};

AudioPlyerOptions.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AudioPlyerOptions,
  selectors: [["ng-component"]],
  viewQuery: function AudioPlyerOptions_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
    }
  },
  outputs: {
    playEvent: "playEvent",
    pauseEvent: "pauseEvent"
  },
  decls: 0,
  vars: 0,
  template: function AudioPlyerOptions_Template(rf, ctx) {},
  encapsulation: 2
});
AudioPlyerOptions.propDecorators = {
  playEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  pauseEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  audioPlayer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
    args: ['audioPlayer', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioPlyerOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [];
  }, {
    playEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pauseEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    audioPlayer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['audioPlayer', {
        static: true
      }]
    }]
  });
})();

class AngMusicPlayerComponent extends AudioPlyerOptions {
  constructor() {
    super();
    this.audioList = [];
    this.next = true;
    this.previous = true;
    this.shuffle = true;
    this.repeat = true;
    this.scrollTitle = false;
    this.playButtonColor = "rgb(76, 130, 175)";
    this.pauseButtonColor = "rgb(76, 130, 175)";
    this.nextButtonColor = "rgb(76, 130, 175)";
    this.previousButtonColor = "rgb(76, 130, 175)";
    this.repeatButtonColor = "rgb(76, 130, 175)";
    this.activeRepeatButtonColor = "rgb(76, 130, 175)";
    this.volumeButtonColor = "rgb(76, 130, 175)";
    this.muteButtonColor = "rgb(76, 130, 175)";
    this.nextEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.previousEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.repeatEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.shuffleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.seekEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.currentAudioIndex = 0;
    this.repeatActive = false;
    this.isError = false;
    this.isShuffle = false;
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer(); //check audio is ended for next song

    this.isAudioEnded.subscribe(data => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio();
      }
    });
  }

  nextAudio() {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();

      if (this.isAudioPlaying) {
        this.play();
      }

      this.nextEvent.emit();
    } else {
      this.pause();
    }
  }

  previousAudio() {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();

      if (this.isAudioPlaying) {
        this.play();
      }

      this.previousEvent.emit();
    }
  }

  seekAudio(seekAudioValue) {
    if (this.audioVolume != 0) {
      this.isMute = false;
    }

    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
    this.seekEvent.emit();
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
    this.repeatEvent.emit();
  }
  /*   shuffleAudio() {
      this.isShuffle = !this.isShuffle;
      if (this.isShuffle) {
      let randomItem = Math.floor(Math.random() * this.audioList.length);
      console.log(randomItem);
      
      }
      this.shuffleEvent.emit();
    } */


  volumeChange(volume) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex];
    }
  }

}

AngMusicPlayerComponent.ɵfac = function AngMusicPlayerComponent_Factory(t) {
  return new (t || AngMusicPlayerComponent)();
};

AngMusicPlayerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AngMusicPlayerComponent,
  selectors: [["ang-music-player"]],
  inputs: {
    audioList: "audioList",
    next: "next",
    previous: "previous",
    shuffle: "shuffle",
    repeat: "repeat",
    scrollTitle: "scrollTitle",
    playButtonColor: "playButtonColor",
    pauseButtonColor: "pauseButtonColor",
    nextButtonColor: "nextButtonColor",
    previousButtonColor: "previousButtonColor",
    repeatButtonColor: "repeatButtonColor",
    activeRepeatButtonColor: "activeRepeatButtonColor",
    volumeButtonColor: "volumeButtonColor",
    muteButtonColor: "muteButtonColor",
    width: "width",
    height: "height",
    backgroundColor: "backgroundColor",
    audioTimeColor: "audioTimeColor",
    audioTitleColor: "audioTitleColor",
    volumeSliderColor: "volumeSliderColor",
    timeSliderColor: "timeSliderColor"
  },
  outputs: {
    nextEvent: "nextEvent",
    previousEvent: "previousEvent",
    repeatEvent: "repeatEvent",
    shuffleEvent: "shuffleEvent",
    seekEvent: "seekEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 10,
  consts: [["controls", "", 3, "src"], ["audioPlayer", ""], [1, "wrapper", 3, "ngStyle"], ["class", "loader", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "cover", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "loader"], [1, "error"], [1, "cover"], [3, "src"], [1, "container"], [1, "details"], [1, "slidecontainer"], ["type", "range", "id", "myRange", 1, "slider", 3, "max", "value", "ngStyle", "input"], [1, "time-line", 3, "ngStyle"], [3, "ngStyle", 4, "ngIf"], ["class", "title", 3, "ngStyle", 4, "ngIf"], [1, "controls"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click", 4, "ngIf"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 63.98 64.03", 3, "ngStyle", "click", 4, "ngIf"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 65 65.7", 3, "ngStyle", "click", 4, "ngIf"], [1, "volume-container"], ["id", "volume", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click", 4, "ngIf"], ["id", "Capa_1", "data-name", "Capa 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click", 4, "ngIf"], [1, "volume-control"], ["type", "range", "max", "100", "id", "volumeRange", 1, "slider", 3, "value", "ngStyle", "click", "input"], [3, "ngStyle"], [1, "title"], [1, "title", 3, "ngStyle"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click"], ["d", "M13.78,64a1.14,1.14,0,0,1-.8-.3L.26,51.3a1.07,1.07,0,0,1-.1-1.4l.1-.1L13,37.5a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1v7.6H49.72a1.84,1.84,0,0,0,1.8-1.7V35.6a.91.91,0,0,1,.3-.7l8.51-8.3a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1V46c0,6.7-3.6,10.2-10.51,10.2H14.88v6.7a1,1,0,0,1-.7,1A.6.6,0,0,1,13.78,64Z", "transform", "translate(0.05 0)", 1, "cls-1"], ["d", "M3,37.8a.6.6,0,0,1-.4-.1,1.09,1.09,0,0,1-.7-1V18C2,11.3,5.57,7.8,12.48,7.8H49.22V1.1a1.2,1.2,0,0,1,.7-1A.94.94,0,0,1,51,.3L63.64,12.7a1.07,1.07,0,0,1,.1,1.4l-.1.1L51,26.5a1.06,1.06,0,0,1-1.2.2,1.09,1.09,0,0,1-.7-1V18.1H14.38a1.69,1.69,0,0,0-1.7,1.7v8.6a1.14,1.14,0,0,1-.3.8L3.87,37.5A3.18,3.18,0,0,1,3,37.8Z", "transform", "translate(0.05 0)", 1, "cls-1"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 63.98 64.03", 3, "ngStyle", "click"], ["d", "M13.78,64a1.13,1.13,0,0,1-.78-.31L.31,51.34a1,1,0,0,1-.07-1.41l.07-.07L13,37.49a1.09,1.09,0,0,1,1.19-.23,1,1,0,0,1,.66,1v7.63H49.64a1.73,1.73,0,0,0,1.75-1.69V35.59a1,1,0,0,1,.31-.74l8.49-8.28a1.12,1.12,0,0,1,1.18-.23,1.07,1.07,0,0,1,.67,1V46c0,6.68-3.63,10.21-10.51,10.21H14.86V63a1,1,0,0,1-.67,1A1,1,0,0,1,13.78,64Z", "transform", "translate(0.02 0.03)", 1, "cls"], ["d", "M3.05,37.75a1,1,0,0,1-.41-.09,1,1,0,0,1-.67-1V18C2,11.3,5.59,7.78,12.48,7.78H49.15V1.05a1.08,1.08,0,0,1,.67-1A1.1,1.1,0,0,1,51,.29L63.64,12.65a1,1,0,0,1,.07,1.41l-.07.07L51,26.49a1.08,1.08,0,0,1-1.18.23,1,1,0,0,1-.67-1v-7.6H14.36a1.71,1.71,0,0,0-1.72,1.69v8.61a1,1,0,0,1-.32.75l-8.5,8.26A1.06,1.06,0,0,1,3.05,37.75Z", "transform", "translate(0.02 0.03)", 1, "cls"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 65 65.7", 3, "ngStyle", "click"], ["points", "64.5 0.85 7.05 32.85 64.5 64.85 64.5 0.85", 1, "cls-1"], ["x", "0.5", "y", "0.85", "width", "13.52", "height", "64", 1, "cls-1"], ["d", "M21.65,79.51A3.48,3.48,0,0,1,18,76.22V18.79a3.47,3.47,0,0,1,3.64-3.28L80.8,45s2.73,2.47,0,4.93S21.65,79.51,21.65,79.51Z", "transform", "translate(-18.01 -15.51)", 1, "cls-1"], ["id", "pause"], ["d", "M16,82H37.33V18H16ZM58.67,18V82H80V18Z", "transform", "translate(-16 -18)", 1, "cls-1"], ["points", "0 64 57.45 32 0 0 0 64", 1, "cls-1"], ["x", "50.48", "width", "13.52", "height", "64", 1, "cls-1"], ["id", "volume", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click"], ["d", "M2.67,22.39V44.28H16.89L34.67,62.52V4.14L16.89,22.39Zm48,10.94a16.46,16.46,0,0,0-8.89-14.7V48A16.37,16.37,0,0,0,50.67,33.33Zm-8.89-32V8.85A25.49,25.49,0,0,1,59.56,33.33,25.5,25.5,0,0,1,41.78,57.82v7.51a32.65,32.65,0,0,0,24.89-32A32.66,32.66,0,0,0,41.78,1.33Z", "transform", "translate(-2.67 -1.33)", 1, "cls-1"], ["d", "M22.67,21.33h24v24h-24Z", "transform", "translate(-2.67 -1.33)", 1, "cls-2"], ["id", "Capa_1", "data-name", "Capa 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click"], ["id", "volume-off"], ["d", "M59,39.83a15.35,15.35,0,0,0-8.89-14.14v7.78L59,42.31Zm8.89,0A26.37,26.37,0,0,1,66.12,49l5.34,5.3A29.71,29.71,0,0,0,75,39.48,31.94,31.94,0,0,0,50.12,8.36v7.43C60.43,19.33,67.9,28.52,67.9,39.83ZM15.63,8,11,12.61,27.72,29.23H11V50.44H25.23L43,68.12V44.43L58.3,59.64a30,30,0,0,1-8.18,4.24V71.3a30.44,30.44,0,0,0,13.16-6.36L70.39,72,75,67.41,43,35.59ZM43,11.55,35.54,19,43,26.4Z", "transform", "translate(-11.01 -8.01)", 1, "cls-1"]],
  template: function AngMusicPlayerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngMusicPlayerComponent_div_3_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngMusicPlayerComponent_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngMusicPlayerComponent_div_5_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngMusicPlayerComponent_div_6_Template, 25, 28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedAudio == null ? null : ctx.selectedAudio.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c4, ctx.backgroundColor, ctx.width, ctx.height));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAudioLoaded && !ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedAudio == null ? null : ctx.selectedAudio.cover) && ctx.isAudioLoaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAudioLoaded);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, TimeConversionPipe];
  },
  styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");audio[_ngcontent-%COMP%]{display:none}.wrapper[_ngcontent-%COMP%]{align-items:center;background:#000;border-radius:15px;display:flex;font-family:Raleway,sans-serif;height:130px;width:500px}.wrapper[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;margin-left:10px;max-height:100px;max-width:100px}.wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{color:#fff}.wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{margin:0 auto;position:relative;text-align:center}.wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#ff3737}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:5px;width:100%}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{text-align:center}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#4c82af;margin:7px 0 15px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-basis:auto;flex-direction:row;flex-wrap:wrap;justify-content:space-around;margin-top:8px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{cursor:pointer;height:25px;margin:0 20px;width:25px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .volume-container[_ngcontent-%COMP%]{position:relative}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .volume-container[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]{display:none;height:32px;left:-9px;position:absolute;top:-62px;transform:rotate(270deg);width:90px;z-index:1000}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .volume-container[_ngcontent-%COMP%]:hover   .volume-control[_ngcontent-%COMP%]{display:block}.slidecontainer[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;width:100%}.slidecontainer[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]{color:#4c82af;display:flex;justify-content:space-between;margin:7px 0 2px;width:87%}.slider[_ngcontent-%COMP%]{-webkit-appearance:none;background:#fff;border-radius:5px;height:2px;opacity:1;outline:none;transition:opacity .2s;width:87%;z-index:1000}.slider[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}.slider[_ngcontent-%COMP%]::-moz-range-thumb{background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}"]
});

AngMusicPlayerComponent.ctorParameters = () => [];

AngMusicPlayerComponent.propDecorators = {
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  height: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  audioTimeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  audioTitleColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  volumeSliderColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  timeSliderColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  audioList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  next: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previous: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  shuffle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  repeat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  scrollTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  playButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  pauseButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  nextButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previousButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  repeatButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  activeRepeatButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  volumeButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  muteButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  nextEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  previousEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  repeatEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  shuffleEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  seekEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngMusicPlayerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ang-music-player',
      template: "<audio controls #audioPlayer [src]=\"selectedAudio?.url\"> </audio>\r\n\r\n<div class=\"wrapper\" [ngStyle]=\"{ 'background-color': backgroundColor , 'width': width, 'height': height }\">\r\n\r\n  <!-- loader and error -->\r\n  <div class=\"loader\" *ngIf=\"!isAudioLoaded && !isError\"> Loading....</div>\r\n  <div class=\"error\" *ngIf=\"isError\">No audio Found !</div>\r\n\r\n  <div *ngIf=\"selectedAudio?.cover && isAudioLoaded\" class=\"cover\">\r\n    <img [src]=\"selectedAudio?.cover\">\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"isAudioLoaded\">\r\n    <div class=\"details\">\r\n      <div class=\"slidecontainer\">\r\n        <input type=\"range\" max=\"{{totalAudioLength}}\" value=\"{{currentAudioTime}}\"\r\n          [ngStyle]=\"{ 'background': timeSliderColor }\" (input)=\"seekAudio($event)\" class=\"slider\" id=\"myRange\">\r\n        <div class=\"time-line\" [ngStyle]=\"{ 'color' : audioTimeColor }\">\r\n          <div>{{ currentAudioTime | timeConversion}}</div>\r\n          <div>{{ totalAudioLength | timeConversion}}</div>\r\n        </div>\r\n      </div>\r\n      <marquee *ngIf=\"scrollTitle\" [ngStyle]=\"{ 'color' : audioTitleColor }\">\r\n        <p class=\"title\"> {{selectedAudio?.title}}</p>\r\n      </marquee>\r\n      <p class=\"title\" [ngStyle]=\"{ 'color' : audioTitleColor }\" *ngIf=\"!scrollTitle\"> {{selectedAudio?.title}}</p>\r\n    </div>\r\n    <div class=\"controls\">\r\n\r\n      <!-- repeat button starts -->\r\n      <!-- not active -->\r\n      <svg id=\"Layer_1\" *ngIf=\"repeat && !isRepeat\" (click)=\"repeatAudio()\" data-name=\"Layer 1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : repeatButtonColor }\">\r\n        <title>repeat-on</title>\r\n        <path class=\"cls-1\"\r\n          d=\"M13.78,64a1.14,1.14,0,0,1-.8-.3L.26,51.3a1.07,1.07,0,0,1-.1-1.4l.1-.1L13,37.5a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1v7.6H49.72a1.84,1.84,0,0,0,1.8-1.7V35.6a.91.91,0,0,1,.3-.7l8.51-8.3a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1V46c0,6.7-3.6,10.2-10.51,10.2H14.88v6.7a1,1,0,0,1-.7,1A.6.6,0,0,1,13.78,64Z\"\r\n          transform=\"translate(0.05 0)\" />\r\n        <path class=\"cls-1\"\r\n          d=\"M3,37.8a.6.6,0,0,1-.4-.1,1.09,1.09,0,0,1-.7-1V18C2,11.3,5.57,7.8,12.48,7.8H49.22V1.1a1.2,1.2,0,0,1,.7-1A.94.94,0,0,1,51,.3L63.64,12.7a1.07,1.07,0,0,1,.1,1.4l-.1.1L51,26.5a1.06,1.06,0,0,1-1.2.2,1.09,1.09,0,0,1-.7-1V18.1H14.38a1.69,1.69,0,0,0-1.7,1.7v8.6a1.14,1.14,0,0,1-.3.8L3.87,37.5A3.18,3.18,0,0,1,3,37.8Z\"\r\n          transform=\"translate(0.05 0)\" />\r\n      </svg>\r\n\r\n      <!-- active -->\r\n      <svg id=\"Layer_1\" *ngIf=\"repeat && isRepeat\" (click)=\"repeatAudio()\" data-name=\"Layer 1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 63.98 64.03\" [ngStyle]=\"{ 'fill' : activeRepeatButtonColor }\">\r\n        <style>\r\n          .cls{\r\n            fill: green\r\n          }\r\n        </style>\r\n        <title>repeat-off</title>\r\n        <path class=\"cls\"\r\n          d=\"M13.78,64a1.13,1.13,0,0,1-.78-.31L.31,51.34a1,1,0,0,1-.07-1.41l.07-.07L13,37.49a1.09,1.09,0,0,1,1.19-.23,1,1,0,0,1,.66,1v7.63H49.64a1.73,1.73,0,0,0,1.75-1.69V35.59a1,1,0,0,1,.31-.74l8.49-8.28a1.12,1.12,0,0,1,1.18-.23,1.07,1.07,0,0,1,.67,1V46c0,6.68-3.63,10.21-10.51,10.21H14.86V63a1,1,0,0,1-.67,1A1,1,0,0,1,13.78,64Z\"\r\n          transform=\"translate(0.02 0.03)\" />\r\n        <path class=\"cls\"\r\n          d=\"M3.05,37.75a1,1,0,0,1-.41-.09,1,1,0,0,1-.67-1V18C2,11.3,5.59,7.78,12.48,7.78H49.15V1.05a1.08,1.08,0,0,1,.67-1A1.1,1.1,0,0,1,51,.29L63.64,12.65a1,1,0,0,1,.07,1.41l-.07.07L51,26.49a1.08,1.08,0,0,1-1.18.23,1,1,0,0,1-.67-1v-7.6H14.36a1.71,1.71,0,0,0-1.72,1.69v8.61a1,1,0,0,1-.32.75l-8.5,8.26A1.06,1.06,0,0,1,3.05,37.75Z\"\r\n          transform=\"translate(0.02 0.03)\" />\r\n      </svg>\r\n      <!-- repeat active ends -->\r\n\r\n      <!-- previous button starts -->\r\n      <svg id=\"Layer_1\" *ngIf=\"previous\" (click)=\"previousAudio()\" data-name=\"Layer 1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 65 65.7\" [ngStyle]=\"{ 'fill' : previousButtonColor }\">\r\n        <title>previous</title>\r\n        <polygon class=\"cls-1\" points=\"64.5 0.85 7.05 32.85 64.5 64.85 64.5 0.85\" />\r\n        <rect class=\"cls-1\" x=\"0.5\" y=\"0.85\" width=\"13.52\" height=\"64\" />\r\n      </svg>\r\n      <!-- previous button ends -->\r\n\r\n      <!-- play button starts -->\r\n      <svg id=\"Layer_1\" (click)=\"play()\" *ngIf=\"!isAudioPlaying\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : playButtonColor }\">\r\n        <title>play</title>\r\n        <path class=\"cls-1\"\r\n          d=\"M21.65,79.51A3.48,3.48,0,0,1,18,76.22V18.79a3.47,3.47,0,0,1,3.64-3.28L80.8,45s2.73,2.47,0,4.93S21.65,79.51,21.65,79.51Z\"\r\n          transform=\"translate(-18.01 -15.51)\" />\r\n      </svg>\r\n      <!-- play button ends -->\r\n\r\n      <!-- pause button starts -->\r\n      <svg id=\"Layer_1\" (click)=\"pause()\" *ngIf=\"isAudioPlaying\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : pauseButtonColor }\">\r\n        <title>pause</title>\r\n        <g id=\"pause\">\r\n          <path class=\"cls-1\" d=\"M16,82H37.33V18H16ZM58.67,18V82H80V18Z\" transform=\"translate(-16 -18)\" />\r\n        </g>\r\n      </svg>\r\n      <!-- pause button ends -->\r\n\r\n      <!-- next button starts -->\r\n      <svg id=\"Layer_1\" *ngIf=\"next\" (click)=\"nextAudio()\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : nextButtonColor }\">\r\n        <title>next</title>\r\n        <polygon class=\"cls-1\" points=\"0 64 57.45 32 0 0 0 64\" />\r\n        <rect class=\"cls-1\" x=\"50.48\" width=\"13.52\" height=\"64\" />\r\n      </svg>\r\n      <!-- next button ends -->\r\n\r\n      <!-- <div class=\"shuffle\" *ngIf=\"shuffle\" [ngClass]=\"{'shuffle-active': isShuffle}\" (click)=\"shuffleAudio()\"></div> -->\r\n\r\n      <!-- volume button starts -->\r\n      <div class=\"volume-container\">\r\n        <!-- with volume -->\r\n        <svg id=\"volume\" *ngIf=\"!isMute\" (click)=\"muteAudio()\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n          viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : pauseButtonColor }\">\r\n          <defs>\r\n            <style>\r\n              .cls-2 {\r\n                fill: none;\r\n              }\r\n\r\n            </style>\r\n          </defs>\r\n          <title>volume-high</title>\r\n          <path class=\"cls-1\"\r\n            d=\"M2.67,22.39V44.28H16.89L34.67,62.52V4.14L16.89,22.39Zm48,10.94a16.46,16.46,0,0,0-8.89-14.7V48A16.37,16.37,0,0,0,50.67,33.33Zm-8.89-32V8.85A25.49,25.49,0,0,1,59.56,33.33,25.5,25.5,0,0,1,41.78,57.82v7.51a32.65,32.65,0,0,0,24.89-32A32.66,32.66,0,0,0,41.78,1.33Z\"\r\n            transform=\"translate(-2.67 -1.33)\" />\r\n          <path class=\"cls-2\" d=\"M22.67,21.33h24v24h-24Z\" transform=\"translate(-2.67 -1.33)\" />\r\n        </svg>\r\n\r\n        <!-- mute -->\r\n        <svg id=\"Capa_1\" *ngIf=\"isMute\" (click)=\"muteAudio()\" data-name=\"Capa 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n          viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : muteButtonColor }\">\r\n          <title>mute</title>\r\n          <g id=\"volume-off\">\r\n            <path class=\"cls-1\"\r\n              d=\"M59,39.83a15.35,15.35,0,0,0-8.89-14.14v7.78L59,42.31Zm8.89,0A26.37,26.37,0,0,1,66.12,49l5.34,5.3A29.71,29.71,0,0,0,75,39.48,31.94,31.94,0,0,0,50.12,8.36v7.43C60.43,19.33,67.9,28.52,67.9,39.83ZM15.63,8,11,12.61,27.72,29.23H11V50.44H25.23L43,68.12V44.43L58.3,59.64a30,30,0,0,1-8.18,4.24V71.3a30.44,30.44,0,0,0,13.16-6.36L70.39,72,75,67.41,43,35.59ZM43,11.55,35.54,19,43,26.4Z\"\r\n              transform=\"translate(-11.01 -8.01)\" />\r\n          </g>\r\n        </svg>\r\n\r\n        <!-- volume button ends -->\r\n        <div class=\"volume-control\">\r\n          <input type=\"range\" max=\"100\" value=\"{{audioVolume}}\" (click)=\"$event.stopPropagation();\"\r\n            (input)=\"volumeChange($event)\" [ngStyle]=\"{ 'background': volumeSliderColor }\" class=\"slider\"\r\n            id=\"volumeRange\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n",
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");audio{display:none}.wrapper{align-items:center;background:#000;border-radius:15px;display:flex;font-family:Raleway,sans-serif;height:130px;width:500px}.wrapper .cover img{border-radius:50%;margin-left:10px;max-height:100px;max-width:100px}.wrapper .loader{color:#fff}.wrapper .error,.wrapper .loader{margin:0 auto;position:relative;text-align:center}.wrapper .error{color:#ff3737}.wrapper .container{padding:5px;width:100%}.wrapper .container .details{text-align:center}.wrapper .container .details .title{color:#4c82af;margin:7px 0 15px}.wrapper .container .controls{display:flex;flex-basis:auto;flex-direction:row;flex-wrap:wrap;justify-content:space-around;margin-top:8px}.wrapper .container .controls svg{cursor:pointer;height:25px;margin:0 20px;width:25px}.wrapper .container .volume-container{position:relative}.wrapper .container .volume-container .volume-control{display:none;height:32px;left:-9px;position:absolute;top:-62px;transform:rotate(270deg);width:90px;z-index:1000}.wrapper .container .volume-container:hover .volume-control{display:block}.slidecontainer{align-items:center;display:flex;flex-direction:column;width:100%}.slidecontainer .time-line{color:#4c82af;display:flex;justify-content:space-between;margin:7px 0 2px;width:87%}.slider{-webkit-appearance:none;background:#fff;border-radius:5px;height:2px;opacity:1;outline:none;transition:opacity .2s;width:87%;z-index:1000}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}.slider::-moz-range-thumb{background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}"]
    }]
  }], function () {
    return [];
  }, {
    audioList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    next: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previous: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shuffle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    repeat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    playButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    repeatButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeRepeatButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    volumeButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    muteButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    previousEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    repeatEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    shuffleEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    seekEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    audioTimeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    audioTitleColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    volumeSliderColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    timeSliderColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class TimeConversionPipe {
  transform(audioTime) {
    let audioLengthMin = ("0" + Math.floor(audioTime / 60)).slice(-2);
    let audioLengthSec = ("0" + audioTime % 60).slice(-2);
    return `${audioLengthMin}:${audioLengthSec}`;
  }

}

TimeConversionPipe.ɵfac = function TimeConversionPipe_Factory(t) {
  return new (t || TimeConversionPipe)();
};

TimeConversionPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "timeConversion",
  type: TimeConversionPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeConversionPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'timeConversion'
    }]
  }], null, null);
})();

class AngMusicPlayerModule {}

AngMusicPlayerModule.ɵfac = function AngMusicPlayerModule_Factory(t) {
  return new (t || AngMusicPlayerModule)();
};

AngMusicPlayerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AngMusicPlayerModule
});
AngMusicPlayerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngMusicPlayerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [AngMusicPlayerComponent, TimeConversionPipe],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [AngMusicPlayerComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngMusicPlayerModule, {
    declarations: function () {
      return [AngMusicPlayerComponent, TimeConversionPipe];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [AngMusicPlayerComponent];
    }
  });
})();
/*
 * Public API Surface of ang-music-player
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4370:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEventPattern.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEventPattern": () => (/* binding */ fromEventPattern)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ 2971);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);



function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_0__.mapOneOrManyArgs)(resultSelector));
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);

    const retValue = addHandler(handler);
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(removeHandler) ? () => removeHandler(handler, retValue) : undefined;
  });
}

/***/ }),

/***/ 6757:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromSubscribable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromSubscribable": () => (/* binding */ fromSubscribable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 833);

function fromSubscribable(subscribable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscribable.subscribe(subscriber));
}

/***/ }),

/***/ 3351:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 6562);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 5330);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 629);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 420);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 2101:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/connect.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 228);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _observable_fromSubscribable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/fromSubscribable */ 6757);




const DEFAULT_CONFIG = {
  connector: () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject()
};
function connect(selector, config = DEFAULT_CONFIG) {
  const {
    connector
  } = config;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    const subject = connector();
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(selector((0,_observable_fromSubscribable__WEBPACK_IMPORTED_MODULE_3__.fromSubscribable)(subject))).subscribe(subscriber);
    subscriber.add(source.subscribe(subject));
  });
}

/***/ }),

/***/ 8532:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/multicast.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multicast": () => (/* binding */ multicast)
/* harmony export */ });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/ConnectableObservable */ 3932);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 2971);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ 2101);



function multicast(subjectOrSubjectFactory, selector) {
  const subjectFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(subjectOrSubjectFactory) ? subjectOrSubjectFactory : () => subjectOrSubjectFactory;

  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(selector)) {
    return (0,_connect__WEBPACK_IMPORTED_MODULE_1__.connect)(selector, {
      connector: subjectFactory
    });
  }

  return source => new _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_2__.ConnectableObservable(source, subjectFactory);
}

/***/ }),

/***/ 2123:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/publish.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subject */ 228);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ 8532);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ 2101);



function publish(selector) {
  return selector ? source => (0,_connect__WEBPACK_IMPORTED_MODULE_0__.connect)(selector)(source) : source => (0,_multicast__WEBPACK_IMPORTED_MODULE_1__.multicast)(new _Subject__WEBPACK_IMPORTED_MODULE_2__.Subject())(source);
}

/***/ }),

/***/ 4055:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skipWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skipWhile": () => (/* binding */ skipWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);


function skipWhile(predicate) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let taking = false;
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (taking || (taking = !predicate(value, index++))) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 538:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withLatestFrom": () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/identity */ 9173);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/noop */ 9635);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 420);






function withLatestFrom(...inputs) {
  const project = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(inputs);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    const len = inputs.length;
    const otherValues = new Array(len);
    let hasValue = inputs.map(() => false);
    let ready = false;

    for (let i = 0; i < len; i++) {
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(inputs[i]).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
        otherValues[i] = value;

        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__.identity)) && (hasValue = null);
        }
      }, _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop));
    }

    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
      if (ready) {
        const values = [value, ...otherValues];
        subscriber.next(project ? project(...values) : values);
      }
    }));
  });
}

/***/ }),

/***/ 5330:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsOrArgArray": () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const {
  isArray
} = Array;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

/***/ }),

/***/ 2163:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/youtube-player/fesm2020/youtube-player.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YouTubePlayer": () => (/* binding */ YouTubePlayer),
/* harmony export */   "YouTubePlayerModule": () => (/* binding */ YouTubePlayerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4370);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2123);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 4503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 3351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 4055);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 116);




 /// <reference types="youtube" />

const _c0 = ["youtubeContainer"];
const DEFAULT_PLAYER_WIDTH = 640;
const DEFAULT_PLAYER_HEIGHT = 390;
/**
 * Angular component that renders a YouTube player via the YouTube player
 * iframe API.
 * @see https://developers.google.com/youtube/iframe_api_reference
 */

class YouTubePlayer {
  constructor(_ngZone, platformId) {
    this._ngZone = _ngZone;
    this._youtubeContainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._playerChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._videoId = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._height = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(DEFAULT_PLAYER_HEIGHT);
    this._width = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(DEFAULT_PLAYER_WIDTH);
    this._startSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._endSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._suggestedQuality = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._playerVars = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    /** Outputs are direct proxies from the player itself. */

    this.ready = this._getLazyEmitter('onReady');
    this.stateChange = this._getLazyEmitter('onStateChange');
    this.error = this._getLazyEmitter('onError');
    this.apiChange = this._getLazyEmitter('onApiChange');
    this.playbackQualityChange = this._getLazyEmitter('onPlaybackQualityChange');
    this.playbackRateChange = this._getLazyEmitter('onPlaybackRateChange');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(platformId);
  }
  /** YouTube Video ID to view */


  get videoId() {
    return this._videoId.value;
  }

  set videoId(videoId) {
    this._videoId.next(videoId);
  }
  /** Height of video player */


  get height() {
    return this._height.value;
  }

  set height(height) {
    this._height.next(height || DEFAULT_PLAYER_HEIGHT);
  }
  /** Width of video player */


  get width() {
    return this._width.value;
  }

  set width(width) {
    this._width.next(width || DEFAULT_PLAYER_WIDTH);
  }
  /** The moment when the player is supposed to start playing */


  set startSeconds(startSeconds) {
    this._startSeconds.next(startSeconds);
  }
  /** The moment when the player is supposed to stop playing */


  set endSeconds(endSeconds) {
    this._endSeconds.next(endSeconds);
  }
  /** The suggested quality of the player */


  set suggestedQuality(suggestedQuality) {
    this._suggestedQuality.next(suggestedQuality);
  }
  /**
   * Extra parameters used to configure the player. See:
   * https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5#Parameters
   */


  get playerVars() {
    return this._playerVars.value;
  }

  set playerVars(playerVars) {
    this._playerVars.next(playerVars);
  }

  ngOnInit() {
    // Don't do anything if we're not in a browser environment.
    if (!this._isBrowser) {
      return;
    }

    let iframeApiAvailableObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);

    if (!window.YT || !window.YT.Player) {
      if (this.showBeforeIframeApiLoads && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('Namespace YT not found, cannot construct embedded youtube player. ' + 'Please install the YouTube Player API Reference for iframe Embeds: ' + 'https://developers.google.com/youtube/iframe_api_reference');
      }

      const iframeApiAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (this._existingApiReadyCallback) {
          this._existingApiReadyCallback();
        }

        this._ngZone.run(() => iframeApiAvailableSubject.next(true));
      };

      iframeApiAvailableObs = iframeApiAvailableSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(false));
    } // An observable of the currently loaded player.


    const playerObs = createPlayerObservable(this._youtubeContainer, this._videoId, iframeApiAvailableObs, this._width, this._height, this._playerVars, this._ngZone).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(player => {
      // Emit this before the `waitUntilReady` call so that we can bind to
      // events that happen as the player is being initialized (e.g. `onReady`).
      this._playerChanges.next(player);
    }), waitUntilReady(player => {
      // Destroy the player if loading was aborted so that we don't end up leaking memory.
      if (!playerIsReady(player)) {
        player.destroy();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.publish)()); // Set up side effects to bind inputs to the player.

    playerObs.subscribe(player => {
      this._player = player;

      if (player && this._pendingPlayerState) {
        this._initializePlayer(player, this._pendingPlayerState);
      }

      this._pendingPlayerState = undefined;
    });
    bindSizeToPlayer(playerObs, this._width, this._height);
    bindSuggestedQualityToPlayer(playerObs, this._suggestedQuality);
    bindCueVideoCall(playerObs, this._videoId, this._startSeconds, this._endSeconds, this._suggestedQuality, this._destroyed); // After all of the subscriptions are set up, connect the observable.

    playerObs.connect();
  }

  ngAfterViewInit() {
    this._youtubeContainer.next(this.youtubeContainer.nativeElement);
  }

  ngOnDestroy() {
    if (this._player) {
      this._player.destroy();

      window.onYouTubeIframeAPIReady = this._existingApiReadyCallback;
    }

    this._playerChanges.complete();

    this._videoId.complete();

    this._height.complete();

    this._width.complete();

    this._startSeconds.complete();

    this._endSeconds.complete();

    this._suggestedQuality.complete();

    this._youtubeContainer.complete();

    this._playerVars.complete();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#playVideo */


  playVideo() {
    if (this._player) {
      this._player.playVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PLAYING;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#pauseVideo */


  pauseVideo() {
    if (this._player) {
      this._player.pauseVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PAUSED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#stopVideo */


  stopVideo() {
    if (this._player) {
      this._player.stopVideo();
    } else {
      // It seems like YouTube sets the player to CUED when it's stopped.
      this._getPendingState().playbackState = YT.PlayerState.CUED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#seekTo */


  seekTo(seconds, allowSeekAhead) {
    if (this._player) {
      this._player.seekTo(seconds, allowSeekAhead);
    } else {
      this._getPendingState().seek = {
        seconds,
        allowSeekAhead
      };
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#mute */


  mute() {
    if (this._player) {
      this._player.mute();
    } else {
      this._getPendingState().muted = true;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#unMute */


  unMute() {
    if (this._player) {
      this._player.unMute();
    } else {
      this._getPendingState().muted = false;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#isMuted */


  isMuted() {
    if (this._player) {
      return this._player.isMuted();
    }

    if (this._pendingPlayerState) {
      return !!this._pendingPlayerState.muted;
    }

    return false;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setVolume */


  setVolume(volume) {
    if (this._player) {
      this._player.setVolume(volume);
    } else {
      this._getPendingState().volume = volume;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVolume */


  getVolume() {
    if (this._player) {
      return this._player.getVolume();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.volume != null) {
      return this._pendingPlayerState.volume;
    }

    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate */


  setPlaybackRate(playbackRate) {
    if (this._player) {
      return this._player.setPlaybackRate(playbackRate);
    } else {
      this._getPendingState().playbackRate = playbackRate;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackRate */


  getPlaybackRate() {
    if (this._player) {
      return this._player.getPlaybackRate();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.playbackRate != null) {
      return this._pendingPlayerState.playbackRate;
    }

    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailablePlaybackRates */


  getAvailablePlaybackRates() {
    return this._player ? this._player.getAvailablePlaybackRates() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoLoadedFraction */


  getVideoLoadedFraction() {
    return this._player ? this._player.getVideoLoadedFraction() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlayerState */


  getPlayerState() {
    if (!this._isBrowser || !window.YT) {
      return undefined;
    }

    if (this._player) {
      return this._player.getPlayerState();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.playbackState != null) {
      return this._pendingPlayerState.playbackState;
    }

    return YT.PlayerState.UNSTARTED;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getCurrentTime */


  getCurrentTime() {
    if (this._player) {
      return this._player.getCurrentTime();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.seek) {
      return this._pendingPlayerState.seek.seconds;
    }

    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackQuality */


  getPlaybackQuality() {
    return this._player ? this._player.getPlaybackQuality() : 'default';
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailableQualityLevels */


  getAvailableQualityLevels() {
    return this._player ? this._player.getAvailableQualityLevels() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getDuration */


  getDuration() {
    return this._player ? this._player.getDuration() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoUrl */


  getVideoUrl() {
    return this._player ? this._player.getVideoUrl() : '';
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoEmbedCode */


  getVideoEmbedCode() {
    return this._player ? this._player.getVideoEmbedCode() : '';
  }
  /** Gets an object that should be used to store the temporary API state. */


  _getPendingState() {
    if (!this._pendingPlayerState) {
      this._pendingPlayerState = {};
    }

    return this._pendingPlayerState;
  }
  /** Initializes a player from a temporary state. */


  _initializePlayer(player, state) {
    const {
      playbackState,
      playbackRate,
      volume,
      muted,
      seek
    } = state;

    switch (playbackState) {
      case YT.PlayerState.PLAYING:
        player.playVideo();
        break;

      case YT.PlayerState.PAUSED:
        player.pauseVideo();
        break;

      case YT.PlayerState.CUED:
        player.stopVideo();
        break;
    }

    if (playbackRate != null) {
      player.setPlaybackRate(playbackRate);
    }

    if (volume != null) {
      player.setVolume(volume);
    }

    if (muted != null) {
      muted ? player.mute() : player.unMute();
    }

    if (seek != null) {
      player.seekTo(seek.seconds, seek.allowSeekAhead);
    }
  }
  /** Gets an observable that adds an event listener to the player when a user subscribes to it. */


  _getLazyEmitter(name) {
    // Start with the stream of players. This way the events will be transferred
    // over to the new player if it gets swapped out under-the-hood.
    return this._playerChanges.pipe( // Switch to the bound event. `switchMap` ensures that the old event is removed when the
    // player is changed. If there's no player, return an observable that never emits.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(player => {
      return player ? (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEventPattern)(listener => {
        player.addEventListener(name, listener);
      }, listener => {
        // The API seems to throw when we try to unbind from a destroyed player and it doesn't
        // expose whether the player has been destroyed so we have to wrap it in a try/catch to
        // prevent the entire stream from erroring out.
        try {
          if (player.removeEventListener) {
            player.removeEventListener(name, listener);
          }
        } catch {}
      }) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
    }), // By default we run all the API interactions outside the zone
    // so we have to bring the events back in manually when they emit.
    source => new rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable(observer => source.subscribe({
      next: value => this._ngZone.run(() => observer.next(value)),
      error: error => observer.error(error),
      complete: () => observer.complete()
    })), // Ensures that everything is cleared out on destroy.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed));
  }

}

YouTubePlayer.ɵfac = function YouTubePlayer_Factory(t) {
  return new (t || YouTubePlayer)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID));
};

YouTubePlayer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: YouTubePlayer,
  selectors: [["youtube-player"]],
  viewQuery: function YouTubePlayer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.youtubeContainer = _t.first);
    }
  },
  inputs: {
    videoId: "videoId",
    height: "height",
    width: "width",
    startSeconds: "startSeconds",
    endSeconds: "endSeconds",
    suggestedQuality: "suggestedQuality",
    playerVars: "playerVars",
    showBeforeIframeApiLoads: "showBeforeIframeApiLoads"
  },
  outputs: {
    ready: "ready",
    stateChange: "stateChange",
    error: "error",
    apiChange: "apiChange",
    playbackQualityChange: "playbackQualityChange",
    playbackRateChange: "playbackRateChange"
  },
  decls: 2,
  vars: 0,
  consts: [["youtubeContainer", ""]],
  template: function YouTubePlayer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](YouTubePlayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component,
    args: [{
      selector: 'youtube-player',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewEncapsulation.None,
      // This div is *replaced* by the YouTube player embed.
      template: '<div #youtubeContainer></div>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID]
      }]
    }];
  }, {
    videoId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    startSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    endSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    suggestedQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    playerVars: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    showBeforeIframeApiLoads: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    stateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    apiChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    playbackQualityChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    playbackRateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    youtubeContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: ['youtubeContainer']
    }]
  });
})();
/** Listens to changes to the given width and height and sets it on the player. */


function bindSizeToPlayer(playerObs, widthObs, heightObs) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([playerObs, widthObs, heightObs]).subscribe(([player, width, height]) => player && player.setSize(width, height));
}
/** Listens to changes from the suggested quality and sets it on the given player. */


function bindSuggestedQualityToPlayer(playerObs, suggestedQualityObs) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([playerObs, suggestedQualityObs]).subscribe(([player, suggestedQuality]) => player && suggestedQuality && player.setPlaybackQuality(suggestedQuality));
}
/**
 * Returns an observable that emits the loaded player once it's ready. Certain properties/methods
 * won't be available until the iframe finishes loading.
 * @param onAbort Callback function that will be invoked if the player loading was aborted before
 * it was able to complete. Can be used to clean up any loose references.
 */


function waitUntilReady(onAbort) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(player => {
    if (!player) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    }

    if (playerIsReady(player)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(player);
    } // Since removeEventListener is not on Player when it's initialized, we can't use fromEvent.
    // The player is not initialized fully until the ready is called.


    return new rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable(emitter => {
      let aborted = false;
      let resolved = false;

      const onReady = event => {
        resolved = true;

        if (!aborted) {
          event.target.removeEventListener('onReady', onReady);
          emitter.next(event.target);
        }
      };

      player.addEventListener('onReady', onReady);
      return () => {
        aborted = true;

        if (!resolved) {
          onAbort(player);
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(undefined));
  });
}
/** Create an observable for the player based on the given options. */


function createPlayerObservable(youtubeContainer, videoIdObs, iframeApiAvailableObs, widthObs, heightObs, playerVarsObs, ngZone) {
  const playerOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([videoIdObs, playerVarsObs]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([widthObs, heightObs])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([constructorOptions, sizeOptions]) => {
    const [videoId, playerVars] = constructorOptions;
    const [width, height] = sizeOptions;
    return videoId ? {
      videoId,
      playerVars,
      width,
      height
    } : undefined;
  }));
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([youtubeContainer, playerOptions, (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(ngZone)]).pipe(skipUntilRememberLatest(iframeApiAvailableObs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.scan)(syncPlayerState, undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)());
}
/** Skips the given observable until the other observable emits true, then emit the latest. */


function skipUntilRememberLatest(notifier) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.combineLatest)(notifier), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skipWhile)(([_, doneSkipping]) => !doneSkipping), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([value]) => value));
}
/** Destroy the player if there are no options, or create the player if there are options. */


function syncPlayerState(player, [container, videoOptions, ngZone]) {
  if (player && videoOptions && player.playerVars !== videoOptions.playerVars) {
    // The player needs to be recreated if the playerVars are different.
    player.destroy();
  } else if (!videoOptions) {
    if (player) {
      // Destroy the player if the videoId was removed.
      player.destroy();
    }

    return;
  } else if (player) {
    return player;
  } // Important! We need to create the Player object outside of the `NgZone`, because it kicks
  // off a 250ms setInterval which will continually trigger change detection if we don't.


  const newPlayer = ngZone.runOutsideAngular(() => new YT.Player(container, videoOptions));
  newPlayer.videoId = videoOptions.videoId;
  newPlayer.playerVars = videoOptions.playerVars;
  return newPlayer;
}
/**
 * Call cueVideoById if the videoId changes, or when start or end seconds change. cueVideoById will
 * change the loaded video id to the given videoId, and set the start and end times to the given
 * start/end seconds.
 */


function bindCueVideoCall(playerObs, videoIdObs, startSecondsObs, endSecondsObs, suggestedQualityObs, destroyed) {
  const cueOptionsObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([startSecondsObs, endSecondsObs]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([startSeconds, endSeconds]) => ({
    startSeconds,
    endSeconds
  }))); // Only respond to changes in cue options if the player is not running.

  const filteredCueOptions = cueOptionsObs.pipe(filterOnOther(playerObs, player => !!player && !hasPlayerStarted(player))); // If the video id changed, there's no reason to run 'cue' unless the player
  // was initialized with a different video id.

  const changedVideoId = videoIdObs.pipe(filterOnOther(playerObs, (player, videoId) => !!player && player.videoId !== videoId)); // If the player changed, there's no reason to run 'cue' unless there are cue options.

  const changedPlayer = playerObs.pipe(filterOnOther((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([videoIdObs, cueOptionsObs]), ([videoId, cueOptions], player) => !!player && (videoId != player.videoId || !!cueOptions.startSeconds || !!cueOptions.endSeconds)));
  (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(changedPlayer, changedVideoId, filteredCueOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([playerObs, videoIdObs, cueOptionsObs, suggestedQualityObs])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([_, values]) => values), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(destroyed)).subscribe(([player, videoId, cueOptions, suggestedQuality]) => {
    if (!videoId || !player) {
      return;
    }

    player.videoId = videoId;
    player.cueVideoById({
      videoId,
      suggestedQuality,
      ...cueOptions
    });
  });
}

function hasPlayerStarted(player) {
  const state = player.getPlayerState();
  return state !== YT.PlayerState.UNSTARTED && state !== YT.PlayerState.CUED;
}

function playerIsReady(player) {
  return 'getPlayerStatus' in player;
}
/** Combines the two observables temporarily for the filter function. */


function filterOnOther(otherObs, filterFn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)(otherObs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(([value, other]) => filterFn(other, value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([value]) => value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const COMPONENTS = [YouTubePlayer];

class YouTubePlayerModule {}

YouTubePlayerModule.ɵfac = function YouTubePlayerModule_Factory(t) {
  return new (t || YouTubePlayerModule)();
};

YouTubePlayerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: YouTubePlayerModule
});
YouTubePlayerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](YouTubePlayerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_features_personal_personal_module_ts.js.map