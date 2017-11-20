webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__launcher_launcher_component__ = __webpack_require__("../../../../../src/app/launcher/launcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kb02_kb02_component__ = __webpack_require__("../../../../../src/app/kb02/kb02.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_report_log_report_component__ = __webpack_require__("../../../../../src/app/log-report/log-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_report_report_component__ = __webpack_require__("../../../../../src/app/report-report/report-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kb02_kb02_1_kb02_1_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-1/kb02-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kb02_kb02_3_kb02_3_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-3/kb02-3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: '/lch', pathMatch: 'full'
    },
    {
        path: 'report',
        component: __WEBPACK_IMPORTED_MODULE_3__report_report_report_report_component__["a" /* ReportReportComponent */]
    },
    {
        path: 'logreport',
        component: __WEBPACK_IMPORTED_MODULE_2__log_report_log_report_component__["a" /* LogReportComponent */]
    },
    {
        path: 'lch',
        component: __WEBPACK_IMPORTED_MODULE_0__launcher_launcher_component__["a" /* LauncherComponent */],
        children: [
            {
                path: 'kb02',
                component: __WEBPACK_IMPORTED_MODULE_1__kb02_kb02_component__["a" /* Kb02Component */],
            },
            {
                path: 'kb021',
                component: __WEBPACK_IMPORTED_MODULE_6__kb02_kb02_1_kb02_1_component__["a" /* Kb021Component */],
                outlet: 'aux'
            },
            {
                path: 'kb021/:id',
                component: __WEBPACK_IMPORTED_MODULE_6__kb02_kb02_1_kb02_1_component__["a" /* Kb021Component */],
                outlet: 'aux'
            },
            {
                path: 'Kb023',
                component: __WEBPACK_IMPORTED_MODULE_7__kb02_kb02_3_kb02_3_component__["a" /* Kb023Component */],
                outlet: 'aux'
            },
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    MARGIN-LEFT: 0px;\r\n    MARGIN-TOP: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head runat=\"server\">\r\n  <title>GFMIS Web Online </title>\r\n</head>\r\n<body>\r\n<!-- <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"GFMISTB\" style=\"width: 900px;\">\r\n  <tr>\r\n    <td style=\"background-image: url(assets/Images/header_section_bg.jpg); background-repeat: repeat-x;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"GF.NET_Header\" style=\"height: 100px; width: 900px;\">\r\n        <tr>\r\n          <td>\r\n            <asp:ImageButton CausesValidation=\"False\" Enable=\"false\" Enabled=\"False\" ID=\"imgBtDefault\" ImageUrl=\"assets/Images/header_section_01.jpg\" OnClick=\"imgBtDefault_Click\"></asp:ImageButton>\r\n          </td>\r\n          <td style=\"width: 761px\">\r\n            <img alt=\"GFMIS Web Online\" height=\"100\" src=\"assets/Images/img_headers/header_theme03.jpg\" width=\"750\"/>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 900px;\">\r\n        <tr>\r\n          <td align=\"left\" bgcolor=\"8399cb\" style=\"width: 150px;\" valign=\"top\">\r\n            <user-login-profile ID=\"ubLoginProfileBCH01\"></user-login-profile>\r\n            <menu-left ID=\"UcMenuLeft1\"></menu-left>\r\n          </td>\r\n          <td align=\"left\" valign=\"top\">\r\n            <kb02></kb02>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td style=\"background-color: #000000\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"height: 50px; width: 100%;\">\r\n        <tr>\r\n          <td align=\"left\" style=\"background-color: #112759; width: 150px;\" valign=\"top\">&nbsp;</td>\r\n          <td align=\"right\" style=\"background-color: #000000;\" valign=\"middle\">\r\n            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"footer\" width=\"100%\">\r\n              <tr>\r\n                <td align=\"right\" width=\"99%\">\r\n                  <br/>\r\n                  ระบบบริหารการเงินการคลังภาครัฐแบบอิเล็กทรอนิกส์<br/>\r\n                  Government Fiscal Management Information System\r\n                </td>\r\n                <td width=\"1%\">&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"right\" colspan=\"2\">&nbsp;</td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n</table> -->\r\n<app-home></app-home>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_report_log_report_component__ = __webpack_require__("../../../../../src/app/log-report/log-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_report_report_report_component__ = __webpack_require__("../../../../../src/app/report-report/report-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kb02_kb02_component__ = __webpack_require__("../../../../../src/app/kb02/kb02.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controls_image_button_image_button_component__ = __webpack_require__("../../../../../src/app/controls/image-button/image-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_login_profile_user_login_profile_component__ = __webpack_require__("../../../../../src/app/user-login-profile/user-login-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_left_menu_left_component__ = __webpack_require__("../../../../../src/app/menu-left/menu-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profiles_user_profiles_component__ = __webpack_require__("../../../../../src/app/user-profiles/user-profiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_top_menu_top_component__ = __webpack_require__("../../../../../src/app/menu-top/menu-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form_header_form_header_component__ = __webpack_require__("../../../../../src/app/form-header/form-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kb02_kb02_1_kb02_1_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-1/kb02-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kb02_kb02_2_kb02_2_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-2/kb02-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__kb02_kb02_3_kb02_3_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-3/kb02-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__controls_grid_view_grid_view_component__ = __webpack_require__("../../../../../src/app/controls/grid-view/grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__controls_textbox_textbox_component__ = __webpack_require__("../../../../../src/app/controls/textbox/textbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__controls_link_button_link_button_component__ = __webpack_require__("../../../../../src/app/controls/link-button/link-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__controls_custom_validator_custom_validator_component__ = __webpack_require__("../../../../../src/app/controls/custom-validator/custom-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__controls_validation_summary_validation_summary_component__ = __webpack_require__("../../../../../src/app/controls/validation-summary/validation-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__controls_footer_style_footer_style_component__ = __webpack_require__("../../../../../src/app/controls/footer-style/footer-style.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__controls_item_style_item_style_component__ = __webpack_require__("../../../../../src/app/controls/item-style/item-style.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__controls_header_style_header_style_component__ = __webpack_require__("../../../../../src/app/controls/header-style/header-style.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__controls_command_field_command_field_component__ = __webpack_require__("../../../../../src/app/controls/command-field/command-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__controls_bound_field_bound_field_component__ = __webpack_require__("../../../../../src/app/controls/bound-field/bound-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__controls_columns_columns_component__ = __webpack_require__("../../../../../src/app/controls/columns/columns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__controls_selected_row_style_selected_row_style_component__ = __webpack_require__("../../../../../src/app/controls/selected-row-style/selected-row-style.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__controls_image_image_component__ = __webpack_require__("../../../../../src/app/controls/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__controls_required_field_validator_required_field_validator_component__ = __webpack_require__("../../../../../src/app/controls/required-field-validator/required-field-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__controls_label_label_component__ = __webpack_require__("../../../../../src/app/controls/label/label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__controls_drop_down_list_drop_down_list_component__ = __webpack_require__("../../../../../src/app/controls/drop-down-list/drop-down-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__controls_list_item_list_item_component__ = __webpack_require__("../../../../../src/app/controls/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__controls_asp_button_asp_button_component__ = __webpack_require__("../../../../../src/app/controls/asp-button/asp-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__controls_hidden_field_hidden_field_component__ = __webpack_require__("../../../../../src/app/controls/hidden-field/hidden-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__controls_item_template_item_template_component__ = __webpack_require__("../../../../../src/app/controls/item-template/item-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__controls_template_field_template_field_component__ = __webpack_require__("../../../../../src/app/controls/template-field/template-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__controls_row_style_row_style_component__ = __webpack_require__("../../../../../src/app/controls/row-style/row-style.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__controls_control_value_base_control_value_base_component__ = __webpack_require__("../../../../../src/app/controls/control-value-base/control-value-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__controls_list_view_list_view_component__ = __webpack_require__("../../../../../src/app/controls/list-view/list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__controls_drop_down_view_drop_down_view_component__ = __webpack_require__("../../../../../src/app/controls/drop-down-view/drop-down-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__controls_list_detail_list_detail_component__ = __webpack_require__("../../../../../src/app/controls/list-detail/list-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__controls_dialog_search_dialog_search_component__ = __webpack_require__("../../../../../src/app/controls/dialog-search/dialog-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__controls_dialog_save_dialog_save_component__ = __webpack_require__("../../../../../src/app/controls/dialog-save/dialog-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__web_browser_check_web_check_web_component__ = __webpack_require__("../../../../../src/app/web-browser/check-web/check-web.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__launcher_launcher_component__ = __webpack_require__("../../../../../src/app/launcher/launcher.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__kb02_kb02_component__["a" /* Kb02Component */],
            __WEBPACK_IMPORTED_MODULE_8__controls_image_button_image_button_component__["a" /* ImageButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_login_profile_user_login_profile_component__["a" /* UserLoginProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__menu_left_menu_left_component__["a" /* MenuLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_profiles_user_profiles_component__["a" /* UserProfilesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__menu_top_menu_top_component__["a" /* MenuTopComponent */],
            __WEBPACK_IMPORTED_MODULE_13__form_header_form_header_component__["a" /* FormHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__kb02_kb02_1_kb02_1_component__["a" /* Kb021Component */],
            __WEBPACK_IMPORTED_MODULE_15__kb02_kb02_2_kb02_2_component__["a" /* Kb022Component */],
            __WEBPACK_IMPORTED_MODULE_16__kb02_kb02_3_kb02_3_component__["a" /* Kb023Component */],
            __WEBPACK_IMPORTED_MODULE_17__controls_grid_view_grid_view_component__["a" /* GridViewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__controls_textbox_textbox_component__["a" /* TextboxComponent */],
            __WEBPACK_IMPORTED_MODULE_19__controls_link_button_link_button_component__["a" /* LinkButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_20__controls_custom_validator_custom_validator_component__["a" /* CustomValidatorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__controls_validation_summary_validation_summary_component__["a" /* ValidationSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_22__controls_footer_style_footer_style_component__["a" /* FooterStyleComponent */],
            __WEBPACK_IMPORTED_MODULE_23__controls_item_style_item_style_component__["a" /* ItemStyleComponent */],
            __WEBPACK_IMPORTED_MODULE_24__controls_header_style_header_style_component__["a" /* HeaderStyleComponent */],
            __WEBPACK_IMPORTED_MODULE_25__controls_command_field_command_field_component__["a" /* CommandFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_26__controls_bound_field_bound_field_component__["a" /* BoundFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_27__controls_columns_columns_component__["a" /* ColumnsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__controls_selected_row_style_selected_row_style_component__["a" /* SelectedRowStyleComponent */],
            __WEBPACK_IMPORTED_MODULE_29__controls_image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__controls_required_field_validator_required_field_validator_component__["a" /* RequiredFieldValidatorComponent */],
            __WEBPACK_IMPORTED_MODULE_31__controls_label_label_component__["a" /* LabelComponent */],
            __WEBPACK_IMPORTED_MODULE_32__controls_drop_down_list_drop_down_list_component__["a" /* DropDownListComponent */],
            __WEBPACK_IMPORTED_MODULE_33__controls_list_item_list_item_component__["a" /* ListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_34__controls_asp_button_asp_button_component__["a" /* AspButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_35__controls_hidden_field_hidden_field_component__["a" /* HiddenFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_36__controls_item_template_item_template_component__["a" /* ItemTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_37__controls_template_field_template_field_component__["a" /* TemplateFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_38__controls_row_style_row_style_component__["a" /* RowStyleComponent */],
            __WEBPACK_IMPORTED_MODULE_39__controls_control_value_base_control_value_base_component__["b" /* ControlValueBaseComponent */],
            __WEBPACK_IMPORTED_MODULE_40__controls_list_view_list_view_component__["a" /* ListViewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__controls_drop_down_view_drop_down_view_component__["a" /* DropDownViewComponent */],
            __WEBPACK_IMPORTED_MODULE_42__controls_list_detail_list_detail_component__["a" /* ListDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_46__controls_dialog_search_dialog_search_component__["a" /* DialogSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_48__controls_dialog_save_dialog_save_component__["a" /* DialogSaveComponent */],
            __WEBPACK_IMPORTED_MODULE_49__web_browser_check_web_check_web_component__["a" /* CheckWebComponent */],
            __WEBPACK_IMPORTED_MODULE_0__log_report_log_report_component__["a" /* LogReportComponent */],
            __WEBPACK_IMPORTED_MODULE_1__report_report_report_report_component__["a" /* ReportReportComponent */],
            __WEBPACK_IMPORTED_MODULE_50__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_51__launcher_launcher_component__["a" /* LauncherComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_47__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            // MdDialog,
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_45__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["l" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["j" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["d" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["i" /* MdNativeDateModule */],
            // ReactiveFormsModule
            __WEBPACK_IMPORTED_MODULE_45__angular_material__["k" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_44_ngx_pagination__["a" /* NgxPaginationModule */]
            //  JsonpModule, NgbModule.forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_46__controls_dialog_search_dialog_search_component__["a" /* DialogSearchComponent */], __WEBPACK_IMPORTED_MODULE_48__controls_dialog_save_dialog_save_component__["a" /* DialogSaveComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/controls/asp-button/asp-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/asp-button/asp-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"visible!='False'\">{{text}}</button>"

/***/ }),

/***/ "../../../../../src/app/controls/asp-button/asp-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AspButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AspButtonComponent = (function () {
    function AspButtonComponent() {
    }
    AspButtonComponent.prototype.ngOnInit = function () {
    };
    return AspButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Text'),
    __metadata("design:type", String)
], AspButtonComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Visible'),
    __metadata("design:type", Boolean)
], AspButtonComponent.prototype, "visible", void 0);
AspButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'Button',
        template: __webpack_require__("../../../../../src/app/controls/asp-button/asp-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/asp-button/asp-button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AspButtonComponent);

//# sourceMappingURL=asp-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/bound-field/bound-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/bound-field/bound-field.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bound-field works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/bound-field/bound-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoundFieldComponent = (function () {
    function BoundFieldComponent() {
    }
    BoundFieldComponent.prototype.ngOnInit = function () {
    };
    return BoundFieldComponent;
}());
BoundFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'BoundField',
        template: __webpack_require__("../../../../../src/app/controls/bound-field/bound-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/bound-field/bound-field.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BoundFieldComponent);

//# sourceMappingURL=bound-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/columns/columns.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/columns/columns.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  columns works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/columns/columns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnsComponent = (function () {
    function ColumnsComponent() {
    }
    ColumnsComponent.prototype.ngOnInit = function () {
    };
    return ColumnsComponent;
}());
ColumnsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'Columns',
        template: __webpack_require__("../../../../../src/app/controls/columns/columns.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/columns/columns.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ColumnsComponent);

//# sourceMappingURL=columns.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/command-field/command-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/command-field/command-field.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  command-field works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/command-field/command-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommandFieldComponent = (function () {
    function CommandFieldComponent() {
    }
    CommandFieldComponent.prototype.ngOnInit = function () {
    };
    return CommandFieldComponent;
}());
CommandFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'CommandField',
        template: __webpack_require__("../../../../../src/app/controls/command-field/command-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/command-field/command-field.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommandFieldComponent);

//# sourceMappingURL=command-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/control-value-base/control-value-base.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/control-value-base/control-value-base.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  control-value-base works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/control-value-base/control-value-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ControlValueBaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlValueBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlValueBaseComponent = (function () {
    function ControlValueBaseComponent() {
    }
    ControlValueBaseComponent.prototype.ngOnInit = function () {
    };
    return ControlValueBaseComponent;
}());
ControlValueBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-control-value-base',
        template: __webpack_require__("../../../../../src/app/controls/control-value-base/control-value-base.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/control-value-base/control-value-base.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ControlValueBaseComponent);

var noop = function () {
};
//export const TEXT_BOX_CONTROL_VALUE_ACCESSOR: any = {
//  provide: NG_VALUE_ACCESSOR,
//  useExisting: forwardRef(() => TextboxComponent),
//  multi: true
//};
var ControlValueBase = (function () {
    function ControlValueBase() {
        //The internal data model
        this.innerValue = '';
        //Placeholders for the callbacks which are later providesd
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(ControlValueBase.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    ControlValueBase.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    ControlValueBase.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    //From ControlValueAccessor interface
    ControlValueBase.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    ControlValueBase.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return ControlValueBase;
}());

//# sourceMappingURL=control-value-base.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/custom-validator/custom-validator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/custom-validator/custom-validator.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isError\" [style.color]=\"foreColor\">{{errorMessage}}</div>"

/***/ }),

/***/ "../../../../../src/app/controls/custom-validator/custom-validator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomValidatorComponent = (function () {
    function CustomValidatorComponent() {
    }
    CustomValidatorComponent.prototype.ngOnInit = function () {
    };
    return CustomValidatorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ErrorMessage'),
    __metadata("design:type", String)
], CustomValidatorComponent.prototype, "errorMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ForeColor'),
    __metadata("design:type", String)
], CustomValidatorComponent.prototype, "foreColor", void 0);
CustomValidatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'CustomValidator',
        template: __webpack_require__("../../../../../src/app/controls/custom-validator/custom-validator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/custom-validator/custom-validator.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomValidatorComponent);

//# sourceMappingURL=custom-validator.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/dialog-save/dialog-save.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background-color: yellow;\r\n}\r\n:host >>> table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    border: 0px solid #ddd;\r\n}\r\n\r\n:host >>> th, :host >>> td {\r\n    padding: 3px;\r\n    /* width: 400px;  */\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n    font-size: 80%;  /* 1em = 10px */\r\n    font-family: Tahoma;\r\n}\r\n\r\n/* :host >>> tr:nth-child(even){background-color: #f2f2f2} */\r\n:host >>> tr:hover{\r\n\tbackground-color:#ddd;\r\n/*\tcolor: #0080ff; */\r\n}\r\n\r\n:host >>> th {\r\n    background-color: #B4C3F6;\r\n    color: #000000;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n}\r\n:host >>> h1 {\r\n    font-size: 90%;  /* 1em = 10px */\r\n}\r\n\r\n:host >>> div.content {\r\n\tfont-family: Tahoma;\r\n}\r\n\r\n:host >>> button {\r\n    /* background-color: #4C6D96; */\r\n    margin: 10px;\r\n    font-size: 80%;  /* 1em = 10px */\r\n}\r\n\r\n:host >>> button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n.divH {\r\n    width: 500px;\r\n}\r\n:host >>> h1 {\r\n    text-align: left;\r\n    font-size: 80%;  /* 1em = 10px */\r\n    font-family: Tahoma;\r\n    font-weight: bold;\r\n}\r\n\r\n:host >>> .error {\r\n  text-align: center;\r\n  font-size: 80%;  /* 1em = 10px */\r\n  font-family: Tahoma;\r\n  font-weight: bold;\r\n  color: red;\r\n}\r\n\r\n.button-row {\r\n  text-align: center;\r\n  vertical-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/dialog-save/dialog-save.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title id=\"headerShow\">จำลองการบันทึก</h1>\r\n<div class=\"divH\">\r\n<div id='success' style=\"display:block\">\r\n  <div align='center' [hidden]=\"H_TABLE\">\r\n    <table width=\"100%\">\r\n        <tr>\r\n          <th width=\"20%\">ผลการบันทึก</th>\r\n          <th width=\"30%\">รหัสข้อความ</th>\r\n          <th>คำอธิบาย</th>\r\n        </tr>\r\n        <tr>\r\n          <td width=\"20%\">{{res}}</td>\r\n          <td width=\"30%\">{{code}}</td>\r\n          <td [innerHTML]=\"detail\"></td>\r\n        </tr>\r\n    </table>\r\n  </div>\r\n  <div [hidden]=\"H_WAIT\">\r\n    <br>\r\n    <md-progress-bar id=\"progress-bar\" mode=\"query\"></md-progress-bar>\r\n  </div>\r\n  <div [hidden]=\"H_ERROR\" class=\"error\">\r\n    <br>\r\n    {{ERR_TEXT}}\r\n  </div>\r\n  <div md-dialog-actions  class=\"button-row\" align='center'>\r\n    <span align=\"middle\">\r\n        <button [disabled]=\"B_SAVE\" (click)=\"confirmSave()\" color=\"primary\">บันทึกข้อมูล</button>\r\n        <button [disabled]=\"B_EDIT\" (click)=\"dialogRef.close()\">กลับไปแก้ไขข้อมูล</button>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div id='showSuccess' style=\"display:none\">\r\n  <div align='center'>\r\n    <tr>\r\n      <th>ผลการบันทึก</th>\r\n      <th>เลขที่เอกสาร</th>\r\n      <th>รหัสหน่วยงาน</th>\r\n      <th>ปีบัญชี</th>\r\n    </tr>\r\n    <tr>\r\n      <td>{{res}}</td>\r\n      <td>{{TBNUMTR}}</td>\r\n      <td>{{SAVEHEAD.BUKRS}}</td>\r\n      <td>{{SAVEHEAD.GJAHR}}</td>\r\n    </tr>\r\n  </div>\r\n  <div [hidden]=\"H_LERROR\" class=\"error\">\r\n    <br>\r\n    {{LOG_ERR}}\r\n  </div>\r\n  <!-- <hr> -->\r\n  <div md-dialog-actions align='center' class=\"button-row\">\r\n    <span>\r\n        <button [disabled]=\"BTSHOW\" id=\"BTSHOW\" (click)=\"showDetail()\">แสดงข้อมูล</button>\r\n        <button [disabled]=\"BTEDIT\" id=\"BTEDIT\" (click)=\"dialogRef.close()\">กลับไปแก้ไขข้อมูล</button>\r\n        <button [disabled]=\"BTNEW\" (click)=\"newDoc()\">สร้างเอกสารใหม่</button>\r\n    </span>\r\n    <span>\r\n        <button [disabled]=\"BTSEARCH\" (click)=\"toSearch()\" >ค้นหาเอกสาร</button>\r\n        <button [disabled]=\"BTLOG\" (click)=\"showLog()\">Log</button>\r\n        <!-- <img [hidden]=\"SAVEDLOG\" src=\"./../../../assets/Images/checked_64.png\" align=\"middle\" alt=\"saved to log\" height=\"20\" width=\"20\"> -->\r\n      </span>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/dialog-save/dialog-save.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogSaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogSaveComponent = (function () {
    function DialogSaveComponent(dialogRef, httpService, router) {
        this.dialogRef = dialogRef;
        this.httpService = httpService;
        this.router = router;
        this.TBNUMTR = '-'; // 3100000041
        this.name_tr = 'Something'; // Something
        // BUKRS: string;
        // GJAHR: number;
        this.res = 'สำเร็จ';
        this.detail = 'ตรวจสอบเอกสาร - ไม่มีข้อผิดพลาด';
        this.BTSHOW = false;
        this.BTEDIT = true;
        this.BTNEW = false;
        this.BTSEARCH = false;
        this.BTLOG = false;
        // New Value by LOG
        this.CPUDT = ''; // DATE ex: 11.12.2017
        this.CPUTIME = ''; // TIME ex: 22:40:59
        this.LOGNO = 0; // Log No. // eTEST
        // Ducument: Details (Array)
        this.SAVELIST = [];
        // Progress
        this.H_WAIT = true;
        this.H_TABLE = false;
        this.H_ERROR = true;
        this.H_LERROR = true; // For Log error
        this.B_EDIT = true;
        this.B_SAVE = false;
        this.SAVEDLOG = true;
    }
    DialogSaveComponent.prototype.confirmSave = function () {
        var _this = this;
        this.H_TABLE = false;
        this.H_WAIT = false;
        this.H_ERROR = true;
        this.B_SAVE = true;
        console.log('xml_s: ' + this.xml_s);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/xml' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(this.SAVELIST);
        this.httpService.post('http://idp.yai.io:8082/rest/kb02', this.xml_s, options).subscribe(function (values) {
            console.log('return', values);
            if (values.ok) {
                var result = values.json();
                var mes = result.response.message;
                var details = result.response.details;
                var codeX = result.response.code;
                _this.TBNUMTR = '';
                // mes = 'Doc No: 10000195';
                // let code = result.response.code;
                // alert(`ผลการบันทึก  ${mes}`);
                // console.log(result);
                // console.log('details: ', result.response.details);
                if (mes !== 'Fail') {
                    console.log('Suc');
                    _this.showSuccess('สำเร็จ');
                    _this.TBNUMTR = mes.substring(8); // Doc NO. (String)
                    _this.BTSHOW = false;
                    _this.BTEDIT = true;
                    _this.LOGNO = Number(_this.SAVEHEAD.GJAHR + _this.TBNUMTR);
                    _this.saveLog(); // TEST Save Log
                    _this.H_WAIT = true;
                    _this.H_TABLE = false;
                }
                else {
                    console.log('Fail');
                    // this.showSuccess('ไม่สำเร็จ');
                    _this.code = codeX;
                    _this.detail = details; // mes
                    _this.showError('ไม่สำเร็จ');
                    _this.BTSHOW = true;
                    _this.BTEDIT = false;
                    _this.H_WAIT = true;
                    _this.H_TABLE = false;
                    _this.B_EDIT = false;
                }
            }
            else {
                console.log('F');
                alert(values.toString());
            }
        }, function (error) {
            console.log(error);
            _this.ERR_TEXT = 'พบปัญหาการเชื่อมต่อกับ service ไม่สมบูรณ์';
            _this.H_WAIT = true;
            _this.H_TABLE = false;
            _this.H_ERROR = false;
            _this.B_SAVE = false;
        });
    };
    DialogSaveComponent.prototype.saveLog = function () {
        var _this = this;
        this.getDateNow();
        this.createXMLlog(); // Gen XML LOG
        console.log('save_log: \n' + this.save_log); // TEST
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'text/xml' }); // text/plain
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // รอ service log พร้อมใช้งาน
        this.httpService.post('http://52.220.14.56:28080/NewGFws/webresources/wsLog', this.save_log, options).subscribe(function (values) {
            console.log('return', values);
            if (values.ok) {
                var result = values.json();
                var mes = result.a;
                if (mes !== 'false') {
                    console.log('Suc');
                    _this.SAVEDLOG = false;
                }
                else {
                    _this.H_LERROR = false;
                    _this.SAVEDLOG = true;
                    _this.LOG_ERR = 'ERROR (LOG SERVICE): ' + mes + ' | บันทึก LOG ไม่สำเร็จ';
                    console.log('Fail log save');
                }
            }
            else {
                console.log('F');
                alert(values.toString());
            }
        }, function (error) {
            console.log(error);
            // const r_error: any = error.json();
            // console.log(error.statusText);
            _this.H_LERROR = false;
            _this.SAVEDLOG = true;
            _this.LOG_ERR = 'การเชื่อมต่อกับ service log ไม่สมบูรณ์ : ' + error.statusText;
            // this.H_WAIT = true;
            // this.H_TABLE = false;
            // this.H_ERROR = false;
            // this.B_SAVE = false;
        });
    };
    DialogSaveComponent.prototype.createXMLlog = function () {
        this.xml_log = '';
        // save_log (Header)
        this.save_log = ''; // Clear TEST-ONLY
        this.save_log = this.LOGYEAR + "," + this.LOGNO + "," + this.SAVEHEAD.BUKRS + ","
            + (this.SAVEHEAD.LBBUKRS + "," + this.SAVEHEAD.TBZZPMT + "," + this.SAVEHEAD.LBZZPMT + "," + this.SAVEHEAD.LUSERID + "," + this.SAVEHEAD.DDGSBER + ",")
            + (this.SAVEHEAD.IDBLART + "," + this.SAVEHEAD.BLDAT + "," + this.SAVEHEAD.BUDAT + "," + this.SAVEHEAD.TBXBLNR + ",")
            + (this.SAVEHEAD.tbSearch_term + "," + this.SAVEHEAD.LIFNR + "," + this.SAVEHEAD.LBTERM + "," + this.SAVEHEAD.ZLSCH + "," + this.CPUDT + "," + this.CPUTIME + ",")
            + (this.SAVEHEAD.TBKBLNR + "," + this.SAVEHEAD.LBKBLNR + "," + this.SAVEHEAD.SUMCOST);
        console.log(this.SAVELIST.length);
        for (var index = 0; index < this.SAVELIST.length; index++) {
            var element = this.SAVELIST[index];
            console.log('hi, detail');
            // save log (Details)
            this.save_log = this.save_log + ("," + this.LOGYEAR + "," + this.LOGNO + "," + (index + 1))
                + ("," + element.BUKRS + "," + this.TBNUMTR + "," + element.GJAHR + "," + element.WRBTR)
                + ("," + element.HKONT + "," + element.HKONT_NAME + "," + element.KOSTL + "," + element.KOSTL_NAME)
                + ("," + element.FISTL + "," + element.FISTL_NAME + "," + element.FKBER + "," + element.FKBER_NAME)
                + ("," + element.PRZNR + "," + element.PRZNR_NAME + "," + element.ZZOBJ_NAME + "," + element.ZZOBJ)
                + ("," + element.ZZUNIT + "," + element.ZZUNIT_NAME + "," + element.ZZFIELD1 + "," + element.ZZFIELD1_NAME)
                + ("," + element.VBUND + "," + element.VBUND_NAME + "," + element.SGTXT + "," + element.GEBER + "," + element.GEBER_NAME);
        }
        console.log(this.save_log);
        // console.log(this.xml_log);
    };
    DialogSaveComponent.prototype.getDateNow = function () {
        // this.DATENOW = new Date();
        var DN = new Date();
        this.CPUDT = DN.getDate() + '/' + (DN.getMonth() + 1) + '/' + DN.getFullYear();
        this.CPUTIME = DN.getHours() + ':' + DN.getMinutes() + ':' + DN.getSeconds();
        this.LOGYEAR = DN.getFullYear(); // Set Year Log
        console.log('NOW: ' + this.CPUDT + ', TIME: ' + this.CPUTIME);
    };
    DialogSaveComponent.prototype.showSuccess = function (result) {
        this.res = result;
        document.getElementById('headerShow').innerText = 'ผลการบันทึกรายการ';
        document.getElementById('success').style.display = 'none';
        document.getElementById('showSuccess').style.display = 'block';
    };
    DialogSaveComponent.prototype.showError = function (result) {
        this.res = result;
    };
    DialogSaveComponent.prototype.showDetail = function () {
        console.log('Show Detail');
        this.dialogRef.close({ value: this.TBNUMTR, name: this.name_tr, new: false });
    };
    DialogSaveComponent.prototype.showLog = function () {
        window.open('./logreport?docid=' + this.LOGNO);
    };
    DialogSaveComponent.prototype.newDoc = function () {
        this.dialogRef.close({ value: this.TBNUMTR, name: this.name_tr, new: true });
    };
    DialogSaveComponent.prototype.toSearch = function () {
        this.dialogRef.close();
        // this.router.navigate(['/Kb023']);
        this.router.navigate(['/lch', { outlets: { aux: ['Kb023'] } }]);
    };
    DialogSaveComponent.prototype.ngOnInit = function () {
    };
    return DialogSaveComponent;
}());
DialogSaveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dialog-save',
        template: __webpack_require__("../../../../../src/app/controls/dialog-save/dialog-save.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/dialog-save/dialog-save.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DialogSaveComponent);

var _a, _b, _c;
//# sourceMappingURL=dialog-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/dialog-search/dialog-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog {\r\n    background-color: #ddd;\r\n}\r\n\r\nmd-dialog-content {\r\n    padding : 0;\r\n  }\r\nbody {\r\n    background-color: yellow;\r\n}\r\n:host >>> table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    border: 0px solid #ddd;\r\n    /* display: flex; */\r\n    /* flex-direction: column; */\r\n    /* max-height: 300px;\r\n    min-width: 300px; */\r\n    /* width: 300px; */\r\n}\r\n\r\n:host >>> th, :host >>> td {\r\n    padding: 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 80%;  /* 1em = 10px */\r\n    font-family: Tahoma;\r\n}\r\n\r\n:host >>> tr:nth-child(even){background-color: #f2f2f2}\r\n:host >>> tr:hover{\r\n\tbackground-color:#bcc2fa;\r\n/*\tcolor: #0080ff; */\r\n}\r\n\r\n:host >>> th {\r\n    background-color: #4C6C96;\r\n    color: white;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n    /* border-left: 0px; */\r\n    /* border-right: 0px; */\r\n}\r\n\r\n:host >>> div.content {\r\n\tfont-family: Tahoma;\r\n}\r\n\r\n:host >>> button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.modal-header-search {\r\n    color:#fff;\r\n    padding:9px 15px;\r\n    /* border-bottom:1px solid #eee; */\r\n    background-color: #4C6D96;\r\n    -webkit-border-top-left-radius: 5px;\r\n    -webkit-border-top-right-radius: 5px;\r\n    -moz-border-radius-topleft: 5px;\r\n    -moz-border-radius-topright: 5px;\r\n     border-top-left-radius: 5px;\r\n     border-top-right-radius: 5px;\r\n}\r\n\r\n:host >>> h1 {\r\n    text-align: left;\r\n    font-size: 80%;  /* 1em = 10px */\r\n    font-family: Tahoma;\r\n    font-weight: bold;\r\n    padding: 0px;\r\n    background-color: #4C6D96;\r\n}\r\n\r\n.sText {\r\n    text-align: left;\r\n    font-size: 80%;  /* 1em = 10px */\r\n    font-family: Tahoma;\r\n    font-weight: bold;\r\n}\r\n/* .myTable {\r\n    width: 300px;\r\n} */\r\nmd-dialog-content {\r\n    padding: 0px;\r\n}\r\n.mat-dialog-container {\r\n    padding: 0px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/dialog-search/dialog-search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div >\r\n<div >\r\n\t<md-dialog-content>\r\n\t<div class=\"modal-header modal-header-search\">\r\n\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button> -->\r\n\t\t\t<!-- <h1 md-dialog-title>{{name_t}}</h1> -->\r\n\t\t\t<a class=\"sText\">{{name_t}}</a>\r\n\t\t\t<br><br>\r\n\t\t\t<a class=\"sText\">ค้นหา</a>&nbsp;\r\n\t\t\t<input name=\"\" value=\"\">&nbsp;\r\n\t\t\t<button  (click)=\"searchitem()\">เริ่มค้นหา</button>\r\n\t\t\t<!-- <img  mdTooltip=\"Help!me\" src=\"../assets/Images/images2.jpg\" alt=\"\"> -->\r\n\t</div>\r\n\t</md-dialog-content>\r\n\t<md-dialog-content>\r\n\t<div style=\"padding: 1px;\">\r\n\t\t\t<div>\r\n\t\t\t\t\t<table class=\"myTable\" id=\"myTable\">\r\n\t\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t</div>\r\n\t</md-dialog-content>\r\n</div>\r\n<br>\r\n<div>\r\n  <md-progress-bar id=\"progress-bar\" style=\"display:none;\" mode=\"query\"></md-progress-bar>\r\n</div>\r\n<br>\r\n\r\n<div><a id='mo'></a></div>\r\n<div><a id='demo'></a></div>\r\n<div md-dialog-actions align='center' class=\"button-row\">\r\n  <!-- <button  md-button (dblclick)=\"confirmSelection()\" color=\"primary\">ตกลง</button> -->\r\n  <button   (click)=\"dialogRef.close()\">ปิด</button>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/dialog-search/dialog-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RESLIST = [];
var DialogSearchComponent = (function () {
    function DialogSearchComponent(dialogRef, httpService) {
        this.dialogRef = dialogRef;
        this.httpService = httpService;
        this.label_select = 'เลือก';
        this.label_name = 'ชื่อ';
        this.label_detail = 'คำอธิบาย';
        this.reslist = RESLIST;
        this.xmlZZPMT = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                  <row>\n                    <id>1000000</id>\n                    <Value>000000300200005</Value>\n                    <Name>\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E01\u0E25\u0E32\u0E07</Name>\n                    <description>\u0E2A\u0E1A\u0E01.</description>\n                  </row>\n                </table>";
        this.xmlFISTL = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                <row>\n                  <id>100</id>\n                  <Value>0300210101110000</Value>\n                  <Name>\u0E04\u0E23\u0E38\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 1 \u0E25</Name>\n                  <description>\u0E04\u0E23\u0E38\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 1 \u0E25</description>\n                </row>\n                <row>\n                  <id>1000087</id>\n                  <Value>0300210101000000</Value>\n                  <Name>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E08\u0E33</Name>\n                  <description>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E08\u0E33</description>\n                </row>\n                <row>\n                  <id>1000088</id>\n                  <Value>0300210101110001</Value>\n                  <Name>\u0E42\u0E15\u0E4A\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3-6</Name>\n                  <description>\u0E42\u0E15\u0E4A\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3-6</description>\n                </row>\n                <row>\n                  <id>1000089</id>\n                  <Value>0300210101110002</Value>\n                  <Name>\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C</Name>\n                  <description>\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C</description>\n                </row>\n                <row>\n                  <id>104</id>\n                  <Value>0300210101110003</Value>\n                  <Name>\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E08\u0E33</Name>\n                  <description>\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E23\u0E30\u0E1A</description>\n                </row>\n                <row>\n                  <id>105</id>\n                  <Value>0300210101110007</Value>\n                  <Name>\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E07\u0E19\u0E49\u0E33</Name>\n                  <description>\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E07\u0E19\u0E49\u0E33</description>\n                </row>\n                <row>\n                  <id>1000084</id>\n                  <Value>0300210101110022</Value>\n                  <Name>\u0E23\u0E16\u0E19\u0E31\u0E48\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07</Name>\n                  <description>\u0E23\u0E16\u0E19\u0E31\u0E48\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07</description>\n                </row>\n                </table>";
        this.xmlPRZNR = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                <row>\n                  <id>1000343</id>\n                  <Value>1000L0633000</Value>\n                  <Name>\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E48\u0E07\u0E23\u0E31\u0E14 \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19</Name>\n                  <description>\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E48\u0E07\u0E23\u0E31\u0E14 \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19</description>\n                </row>\n                <row>\n                  <id>1000344</id>\n                  <Value>1000L0634000</Value>\n                  <Name>\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25</Name>\n                  <description>\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25</description>\n                </row>\n\t\t            <row>\n                  <id>1000345</id>\n                  <Value>1000K1904000</Value>\n                  <Name>\u0E1D\u0E36\u0E01\u0E2D\u0E1A\u0E23\u0E21 \u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E41\u0E25...</Name>\n                  <description>\u0E1D\u0E36\u0E01\u0E2D\u0E1A\u0E23\u0E21 \u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E41\u0E25...</description>\n                </row>\n\t\t            <row>\n                  <id>1000346</id>\n                  <Value>1000K1901000</Value>\n                  <Name>\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21 \u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E41...</Name>\n                  <description>\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21 \u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E41...</description>\n                </row>\n                </table>";
        this.xmlKOSTL = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                  <row>\n                    <id>101</id>\n                    <Value>0300200001</Value>\n                    <Name>\u0E01\u0E01\u0E21.</Name>\n                    <description>\u0E01\u0E25\u0E38\u0E48\u0E21\u0E07\u0E32\u0E19\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22</description>\n                  </row>\n                  <row>\n                    <id>101</id>\n                    <Value>0300200003</Value>\n                    <Name>\u0E01\u0E1B\u0E1B.</Name>\n                    <description>\u0E01\u0E25\u0E38\u0E48\u0E21\u0E07\u0E32\u0E19\u0E1B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E32\u0E21\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E19\u0E2D\u0E01\u0E23\u0E30\u0E1A\u0E1A</description>\n                  </row>\n                  <row>\n                    <id>101</id>\n                    <Value>0300200004</Value>\n                    <Name>\u0E01\u0E15\u0E19.</Name>\n                    <description>\u0E01\u0E25\u0E38\u0E48\u0E21\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E20\u0E32\u0E22\u0E43\u0E19</description>\n                  </row>\n                  <row>\n                    <id>101</id>\n                    <Value>0300200005</Value>\n                    <Name>\u0E2A\u0E1A\u0E01.</Name>\n                    <description>\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E01\u0E25\u0E32\u0E07</description>\n                  </row>\n                  <row>\n                    <id>101</id>\n                    <Value>0300200007</Value>\n                    <Name>\u0E2A\u0E15\u0E1B.</Name>\n                    <description>\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25</description>\n                  </row>\n                  <row>\n                    <id>101</id>\n                    <Value>0300200000</Value>\n                    <Name>\u0E2A\u0E1B\u0E01\u0E04.</Name>\n                    <description>\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E2A\u0E34\u0E19\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C</description>\n                  </row>\n                </table>";
        this.xmlFKBER = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                <row>\n                  <id>1000091</id>\n                  <Value>030021000L0633</Value>\n                  <Name>\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E48\u0E07\u0E23\u0E31\u0E14 \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19</Name>\n                  <description>\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E48\u0E07\u0E23\u0E31\u0E14 \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19</description>\n                </row>\n                <row>\n                  <id>1000092</id>\n                  <Value>030021000L0634</Value>\n                  <Name>\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32</Name>\n                  <description>\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32</description>\n                </row>\n\t\t            <row>\n                  <id>1000093</id>\n                  <Value>P1000</Value>\n                  <Name>\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07</Name>\n                  <description>\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07</description>\n                </row>\n\t            \t<row>\n                  <id>1000090</id>\n                  <Value>03002100000000</Value>\n                  <Name>\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23...</Name>\n                  <description>\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23...</description>\n                </row>\n                </table>";
        // เพิ่มรหัสบัญชีแยกประเภท
        this.xmlHKONT = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                <row>\n                  <id>1000002</id>\n                  <Value>53000</Value>\n                  <Name>\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32</Name>\n                  <description>\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32</description>\n                </row>\n                <row>\n                  <id>1000016</id>\n                  <Value>51800</Value>\n                  <Name>\u0E04\u0E48\u0E32\u0E27\u0E31\u0E2A\u0E14\u0E38</Name>\n                  <description>\u0E04\u0E48\u0E32\u0E27\u0E31\u0E2A\u0E14\u0E38</description>\n                </row>\n                <row>\n                  <id>1000011</id>\n                  <Value>52000</Value>\n                  <Name>\u0E04\u0E48\u0E32\u0E0B\u0E48\u0E2D\u0E21\u0E41\u0E0B\u0E21\u0E41\u0E25\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E23\u0E31\u0E01\u0E29\u0E32</Name>\n                  <description>\u0E04\u0E48\u0E32\u0E0B\u0E48\u0E2D\u0E21\u0E41\u0E0B\u0E21\u0E41\u0E25\u0E30\u0E04\u0E48\u0E32\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E23\u0E31\u0E01\u0E29\u0E32</description>\n                </row>\n                <row>\n                  <id>1000004</id>\n                  <Value>51200</Value>\n                  <Name>\u0E04/\u0E08\u0E40\u0E2B\u0E21\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23-\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01</Name>\n                  <description>\u0E04/\u0E08\u0E40\u0E2B\u0E21\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23-\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01</description>\n                </row>\n                <row>\n                  <id>1000005</id>\n                  <Value>57000</Value>\n                  <Name>\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E2D\u0E37\u0E48\u0E19</Name>\n                  <description>\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E2D\u0E37\u0E48\u0E19</description>\n                </row>\n                <row>\n                  <id>1000006</id>\n                  <Value>54000</Value>\n                  <Name>\u0E02\u0E19\u0E2A\u0E48\u0E07\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</Name>\n                  <description>\u0E02\u0E19\u0E2A\u0E48\u0E07\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</description>\n                </row>\n                </table>";
        this.xmlGEBER = "<table xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                  <row>\n                    <id>1000150</id>\n                    <Value>6011220</Value>\n                    <Name>\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E2D\u0E22 /\u0E07\u0E1A\u0E2A\u0E23\u0E01.</Name>\n                    <description>\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E2D\u0E22 /\u0E07\u0E1A\u0E2A\u0E23\u0E01.</description>\n                  </row>\n                  <row>\n                    <id>1000151</id>\n                    <Value>6011230</Value>\n                    <Name>\u0E04\u0E48\u0E32\u0E27\u0E31\u0E2A\u0E14\u0E38 /\u0E07\u0E1A\u0E2A\u0E23\u0E01.</Name>\n                    <description>\u0E04\u0E48\u0E32\u0E27\u0E31\u0E2A\u0E14\u0E38 /\u0E07\u0E1A\u0E2A\u0E23\u0E01.</description>\n                  </row>\n                  <row>\n                    <id>1000152</id>\n                    <Value>6011240</Value>\n                    <Name>\u0E04\u0E48\u0E32\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E39\u0E1B\u0E42\u0E20\u0E04 /\u0E07\u0E1A\u0E2A\u0E23</Name>\n                    <description>\u0E04\u0E48\u0E32\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E39\u0E1B\u0E42\u0E20\u0E04 /\u0E07\u0E1A\u0E2A\u0E23</description>\n                  </row>\n                  <row>\n                    <id>1000154</id>\n                    <Value>6011500</Value>\n                    <Name>\u0E07\u0E1A\u0E23\u0E32\u0E22\u0E08\u0E48\u0E32\u0E22\u0E2D\u0E37\u0E48\u0E19/\u0E07\u0E1A\u0E2A\u0E23\u0E01.</Name>\n                    <description>\u0E07\u0E1A\u0E23\u0E32\u0E22\u0E08\u0E48\u0E32\u0E22\u0E2D\u0E37\u0E48\u0E19/\u0E07\u0E1A\u0E2A\u0E23\u0E01.</description>\n                  </row>\n                  <row>\n                    <id>1000003</id>\n                    <Value>6010110</Value>\n                    <Name>\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 /\u0E07\u0E1A\u0E01\u0E25\u0E32\u0E07/\u0E07\u0E1A\u0E2A\u0E23\u0E01.</Name>\n                    <description>\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 /\u0E07\u0E1A\u0E01\u0E25\u0E32\u0E07/\u0E07\u0E1A\u0E2A\u0E23\u0E01.</description>\n                  </row>\n                  <row>\n                    <id>1000149</id>\n                    <Value>6010230</Value>\n                    <Name>\u0E04\u0E48\u0E32\u0E27\u0E31\u0E2A\u0E14\u0E38 /\u0E07\u0E1A\u0E01\u0E25\u0E32\u0E07</Name>\n                    <description>\u0E04\u0E48\u0E32\u0E27\u0E31\u0E2A\u0E14\u0E38 /\u0E07\u0E1A\u0E01\u0E25\u0E32\u0E07</description>\n                  </row>\n                </table>";
    }
    DialogSearchComponent.prototype.searchitem = function () {
        document.getElementById('progress-bar').style.display = 'block';
        console.log('S: ' + this.code_t);
        console.log('N: ' + this.name_t);
        console.log('Y: ' + this.year_t);
        switch (this.code_t) {
            case 'KOSTL':
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'FKBER':
                this.createdXml();
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'FISTL':
                // this.createdXml();
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'TBZZPMT':
                // this.createdXml();
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'PRZNR':
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'ZZOBJ':
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'ZZFIELD1':
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'HKONT':
                this.resourcesList(this.name_t);
                console.log('C: ' + this.code_t);
                break;
            case 'GEBER':
                this.resourcesList(this.name_t);
                break;
        }
    };
    DialogSearchComponent.prototype.resourcesList = function (name_r) {
        console.log('L: ' + this.code_t);
        switch (this.code_t) {
            case 'KOSTL':
                this.gatherItem(this.xmlKOSTL); // for TEST
                this.displayItem(name_r);
                break;
            case 'FKBER':
                // this.sentItem(this.xml_s, name_r); // TEST-SERVICE
                // this.getItem(this.result_s);
                this.gatherItem(this.xmlFKBER); // for TEST
                this.displayItem(name_r);
                break;
            case 'FISTL':
                // this.sentItem(xml_s);
                // this.gatherItem(this.xml_r);
                this.gatherItem(this.xmlFISTL); // for TEST
                this.displayItem(name_r);
                break;
            case 'TBZZPMT':
                // this.sentItem(xml_s);
                // this.gatherItem(this.xml_r);
                this.gatherItem(this.xmlZZPMT); // for TEST
                this.displayItem(name_r);
                break;
            case 'PRZNR':
                this.gatherItem(this.xmlPRZNR); // for TEST
                this.displayItem(name_r);
                break;
            case 'ZZOBJ':
                this.gatherItem(this.xmlKOSTL); // for TEST
                this.displayItem(name_r);
                break;
            case 'ZZFIELD1':
                this.gatherItem(this.xmlKOSTL); // for TEST
                this.displayItem(name_r);
                break;
            case 'HKONT':
                this.gatherItem(this.xmlHKONT); // for TEST
                this.displayItem(name_r);
                break;
            case 'GEBER':
                this.checkYearGEBER();
                this.displayItem(name_r);
                break;
        }
    };
    // แหล่งของเงิน only 2560
    DialogSearchComponent.prototype.checkYearGEBER = function () {
        console.log(this.year_t);
        if (this.year_t == '2560') {
            console.log('T-Y');
            this.gatherItem(this.xmlGEBER);
        }
        else {
            this.gatherItem('');
        }
    };
    DialogSearchComponent.prototype.createdXml = function () {
        this.xml_s = "{\n    \"tableName\": \"th_fund\",\n    \"idField\": \"th_fund_id\",\n    \"nameField\": \"name\",\n    \"valueField\": \"value\",\n    \"adClientId\": 1000000,\n    \"adOrgId\": 0\n    }";
    };
    DialogSearchComponent.prototype.sentItem = function (xml, name_r) {
        var _this = this;
        console.log('Sent data to Serivce');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.httpService.post('http://idp.yai.io:8082/rest/lookup', xml, options).subscribe(function (values) {
            console.log('return', values);
            if (values.ok) {
                var result = values.json();
                console.log(result.results);
                _this.result_s = result.results; // result
                // alert(`ได้รับข้อมูล  ${this.result_s}`);
                // console.log('arr:' + this.result_s);
                RESLIST = _this.result_s;
                _this.displayItem(name_r);
            }
            else {
                alert(values.toString());
            }
        });
    };
    DialogSearchComponent.prototype.getItem = function (res) {
        RESLIST = this.result_s;
        console.log('RES' + RESLIST);
    };
    DialogSearchComponent.prototype.gatherItem = function (xml) {
        RESLIST = [];
        this.resultXML = xml;
        console.log(xml);
        var x, i, txt, value, name, description;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(this.resultXML, 'text/xml');
        //    xmlDoc = xml.responseXML;
        txt = '';
        x = xmlDoc.getElementsByTagName('id');
        value = xmlDoc.getElementsByTagName('Value');
        name = xmlDoc.getElementsByTagName('Name');
        description = xmlDoc.getElementsByTagName('description');
        for (i = 0; i < x.length; i++) {
            //          txt += x[i].childNodes[0].nodeValue + '<br>'; // TEST
            RESLIST.push({
                id: x[i].innerHTML,
                Value: value[i].innerHTML,
                Name: name[i].innerHTML,
                description: description[i].innerHTML
            });
        }
        //    document.getElementById('demo').innerHTML = txt; // TEST
        console.log(RESLIST);
    };
    DialogSearchComponent.prototype.displayItem = function (name_d) {
        var table = document.getElementById('myTable');
        var rowCount = table.rows.length;
        console.log('rowCount: ' + rowCount); // TEST
        while (table.rows.length > 0) {
            table.deleteRow(0);
            console.log('Del row');
        }
        console.log('rowCount Af: ' + table.rows.length); // TEST
        // Add the header row.
        var customers = new Array();
        customers.push(['เลือก ', name_d, 'ชื่อ']);
        // customers.push(['เลือก ', name_d, 'ชื่อ', 'คำอธิบาย']); // TEST
        var columnCount = customers[0].length;
        var rowx = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement('TH');
            headerCell.innerHTML = customers[0][i];
            rowx.appendChild(headerCell);
        }
        var row = table.insertRow(-1);
        var cell1, cell2, cell3, cell4;
        var dialogRef = this.dialogRef;
        var confirmSelection = this.confirmSelection;
        var _loop_1 = function (i) {
            console.log('innerHTML..');
            row = table.insertRow(-1);
            cell1 = row.insertCell(0).innerHTML = '<a style="cursor:pointer" class="btn" id="button' + i + '">เลือก</a>';
            cell2 = row.insertCell(1).innerHTML = RESLIST[i].Value;
            cell3 = row.insertCell(2).innerHTML = RESLIST[i].Name;
            // cell4 = row.insertCell(3).innerHTML = RESLIST[i].Name;
            document.getElementById('button' + (i)).addEventListener('click', function () { modifyText(RESLIST[i].id, RESLIST[i].Value, RESLIST[i].Name); }, false);
        };
        // console.log(RESLIST.length);
        // console.log(RESLIST[1].results.Name);
        for (var i = 0; i < RESLIST.length; i++) {
            _loop_1(i);
        }
        document.getElementById('progress-bar').style.display = 'none';
        function modifyText(new_id, new_text, new_name) {
            dialogRef.close({ id: new_id, value: new_text, name: new_name });
        }
    };
    DialogSearchComponent.prototype.onSelect = function (save, i) {
        console.log('TEST onSelect');
    };
    DialogSearchComponent.prototype.confirmSelection = function (valueX) {
        this.size_t = '21';
        console.log(this.size_t);
        this.dialogRef.close();
        //    this.dialogRef.close(this.size_t);
    };
    DialogSearchComponent.prototype.ngOnInit = function () {
        // this.searchitem();
    };
    return DialogSearchComponent;
}());
DialogSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dialog-search',
        template: __webpack_require__("../../../../../src/app/controls/dialog-search/dialog-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/dialog-search/dialog-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], DialogSearchComponent);

var _a, _b;
//# sourceMappingURL=dialog-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/drop-down-list/drop-down-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/drop-down-list/drop-down-list.component.html":
/***/ (function(module, exports) {

module.exports = "<select [style.width]=\"width\">\r\n  <option *ngFor=\"let item of options\">{{item}}</option>\r\n</select>"

/***/ }),

/***/ "../../../../../src/app/controls/drop-down-list/drop-down-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropDownListComponent = (function () {
    function DropDownListComponent() {
        this.options = [];
    }
    DropDownListComponent.prototype.addItem = function (item) {
        this.options.push(item.value);
    };
    DropDownListComponent.prototype.ngOnInit = function () {
        var values = this.values;
        for (var idx in values)
            this.options.push(values[idx]);
    };
    return DropDownListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Width'),
    __metadata("design:type", String)
], DropDownListComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], DropDownListComponent.prototype, "values", void 0);
DropDownListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'DropDownList',
        template: __webpack_require__("../../../../../src/app/controls/drop-down-list/drop-down-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/drop-down-list/drop-down-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DropDownListComponent);

//DEVELOPING A TABS COMPONENT IN ANGULAR
//see ref: https://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
//https://stackoverflow.com/questions/34736161/how-do-i-create-a-dropdown-component-in-angular-2 
//# sourceMappingURL=drop-down-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/drop-down-view/drop-down-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/drop-down-view/drop-down-view.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <TR style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #b4c3f6\" align=center>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>เลือก</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>ลำดับที่</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>ชื่อบัญชี</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสบัญชีแยกประเภท</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสศูนย์ต้นทุน</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสงบประมาณ</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสกิจกรรมหลัก</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>จำนวนเงิน</TH>\r\n</TR>\r\n  --> \r\n  <TR>\r\n    <TD align=center>\r\n      <INPUT onclick=\"javascript:__doPostBack('ucKb02_1$gvKb','Select$0')\" style=\"BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px\"\r\n        alt=เลือก src=\"assets/Images/Icon/record_(show)_16x16.gif\" type=image>\r\n    </TD>\r\n    <TD style=\"WHITE-SPACE: nowrap\" vAlign=middle align=center>1&nbsp;</TD>\r\n    <TD>สนง เลขานุการกรม</TD>\r\n    <TD style=\"WHITE-SPACE: nowrap\">A120600002</TD>\r\n    <TD id='hello'>test1</TD>\r\n    <TD>12006780017000จจ</TD>\r\n    <TD>test2</TD>\r\n    <TD align=right>-12,000.00</TD>\r\n</TR>  \r\n\r\n<!-- <div [hidden]=\"!selected\">\r\n  <ng-content></ng-content>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/drop-down-view/drop-down-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_controls_list_view_list_view_component__ = __webpack_require__("../../../../../src/app/controls/list-view/list-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropDownViewComponent = (function () {
    function DropDownViewComponent(ListViewComponent) {
        this.ListViewComponent = ListViewComponent;
    }
    DropDownViewComponent.prototype.ngOnInit = function () {
        // this.ListViewComponent.addTab(this); //TEST
    };
    return DropDownViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DropDownViewComponent.prototype, "tabTitle", void 0);
DropDownViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1_app_controls_list_view_list_view_component__["a" /* ListViewComponent */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-drop-down-view',
        template: __webpack_require__("../../../../../src/app/controls/drop-down-view/drop-down-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/drop-down-view/drop-down-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_controls_list_view_list_view_component__["a" /* ListViewComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_controls_list_view_list_view_component__["a" /* ListViewComponent */]) === "function" && _a || Object])
], DropDownViewComponent);

var _a;
//# sourceMappingURL=drop-down-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/footer-style/footer-style.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/footer-style/footer-style.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer-style works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/footer-style/footer-style.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterStyleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterStyleComponent = (function () {
    function FooterStyleComponent() {
    }
    FooterStyleComponent.prototype.ngOnInit = function () {
    };
    return FooterStyleComponent;
}());
FooterStyleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'FooterStyle',
        template: __webpack_require__("../../../../../src/app/controls/footer-style/footer-style.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/footer-style/footer-style.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterStyleComponent);

//# sourceMappingURL=footer-style.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/grid-view/grid-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n  BACKGROUND-COLOR: #b4c3f6;\r\n  COLOR: #051615;\r\n  cursor:pointer;\r\n  /* WHITE-SPACE: nowrap; */\r\n}\r\n\r\n.sort:hover {\r\n  background-color:#8399CB;\r\n  text-decoration: underline;\r\n/*\tcolor: #0080ff; */\r\n}\r\n\r\n/* Column widths are based on these cells */\r\n.row-DATE {\r\n  min-width: 98px;\r\n}\r\n.row-STATUS {\r\n  min-width: 70px;\r\n  max-width: 70px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/grid-view/grid-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <hr>\r\n  <span class=\"defaultTableBodyShot\">\r\n      <Label ID=\"lbSortTitle\" Text=\"จัดลำดับตาม\"></Label>\r\n      <Label ID=\"lbSortHeader\"\r\n        style=\"font-weight:bold\" >{{txsort}}</Label>\r\n      <Label ID=\"lbSortFrom\" runat=\"server\" Text=\"จาก\"></Label>\r\n      <Label ID=\"lbSortType\" style=\"font-weight:bold\">{{sortby}}</Label>\r\n  </span>\r\n</div>\r\n<div ng-controller=\"PageCtrl\">\r\n  <table class=\"defaultTableBody\">\r\n    <tr>\r\n      <th>เลือก</th>\r\n      <th class=\"sort\" (click)=\"sortByTh('BELNR','เลขที่ใบขอเบิกเงิน')\">เลขที่ใบขอเบิกเงิน</th>\r\n      <th class=\"sort\" (click)=\"sortByTh('GJAHR', 'ปีงบประมาณ')\">ปีงบ ประมาณ</th>\r\n      <th class=\"none\" (click)=\"sortByTh('BLDAT', 'วันที่เอกสาร')\" class=\"row-4 row-DATE\">วันที่เอกสาร</th>\r\n      <th class=\"none\" (click)=\"sortByTh('BUDAT', 'วันที่ผ่านรายการ')\" class=\"row-5 row-DATE\">วันที่ผ่านรายการ</th>\r\n      <th class=\"sort\" (click)=\"sortByTh('BLART', 'ประเภท')\" >ประ เภท</th>\r\n      <th class=\"sort\" (click)=\"sortByTh('HOWPAY', 'วิธีชำระเงิน')\">วิธีชำระเงิน</th>\r\n      <th class=\"sort\" (click)=\"sortByTh('NAME1', 'ผู้ขาย')\">ผู้ขาย</th>\r\n      <th class=\"none\" (click)=\"sortByTh('CPUDT', 'วันที่บันทึก')\" class=\"row-9 row-DATE\">วันที่บันทึก</th>\r\n      <th class=\"none\" (click)=\"sortByTh('SUMCOST', 'จำนวนเงิน')\">จำนวนเงิน</th>\r\n      <th class=\"none\" (click)=\"sortByTh('STATUS', 'สถานะ')\" class=\"row-11 row-STATUS\">สถานะ</th>\r\n      <th class=\"sort\" (click)=\"sortByTh('NUMDOCI', 'เลขที่เอกสารกลับรายการ')\">เลขที่เอกสารกลับรายการ</th>\r\n    </tr>\r\n    <tr *ngFor=\"let doc of RESLIST | paginate: { itemsPerPage: 5, currentPage: page }; let i='index';\" align=\"center\">\r\n      <td align=\"center\">\r\n        <INPUT style=\"BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px\"\r\n          alt=เลือก src=\"assets/Images/Icon/record_(show)_16x16.gif\" type=image\r\n           (click)=\"selectedDoc(doc.BELNR,i)\">\r\n      </td>\r\n      <td style=\"width: 50px\">{{doc.BELNR}}</td>\r\n      <td style=\"width: 5px\">{{coverYear(doc.GJAHR)}}</td>\r\n      <td align=\"left\">{{coverDate(doc.BLDAT)}}</td>\r\n      <td style=\"width: 100px\" align=\"left\">{{coverDate(doc.BUDAT)}}</td>\r\n      <td style=\"width: 10px\">{{doc.BLART}}</td>\r\n      <td style=\"width: 5px\">{{doc.HOWPAY}}</td>\r\n      <td style=\"width: 150px\" align=\"left\">{{doc.NAME1}}</td>\r\n      <td style=\"width: 100px\" align=\"left\">{{coverDate(doc.CPUDT)}}</td>\r\n      <td style=\"width: 100px\" align=\"right\">{{numberWithCommas(doc.SUMCOST)}}</td>\r\n      <td>{{doc.STATUS}}</td>\r\n      <td style=\"width: 50px\">{{doc.NUMDOCI}}</td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"defaultTableBody\">\r\n    <pagination-controls\r\n      (pageChange)=\"page = $event\"\r\n      previousLabel=\"ย้อนกลับ\"\r\n      nextLabel=\"ถัดไป\">\r\n    </pagination-controls>\r\n  </div>\r\n</div>\r\n<div>\r\n  <table class=\"defaultTableBodyShot\">\r\n    <tr>\r\n      <td><label>หมายเหตุ: </label></td>\r\n      <td>\r\n        <Label Text=\"1.คลิกที่คอลัมน์ที่มีเส้นใต้เพื่อจัดเรียงลำดับ\"></Label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td></td>\r\n      <td>\r\n        <Label ID=\"lbAnotation2\" runat=\"server\" Text=\"2.\"></Label>\r\n        <asp:Image ID=\"imAnotation\" runat=\"server\" ImageUrl=\"assets/Images/Icon/record_(show)_16x16.gif\" />\r\n        <Label ID=\"lbAnotation3\" runat=\"server\" Text=\"คลิกเพื่อแสดงเอกสาร\"></Label>\r\n      </td>\r\n    </tr>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/grid-view/grid-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridViewComponent = (function () {
    function GridViewComponent(router) {
        this.router = router;
        // @Input('parentData') RLINK: String;
        // @Input('rounte') RLINK: String;
        // @Output('childData') outgoingData = new EventEmitter<string>();
        this.isDesc = false;
        this.column = 'BELNR';
        this.txsort = 'เลขที่ใบขอเบิกเงิน';
        this.sortby = 'น้อยไปมาก';
    }
    // Selected Doc
    GridViewComponent.prototype.selectedDoc = function (doc, index) {
        console.log(this.RESLIST[index].BELNR); // TEST-ONLY
        console.log('RLINK = ' + this.RLINK); // TEST-ONLY
        // this.router.navigate([{ outlets: { aux: ['kb021'] } }]);
        // [routerLink]="['/kb02',{ outlets: { aux: ['kb021'] } }]"
        // [routerLink]="['/kb02',{outlets: {aux: [this.RLINK], queryParams: { BELNR: doc, GJAHR: this.RESLIST[index].GJAHR } }}]"
        // this.RLINK = 'kb021'
        var navExtra = {
            queryParams: { BELNR: doc, GJAHR: this.RESLIST[index].GJAHR },
            outlets: { aux: [this.RLINK] }
        };
        console.log(navExtra);
        this.router.navigate(['/lch', navExtra], navExtra);
    };
    GridViewComponent.prototype.sortByTh = function (property, text) {
        this.txsort = text;
        this.isDesc = !this.isDesc;
        this.column = property;
        var direction = this.isDesc ? 1 : -1;
        this.RESLIST.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] > b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
        // น้อยไปมาก มากไปน้อย
        if (this.RESLIST !== undefined || this.RESLIST.length > 1) {
            var first = this.RESLIST[0][property];
            var last = this.RESLIST[this.RESLIST.length - 1][property];
            // console.log('F:' + first + ' L:' + last); // TEST-ONLY
            if (first < last) {
                this.sortby = 'น้อยไปมาก';
            }
            else if (first > last) {
                this.sortby = 'มากไปน้อย';
            }
        }
        else { }
    };
    GridViewComponent.prototype.sortByNu = function (property, text) {
        this.txsort = text;
        this.isDesc = !this.isDesc;
        this.column = property;
        var direction = this.isDesc ? 1 : -1;
        this.RESLIST.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] - b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };
    GridViewComponent.prototype.coverDate = function (num) {
        var date;
        var yearBH;
        if (num !== undefined) {
            var dateParts = num.split('-');
            yearBH = Number(dateParts[0]) + 543; // Cover Year
            dateParts[0] = yearBH.toString();
            switch (dateParts[1]) {
                case '01':
                    date = dateParts[2] + ' มกราคม ' + dateParts[0];
                    break;
                case '02':
                    date = dateParts[2] + ' กุมภาพันธ์ ' + dateParts[0];
                    break;
                case '03':
                    date = dateParts[2] + ' มีนาคม ' + dateParts[0];
                    break;
                case '04':
                    date = dateParts[2] + ' เมษายน ' + dateParts[0];
                    break;
                case '05':
                    date = dateParts[2] + ' พฤษภาคม ' + dateParts[0];
                    break;
                case '06':
                    date = dateParts[2] + ' มิถุนายน ' + dateParts[0];
                    break;
                case '07':
                    date = dateParts[2] + ' กรกฎาคม ' + dateParts[0];
                    break;
                case '08':
                    date = dateParts[2] + ' สิงหาคม ' + dateParts[0];
                    break;
                case '09':
                    date = dateParts[2] + ' กันยายน ' + dateParts[0];
                    break;
                case '10':
                    date = dateParts[2] + ' ตุลาคม ' + dateParts[0];
                    break;
                case '11':
                    date = dateParts[2] + ' พฤศจิกายน ' + dateParts[0];
                    break;
                case '12':
                    date = dateParts[2] + ' ธันวาคม ' + dateParts[0];
                    break;
                default:
                    date = '';
                    break;
            }
            return date;
        }
        else {
            return '';
        }
    };
    GridViewComponent.prototype.numberWithCommas = function (x) {
        var number = x.toString();
        var baht = number.split('.')[0];
        var cents = (number.split('.')[1] || '') + '00';
        baht = baht.split('').reverse().join('')
            .replace(/(\d{3}(?!$))/g, '$1,')
            .split('').reverse().join('');
        return baht + '.' + cents.slice(0, 2);
    };
    GridViewComponent.prototype.coverYear = function (year) {
        year = Number(year) + 543;
        return year;
    };
    GridViewComponent.prototype.ngOnInit = function () { };
    return GridViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], GridViewComponent.prototype, "RESLIST", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridViewComponent.prototype, "RLINK", void 0);
GridViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid-view',
        template: __webpack_require__("../../../../../src/app/controls/grid-view/grid-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/grid-view/grid-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], GridViewComponent);

var _a;
//# sourceMappingURL=grid-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/header-style/header-style.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/header-style/header-style.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header-style works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/header-style/header-style.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderStyleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderStyleComponent = (function () {
    function HeaderStyleComponent() {
    }
    HeaderStyleComponent.prototype.ngOnInit = function () {
    };
    return HeaderStyleComponent;
}());
HeaderStyleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'HeaderStyle',
        template: __webpack_require__("../../../../../src/app/controls/header-style/header-style.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/header-style/header-style.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderStyleComponent);

//# sourceMappingURL=header-style.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/hidden-field/hidden-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/hidden-field/hidden-field.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  hidden-field works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/hidden-field/hidden-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiddenFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiddenFieldComponent = (function () {
    function HiddenFieldComponent() {
    }
    HiddenFieldComponent.prototype.ngOnInit = function () {
    };
    return HiddenFieldComponent;
}());
HiddenFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'HiddenField',
        template: __webpack_require__("../../../../../src/app/controls/hidden-field/hidden-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/hidden-field/hidden-field.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HiddenFieldComponent);

//# sourceMappingURL=hidden-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/image-button/image-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/image-button/image-button.component.html":
/***/ (function(module, exports) {

module.exports = "<input  *ngIf=\"visible!='false'\"\r\n       [style.height]=\"height\" [style.width]=\"width\" align=\"absMiddle\" src=\"{{imageUrl}}\" style=\"BORDER: 0px;\" title=\"{{toolTip}}\" type=\"image\"/>"

/***/ }),

/***/ "../../../../../src/app/controls/image-button/image-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageButtonComponent = (function () {
    function ImageButtonComponent() {
    }
    ImageButtonComponent.prototype.ngOnInit = function () {
        //this.imageUrl = "hello";
    };
    return ImageButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ImageUrl'),
    __metadata("design:type", String)
], ImageButtonComponent.prototype, "imageUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Height'),
    __metadata("design:type", String)
], ImageButtonComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Width'),
    __metadata("design:type", String)
], ImageButtonComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ToolTip'),
    __metadata("design:type", String)
], ImageButtonComponent.prototype, "toolTip", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Visible'),
    __metadata("design:type", Boolean)
], ImageButtonComponent.prototype, "visible", void 0);
ImageButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ImageButton',
        template: __webpack_require__("../../../../../src/app/controls/image-button/image-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/image-button/image-button.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ImageButtonComponent);

//# sourceMappingURL=image-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/image/image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<input [style.height]=\"height\" [style.width]=\"width\" align=\"absMiddle\" src=\"{{imageUrl}}\" style=\"BORDER: 0px;\" title=\"{{toolTip}}\" type=\"image\"/>"

/***/ }),

/***/ "../../../../../src/app/controls/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageComponent = (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    return ImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ImageUrl'),
    __metadata("design:type", String)
], ImageComponent.prototype, "imageUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Height'),
    __metadata("design:type", String)
], ImageComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Width'),
    __metadata("design:type", String)
], ImageComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ToolTip'),
    __metadata("design:type", String)
], ImageComponent.prototype, "toolTip", void 0);
ImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'Image',
        template: __webpack_require__("../../../../../src/app/controls/image/image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/image/image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ImageComponent);

//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/item-style/item-style.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/item-style/item-style.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  item-style works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/item-style/item-style.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemStyleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemStyleComponent = (function () {
    function ItemStyleComponent() {
    }
    ItemStyleComponent.prototype.ngOnInit = function () {
    };
    return ItemStyleComponent;
}());
ItemStyleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ItemStyle',
        template: __webpack_require__("../../../../../src/app/controls/item-style/item-style.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/item-style/item-style.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItemStyleComponent);

//# sourceMappingURL=item-style.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/item-template/item-template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/item-template/item-template.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  item-template works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/item-template/item-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemTemplateComponent = (function () {
    function ItemTemplateComponent() {
    }
    ItemTemplateComponent.prototype.ngOnInit = function () {
    };
    return ItemTemplateComponent;
}());
ItemTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ItemTemplate',
        template: __webpack_require__("../../../../../src/app/controls/item-template/item-template.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/item-template/item-template.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItemTemplateComponent);

//# sourceMappingURL=item-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/label/label.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/label/label.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"visible!='false'\">\r\n  <ng-content></ng-content>{{Text}}\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/controls/label/label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelComponent = (function () {
    function LabelComponent() {
    }
    LabelComponent.prototype.ngOnInit = function () {
    };
    return LabelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Text'),
    __metadata("design:type", String)
], LabelComponent.prototype, "Text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Visible'),
    __metadata("design:type", Boolean)
], LabelComponent.prototype, "visible", void 0);
LabelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'Label',
        template: __webpack_require__("../../../../../src/app/controls/label/label.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/label/label.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LabelComponent);

//# sourceMappingURL=label.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/link-button/link-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/link-button/link-button.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"visible=='True'\" href=\"#\">\r\n  <ng-content></ng-content>\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/controls/link-button/link-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkButtonComponent = (function () {
    function LinkButtonComponent() {
    }
    LinkButtonComponent.prototype.ngOnInit = function () {
    };
    return LinkButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Visible'),
    __metadata("design:type", Boolean)
], LinkButtonComponent.prototype, "visible", void 0);
LinkButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'LinkButton',
        template: __webpack_require__("../../../../../src/app/controls/link-button/link-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/link-button/link-button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LinkButtonComponent);

//# sourceMappingURL=link-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/list-detail/list-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/list-detail/list-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_kb02_table_list_view__ = __webpack_require__("../../../../../src/app/kb02/table-list-view.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListDetailComponent = (function () {
    function ListDetailComponent() {
    }
    ListDetailComponent.prototype.ngOnInit = function () {
    };
    return ListDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_kb02_table_list_view__["a" /* TableList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_kb02_table_list_view__["a" /* TableList */]) === "function" && _a || Object)
], ListDetailComponent.prototype, "save", void 0);
ListDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list-detail',
        // templateUrl: './list-detail.component.html',
        template: "\n    <div *ngIf=\"save\">\n      <h2>{{save.LBZZPMT}} details!</h2>\n      <div><label>id: </label>{{save.TBFISTL}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"save.LBZZPMT\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/controls/list-detail/list-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListDetailComponent);

var _a;
//# sourceMappingURL=list-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/list-item/list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/controls/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_controls_drop_down_list_drop_down_list_component__ = __webpack_require__("../../../../../src/app/controls/drop-down-list/drop-down-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListItemComponent = (function () {
    function ListItemComponent(dropDownListComponent, elRef) {
        this.dropDownListComponent = dropDownListComponent;
        this.elRef = elRef;
        this.test = this.elRef.nativeElement;
        this.value = this.elRef.nativeElement.innerText;
    }
    ListItemComponent.prototype.ngOnInit = function () {
        this.dropDownListComponent.addItem(this);
    };
    return ListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ListItemComponent.prototype, "value", void 0);
ListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ListItem',
        template: __webpack_require__("../../../../../src/app/controls/list-item/list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/list-item/list-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_controls_drop_down_list_drop_down_list_component__["a" /* DropDownListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_controls_drop_down_list_drop_down_list_component__["a" /* DropDownListComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ListItemComponent);

var _a, _b;
//# sourceMappingURL=list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/list-view/list-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/list-view/list-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-app=\"ListView\" ng-controller=\"customersCtrl\"> \r\n<TBODY>\r\n  <table>\r\n   <TR style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #b4c3f6\" align=center>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>เลือก</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>ลำดับที่</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>ชื่อบัญชี</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสบัญชีแยกประเภท</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสศูนย์ต้นทุน</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสงบประมาณ</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสกิจกรรมหลัก</TH>\r\n    <TH style=\"WHITE-SPACE: nowrap\" scope=col>จำนวนเงิน</TH>\r\n  </TR> \r\n  </table>\r\n  <!-- <TR>  -->\r\n     <asp:app-drop-down-view></asp:app-drop-down-view>  \r\n    \r\n  <!-- </TR>  -->\r\n\r\n  <!-- <TR class=LeftMenu style=\"FONT-SIZE: 12px; FONT-FAMILY: Tahoma\" ng-repeat=\"x in names\">\r\n    <TD align=center>\r\n      <INPUT onclick=\"javascript:__doPostBack('ucKb02_1$gvKb','Select$0')\" style=\"BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px\"\r\n        alt=เลือก src=\"assets/Images/Icon/record_(show)_16x16.gif\" type=image>\r\n    </TD>\r\n    <TD style=\"WHITE-SPACE: nowrap\" vAlign=middle align=center>1&nbsp;</TD>\r\n    <TD>สนง เลขานุการกรม</TD>\r\n    <TD style=\"WHITE-SPACE: nowrap\">A120600002</TD>\r\n    <TD id='hello'>{{hero.name}}</TD>\r\n    <TD>12006780017000จจ</TD>\r\n    <TD>{{title}}</TD>\r\n    <TD align=right>-12,000.00</TD>\r\n  </TR> -->\r\n\r\n  <!-- <TR class=LeftMenu style=\"FONT-SIZE: 12px; FONT-FAMILY: Tahoma; BACKGROUND-COLOR: infobackground\">\r\n    <TD align=center>\r\n      <INPUT onclick=\"javascript:__doPostBack('ucKb02_1$gvKb','Select$1')\" style=\"BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px\"\r\n        alt=เลือก src='assets/Images/Icon/record_(show)_16x16.gif' type=image>\r\n    </TD>\r\n    <TD style=\"WHITE-SPACE: nowrap\" vAlign=middle align=center>2&nbsp;</TD>\r\n    <TD>ค่าวัสดุ</TD>\r\n    <TD style=\"WHITE-SPACE: nowrap\">5104010104</TD>\r\n    <TD>1200600002</TD>\r\n    <TD>12006780017000จจ</TD>\r\n    <TD>120061000K1917</TD>\r\n    <TD align=right>12,000.00</TD>\r\n  </TR> -->\r\n\r\n  <!--<TR style=\"FONT-SIZE: 12px; FONT-FAMILY: Tahoma; FONT-WEIGHT: normal; BACKGROUND-COLOR: #ebebeb\">\r\n    <TD>&nbsp;</TD>\r\n    <TD>&nbsp;</TD>\r\n    <TD>&nbsp;</TD>\r\n    <TD>&nbsp;</TD>\r\n    <TD>&nbsp;</TD>\r\n    <TD>&nbsp;</TD>\r\n    <TD>\r\n      <TABLE style=\"BORDER-TOP: 1px; BORDER-RIGHT: 1px; BORDER-COLLAPSE: collapse; BORDER-BOTTOM: 1px; BORDER-LEFT: 1px\" cellSpacing=0\r\n        cellPadding=1 width=\"100%\" border=1>\r\n        <TBODY>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: dotted; COLOR: #ffffff; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none\"\r\n              bgColor=#2d576f noWrap>\r\n              <STRONG>จำนวนเงินขอเบิก</STRONG>\r\n            </TD>\r\n          </TR>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: dotted; COLOR: #ffffff; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none\"\r\n              bgColor=#2d576f noWrap>\r\n              <STRONG>จำนวนเงินภาษีหัก ณ ที่จ่าย</STRONG>\r\n            </TD>\r\n          </TR>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: dotted; COLOR: #ffffff; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none\"\r\n              bgColor=#2d576f noWrap>\r\n              <STRONG>จำนวนเงินค่าปรับ </STRONG>\r\n            </TD>\r\n          </TR>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; COLOR: #ffffff; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none\"\r\n              bgColor=#2d576f noWrap>\r\n              <STRONG>จำนวนเงินขอรับ</STRONG>\r\n            </TD>\r\n          </TR>\r\n        </TBODY>\r\n      </TABLE>\r\n    </TD>\r\n    <TD>\r\n      <TABLE style=\"BORDER-TOP: 1px; BORDER-RIGHT: 1px; BORDER-COLLAPSE: collapse; BORDER-BOTTOM: 1px; BORDER-LEFT: 1px; BACKGROUND-COLOR: #666666\"\r\n        cellSpacing=0 cellPadding=1 width=\"100%\" border=1>\r\n        <TBODY>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: outset; COLOR: #333333; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BACKGROUND-COLOR: #fffddd\"\r\n              noWrap align=right>\r\n              <SPAN id=summary01><STRONG>12,000.00</STRONG></SPAN>\r\n            </TD>\r\n          </TR>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: outset; COLOR: #333333; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BACKGROUND-COLOR: #fffddd\"\r\n              noWrap align=right>\r\n              <SPAN id=summary02><STRONG>0.00</STRONG></SPAN>\r\n            </TD>\r\n          </TR>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: outset; COLOR: #333333; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BACKGROUND-COLOR: #fffddd\"\r\n              noWrap align=right>\r\n              <SPAN id=summary03><STRONG>0.00</STRONG></SPAN>\r\n            </TD>\r\n          </TR>\r\n          <TR>\r\n            <TD style=\"BORDER-TOP-STYLE: none; BORDER-BOTTOM-STYLE: none; COLOR: #333333; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BACKGROUND-COLOR: #fffddd\"\r\n              noWrap align=right>\r\n              <SPAN id=summary04><STRONG>12,000.00</STRONG></SPAN>\r\n            </TD>\r\n          </TR>\r\n        </TBODY>\r\n      </TABLE>\r\n    </TD>\r\n  </TR>-->\r\n</TBODY>\r\n</div>\r\n<ul>\r\n      <!-- <li *ngFor=\"let tab of tabs\">\r\n        <a href=\"#\" (click)=\"selectTab(tab)\">{{tab.tabTitle}}</a>\r\n      </li>\r\n    </ul>\r\n    <ng-content></ng-content> -->"

/***/ }),

/***/ "../../../../../src/app/controls/list-view/list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_kb02_kb02_1_kb02_1_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-1/kb02-1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Kb021Component } from '/app/kb02/kb02-1/kb02-1.component';
// import { Kb021Component } from 'C:/Users/KTB_User/Documents/Angular/gfmis/demoweb/src/app/kb02/kb02-1/kb02-1.component';
// export class Hero {
//   id: number;
//   name: string;
// }
var ListViewComponent = (function () {
    // hero: Hero = {
    //   id: 1,
    //   name: 'Windstorm'
    // };
    // TEST
    // tabs: Tab[] = [];
    // @Output() selected = new EventEmitter();
    // addTab(tab: Tab) {
    //   if (!this.tabs.length) {
    //     // tab.selected = true;
    //   }
    //   this.tabs.push(tab);
    // }
    // selectTab(tab: Tab) {
    //   // console.log('Test log');
    //   this.tabs.map((tab) => {
    //     // console.log(tab);
    //     // tab.selected = false;
    //   })
    //   // tab.selected = true;
    //   this.selected.emit({selectedTab: tab});
    // }
    function ListViewComponent(Kb021Component) {
        // if (typeof this.Kb021Component.saveTable !== 'undefined') {
        //   this.title2 = this.Kb021Component.saveTable.length;
        //   console.log(this.title2);
        //   console.log('Z');
        // } else {
        //   console.log('U');
        // }
        this.Kb021Component = Kb021Component;
        // @Input() tabTitle;
        this.title = 'Tour of Heroes';
        this.title2 = 9;
    }
    // @Output() myEvent = new EventEmitter();
    // this.myEventd.emit({selectedTab: tab});
    // formSave2(Kb021Component: Kb021Component) {
    //     // saveTable = [['Saab', 'Volvo'], ['BMW', 'Toyota']];
    //     // console.log('Array: ' + saveTable.length);
    //     if (typeof this.Kb021Component.saveTable === 'undefined') {
    //         // alert('undefined')
    //         this.Kb021Component.saveTable = [{
    //           TBFISTL: this.Kb021Component.TBFISTL,
    //           LBZZPMT: this.Kb021Component.LBZZPMT,
    //           TBFKBER: this.Kb021Component.TBFKBER,
    //           TBKOSTL: this.Kb021Component.TBKOSTL,
    //           TBHKONT: this.Kb021Component.TBHKONT,
    //           tbSearch_term: this.Kb021Component.tbSearch_term,
    //           TBWRBTR: this.Kb021Component.TBWRBTR,
    //           }]
    //         // alert(this.Kb021Component.saveTable.length);
    //     } else {
    //         this.Kb021Component.saveTable.push({
    //           TBFISTL: this.Kb021Component.TBFISTL,
    //           LBZZPMT: this.Kb021Component.LBZZPMT,
    //           TBFKBER: this.Kb021Component.TBFKBER,
    //           TBKOSTL: this.Kb021Component.TBKOSTL,
    //           TBHKONT: this.Kb021Component.TBHKONT,
    //           tbSearch_term: this.Kb021Component.tbSearch_term,
    //           TBWRBTR: this.Kb021Component.TBWRBTR,
    //           });
    // }
    //         // console.log(this.Kb021Component.saveTable);
    // }
    // constructor(private dropDownListComponent: DropDownListComponent, private elRef: ElementRef) {
    //   this.test = this.elRef.nativeElement;
    //   this.value = this.elRef.nativeElement.innerText;
    // }
    ListViewComponent.prototype.ngOnInit = function () {
        // this.DropDownViewComponent.addTab(this);
        //   if (typeof this.Kb021Component.saveTable !== 'undefined') {
        //   this.title = this.Kb021Component.saveTable[0];
        //   console.log(this.title);
        // } else {
        //   console.log('X');
        // }
        // this.title2 = this.Kb021Component.saveTable.length;
        // this.dropDownListComponent.addItem2(this);
        // this.Kb021Component.formSave();
    };
    return ListViewComponent;
}());
ListViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list-view',
        template: __webpack_require__("../../../../../src/app/controls/list-view/list-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/list-view/list-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_kb02_kb02_1_kb02_1_component__["a" /* Kb021Component */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_kb02_kb02_1_kb02_1_component__["a" /* Kb021Component */]) === "function" && _a || Object])
], ListViewComponent);

var _a;
//# sourceMappingURL=list-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/required-field-validator/required-field-validator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/required-field-validator/required-field-validator.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isError\" [style.color]=\"foreColor\">{{errorMessage}}</div>"

/***/ }),

/***/ "../../../../../src/app/controls/required-field-validator/required-field-validator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredFieldValidatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequiredFieldValidatorComponent = (function () {
    function RequiredFieldValidatorComponent() {
    }
    RequiredFieldValidatorComponent.prototype.ngOnInit = function () {
    };
    return RequiredFieldValidatorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ErrorMessage'),
    __metadata("design:type", String)
], RequiredFieldValidatorComponent.prototype, "errorMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ForeColor'),
    __metadata("design:type", String)
], RequiredFieldValidatorComponent.prototype, "foreColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('isError'),
    __metadata("design:type", Boolean)
], RequiredFieldValidatorComponent.prototype, "isError", void 0);
RequiredFieldValidatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'RequiredFieldValidator',
        template: __webpack_require__("../../../../../src/app/controls/required-field-validator/required-field-validator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/required-field-validator/required-field-validator.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RequiredFieldValidatorComponent);

//# sourceMappingURL=required-field-validator.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/row-style/row-style.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/row-style/row-style.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  row-style works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/row-style/row-style.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowStyleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RowStyleComponent = (function () {
    function RowStyleComponent() {
    }
    RowStyleComponent.prototype.ngOnInit = function () {
    };
    return RowStyleComponent;
}());
RowStyleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'RowStyle',
        template: __webpack_require__("../../../../../src/app/controls/row-style/row-style.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/row-style/row-style.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RowStyleComponent);

//# sourceMappingURL=row-style.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/selected-row-style/selected-row-style.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/selected-row-style/selected-row-style.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  selected-row-style works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/controls/selected-row-style/selected-row-style.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedRowStyleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedRowStyleComponent = (function () {
    function SelectedRowStyleComponent() {
    }
    SelectedRowStyleComponent.prototype.ngOnInit = function () {
    };
    return SelectedRowStyleComponent;
}());
SelectedRowStyleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'SelectedRowStyle',
        template: __webpack_require__("../../../../../src/app/controls/selected-row-style/selected-row-style.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/selected-row-style/selected-row-style.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SelectedRowStyleComponent);

//# sourceMappingURL=selected-row-style.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/template-field/template-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/template-field/template-field.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  template-field works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/controls/template-field/template-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateFieldComponent = (function () {
    function TemplateFieldComponent() {
    }
    TemplateFieldComponent.prototype.ngOnInit = function () {
    };
    return TemplateFieldComponent;
}());
TemplateFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'TemplateField',
        template: __webpack_require__("../../../../../src/app/controls/template-field/template-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/template-field/template-field.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TemplateFieldComponent);

//# sourceMappingURL=template-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/textbox/textbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/textbox/textbox.component.html":
/***/ (function(module, exports) {

module.exports = "<input *ngIf=\"textMode=='SingleLine'\" [style.height]=\"height\" [style.width]=\"width\" type=\"text\" name=\"{{name}}\" [(ngModel)]=\"value\"/>\r\n<textarea *ngIf=\"textMode=='MultiLine'\" [style.height]=\"height\" [style.width]=\"width\" name=\"{{name}}\" [(ngModel)]=\"value\"></textarea>\r\n<span *ngIf=\"textMode=='ReadOnly'\" [style.height]=\"height\" [style.width]=\"width\">{{value}}</span>"

/***/ }),

/***/ "../../../../../src/app/controls/textbox/textbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TEXT_BOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_controls_control_value_base_control_value_base_component__ = __webpack_require__("../../../../../src/app/controls/control-value-base/control-value-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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



var TEXT_BOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return TextboxComponent; }),
    multi: true
};
var TextboxComponent = (function (_super) {
    __extends(TextboxComponent, _super);
    function TextboxComponent() {
        var _this = _super.call(this) || this;
        _this.textMode = "SingleLine";
        return _this;
    }
    return TextboxComponent;
}(__WEBPACK_IMPORTED_MODULE_1_app_controls_control_value_base_control_value_base_component__["a" /* ControlValueBase */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('TextMode'),
    __metadata("design:type", String)
], TextboxComponent.prototype, "textMode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Height'),
    __metadata("design:type", String)
], TextboxComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('Width'),
    __metadata("design:type", String)
], TextboxComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('ID'),
    __metadata("design:type", String)
], TextboxComponent.prototype, "name", void 0);
TextboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'TextBox',
        template: __webpack_require__("../../../../../src/app/controls/textbox/textbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/textbox/textbox.component.css")],
        providers: [TEXT_BOX_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], TextboxComponent);

//http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
//http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/
//# sourceMappingURL=textbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/controls/validation-summary/validation-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/validation-summary/validation-summary.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/controls/validation-summary/validation-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationSummaryComponent = (function () {
    function ValidationSummaryComponent() {
    }
    ValidationSummaryComponent.prototype.ngOnInit = function () {
    };
    return ValidationSummaryComponent;
}());
ValidationSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ValidationSummary',
        template: __webpack_require__("../../../../../src/app/controls/validation-summary/validation-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/validation-summary/validation-summary.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ValidationSummaryComponent);

//# sourceMappingURL=validation-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/form-header/form-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-header/form-header.component.html":
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n  <tbody>\r\n  <tr>\r\n    <td style=\"WIDTH: 12px\">&nbsp;</td>\r\n    <td class=\"userHeader\">&nbsp;<span id=\"UcFormHeader1_lbHeader\">ขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ (ขบ. 02)</span></td>\r\n  </tr>\r\n  <tr>\r\n    <td>&nbsp;</td>\r\n    <td class=\"userHeaderDesc\">&nbsp;<span id=\"UcFormHeader1_lbHeaderDescription\">สร้างขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ</span></td>\r\n  </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/form-header/form-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormHeaderComponent = (function () {
    function FormHeaderComponent() {
    }
    FormHeaderComponent.prototype.ngOnInit = function () {
    };
    return FormHeaderComponent;
}());
FormHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'form-header',
        template: __webpack_require__("../../../../../src/app/form-header/form-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form-header/form-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FormHeaderComponent);

//# sourceMappingURL=form-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-launcher></app-launcher> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-1/kb02-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: black;\r\n}\r\n.t-list {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    /* width: 15em; */\r\n}\r\n.t-list li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n}\r\n.t-list tr.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: black;\r\n}\r\n.t-list tr:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n}\r\n.t-list .text {\r\n    position: relative;\r\n    top: -3px;\r\n}\r\n.t-list .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n:host >>> md-expansion-panel{\r\n  -webkit-animation: false !important;\r\n          animation: false !important;\r\n  padding-left: 0px  !important;\r\n  box-shadow: 0 0 0 0 transparent !important;\r\n}\r\n\r\n:host >>> md-expansion-panel-header{\r\n  height: 20px !important;\r\n  padding-left: 5px  !important;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n  -webkit-animation: false !important;\r\n          animation: false !important;\r\n  color: #595467;\r\n  background-color: #eeeef7 !important;\r\n  animation: false !important;\r\n}\r\n\r\n:host >>> div.mat-expansion-panel-body{\r\n  padding: 0px  !important;\r\n}\r\n\r\n/* TEST-ONLY */\r\n:host >>> mat-expansion-panel-header{\r\n  height: 20px !important;\r\n  padding-left: 5px  !important;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n  -webkit-animation: false !important;\r\n          animation: false !important;\r\n  color: #595467;\r\n  background-color: #eeeef7;\r\n  vertical-align:middle !important;\r\n  display:table-cell !important;\r\n}\r\n:host >>> md-panel-title {\r\n  height: 20px !important;\r\n  padding-left: 5px  !important;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n  color: #595467;\r\n  vertical-align:middle !important;\r\n  display:table-cell !important;\r\n}\r\n:host >>> ng-trigger-expansionHeight {\r\n  height: 20px !important;\r\n  padding-left: 5px  !important;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n}\r\n:host >>> md-panel-description {\r\n  height: 20px !important;\r\n  padding-left: 5px  !important;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n}\r\n:host >>> mat-expansion-panel-header-title {\r\n  height: 20px !important;\r\n  padding-left: 5px  !important;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n}\r\n\r\nmd-spinner {\r\n  float:left;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 5px 10px 0px 0px;\r\n}\r\n\r\n.pagination-next {\r\n  cursor: pointer;\r\n}\r\n\r\n.pagination-previous {\r\n  cursor: pointer;\r\n}\r\n\r\n.custom-pagination {\r\n\r\n}\r\n\r\n.custom-pagination ul li{\r\n  display: inline;\r\n}\r\n\r\n.text-a {\r\n  color: black;\r\n  padding: 5px;\r\n}\r\n\r\n.text-a :hover {\r\n  background-color: rgb(214, 213, 213);\r\n  cursor: pointer;\r\n}\r\n.current {\r\n  /* display:block; */\r\n  background-color: #2199e8;\r\n  padding: 5px;\r\n  color: white;\r\n}\r\n\r\n:host /deep/ .mat-tab-label {\r\n  /* min-width: 0!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important; */\r\n  background-color: #C0C1D6;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n  color: rgb(53, 53, 53) !important;\r\n  height: 25px !important;\r\n  opacity: 1;\r\n}\r\n\r\n:host >>> md-tab-header {\r\n  background-color: #4B6D96;\r\n}\r\n:host >>> .mat-tab-label-active {\r\n  background-color: #FFFFFF;\r\n  color: rgb(53, 53, 53) !important;\r\n  border: 1px;\r\n  border-color: #C0C1D6;\r\n}\r\n:host >>> .selected-tab-0 md-ink-bar {\r\n  background-color: #C0C1D6;\r\n}\r\n:host >>> .selected-tab-1 md-ink-bar {\r\n  background-color: #C0C1D6;\r\n}\r\n\r\n\r\nbr {\r\n  display: block;\r\n  margin: 3px 0;\r\n}\r\n\r\n.pointerEnable {\r\n  cursor: pointer !important;\r\n  color: black !important;\r\n   \r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: -moz-none;\r\n    user-select: none;\r\n\r\n}\r\n\r\n.pointerDisable {\r\n  cursor: default;\r\n  color: rgb(214, 213, 213);\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-1/kb02-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n<tr>\r\n<td style=\"width: 100%\">\r\n<table border=\"1\" bordercolor=\"#f5f5f5\" cellpadding=\"0\" cellspacing=\"0\" class=\"defaultTableBody\" style=\"width: 100%\">\r\n<tr>\r\n  <td colspan=\"4\" valign=\"top\">\r\n    <table border=\"1\" bordercolor=\"#f5f5f5\" cellpadding=\"0\" cellspacing=\"0\" class=\"defaultTableBody\" id=\"Table3\" style=\"width: 100%\">\r\n      <tr>\r\n        <td style=\"height: 18px; width: 164px;\"><strong>\r\n          <!--Update_Ton3-->&nbsp;<Label [ngClass]=\"contentBlue\" ID=\"cssBukrs\" runat=\"server\">รหัสหน่วยงาน</Label></strong>\r\n          <asp:RequiredFieldValidator ControlToValidate=\"BUKRS\" ErrorMessage=\"กรุณากรอกรหัสหน่วยงาน\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator7\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n          <asp:RequiredFieldValidator ControlToValidate=\"BUKRS\" ErrorMessage=\"กรุณากรอกรหัสหน่วยงาน\" ForeColor=\"Tomato\" ID=\"rvBukrs\" runat=\"server\" ValidationGroup=\"zzpmt\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"height: 18px; width: 338px;\">\r\n          <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"BUKRS\"  class=\"fontContentBlack\" ID=\"BUKRS\" MaxLength=\"4\" runat=\"server\" TabIndex=\"11\" Width=\"112px\">\r\n          <!--Update_Ton--><!-- <TextBox [(ngModel)]=\"BUKRS\"  class=\"fontContentBlack\" ID=\"BUKRS\" MaxLength=\"4\" runat=\"server\" TabIndex=\"11\" Width=\"112px\"></TextBox> -->\r\n          <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('BUKRS','cssBukrs')\" CausesValidation=\"False\" Height=\"20px\" ID=\"btBukrs\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\" runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n        </td>\r\n        <td style=\"height: 18px; width: 144px;\">\r\n          <strong>\r\n            <!--Update_Ton3--><Label [ngClass]=\"contentBlue\" ID=\"cssBLDAT\" runat=\"server\">วันที่เอกสาร</Label>\r\n          </strong>\r\n          <asp:RequiredFieldValidator ControlToValidate=\"TBBLDAT\" ErrorMessage=\"กรุณาเลือกวันที่เอกสาร\" ForeColor=\"Tomato\" ID=\"rvBLDAT\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"color: #000000; height: 18px\">\r\n            <!-- <input type=\"date\" name=\"\" id=\"\" date-format=\"DD MMMM YYYY\" [value]=\"DATEA | date:'yyyy-MM-dd'\"> -->\r\n          <!--Update_Ton-->\r\n          <!-- <input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"TBBLDAT\" class=\"fontContentBlack\" ID=\"TBBLDAT\" MaxLength=\"8\" runat=\"server\" Width=\"100px\" TabIndex=\"1\">\r\n          &nbsp;&nbsp;<img [hidden]=\"SHOWBT\" id=\"calendar1\" runat=\"server\" src=\"assets/Images/imgCal.jpg\"/>  -->\r\n\r\n\r\n            <!--<TextBox [(ngModel)]=\"TBBLDAT\" class=\"fontContentBlack\" ID=\"TBBLDAT\" MaxLength=\"8\"  #abc runat=\"server\" Width=\"100px\" TabIndex=\"1\"></TextBox>\r\n          &nbsp;&nbsp;<img id=\"TBBLDAT_calendar1\" runat=\"server\" src=\"assets/Images/imgCal.jpg\"/>\r\n          <div style=\"display:inline-none; min-height:290px;\">\r\n        <datepicker ng-model=\"dt\" min-date=\"minDate\" show-weeks=\"true\" class=\"well well-sm\"></datepicker>\r\n      </div>-->\r\n      <!-- <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp1\" [(ngModel)]=\"newItem.EndTime\"  ngbDatepicker #d1=\"ngbDatepicker\" required>\r\n       <img class=\"input-group-addon\" (click)=\"d1.toggle()\" src=\"assets/Images/imgCal.jpg\"/> -->\r\n       <md-input-container style=\"width: 144px;\">\r\n        <input mdInput [(ngModel)]=\"DATEA\" data-date-format='yy-mm-dd' [mdDatepicker]=\"aDatepicker\"\r\n        (ngModelChange)=\"DATEACC = onSelectDate('a')\" [disabled]=\"DSTBALL\">\r\n        <!-- <button mdSuffix [mdDatepickerToggle]=\"aDatepicker\"></button> -->\r\n        <md-datepicker-toggle mdSuffix [for]=\"aDatepicker\" [disabled]=\"DSTBALL\"></md-datepicker-toggle>\r\n      </md-input-container>\r\n      <md-datepicker #aDatepicker></md-datepicker>\r\n          <!-- <tr>\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"DATEACC\" ngbDatepicker #d=\"ngbDatepicker\"\r\n                         (ngModelChange)=\"DATEACC = onSelectDate('acc')\" >\r\n                  <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <img src=\"assets/Images/imgCal.jpg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <hr/>\r\n            <pre>Model: {{ DATEACC | json }}</pre>\r\n          </tr> -->\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 21px\">&nbsp;</td>\r\n        <td colspan=\"3\" style=\"height: 21px\">\r\n          <TextBox [(ngModel)]=\"LBBUKRS\" TextMode=\"ReadOnly\"  BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"LBBUKRS\" runat=\"server\" Width=\"230px\"></TextBox>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px; width: 164px;\">\r\n          &nbsp;<strong class=\"fontContentBlack\">\r\n            <!--Update_Ton3--><Label [ngClass]=\"contentBlue\" ID=\"cssGsber\" runat=\"server\">รหัสพื้นที่</Label>\r\n          </strong>\r\n        </td>\r\n        <td style=\"height: 18px; width: 338px;\">\r\n          <!--Update_Ton--><select [disabled]=\"DSTBALL\" class=\"fontContentBlack\" ID=\"ddGsber\" runat=\"server\" Width=\"140px\">\r\n          <!--Update_Ton-->  <option value=\"1000 - กรุงเทพมหานคร\">1000 - กรุงเทพมหานคร</option>\r\n          <!--Update_Ton--></select>\r\n          <!-- <asp:DropDownList class=\"fontContentBlack\" ID=\"ddGsber\" runat=\"server\" Width=\"140px\">\r\n            <asp:ListItem value=\"1000 - กรุงเทพมหานคร\"></asp:ListItem>\r\n          </asp:DropDownList> -->\r\n        </td>\r\n        <td style=\"height: 18px; width: 144px;\">\r\n          <strong>\r\n            <!--Update_Ton3--><Label [ngClass]=\"contentBlue\" ID=\"cssBUDAT\" runat=\"server\">วันที่ผ่านรายการ</Label>\r\n          </strong>\r\n          <asp:RequiredFieldValidator ControlToValidate=\"TBBUDAT\" ErrorMessage=\"กรุณาเลือกวันที่ผ่านรายการ\" ForeColor=\"Tomato\" ID=\"rvBUDAT\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"color: #000000; height: 18px\">\r\n          <!--Update_Ton-->\r\n          <!-- <input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"TBBUDAT\" class=\"fontContentBlack\" ID=\"TBBUDAT\" MaxLength=\"8\" OnTextChanged=\"TBBUDAT_TextChanged\" runat=\"server\" TabIndex=\"3\" Width=\"100px\">&nbsp; -->\r\n          <!-- <img [hidden]=\"SHOWBT\" id=\"calendar2\" runat=\"server\" src=\"assets/Images/imgCal.jpg\" /> -->\r\n\r\n          <md-input-container style=\"width: 144px;\">\r\n            <input mdInput [(ngModel)]=\"DATEI\" [mdDatepicker]=\"iDatepicker\"\r\n            (ngModelChange)=\"DATEINV = onSelectDate('i')\" [disabled]=\"DSTBALL\">\r\n            <md-datepicker-toggle mdSuffix [for]=\"iDatepicker\" [disabled]=\"DSTBALL\"></md-datepicker-toggle>\r\n            <!-- <button mdSuffix [mdDatepickerToggle]=\"iDatepicker\"></button> -->\r\n          </md-input-container>\r\n          <md-datepicker #iDatepicker></md-datepicker>\r\n          <!-- <tr>\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dp\"  ngbDatepicker #dinv=\"ngbDatepicker\"\r\n                         [(ngModel)]=\"DATEINV\" (ngModelChange)=\"DATEINV = onSelectDate('inv')\">\r\n\r\n                  <button class=\"input-group-addon\" (click)=\"dinv.toggle()\" type=\"button\">\r\n                    <img src=\"assets/Images/imgCal.jpg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <hr/>\r\n            <pre>Model: {{ DATEINV | json }}</pre>\r\n          </tr> -->\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 21px\">&nbsp;</td>\r\n        <td colspan=\"3\" style=\"height: 21px\">\r\n          <Label ID=\"LBGSBER\" runat=\"server\"></Label>&nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <!--Update_Ton3-->&nbsp;<strong [ngClass]=\"contentBlue\">\r\n            <Label   ID=\"cssZzpmt\" runat=\"server\">รหัสหน่วยเบิกจ่าย</Label>\r\n            <asp:RequiredFieldValidator ControlToValidate=\"TBZZPMT\" ErrorMessage=\"กรุณากรอกรหัสหน่วยเบิกจ่าย\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator9\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n          </strong>\r\n        </td>\r\n        <td>\r\n          <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"TBZZPMT\"   class=\"fontContentBlack\" ID=\"TBZZPMT\" MaxLength=\"15\" runat=\"server\" Width=\"112px\">\r\n          <!--Update_Ton--><!-- <asp:TextBox [(ngModel)]=\"TBZZPMT\"   class=\"fontContentBlack\" ID=\"TBZZPMT\" MaxLength=\"15\" runat=\"server\" Width=\"112px\"></asp:TextBox> -->\r\n          <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('TBZZPMT','cssZzpmt')\" Height=\"20px\" ID=\"btZzpmt\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\"  runat=\"server\" ToolTip=\"ค้นหา\" ValidationGroup=\"zzpmt\" Width=\"22px\"></ImageButton>\r\n        </td>\r\n        <td>\r\n          <strong class=\"fontContentBlack\">\r\n            <Label class=\"fontContentBlack\" ID=\"cssMonat\" runat=\"server\">งวด</Label>\r\n          </strong>\r\n        </td>\r\n        <td align=\"left\">\r\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n            <tr>\r\n              <td>\r\n                <!--<asp:DropDownList ForeColor=\"#666666\" ID=\"ddMonat\" runat=\"server\" TabIndex=\"8\" Width=\"41px\">\r\n                  <asp:ListItem Selected=\"True\">12</asp:ListItem>\r\n                  <asp:ListItem value=\"13\">13</asp:ListItem>\r\n                  <asp:ListItem>14</asp:ListItem>\r\n                  <asp:ListItem>15</asp:ListItem>\r\n                  <asp:ListItem>16</asp:ListItem>\r\n                </asp:DropDownList>-->\r\n                {{ddMonat}}\r\n              </td>\r\n              <td>\r\n                <!--<asp:TextBox BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"lbMonat\" runat=\"server\" Width=\"27px\"></asp:TextBox>-->\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px; width: 164px;\"></td>\r\n        <td colspan=\"3\" style=\"height: 18px\">\r\n          <asp:TextBox [(ngModel)]=\"LBZZPMT\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"LBZZPMT\" runat=\"server\" Width=\"230px\"></asp:TextBox>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px; width: 164px;\">\r\n          &nbsp;<strong>\r\n            <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssXBLNR\" runat=\"server\">การอ้างอิง</Label>\r\n          </strong><asp:RequiredFieldValidator ControlToValidate=\"TBXBLNR\" ErrorMessage=\"กรุณากรอกการอ้างอิง\" ForeColor=\"Tomato\" ID=\"rvXBLNR\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"height: 18px; width: 338px;\">\r\n          <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"TBXBLNR\" class=\"fontContentBlack\" ID=\"TBXBLNR\" MaxLength=\"16\" runat=\"server\" TabIndex=\"6\">\r\n        </td>\r\n        <td [hidden]=\"SHOWTR\" style=\"height: 18px; width: 144px;\">\r\n          <strong>\r\n            <Label class=\"fontContentBlack\" Font-Bold=\"True\" ID=\"lbBlartTitle\" runat=\"server\" Text=\"ประเภทเอกสาร\"></Label>\r\n          </strong>&nbsp;\r\n        </td>\r\n        <td [hidden]=\"SHOWTR\" style=\"height: 18px\">\r\n          <Label ID=\"lbBlart\" runat=\"server\" >{{DOCTYPE}}</Label>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"4\" style=\"height: 21px\">&nbsp;</td>\r\n      </tr>\r\n      <tr [hidden]=\"SHOWTR\" id=\"afterSuccess1\" bgcolor=\"#FFFFE1\" >\r\n        <td style=\"height: 18px; width: 164px;\">\r\n          &nbsp;<strong>\r\n            <Label class=\"fontContentBlack strong\" ID=\"cssNUMTR\" runat=\"server\">เลขที่ใบขอเบิก</Label>\r\n          </strong>\r\n        </td>\r\n        <td style=\"height: 18px; width: 338px;\">\r\n          <Label class=\"fontContentBlack\">{{BELNR}} &nbsp; {{GJAHR}}</Label>\r\n          <!-- <asp:TextBox [(ngModel)]=\"BELNR\" TextMode=\"ReadOnly\" class=\"fontContentBlack\" ID=\"BELNR\" MaxLength=\"16\" runat=\"server\" TabIndex=\"6\"></asp:TextBox> -->\r\n        </td>\r\n        <td style=\"height: 18px; width: 144px;\">\r\n          <strong>\r\n            <Label class=\"fontContentBlack\" Font-Bold=\"True\" ID=\"lbBlartTitle\" runat=\"server\" Text=\"เลขที่เอกสารกลับรายการ\" Visible=\"true\"></Label>\r\n          </strong>&nbsp;\r\n        </td>\r\n        <td style=\"height: 18px\">\r\n          &nbsp;\r\n          <asp:TextBox TextMode=\"ReadOnly\" class=\"fontContentBlack\" ID=\"TBXBLNR\" MaxLength=\"16\" runat=\"server\" TabIndex=\"6\"></asp:TextBox>\r\n           <!-- <asp:TextBox [(ngModel)]=\"TBXBLNR\" TextMode=\"ReadOnly\" class=\"fontContentBlack\" ID=\"TBXBLNR\" MaxLength=\"16\" runat=\"server\" TabIndex=\"6\"></asp:TextBox> -->\r\n        </td>\r\n      </tr>\r\n      <tr [hidden]=\"SHOWTR\" id=\"afterSuccess2\" bgcolor=\"#FFFFE1\" >\r\n        <td colspan=\"4\" style=\"height: 21px\">&nbsp;</td>\r\n      </tr>\r\n      <tr [hidden]=\"SHOWTR\" id=\"afterSuccess3\" bgcolor=\"#FFFFE1\" >\r\n        <td style=\"height: 18px; width: 164px;\">\r\n          &nbsp;<strong>\r\n            <Label class=\"fontContentBlack strong\" ID=\"cssXBLNR\" runat=\"server\">ผู้บันทึกรายการ</Label>\r\n          </strong><asp:RequiredFieldValidator ControlToValidate=\"TBXBLNR\" ErrorMessage=\"กรุณากรอกการอ้างอิง\" ForeColor=\"Tomato\" ID=\"rvXBLNR\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"height: 18px; width: 144px;\">\r\n            <asp:TextBox [(ngModel)]=\"LUSERID\" TextMode=\"ReadOnly\"  BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"ZZFIELD1_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>\r\n        </td>\r\n\r\n        <td style=\"height: 18px\">\r\n          &nbsp;\r\n        </td>\r\n        <td style=\"height: 18px\">\r\n            &nbsp;\r\n         </td>\r\n      </tr>\r\n      <tr [hidden]=\"SHOWTR\" id=\"afterSuccess4\" bgcolor=\"#FFFFE1\" >\r\n        <td colspan=\"4\" style=\"height: 21px\">&nbsp;</td>\r\n      </tr>\r\n      <tr [hidden]=\"HIDEBT\" id=\"ucKb02_1_trExcel1\">\r\n\t      <!--Update_Ton3--><td style=\"height: 18px\">&nbsp;<span id=\"cssUploadExcel\" [ngClass]=\"contentGreen\" style=\"font-weight:bold;\">ดึงข้อมูลจากไฟล์</span></td>\r\n\t      <td style=\"height: 18px\"><a onclick=\"OpenWindow('pages/Attribute_Excel.aspx?DocumentNo=kb02&amp;Status=add',450,120); return false;\" id=\"ucKb02_1_btUpLoadExcel\" class=\"POSelection\" href=\"javascript:__doPostBack('ucKb02_1$btUpLoadExcel','')\" style=\"font-family:tahoma;font-size:11px;font-weight:normal;\">แนบไฟล์</a></td>\r\n\t      <td style=\"height: 18px\">&nbsp;</td>\r\n\t      <td style=\"height: 18px\"> &nbsp;</td>\r\n      </tr>\r\n      <tr [hidden]=\"HIDEBT\">\r\n        <td colspan=\"4\" style=\"height: 21px\">&nbsp;</td>\r\n      </tr>\r\n    </table>\r\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"TBAccNumTitle\" runat=\"server\" style=\"width: 100%;display:none;\" visible=\"false\">\r\n      <tr>\r\n        <td style=\"background-color: infobackground; height: 23px; width: 153px;\" valign=\"middle\">\r\n          &nbsp;<strong><Label class=\"fontContentBlack\" Font-Bold=\"True\" ID=\"lbAccNumTitle\" runat=\"server\" Text=\"เลขที่ใบขอเบิก\" Visible=\"true\"></Label></strong>\r\n        </td>\r\n        <td style=\"background-color: infobackground; height: 23px; width: 209px;\" valign=\"middle\">\r\n          <Label ForeColor=\"#666666\" ID=\"lbBELNR\" runat=\"server\">3100000036</Label>\r\n          &nbsp;\r\n          <Label ForeColor=\"#666666\" ID=\"lbGJAHR\" runat=\"server\">2016</Label>&nbsp;\r\n        </td>\r\n        <td style=\"background-color: infobackground; height: 23px; width: 138px;\" valign=\"middle\">\r\n          <Label class=\"fontContentBlack strong\" Font-Bold=\"True\" ID=\"lbBELNRTitle\" runat=\"server\" Text=\"เลขที่เอกสารกลับรายการ\" Visible=\"true\"></Label>&nbsp;\r\n        </td>\r\n        <td style=\"background-color: infobackground; height: 23px;\" valign=\"middle\">\r\n          <asp:LinkButton CausesValidation=\"False\" Font-Underline=\"False\" ID=\"lbSTBLG\" OnClick=\"lbSTBLG_Click\" runat=\"server\"></asp:LinkButton>\r\n          <Label ForeColor=\"#666666\" ID=\"lbSTJAH\" runat=\"server\"></Label>\r\n          <asp:Button CausesValidation=\"False\" Font-Names=\"Tahoma\" Font-Size=\"11px\" Height=\"21px\" ID=\"btnDisplayRevDoc\" OnClick=\"btnDisplayRevDoc_Click\" runat=\"server\" Text=\"แสดงเอกสาร\" Visible=\"False\" Width=\"75px\"/>&nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"background-color: infobackground; height: 23px; width: 153px;\" valign=\"middle\">\r\n          &nbsp;<Label class=\"fontContentBlack strong\" Font-Bold=\"True\" ID=\"Label1\" runat=\"server\" Text=\"ผู้บันทึกรายการ\"></Label>\r\n        </td>\r\n        <td style=\"background-color: infobackground; height: 23px; width: 209px;\" valign=\"middle\">\r\n          <Label ForeColor=\"#666666\" ID=\"lbLuserId\" runat=\"server\">120050001110</Label>\r\n        </td>\r\n        <td style=\"background-color: infobackground; height: 23px; width: 138px;\" valign=\"middle\">\r\n          <Label class=\"fontContentBlack\" Font-Bold=\"True\" ID=\"lbFollowDoc\" runat=\"server\" Text=\"เอกสาร Auto\" Visible=\"false\"></Label>\r\n        </td>\r\n        <td style=\"background-color: infobackground; height: 23px;\" valign=\"middle\">\r\n          <asp:LinkButton CausesValidation=\"False\" class=\"POSelection\" Font-Bold=\"False\" Font-Names=\"tahoma\" Font-Size=\"11px\" Font-Underline=\"True\" ID=\"btnFollowDoc\" runat=\"server\" Visible=\"False\">แสดงเอกสาร</asp:LinkButton>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr>\r\n<td align=\"center\">\r\n<table style=\"width: 100%;\">\r\n  <tr>\r\n    <md-tab-group selectedIndex=\"0\" #tabGroup class=\"selected-tab-{{tabGroup.selectedIndex}}\">\r\n      <md-tab label=\"ข้อมูลทั่วไป\" class=\"disable-select\" mat-ripple=\"disableRipple\" >\r\n          <div id=\"gfForm1\">\r\n            <br>\r\n              <table border=\"0\" bordercolor=\"#f5f5f5\" cellpadding=\"0\" cellspacing=\"0\" id=\"section1\" style=\"width: 100%;\">\r\n                <tr>\r\n                  <td align=\"left\" colspan=\"4\" style=\"background-color: #eeeef7; height: 18px;\">\r\n                    <span style=\"color: black\">\r\n                      &nbsp;<strong style=\"color: #595467; font-size: 12px\">ประเภทรายการขอเบิก</strong> <strong style=\"color: #595467; font-size: 12px\">/ การชำระเงิน</strong>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 18px; width: 162px;\">\r\n                    <br>\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentBlue\" ID=\"cssBLART\" runat=\"server\">ประเภทรายการขอเบิก</Label>\r\n                    </strong>\r\n                    <asp:CustomValidator ControlToValidate=\"DDBLART\" ErrorMessage=\"วิธีการชำระเงินไม่ตรงกับประเภทรายการขอเบิก\" ForeColor=\"Tomato\" ID=\"cvBlart\" OnServerValidate=\"cvBlart_ServerValidate\" runat=\"server\">*</asp:CustomValidator>\r\n                  </td>\r\n                  <td colspan=\"3\" style=\"height: 18px\">\r\n                    <!--Update_Ton--><select [disabled]=\"DSTBALL\" [(ngModel)]=\"selectedblart\" style=\"width:260px\">\r\n                    <!--Update_Ton-->  <option *ngFor=\"let c of soblartList\" [ngValue]=\"c.id\">{{c.Name}}</option>\r\n                    <!--Update_Ton--></select>\r\n                    <!-- <asp:DropDownList [values]=\"ddblartList\" class=\"fontContentBlack\" ID=\"DDBLART\" runat=\"server\" TabIndex=\"7\" Width=\"270px\">\r\n                    </asp:DropDownList> -->\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 18px; width: 162px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentBlue\" ID=\"cssZlsch\" runat=\"server\">วิธีการชำระเงิน</Label>\r\n                    </strong>\r\n                  </td>\r\n                  <td colspan=\"3\" style=\"height: 18px\">\r\n                    <!-- <asp:DropDownList [values]=\"ddZlschList\" class=\"fontContentBlack\" ID=\"ddZlsch\" runat=\"server\" Width=\"270px\">\r\n                    </asp:DropDownList> -->\r\n                    <!--Update_Ton--><select [disabled]=\"DSTBALL\" [(ngModel)]=\"selectedZlsch\" style=\"width:260px\">\r\n                    <!--Update_Ton-->  <option *ngFor=\"let c of soZlschList\" [ngValue]=\"c.id\">{{c.Name}}</option>\r\n                    <!--Update_Ton--></select>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"4\" style=\"height: 18px\">\r\n                    &nbsp;&nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" colspan=\"4\" style=\"background-color: #eeeef7; height: 18px;\">\r\n                    &nbsp;<strong style=\"color: #595467; font-size: 12px\">รายละเอียดงบประมาณ</strong>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 25px; width: 162px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssGEBER\" runat=\"server\">แหล่งของเงิน</Label>\r\n                    </strong>\r\n                    <asp:RequiredFieldValidator ControlToValidate=\"GEBER\" ErrorMessage=\"กรุณากรอกรหัสแหล่งของเงิน\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator4\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:RequiredFieldValidator>\r\n                  </td>\r\n                  <td colspan=\"3\">\r\n                    <select [(ngModel)]=\"YEAR\" [disabled]=\"DSTBALL\" style=\"width: 50px\">\r\n                      <option *ngFor=\"let c of yearList\" [ngValue]=\"c.YESR\">{{c.YESR}}</option>\r\n                    </select>\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"GEBER\"   class=\"fontContentBlack\" ID=\"GEBER\" MaxLength=\"7\" runat=\"server\" TabIndex=\"13\" Width=\"60px\">\r\n                    <ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('GEBER','cssGEBER')\"  CausesValidation=\"False\" Height=\"20px\" ID=\"BTGEBER\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 17px; width: 162px;\">&nbsp;</td>\r\n                  <td colspan=\"3\" style=\"height: 17px\">\r\n                    <asp:TextBox [(ngModel)]=\"GEBER_NAME\" TextMode=\"ReadOnly\"  BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"GEBER_NAME\" runat=\"server\" Width=\"379px\"></asp:TextBox>&nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 17px; width: 162px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentGreen\" ID=\"cssKBLNR\" runat=\"server\">เลขที่เอกสารสำรองเงิน</Label>\r\n                    </strong>\r\n                  </td>\r\n                  <td colspan=\"3\" style=\"height: 17px\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"TBKBLNR\" class=\"fontContentBlack\" ID=\"TBKBLNR\" MaxLength=\"10\" runat=\"server\" Width=\"112px\">\r\n                    <!--Update_Ton--><!-- <asp:TextBox class=\"fontContentBlack\" ID=\"TBKBLNR\" MaxLength=\"10\" runat=\"server\" Width=\"112px\"></asp:TextBox> -->\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTKBLNR\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\" OnClick=\"btEventClick\" runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\" Visible=\"false\"></ImageButton>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 17px; width: 162px;\">&nbsp;</td>\r\n                  <td colspan=\"3\" style=\"height: 17px\">\r\n                    <asp:TextBox [(ngModel)]=\"LBKBLNR\" BackColor=\"White\" TextMode=\"ReadOnly\"  BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"LBKBLNR\" runat=\"server\" Width=\"379px\" ></asp:TextBox>&nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" colspan=\"4\" style=\"background-color: #f0eef8; height: 18px;\">\r\n                    &nbsp;<strong style=\"color: #595467; font-size: 12px;\">ข้อมูลผู้รับเงิน</strong>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" style=\"height: 18px; width: 162px;\">\r\n                    <strong>&nbsp;\r\n                    <Label [ngClass]=\"contentRed\">เลขประจำตัวบัตรประชาชน/</Label>\r\n                    <br>&nbsp;\r\n                    <Label [ngClass]=\"contentRed\">เลขประจำตัวผู้เสียภาษี</Label></strong>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 244px;\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"tbSearch_term\"  class=\"fontContentBlack\" ID=\"tbSearch_term\" MaxLength=\"13\" runat=\"server\" Width=\"120px\">\r\n                    <!--Update_Ton--><!-- <asp:TextBox [(ngModel)]=\"tbSearch_term\"  class=\"fontContentBlack\" ID=\"tbSearch_term\" MaxLength=\"13\" runat=\"server\" Width=\"120px\"></asp:TextBox> -->\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 211px;\">\r\n                    <strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssBankn\" runat=\"server\">เลขที่บัญชีเงินฝากธนาคาร</Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"tbBankn\" ErrorMessage=\"กรุณากรอกเลขที่บัญชีเงินฝากธนาคาร\" ForeColor=\"Tomato\" ID=\"rvBankn\" runat=\"server\">*</asp:RequiredFieldValidator>\r\n                  </td>\r\n                  <td style=\"height: 18px;\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"tbBankn\"  class=\"fontContentBlack\" ID=\"tbBankn\" MaxLength=\"18\" runat=\"server\" Width=\"120px\">\r\n                    <!--Update_Ton--><!-- <asp:TextBox [(ngModel)]=\"tbBankn\"  class=\"fontContentBlack\" ID=\"tbBankn\" MaxLength=\"18\" runat=\"server\" Width=\"120px\"></asp:TextBox> -->\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 162px;\"><Label class=\"fontContentBlack\" ID=\"cssBankn\" runat=\"server\"></Label></td>\r\n                  <td style=\"height: 18px; width: 244px;\">\r\n                    <TextBox [(ngModel)]=\"LBTERM\" TextMode=\"ReadOnly\"  BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"LBTERM\" runat=\"server\" Width=\"230px\"></TextBox>\r\n                  </td>\r\n                  <td style=\"height: 18px;\">\r\n                    <!--<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"ucKb02_1_TBPermisTrns\">\r\n                      <tbody>\r\n                      <tr>\r\n                        <td>\r\n                          <input id=\"ucKb02_1_btPermisTrns\" name=\"ucKb02_1$btPermisTrns\" onclick=\"ShowObjectPosition('ucKb02_1_btPermisTrns', 'TBPermsTransPop');return false;\" style=\"FONT-FAMILY: Tahoma; FONT-SIZE: 11px; HEIGHT: 21px;\" type=\"submit\" value=\"โอนสิทธิการชำระเงิน\">\r\n                        </td>\r\n                        <td>\r\n                          <img id=\"imgPrmsTrnsStatus\" src=\"assets/Images/Icon/apply2_disable.gif\" style=\"DISPLAY: block\">\r\n                        </td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>-->\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" colspan=\"4\" style=\"background-color: #eeeef7; height: 18px;\">\r\n                    <strong style=\"color: #595467; font-size: 12px\">คำอธิบายเอกสาร</strong>\r\n                  </td>\r\n                </tr>\r\n                <tr style=\"font-weight: bold\">\r\n                  <td align=\"center\" colspan=\"4\" rowspan=\"2\">\r\n                    <br>\r\n                    <textarea type=\"textarea\" [disabled]=\"DSTBALL\" Font-Size=\"11px\" ForeColor=\"#666666\" Height=\"73px\" ID=\"tbTLine\" runat=\"server\" TextMode=\"MultiLine\" style=\"Width: 653px\"></textarea>\r\n                  </td>\r\n                </tr>\r\n                <tr ></tr>\r\n                <tr style=\"height: 18px;\">\r\n                  <td align=\"center\" colspan=\"4\" rowspan=\"1\"></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n      </md-tab>\r\n      <md-tab label=\"รายการขอเบิก\">\r\n          <div id=\"gfForm2\">\r\n            <br>\r\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"section2\" width=\"100%\">\r\n              <tr>\r\n                <td colspan=\"7\" style=\"background-color: #eeeef7\">\r\n                  <table style=\"background-color: #eeeef7\"  border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"98%\">\r\n                    <tr>\r\n                      <td>\r\n                        <strong>\r\n                          <span style=\"color: #595467; font-size: 12px;\">รายละเอียดเอกสาร&nbsp;</span>\r\n                        </strong>\r\n                        <span *ngIf=\"panel==false\">\r\n                          <img  alt=\"กดเพื่อ แสดง/ซ่อน รายละเอียดเอกสาร\" id=\"switchTag\" (click)=\"panel=true\" src=\"assets/Images/Icon/collapse.gif\" style=\"cursor: pointer; transform: rotate(180deg);\"/>\r\n                        </span>\r\n                        <span *ngIf=\"panel==true\">\r\n                          <img alt=\"กดเพื่อ แสดง/ซ่อน รายละเอียดเอกสาร\" id=\"switchTag\" (click)=\"panel=false\" src=\"assets/Images/Icon/collapse.gif\" style=\"cursor: pointer;\"/>\r\n                        </span>\r\n                      </td>\r\n                      <td class=\"pointerEnable\" align=\"right\" *ngIf=\"showdoc==true\">\r\n                        <span [class.pointerDisable]=\"lbNUMBER === 1\"\r\n                          [class.selected]=\"SAVELIST === selectedList\"\r\n                          (click)=\"onSelect(SAVELIST[lbNUMBER-2],lbNUMBER-2)\"\r\n                        >&laquo; ก่อนหน้า </span>\r\n                        <span>{{lbNUMBER}}/{{SAVELIST.length}}</span>\r\n                        <span [class.pointerDisable]=\"lbNUMBER === SAVELIST.length\"\r\n                          [class.selected]=\"SAVELIST === selectedList\"\r\n                          (click)=\"onSelect(SAVELIST[lbNUMBER],lbNUMBER)\"\r\n                        > ถัดไป &raquo;</span>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"panel==true\">\r\n              <td>\r\n              <!-- <md-expansion-panel [expanded]='EXPAND'>\r\n                <md-expansion-panel-header>\r\n                  <md-panel-title>\r\n                    รายละเอียดเอกสาร\r\n                  </md-panel-title>\r\n                  <md-panel-title align=\"right\">\r\n                    <span align=\"right\">ก่อนหน้า</span>\r\n                    <span align=\"right\">{{lbNUMBER}}/{{SAVELIST.length}}</span>\r\n                    <span align=\"right\">ถัดไป</span>\r\n                  </md-panel-title>\r\n                  <md-panel-description>\r\n                  </md-panel-description>\r\n                </md-expansion-panel-header> -->\r\n                <br>\r\n\r\n\r\n\r\n              <table border=\"0\" bordercolor=\"#f5f5f5\" cellpadding=\"0\" cellspacing=\"0\" class=\"defaultTableBody\" id=\"TBDetailTable\" width=\"100%\">\r\n                <tr>\r\n                  <td style=\"height: 22px; width: 140px;\">\r\n                    &nbsp;<strong class=\"fontContentBlack\">\r\n                      ลำดับ</strong> &nbsp; &nbsp;\r\n                    <Label Font-Bold=\"False\" ForeColor=\"#666666\" ID=\"lbNUMBER\" runat=\"server\" Text=\"\">{{lbNUMBER}}</Label>\r\n                  </td>\r\n                  <td style=\"color: #666666; font-weight: bold; height: 22px; width: 299px;\">\r\n                    <Label Font-Bold=\"True\" ForeColor=\"#666666\" ID=\"lbPk\" runat=\"server\" TabIndex=\"-1\" Visible=\"False\"></Label>\r\n                    <Label Font-Bold=\"False\" ForeColor=\"#666666\" ID=\"lbBschl\" runat=\"server\" TabIndex=\"-1\" Visible=\"False\"></Label>&nbsp;\r\n                  </td>\r\n                  <td style=\"color: #000000; font-weight: bold; height: 22px; width: 154px;\" valign=\"middle\">\r\n                    <strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssHKONT\" runat=\"server\">\r\n                        รหัสบัญชีแยกประเภท\r\n                      </Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"HKONT\" ErrorMessage=\"กรุณากรอกรหัสบัญชีแยกประเภท\" ID=\"RequiredFieldValidator3\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:RequiredFieldValidator>\r\n                  </td>\r\n                  <td colspan=\"2\" style=\"color: #000000; height: 22px; width: 159px;\" valign=\"middle\">\r\n                    <strong>\r\n                      <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"HKONT\"  class=\"fontContentBlack\" ID=\"HKONT\" MaxLength=\"10\" runat=\"server\" TabIndex=\"11\" Width=\"112px\"/>\r\n                      <!--Update_Ton--><!-- <asp:TextBox [(ngModel)]=\"HKONT\"  class=\"fontContentBlack\" ID=\"HKONT\" MaxLength=\"10\" runat=\"server\" TabIndex=\"11\" Width=\"112px\"/> -->\r\n                      <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('HKONT','cssHKONT')\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTHKONT\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\" runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                    </strong>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 299px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td colspan=\"2\" style=\" height: 18px; width: 159px;\" valign=\"middle\">\r\n                    <asp:TextBox [(ngModel)]=\"HKONT_NAME\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"HKONT_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>\r\n                  </td>\r\n                </tr>\r\n                <tr style=\"font-weight: bold\">\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssKOSTL\" runat=\"server\">รหัสศูนย์ต้นทุน</Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"KOSTL\" ErrorMessage=\"กรุณากรอกรหัสศูนย์ต้นทุน\" ID=\"RequiredFieldValidator1\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:RequiredFieldValidator>\r\n                  </td>\r\n                  <td style=\"color: #000000; height: 18px; width: 299px;\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"KOSTL\"  class=\"fontContentBlack\" ID=\"KOSTL\" MaxLength=\"10\" runat=\"server\" TabIndex=\"12\" Width=\"112px\"/>\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('KOSTL','cssKOSTL')\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTKOSTL\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\" runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px;\" valign=\"middle\">\r\n                    <strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssFISTL\" runat=\"server\">รหัสงบประมาณ</Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"FISTL\" ErrorMessage=\"กรุณากรอกรหัสงบประมาณ\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator2\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:RequiredFieldValidator><asp:CustomValidator ControlToValidate=\"FISTL\" ErrorMessage=\"รหัสงบประมาณไม่ถูกต้อง\" ForeColor=\"Tomato\" ID=\"cvFistl\" OnServerValidate=\"cvFistl_ServerValidate\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:CustomValidator>\r\n                  </td>\r\n                  <td colspan=\"2\" style=\"color: #000000; height: 18px; width: 159px;\" valign=\"middle\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"FISTL\" class=\"fontContentBlack\" ID=\"FISTL\" MaxLength=\"16\" runat=\"server\" TabIndex=\"14\" Width=\"112px\">\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('FISTL','cssFISTL')\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTFISTL\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\"  runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 299px;\">\r\n                    <asp:TextBox [(ngModel)]=\"KOSTL_NAME\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"KOSTL_NAME\" runat=\"server\" Width=\"288px\"></asp:TextBox>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td colspan=\"2\" style=\" height: 18px; width: 159px;\" valign=\"middle\">\r\n                    <asp:TextBox [(ngModel)]=\"FISTL_NAME\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"FISTL_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>&nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr style=\"font-weight: bold\">\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssFKBER\" runat=\"server\">รหัสกิจกรรมหลัก</Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"FKBER\" ErrorMessage=\"กรุณากรอกรหัสกิจกรรมหลัก\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator5\" runat=\"server\" ValidationGroup=\"kb02\" Width=\"7px\">*</asp:RequiredFieldValidator><asp:CustomValidator ControlToValidate=\"FKBER\" ErrorMessage=\"รหัสกิจกรรมหลักไม่ถูกต้อง\" ForeColor=\"Tomato\" ID=\"cvFkber\" OnServerValidate=\"cvFkber_ServerValidate\" runat=\"server\" ValidationGroup=\"kb02\" Width=\"7px\">*</asp:CustomValidator>\r\n                  </td>\r\n                  <td style=\"color: #000000; height: 18px; width: 299px;\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"FKBER\" class=\"fontContentBlack\" ID=\"FKBER\" MaxLength=\"16\" runat=\"server\" TabIndex=\"15\" Width=\"112px\">\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('FKBER','cssFKBER')\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTFKBER\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\"  runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px;\" valign=\"middle\">\r\n                    <strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentGreen\" ID=\"lbPrznrTitle\" runat=\"server\" Text=\"รหัสกิจกรรมย่อย\"></Label>\r\n                    </strong>&nbsp;\r\n                  </td>\r\n                  <td colspan=\"2\" style=\"color: #000000; height: 18px; width: 159px;\" valign=\"middle\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"PRZNR\" class=\"fontContentBlack\" ID=\"PRZNR\" MaxLength=\"12\" runat=\"server\" Width=\"112px\">\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('PRZNR','lbPrznrTitle')\" CausesValidation=\"False\" Height=\"20px\" ID=\"btPrznr\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\"  runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 299px;\">\r\n                      <asp:TextBox [(ngModel)]=\"FKBER_NAME\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"FKBER_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px;\">\r\n                    &nbsp;\r\n                  </td>\r\n                  <td colspan=\"2\" style=\" height: 18px; width: 159px;\">\r\n                    <asp:TextBox [(ngModel)]=\"PRZNR_NAME\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"PRZNR_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>&nbsp;\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentGreen\" ID=\"cssZZOBJ\" runat=\"server\">รหัสบัญชีย่อย</Label>\r\n                    </strong>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 299px;\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"ZZOBJ\" class=\"fontContentBlack\" ID=\"ZZOBJ\" MaxLength=\"7\" runat=\"server\" TabIndex=\"20\" Width=\"112px\">\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('ZZOBJ','cssZZOBJ')\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTZZOBJ\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\"  runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                  <td style=\"font-weight: bold; height: 18px; width: 154px;\" valign=\"middle\">\r\n                    <!--Update_Ton3--><strong [ngClass]=\"contentGreen\">รหัสเจ้าของบัญชีย่อย</strong>\r\n                    <asp:CustomValidator ControlToValidate=\"ZZUNIT\" ErrorMessage=\"รหัสเจ้าของบัญชีย่อยไม่ถูกต้อง\" ForeColor=\"Tomato\" ID=\"cvZzunit\" OnServerValidate=\"cvZzunit_ServerValidate\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:CustomValidator>\r\n                  </td>\r\n                  <td colspan=\"2\" style=\"color: #000000; font-weight: bold; height: 18px; width: 159px;\" valign=\"middle\">\r\n                      <input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"ZZUNIT\" class=\"fontContentBlack\" ID=\"ZZUNIT\" MaxLength=\"12\" runat=\"server\" Width=\"112px\">\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">&nbsp;</td>\r\n                  <td colspan=\"4\" style=\"height: 18px;\" valign=\"middle\">\r\n                    <asp:TextBox [(ngModel)]=\"ZZOBJ_NAME\" TextMode=\"ReadOnly\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" id=\"ZZOBJ_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentGreen\" ID=\"cssZZLOAN\" runat=\"server\">รหัสหมวดพัสดุ</Label>\r\n                    </strong>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 299px;\">\r\n                    <!--Update_Ton--><input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"ZZFIELD1\" class=\"fontContentBlack\" ID=\"ZZFIELD1\" MaxLength=\"14\" runat=\"server\" Width=\"112px\">\r\n                    <!--Update_Ton--><ImageButton [hidden]=\"SHOWBT\" (click)=\"openDialog('ZZFIELD1','cssZZLOAN')\" CausesValidation=\"False\" Height=\"20px\" ID=\"BTZZLOAN\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\" runat=\"server\" ToolTip=\"ค้นหา\" Width=\"22px\"></ImageButton>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px;\" valign=\"middle\">\r\n                    <strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentGreen\" ID=\"cssVBUND\" runat=\"server\">\r\n                        รหัสหน่วยงานคู่ค้า<br/>\r\n                        (Trading Partner)\r\n                      </Label>\r\n                    </strong>\r\n                  </td>\r\n                  <td colspan=\"2\" style=\"height: 18px; width: 159px;\">\r\n                      <input type=\"text\" [disabled]=\"DSTBALL\" [(ngModel)]=\"VBUND\" class=\"fontContentBlack\" ID=\"VBUND\" MaxLength=\"12\" runat=\"server\" Width=\"112px\">\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">&nbsp;</td>\r\n                  <td colspan=\"4\" style=\"height: 18px\">\r\n                    <asp:TextBox [(ngModel)]=\"ZZFIELD1_NAME\" TextMode=\"ReadOnly\"  BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"#666666\" ID=\"ZZFIELD1_NAME\" runat=\"server\" Width=\"250px\"></asp:TextBox>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentRed\" ID=\"cssWRBTR\" runat=\"server\">จำนวนเงิน</Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"WRBTR\" ErrorMessage=\"กรุณากรอกจำนวนเงินที่ขอเบิก\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator6\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:RequiredFieldValidator>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 299px;\">\r\n                    <input [hidden]=\"AFTDOC\" [disabled]=\"true\" required [ngModel]=\"noNegative(WRBTR)\" class=\"fontContentBlack\" ID=\"WRBTR\" min=\"0\" MaxLength=\"15\" style=\"text-align: right\" TabIndex=\"24\" Width=\"112px\" >\r\n                    <input [hidden]=\"HIDEBT\" [disabled]=\"DSTBALL\" required [(ngModel)]=\"WRBTR\" class=\"fontContentBlack\" ID=\"WRBTR\" min=\"0\" MaxLength=\"15\" style=\"text-align: right\" TabIndex=\"24\" Width=\"112px\" >&nbsp; <strong>บาท</strong>\r\n                  </td>\r\n                  <td style=\"height: 18px; width: 154px; visibility: hidden;\" valign=\"middle\" >\r\n                    <Label Font-Bold=\"True\" id=\"lblAugdtTitle\" runat=\"server\" Text=\"วันที่หักล้าง / เลขที่เอกสารหักล้าง \" Visible=\"False\"></Label>&nbsp;\r\n                  </td>\r\n                  <td colspan=\"2\" style=\"height: 18px; width: 159px;\">\r\n                    <Label class=\"fontContentBlack\" ID=\"lblAugdt\" runat=\"server\"></Label>\r\n                    <asp:LinkButton CausesValidation=\"False\" Font-Underline=\"False\" ID=\"lnkAugbl\" runat=\"server\"></asp:LinkButton>&nbsp;<asp:Button CausesValidation=\"False\" Font-Names=\"Tahoma\" Font-Size=\"11px\" Height=\"23px\" ID=\"btnDisplayFi\" runat=\"server\" Text=\"แสดงเอกสาร\" Visible=\"False\" Width=\"75px\"/>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">&nbsp;</td>\r\n                  <td colspan=\"4\" style=\"height: 18px\">\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"height: 18px; width: 140px;\">\r\n                    &nbsp;<strong>\r\n                      <!--Update_Ton3--><Label [ngClass]=\"contentGreen\" ID=\"cssSgtxt\" runat=\"server\">รายละเอียดบรรทัดรายการ</Label>\r\n                    </strong><asp:RequiredFieldValidator ControlToValidate=\"tbSgtxt\" ErrorMessage=\"กรุณากรอกรายละเอียดบรรทัดรายการ\" ForeColor=\"Tomato\" ID=\"RequiredFieldValidator6\" runat=\"server\" ValidationGroup=\"kb02\">*</asp:RequiredFieldValidator>\r\n                  </td>\r\n                   <td colspan=\"4\" style=\"height: 18px\">\r\n                     <input name=\"tbSgtxt\" [disabled]=\"DSTBALL\" [(ngModel)]=\"SGTXT\" type=\"text\" maxlength=\"50\" id=\"tbSgtxt\" class=\"fontContentBlack\" style=\"width:470px;\" />\r\n                   </td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"left\" colspan=\"5\" style=\"height: 18px\">\r\n                    &nbsp;<asp:ValidationSummary ForeColor=\"Tomato\" ID=\"ValidationSummary1\" runat=\"server\" ValidationGroup=\"kb02\"/>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                <td align=\"center\" colspan=\"5\" style=\"height: 25px\" [hidden]=\"HIDEBT\">\r\n                  <button [disabled]=\"BTSAVE\" (click)=\"formEdit()\">จัดเก็บรายการนี้ลงตาราง</button>\r\n                  <button [disabled]=\"BTDEL\" (click)=\"formDelete()\">ลบข้อมูลรายการนี้</button>\r\n                  <button [disabled]=\"BTNEW\" (click)=\"formNew()\">สร้างข้อมูลรายการใหม่</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          <!-- </md-expansion-panel> -->\r\n\r\n              </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  <br>\r\n                <table [hidden]=\"SAVELIST.length <= 0\"  border=\"1\"bordercolor=\"#f5f5f5\" cellpadding=\"0\" cellspacing=\"0\" class=\"defaultTableBody\" style=\"width: 850px\">\r\n                 <TR style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #b4c3f6\" align=center>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>เลือก</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>ลำดับที่</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>ชื่อบัญชี</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสบัญชีแยกประเภท</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสศูนย์ต้นทุน</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสงบประมาณ</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>รหัสกิจกรรมหลัก</TH>\r\n                  <TH style=\"WHITE-SPACE: nowrap\" scope=col>จำนวนเงิน</TH>\r\n                </TR>\r\n                <tr *ngFor=\"let save of SAVELIST | paginate: config; let i='index';\"\r\n                      [class.selected]=\"save === selectedList\"\r\n                      (click)=\"onSelect(save,(config.currentPage - 1) * config.itemsPerPage + i)\">\r\n                  <td align=\"center\">\r\n                    <INPUT style=\"BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px\"\r\n                      alt=เลือก src=\"assets/Images/Icon/record_(show)_16x16.gif\" type=image>\r\n                  </td>\r\n                  <td align=\"center\">{{(config.currentPage - 1) * config.itemsPerPage + i +1 }}</td>\r\n                  <td>{{save.HKONT_NAME}}</td>\r\n                  <td>{{save.HKONT}}</td>\r\n                  <td>{{save.KOSTL}}</td>\r\n                  <td>{{save.FISTL}}</td>\r\n                  <td>{{save.FKBER}}</td>\r\n                  <td  style=\"text-align:right\">{{numberWithCommas(save.WRBTR)}}</td>\r\n                </tr>\r\n\r\n                  <tr  style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #EBEBEB;border: none; \" align=center>\r\n                  <td align=\"center\"></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td class=\"fontTotalwhite\">จำนวนเงินขอเบิก</td>\r\n                  <td class=\"fontTotalBlack\">{{ numberWithCommas(SUMCOST) }} </td>\r\n                </tr>\r\n                  <tr  style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #EBEBEB;border: none; \" align=center>\r\n                  <td align=\"center\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td class=\"fontTotalwhite\">จำนวนเงินภาษีหัก ณ ที่จ่าย</td>\r\n                  <td class=\"fontTotalBlack\">{{numberWithCommas(0)}}</td>\r\n                </tr>\r\n                  <tr style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #EBEBEB;border: none; \" align=center>\r\n                  <td align=\"center\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td class=\"fontTotalwhite\">จำนวนเงินค่าปรับ </td>\r\n                  <td class=\"fontTotalBlack\">{{numberWithCommas(0)}}</td>\r\n                </tr>\r\n                  <tr  style=\"FONT-SIZE: 13px; FONT-FAMILY: Tahoma; WHITE-SPACE: nowrap; COLOR: #051615; BACKGROUND-COLOR: #EBEBEB;border: none; \" align=center>\r\n                  <td align=\"center\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td class=\"fontTotalwhite\">จำนวนเงินขอรับ</td>\r\n                  <td class=\"fontTotalBlack\">{{ numberWithCommas(SUMCOST) }} </td>\r\n                </tr>\r\n                </table>\r\n                <div class=\"defaultTableBody\">\r\n                  <div>\r\n                  </div>\r\n                    <pagination-template *ngIf=\"SAVELIST.length > 5\" #p=\"paginationApi\" [id]=\"config.id\" (pageChange)=\"config.currentPage = $event\">\r\n                      <div class=\"custom-pagination\">\r\n                      <ul role=\"navigation\" aria-label=\"Pagination\">\r\n                        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\r\n                          <a *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\"> &laquo; ย้อนกลับ </a>\r\n                        </li>\r\n                        <li class=\"text-a\" *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\r\n                          <a class=\"text-a\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\r\n                            <span>{{ page.label }}</span>\r\n                          </a>\r\n                          <a *ngIf=\"p.getCurrent() === page.value\">\r\n                            <span>{{ page.label }}</span>\r\n                          </a>\r\n                        </li>\r\n                      <span class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\">\r\n                        <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> ถัดไป &raquo; </a>\r\n                      </span>\r\n                    </ul>\r\n                    </div>\r\n                  </pagination-template>\r\n\r\n                </div>\r\n                </td>\r\n              </tr>\r\n              <tr id=\"TRAnotation1\" runat=\"server\" style=\"height: 21px\" visible=\"false\">\r\n                <td style=\"width: 747px\">\r\n                  &nbsp;\r\n                  <Label ID=\"lbAnotationTitle\" runat=\"server\" Text=\"คำอธิบาย:\"></Label>&nbsp;\r\n                  <asp:Image ID=\"imAnotation\" ImageUrl=\"assets/Images/Icon/record_(show)_16x16.gif\" runat=\"server\"/>\r\n                  <Label ID=\"lbAnotation3\" runat=\"server\" Text=\"คลิกเพื่อแสดงรายการขอเบิก\"></Label>\r\n                </td>\r\n              </tr>\r\n\r\n              </table>\r\n              </div>\r\n      </md-tab>\r\n    </md-tab-group>\r\n  </tr>\r\n<tr>\r\n    <td>\r\n      <div>\r\n\r\n        <ul style=\"color:red\">\r\n            <li *ngFor=\"let c of ValidateList\">{{c}}</li>\r\n        </ul>\r\n\r\n      </div>\r\n    </td>\r\n  </tr>\r\n<tr>\r\n  <td colspan=\"3\" rowspan=\"1\">\r\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%\">\r\n      <tr>\r\n        <td align=\"left\" style=\"width: 300px;\">\r\n          <asp:ValidationSummary Font-Names=\"tahoma\" Font-Size=\"11px\" ForeColor=\"Tomato\" ID=\"ValidationSummary2\" runat=\"server\" Width=\"335px\"/>\r\n        </td>\r\n        <td align=\"right\" class=\"defaultTableBody\" valign=\"top\">\r\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-image: url(assets/Images/section_nextprev_bg.jpg); background-repeat: no-repeat; height: 37px\">\r\n            <tr>\r\n              <td style=\"height: 37px; width: 103px;\"></td>\r\n              <td style=\"color: #ffffff; height: 37px; padding-left: 4px; padding-right: 4px; white-space: nowrap;\" valign=\"middle\">\r\n                <span  *ngIf=\"tabGroup.selectedIndex==0||!tabGroup.selectedIndex\" (click)=\"tabGroup.selectedIndex=1\"  style=\"cursor: pointer\">\r\n                    ถัดไป »\r\n                </span>\r\n                <span *ngIf=\"tabGroup.selectedIndex==1\" (click)=\"tabGroup.selectedIndex=0\" id=\"dbtNext\" style=\"cursor: pointer\">« ก่อนหน้า</span>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          &nbsp;\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </td>\r\n</tr>\r\n</table>\r\n<!-- <asp:Button  (click)=\"formSend()\" Font-Names=\"Tahoma\" Font-Size=\"11px\" Height=\"21px\" ID=\"btnSend\" OnClick=\"btnSend_Click\" runat=\"server\" Text=\"จำลองการบันทึก\"/> -->\r\n<div>\r\n  <button (click)=\"formSend()\" [hidden]=\"HIDEBT\">จำลองการบันทึก</button>\r\n  <button (click)=\"onNewDoc()\" [hidden]=\"AFTDOC\">สร้างเอกสารใหม่</button>\r\n  <button (click)=\"printLog()\" [hidden]=\"AFTDOC\">พิมพ์รายงาน</button>\r\n  <button (click)=\"showLog()\" [hidden]=\"AFTDOC\">Log</button>\r\n</div>\r\n\r\n<!-- <asp:Button CausesValidation=\"False\" Font-Names=\"Tahoma\" Font-Size=\"11px\" Height=\"21px\" ID=\"btnNewDoc\" OnClick=\"btnNewDoc_Click\" runat=\"server\" Text=\"สร้างเอกสารใหม่\" Visible=\"False\"/> -->\r\n<!-- <asp:Button Font-Names=\"Tahoma\" Font-Size=\"11px\" Height=\"21px\" ID=\"btnRedo\" OnClick=\"btnRedo_Click\" runat=\"server\" Text=\"กลับรายการเอกสารนี้\" Visible=\"False\" Width=\"128px\"/>\r\n<asp:Button Font-Names=\"Tahoma\" Font-Size=\"11px\" Height=\"21px\" ID=\"btnPrint\" OnClick=\"btnPrint_Click\" runat=\"server\" Text=\"พิมพ์รายงาน\" Visible=\"False\" Width=\"110px\"/> -->\r\n</td>\r\n</tr>\r\n<!--<tr>\r\n  <td align=\"left\" colspan=\"3\" rowspan=\"1\" style=\"height: 21px\">\r\n    <asp:TextBox BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"White\" ID=\"htbPageAttribute\" runat=\"server\" Width=\"122px\"></asp:TextBox><asp:TextBox BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"White\" ID=\"tbPopupCheck\" runat=\"server\" Width=\"122px\"></asp:TextBox>&nbsp;\r\n  </td>\r\n</tr>-->\r\n</table>\r\n</td>\r\n</tr>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-1/kb02-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kb021Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_controls_dialog_search_dialog_search_component__ = __webpack_require__("../../../../../src/app/controls/dialog-search/dialog-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_controls_dialog_save_dialog_save_component__ = __webpack_require__("../../../../../src/app/controls/dialog-save/dialog-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_menu_top_menu_top_component__ = __webpack_require__("../../../../../src/app/menu-top/menu-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__kb02_kb02_3_kb02_3_component__ = __webpack_require__("../../../../../src/app/kb02/kb02-3/kb02-3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Kb021Component = (function () {
    function Kb021Component(dialog, httpService, route, router, _Kb023Component) {
        this.dialog = dialog;
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this._Kb023Component = _Kb023Component;
        this.config = {
            id: 'custom',
            itemsPerPage: 5,
            currentPage: 1
        };
        this.now = new Date();
        this.ddblartList = [
            'เพื่อจ่ายผู้ขาย/คู่สัญญา', 'เพื่อชดใช้ใบสำคัญ', 'เพื่อจ่ายเงินเดือนและเงินอื่นที่จ่ายสิ้นเดือน', 'เพื่อจ่ายให้ยืม',
            'รายการขอเบิกเงินอุดหนุน'
        ];
        this.soblartList = [
            { id: '1', Name: 'เพื่อจ่ายผู้ขาย/คู่สัญญา' },
            { id: '2', Name: 'เพื่อชดใช้ใบสำคัญ' },
            { id: '3', Name: 'เพื่อจ่ายเงินเดือนและเงินอื่นที่จ่ายสิ้นเดือน' },
            { id: '4', Name: 'เพื่อจ่ายให้ยืม' },
            { id: '5', Name: 'รายการขอเบิกเงินอุดหนุน' },
        ];
        this.soZlschList = [
            { id: '1', Name: 'จ่ายตรงเข้าบัญชีเงินฝากธนาคารของผู้ขาย/คู่สัญญา' },
            { id: '2', Name: 'จ่ายผ่านบัญชีเงินฝากธนาคารของหน่วยงาน' },
        ];
        this.HEADER = [
            { id: 'LBBUKRS', Val: '' },
            { id: 'TBZZPMT', Val: '' },
            { id: 'LBZZPMT', Val: '' },
            { id: 'LUSERID', Val: '' },
            { id: 'DDGSBER', Val: '' },
            { id: 'IDBLART', Val: '' },
            { id: 'BLDAT', Val: '' },
            { id: 'BUDAT', Val: '' },
            { id: 'TBXBLNR', Val: '' },
            { id: 'tbSearch_term', Val: '' },
            { id: 'LIFNR', Val: '' },
            { id: 'NAME1', Val: '' },
            { id: 'ZLSCH', Val: '' },
            { id: 'TBKBLNR', Val: '' },
            { id: 'LBKBLNR', Val: '' },
        ];
        this.typeDocList = { '': '---- ไม่กำหนด ----', 'K0': 'K0 - เงินจ่ายสิ้นเดือน', 'K1': 'K1 - ลูกหนี้เงินยืม',
            'K8': 'K8 - เงินอุดหนุน', 'KC': 'KC - ขอเบิก(1.ข)', 'KD': 'KD - ขอเบิก(1.ข) กันเงิน',
            'KE': 'KE - ขอเบิก(2.ข)', 'KF': 'KF - ขอเบิก(2.ข) กันเงิน', 'KL': 'KL - ใบสำคัญงปม(2)',
            'KM': 'KM - ใบสำคัญงปม(2) กันเงิน' };
        this.M_IDFISTL = [
            { val: '0300210101110000', id: '100' },
            { val: '0300210101110000', id: '100' },
            { val: '0300210101000000', id: '100' },
            { val: '0300210101110001', id: '100' },
            { val: '0300210101110002', id: '100' },
            { val: '0300210101110003', id: '104' },
            { val: '0300210101110007', id: '105' },
            { val: '0300210101110022', id: '100' }
        ];
        this.M_IDKOSTL = [
            { val: '0300200001', id: '101' },
            { val: '0300200003', id: '101' },
            { val: '0300200004', id: '101' },
            { val: '0300200005', id: '101' },
            { val: '0300200007', id: '101' },
            { val: '0300200000', id: '101' }
        ];
        this.M_IDHKONT = [
            { val: '53000', id: '1000002' },
            { val: '51800', id: '1000016' },
            { val: '52000', id: '1000011' },
            { val: '51200', id: '1000004' },
            { val: '57000', id: '1000005' },
            { val: '54000', id: '1000006' }
        ];
        this.ValidateList = [];
        this.DDGSBER = '1000'; // รหัสพื้นที่
        this.ddZlschList = ['จ่ายตรงเข้าบัญชีเงินฝากธนาคารของผู้ขาย/คู่สัญญา', 'จ่ายผ่านบัญชีเงินฝากธนาคารของหน่วยงาน'];
        this.BUKRS = '0302';
        this.LBBUKRS = 'สนงใปลัดกระทรวงการคลัง';
        this.TBZZPMT = '0300200005'; // หน่วยเบิกจ่าย
        this.LBZZPMT = 'สำนักบริการกลาง';
        this.TBXBLNR = 'P6000001';
        this.GEBER = '6011220'; // แหล่งของเงิน
        this.GEBER_NAME = 'งบรายจ่ายอื่น/งบสรก.';
        this.tbSearch_term = '9000080000004'; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี      [Send to API]
        this.tbBankn = '00000201'; // เลขที่บัญชีเงินฝากธนาคาร
        this.HKONT = '53000'; // รหัสบัญชีแยกประเภททั่วไป       [Send to API]
        this.KOSTL = '0300200005'; // รหัสศูนย์ต้นทุน        [Send to API]
        this.FISTL = '0300210101110000'; // รหัสงบประมาณ   [Send to API]
        this.FKBER = '030021000E0482'; // รหัสกิจกรรมหลัก             [Send to API]
        this.WRBTR = ''; // จำนวนเงินที่ขอเบิก            [Send to API]
        this.ZZOBJ = ''; // รหัสบัญชีย่อย
        this.ZZFIELD1 = ''; // รหัสหมวดพัสดุ
        this.PRZNR = ''; // รหัสกิจกรรมย่อย
        this.TBKBLNR = ''; // เลขที่เอกสารสำรองเงิน
        this.ZZUNIT = ''; // รหัสเจ้าของบัญชีย่อย
        this.VBUND = ''; // รหัสหน่วยงานคู่ค้า
        // TBZZFIELD1 = ''; // รหัสหมวดพัสดุ
        // Test Date
        this.DATEA = new Date();
        this.DATEI = new Date();
        this.DATEACC = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };
        this.DATEINV = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };
        this.DATENOW = new Date(); // TEST NEW DATE
        this.CPUDT = ''; // DATE ex: 11.12.2017
        this.CPUTIME = ''; // TIME ex: 22:40:59
        this.LOGNO = 0; // Log No. // eTEST
        // TEXT
        this.SGTXT = '';
        this.SHOWTR = true; // TR
        this.HIDEBT = false; // 3
        this.AFTDOC = true; // After Have Document ID | for Show สร้างเอกสารใหม่, พิมพ์รายงาน, Log
        // // Declaration Variable of Value ID
        // IDFISTL: string; // (ID) รหัสงบประมาณ
        // IDKOSTL: string; // (ID) รหัสศูนย์ต้นทุน
        // IDHKONT: string; // (ID) รหัสบัญชีแยกประเภททั่วไป
        // IDWRBTR: string; // (ID) จำนวนเงินที่ขอเบิก
        // Hard coding for Value ID
        this.IDFISTL = '100'; // รหัสงบประมาณ
        this.IDKOSTL = '101'; // รหัสศูนย์ต้นทุน
        this.IDHKONT = '1000002'; // บัญชีแยกประเภท
        this.IDWRBTR = '1000';
        this.IDSTERM = '2032400000';
        this.IDBLART = '';
        this.BLDAT = '01/01/2017'; // (ID) วันที่เอกสาร A
        this.BUDAT = '02/01/2017'; // (ID) วันที่ผ่านรายการ I
        this.IDVENDER = '1000010'; // Vender ID
        // Hard coding for UserID
        this.LUSERID = this.TBZZPMT + '10'; // UserID: หน่วยเบอกจ่าย + 10
        this.BELNR = ''; // Doc No.
        this.LIFNR = ''; // LIFNR
        this.ZLSCH = ''; // ZLSCH
        this.SUMCOST = 0; // เงินรวม
        this.panel = true;
        this.showdoc = false;
        // Corlor Content
        this.contentBlue = 'fontContentBlue';
        this.contentGreen = 'fontContentGreen';
        this.contentRed = 'fontContentRed';
        this.contentBlack = 'fontContentBlack';
        // Selected Value Doc. type
        this.selectedblart = this.soblartList[0].id;
        this.selectedZlsch = this.soZlschList[0].id;
        this.apiValues = [];
        this.evilTitle = 'Template <i>Jo</i>';
        this.logs = [];
        this.SAVELIST = [];
        this.valuelist = 0;
        this.lbNUMBER = 1;
        // งวด
        this.ddMonat = 0;
        // EXPAND
        this.EXPAND = true;
        // Button All
        this.BTSAVE = false;
        this.BTNEW = true;
        this.BTDEL = true;
        // ปีงบประมาณ
        this.yearList = [];
    }
    Kb021Component.prototype.detailSave = function () {
        console.log('detailSave');
    };
    Kb021Component.prototype.openDialog = function (textcode, textname) {
        var _this = this;
        console.log('P: ' + textcode);
        this.codetx = textcode;
        this.nametx = document.getElementById(textname).textContent;
        var config = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5_app_controls_dialog_search_dialog_search_component__["a" /* DialogSearchComponent */], { panelClass: 'myapp-no-padding-dialog' });
        dialogRef.componentInstance.code_t = this.codetx;
        dialogRef.componentInstance.name_t = this.nametx;
        dialogRef.componentInstance.year_t = this.YEAR;
        // cssKOSTL
        // dialogRef.componentInstance.sizet = 'Large';
        // this.dialog.afterOpen().subscribe
        dialogRef.afterClosed()
            .subscribe(function (selection) {
            if (selection) {
                _this.resultTB = selection.value;
                _this.resultLB = selection.name;
                _this.resultID = selection.id;
                console.log('R: ' + _this.resultTB + ' | ' + _this.resultLB + ' | ' + _this.resultID);
                //          (<HTMLInputElement>document.getElementById(textcode)).value = this.sizetx;
                switch (textcode) {
                    case 'KOSTL':
                        _this.KOSTL = _this.resultTB; // Set TB (Value)
                        _this.IDKOSTL = _this.resultID; // Set ID (id)
                        _this.KOSTL_NAME = _this.resultLB; // Set LB (Name)
                        break;
                    case 'FKBER':
                        _this.FKBER = _this.resultTB;
                        _this.FKBER_NAME = _this.resultLB;
                        break;
                    case 'FISTL':
                        _this.FISTL = _this.resultTB;
                        _this.IDFISTL = _this.resultID;
                        _this.FISTL_NAME = _this.resultLB;
                        break;
                    case 'TBZZPMT':
                        _this.TBZZPMT = _this.resultTB;
                        _this.LBZZPMT = _this.resultLB;
                        break;
                    case 'ZZOBJ':
                        _this.ZZOBJ = _this.resultTB;
                        _this.ZZOBJ_NAME = _this.resultLB;
                        break;
                    case 'ZZFIELD1':
                        _this.ZZFIELD1 = _this.resultTB;
                        _this.ZZFIELD1_NAME = _this.resultLB;
                        break;
                    case 'PRZNR':
                        _this.PRZNR = _this.resultTB; // Set Value
                        _this.PRZNR_NAME = _this.resultLB;
                        break;
                    case 'HKONT':
                        _this.HKONT = _this.resultTB; // Set Value
                        _this.HKONT_NAME = _this.resultLB;
                        _this.IDHKONT = _this.resultID;
                        break;
                    case 'GEBER':
                        _this.GEBER = _this.resultTB; // Set Value
                        _this.GEBER_NAME = _this.resultLB;
                        // this.IDHKONT = this.resultID;
                        break;
                }
            }
            else {
                // User clicked 'Cancel' or clicked outside the dialog
            }
        });
    };
    Kb021Component.prototype.log = function (selectedTab) {
        this.logs.push('Selected Tab with title: ' + selectedTab.tabTitle);
    };
    Kb021Component.prototype.onDisable = function () {
        console.log('Disable Page');
        this.DSTBALL = true;
        this.SHOWBT = true;
        // cssBukrs
    };
    Kb021Component.prototype.onEnableInput = function (what) {
        switch (what) {
            case 'Y':
                this.DSTBALL = false;
                this.SHOWBT = false;
                break;
            case 'N':
                this.DSTBALL = true;
                this.SHOWBT = true;
                break;
            default:
                this.DSTBALL = false;
                this.SHOWBT = false;
                break;
        }
    };
    Kb021Component.prototype.onColor = function (what) {
        switch (what) {
            case 'Y':
                this.contentBlue = 'fontContentBlue';
                this.contentGreen = 'fontContentGreen';
                this.contentRed = 'fontContentRed';
                break;
            case 'N':
                this.contentBlue = 'fontContentBlack';
                this.contentGreen = 'fontContentBlack';
                this.contentRed = 'fontContentBlack';
                break;
            default:
                this.contentBlue = 'fontContentBlue';
                this.contentGreen = 'fontContentGreen';
                this.contentRed = 'fontContentRed';
                break;
        }
        // this.contentBlack  = 'fontContentBlack';
    };
    Kb021Component.prototype.onShowDocID = function () {
        // + Function for Show Doc.Number | Hiden 3 Button
        this.SHOWTR = false; // Show Doc
        this.HIDEBT = true; // Hide จำลองการบันทึก & 3 Save
        this.AFTDOC = false; // Show 3 Button Log
        this.showdoc = true;
    };
    Kb021Component.prototype.onHideDocID = function () {
        // + Function for Show Doc.Number | Hiden 3 Button
        this.SHOWTR = true; // Show Doc
        this.HIDEBT = false; // Hide จำลองการบันทึก & 3 Save
        this.AFTDOC = true; // Show 3 Button Log
        this.showdoc = false;
    };
    Kb021Component.prototype.onSelectDate = function (typeDate) {
        // ปีบัญชี และ งวด เริ่มต้น
        if (typeDate === 'inv') {
            if (this.DATEINV.month >= 10) {
                this.GJAHR = Number(this.DATEINV.year) + 1;
                console.log('f' + this.GJAHR);
            }
            else {
                this.GJAHR = this.DATEINV.year;
                console.log(this.GJAHR);
            }
            if (this.DATEINV.month < 10) {
                this.ddMonat = this.DATEINV.month + 3;
            }
            else {
                this.ddMonat = this.DATEINV.month - 9;
            }
        }
        else if (typeDate === 'i') {
            if (this.DATEI.getMonth() >= 9) {
                this.GJAHR = Number(this.DATEI.getFullYear()) + 1;
                console.log('f' + this.GJAHR);
            }
            else {
                this.GJAHR = this.DATEI.getFullYear();
                console.log('f' + this.GJAHR);
            }
            if (this.DATEI.getMonth() < 9) {
                console.log(this.DATEI.getMonth());
                this.ddMonat = this.DATEI.getMonth() + 4;
            }
            else {
                this.ddMonat = this.DATEI.getMonth() - 8;
                console.log(this.DATEI.getMonth());
            }
        }
    };
    Kb021Component.prototype.coverDTH = function (date) {
        date = date + 'x';
        return date;
    };
    Kb021Component.prototype.onSelect = function (save, i) {
        if (i >= 0 && i < this.SAVELIST.length) {
            // document.getElementById('lbNUMBER').innerText = i + 1;
            this.BTDEL = false;
            this.BTNEW = false;
            this.lbNUMBER = i + 1;
            this.valuelist = i + 1;
            this.selectedList = save; // => Selected
            // this.BUKRS = save.BUKRS;
            // this.LBBUKRS = save.LBBUKRS;
            // this.TBZZPMT = save.TBZZPMT;
            // this.LBZZPMT = save.LBZZPMT;
            // this.TBXBLNR = save.TBXBLNR;
            // this.GEBER = save.GEBER; // แหล่งของเงิน
            // this.GEBER_NAME = save.GEBER_NAME;
            // this.tbSearch_term = save.tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
            // this.tbBankn = save.tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
            this.HKONT = save.HKONT; // รหัสบัญชีแยกประเภททั่วไป
            this.KOSTL = save.KOSTL; // รหัสศูนย์ต้นทุน
            this.FISTL = save.FISTL; // รหัสงบประมาณ
            this.FKBER = save.FKBER; // รหัสกิจกรรมหลัก
            this.WRBTR = save.WRBTR; // จำนวนเงินที่ขอเบิก
            this.PRZNR = save.PRZNR; // รหัสกิจกรรมย่อย
            this.ZZOBJ = save.ZZOBJ; // รหัสบัญชีย่อย
            this.ZZUNIT = save.ZZUNIT; // รหัสเจ้าของบัญชีย่อย
            this.ZZFIELD1 = save.ZZFIELD1; // รหัสหมวดพัสดุ
            this.VBUND = save.VBUND; // รหัสหน่วยงานคู่ค้า
            // this.GJAHR = save.GJAHR; // ปีบัญชี
            this.SGTXT = save.SGTXT; // รายละเอียดบรรทัดรายการ
            this.HKONT_NAME = save.HKONT_NAME; // (ช) ชื่อบัญชีแยกประเภททั่วไป
            this.KOSTL_NAME = save.KOSTL_NAME; // (N) ชื่อศูนย์ต้นทุน
            this.FISTL_NAME = save.FISTL_NAME; // (N) ชื่องบประมาณ
            this.FKBER_NAME = save.FKBER_NAME; // (N) ชื่อกิจกรรมหลัก
            this.PRZNR_NAME = save.PRZNR_NAME; // (N) ชื่อกิจกรรมย่อย
            this.ZZOBJ_NAME = save.ZZOBJ_NAME; // (N) รหัสบัญชีย่อย
            this.ZZUNIT_NAME = this.ZZUNIT_NAME; // (N) รหัสเจ้าของบัญชีย่อย
            this.ZZFIELD1_NAME = this.ZZFIELD1_NAME; // (N) รหัสหมวดพัสดุ
            this.VBUND_NAME = this.VBUND_NAME; // (N) รหัสหน่วยงานคู่ค้า
            //   this.IDFISTL = save.IDFISTL; // (ID) รหัสงบประมาณ
            //   this.IDKOSTL = save.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
            //   this.IDHKONT = save.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
            //   this.IDWRBTR = save.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
            //   this.IDSTERM = save.IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
            //   this.BLDAT = save.BLDAT; // (ID) Account Date
            //   this.BUDAT = save.BUDAT; // (ID) Date Invoic
            console.log(i);
            console.log(this.selectedList);
        }
    };
    Kb021Component.prototype.checkform = function () {
        this.ValidateList = [];
        var tHead = 'กรุณากรอก';
        if (!this.BUKRS) {
            this.ValidateList.push(tHead + 'รหัสหน่วยงาน');
        }
        if (!this.BLDAT) {
            this.ValidateList.push(tHead + 'วันที่เอกสาร');
        }
        if (!this.DDGSBER) {
            this.ValidateList.push(tHead + 'รหัสพื้นที่');
        }
        if (!this.BUDAT) {
            this.ValidateList.push(tHead + 'วันที่ผ่านรายการ');
        }
        if (!this.TBZZPMT) {
            this.ValidateList.push(tHead + 'รหัสหน่วยเบิกจ่าย');
        }
        if (!this.TBXBLNR) {
            this.ValidateList.push(tHead + 'การอ้างอิง');
        }
        if (!this.HKONT) {
            this.ValidateList.push(tHead + 'รหัสบัญชีแยกประเภททั่วไป');
        }
        if (!this.KOSTL) {
            this.ValidateList.push(tHead + 'รหัสศูนย์ต้นทุน');
        }
        if (!this.FKBER) {
            this.ValidateList.push(tHead + 'รหัสกิจกรรมหลัก');
        }
        if (!this.FISTL) {
            this.ValidateList.push(tHead + 'รหัสงบประมาณ');
        }
        if (!this.GEBER) {
            this.ValidateList.push(tHead + 'แหล่งของเงิน');
            // } if (!this.PRZNR) {
            //   this.ValidateList.push(tHead + 'รหัสกิจกรรมย่อย');
            // } if (!this.ZZOBJ) {
            //   this.ValidateList.push(tHead + 'รหัสบัญชีย่อย');
            // } if (!this.ZZFIELD1) {
            //   this.ValidateList.push(tHead + 'รหัสหมวดพัสดุ');
        }
        if (!this.WRBTR) {
            this.ValidateList.push(tHead + 'จำนวนเงินขอเบิก');
            // } if (!this.TBKBLNR) {
            //   this.ValidateList.push(tHead + 'เลขที่เอกสารสำรองเงิน');
        }
        if (!this.tbSearch_term) {
            this.ValidateList.push(tHead + 'เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี');
        }
        if (!this.tbBankn) {
            this.ValidateList.push(tHead + 'เลขที่บัญชีเงินฝากธนาคาร');
        }
    };
    // summary total rows keng
    Kb021Component.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.SAVELIST.length; i++) {
            if (this.SAVELIST[i].WRBTR) {
                total += Number(this.SAVELIST[i].WRBTR);
                // this.totalAmount = total;
            }
        }
        this.SUMCOST = total;
        return total;
    };
    Kb021Component.prototype.setTotal = function (result) {
        this.res = result;
        // document.getElementById('success').style.display = 'block';
        // document.getElementById('showSuccess').style.display = 'block';
    };
    Kb021Component.prototype.numberWithCommas = function (x) {
        var number = x.toString();
        var baht = number.split('.')[0];
        var nav = '';
        if (baht.indexOf('-') === 0) {
            nav = '-';
            baht = baht.slice(1);
        }
        var cents = (number.split('.')[1] || '') + '00';
        baht = baht.split('').reverse().join('')
            .replace(/(\d{3}(?!$))/g, '$1,')
            .split('').reverse().join('');
        return nav + baht + '.' + cents.slice(0, 2);
    };
    Kb021Component.prototype.numberWithDecimal = function (x) {
        var number = x.toString();
        var baht = number.split('.')[0];
        var cents = (number.split('.')[1] || '') + '00';
        console.log('x', baht + '.' + cents.slice(0, 2));
        return baht + '.' + cents.slice(0, 2);
    };
    Kb021Component.prototype.noNegative = function (w) {
        console.log('W', w);
        var number = w.toString();
        if (number.indexOf('-') === 0) {
            number = number.slice(1);
        }
        return number;
    };
    // Get Doc. type
    Kb021Component.prototype.getDcotype = function () {
        console.log(this.ZLSCH);
        console.log(this.selectedblart);
        console.log(this.selectedZlsch);
        if (this.selectedZlsch === '1') {
            switch (this.selectedblart) {
                case '1':
                    this.IDBLART = 'KC';
                    this.ZLSCH = '1';
                    break;
                case '2':
                    this.IDBLART = 'KL';
                    this.ZLSCH = '1';
                    break;
                case '3':
                    this.IDBLART = 'K0';
                    this.ZLSCH = '1';
                    break;
                case '4':
                    this.IDBLART = 'K1';
                    this.ZLSCH = '1';
                    break;
                case '5':
                    this.IDBLART = 'K8';
                    this.ZLSCH = '1';
                    break;
                default: break;
            }
        }
        else if (this.selectedZlsch === '2') {
            switch (this.selectedblart) {
                case '1':
                    this.IDBLART = 'KE';
                    this.ZLSCH = '2';
                    break;
                case '2':
                    this.IDBLART = 'KL';
                    this.ZLSCH = '2';
                    break;
                case '3':
                    this.IDBLART = 'K0';
                    this.ZLSCH = '2';
                    break;
                case '4':
                    this.IDBLART = 'K1';
                    this.ZLSCH = '2';
                    break;
                case '5':
                    this.IDBLART = 'K8';
                    this.ZLSCH = '2';
                    break;
                default: break;
            }
        }
        console.log(this.ZLSCH);
    };
    Kb021Component.prototype.setDcotype = function () {
        console.log(this.ZLSCH);
        if (this.ZLSCH === '1') {
            this.selectedZlsch = this.soZlschList[0].id;
            switch (this.IDBLART) {
                case 'KC':
                    this.selectedblart = this.soblartList[0].id;
                    break;
                case 'KL':
                    this.selectedblart = this.soblartList[1].id;
                    break;
                case 'K0':
                    this.selectedblart = this.soblartList[2].id;
                    break;
                case 'K1':
                    this.selectedblart = this.soblartList[3].id;
                    break;
                case 'K8':
                    this.selectedblart = this.soblartList[4].id;
                    break;
                default: break;
            }
        }
        else if (this.ZLSCH === '2') {
            this.selectedZlsch = this.soZlschList[1].id;
            switch (this.IDBLART) {
                case 'KE':
                    this.selectedblart = this.soblartList[0].id;
                    break;
                case 'KL':
                    this.selectedblart = this.soblartList[1].id;
                    break;
                case 'K0':
                    this.selectedblart = this.soblartList[2].id;
                    break;
                case 'K1':
                    this.selectedblart = this.soblartList[3].id;
                    break;
                case 'K8':
                    this.selectedblart = this.soblartList[4].id;
                    break;
                default: break;
            }
        }
        switch (this.IDBLART) {
            case 'K0':
                this.DOCTYPE = this.typeDocList.K0;
                break;
            case 'K1':
                this.DOCTYPE = this.typeDocList.K1;
                break;
            case 'K8':
                this.DOCTYPE = this.typeDocList.K8;
                break;
            case 'KC':
                this.DOCTYPE = this.typeDocList.KC;
                break;
            case 'KD':
                this.DOCTYPE = this.typeDocList.KD;
                break;
            case 'KE':
                this.DOCTYPE = this.typeDocList.KE;
                break;
            case 'KF':
                this.DOCTYPE = this.typeDocList.KF;
                break;
            case 'KL':
                this.DOCTYPE = this.typeDocList.KL;
                break;
            case 'KM':
                this.DOCTYPE = this.typeDocList.KM;
                break;
            default:
                this.DOCTYPE = '';
                break;
        }
    };
    Kb021Component.prototype.setGEBER = function () {
        var yearGEBER = '25' + this.GEBER.substr(0, 2);
        this.YEAR = Number(yearGEBER);
        console.log(this.YEAR, this.GEBER);
    };
    // Get Account,Invoiced Date
    Kb021Component.prototype.getDateAI = function () {
        var DA = this.DATEA;
        var DI = this.DATEI;
        this.BLDAT = DA.getDate() + '/' + (DA.getMonth() + 1) + '/' + DA.getFullYear();
        this.BUDAT = DI.getDate() + '/' + (DI.getMonth() + 1) + '/' + DI.getFullYear();
        console.log('A: ' + this.BLDAT + ', I: ' + this.BUDAT);
    };
    Kb021Component.prototype.getVender = function () {
        var tHead = 'กรุณากรอก';
        if (this.tbSearch_term === '9000080000004' && this.tbBankn === '00000201') {
            this.IDVENDER = '1000010';
            this.LBTERM = 'บริษัท มาร์ช จำกัด';
            this.LIFNR = '1000000038';
        }
        else if (this.tbSearch_term === '5401599010370' && this.tbBankn === '0000006552') {
            this.IDVENDER = '1000009';
            this.LBTERM = 'บริษัท กรุงเทพ จำกัด';
            this.LIFNR = '1000000011';
        }
        else if (this.tbSearch_term === '9000080000004' && this.tbBankn === '8905686551') {
            this.IDVENDER = '121';
            this.LBTERM = 'SeedFarm';
            this.LIFNR = 'SeedFarm';
        }
        else if (this.tbSearch_term === '1234567891234' && this.tbBankn === '8905686552') {
            this.IDVENDER = '120';
            this.LBTERM = 'Patio Fun, Inc.';
            this.LIFNR = 'Patio';
        }
        else {
            this.ValidateList.push(tHead + ' รหัสประจำตัวผู้เสียภาษีและเลขที่บัญชี ให้ตรงกัน');
        }
    };
    Kb021Component.prototype.coverDate = function () {
        var A = (this.BLDAT.split('-'));
        var I = (this.BUDAT.split('-'));
        this.DATEA = new Date(this.BLDAT); // วันที่เอกสาร
        this.DATEI = new Date(this.BUDAT);
        console.log(this.BUDAT);
        this.DATEACC = { year: this.DATEA.getFullYear(), month: this.DATEA.getMonth() + 1, day: this.DATEA.getDate() };
        this.DATEINV = { year: this.DATEI.getFullYear(), month: this.DATEI.getMonth() + 1, day: this.DATEI.getDate() };
        this.setYear();
        this.getDateAI();
    };
    Kb021Component.prototype.setVender = function () {
        // console.log(this.LIFNR )
        if (this.LIFNR === '1000000038') {
            this.IDVENDER = '1000010';
            this.LBTERM = 'บริษัท มาร์ช จำกัด';
            this.tbSearch_term = '9000080000004';
            this.tbBankn = '00000201';
        }
        else if (this.LIFNR === '1000000011') {
            this.IDVENDER = '1000009';
            this.LBTERM = 'บริษัท กรุงเทพ จำกัด';
            this.tbSearch_term = '5401599010370';
            this.tbBankn = '0000006552';
        }
        else if (this.LIFNR === 'SeedFarm') {
            this.IDVENDER = '121';
            this.LBTERM = 'SeedFarm';
            this.tbSearch_term = '9000080000004';
            this.tbBankn = '8905686551';
        }
        else if (this.LIFNR === 'Patio') {
            this.IDVENDER = '120';
            this.LBTERM = 'Patio Fun, Inc.';
            this.tbSearch_term = '1234567891234';
            this.tbBankn = '8905686552';
        }
        else {
        }
        console.log(this.tbBankn);
    };
    Kb021Component.prototype.chkValidate = function () {
        console.log(this.FISTL.length);
        var F_FISTL = this.FISTL.substr(0, 5); // รหัสงบประมาณ 5 หลักแรก
        var F_KOSTL = this.KOSTL.substr(0, 5); // รหัสศูนย์ต้นทุน 5 หลักแรก
        var F_FKBER = this.FKBER.substr(0, 5); // รหัสกิจกรรมหลัก 5 หลักแรก
        var P_KOSTL = this.KOSTL.substr(1, 5); // รหัสจังหวัดจากศูนย์ต้นทุน
        var P_FKBER = this.FKBER.substr(1, 5); // รหัสจังหวัดในกิจกรรมหลัก
        if (this.GEBER.substr(2, 2) === '19' // แหล่งเงิน เป็น YY19xxxx
            && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
            && this.FKBER.substr(0, 5) === this.KOSTL.substr(0, 5)) {
            console.log('Y!1');
            this.is_valid = true;
        }
        else if ((this.GEBER.substr(2, 1) === '2' || this.GEBER.substr(2, 1) === '3') // แหล่งเงิน เป็น  YY2xxxx หรือ YY3xxxxxx
            && this.FISTL.length === 5 // รหัสงบประมาณมี 5 หลัก
            && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
            && P_KOSTL === P_FKBER) {
            console.log('Y!2');
            this.is_valid = true;
        }
        else if (this.GEBER.substr(2, 1) === '1') {
            console.log('Y!3');
            if (this.GEBER.substr(2, 2) === '11' // แหล่งเงิน เป็น YY11xxxxx
                && this.FISTL.length === 16 // รหัสงบประมาณ 16 หลัก
                && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
                && P_KOSTL === P_FKBER // รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดในกิจกรรมหลัก
                && F_KOSTL === F_FKBER) {
                console.log('Y!3.1');
                this.is_valid = true;
            }
            else if (this.GEBER.substr(2, 2) === '11' // แหล่งเงิน เป็น YY11xxxxx
                && this.FISTL.length === 16 // รหัสงบประมาณ 16 หลัก
                && F_FISTL === '80808' // รหัสงบประมาณ 5 หลักแรก = 80808
                && F_FKBER === '80808' // รหัสกิจกรรมหลัก 5 หลักแรก = 80808
                && F_KOSTL === F_FKBER) {
                console.log('Y!3.2');
                this.is_valid = true;
            }
            else if (this.GEBER.substr(2, 2) === '10' // แหล่งเงิน เป็น YY10xxxxx
                && (this.FISTL.length === (10 || 12 || 14 || 16)) // รหัสงบประมาณ เป็น 10 หรือ 12 หรือ 14 หรือ 16 หลัก
                && F_FISTL === '90909') {
                console.log('Y!3.3');
                this.is_valid = true;
            }
            else {
                console.log('N!3');
                this.is_valid = false;
            }
        }
        else if (this.GEBER.substr(2, 1) === '4' // แหล่งเงิน เป็น YY4xxxxxx
            && this.FISTL.length === 16 // รหัสงบประมาณ เป็น 16 หลัก
            && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
            && P_KOSTL === P_FKBER) {
            console.log('Y!4');
            this.is_valid = true;
        }
        else if (this.GEBER.substr(2, 2) === '41' // แหล่งเงิน เป็น YY41xxxxx
            && this.FISTL.length === (10 || 12 || 14 || 16) // รหัสงบประมาณ เป็น 10 หรือ 12 หรือ 14 หรือ 16 หลัก
            && F_FISTL === '90909') {
            console.log('Y!5');
            this.is_valid = true;
        }
        else {
            console.log('N!');
            this.is_valid = false;
        }
    };
    Kb021Component.prototype.formSave = function () {
        this.ValidateList = [];
        this.checkform();
        this.getDcotype(); // get IDBLART
        this.getDateAI(); // Get Date
        this.chkValidate(); // Check Validate form
        this.getVender();
        this.getValueID(this.lbNUMBER, this.IDFISTL, this.IDKOSTL, this.IDHKONT);
        if (this.ValidateList.length <= 0) {
            this.valuelist = 0;
            if (typeof this.SAVELIST === 'undefined' && this.lbNUMBER === 0) {
                // alert('undefined')
                this.SAVELIST = [{
                        BUKRS: this.BUKRS,
                        LBBUKRS: this.LBBUKRS,
                        BLDAT: this.BLDAT,
                        BUDAT: this.BUDAT,
                        TBZZPMT: this.TBZZPMT,
                        LBZZPMT: this.LBZZPMT,
                        TBXBLNR: this.TBXBLNR,
                        GEBER: this.GEBER,
                        GEBER_NAME: this.GEBER_NAME,
                        tbSearch_term: this.tbSearch_term,
                        tbBankn: this.tbBankn,
                        HKONT: this.HKONT,
                        KOSTL: this.KOSTL,
                        FISTL: this.FISTL,
                        FKBER: this.FKBER,
                        WRBTR: Number(this.WRBTR).toFixed(2),
                        PRZNR: this.PRZNR,
                        ZZOBJ: this.ZZOBJ,
                        ZZUNIT: this.ZZUNIT,
                        ZZFIELD1: this.ZZFIELD1,
                        VBUND: this.VBUND,
                        IDFISTL: this.IDFISTL,
                        IDKOSTL: this.IDKOSTL,
                        IDHKONT: this.IDHKONT,
                        IDWRBTR: this.IDWRBTR,
                        IDSTERM: this.IDSTERM,
                        IDBLART: this.IDBLART,
                        GJAHR: this.GJAHR,
                        SGTXT: this.SGTXT,
                        HKONT_NAME: this.HKONT_NAME,
                        KOSTL_NAME: this.KOSTL_NAME,
                        FISTL_NAME: this.FISTL_NAME,
                        FKBER_NAME: this.FKBER_NAME,
                        PRZNR_NAME: this.PRZNR_NAME,
                        ZZOBJ_NAME: this.ZZOBJ_NAME,
                        ZZUNIT_NAME: this.ZZUNIT_NAME,
                        ZZFIELD1_NAME: this.ZZFIELD1_NAME,
                        VBUND_NAME: this.VBUND_NAME,
                    }];
                // alert(SAVELIST.length);
                this.lbNUMBER = this.SAVELIST.length;
                console.log('GotoJO');
            }
            else {
                // this.valuelist = Number(this.lbNUMBER); // TEST
                this.SAVELIST.push({
                    BUKRS: this.BUKRS,
                    LBBUKRS: this.LBBUKRS,
                    BLDAT: this.BLDAT,
                    BUDAT: this.BUDAT,
                    TBZZPMT: this.TBZZPMT,
                    LBZZPMT: this.LBZZPMT,
                    TBXBLNR: this.TBXBLNR,
                    GEBER: this.GEBER,
                    GEBER_NAME: this.GEBER_NAME,
                    tbSearch_term: this.tbSearch_term,
                    tbBankn: this.tbBankn,
                    HKONT: this.HKONT,
                    KOSTL: this.KOSTL,
                    FISTL: this.FISTL,
                    FKBER: this.FKBER,
                    WRBTR: Number(this.WRBTR).toFixed(2),
                    PRZNR: this.PRZNR,
                    ZZOBJ: this.ZZOBJ,
                    ZZUNIT: this.ZZUNIT,
                    ZZFIELD1: this.ZZFIELD1,
                    VBUND: this.VBUND,
                    IDFISTL: this.IDFISTL,
                    IDKOSTL: this.IDKOSTL,
                    IDHKONT: this.IDHKONT,
                    IDWRBTR: this.IDWRBTR,
                    IDSTERM: this.IDSTERM,
                    IDBLART: this.IDBLART,
                    GJAHR: this.GJAHR,
                    SGTXT: this.SGTXT,
                    HKONT_NAME: this.HKONT_NAME,
                    KOSTL_NAME: this.KOSTL_NAME,
                    FISTL_NAME: this.FISTL_NAME,
                    FKBER_NAME: this.FKBER_NAME,
                    PRZNR_NAME: this.PRZNR_NAME,
                    ZZOBJ_NAME: this.ZZOBJ_NAME,
                    ZZUNIT_NAME: this.ZZUNIT_NAME,
                    ZZFIELD1_NAME: this.ZZFIELD1_NAME,
                    VBUND_NAME: this.VBUND_NAME,
                });
                this.lbNUMBER = this.SAVELIST.length + 1;
                // this.selectedList === this.SAVELIST[this.lbNUMBER.toString()];
                // console.log(this.lbNUMBER + '-' + this.selectedList);
                // this.onSelect(this.SAVELIST[this.lbNUMBER.toString()], (Number(this.lbNUMBER) - 1));
            }
            console.log(this.SAVELIST);
            this.setTotal(this.IDWRBTR);
        }
        else {
            console.log('กรอกข้อมูลไม่ครบ');
        }
    };
    Kb021Component.prototype.formDelete = function () {
        this.BTDEL = true;
        this.BTNEW = true;
        var row = Number(this.lbNUMBER) - 1;
        this.SAVELIST.splice(row, 1); // Delete with ลำดับ
        console.log('Total array: ' + this.SAVELIST.length);
        this.lbNUMBER = this.SAVELIST.length + 1;
        this.getTotal(); // sum
        // if (this.valuelist > 0) {
        //   let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
        //   console.log('Del No. ' + lbNUMBER);
        //   lbNUMBER = lbNUMBER - 1;
        //   this.SAVELIST.splice(lbNUMBER, 1); // Delete with ลำดับ
        // } else {
        //   alert('กรอกข้อมูลไม่ครบหรือข้อมูลไม่สัมพันธ์กัน');
        // }
        // this.valuelist = 0;
    };
    Kb021Component.prototype.formNew = function () {
        this.SAVELIST.push({
            BUKRS: this.BUKRS,
            LBBUKRS: this.LBBUKRS,
            BLDAT: this.BLDAT,
            BUDAT: this.BUDAT,
            TBZZPMT: this.TBZZPMT,
            LBZZPMT: this.LBZZPMT,
            TBXBLNR: this.TBXBLNR,
            GEBER: this.GEBER,
            GEBER_NAME: this.GEBER_NAME,
            tbSearch_term: this.tbSearch_term,
            tbBankn: this.tbBankn,
            HKONT: this.HKONT,
            KOSTL: this.KOSTL,
            FISTL: this.FISTL,
            FKBER: this.FKBER,
            WRBTR: Number(this.WRBTR).toFixed(2),
            PRZNR: this.PRZNR,
            ZZOBJ: this.ZZOBJ,
            ZZUNIT: this.ZZUNIT,
            ZZFIELD1: this.ZZFIELD1,
            VBUND: this.VBUND,
            IDFISTL: this.IDFISTL,
            IDKOSTL: this.IDKOSTL,
            IDHKONT: this.IDHKONT,
            IDWRBTR: this.IDWRBTR,
            IDSTERM: this.IDSTERM,
            IDBLART: this.IDBLART,
            GJAHR: this.GJAHR,
            SGTXT: this.SGTXT,
            HKONT_NAME: this.HKONT_NAME,
            KOSTL_NAME: this.KOSTL_NAME,
            FISTL_NAME: this.FISTL_NAME,
            FKBER_NAME: this.FKBER_NAME,
            PRZNR_NAME: this.PRZNR_NAME,
            ZZOBJ_NAME: this.ZZOBJ_NAME,
            ZZUNIT_NAME: this.ZZUNIT_NAME,
            ZZFIELD1_NAME: this.ZZFIELD1_NAME,
            VBUND_NAME: this.VBUND_NAME,
        });
        this.lbNUMBER = this.SAVELIST.length + 1;
        this.BTDEL = true;
        this.BTNEW = true;
        this.getTotal(); // sum
    };
    Kb021Component.prototype.formEdit = function () {
        // console.log('Log: Edit');
        // this.lbNUMBER
        // let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
        var lbNUMBER = Number(this.lbNUMBER);
        // console.log('Edit No. ' + lbNUMBER);
        lbNUMBER = lbNUMBER - 1; // ตำแหน่ง Array
        if (this.lbNUMBER <= this.SAVELIST.length) {
            this.getValueID(lbNUMBER, this.IDFISTL, this.IDKOSTL, this.IDHKONT);
            this.SAVELIST[lbNUMBER].BUKRS = this.BUKRS;
            this.SAVELIST[lbNUMBER].LBBUKRS = this.LBBUKRS;
            this.SAVELIST[lbNUMBER].BLDAT = this.BLDAT;
            this.SAVELIST[lbNUMBER].BUDAT = this.BUDAT;
            this.SAVELIST[lbNUMBER].TBZZPMT = this.TBZZPMT;
            this.SAVELIST[lbNUMBER].LBZZPMT = this.LBZZPMT;
            this.SAVELIST[lbNUMBER].TBXBLNR = this.TBXBLNR;
            this.SAVELIST[lbNUMBER].GEBER = this.GEBER; // แหล่งของเงิน
            this.SAVELIST[lbNUMBER].GEBER_NAME = this.GEBER_NAME;
            this.SAVELIST[lbNUMBER].tbSearch_term = this.tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
            this.SAVELIST[lbNUMBER].tbBankn = this.tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
            this.SAVELIST[lbNUMBER].HKONT = this.HKONT; // รหัสบัญชีแยกประเภททั่วไป
            this.SAVELIST[lbNUMBER].KOSTL = this.KOSTL; // รหัสศูนย์ต้นทุน
            this.SAVELIST[lbNUMBER].FISTL = this.FISTL; // รหัสงบประมาณ
            this.SAVELIST[lbNUMBER].FKBER = this.FKBER; // รหัสกิจกรรมหลัก
            this.SAVELIST[lbNUMBER].WRBTR = Number(this.WRBTR).toFixed(2); // จำนวนเงินที่ขอเบิก
            this.SAVELIST[lbNUMBER].PRZNR = this.PRZNR; // รหัสกิจกรรมย่อย
            this.SAVELIST[lbNUMBER].ZZOBJ = this.ZZOBJ; // รหัสบัญชีย่อย
            this.SAVELIST[lbNUMBER].ZZUNIT = this.ZZUNIT; // รหัสเจ้าของบัญชีย่อย
            this.SAVELIST[lbNUMBER].ZZFIELD1 = this.ZZFIELD1; // รหัสหมวดพัสดุ
            this.SAVELIST[lbNUMBER].VBUND = this.VBUND; // รหัสหน่วยงานคู่ค้า
            this.SAVELIST[lbNUMBER].IDFISTL = this.IDFISTL; // (ID) รหัสงบประมาณ
            this.SAVELIST[lbNUMBER].IDKOSTL = this.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
            this.SAVELIST[lbNUMBER].IDHKONT = this.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
            this.SAVELIST[lbNUMBER].IDWRBTR = this.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
            this.SAVELIST[lbNUMBER].IDSTERM = this.IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
            this.SAVELIST[lbNUMBER].IDBLART = this.IDBLART; // (ID) Doc. Type
            this.SAVELIST[lbNUMBER].BLDAT = this.BLDAT; // (ID) Account Date
            this.SAVELIST[lbNUMBER].BUDAT = this.BUDAT; // (ID) Date Invoic
            this.SAVELIST[lbNUMBER].GJAHR = this.GJAHR; // ปีบัญชี
            this.SAVELIST[lbNUMBER].SGTXT = this.SGTXT; // รายละเอียดบรรทัดรายการ
            this.SAVELIST[lbNUMBER].HKONT_NAME = this.HKONT_NAME; // (N) ชื่อบัญชีแยกประเภททั่วไป
            this.SAVELIST[lbNUMBER].KOSTL_NAME = this.KOSTL_NAME; // (N) ชื่อศูนย์ต้นทุน
            this.SAVELIST[lbNUMBER].FISTL_NAME = this.FISTL_NAME; // (N) ชื่องบประมาณ
            this.SAVELIST[lbNUMBER].FKBER_NAME = this.FKBER_NAME; // (N) ชื่อกิจกรรมหลัก
            this.SAVELIST[lbNUMBER].PRZNR_NAME = this.PRZNR_NAME; // (N) ชื่อกิจกรรมย่อย
            this.SAVELIST[lbNUMBER].ZZOBJ_NAME = this.ZZOBJ_NAME; // (N) รหัสบัญชีย่อย
            this.SAVELIST[lbNUMBER].ZZUNIT_NAME = this.ZZUNIT_NAME; // (N) รหัสเจ้าของบัญชีย่อย
            this.SAVELIST[lbNUMBER].ZZFIELD1_NAME = this.ZZFIELD1_NAME; // (N) รหัสหมวดพัสดุ
            this.SAVELIST[lbNUMBER].VBUND_NAME = this.VBUND_NAME; // (N) รหัสหน่วยงานคู่ค้า
            this.lbNUMBER = this.SAVELIST.length + 1;
            this.BTDEL = true;
            this.BTNEW = true;
        }
        else {
            this.formSave();
            this.BTDEL = true;
            this.BTNEW = true;
        }
        this.getTotal(); // Sum
    };
    Kb021Component.prototype.formShow = function () {
        console.log('Show');
    };
    Kb021Component.prototype.formSend = function () {
        var _this = this;
        this.xml = '';
        this.xml = "<operations>\n     <operation>\n      <modelCRUD>\n        <tableName>Invoice</tableName>\n          <recordID>0</recordID>\n            <action>CreateUpdate</action>\n              <dataRow>\n                <field column=\"tbSearch_term\">\n                  <val>120</val>\n                </field>\n\t\t\t        </dataRow>\n\t\t      </modelCRUD>\n\t      </operation>";
        for (var index = 0; index < this.SAVELIST.length; index++) {
            var element = this.SAVELIST[index];
            this.xml = this.xml + ("\n<operation>\n\t\t  <modelCRUD>\n\t\t\t  <tableName>InvoiceLine</tableName>\n\t\t\t    <recordID>0</recordID>\n            <action>CreateUpdate</action>\n            <dataRow>\n              <field column=\"TBFISTL\">\n                <val>" + element.IDFISTL + "</val>\n              </field>\n              <field column=\"TBKOSTL\">\n                <val>" + element.IDKOSTL + "</val>\n              </field>\n              <field column=\"TBHKONT\">\n                <val>" + element.IDHKONT + "</val>\n              </field>\n              <field column=\"TBWRBTR\">\n                <val>" + element.WRBTR + "</val>\n              </field>\n            </dataRow>\n          </modelCRUD>\n        </operation>");
            //   <field column="tbSearch_term">\n\
            //   <val>${element.IDSTERM}</val>\n\
            // </field>\n\
            // <field column="BLART">\n\
            //   <val>${element.IDBLART}</val>\n\
            // </field>\n\
            // <field column="BLDAT">\n\
            //   <val>${element.BLDAT}</val>\n\
            // </field>\n\
            // <field column="BUDAT">\n\
            //   <val>${element.BUDAT}</val>\n\
            // </field>\n\
            // ^ รอ Service Adempire พร้อม
        }
        this.xml = this.xml + "\n</operations>";
        console.log(this.SAVELIST.length);
        var config = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6_app_controls_dialog_save_dialog_save_component__["a" /* DialogSaveComponent */], config);
        dialogRef.componentInstance.xml_s = this.xml;
        dialogRef.componentInstance.SAVEHEAD = this.madeHeadDoc();
        dialogRef.componentInstance.SAVELIST = this.SAVELIST; // Document: Detail
        dialogRef.afterClosed()
            .subscribe(function (selection) {
            if (selection) {
                _this.resultTB = selection.value;
                _this.resultLB = selection.name;
                _this.resultNW = selection.new;
                if (selection.new === false) {
                    console.log(_this.resultTB, _this.GJAHR);
                    _this.onGetDocSearch(_this.resultTB, _this.GJAHR);
                }
                else if (selection.new === true) {
                    _this.onGetNewDoc();
                }
                console.log(_this.resultNW, selection.new);
                // this.onDisable(); // Disable Textbox on Page after Success!
                // this.onEnableInput('N'); // N = Disable All Input this Page
                // this.onColor('N'); // 'N' = Change Color Content Black on Page after Success!
                // this.onShowDocID(); // Show Doc ID after Success!
                // console.log('R: ' + this.resultTB + ' | ' + this.resultLB);
                // this.BELNR = this.resultTB; // Doc No.
            }
            else {
                // User clicked 'Cancel' or clicked outside the dialog
            }
        });
    };
    Kb021Component.prototype.getValueIDList = function () {
        var LIST = this.SAVELIST;
        // console.log(LIST);
        for (var index = 0; index < LIST.length; index++) {
            var element = LIST[index];
            this.getValueID(index, element.IDFISTL, element.IDKOSTL, element.IDHKONT);
        }
    };
    Kb021Component.prototype.getValueID = function (index, ID_FISTL, ID_KOSTL, ID_HKONT) {
        // console.log('IDKOSTL: ', this.IDKOSTL);
        var id;
        if (ID_FISTL === '' || ID_FISTL === undefined) {
            id = '';
            id = this.getID(this.FISTL, this.M_IDFISTL);
            this.IDFISTL = id;
            this.SAVELIST[index].IDFISTL = id;
        }
        if (ID_KOSTL === '' || ID_KOSTL === undefined) {
            id = '';
            id = this.getID(this.KOSTL, this.M_IDKOSTL);
            this.IDKOSTL = id;
            this.SAVELIST[index].IDKOSTL = id;
        }
        if (ID_HKONT === '' || ID_HKONT === undefined) {
            id = '';
            id = this.getID(this.HKONT, this.M_IDHKONT);
            this.IDHKONT = id;
            this.SAVELIST[index].IDHKONT = id;
        }
        // console.log('IDKOSTL: ', this.IDKOSTL);
        // console.log('IDHKONT: ', this.IDHKONT);
    };
    Kb021Component.prototype.getID = function (VALUE, ID) {
        console.log(VALUE, ID);
        for (var index = 0; index < ID.length; index++) {
            var element = ID[index];
            if (element.val === VALUE) {
                // console.log(element.val);
                return element.id;
            }
        }
    };
    Kb021Component.prototype.madeHeadDoc = function () {
        var h = {
            'BUKRS': this.BUKRS,
            'GJAHR': this.GJAHR,
            'LBBUKRS': this.LBBUKRS,
            'TBZZPMT': this.TBZZPMT,
            'LBZZPMT': this.LBZZPMT,
            'LUSERID': this.LUSERID,
            'DDGSBER': this.DDGSBER,
            'IDBLART': this.IDBLART,
            'BLDAT': this.BLDAT,
            'BUDAT': this.BUDAT,
            'TBXBLNR': this.TBXBLNR,
            'tbSearch_term': this.tbSearch_term,
            'LIFNR': this.LIFNR,
            'LBTERM': this.LBTERM,
            'ZLSCH': this.ZLSCH,
            'TBKBLNR': this.TBKBLNR,
            'LBKBLNR': this.LBKBLNR,
            'SUMCOST': this.SUMCOST
        };
        return h;
    };
    Kb021Component.prototype.onGetDocSearch = function (BELNR, GJAHR) {
        this.SAVELIST = [];
        this.EXPAND = false;
        var jsonHead = this.madejson(BELNR, GJAHR);
        this.getServiceDoc(jsonHead); // send json to Service and Get Result
        // After Get Doc Detail
        this.BELNR = BELNR;
        this.setDcotype(); // SET Document Type
        this.onEnableInput('N'); // N = Diable All Input
        this.onColor('N'); // N = No Color
        this.onShowDocID();
        // this.setYear();
    };
    Kb021Component.prototype.onGetNewDoc = function () {
        this.onHideDocID();
        this.SAVELIST = [];
        this.EXPAND = true;
        this.onEnableInput('Y'); // N = Diable All Input
        this.onColor('Y'); // N = No Color
        this.clearValueAll();
        this.setYear();
    };
    // button: สร้างเอกสารใหม่
    Kb021Component.prototype.onNewDoc = function () {
        this.router.navigate(['/lch', { outlets: { aux: ['kb021'] } }]);
        this.EXPAND = true;
        this.SAVELIST.shift(); // ลบรายการแรกออก (เครดิต) // พร้อมเทส
        this.SHOWTR = true; // Hide Doc
        this.HIDEBT = false; // Show จำลองการบันทึก & 3 Save
        this.AFTDOC = true; // Hide 3 Button Log
        this.showdoc = false;
        this.onColor('Y');
        this.onEnableInput('Y'); // Y = Enable All Input
        this.lbNUMBER = this.SAVELIST.length + 1;
        this.setDocData(); // Set for TEST
        this.getValueIDList();
        this.setHeader(); // Set for TEST
        // this.getValueIDList();
        console.log(this.BUDAT);
    };
    Kb021Component.prototype.clearValueAll = function () {
        this.LBTERM = ''; // บริษัท มาร์ช จำกัด
        this.LBKBLNR = ''; // ชื่อเลขที่เอกสารสำรองเงินงบประมาณ
        this.KOSTL = '';
        this.KOSTL_NAME = '';
        this.FKBER_NAME = '';
        this.FISTL = '';
        this.FISTL_NAME = '';
        this.FKBER = '';
        this.FKBER_NAME = '';
        this.PRZNR_NAME = '';
        this.ZZOBJ_NAME = '';
        this.ZZFIELD1_NAME = '';
        this.HKONT = '';
        this.HKONT_NAME = '';
        this.ZZUNIT_NAME = ''; // (N) รหัสเจ้าของบัญชีย่อย
        this.VBUND_NAME = ''; // (N) รหัสหน่วยงานคู่ค้า
        this.DATEI = new Date();
        this.DATEA = new Date();
        this.GJAHR = '';
        this.SGTXT = '';
        this.GEBER = '';
        this.GEBER_NAME = '';
        this.WRBTR = '';
        // this.tbSearch_term = ''; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
        // this.tbBankn = ''; // เลขที่บัญชีเงินฝากธนาคาร
        this.IDFISTL = ''; // (ID) รหัสงบประมาณ
        this.IDKOSTL = ''; // (ID) รหัสศูนย์ต้นทุน
        this.IDHKONT = ''; // (ID) รหัสบัญชีแยกประเภททั่วไป
        this.IDWRBTR = ''; // (ID) จำนวนเงินที่ขอเบิก
        this.IDSTERM = ''; // (ID) เลขประจำตัวผู้เสียภาษี
        this.IDBLART = ''; // (ID) Doc. Type
        this.lbNUMBER = 1; // รีเซ็ทลำดับ
    };
    Kb021Component.prototype.madejson = function (BELNR, GJAHR) {
        var jsonHeader = '';
        jsonHeader = "{\"BELNR\":\"" + BELNR + "\", \"GJAHR\":\"" + GJAHR + "\"}";
        return jsonHeader;
    };
    Kb021Component.prototype.getServiceDoc = function (jsonDocHeader) {
        var _this = this;
        // รอ service get Doc พร้อมใช้งาน
        // มี json กลับมา
        console.log(jsonDocHeader); // TEST-ONLY
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url_show = 'http://52.220.14.56:28080/NewGFws/webresources/wsLog/Detail';
        this.httpService.post(url_show, jsonDocHeader, options).subscribe(function (values) {
            console.log('return', values);
            if (values.ok) {
                var result = values.json();
                if (result.Detail.length > 0) {
                    console.log(result);
                    _this.HEADLIST = result;
                    _this.SAVELIST = result.Detail;
                    _this.setHeader();
                    _this.setDcotype();
                    _this.setNavCredit();
                    // this.setGEBER();
                    // this.addCredit(); // TEST
                    console.log(_this.SAVELIST);
                    _this.setDocData();
                    _this.lbNUMBER = 1;
                }
                else {
                    console.log('NO DATA');
                }
            }
            else {
                console.log('ERROR');
            }
        });
    };
    // TEST ADD CREDIT
    Kb021Component.prototype.addCredit = function () {
        // this.SAVELIST.unshift({WRBTR: this.WRBTR});
        console.log('unshif');
        this.SAVELIST.unshift({
            HKONT_NAME: this.LBTERM,
            HKONT: this.LIFNR,
            KOSTL: this.KOSTL,
            FISTL: this.FISTL,
            FKBER: this.FKBER,
            WRBTR: Number(-this.HEADLIST.SUMCOST)
        });
        this.HKONT = this.SAVELIST[0].HKONT;
        this.HKONT_NAME = this.SAVELIST[0].HKONT_NAME;
    };
    Kb021Component.prototype.setHeader = function () {
        this.BUKRS = this.HEADLIST.BUKRS;
        this.LBBUKRS = this.HEADLIST.BUKRS_NAME;
        this.GJAHR = this.HEADLIST.Detail[0].GJAHR;
        this.TBZZPMT = this.HEADLIST.ZZPMT;
        this.LBZZPMT = this.HEADLIST.ZZPMT_NAME;
        this.LUSERID = this.HEADLIST.LUSERID;
        this.DDGSBER = this.HEADLIST.GSBER;
        this.IDBLART = this.HEADLIST.BLART;
        this.BLDAT = this.HEADLIST.BLDAT;
        this.BUDAT = this.HEADLIST.BUDAT;
        this.TBXBLNR = this.HEADLIST.XBLNR;
        this.tbSearch_term = this.HEADLIST.SEARCH_TERM;
        this.LIFNR = this.HEADLIST.LIFNR;
        this.LBTERM = this.HEADLIST.NAME1;
        this.ZLSCH = this.HEADLIST.ZLSCH;
        this.TBKBLNR = this.HEADLIST.KBLNR;
        this.LBKBLNR = this.HEADLIST.KBLNR_NAME;
        this.SUMCOST = Number(this.HEADLIST.SUMCOST);
        this.LOGNO = this.HEADLIST.LOGNO;
        // this.tbBankn  = this.HEADLIST.Detail[1].tbBankn;
        console.log(this.HEADLIST.BUDAT);
        this.coverDate();
        this.setVender();
        // console.log(this.GJAHR );
    };
    Kb021Component.prototype.setDocData = function () {
        console.log(this.SAVELIST);
        var n = 0;
        // this.BUKRS = this.SAVELIST[n].BUKRS;
        // this.LBBUKRS = this.SAVELIST[n].LBBUKRS;
        // this.BLDAT = this.SAVELIST[n].BLDAT;
        // this.BUDAT = this.SAVELIST[n].BUDAT;
        // this.TBZZPMT = this.SAVELIST[n].TBZZPMT;
        // this.LBZZPMT = this.SAVELIST[n].LBZZPMT;
        // this.TBXBLNR = this.SAVELIST[n].TBXBLNR;
        this.GEBER = this.SAVELIST[n].GEBER; // แหล่งของเงิน
        this.GEBER_NAME = this.SAVELIST[n].GEBER_NAME;
        // this.tbSearch_term = this.SAVELIST[n].tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
        // this.tbBankn = this.SAVELIST[n].tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
        this.HKONT = this.SAVELIST[n].HKONT; // รหัสบัญชีแยกประเภททั่วไป
        this.KOSTL = this.SAVELIST[n].KOSTL; // รหัสศูนย์ต้นทุน
        this.FISTL = this.SAVELIST[n].FISTL; // รหัสงบประมาณ
        this.FKBER = this.SAVELIST[n].FKBER; // รหัสกิจกรรมหลัก
        this.WRBTR = this.SAVELIST[n].WRBTR; // จำนวนเงินที่ขอเบิก
        this.PRZNR = this.SAVELIST[n].PRZNR; // รหัสกิจกรรมย่อย
        this.ZZOBJ = this.SAVELIST[n].ZZOBJ; // รหัสบัญชีย่อย
        this.ZZUNIT = this.SAVELIST[n].ZZUNIT; // รหัสเจ้าของบัญชีย่อย
        this.ZZFIELD1 = this.SAVELIST[n].ZZFIELD1; // รหัสหมวดพัสดุ
        this.VBUND = this.SAVELIST[n].VBUND; // รหัสหน่วยงานคู่ค้า
        // this.GJAHR = this.SAVELIST[n].GJAHR; // ปีบัญชี
        this.SGTXT = this.SAVELIST[n].SGTXT; // รายละเอียดบรรทัดรายการ
        this.HKONT_NAME = this.SAVELIST[n].HKONT_NAME; // (ช) ชื่อบัญชีแยกประเภททั่วไป
        this.KOSTL_NAME = this.SAVELIST[n].KOSTL_NAME; // (N) ชื่อศูนย์ต้นทุน
        this.FISTL_NAME = this.SAVELIST[n].FISTL_NAME; // (N) ชื่องบประมาณ
        this.FKBER_NAME = this.SAVELIST[n].FKBER_NAME; // (N) ชื่อกิจกรรมหลัก
        this.PRZNR_NAME = this.SAVELIST[n].PRZNR_NAME; // (N) ชื่อกิจกรรมย่อย
        this.ZZOBJ_NAME = this.SAVELIST[n].ZZOBJ_NAME; // (N) รหัสบัญชีย่อย
        this.ZZUNIT_NAME = this.ZZUNIT_NAME; // (N) รหัสเจ้าของบัญชีย่อย
        this.ZZFIELD1_NAME = this.ZZFIELD1_NAME; // (N) รหัสหมวดพัสดุ
        this.VBUND_NAME = this.VBUND_NAME; // (N) รหัสหน่วยงานคู่ค้า
        this.IDFISTL = this.SAVELIST[n].IDFISTL; // (ID) รหัสงบประมาณ
        this.IDKOSTL = this.SAVELIST[n].IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
        this.IDHKONT = this.SAVELIST[n].IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
        this.IDWRBTR = this.SAVELIST[n].IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
        this.IDSTERM = this.SAVELIST[n].IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
        this.IDBLART = this.SAVELIST[n].IDBLART; // (ID) Doc. Type
        this.selectedList = this.SAVELIST[n];
        // this.WRBTR = this.numberWithDecimal(this.WRBTR);
        // this.setGEBER();
    };
    Kb021Component.prototype.setNavCredit = function () {
        this.SAVELIST[0].WRBTR = '-' + this.numberWithDecimal(this.SAVELIST[0].WRBTR).toString();
        console.log('WRBTR', this.SAVELIST[0].WRBTR);
    };
    Kb021Component.prototype.setYear = function () {
        // ปีบัญชี
        if (this.DATEINV.month >= 10) {
            this.GJAHR = Number(this.DATEINV.year) + 1;
        }
        else {
            this.GJAHR = this.DATEINV.year;
        }
        // งวดเริ่มต้น
        if (this.DATEINV.month < 10) {
            this.ddMonat = this.DATEINV.month + 3;
        }
        else {
            this.ddMonat = this.DATEINV.month - 9;
        }
        console.log(this.DATEINV, this.GJAHR);
        this.yearList = [];
        this.YEAR = this.GJAHR + 543;
        var iGJAHR = this.GJAHR + 543;
        iGJAHR = iGJAHR - 8;
        for (var index = -7; index < 7; index++) {
            iGJAHR = iGJAHR + 1;
            this.yearList.push({ YESR: iGJAHR });
        }
        this.setGEBER();
    };
    Kb021Component.prototype.setTest = function () {
        this.LBTERM = ''; // บริษัท มาร์ช จำกัด
        this.LBKBLNR = ''; // ชื่อเลขที่เอกสารสำรองเงินงบประมาณ
        this.KOSTL_NAME = 'สำนักบริหารกลาง';
        this.FKBER_NAME = 'การติดตาม เร่งรัด การดำเน';
        this.FISTL_NAME = 'โครงการจัดตั้งศูนย์ค';
        this.PRZNR_NAME = '';
        this.ZZOBJ_NAME = '';
        this.ZZFIELD1_NAME = '';
        this.HKONT_NAME = 'ค่าซ่อมแซมและค่าบำรุงรักษา';
        this.ZZUNIT_NAME = ''; // (N) รหัสเจ้าของบัญชีย่อย
        this.VBUND_NAME = ''; // (N) รหัสหน่วยงานคู่ค้า
    };
    Kb021Component.prototype.callFunction = function () {
        console.log('Call Function! - Work');
    };
    Kb021Component.prototype.showLog = function () {
        window.open('./logreport?docid=' + this.LOGNO);
    };
    Kb021Component.prototype.printLog = function () {
        window.open('./report?docid=' + this.LOGNO);
    };
    Kb021Component.prototype.ngOnInit = function () {
        var _this = this;
        // ใส่ค่าต่างๆ ไว้เพื่อเทส
        this.setTest();
        // เมื่อมีการส่งค่ามาจาก Search หรืออื่นๆ
        this.route.queryParams
            .filter(function (params) { return params.BELNR; })
            .subscribe(function (params) {
            _this.onGetDocSearch(params.BELNR, params.GJAHR);
        });
        // ปีบัญชีและงวด เริ่มต้น
        this.setYear();
    };
    return Kb021Component;
}());
Kb021Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'kb02-1',
        template: __webpack_require__("../../../../../src/app/kb02/kb02-1/kb02-1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/kb02/kb02-1/kb02-1.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_menu_top_menu_top_component__["a" /* MenuTopComponent */], __WEBPACK_IMPORTED_MODULE_9__kb02_kb02_3_kb02_3_component__["a" /* Kb023Component */]]
        // providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}], // define custom NgbDatepickerI18n provider
    })
    // @Injectable()
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__kb02_kb02_3_kb02_3_component__["a" /* Kb023Component */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__kb02_kb02_3_kb02_3_component__["a" /* Kb023Component */]) === "function" && _e || Object])
], Kb021Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=kb02-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-2/kb02-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-2/kb02-2.component.html":
/***/ (function(module, exports) {

module.exports = "้hi\r\n<div id=\"gfForm2\" style=\"display: none\" >\r\n  <fieldset style=\"width:850px;\">\r\n    <legend class=\"feildsetTag\">กลับรายการ</legend>\r\n    <table border=\"1\" bordercolor=\"#f5f5f5\" cellpadding=\"0\" cellspacing=\"0\" class=\"defaultTableBodyShot\" style=\"width: 850px\">\r\n      <tr>\r\n        <td>\r\n          &nbsp;<strong class=\"fontContentBlack\">ชื่อเอกสาร</strong>\r\n        </td>\r\n        <td colspan=\"6\" style=\"height: 22px\">\r\n          ใบกลับรายการขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ (กร. 02)&nbsp; &nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px\">\r\n          &nbsp;<strong class=\"fontContentBlack\"><asp:Label ID=\"cssBukrs\" runat=\"server\" CssClass=\"fontContentBlue\">รหัสหน่วยงาน</asp:Label></strong><asp:RequiredFieldValidator ID=\"RequiredFieldValidator7\" runat=\"server\"\r\n                                                                                                                                                                                 ControlToValidate=\"tbBUKRS\" ErrorMessage=\"กรุณากรอกรหัสหน่วยงาน\" ForeColor=\"Tomato\">*</asp:RequiredFieldValidator><asp:RequiredFieldValidator ID=\"rvBukrs\" runat=\"server\" ControlToValidate=\"tbBUKRS\" ErrorMessage=\"กรุณากรอกรหัสหน่วยงาน\"\r\n                                                                                                                                                                                                                                                                                                                               ForeColor=\"Tomato\" ValidationGroup=\"zzpmt\">*</asp:RequiredFieldValidator><asp:RequiredFieldValidator ID=\"rvBukrsDisplay\" runat=\"server\" ControlToValidate=\"tbBUKRS\" ErrorMessage=\"กรุณากรอกรหัสหน่วยงาน\"\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                    ForeColor=\"Tomato\" ValidationGroup=\"Display\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"height: 18px; width: 209px;\">\r\n          <asp:TextBox ID=\"tbBUKRS\" runat=\"server\" MaxLength=\"4\" Width=\"112px\" CssClass=\"fontContentBlack\"></asp:TextBox>&nbsp;<asp:ImageButton ID=\"btBukrs\" runat=\"server\" CausesValidation=\"False\" Height=\"20px\" ImageAlign=\"AbsMiddle\"\r\n                                                                                                                                                ImageUrl=\"assets/Images/SearchIcon.jpg\" ToolTip=\"ค้นหา\" Width=\"22px\" OnClick=\"btBukrs_Click\" />\r\n        </td>\r\n        <td style=\"height: 18px; width: 191px;\">\r\n          <strong><asp:Label ID=\"cssBelnr\" runat=\"server\" CssClass=\"fontContentRed\">เลขที่ใบขอเบิกเงิน</asp:Label></strong>\r\n          <asp:RequiredFieldValidator ID=\"rvBelnr\" runat=\"server\" ControlToValidate=\"tbBELNR\"\r\n                                      ErrorMessage=\"กรุณากรอกเลขที่ใบขอเบิกเงิน\" ForeColor=\"Tomato\">*</asp:RequiredFieldValidator>\r\n          <asp:RequiredFieldValidator ID=\"rvBelnrDisplay\" runat=\"server\" ControlToValidate=\"tbBELNR\"\r\n                                      ErrorMessage=\"กรุณากรอกเลขที่ใบบันทึกรายการบัญชี\" ForeColor=\"Tomato\" ValidationGroup=\"Display\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"height: 18px\">\r\n          <asp:TextBox ID=\"tbBELNR\" runat=\"server\" CssClass=\"fontContentBlack\" Width=\"100px\" MaxLength=\"10\"></asp:TextBox>\r\n        </td>\r\n        <td style=\"height: 18px\">\r\n          <strong class=\"fontContentBlue\">ปีงบประมาณ</strong>\r\n        </td>\r\n        <td style=\"height: 18px;\">\r\n          <asp:DropDownList ID=\"ddYear\" runat=\"server\" CssClass=\"fontContentBlack\" Width=\"50px\">\r\n          </asp:DropDownList>\r\n        </td>\r\n        <td style=\"height: 18px; width: 85px;\">\r\n          <input id=\"btnDisplay\" runat=\"server\" name=\"Submit\" style=\"width: 80px; height: 20px\" tabindex=\"0\"\r\n                 type=\"submit\" value=\"แสดงเอกสาร\" onserverclick=\"btnDisplay_ServerClick\" validationgroup=\"Display\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px\"> &nbsp;</td>\r\n        <td colspan=\"6\" style=\"height: 18px\">\r\n          <asp:TextBox ID=\"lbBUKRS\" runat=\"server\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\"\r\n                       ForeColor=\"#666666\" TabIndex=\"-1\" Width=\"230px\"></asp:TextBox>&nbsp; &nbsp;\r\n          &nbsp;&nbsp; &nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px\">\r\n          &nbsp;<asp:Label ID=\"cssGsber\" runat=\"server\" CssClass=\"fontContentBlue\" Font-Bold=\"True\">รหัสพื้นที่</asp:Label>\r\n        </td>\r\n        <td style=\"height: 18px; width: 209px;\">\r\n          <asp:DropDownList ID=\"ddGsber\" runat=\"server\" Width=\"140px\" CssClass=\"fontContentBlack\">\r\n          </asp:DropDownList>\r\n        </td>\r\n        <td style=\"height: 18px; width: 191px;\">\r\n          <strong class=\"fontContentBlue\">วันที่ผ่านรายการ</strong>\r\n          <asp:RequiredFieldValidator ID=\"rvBudat\" runat=\"server\" ControlToValidate=\"tbBUDAT\"\r\n                                      ErrorMessage=\"กรุณากรอกวันที่ผ่านรายการ\" ForeColor=\"Tomato\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td colspan=\"4\" style=\"height: 18px\">\r\n          <asp:TextBox ID=\"tbBUDAT\" runat=\"server\" CssClass=\"fontContentBlack\" MaxLength=\"8\"\r\n                       Width=\"100px\"></asp:TextBox>&nbsp;\r\n          <img id=\"calendar9\" src=\"assets/Images/imgCal.jpg\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px\"> &nbsp;</td>\r\n        <td colspan=\"6\" style=\"height: 18px\">\r\n          &nbsp; &nbsp; &nbsp;&nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          &nbsp;<strong class=\"fontContentBlack\"><asp:Label ID=\"cssZzpmt\" runat=\"server\" CssClass=\"fontContentBlue\">รหัสหน่วยเบิกจ่าย</asp:Label></strong><asp:RequiredFieldValidator ID=\"RequiredFieldValidator9\" runat=\"server\"\r\n                                                                                                                                                                                      ControlToValidate=\"tbZZPMT\" ErrorMessage=\"กรุณากรอกรหัสหน่วยเบิกจ่าย\" ForeColor=\"Tomato\">*</asp:RequiredFieldValidator>\r\n        </td>\r\n        <td style=\"width: 209px\">\r\n          <asp:TextBox ID=\"tbZZPMT\" runat=\"server\" MaxLength=\"15\" Width=\"112px\" CssClass=\"fontContentBlack\"></asp:TextBox>&nbsp;<asp:ImageButton ID=\"btZzpmt\" runat=\"server\" Height=\"20px\" ImageAlign=\"AbsMiddle\" ImageUrl=\"assets/Images/SearchIcon.jpg\"\r\n                                                                                                                                                 OnClick=\"btZzpmt_Click\" ToolTip=\"ค้นหา\" ValidationGroup=\"zzpmt\" Width=\"22px\" />\r\n        </td>\r\n        <td style=\"width: 191px\">\r\n          <strong><asp:Label ID=\"cssReason\" runat=\"server\" CssClass=\"fontContentRed\">เหตุผลในการกลับรายการ</asp:Label></strong>\r\n          <asp:CustomValidator ID=\"cvReason\" runat=\"server\" ErrorMessage=\"กรุณาระบุเหตุผลในการกลับรายการ\"\r\n                               ForeColor=\"Tomato\" OnServerValidate=\"cvReason_ServerValidate\">*</asp:CustomValidator>\r\n        </td>\r\n        <td colspan=\"4\">\r\n          <asp:DropDownList ID=\"ddReason\" runat=\"server\" Width=\"241px\" CssClass=\"fontContentBlack\">\r\n          </asp:DropDownList>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px\"> &nbsp;</td>\r\n        <td colspan=\"6\" style=\"height: 18px\">\r\n          <asp:TextBox ID=\"lbZZPMT\" runat=\"server\" BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\"\r\n                       ForeColor=\"#666666\" TabIndex=\"-1\" Width=\"230px\"></asp:TextBox>&nbsp; &nbsp;\r\n          &nbsp;&nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"7\" aling=\"left\" style=\"height: 18px;\">\r\n          <asp:ValidationSummary ID=\"ValidationSummary\" runat=\"server\" ForeColor=\"Tomato\"\r\n                                 Width=\"304px\" TabIndex=\"-1\" />\r\n          <asp:Label ID=\"lbNotFound\" runat=\"server\" ForeColor=\"Tomato\" TabIndex=\"-1\"></asp:Label>&nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"height: 18px\" align=\"center\" colspan=\"7\">\r\n          <asp:Button ID=\"btnReverse2\" runat=\"server\" OnClick=\"btnReverse_ServerClick\" Text=\"กลับรายการ\"\r\n                      Width=\"128px\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"center\" colspan=\"7\" style=\"height: 18px\">\r\n          &nbsp;\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </fieldset>\r\n</div>\r\n\r\n<asp:TextBox ID=\"tbPopupCheck\" runat=\"server\" BackColor=\"White\" BorderColor=\"White\"\r\n             BorderStyle=\"Solid\" ForeColor=\"White\" Width=\"122px\" TabIndex=\"-1\"></asp:TextBox>\r\n<script type=\"text/javascript\">MessageAlert('ucKb02_2_tbPopupCheck');</script>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-2/kb02-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kb022Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Kb022Component = (function () {
    function Kb022Component() {
    }
    Kb022Component.prototype.ngOnInit = function () {
    };
    return Kb022Component;
}());
Kb022Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'kb02-2',
        template: __webpack_require__("../../../../../src/app/kb02/kb02-2/kb02-2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/kb02/kb02-2/kb02-2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Kb022Component);

//# sourceMappingURL=kb02-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-3/kb02-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select{\r\n    text-align-last:left;\r\n}\r\n\r\n/* :not(input):not(textarea),\r\n:not(input):not(textarea):after,\r\n:not(input):not(textarea):before {\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: -moz-none;\r\n    user-select: none;\r\n} */\r\n\r\n:host /deep/ .mat-tab-label {\r\n  /* min-width: 0!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important; */\r\n  background-color: #F0F0D0;\r\n  font-size: 12px !important;\r\n  font-weight: bold;\r\n  color: rgb(53, 53, 53) !important;\r\n  height: 25px !important;\r\n  opacity: 1;\r\n}\r\n:host >>> .mat-tab-label-active {\r\n  background-color: rgb(255, 255, 158);\r\n  color: black !important;\r\n}\r\n:host >>> .selected-tab-0 md-ink-bar {\r\n    background-color: #8296C8;\r\n}\r\n:host >>> .selected-tab-1 md-ink-bar {\r\n    background-color: #8296C8;\r\n}\r\n\r\ntdCenter {\r\n  text-align: center; /* center textbox horizontally */\r\n  vertical-align: middle; /* center textbox vertically */\r\n}\r\n\r\n\r\n\r\n/* :host /deep/ .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\r\n    border-color: DodgerBlue;\r\n}\r\n\r\n:host /deep/ .mat-radio-button.mat-accent .mat-radio-inner-circle {\r\n    background-color: DodgerBlue;\r\n} */\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-3/kb02-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div width=\"100%\">\r\n<fieldset id=\"fldstBody\" style=\"z-index:1;max-width: 860px;\" >\r\n<legend class=\"feildsetTag\">ค้นหา</legend>\r\n<div style=\"min-height:173px\">\r\n  <md-tab-group selectedIndex=\"0\" #tabGroup class=\"selected-tab-{{tabGroup.selectedIndex}}\">\r\n    <!-- TAB 1 -->\r\n    <md-tab label=\"ค้นหาตามเลขที่เอกสาร\" class=\"disable-select\">\r\n      <br>\r\n      <div>\r\n      <table class=\"defaultTableBodyShot\">\r\n        <tr>\r\n          <td>\r\n              <strong class=\"fontContentBlue\">ใบขอเบิกเงินจากระบบ</strong>\r\n          </td>\r\n          <td colspan=\"3\" class=\"tdCenter\">\r\n            <form #f=\"ngForm\">\r\n              <input type=\"radio\" value=\"web\" id=\"web\" name=\"type\" [(ngModel)]=\"RADIO_TYPE\">\r\n              <label align=\"center\" for=\"web\">Web Online</label>\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input type=\"radio\" value=\"excel\"  id=\"excel\" name=\"type\" [(ngModel)]=\"RADIO_TYPE\">\r\n              <label for=\"excel\">Excel Loader</label>\r\n            </form>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"width: 174px\">\r\n            <strong class=\"fontContentRed\">เลขที่ใบขอเบิกเงิน</strong>\r\n           </td>\r\n          <td style=\"width: 176px;\">\r\n            <input type=\"text\" [(ngModel)]=\"BELNR1s\">\r\n            <!-- <asp:TextBox ID=\"tbBELNRFrom\" runat=\"server\" ForeColor=\"#333333\" MaxLength=\"10\"></asp:TextBox> -->\r\n          </td>\r\n          <td style=\"width: 42px;\">\r\n            &nbsp;<strong>ถึง</strong>\r\n          </td>\r\n          <td style=\"width: 459px\">\r\n              <input type=\"text\" [(ngModel)]=\"BELNR2s\">\r\n            <!-- <asp:TextBox ID=\"tbBELNRTo\" runat=\"server\" ForeColor=\"#333333\" MaxLength=\"10\"></asp:TextBox> -->\r\n          </td>\r\n          </tr>\r\n          <tr style=\"font-weight: bold\">\r\n            <td style=\"width: 174px\">\r\n              <strong class=\"fontContentBlue\">ปีงบประมาณ</strong></td>\r\n            <td align=\"left\" style=\"color: #000000\">\r\n              <!-- <asp:DropDownList ID=\"ddYearFrom\" runat=\"server\" TabIndex=\"7\" Width=\"50px\" ForeColor=\"#333333\">\r\n              </asp:DropDownList> -->\r\n              <select [(ngModel)]=\"YEAR\">\r\n                <option *ngFor=\"let c of yearList\" [ngValue]=\"c.YESR\">{{c.YESR}}</option>\r\n              </select>\r\n            </td>\r\n            <td style=\"width: 42px\">\r\n              &nbsp;&nbsp;\r\n            </td>\r\n            <td style=\"width: 459px\">\r\n              &nbsp;\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"4\" style=\"height: 21px\">\r\n              <Label Text=\"หมายเหตุ:\"></Label>\r\n              <Label Text=\"ใบขอเบิกเงินของระบบ Excel Loader ค้นหาได้ตามเลขที่เอกสารเท่านั้น\"></Label>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </md-tab>\r\n    <!-- TAB 2 -->\r\n    <md-tab label=\"ค้นหาตามเงื่อนไขอื่น\">\r\n      <br>\r\n      <div>\r\n        <table class=\"defaultTableBodyShot\">\r\n          <tr>\r\n            <td style=\"width: 174px\"  >\r\n              <select class=\"fontContentBlue\" [(ngModel)]=\"SELECTED_DATE\" style=\"font-weight:bold; width: 120px; text-align-last:left;\">\r\n                <option *ngFor=\"let c of dateList\" [ngValue]=\"c.id\">{{c.Name}}</option>\r\n              </select>\r\n            </td>\r\n            <td style=\"width: 130px\">\r\n              <md-input-container style=\"width: 100px\">\r\n                <input mdInput [(ngModel)]=\"F_DATE\" [mdDatepicker]=\"fDatepicker\">\r\n                <md-datepicker-toggle mdSuffix [for]=\"fDatepicker\"></md-datepicker-toggle>\r\n              </md-input-container>\r\n              <md-datepicker #fDatepicker></md-datepicker>\r\n            </td>\r\n            <td style=\"width: 42px;\">\r\n              &nbsp;<strong>ถึง</strong>\r\n            </td>\r\n            <td style=\"width: 130px\">\r\n              <md-input-container style=\"width: 100px\">\r\n                <input mdInput [(ngModel)]=\"T_DATE\" [mdDatepicker]=\"tDatepicker\">\r\n                <md-datepicker-toggle mdSuffix [for]=\"tDatepicker\"></md-datepicker-toggle>\r\n              </md-input-container>\r\n              <md-datepicker #tDatepicker></md-datepicker>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <strong class=\"fontContentGreen\">การอ้างอิง</strong>\r\n            </td>\r\n            <td style=\"width: 190px\">\r\n              <input type=\"text\" [(ngModel)]=\"TBXBLNR1s\">\r\n              <!-- <asp:TextBox ID=\"TBXBLNR\" runat=\"server\" MaxLength=\"16\" ForeColor=\"#333333\"></asp:TextBox> -->\r\n            </td>\r\n            <td style=\"width: 37px\">\r\n              &nbsp;<strong>ถึง</strong>\r\n            </td>\r\n            <td style=\"width: 190px\">\r\n                <input type=\"text\" [(ngModel)]=\"TBXBLNR2s\">\r\n              <!-- <asp:TextBox ID=\"tbXBLNRTo\" runat=\"server\" MaxLength=\"16\" ForeColor=\"#333333\"></asp:TextBox> -->\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <strong class=\"fontContentGreen\">รหัสประจำตัวผู้เสียภาษี (ผู้ขาย)</strong>\r\n            </td>\r\n            <td style=\"width: 190px\">\r\n              <input type=\"text\" [(ngModel)]=\"TBSTERM\">\r\n              <!-- <asp:TextBox ID=\"tbSearchTerm\" runat=\"server\" ForeColor=\"#333333\" MaxLength=\"13\"></asp:TextBox> -->\r\n            </td>\r\n            <td style=\"width: 37px\">\r\n              &nbsp;\r\n            </td>\r\n            <td>\r\n              &nbsp;\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n                <strong class=\"fontContentGreen\">ประเภทเอกสาร</strong>\r\n            </td>\r\n            <td>\r\n              <select [disabled]=\"DSTBALL\" [(ngModel)]=\"IDBLART1s\" class=\"fontContentBlack\" style=\"width: 100%\">\r\n                <option *ngFor=\"let o of typeDocList\" [ngValue]=\"o.id\">{{o.Name}}</option>\r\n              </select>\r\n            </td>\r\n            <td></td>\r\n            <td>\r\n              <select [disabled]=\"DSTBALL\" [(ngModel)]=\"IDBLART2s\" class=\"fontContentBlack\" style=\"width: 100%\">\r\n                <option *ngFor=\"let o of typeDocList\" [ngValue]=\"o.id\">{{o.Name}}</option>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </md-tab>\r\n  </md-tab-group>\r\n  </div>\r\n  <div [hidden]=\"forAdmin\">\r\n    <hr>\r\n    <!-- <br> -->\r\n    <table>\r\n      <tr>\r\n        <td style=\"width: 174px\">\r\n          <strong>\r\n            <Label ID=\"cssBukrs\" Class=\"fontContentBlue\">รหัสหน่วยงาน</Label>\r\n          </strong>\r\n        </td>\r\n        <td valign=\"middle\" style=\"height: 25px;\" style=\"width: 176px;\">\r\n          <input type=\"text\" [(ngModel)]=\"TBBUKRS\" MaxLength=\"4\" id=\"TBBUKRS\" Class=\"fontContentBlack\">&nbsp;\r\n          <input type=\"image\" (click)=\"dialogSearch('TBBUKRS', 'cssBukrs')\" Align=\"AbsMiddle\" src=\"assets/Images/SearchIcon.jpg\"/>\r\n        </td>\r\n        <td style=\"width: 42px;\"></td>\r\n        <td style=\"height: 25px;\"  Class=\"fontContentBlack\">\r\n            <Label runat=\"server\">{{LBBUKRS}}</Label>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"width: 174px\">\r\n          <strong>\r\n            <Label ID=\"cssZzpmt\" Class=\"fontContentBlue\">รหัสหน่วยเบิกจ่าย</Label>\r\n          </strong>\r\n        </td>\r\n        <td valign=\"middle\" style=\"height: 25px;\" style=\"width: 176px;\">\r\n          <input type=\"text\" [(ngModel)]=\"TBZZPMT\" MaxLength=\"4\" id=\"TBZZPMT\" Class=\"fontContentBlack\">&nbsp;\r\n          <input type=\"image\" (click)=\"dialogSearch('TBZZPMT', 'cssZzpmt')\" Align=\"AbsMiddle\" src=\"assets/Images/SearchIcon.jpg\"/>\r\n        </td>\r\n        <td style=\"width: 42px;\"></td>\r\n        <td style=\"height: 25px;\"  Class=\"fontContentBlack\">\r\n            <Label runat=\"server\">{{LBZZPMT}}</Label>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div [hidden]=\"forAdmin\">\r\n    <fieldset class=\"feildsetTag\" style=\"width: 97%\">\r\n      <legend>ส่วนของผู้ดูแลระบบ </legend>\r\n      <table>\r\n        <tr>\r\n          <td style=\"width: 162px\">\r\n            <strong>\r\n              <Label ID=\"cssZzpmt\" Class=\"fontContentGreen\">รหัสผู้ใช้งาน</Label>\r\n            </strong>\r\n          </td>\r\n          <td valign=\"middle\" style=\"height: 25px;\" style=\"width: 176px;\">\r\n            <input type=\"text\" [(ngModel)]=\"USERID\" MaxLength=\"4\" id=\"USERID\" Class=\"fontContentBlack\">&nbsp;\r\n            <!-- <input type=\"image\" (click)=\"dialogSearch('TBZZPMT', 'cssZzpmt')\" Align=\"AbsMiddle\" src=\"assets/Images/SearchIcon.jpg\"/> -->\r\n          </td>\r\n          <td style=\"width: 42px;\"></td>\r\n        </tr>\r\n      </table>\r\n    </fieldset>\r\n  </div>\r\n  <hr>\r\n  <div align=\"center\">\r\n    <button (click)=\"onSearch(this.tabGroup.selectedIndex)\">ค้นหา</button>\r\n  </div>\r\n  <div [hidden]=\"forResult\">\r\n    <app-grid-view [RLINK]=\"RLINK\" [RESLIST]=\"RESLIST\"></app-grid-view>\r\n  </div>\r\n  <div [hidden]=\"H_WAIT\">\r\n    <br>\r\n      <md-progress-bar id=\"progress-bar\" mode=\"query\"></md-progress-bar>\r\n  </div>\r\n  <div [hidden]=\"notFound\" align=\"center\">\r\n    <br>\r\n    <span class=\"fontErrorRed\" >\r\n      {{DATAWRONG}}\r\n      <app-check-web [hidden]=\"noAddOn\"></app-check-web>\r\n    </span>\r\n  </div>\r\n</fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/kb02/kb02-3/kb02-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kb023Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_controls_dialog_search_dialog_search_component__ = __webpack_require__("../../../../../src/app/controls/dialog-search/dialog-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_menu_top_menu_top_component__ = __webpack_require__("../../../../../src/app/menu-top/menu-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Kb023Component = (function () {
    function Kb023Component(route, MenuTop, dialog, httpService) {
        this.route = route;
        this.MenuTop = MenuTop;
        this.dialog = dialog;
        this.httpService = httpService;
        this.dateList = [
            { id: 'CPUDT', Name: 'วันที่บันทึกรายการ' },
            { id: 'BUDAT', Name: 'วันที่ผ่านรายการ' },
            { id: 'BLDAT', Name: 'วันที่เอกสาร' },
        ];
        this.typeDocList = [
            { id: '', Name: '---- ไม่กำหนด ----' },
            { id: 'K0', Name: 'K0 - เงินจ่ายสิ้นเดือน' },
            { id: 'K1', Name: 'K1 - ลูกหนี้เงินยืม' },
            { id: 'K8', Name: 'K8 - เงินอุดหนุน' },
            { id: 'KC', Name: 'KC - ขอเบิก(1.ข)' },
            { id: 'KD', Name: 'KD - ขอเบิก(1.ข) กันเงิน' },
            { id: 'KE', Name: 'KE - ขอเบิก(2.ข)' },
            { id: 'KF', Name: 'KF - ขอเบิก(2.ข) กันเงิน' },
            { id: 'KL', Name: 'KL - ใบสำคัญงปม(2)' },
            { id: 'KM', Name: 'KM - ใบสำคัญงปม(2) กันเงิน' },
        ];
        this.SELECTED_DATE = this.dateList[0].id;
        this.RADIO_TYPE = 'web';
        this.RESLIST = [];
        this.RLINK = 'kb021';
        // TAB 2 ----------//----------//----------//
        this.TBBUKRS = '2109'; // รหัสงบประมาณ
        this.TBZZPMT = '2100900006'; // รหัสหน่วยเบิกจ่าย
        this.TBXBLNR1s = ''; // การอ้างอิง 1
        this.TBXBLNR2s = ''; // การอ้างอิง 2
        this.TBXBLNR1 = '';
        this.TBXBLNR2 = '';
        this.TBSTERM = ''; // รหัสประจำตัวผู้เสียภาษี
        this.IDBLART1s = this.typeDocList[0].id; // ประเภทเอกสาร
        this.IDBLART2s = this.typeDocList[0].id; // ประเภทเอกสาร
        // Label
        this.LBBUKRS = 'กรมอนามัย'; // TEST รหัสงบประมาณ
        this.LBZZPMT = 'กองคลัง'; // TEST รหัสหน่วยเบิกจ่าย
        // Date
        this.F_DATE = new Date();
        this.T_DATE = new Date();
        // TAB 1 ----------//----------//----------//
        // - // เลขที่ใบขอเบิก
        this.BELNR1s = '10001002';
        this.BELNR2s = '';
        this.BELNR1 = '';
        this.BELNR2 = '';
        // - // ปีงบประมาณ
        this.yearList = [];
        this.GJAHR = new Date();
        this.YEAR = Number(this.GJAHR.getFullYear());
        // JSON
        this.json_searchDoc = '';
        this.notFound = true;
        this.noAddOn = true; // Test for Add-On # ลบออกเมื่อ service log ไม่จำเป็นต้องใช้
        this.H_WAIT = true;
        // Processing anime
        this.DATAWRONG = 'ไม่พบผลการค้นหา';
        // TEST ONLY
        this.sampleData = 'some parent Data';
        this.sampleChildData = '';
        // to show Data on KB021
        this.SBELNR = '';
        // TEST
        console.log('Route x:' + route.url);
        // this.GridViewComponent.RLINK = '/kb021';
        // this.MenuTop.onClick(route.url);
    }
    // Open Dialog Search
    Kb023Component.prototype.dialogSearch = function (textcode, textname) {
        var codetx = textcode;
        var nametx = document.getElementById(textname).textContent;
        console.log('Open: ' + codetx + ' | ' + nametx);
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3_app_controls_dialog_search_dialog_search_component__["a" /* DialogSearchComponent */], { panelClass: 'myapp-no-padding-dialog' });
        dialogRef.componentInstance.code_t = codetx;
        dialogRef.componentInstance.name_t = nametx;
    };
    Kb023Component.prototype.onSearch = function (tab) {
        this.checkPram();
        this.RESLIST = [];
        this.notFound = true;
        this.forResult = true;
        this.coverDateFT();
        this.genJSONSearch(tab);
        this.sendJSONSearch(tab);
    };
    Kb023Component.prototype.checkPram = function () {
        this.BELNR1 = this.BELNR1s;
        this.BELNR2 = this.BELNR2s;
        this.TBXBLNR1 = this.TBXBLNR1s;
        this.TBXBLNR2 = this.TBXBLNR2s;
        this.IDBLART1 = this.IDBLART1s;
        this.IDBLART2 = this.IDBLART2s;
        if (this.TBXBLNR1s === '') {
            this.TBXBLNR1 = this.TBXBLNR2;
        }
        else if (this.TBXBLNR2s === '') {
            this.TBXBLNR2 = this.TBXBLNR1;
        }
        if (this.IDBLART1s === '') {
            this.IDBLART1 = this.IDBLART2;
        }
        else if (this.IDBLART2s === '') {
            this.IDBLART2 = this.IDBLART1;
        }
        if (this.BELNR1s === '') {
            this.BELNR1 = this.BELNR2;
        }
        else if (this.BELNR2s === '') {
            this.BELNR2 = this.BELNR1;
        }
    };
    Kb023Component.prototype.coverDateFT = function () {
        this.F_DATEC = this.F_DATE.getDate() + '/' + Number(this.F_DATE.getMonth() + 1) + '/' + this.F_DATE.getFullYear();
        this.T_DATEC = this.T_DATE.getDate() + '/' + Number(this.T_DATE.getMonth() + 1) + '/' + this.T_DATE.getFullYear();
    };
    Kb023Component.prototype.genJSONSearch = function (tab) {
        this.json_searchDoc = '';
        if (tab === 0) {
            this.json_searchDoc = "{\"BELNR1\": \"" + this.BELNR1 + "\",\n                              \"BELNR2\": \"" + this.BELNR2 + "\",\n                              \"GJAHR\": \"" + (this.YEAR - 543) + "\"}";
        }
        else if (tab === 1) {
            this.json_searchDoc = "{\"DATETYPE\":\"" + this.SELECTED_DATE + "\",\n                              \"F_DATE\": \"" + this.F_DATEC + "\",\n                              \"T_DATE\": \"" + this.T_DATEC + "\",\n                              \"TBXBLNR1\": \"" + this.TBXBLNR1 + "\",\n                              \"TBXBLNR2\": \"" + this.TBXBLNR2 + "\",\n                              \"TBSTERM\": \"" + this.TBSTERM + "\",\n                              \"IDBLART1\": \"" + this.IDBLART1 + "\",\n                              \"IDBLART2\": \"" + this.IDBLART2 + "\"}";
        }
        // console.log(this.json_searchDoc);
    };
    Kb023Component.prototype.sendJSONSearch = function (tab) {
        var _this = this;
        this.H_WAIT = false;
        this.noAddOn = true; // TEST
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        var url = '';
        if (tab === 0) {
            url = 'http://52.220.14.56:28080/NewGFws/webresources/wsLog/T1';
        }
        else if (tab === 1) {
            url = 'http://52.220.14.56:28080/NewGFws/webresources/wsLog';
        }
        this.httpService.post(url, this.json_searchDoc, { headers: headers }).subscribe(function (values) {
            // console.log('return', values);
            if (values.ok) {
                var result = values.json();
                if (result.result.length > 0 && result.result.length <= 300) {
                    _this.RESLIST = result.result;
                    _this.forResult = false;
                    _this.H_WAIT = true;
                }
                else if (result.result.length > 300) {
                    _this.H_WAIT = true;
                    _this.DATAWRONG = 'ไม่สามารถแสดงผลการค้นหาเกิน 300 รายการได้ กรุณาเปลี่ยนเงื่อนไขการค้นหาใหม่';
                    _this.forResult = true;
                    _this.notFound = false;
                }
                else {
                    _this.H_WAIT = true;
                    _this.DATAWRONG = 'ไม่พบเอกสาร';
                    _this.forResult = true;
                    _this.notFound = false;
                }
            }
            else {
                _this.H_WAIT = true;
                console.log('F');
                alert(values.toString());
            }
        }, function (error) {
            _this.H_WAIT = true;
            console.log(error);
            _this.DATAWRONG = 'การเชื่อมต่อกับ service log ไม่สมบูรณ์ : ' + '(' + error.status + ') ' + error.statusText;
            _this.notFound = false;
            _this.noAddOn = false; // TEST
        });
    };
    Kb023Component.prototype.gotoKB021 = function (doc) {
        if (doc !== undefined) {
            console.log('Doc is : ' + doc);
            this.SBELNR = doc;
        }
        else {
        }
    };
    Kb023Component.prototype.ngOnInit = function () {
        // this.MenuTop.onClick(this.route.url); // TEST
        this.MenuTop.topMenu_s = 'fontMenuTop'; // TEST
        this.forAdmin = true; // TEST NOT ADMIN
        this.forResult = true; // TEST HIDE
        // For Selected Years
        if (this.GJAHR.getMonth() >= 9) {
            this.GJAHR.setFullYear(Number(this.GJAHR.getFullYear()) + 544);
        }
        else {
            this.GJAHR.setFullYear(Number(this.GJAHR.getFullYear()) + 543);
        }
        this.YEAR = Number(this.GJAHR.getFullYear());
        var iGJAHR = Number(this.GJAHR.getFullYear());
        iGJAHR = iGJAHR - 8;
        for (var index = -7; index < 7; index++) {
            iGJAHR = iGJAHR + 1;
            this.yearList.push({ YESR: iGJAHR });
        }
    };
    return Kb023Component;
}());
Kb023Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-kb02-3',
        template: __webpack_require__("../../../../../src/app/kb02/kb02-3/kb02-3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/kb02/kb02-3/kb02-3.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_menu_top_menu_top_component__["a" /* MenuTopComponent */]] // , Kb021Component
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_menu_top_menu_top_component__["a" /* MenuTopComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_menu_top_menu_top_component__["a" /* MenuTopComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _d || Object])
], Kb023Component);

var _a, _b, _c, _d;
//# sourceMappingURL=kb02-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/kb02/kb02.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kb02/kb02.component.html":
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"GF.NET_BODY\" style=\"background-color: #edf1fd; width: 750px;\">\r\n  <tr>\r\n    <td align=\"left\" style=\"background-image: url(assets/Images/inner_section_header_bg.jpg); background-repeat: repeat-x;\" valign=\"top\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%\">\r\n        <tr>\r\n          <td>\r\n            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%\">\r\n              <tr>\r\n                <td>\r\n                  <user-profiles ID=\"UcUserProfiles1\"></user-profiles>\r\n                </td>\r\n                <td style=\"width: 9px;\" valign=\"top\">\r\n                  <menu-top ID=\"UcMenuTop1\"></menu-top>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"background-color: #ebf0b6\">\r\n            <form-header ID=\"UcFormHeader1\"></form-header>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"background-color: #ffffff;\">\r\n            <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n              <tr>\r\n                <td style=\"border-top-color: #006699; border-top-width: 0px;\">\r\n                  <table border=\"0\" cellpadding=\"7\" cellspacing=\"0\" width=\"900\">\r\n                    <tr>\r\n                      <td>\r\n                        <!-- <kb02-1></kb02-1> -->\r\n                        <!-- <kb02-2></kb02-2> -->\r\n                        <!-- <kb02-3></kb02-3> -->\r\n                         <router-outlet name=\"aux\"></router-outlet>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <!--<span TextBox BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"White\" ID=\"htbPageAttribute\" runat=\"server\" Width=\"122px\">[htbPageAttribute]</span>\r\n            <span TextBox BackColor=\"White\" BorderColor=\"White\" BorderStyle=\"Solid\" ForeColor=\"White\" ID=\"tbPopupCheck\" runat=\"server\" Width=\"122px\">[tbPopupCheck]</span>-->\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/kb02/kb02.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kb02Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Kb02Component = (function () {
    function Kb02Component() {
    }
    Kb02Component.prototype.ngOnInit = function () {
    };
    return Kb02Component;
}());
Kb02Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'kb02',
        template: __webpack_require__("../../../../../src/app/kb02/kb02.component.html"),
        styles: [__webpack_require__("../../../../../src/app/kb02/kb02.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Kb02Component);

//# sourceMappingURL=kb02.component.js.map

/***/ }),

/***/ "../../../../../src/app/kb02/table-list-view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableList; });
/* unused harmony export SearchList */
/* unused harmony export DocSearch */
var TableList = (function () {
    function TableList() {
    }
    return TableList;
}());

var SearchList = (function () {
    function SearchList() {
    }
    return SearchList;
}());

var DocSearch = (function () {
    function DocSearch() {
    }
    return DocSearch;
}());

//# sourceMappingURL=table-list-view.js.map

/***/ }),

/***/ "../../../../../src/app/launcher/launcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/launcher/launcher.component.html":
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"GFMISTB\" style=\"width: 900px;\">\r\n    <tr>\r\n      <td style=\"background-image: url(assets/Images/header_section_bg.jpg); background-repeat: repeat-x;\">\r\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"GF.NET_Header\" style=\"height: 100px; width: 900px;\">\r\n          <tr>\r\n            <td>\r\n              <asp:ImageButton CausesValidation=\"False\" Enable=\"false\" Enabled=\"False\" ID=\"imgBtDefault\" ImageUrl=\"assets/Images/header_section_01.jpg\" OnClick=\"imgBtDefault_Click\"></asp:ImageButton>\r\n            </td>\r\n            <td style=\"width: 761px\">\r\n              <img alt=\"GFMIS Web Online\" height=\"100\" src=\"assets/Images/img_headers/header_theme03.jpg\" width=\"750\"/>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 900px;\">\r\n          <tr>\r\n            <td align=\"left\" bgcolor=\"8399cb\" style=\"width: 150px;\" valign=\"top\">\r\n              <user-login-profile ID=\"ubLoginProfileBCH01\"></user-login-profile>\r\n              <menu-left ID=\"UcMenuLeft1\"></menu-left>\r\n            </td>\r\n            <td align=\"left\" valign=\"top\">\r\n              <!-- <router-outlet></router-outlet> -->\r\n              <kb02></kb02>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"background-color: #000000\">\r\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"height: 50px; width: 100%;\">\r\n          <tr>\r\n            <td align=\"left\" style=\"background-color: #112759; width: 150px;\" valign=\"top\">&nbsp;</td>\r\n            <td align=\"right\" style=\"background-color: #000000;\" valign=\"middle\">\r\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"footer\" width=\"100%\">\r\n                <tr>\r\n                  <td align=\"right\" width=\"99%\">\r\n                    <br/>\r\n                    ระบบบริหารการเงินการคลังภาครัฐแบบอิเล็กทรอนิกส์<br/>\r\n                    Government Fiscal Management Information System\r\n                  </td>\r\n                  <td width=\"1%\">&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td align=\"right\" colspan=\"2\">&nbsp;</td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/launcher/launcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LauncherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LauncherComponent = (function () {
    function LauncherComponent() {
    }
    LauncherComponent.prototype.ngOnInit = function () {
    };
    return LauncherComponent;
}());
LauncherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-launcher',
        template: __webpack_require__("../../../../../src/app/launcher/launcher.component.html"),
        styles: [__webpack_require__("../../../../../src/app/launcher/launcher.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LauncherComponent);

//# sourceMappingURL=launcher.component.js.map

/***/ }),

/***/ "../../../../../src/app/log-report/log-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "test22{\r\n  text-align: right;\r\n\r\n}\r\nol li{\r\n    list-style-type: none;\r\n  }\r\n  ul {\r\n    list-style-type: none;\r\n  }\r\n  .prtlBody {\r\n    MARGIN: 0px;\r\n    BACKGROUND-COLOR: #ffffff\r\n  }\r\n\r\n  .sapTOCH3Lnk {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    LINE-HEIGHT: 150%;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapTOCH4Lnk {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    MARGIN-LEFT: 25px;\r\n    COLOR: #225a8d;\r\n    LINE-HEIGHT: 150%;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapTOCH5Lnk {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    MARGIN-LEFT: 50px;\r\n    COLOR: #225a8d;\r\n    LINE-HEIGHT: 150%;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnkSml {\r\n    COLOR: #225a8d;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnkSml:visited {\r\n    COLOR: #756183;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnkSml:hover {\r\n    COLOR: #4b8bc7;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnkSml:active {\r\n    COLOR: #ff9a00;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnkSmlTax {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 8pt;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapLnk {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnk:link {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnk:visited {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #756183;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnk:hover {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #4b8bc7;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnk:active {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #ff9a00;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapLnk:link .sapTxtStd {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapLnk:visited .sapTxtStd {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #756183;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapLnk:hover .sapTxtStd {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #4b8bc7;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapLnk:active .sapTxtStd {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #ff9a00;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapBtnStdIcon {\r\n    BORDER-RIGHT: #2f2f47 1px solid;\r\n    PADDING-RIGHT: 4px;\r\n    BORDER-TOP: #f1f8ff 1px solid;\r\n    PADDING-LEFT: 4px;\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    PADDING-BOTTOM: 0px;\r\n    BORDER-LEFT: #f1f8ff 1px solid;\r\n    CURSOR: hand;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #2f2f47 1px solid;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    WHITE-SPACE: nowrap;\r\n    HEIGHT: 16px;\r\n    BACKGROUND-COLOR: #f7f7f7;\r\n    TEXT-ALIGN: center;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  .sapBtnStd {\r\n    BORDER-RIGHT: #2f2f47 1px solid;\r\n    PADDING-RIGHT: 4px;\r\n    BORDER-TOP: #f1f8ff 1px solid;\r\n    PADDING-LEFT: 4px;\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    PADDING-BOTTOM: 0px;\r\n    BORDER-LEFT: #f1f8ff 1px solid;\r\n    CURSOR: hand;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #2f2f47 1px solid;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    WHITE-SPACE: nowrap;\r\n    HEIGHT: 16px;\r\n    BACKGROUND-COLOR: #e0edfb;\r\n    TEXT-ALIGN: center;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  .sapBtnStd:link {\r\n    COLOR: #000000;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  .sapBtnStd:hover {\r\n    COLOR: #ff9100;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  .sapBtnStd:visited {\r\n    COLOR: #000000;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  .sapBtnStd:active {\r\n    COLOR: #ff9100;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  .sapLic {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #000000;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapLicSml {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 0.7em;\r\n    COLOR: #000000;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapLicItem {\r\n    LIST-STYLE-IMAGE: url(/images/listcube.gif)\r\n  }\r\n\r\n  .sapLicWhl {\r\n    MARGIN: 0px 0px 0px -15px\r\n  }\r\n\r\n  .sapEdfTxtEnbl {\r\n    BORDER-RIGHT: #cacaca 1px solid;\r\n    PADDING-RIGHT: 2px;\r\n    BORDER-TOP: #cacaca 1px solid;\r\n    PADDING-LEFT: 5px;\r\n    FONT-SIZE: 1.65ex;\r\n    PADDING-BOTTOM: 0px;\r\n    BORDER-LEFT: #cacaca 1px solid;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #cacaca 1px solid;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    HEIGHT: 1.4em;\r\n    BACKGROUND-COLOR: #ffffff\r\n  }\r\n\r\n  .sapTxtStd {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #000000;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH1 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: medium;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH2 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: small;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH3 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: small;\r\n    MARGIN: 15px 0px 3px;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH4 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: italic;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH5 {\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  .sapTxtH6 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #ff9900;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH7 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 8pt;\r\n    COLOR: #993333;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapTxtH8 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 8pt;\r\n    COLOR: #008040;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapContents {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #000000;\r\n    LINE-HEIGHT: 100%;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  .sapCode {\r\n    FONT-SIZE: 10pt;\r\n    FONT-FAMILY: Courier New\r\n  }\r\n\r\n  .sapTblTtl {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    BACKGROUND-COLOR: #efefef\r\n  }\r\n\r\n  .sapTxtSml {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 7pt;\r\n    COLOR: #000000;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    overflow:hidden;\r\n\r\n  }\r\n  .sapTxtSml2 {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 7pt;\r\n    COLOR: #000000;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n    text-overflow:ellipsis;\r\n    border-top: 1px solid black;\r\n    margin:0px;\r\n  }\r\n\r\n  .sapTxtTtlSml {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 0.6em;\r\n    MARGIN: 0px;\r\n    COLOR: #225a8d\r\n  }\r\n\r\n  .sapTxtTtl {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 0.7em;\r\n    MARGIN: 0px;\r\n    COLOR: #225a8d\r\n  }\r\n\r\n  BODY {\r\n    MARGIN: 6px;\r\n    FONT-FAMILY: Tahoma, Arial, sans-serif\r\n  }\r\n\r\n  H1 {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 12px;\r\n    MARGIN: 0px;\r\n    PADDING-TOP: 6px\r\n  }\r\n\r\n  P {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px 0px 6px;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  A {\r\n    COLOR: #225a8d;\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  A:link {\r\n    COLOR: #225a8d\r\n  }\r\n\r\n  A:visited {\r\n    COLOR: #756183\r\n  }\r\n\r\n  A:hover {\r\n    COLOR: #4b8bc7\r\n  }\r\n\r\n  A:active {\r\n    COLOR: #ff9a00\r\n  }\r\n\r\n  .whiteBody {\r\n    SCROLLBAR-FACE-COLOR: #f7f7f7;\r\n    SCROLLBAR-HIGHLIGHT-COLOR: #ffffff;\r\n    SCROLLBAR-SHADOW-COLOR: #225a8d;\r\n    SCROLLBAR-3DLIGHT-COLOR: #d6e3e7;\r\n    SCROLLBAR-ARROW-COLOR: #394142;\r\n    SCROLLBAR-TRACK-COLOR: #ffffff;\r\n    SCROLLBAR-DARKSHADOW-COLOR: #ffffff;\r\n    SCROLLBAR-BASE-COLOR: #f7f7f7;\r\n    BACKGROUND-COLOR: #ffffff\r\n  }\r\n\r\n  .blueBody {\r\n    SCROLLBAR-FACE-COLOR: #f7f7f7;\r\n    SCROLLBAR-HIGHLIGHT-COLOR: #ffffff;\r\n    SCROLLBAR-SHADOW-COLOR: #225a8d;\r\n    SCROLLBAR-3DLIGHT-COLOR: #d6e3e7;\r\n    SCROLLBAR-ARROW-COLOR: #394142;\r\n    SCROLLBAR-TRACK-COLOR: #d6e3e7;\r\n    SCROLLBAR-DARKSHADOW-COLOR: #d6e3e7;\r\n    SCROLLBAR-BASE-COLOR: #f7f7f7;\r\n    BACKGROUND-COLOR: #d6e3e7\r\n  }\r\n\r\n  .sdnHdr2 {\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    MARGIN: 6px 0px 5px;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: arial, sans-serif\r\n  }\r\n\r\n  .sdnRed {\r\n    COLOR: #ff0000\r\n  }\r\n\r\n  .sdnAuthorImg {\r\n    FLOAT: left\r\n  }\r\n\r\n  .sdnDevArea {\r\n    BACKGROUND-COLOR: #eeeeee\r\n  }\r\n\r\n  .sdnDevAreaHdr {\r\n    MARGIN-TOP: 5px;\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 8pt;\r\n    MARGIN-BOTTOM: 5px;\r\n    PADDING-BOTTOM: 5px;\r\n    COLOR: #ffffff;\r\n    PADDING-TOP: 5px;\r\n    BACKGROUND-COLOR: #999999\r\n  }\r\n\r\n  .sdnAuthor {\r\n    FONT-SIZE: 8pt;\r\n    COLOR: #757575;\r\n    FONT-FAMILY: tahoma, arial, sans-serif\r\n  }\r\n\r\n  #content UL {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 20px;\r\n    LIST-STYLE-IMAGE: url(/mimes/ico4x8_listcube.gif);\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 9px 0px 12px;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  #content OL {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 20px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 9px 0px 12px 6px;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  #content LI {\r\n    MARGIN-TOP: -7px;\r\n    FONT-SIZE: x-small;\r\n    MARGIN-BOTTOM: 10px;\r\n    LINE-HEIGHT: 120%\r\n  }\r\n\r\n  #sourcecode {\r\n    MARGIN-LEFT: 5%;\r\n    VERTICAL-ALIGN: top;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n    BACKGROUND-COLOR: #fff\r\n  }\r\n\r\n  #sourcecode #header {\r\n    FONT-WEIGHT: bold;\r\n    WIDTH: 200px;\r\n    COLOR: #000;\r\n    BACKGROUND-COLOR: #d6e3e7\r\n  }\r\n\r\n  #sourcecode #headerdescription {\r\n    FONT-WEIGHT: bold;\r\n    WIDTH: 450px;\r\n    COLOR: #000;\r\n    BACKGROUND-COLOR: #d6e3e7\r\n  }\r\n\r\n  #sourcecode A {\r\n    MARGIN: 0px;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #sourcecode A:link {\r\n    MARGIN: 0px;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #sourcecode A:visited {\r\n    MARGIN: 0px;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #sourcecode #file {\r\n    WIDTH: 200px\r\n  }\r\n\r\n  #sourcecode #description {\r\n    WIDTH: 450px\r\n  }\r\n\r\n  #sourcecode #box {\r\n    WIDTH: 655px;\r\n    BORDER-BOTTOM: #d6e3e7 1px solid;\r\n    BACKGROUND-COLOR: #fff\r\n  }\r\n\r\n  #methods {\r\n    MARGIN-LEFT: 5%\r\n  }\r\n\r\n  .codeextract {\r\n    FONT-SIZE: 0.9em;\r\n    MARGIN-LEFT: 5%;\r\n    FONT-STYLE: italic\r\n  }\r\n\r\n  #methods #guielements {\r\n    FONT-SIZE: 0.8em;\r\n    MARGIN-LEFT: 5%\r\n  }\r\n\r\n  .guielementname {\r\n    FONT-WEIGHT: bold\r\n  }\r\n\r\n  .sapOrange {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #ff9a00\r\n  }\r\n\r\n  .sdnTable {\r\n    MARGIN: 0px 0px 12px;\r\n    BORDER-COLLAPSE: collapse\r\n  }\r\n\r\n  .sdnTable TD {\r\n    PADDING-RIGHT: 6px;\r\n    PADDING-LEFT: 6px;\r\n    PADDING-BOTTOM: 6px;\r\n    PADDING-TOP: 6px\r\n  }\r\n\r\n  .sdnTableHeader {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #ffffff;\r\n    BACKGROUND-COLOR: #999999\r\n  }\r\n\r\n  #jive-footer TD {\r\n    BORDER-TOP: #cccccc 1px solid;\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 0.7em;\r\n    PADDING-TOP: 5px;\r\n    TEXT-ALIGN: center\r\n  }\r\n\r\n  #jive-footer TD A {\r\n    COLOR: #666;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #jive-footer TD A:hover {\r\n    TEXT-DECORATION: underline\r\n  }\r\n\r\n  BODY {\r\n    PADDING-RIGHT: 0px! important;\r\n    PADDING-LEFT: 0px! important;\r\n    PADDING-BOTTOM: 0px! important;\r\n    MARGIN: 0px;\r\n    COLOR: #000! important;\r\n    PADDING-TOP: 0px! important;\r\n    FONT-FAMILY: tahoma, arial, sans-serif! important;\r\n    BACKGROUND-COLOR: #fff! important;\r\n  }\r\n\r\n  #header {\r\n    BACKGROUND: url(/images/head_center.gif) #fff repeat-x 50% top;\r\n    WIDTH: 100%;\r\n    HEIGHT: 60px\r\n  }\r\n\r\n  #header #topheaderlinks {\r\n    PADDING-RIGHT: 2.0em;\r\n    PADDING-LEFT: 0px;\r\n    FONT-SIZE: 0.7em;\r\n    RIGHT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    PADDING-TOP: 0px;\r\n    POSITION: absolute;\r\n    TOP: 20px;\r\n    TEXT-ALIGN: right\r\n  }\r\n\r\n  #header A {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 1em;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #header A:link {\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 1em;\r\n    COLOR: #225a8d;\r\n    FONT-STYLE: normal;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #header A:visited {\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #header A:hover {\r\n    COLOR: #4b8bc7;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #header A:active {\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #header #search {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #f90\r\n  }\r\n\r\n  #header #welcome {\r\n    PADDING-LEFT: 0.5em;\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 0.7em;\r\n    LEFT: 0px;\r\n    COLOR: #ff9900;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    POSITION: absolute;\r\n    TOP: 41px;\r\n    HEIGHT: 19px\r\n  }\r\n\r\n  #header #poweredby {\r\n    PADDING-RIGHT: 0.5em;\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: 10px;\r\n    RIGHT: 0px;\r\n    COLOR: #666666;\r\n    FONT-FAMILY: Tahoma, Arial, sans-serif;\r\n    POSITION: absolute;\r\n    TOP: 41px;\r\n    HEIGHT: 19px\r\n  }\r\n\r\n  : #b5cbe7 DIV.menu {\r\n    BORDER-RIGHT: #000 1px solid;\r\n    PADDING-RIGHT: 0.5em;\r\n    BORDER-TOP: #000 1px solid;\r\n    PADDING-LEFT: 0.5em;\r\n    FONT-SIZE: 0.7em;\r\n    Z-INDEX: 101;\r\n    LEFT: 0px;\r\n    VISIBILITY: hidden;\r\n    PADDING-BOTTOM: 0.25em;\r\n    BORDER-LEFT: #000 1px solid;\r\n    PADDING-TOP: 0.25em;\r\n    BORDER-BOTTOM: #000 1px solid;\r\n    POSITION: absolute;\r\n    TOP: 0px;\r\n    BACKGROUND-COLOR: #e0e0e0\r\n  }\r\n\r\n  #contribute A {\r\n    DISPLAY: block;\r\n    WHITE-SPACE: nowrap\r\n  }\r\n\r\n  #profile A {\r\n    DISPLAY: block;\r\n    WHITE-SPACE: nowrap\r\n  }\r\n\r\n  #tln {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 3px;\r\n    MARGIN: 0px;\r\n    WIDTH: 100%;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #225a8d 3px solid;\r\n    LIST-STYLE-TYPE: none;\r\n    BACKGROUND-COLOR: #b5cbe7\r\n  }\r\n\r\n  #tln LI {\r\n    PADDING-RIGHT: 0px;\r\n    DISPLAY: inline;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px 0px 0px 0.5em;\r\n    LINE-HEIGHT: 1em;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  #tln LI.separator {\r\n    FONT-SIZE: 0.6em;\r\n    MARGIN: 0px -0.5em 0px 0px\r\n  }\r\n\r\n  #tln A {\r\n    FONT-SIZE: 0.7em;\r\n    MARGIN: 0px;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #tln A:link {\r\n    FONT-SIZE: 0.7em;\r\n    MARGIN: 0px;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #sidebar A {\r\n    FONT-SIZE: 0.7em;\r\n    MARGIN: 0px;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #sidebar A:link {\r\n    FONT-SIZE: 0.7em;\r\n    MARGIN: 0px;\r\n    COLOR: #225a8d;\r\n    FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n    BACKGROUND-COLOR: transparent;\r\n    TEXT-DECORATION: none\r\n  }\r\n\r\n  #tln A:visited {\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A:visited {\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A:hover {\r\n    COLOR: #4b8bc7;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A:hover {\r\n    COLOR: #4b8bc7;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A:active {\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A:active {\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A.current {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A.current:link {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A.current:visited {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A.current:hover {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #tln A.current:active {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A.current {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A.current:link {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A.current:visited {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A.current:hover {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #sidebar A.current:active {\r\n    FONT-WEIGHT: bold;\r\n    COLOR: #225a8d;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  #searchbox {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    WIDTH: 40%;\r\n    COLOR: #000;\r\n    PADDING-TOP: 0px;\r\n    BACKGROUND-COLOR: #fff\r\n  }\r\n\r\n  #searchbox H1 {\r\n    PADDING-RIGHT: 0.25em;\r\n    PADDING-LEFT: 0.25em;\r\n    FONT-SIZE: 0.8em;\r\n    PADDING-BOTTOM: 0.25em;\r\n    COLOR: #000;\r\n    PADDING-TOP: 0.25em;\r\n    BACKGROUND-COLOR: #fff\r\n  }\r\n\r\n  #sidebar {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    WIDTH: 20%;\r\n    COLOR: #000;\r\n    PADDING-TOP: 0px;\r\n    POSITION: absolute;\r\n    BACKGROUND-COLOR: #d6e3e7\r\n  }\r\n\r\n  #sidebar #searchForm {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px 0px -0.5em;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  #sidebar #nwlogo {\r\n    PADDING-RIGHT: 0.5em;\r\n    PADDING-LEFT: 0.5em;\r\n    PADDING-BOTTOM: 0.5em;\r\n    WIDTH: 100%;\r\n    PADDING-TOP: 0.5em;\r\n    BACKGROUND-COLOR: #fff;\r\n    TEXT-ALIGN: center\r\n  }\r\n\r\n  #sidebar #nwlogo IMG {\r\n    MARGIN: auto\r\n  }\r\n\r\n  #sidebar H1 {\r\n    PADDING-RIGHT: 0.25em;\r\n    PADDING-LEFT: 0.25em;\r\n    FONT-SIZE: 0.8em;\r\n    PADDING-BOTTOM: 0.25em;\r\n    MARGIN: 1em 0px 0px;\r\n    COLOR: #fff;\r\n    PADDING-TOP: 0.25em;\r\n    BACKGROUND-COLOR: #225a8d\r\n  }\r\n\r\n  #sidebar UL {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 1em;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px 0px 0.5em 1em;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  #sidebar .navigation {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0.5em;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px 0px 0.5em 0.5em;\r\n    PADDING-TOP: 0px;\r\n    LIST-STYLE-TYPE: none\r\n  }\r\n\r\n  #sidebar .navigation UL {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0.5em;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px;\r\n    PADDING-TOP: 0px;\r\n    LIST-STYLE-TYPE: none\r\n  }\r\n\r\n  #sidebar .navigation .branch {\r\n    DISPLAY: block\r\n  }\r\n\r\n  #content {\r\n    LEFT: 20%;\r\n    WIDTH: 80%;\r\n    POSITION: absolute\r\n  }\r\n\r\n  #searchresults {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px;\r\n    WIDTH: 95%;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  #paging {\r\n    MARGIN: auto;\r\n    TEXT-ALIGN: center\r\n  }\r\n\r\n  .iview {\r\n    MARGIN: 0.5em\r\n  }\r\n\r\n  .iview .header {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    FONT-WEIGHT: bold;\r\n    FONT-SIZE: x-small;\r\n    PADDING-BOTTOM: 0px;\r\n    COLOR: #225a8d;\r\n    PADDING-TOP: 0px;\r\n    FONT-FAMILY: tahoma, arial, sans-serif;\r\n    BACKGROUND-COLOR: transparent\r\n  }\r\n\r\n  .iview .content {\r\n    BORDER-RIGHT: #d6e3e7 1px solid;\r\n    BORDER-TOP: #d6e3e7 1px solid;\r\n    MARGIN: 2px 0px 0px;\r\n    BORDER-LEFT: #d6e3e7 1px solid;\r\n    BORDER-BOTTOM: #d6e3e7 1px solid\r\n  }\r\n\r\n  .iview .content IFRAME {\r\n    BORDER-RIGHT: 0px;\r\n    PADDING-RIGHT: 0px;\r\n    BORDER-TOP: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 0px;\r\n    BORDER-LEFT: 0px;\r\n    WIDTH: 100%;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: 0px\r\n  }\r\n\r\n  .iview .content .iframesurround {\r\n    PADDING-RIGHT: 0px;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    WIDTH: 100%;\r\n    PADDING-TOP: 0px\r\n  }\r\n\r\n  .iview .bottomborder {\r\n    BORDER-RIGHT: #fff 5px solid;\r\n    PADDING-RIGHT: 0px;\r\n    BORDER-TOP: #d6e3e7 5px solid;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 2px 0px 0px;\r\n    BORDER-LEFT: #fff 0px solid;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #d6e3e7 0px solid;\r\n    HEIGHT: 0px\r\n  }\r\n\r\n  .trigger {\r\n    CURSOR: hand\r\n  }\r\n\r\n  .imenu .bottomborder {\r\n    BORDER-RIGHT: #fff 5px solid;\r\n    PADDING-RIGHT: 0px;\r\n    BORDER-TOP: #993333 5px solid;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    MARGIN: 2px 0px 0px;\r\n    BORDER-LEFT: #fff 0px solid;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #993333 0px solid;\r\n    HEIGHT: 0px\r\n  }\r\n\r\n  /* class สำหรับแถวส่วนหัวของตาราง */\r\n\r\n  .tr_head {\r\n    background-color: #74ada3;\r\n    color: #000000;\r\n  }\r\n\r\n  /* class สำหรับแถวแรกของรายละเอียด */\r\n\r\n  .tr_odd {\r\n    background-color: #fcf8c7;\r\n  }\r\n\r\n  /* class สำหรับแถวสองของรายละเอียด */\r\n\r\n  .tr_even {\r\n    background-color: #eaeaea;\r\n  }\r\n  tr:nth-child(even) {\r\n    border: 0px;\r\n    margin:0px;\r\n    background-color: #fcf8c7}\r\n    tr:nth-child(odd) {\r\n      border: 0px;\r\n      margin:0px;\r\n      background-color: #eaeaea}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-report/log-report.component.html":
/***/ (function(module, exports) {

module.exports = "<TABLE style=\"BORDER-COLLAPSE: collapse\" cellSpacing=1 cellPadding=0 width=\"100%\" align=left style=\"background-color: #fff\">\r\n  <td>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  </td>\r\n  <td>\r\n    <TBODY>\r\n      <TR align=left style=\"background-color: #fff\">\r\n        <TD vAlign=top height=20 style=\"background-color: #fff\">\r\n          <P class=sapTxtH1 style=\"BACKGROUND-COLOR: #f7f7f7\">\r\n            <span lang=\"th\">\r\n              <span style=\"background-color: #F7F7F7\">\r\n                เอกสารการบัญชี</span>\r\n            </span>\r\n          </P>\r\n        </TD>\r\n      </TR>\r\n      <TABLE id='mytable' class=sapTxtSml border=0 width=\"100%\" style=\"background-color: #fff\">\r\n        <div style=\"background-color: #fff\">\r\n          <tr *ngFor=\"let kb02 of observableBooks| async\" style=\"background-color: #fff\">\r\n            <td *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n              <TR class=sapTxtSml style=\"background-color: #fff\">\r\n                <TD valign=top >ชื่อผู้ใช้</TD>\r\n                <TD valign=top>:</TD>\r\n                <TD valign=top>{{header.a_luserid}} </TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n              </TR>\r\n              <TR class=sapTxtSml style=\"background-color: #fff\">\r\n                <TD valign=top>แบบฟอร์ม</TD>\r\n                <TD valign=top>:</TD>\r\n                <TD valign=top>ขบ02 - ขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ </TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n              </TR>\r\n              <TR class=sapTxtSml style=\"background-color: #fff\">\r\n                <TD valign=top>Log No.</TD>\r\n                <TD valign=top>:</TD>\r\n                <TD valign=top>{{header.a_logyear}} - {{header.a_logno}}</TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n              </TR>\r\n              <TR class=sapTxtSml style=\"background-color: #fff\">\r\n                <TD valign=top>วันที่บันทึกรายการ</TD>\r\n                <TD valign=top>:</TD>\r\n                <TD valign=top>{{header.a_cpudt}} - {{header.a_cputime}}</TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n              </TR>\r\n              <TR class=sapTxtSml style=\"background-color: #fff\">\r\n                <TD valign=top>\r\n                  <IMG SRC=\"icon_print.GIF\" WIDTH=\"16\" HEIGHT=\"16\" BORDER=0 ALT=\"\" class=\"noprint\">&nbsp;&nbsp;\r\n                  <a class=\"noprint\" href=javascript:window.print();>Print</a>\r\n                </TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n                <TD valign=top>&nbsp;</TD>\r\n              </TR>\r\n            </td>\r\n          </tr>\r\n        </div>\r\n      </TABLE>\r\n\r\n      <TABLE id='mytable' class=sapTxtSml border=0 width=\"100%\">\r\n        <tbody>\r\n          <td *ngFor=\"let kb02 of observableBooks| async\">\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD >เลขที่่เอกสาร</TD>\r\n              <TD>: {{header.b_gjahr}} - {{header.b_belnr}}</TD>\r\n            </tr>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD>ส่วนราชการ</TD>\r\n              <TD>: {{header.a_bukrs}} - {{header.a_bukrs_name}}</TD>\r\n            </tr>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD>หน่วยเบิกจ่าย</TD>\r\n              <TD>: {{header.a_zzpmt}} - {{header.a_zzpmt_name}}</TD>\r\n            </tr>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD>สถานะเอกสาร</TD>\r\n              <TD>: เอกสารผ่านรายการ</TD>\r\n            </tr>\r\n          </td>\r\n          <td *ngFor=\"let kb02 of observableBooks| async\" align=right>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD align=right>&nbsp;&nbsp;</TD>\r\n              <TD align=right>&nbsp;&nbsp;</TD>\r\n            </tr>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD align=right>การอ้างอิง&nbsp;:</TD>\r\n              <TD>{{header.a_xblnr}}</TD>\r\n            </tr>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD align=right>วันที่ผ่านรายการ&nbsp;:</TD>\r\n              <TD>{{header.a_budat}}</TD>\r\n            </tr>\r\n            <tr *ngFor=\"let header of kb02.header\"style=\"background-color: #fff\">\r\n              <TD align=right>วันที่นำเข้าข้อมูล&nbsp;:</TD>\r\n              <TD>{{header.a_cpudt}}</TD>\r\n            </tr>\r\n          </td>\r\n        </tbody>\r\n      </TABLE>\r\n      <TABLE id='mytable' class=sapTxtSml border=0 width=\"100%\" cellpadding=3 cellspacing=0 style=\"background-color: #fff\">\r\n        <tr>\r\n          <Td>\r\n            <tr>\r\n              <TABLE id='mytable' border=0 width=\"100%\" cellpadding=3 cellspacing=0>\r\n                <thead>\r\n                  <TR class=sapTxtSml align=center style=\"background-color: #84AEAE\" >\r\n                    <TH rowspan=2 width=\"5%\" style='border-top: 1px solid black;'>บรรทัดรายการที่</TH>\r\n                    <TH rowspan=2 style='border-top: 1px solid black;'>เดบิต/เครดิต</TH>\r\n                    <TH rowspan=2 style='border-top: 1px  solid black;' align=left>รหัสบัญชี</TH>\r\n                    <TH rowspan=2 style='border-top: 1px  solid black;' align=left>ชื่อบัญชี</TH>\r\n                    <TH rowspan=2 style='border-top: 1px  solid black;' align=right>จำนวนเงินขอเบิก</TH>\r\n                    <TH rowspan=2 style='border-top:1px  solid black;' align=right>ฐานภาษี</TH>\r\n                    <TH rowspan=2 style='border-top: 1px solid black;' align=right>ภาษี</TH>\r\n                    <TH rowspan=2 style='border-top:1px  solid black;' align=right>ค่าปรับ</TH>\r\n                    <TH rowspan=2 style='border-top: 1px  solid black;' align=right>จำนวนเงินขอรับ</TH>\r\n                    <TH rowspan=2 style='border-top: 1px  solid black;' align=right>&nbsp;</TH>\r\n                    <TH colspan=2 style='border-bottom: 1px solid black; border-top: 1px solid black;'>เงินฝาก</TH>\r\n                    <TH rowspan=2 style='border-top:  1px solid black;'>เจ้าของเงินฝาก</TH>\r\n                    <TH rowspan=2 style='border-top:  1px solid black;' align=left>เจ้าของบัญชีย่อย</TH>\r\n                    <TH rowspan=2 style='border-top:  1px solid black;' align=left>บัญชีย่อย</TH>\r\n                  </TR>\r\n                  <TR class=sapTxtSml align=center bgcolor=#84AEAE style='border-bottom: 1px solid black;' style=\"background-color: #84AEAE\">\r\n                    <TH>คลัง</TH>\r\n                    <TH>ธ.พาณิชย์</TH>\r\n                  </TR>\r\n                  <TR class=sapTxtSml align=center bgcolor=#84AEAE style=\"background-color: #84AEAE\">\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;'>&nbsp;</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;'>&nbsp;</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>รหัสงบประมาณ</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>งบประมาณ</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=right>&nbsp;</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>หน่วยต้นทุน</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>หมวดรายจ่าย</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>การกำหนด</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>กิจกรรมย่อย</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>กิจกรรมหลัก</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;'>&nbsp;</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;'>&nbsp;</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;'>เอกสารสำรองเงินงบประมาณ</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>หมวดพัสดุ</TH>\r\n                    <TH style='border-bottom: 1px solid black; border-top: 1px solid gray;' align=left>รหัสหน่วยงานคู่ค้า (Trading Partner)</TH>\r\n                  </TR>\r\n\r\n                </thead>\r\n\r\n                <ng-container *ngFor=\"let kb02 of observableBooks2| async\" class=sapTxtSml2>\r\n                  <tr></tr>\r\n                  <tr *ngFor=\"let data of kb02.data;let J=index\" class=sapTxtSml2 >\r\n                    <td>{{data.head_no}}{{data.detail_no}}\r\n                      <br>&nbsp;</td>\r\n                    <td>{{data.head_type}}{{data.detail_type}}\r\n                      <br>&nbsp;</td>\r\n                    <td>\r\n                      &nbsp;{{data.head_lifnr}}{{data.detai_hkont}}\r\n                      <br>&nbsp;{{data.head_fistl}}{{data.detai_fistl}}\r\n                                        </td>\r\n                    <td>\r\n                      &nbsp;{{data.head_name1}}{{data.detai_hkont_name}}\r\n                      <br>&nbsp;{{data.head_fistl_name}}{{data.detail_fistl_name}}\r\n                    </td>\r\n                    <td>\r\n                      &nbsp;{{data.head_sumcost | number:'.2'}}\r\n                      {{data.detail_wrbtr | number:'.2'}}\r\n                      <br> &nbsp;\r\n                    </td>\r\n                    <td align=right>\r\n                      &nbsp;0.00\r\n                      <br>{{data.head_kostl}}{{data.detail_kostl}}\r\n                    </td>\r\n                    <td align=right>\r\n                      <label>&nbsp;0.00</label>\r\n                      <br>&nbsp;{{data.head_geber}}{{data.detail_geber}}\r\n                    </td>\r\n                    <td align=right>\r\n                      &nbsp;0.00\r\n                      <br>&nbsp;\r\n                    </td>\r\n                    <td align=right>\r\n                      <ng-container *ngIf=\"J==0\">\r\n                        <label> &nbsp;  {{data.head_sumcost | number:'.2'}}\r\n                          <br>&nbsp;</label>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"J!=0\">\r\n                        <label>&nbsp; {{data.detail_wrbtr | number:'.2'}}\r\n                          <br>&nbsp;{{data.detail_prznr}}</label>\r\n                      </ng-container>\r\n                    </td>\r\n                    <td>\r\n                      <ng-container *ngIf=\"J==0\">\r\n                        <label>\r\n                          <br>&nbsp;P{{data.head_gsber}}{{data.detail_fkber}} &nbsp;\r\n                        </label>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"J!=0\">\r\n                        <label>\r\n                          <br>&nbsp;{{data.head_gsber}}{{data.detail_fkber}}</label>\r\n                      </ng-container>\r\n                    </td>\r\n                    <td>\r\n                      <br>&nbsp;{{data.detail_fkber_name}}</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td>\r\n                      <br>&nbsp;{{data.head_vbund}}{{data.detail_vbund}}</td>\r\n                  </tr>\r\n                </ng-container>\r\n              </TABLE>\r\n            </tr>\r\n          </Td>\r\n        </tr>\r\n      </TABLE>\r\n  </td>\r\n  <td>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  </td>\r\n</TABLE>\r\n"

/***/ }),

/***/ "../../../../../src/app/log-report/log-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LogReportComponent = (function () {
    function LogReportComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        // TEST Online =>
        // url = 'http:///52.221.246.71:3000/api/getKb02Header/';
        // url2 = 'http:///52.221.246.71:3000/api/kbo2LogReport/';
        // TEST local =>
        // url = 'http:///localhost:3000/api/getKb02Header/';
        // url2 = 'http:///localhost:3000/api/kbo2LogReport/';
        this.url = './api/getKb02Header/';
        this.url2 = './api/kbo2LogReport/';
    }
    LogReportComponent.prototype.getPosts = function (docid) {
        return this.http.get(this.url + docid)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    LogReportComponent.prototype.getPosts2 = function (docid) {
        return this.http.get(this.url2 + docid)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    LogReportComponent.prototype.extractData = function (res) {
        var body = res.json();
        return Array.of(body);
    };
    LogReportComponent.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    LogReportComponent.prototype.onGetDocSearch = function (years, docid) {
        this.getPosts(docid);
        this.getPosts2(docid);
    };
    LogReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .filter(function (params) { return params.docid; })
            .subscribe(function (params) {
            _this.onGetDocSearch(params.years, params.docid); // Get Doc by Doc ID
            _this.docid = params.docid;
        });
        this.observableBooks = this.getPosts(this.docid);
        this.observableBooks.subscribe(function (kb022) { return _this.kb02 = kb022; }, function (error) { return _this.errorMessage = error; });
        this.observableBooks2 = this.getPosts2(this.docid);
        this.observableBooks2.subscribe(function (kb022) { return _this.kb02 = kb022; }, function (error) { return _this.errorMessage = error; });
    };
    return LogReportComponent;
}());
LogReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-log-report',
        template: __webpack_require__("../../../../../src/app/log-report/log-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/log-report/log-report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogReportComponent);

var _a, _b, _c;
//# sourceMappingURL=log-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-left/menu-left.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerSub {\r\n  color: white;\r\n  background-color: #4b4b71;\r\n  border: 0px;\r\n}\r\n\r\n.menu-footer td {\r\n  border: 0px;\r\n  FONT-FAMILY: Tahoma;\r\n  FONT-SIZE: 11px;\r\n  text-align: right;\r\n}\r\n\r\n.menu-footer-nav td {\r\n  border: 0px;\r\n  FONT-FAMILY: Tahoma;\r\n  FONT-SIZE: 11px;\r\n  text-align: right;\r\n  color: rgb(230, 230, 230);\r\n}\r\n\r\n.menu-footer-nav span {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-left/menu-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<table border=\"0\" cellspacing=\"0\" id=\"UcMenuLeft1_gvLeftMenu\" rules=\"all\" style=\"BORDER-BOTTOM: 0px; BORDER-COLLAPSE: collapse; BORDER-LEFT: 0px; BORDER-RIGHT: 0px; BORDER-TOP: 0px; FONT-FAMILY: tahoma; FONT-SIZE: 12px; WIDTH: 150px;\">\r\n<tbody>\r\n<tr align=\"middle\" >\r\n  <th scope=\"col\" class=\"headerSub\">ระบบเบิกจ่าย</th>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"background-color: transparent; display: block;\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl02$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl02_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ01 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl02$kb01','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl02_kb01\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินงบประมาณที่ต้องอ้างใบสั่งซื้อฯ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = '#a8b7e2'\" style=\"BACKGROUND-COLOR: #a8b7e2; DISPLAY: block\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\" routerLinkActive=\"active\" [routerLink]=\"[{ outlets: { aux: ['kb021'] } }]\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl03$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl03_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ02 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl03$kb02','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl03_kb02\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"background-color: transparent; display: block;\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl04$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl04_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ03 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl04$kb03','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl04_kb03\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินนอกงบประมาณที่ไม่อ้างใบสั่งซื้อฯ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"background-color: transparent; display: block;\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl05$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl05_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ05 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl05$kb05','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl05_kb05\" style=\"FONT-SIZE: 11px\">ขอถอนคืนรายได้แผ่นดิน</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"background-color: transparent; display: block;\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl06$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl06_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ06 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl06$kb06','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl06_kb06\" style=\"FONT-SIZE: 11px\">ขอถอนคืนรายได้เงินนอกงบประมาณ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"background-color: transparent; display: block;\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl07$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl07_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ08 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl07$kb15','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl07_kb15\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินรายได้จัดสรร</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl08$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl08_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ09 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl08$kb09','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl08_kb09\" style=\"FONT-SIZE: 11px\">ขอถอนคืนรายได้แผ่นดินผ่านระบบ BAHTNET</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl09$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl09_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ10 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl09$kb10','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl09_kb10\" style=\"FONT-SIZE: 11px\">ขอถอนเงินจัดสรรให้ อปท. ผ่านระบบ BAHTNET</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl10$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl10_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขบ11 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl10$kb08','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl10_kb08\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินงบประมาณที่ต้องอ้างใบสั่งซื้อฯ การส่งมอบไม่แน่นอน</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl11$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl11_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ปก01 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl11$kb21','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl11_kb21\" style=\"FONT-SIZE: 11px\">การลดยอดเจ้าหนี้เพื่อบันทึกเงินประกันผลงาน</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl12$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl12_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ปก02 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl12$kb22','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl12_kb22\" style=\"FONT-SIZE: 11px\">การบันทึกเงินประกันผลงาน (ในงบ, นอกงบ)</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl13$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl13_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ทข01 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl13$kb13','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl13_kb13\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินกู้อ้างอิงใบสั่งซื้อฯ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl14$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl14_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ทข02 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl14$kb14','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl14_kb14\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินกู้ที่ไม่อ้างอิงใบสั่งซื้อฯ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl15$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl15_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ทข11 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl15$kb11','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl15_kb11\" style=\"FONT-SIZE: 11px\">ขอเบิกเงินกู้อ้างอิงใบสั่งซื้อฯ การส่งมอบไม่แน่นอน</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl16$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl16_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>ขจ05 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl16$kj05','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl16_kj05\" style=\"FONT-SIZE: 11px\">บันทึกรายการจ่ายชำระเงิน</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl17$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl17_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>บช01 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl17$kb30','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl17_kb30\" style=\"FONT-SIZE: 11px\">บันทึกรายการบัญชีแยกประเภท</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl18$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl18_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>นส02-1 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl18$kb34','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl18_kb34\" style=\"FONT-SIZE: 11px\">นำส่งเงินแบบผ่านรายการ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"HyperLeftMenu\" onmouseout=\"this.style.backgroundColor = 'Transparent'\" onmouseover=\"this.style.backgroundColor = '#a8b7e2'\" style=\"DISPLAY: none\">\r\n  <td>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"0\" class=\"HyperLeftMenu\" style=\"WIDTH: 100%\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"HEIGHT: 22px\">\r\n          <a class=\"LeftMenuAbs\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl19$lbtnAbs','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl19_lbtnAbs\" style=\"FONT-SIZE: 11px; FONT-WEIGHT: bold\">\r\n            <b>นส02-2 » </b>\r\n          </a><a class=\"HyperLeftMenu\" href=\"javascript:__doPostBack('UcMenuLeft1$gvLeftMenu$ctl19$kb35','')\" id=\"UcMenuLeft1_gvLeftMenu_ctl19_kb35\" style=\"FONT-SIZE: 11px\">นำส่งเงินแบบพักรายการ</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr>\r\n<tr class=\"menu-footer\">\r\n  <td style=\"BACKGROUND-IMAGE: url(../../assets/Images/img_leftMenu/back2main_01.jpg); HEIGHT: 26px;\" ></td>\r\n</tr>\r\n<tr class=\"menu-footer-nav\">\r\n  <td style=\"BACKGROUND-IMAGE: url(../../assets/Images/img_leftMenu/back2main_02.jpg); HEIGHT: 17px;\" >\r\n  <div >\r\n    <span>เมนูถัดไป</span>\r\n    <span>&nbsp;|&nbsp;</span>\r\n    <span [routerLink]=\"LINK_HOME\">กลับหน้าหลัก</span>\r\n    <span>&nbsp;</span>\r\n  </div>\r\n  </td>\r\n</tr>\r\n<!-- <tr style=\"BORDER-BOTTOM-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-TOP-WIDTH: 0px; DISPLAY: block; HEIGHT: 11px;\">\r\n  <td>\r\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"back2main\" style=\"HEIGHT: 43px; WIDTH: 150px;\">\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"BACKGROUND-IMAGE: url(../../assets/Images/img_leftMenu/back2main_01.jpg); HEIGHT: 26px\">&nbsp; </td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"right\" style=\"BACKGROUND-IMAGE: url(../../assets/Images/img_leftMenu/back2main_02.jpg); HEIGHT: 17px\">\r\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <a class=\"LeftMenuNavigate\" href=\"#\" id=\"nextMenuTab\" onclick=\"LeftMenuPartition('UcMenuLeft1_gvLeftMenu', 'menuPageIndex', 6, 'nextMenuTab');\" style=\"DISPLAY: block; FONT-FAMILY: Tahoma; FONT-SIZE: 11px\">เมนูถัดไป | </a>\r\n              </td>\r\n              <td>\r\n                <a class=\"LeftMenuNavigate\" href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(\"UcMenuLeft1$gvLeftMenu$ctl20$btBack2Main\", \"\", false, \"\", \"default.aspx\", false, true))' id=\"UcMenuLeft1_gvLeftMenu_ctl20_btBack2Main\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px\">กลับหน้าหลัก</a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </td>\r\n</tr> -->\r\n</tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu-left/menu-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuLeftComponent = (function () {
    function MenuLeftComponent() {
        this.LINK_HOME = '/';
    }
    MenuLeftComponent.prototype.ngOnInit = function () {
    };
    return MenuLeftComponent;
}());
MenuLeftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'menu-left',
        template: __webpack_require__("../../../../../src/app/menu-left/menu-left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-left/menu-left.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuLeftComponent);

//# sourceMappingURL=menu-left.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-top/menu-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-top/menu-top.component.html":
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"TBSubCategory\" style=\"HEIGHT: 20px; MARGIN-LEFT: 0px; MARGIN-TOP: 0px;\">\r\n  <tbody>\r\n  <tr>\r\n    <td align=\"left\" rowspan=\"1\" style=\"BACKGROUND-IMAGE: url(assets/Images/switchHeaderMenu_bg.jpg); BACKGROUND-REPEAT: repeat-x; HEIGHT: 31px; WIDTH: 200px;\" valign=\"center\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tbody>\r\n        <tr>\r\n          <td>\r\n            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"WIDTH: 18px\">\r\n              <tbody>\r\n              <tr>\r\n                <td align=\"left\" style=\"BACKGROUND-IMAGE: url(assets/Images/switchHeaderMenu_01.jpg); BACKGROUND-POSITION: right 50%; BACKGROUND-REPEAT: no-repeat; HEIGHT: 31px; WIDTH: 20px;\" valign=\"top\"></td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n          <td style=\"PADDING-RIGHT: 5px\">\r\n            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"UcMenuTop1_dlSubCatMenu\" style=\"BORDER-BOTTOM-WIDTH: 0px; BORDER-COLLAPSE: collapse; BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-TOP-WIDTH: 0px; HEIGHT: 17px;\">\r\n              <tbody>\r\n              <tr>\r\n                <td style=\"HEIGHT: 18px; WHITE-SPACE: nowrap;\">\r\n                    <!-- <a [routerLink]=\"[{ outlets: { aux: ['kb021'] } }]\">Contact</a> -->\r\n                   <!-- <a class=\"fontMenuTop\" href=\"javascript:__doPostBack('UcMenuTop1$dlSubCatMenu$ctl00$lnkSubCat','')\" id=\"UcMenuTop1_dlSubCatMenu_ctl00_lnkSubCat\" onclick=\"CursorWait();\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px\" title=\"สร้างขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ\">สร้าง</a> <span class=\"Subcategory\" id=\"UcMenuTop1_dlSubCatMenu_ctl00_lbSeperate\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px\">|</span>  -->\r\n                  <a [ngClass]=\"topMenu_c\" (click)=\"onClick('/kb021')\" routerLinkActive=\"active\" [routerLink]=\"[{ outlets: { aux: ['kb021'] } }]\" title=\"สร้างขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ\">\r\n                    สร้าง</a>\r\n                  <span class=\"Subcategory\" id=\"UcMenuTop1_dlSubCatMenu_ctl00_lbSeperate\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px\">\r\n                    <a>&nbsp;|&nbsp;</a>\r\n                  </span>\r\n                </td>\r\n                <td style=\"HEIGHT: 18px; WHITE-SPACE: nowrap;\">\r\n                  <!-- <a class=\"Subcategory\" href=\"javascript:__doPostBack('UcMenuTop1$dlSubCatMenu$ctl01$lnkSubCat','')\" id=\"UcMenuTop1_dlSubCatMenu_ctl01_lnkSubCat\" onclick=\"CursorWait();\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px\" title=\"ค้นหาขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ\">ค้นหา</a> <span class=\"Subcategory\" id=\"UcMenuTop1_dlSubCatMenu_ctl01_lbSeperate\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px\"></span> -->\r\n                  <a [ngClass]=\"topMenu_s\" (click)=\"onClick('/Kb023')\" routerLinkActive=\"active\" [routerLink]=\"[{ outlets: { aux: ['Kb023'] } }]\" title=\"ค้นหาขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ\">\r\n                    ค้นหา</a>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu-top/menu-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuTopComponent = (function () {
    function MenuTopComponent(route) {
        this.route = route;
        this.topMenu_c = 'fontMenuTop';
        this.topMenu_s = 'Subcategory';
    }
    MenuTopComponent.prototype.onClick = function (index) {
        if (index === '/kb021') {
            this.topMenu_c = 'fontMenuTop';
            this.topMenu_s = 'Subcategory';
            // console.log(index);
        }
        else if (index === '/Kb023') {
            this.topMenu_c = 'Subcategory';
            this.topMenu_s = 'fontMenuTop';
            // console.log(index);
        }
        // console.log(this.route.url);
    };
    MenuTopComponent.prototype.ngOnInit = function () {
        console.log('On:' + this.route.url);
    };
    return MenuTopComponent;
}());
MenuTopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'menu-top',
        template: __webpack_require__("../../../../../src/app/menu-top/menu-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-top/menu-top.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MenuTopComponent);

var _a;
//# sourceMappingURL=menu-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/report-report/report-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "test22{\r\n    text-align: right;\r\n  \r\n  }\r\n  ol li{\r\n      list-style-type: none;\r\n    }\r\n    ul {\r\n      list-style-type: none;\r\n    }\r\n    .prtlBody {\r\n      MARGIN: 0px;\r\n      BACKGROUND-COLOR: #ffffff\r\n    }\r\n  \r\n    .sapTOCH3Lnk {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      LINE-HEIGHT: 150%;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapTOCH4Lnk {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      MARGIN-LEFT: 25px;\r\n      COLOR: #225a8d;\r\n      LINE-HEIGHT: 150%;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapTOCH5Lnk {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      MARGIN-LEFT: 50px;\r\n      COLOR: #225a8d;\r\n      LINE-HEIGHT: 150%;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnkSml {\r\n      COLOR: #225a8d;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnkSml:visited {\r\n      COLOR: #756183;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnkSml:hover {\r\n      COLOR: #4b8bc7;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnkSml:active {\r\n      COLOR: #ff9a00;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnkSmlTax {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: 8pt;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapLnk {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnk:link {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnk:visited {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #756183;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnk:hover {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #4b8bc7;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnk:active {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #ff9a00;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapLnk:link .sapTxtStd {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapLnk:visited .sapTxtStd {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #756183;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapLnk:hover .sapTxtStd {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #4b8bc7;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapLnk:active .sapTxtStd {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #ff9a00;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapBtnStdIcon {\r\n      BORDER-RIGHT: #2f2f47 1px solid;\r\n      PADDING-RIGHT: 4px;\r\n      BORDER-TOP: #f1f8ff 1px solid;\r\n      PADDING-LEFT: 4px;\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      PADDING-BOTTOM: 0px;\r\n      BORDER-LEFT: #f1f8ff 1px solid;\r\n      CURSOR: hand;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: #2f2f47 1px solid;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      WHITE-SPACE: nowrap;\r\n      HEIGHT: 16px;\r\n      BACKGROUND-COLOR: #f7f7f7;\r\n      TEXT-ALIGN: center;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    .sapBtnStd {\r\n      BORDER-RIGHT: #2f2f47 1px solid;\r\n      PADDING-RIGHT: 4px;\r\n      BORDER-TOP: #f1f8ff 1px solid;\r\n      PADDING-LEFT: 4px;\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      PADDING-BOTTOM: 0px;\r\n      BORDER-LEFT: #f1f8ff 1px solid;\r\n      CURSOR: hand;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: #2f2f47 1px solid;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      WHITE-SPACE: nowrap;\r\n      HEIGHT: 16px;\r\n      BACKGROUND-COLOR: #e0edfb;\r\n      TEXT-ALIGN: center;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    .sapBtnStd:link {\r\n      COLOR: #000000;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    .sapBtnStd:hover {\r\n      COLOR: #ff9100;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    .sapBtnStd:visited {\r\n      COLOR: #000000;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    .sapBtnStd:active {\r\n      COLOR: #ff9100;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    .sapLic {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #000000;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapLicSml {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: 0.7em;\r\n      COLOR: #000000;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapLicItem {\r\n      LIST-STYLE-IMAGE: url(/images/listcube.gif)\r\n    }\r\n  \r\n    .sapLicWhl {\r\n      MARGIN: 0px 0px 0px -15px\r\n    }\r\n  \r\n    .sapEdfTxtEnbl {\r\n      BORDER-RIGHT: #cacaca 1px solid;\r\n      PADDING-RIGHT: 2px;\r\n      BORDER-TOP: #cacaca 1px solid;\r\n      PADDING-LEFT: 5px;\r\n      FONT-SIZE: 1.65ex;\r\n      PADDING-BOTTOM: 0px;\r\n      BORDER-LEFT: #cacaca 1px solid;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: #cacaca 1px solid;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      HEIGHT: 1.4em;\r\n      BACKGROUND-COLOR: #ffffff\r\n    }\r\n  \r\n    .sapTxtStd {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #000000;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapTxtH1 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: small;\r\n      COLOR: #000000;\r\n      FONT-FAMILY:  angsana new,tahoma, arial, sans-serif\r\n\r\n    }\r\n  \r\n    .sapTxtH2 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: small;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapTxtH3 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: small;\r\n      MARGIN: 15px 0px 3px;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: arial, sans-serif\r\n    }\r\n  \r\n    .sapTxtH4 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: italic;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapTxtH5 {\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    .sapTxtH6 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #ff9900;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapTxtH7 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 8pt;\r\n      COLOR: #993333;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapTxtH8 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 8pt;\r\n      COLOR: #008040;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapContents {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #000000;\r\n      LINE-HEIGHT: 100%;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    .sapCode {\r\n      FONT-SIZE: 10pt;\r\n      FONT-FAMILY: Courier New\r\n    }\r\n  \r\n    .sapTblTtl {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      BACKGROUND-COLOR: #efefef\r\n    }\r\n  \r\n    .sapTxtSml {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE:small;\r\n      COLOR: #000000;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: angsana new,tahoma, arial, sans-serif;\r\n      overflow:hidden;\r\n      line-height: 8pt;\r\n      \r\n    }\r\n    .sapTxtSml2 {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: 7pt;\r\n      COLOR: #000000;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      white-space:nowrap; \r\n      overflow:hidden;\r\n      text-overflow:ellipsis;\r\n      border-top: 1px solid black;\r\n      margin:0px;\r\n    }\r\n  \r\n    .sapTxtTtlSml {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 0.6em;\r\n      MARGIN: 0px;\r\n      COLOR: #225a8d\r\n    }\r\n  \r\n    .sapTxtTtl {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 0.7em;\r\n      MARGIN: 0px;\r\n      COLOR: #225a8d\r\n    }\r\n  \r\n    BODY {\r\n      MARGIN: 6px;\r\n      FONT-FAMILY: Tahoma, Arial, sans-serif\r\n    }\r\n  \r\n    H1 {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 12px;\r\n      MARGIN: 0px;\r\n      PADDING-TOP: 6px\r\n    }\r\n  \r\n    P {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px 0px 6px;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    A {\r\n      COLOR: #225a8d;\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    A:link {\r\n      COLOR: #225a8d\r\n    }\r\n  \r\n    A:visited {\r\n      COLOR: #756183\r\n    }\r\n  \r\n    A:hover {\r\n      COLOR: #4b8bc7\r\n    }\r\n  \r\n    A:active {\r\n      COLOR: #ff9a00\r\n    }\r\n  \r\n    .whiteBody {\r\n      SCROLLBAR-FACE-COLOR: #f7f7f7;\r\n      SCROLLBAR-HIGHLIGHT-COLOR: #ffffff;\r\n      SCROLLBAR-SHADOW-COLOR: #225a8d;\r\n      SCROLLBAR-3DLIGHT-COLOR: #d6e3e7;\r\n      SCROLLBAR-ARROW-COLOR: #394142;\r\n      SCROLLBAR-TRACK-COLOR: #ffffff;\r\n      SCROLLBAR-DARKSHADOW-COLOR: #ffffff;\r\n      SCROLLBAR-BASE-COLOR: #f7f7f7;\r\n      BACKGROUND-COLOR: #ffffff\r\n    }\r\n  \r\n    .blueBody {\r\n      SCROLLBAR-FACE-COLOR: #f7f7f7;\r\n      SCROLLBAR-HIGHLIGHT-COLOR: #ffffff;\r\n      SCROLLBAR-SHADOW-COLOR: #225a8d;\r\n      SCROLLBAR-3DLIGHT-COLOR: #d6e3e7;\r\n      SCROLLBAR-ARROW-COLOR: #394142;\r\n      SCROLLBAR-TRACK-COLOR: #d6e3e7;\r\n      SCROLLBAR-DARKSHADOW-COLOR: #d6e3e7;\r\n      SCROLLBAR-BASE-COLOR: #f7f7f7;\r\n      BACKGROUND-COLOR: #d6e3e7\r\n    }\r\n  \r\n    .sdnHdr2 {\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      MARGIN: 6px 0px 5px;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: arial, sans-serif\r\n    }\r\n  \r\n    .sdnRed {\r\n      COLOR: #ff0000\r\n    }\r\n  \r\n    .sdnAuthorImg {\r\n      FLOAT: left\r\n    }\r\n  \r\n    .sdnDevArea {\r\n      BACKGROUND-COLOR: #eeeeee\r\n    }\r\n  \r\n    .sdnDevAreaHdr {\r\n      MARGIN-TOP: 5px;\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 8pt;\r\n      MARGIN-BOTTOM: 5px;\r\n      PADDING-BOTTOM: 5px;\r\n      COLOR: #ffffff;\r\n      PADDING-TOP: 5px;\r\n      BACKGROUND-COLOR: #999999\r\n    }\r\n  \r\n    .sdnAuthor {\r\n      FONT-SIZE: 8pt;\r\n      COLOR: #757575;\r\n      FONT-FAMILY: tahoma, arial, sans-serif\r\n    }\r\n  \r\n    #content UL {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 20px;\r\n      LIST-STYLE-IMAGE: url(/mimes/ico4x8_listcube.gif);\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 9px 0px 12px;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    #content OL {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 20px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 9px 0px 12px 6px;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    #content LI {\r\n      MARGIN-TOP: -7px;\r\n      FONT-SIZE: x-small;\r\n      MARGIN-BOTTOM: 10px;\r\n      LINE-HEIGHT: 120%\r\n    }\r\n  \r\n    #sourcecode {\r\n      MARGIN-LEFT: 5%;\r\n      VERTICAL-ALIGN: top;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n      BACKGROUND-COLOR: #fff\r\n    }\r\n  \r\n    #sourcecode #header {\r\n      FONT-WEIGHT: bold;\r\n      WIDTH: 200px;\r\n      COLOR: #000;\r\n      BACKGROUND-COLOR: #d6e3e7\r\n    }\r\n  \r\n    #sourcecode #headerdescription {\r\n      FONT-WEIGHT: bold;\r\n      WIDTH: 450px;\r\n      COLOR: #000;\r\n      BACKGROUND-COLOR: #d6e3e7\r\n    }\r\n  \r\n    #sourcecode A {\r\n      MARGIN: 0px;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #sourcecode A:link {\r\n      MARGIN: 0px;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #sourcecode A:visited {\r\n      MARGIN: 0px;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #sourcecode #file {\r\n      WIDTH: 200px\r\n    }\r\n  \r\n    #sourcecode #description {\r\n      WIDTH: 450px\r\n    }\r\n  \r\n    #sourcecode #box {\r\n      WIDTH: 655px;\r\n      BORDER-BOTTOM: #d6e3e7 1px solid;\r\n      BACKGROUND-COLOR: #fff\r\n    }\r\n  \r\n    #methods {\r\n      MARGIN-LEFT: 5%\r\n    }\r\n  \r\n    .codeextract {\r\n      FONT-SIZE: 0.9em;\r\n      MARGIN-LEFT: 5%;\r\n      FONT-STYLE: italic\r\n    }\r\n  \r\n    #methods #guielements {\r\n      FONT-SIZE: 0.8em;\r\n      MARGIN-LEFT: 5%\r\n    }\r\n  \r\n    .guielementname {\r\n      FONT-WEIGHT: bold\r\n    }\r\n  \r\n    .sapOrange {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #ff9a00\r\n    }\r\n  \r\n    .sdnTable {\r\n      MARGIN: 0px 0px 12px;\r\n      BORDER-COLLAPSE: collapse\r\n    }\r\n  \r\n    .sdnTable TD {\r\n      PADDING-RIGHT: 6px;\r\n      PADDING-LEFT: 6px;\r\n      PADDING-BOTTOM: 6px;\r\n      PADDING-TOP: 6px\r\n    }\r\n  \r\n    .sdnTableHeader {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #ffffff;\r\n      BACKGROUND-COLOR: #999999\r\n    }\r\n  \r\n    #jive-footer TD {\r\n      BORDER-TOP: #cccccc 1px solid;\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 0.7em;\r\n      PADDING-TOP: 5px;\r\n      TEXT-ALIGN: center\r\n    }\r\n  \r\n    #jive-footer TD A {\r\n      COLOR: #666;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #jive-footer TD A:hover {\r\n      TEXT-DECORATION: underline\r\n    }\r\n  \r\n    BODY {\r\n      PADDING-RIGHT: 0px! important;\r\n      PADDING-LEFT: 0px! important;\r\n      PADDING-BOTTOM: 0px! important;\r\n      MARGIN: 0px;\r\n      COLOR: #000! important;\r\n      PADDING-TOP: 0px! important;\r\n      FONT-FAMILY: tahoma, arial, sans-serif! important;\r\n      BACKGROUND-COLOR: #fff! important;\r\n    }\r\n  \r\n    #header {\r\n      BACKGROUND: url(/images/head_center.gif) #fff repeat-x 50% top;\r\n      WIDTH: 100%;\r\n      HEIGHT: 60px\r\n    }\r\n  \r\n    #header #topheaderlinks {\r\n      PADDING-RIGHT: 2.0em;\r\n      PADDING-LEFT: 0px;\r\n      FONT-SIZE: 0.7em;\r\n      RIGHT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      PADDING-TOP: 0px;\r\n      POSITION: absolute;\r\n      TOP: 20px;\r\n      TEXT-ALIGN: right\r\n    }\r\n  \r\n    #header A {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: 1em;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #header A:link {\r\n      FONT-WEIGHT: normal;\r\n      FONT-SIZE: 1em;\r\n      COLOR: #225a8d;\r\n      FONT-STYLE: normal;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #header A:visited {\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #header A:hover {\r\n      COLOR: #4b8bc7;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #header A:active {\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #header #search {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #f90\r\n    }\r\n  \r\n    #header #welcome {\r\n      PADDING-LEFT: 0.5em;\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 0.7em;\r\n      LEFT: 0px;\r\n      COLOR: #ff9900;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      POSITION: absolute;\r\n      TOP: 41px;\r\n      HEIGHT: 19px\r\n    }\r\n  \r\n    #header #poweredby {\r\n      PADDING-RIGHT: 0.5em;\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: 10px;\r\n      RIGHT: 0px;\r\n      COLOR: #666666;\r\n      FONT-FAMILY: Tahoma, Arial, sans-serif;\r\n      POSITION: absolute;\r\n      TOP: 41px;\r\n      HEIGHT: 19px\r\n    }\r\n  \r\n    : #b5cbe7 DIV.menu {\r\n      BORDER-RIGHT: #000 1px solid;\r\n      PADDING-RIGHT: 0.5em;\r\n      BORDER-TOP: #000 1px solid;\r\n      PADDING-LEFT: 0.5em;\r\n      FONT-SIZE: 0.7em;\r\n      Z-INDEX: 101;\r\n      LEFT: 0px;\r\n      VISIBILITY: hidden;\r\n      PADDING-BOTTOM: 0.25em;\r\n      BORDER-LEFT: #000 1px solid;\r\n      PADDING-TOP: 0.25em;\r\n      BORDER-BOTTOM: #000 1px solid;\r\n      POSITION: absolute;\r\n      TOP: 0px;\r\n      BACKGROUND-COLOR: #e0e0e0\r\n    }\r\n  \r\n    #contribute A {\r\n      DISPLAY: block;\r\n      WHITE-SPACE: nowrap\r\n    }\r\n  \r\n    #profile A {\r\n      DISPLAY: block;\r\n      WHITE-SPACE: nowrap\r\n    }\r\n  \r\n    #tln {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 3px;\r\n      MARGIN: 0px;\r\n      WIDTH: 100%;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: #225a8d 3px solid;\r\n      LIST-STYLE-TYPE: none;\r\n      BACKGROUND-COLOR: #b5cbe7\r\n    }\r\n  \r\n    #tln LI {\r\n      PADDING-RIGHT: 0px;\r\n      DISPLAY: inline;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px 0px 0px 0.5em;\r\n      LINE-HEIGHT: 1em;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    #tln LI.separator {\r\n      FONT-SIZE: 0.6em;\r\n      MARGIN: 0px -0.5em 0px 0px\r\n    }\r\n  \r\n    #tln A {\r\n      FONT-SIZE: 0.7em;\r\n      MARGIN: 0px;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #tln A:link {\r\n      FONT-SIZE: 0.7em;\r\n      MARGIN: 0px;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #sidebar A {\r\n      FONT-SIZE: 0.7em;\r\n      MARGIN: 0px;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #sidebar A:link {\r\n      FONT-SIZE: 0.7em;\r\n      MARGIN: 0px;\r\n      COLOR: #225a8d;\r\n      FONT-FAMILY: tahoma, arial, helvetica, sans-serif;\r\n      BACKGROUND-COLOR: transparent;\r\n      TEXT-DECORATION: none\r\n    }\r\n  \r\n    #tln A:visited {\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A:visited {\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A:hover {\r\n      COLOR: #4b8bc7;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A:hover {\r\n      COLOR: #4b8bc7;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A:active {\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A:active {\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A.current {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A.current:link {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A.current:visited {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A.current:hover {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #tln A.current:active {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A.current {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A.current:link {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A.current:visited {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A.current:hover {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #sidebar A.current:active {\r\n      FONT-WEIGHT: bold;\r\n      COLOR: #225a8d;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    #searchbox {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      WIDTH: 40%;\r\n      COLOR: #000;\r\n      PADDING-TOP: 0px;\r\n      BACKGROUND-COLOR: #fff\r\n    }\r\n  \r\n    #searchbox H1 {\r\n      PADDING-RIGHT: 0.25em;\r\n      PADDING-LEFT: 0.25em;\r\n      FONT-SIZE: 0.8em;\r\n      PADDING-BOTTOM: 0.25em;\r\n      COLOR: #000;\r\n      PADDING-TOP: 0.25em;\r\n      BACKGROUND-COLOR: #fff\r\n    }\r\n  \r\n    #sidebar {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      WIDTH: 20%;\r\n      COLOR: #000;\r\n      PADDING-TOP: 0px;\r\n      POSITION: absolute;\r\n      BACKGROUND-COLOR: #d6e3e7\r\n    }\r\n  \r\n    #sidebar #searchForm {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px 0px -0.5em;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    #sidebar #nwlogo {\r\n      PADDING-RIGHT: 0.5em;\r\n      PADDING-LEFT: 0.5em;\r\n      PADDING-BOTTOM: 0.5em;\r\n      WIDTH: 100%;\r\n      PADDING-TOP: 0.5em;\r\n      BACKGROUND-COLOR: #fff;\r\n      TEXT-ALIGN: center\r\n    }\r\n  \r\n    #sidebar #nwlogo IMG {\r\n      MARGIN: auto\r\n    }\r\n  \r\n    #sidebar H1 {\r\n      PADDING-RIGHT: 0.25em;\r\n      PADDING-LEFT: 0.25em;\r\n      FONT-SIZE: 0.8em;\r\n      PADDING-BOTTOM: 0.25em;\r\n      MARGIN: 1em 0px 0px;\r\n      COLOR: #fff;\r\n      PADDING-TOP: 0.25em;\r\n      BACKGROUND-COLOR: #225a8d\r\n    }\r\n  \r\n    #sidebar UL {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 1em;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px 0px 0.5em 1em;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    #sidebar .navigation {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0.5em;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px 0px 0.5em 0.5em;\r\n      PADDING-TOP: 0px;\r\n      LIST-STYLE-TYPE: none\r\n    }\r\n  \r\n    #sidebar .navigation UL {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0.5em;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px;\r\n      PADDING-TOP: 0px;\r\n      LIST-STYLE-TYPE: none\r\n    }\r\n  \r\n    #sidebar .navigation .branch {\r\n      DISPLAY: block\r\n    }\r\n  \r\n    #content {\r\n      LEFT: 20%;\r\n      WIDTH: 80%;\r\n      POSITION: absolute\r\n    }\r\n  \r\n    #searchresults {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px;\r\n      WIDTH: 95%;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    #paging {\r\n      MARGIN: auto;\r\n      TEXT-ALIGN: center\r\n    }\r\n  \r\n    .iview {\r\n      MARGIN: 0.5em\r\n    }\r\n  \r\n    .iview .header {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      FONT-WEIGHT: bold;\r\n      FONT-SIZE: x-small;\r\n      PADDING-BOTTOM: 0px;\r\n      COLOR: #225a8d;\r\n      PADDING-TOP: 0px;\r\n      FONT-FAMILY: tahoma, arial, sans-serif;\r\n      BACKGROUND-COLOR: transparent\r\n    }\r\n  \r\n    .iview .content {\r\n      BORDER-RIGHT: #d6e3e7 1px solid;\r\n      BORDER-TOP: #d6e3e7 1px solid;\r\n      MARGIN: 2px 0px 0px;\r\n      BORDER-LEFT: #d6e3e7 1px solid;\r\n      BORDER-BOTTOM: #d6e3e7 1px solid\r\n    }\r\n  \r\n    .iview .content IFRAME {\r\n      BORDER-RIGHT: 0px;\r\n      PADDING-RIGHT: 0px;\r\n      BORDER-TOP: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 0px;\r\n      BORDER-LEFT: 0px;\r\n      WIDTH: 100%;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: 0px\r\n    }\r\n  \r\n    .iview .content .iframesurround {\r\n      PADDING-RIGHT: 0px;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      WIDTH: 100%;\r\n      PADDING-TOP: 0px\r\n    }\r\n  \r\n    .iview .bottomborder {\r\n      BORDER-RIGHT: #fff 5px solid;\r\n      PADDING-RIGHT: 0px;\r\n      BORDER-TOP: #d6e3e7 5px solid;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 2px 0px 0px;\r\n      BORDER-LEFT: #fff 0px solid;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: #d6e3e7 0px solid;\r\n      HEIGHT: 0px\r\n    }\r\n  \r\n    .trigger {\r\n      CURSOR: hand\r\n    }\r\n  \r\n    .imenu .bottomborder {\r\n      BORDER-RIGHT: #fff 5px solid;\r\n      PADDING-RIGHT: 0px;\r\n      BORDER-TOP: #993333 5px solid;\r\n      PADDING-LEFT: 0px;\r\n      PADDING-BOTTOM: 0px;\r\n      MARGIN: 2px 0px 0px;\r\n      BORDER-LEFT: #fff 0px solid;\r\n      PADDING-TOP: 0px;\r\n      BORDER-BOTTOM: #993333 0px solid;\r\n      HEIGHT: 0px\r\n    }\r\n    \r\n    \r\n    @media screen {\r\n      div.divFooter {\r\n           position: fixed;\r\n        bottom: 0;\r\n      }\r\n    }\r\n    @media print {\r\n      div.divFooter {\r\n        position: fixed;\r\n        bottom: 0;\r\n      }\r\n      .noprint {\r\n        display: none;\r\n    }\r\n    \r\n    }\r\n    footer { \r\n      display: block;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-report/report-report.component.html":
/***/ (function(module, exports) {

module.exports = "<TABLE style=\"BORDER-COLLAPSE: collapse\" cellSpacing=1 border=0 cellPadding=0 width=\"100%\" align=left style=\"background-color: #fff\">\r\n  <thead>\r\n    <td>\r\n      <tr class=\"noprint\" align=center style=\"background-color: #fff\">\r\n        <IMG SRC=\"icon_print.GIF\" WIDTH=\"16\" HEIGHT=\"16\" BORDER=0 ALT=\"\" class=\"noprint\">&nbsp;&nbsp;\r\n        <a class=\"noprint\" href=javascript:window.print();>Print</a>\r\n      </tr>\r\n\r\n    </td>\r\n    <td align=center>\r\n      <TR align=center style=\"background-color: #fff\">\r\n        <TD vAlign=top height=20 style=\"background-color: #fff\">\r\n          <P class=sapTxtH1 style=\"BACKGROUND-COLOR: #fff\">\r\n            <span lang=\"th\">\r\n              <span style=\"background-color: #fff\">\r\n                รายงานขอเบิกเงินคงคลัง</span>\r\n            </span>\r\n          </P>\r\n          <P class=sapTxtH1 style=\"BACKGROUND-COLOR: #fff\">\r\n            <span lang=\"th\">\r\n              <span style=\"background-color: #fff\">\r\n                ขบ02 - ขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ</span>\r\n            </span>\r\n          </P>\r\n        </TD>\r\n      </TR>\r\n    </td>\r\n  </thead>\r\n  <td>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  </td>\r\n  <td>\r\n    <thead>\r\n      <TABLE id='mytable' class=sapTxtSml border=0 width=\"100%\">\r\n\r\n        <td *ngFor=\"let kb02 of observableBooks| async\">\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD>เลขที่เอกสาร</TD>\r\n            <TD>: {{header.b_gjahr}} - {{header.b_belnr}}</TD>\r\n          </tr>\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD>ประเภทเอกสาร</TD>\r\n            <TD>: {{header.a_blart}} -\r\n              <ng-container *ngIf=\"header.a_blart=='K0'\">\r\n                เงินจ่ายสิ้นเดือน\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='K1'\">\r\n                  ลูกหนี้เงินยืม\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='K8'\">\r\n                  เงินอุดหนุน\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='KC'\">\r\n                  ขอเบิก(1.ข)\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='KD'\">\r\n                  กันเงิน\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='KE'\">\r\n                  ขอเบิก(2.ข)\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='KF'\">\r\n                  ขอเบิก(2.ข) กันเงิน\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='KL'\">\r\n                  ใบสำคัญงปม(2)\r\n              </ng-container>\r\n              <ng-container *ngIf=\"header.a_blart=='KM'\">\r\n                  ใบสำคัญงปม(2) กันเงิน\r\n              </ng-container>\r\n\r\n\r\n            </TD>\r\n          </tr>\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD>ส่วนราชการ</TD>\r\n            <TD>: {{header.a_bukrs}} - {{header.a_bukrs_name}}</TD>\r\n          </tr>\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD>หน่วยเบิกจ่าย</TD>\r\n            <TD>: {{header.a_zzpmt}} - {{header.a_zzpmt_name}}</TD>\r\n          </tr>\r\n        </td>\r\n        <td *ngFor=\"let kb02 of observableBooks| async\" align=right>\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD align=left>วันที่เอกสาร&nbsp;</TD>\r\n            <TD align=left>: {{header.a_bldat}}</TD>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD align=left>วันที่ผ่านรายการ&nbsp;</TD>\r\n            <TD align=left>: {{header.a_budat}}</TD>\r\n          </tr>\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD align=left>สถานะ&nbsp;</TD>\r\n            <TD align=left>: เอกสารผ่านรายการ</TD>\r\n          </tr>\r\n          <tr *ngFor=\"let header of kb02.header\" style=\"background-color: #fff\">\r\n            <TD align=left>การอ้างอิง&nbsp;</TD>\r\n            <TD align=left>: {{header.a_xblnr}}</TD>\r\n          </tr>\r\n        </td>\r\n      </TABLE>\r\n    </thead>\r\n    <TBODY>\r\n      <TABLE id='mytable' class=sapTxtSml border=0 width=\"100%\" cellpadding=3 cellspacing=0 style=\"background-color: #fff\">\r\n        <tr>\r\n          <Td>\r\n            <tr>\r\n              <TABLE id='mytable' border=0 width=\"100%\" cellpadding=3 cellspacing=0>\r\n                <thead>\r\n                  <TR class=sapTxtSml align=center>\r\n                    <TH rowspan=5 width=\"5%\" style='border-left: 1px solid black;border-bottom: 1px solid black;border-top: 1px solid black; '\r\n                      align=center>บรรทัดรายการที่</TH>\r\n                    <TH rowspan=5 style='border-bottom: 1px solid black;border-top: 1px solid black; ' align=center>เดบิต/เครดิต</TH>\r\n                    <TH rowspan=5 style='border-bottom: 1px solid black; border-top: 1px solid black;' align=center>รหัสบัญชี</TH>\r\n                    <TH rowspan=5 style='border-bottom: 1px solid black; border-top: 1px solid black;' align=center>ชื่อบัญชี</TH>\r\n                    <TH rowspan=1 colspan=\"2\" style='border-bottom: 1px solid black;border-top: 1px solid black;' align=center>จำนวนเงินขอเบิก</TH>\r\n                    <TH rowspan=1 colspan=\"2\" style='border-bottom: 1px solid black; border-top: 1px solid black;' align=left>ฐานภาษี</TH>\r\n                    <TH rowspan=1 colspan=\"1\" style='border-bottom: 1px solid black;border-top: 1px solid black; ' align=left>ภาษี &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TH>\r\n                    <TH rowspan=1 colspan=\"2\" style='border-bottom: 1px solid black;border-top: 1px solid black; ' align=left>ค่าปรับ</TH>\r\n\r\n                    <TH rowspan=1 colspan=\"4\" style='border-bottom: 1px solid black;border-top: 1px solid black;' align=left>จำนวนเงินขอรับ</TH>\r\n                    <TH rowspan=1 colspan=\"1\" style='border-bottom: 1px solid black;border-top: 1px solid black;border-right: 1px solid black;'\r\n                      align=left></TH>\r\n\r\n                  </TR>\r\n                  <TR>\r\n                    <TH rowspan=2 align=right>การกำหนด</TH>\r\n                    <TH rowspan=2 colspan=\"1\" align=right>หน่วยต้นทุน</TH>\r\n                    <TH rowspan=2 colspan=\"2\" align=center>แหล่งเงินทุน</TH>\r\n                    <TH rowspan=2 colspan=\"1\" align=right></TH>\r\n                    <TH colspan=2 colspan=\"2\" style='border-bottom: 1px solid black;'>เงินฝาก</TH>\r\n                    <TH rowspan=2 colspan=\"1\">&nbsp;</TH>\r\n                    <TH rowspan=2 colspan=\"1\">เจ้าของเงินฝาก</TH>\r\n                    <TH rowspan=2 colspan=\"1\" align=left>เจ้าของบัญชีย่อย</TH>\r\n\r\n                    <TH rowspan=2 colspan=\"1\" align=left>บัญชีย่อย</TH>\r\n                    <TH rowspan=2 colspan=\"1\" style='border-right: 1px solid black;' align=left></TH>\r\n                  </TR>\r\n                  <TR class=sapTxtSml align=center>\r\n                    <TH>คลัง</TH>\r\n                    <TH>ธ.พาณิชย์</TH>\r\n                  </TR>\r\n                  <TR class=sapTxtSml align=center>\r\n\r\n                    <TH colspan=\"1\" style='border-bottom: 1px solid black; border-top: 1px solid black;' align=center>รหัสงบประมาณ</TH>\r\n                    <TH colspan=\"1\" style='border-bottom: 1px solid black; border-top: 1px solid black;' align=left></TH>\r\n\r\n                    <TH colspan=\"2\" style='border-bottom: 1px solid black; border-top: 1px solid black;' align=left></TH>\r\n                    <TH colspan=\"5\" style='border-bottom: 1px solid black; border-top: 1px solid black;' align=center>กิจกรรมหลัก</TH>\r\n                    <TH colspan=\"2\" style='border-bottom: 1px solid black; border-top: 1px solid black;' align=center>กิจกรรมย่อย</TH>\r\n                    <TH rowspan=1 colspan=\"1\" style='border-bottom: 1px solid black;border-top: 1px solid black;border-right: 1px solid black;'\r\n                      align=left></TH>\r\n                  </TR>\r\n                  <TR>\r\n                    <TH colspan=\"2\" style='border-bottom: 1px solid black;' align=left>เอกสารสำรองเงินงบประมาณ</TH>\r\n                    <TH colspan=\"2\" style='border-bottom: 1px solid black;'>เอกสารกันเงิน</TH>\r\n                    <TH colspan=\"7\" style='border-bottom: 1px solid black;' align=left>&nbsp;ข้อความในรายการ</TH>\r\n                    <TH rowspan=1 colspan=\"1\" style='border-bottom: 1px solid black;border-right: 1px solid black;' align=left></TH>\r\n                  </TR>\r\n\r\n                </thead>\r\n                <ng-container *ngFor=\"let kb02 of observableBooks2| async\" class=sapTxtSml2>\r\n                  <tr></tr>\r\n                  <tr *ngFor=\"let data of kb02.data;let J=index\" class=sapTxtSml2>\r\n                    <td style='border-left: 1px solid black;' valign=\"top\">{{data.head_no}}{{data.detail_no}}\r\n\r\n                      <br>&nbsp;</td>\r\n                    <td valign=\"top\">{{data.head_type}}{{data.detail_type}}\r\n                      <br>&nbsp;</td>\r\n                    <td valign=\"top\">\r\n                      &nbsp;{{data.head_lifnr}}{{data.detai_hkont}}\r\n                      <!-- <br>&nbsp;{{data.head_fistl}}{{data.detai_fistl}} -->\r\n                    </td>\r\n                    <td valign=\"top\">\r\n                      &nbsp;{{data.head_name1}}{{data.detai_hkont_name}}\r\n                      <!--    <br>&nbsp;{{data.head_fistl_name}}{{data.detail_fistl_name}}-->\r\n                    </td>\r\n                    <td colspan=\"2\">\r\n                      <tr>\r\n                        <td align=center colspan=\"4\">\r\n                          <!--จำนวนเงินขอเบิก -->\r\n                          {{data.head_sumcost | number:'.2'}} {{data.detail_wrbtr | number:'.2'}}\r\n                        </td>\r\n                      </tr>\r\n                      <tr align=right>\r\n                        <td colspan=\"1\">\r\n                          <!--การกำหนด -->\r\n                        </td>\r\n                        <td align=right colspan=\"1\">\r\n                          <!--หน่วยต้นทุน -->\r\n                          {{data.head_kostl}}{{data.detail_kostl}}\r\n                        </td>\r\n                      </tr>\r\n                      <tr align=right>\r\n                        <td colspan=\"1\">\r\n                          <!--รหัสงบ -->\r\n                          {{data.head_fistl}}{{data.detai_fistl}}\r\n                        </td>\r\n                        <td align=right colspan=\"1\">\r\n                          <!--ชื่อรหัสงบ -->\r\n                          {{data.head_fistl_name}}{{data.detail_fistl_name}}\r\n                        </td>\r\n                      </tr>\r\n                      <TR>\r\n                        <td align=center>\r\n                          &nbsp;\r\n                        </td>\r\n                      </TR>\r\n                    </td>\r\n\r\n\r\n                    <td colspan=\"2\" align=right>\r\n                      <tr>\r\n                        <!--ฐานภาษี-->\r\n                        <td colspan=\"1\" align=right>\r\n                          &nbsp;0.00\r\n                        </td>\r\n                        <td colspan=\"1\" align=right>\r\n                          &nbsp;\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <!--แหล่งเงินทุน-->\r\n                        <td colspan=\"1\" align=right>\r\n                          {{data.head_geber}}{{data.detail_geber}}\r\n                        </td>\r\n                        <td colspan=\"1\" align=right>\r\n                          {{data.head_geber_name}}{{data.detail_geber_name}}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <TR>\r\n                          <td colspan=\"2\" align=center>\r\n                            &nbsp;\r\n                          </td>\r\n                        </TR>\r\n                        <tr>\r\n                          <td colspan=\"2\" align=center>\r\n                            <!--เอกสารกันเงิน -->\r\n                            000\r\n                          </td>\r\n                        </tr>\r\n                    </td>\r\n\r\n\r\n                    <td colspan=\"7\">\r\n                      <TR>\r\n                        <td colspan=\"1\" align=center>\r\n                          <!--ภาษี -->\r\n                          0.00\r\n                        </td>\r\n                        <td colspan=\"/\" align=center>\r\n                          <!-- ค่าปรับ -->\r\n                          0.00\r\n                        </td>\r\n\r\n\r\n                        <td colspan=\"4\" align=left>\r\n                          <!-- จำนวนเงินที่ขอรับ -->\r\n                          {{data.head_sumcost | number:'.2'}} {{data.detail_wrbtr | number:'.2'}}\r\n                        </td>\r\n                      </TR>\r\n                      <TR>\r\n                        <td colspan=\"2\" align=center>\r\n                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                          &nbsp;&nbsp;&nbsp;\r\n                        </td>\r\n                        <td colspan=\"5\" align=center>\r\n                          &nbsp;\r\n                        </td>\r\n                      </TR>\r\n\r\n                      <TR>\r\n                        <td colspan=\"2\" align=center>\r\n                          <!-- กิจกรรมหลัก-->\r\n                          <ng-container *ngIf=\"J==0\">\r\n                            P{{data.head_gsber}}{{data.detail_fkber}}\r\n                          </ng-container>\r\n                          <ng-container *ngIf=\"J!=0\">\r\n                            {{data.head_gsber}}{{data.detail_fkber}}\r\n                          </ng-container>\r\n                        </td>\r\n                        <td colspan=\"3\" align=center>\r\n                          <!-- ชื่อ กิจกรรมหลัก-->\r\n                          {{data.detail_fkber_name}}\r\n                        </td>\r\n                        <td colspan=\"2\" align=right>\r\n                          <!-- ชื่อ กิจกรรมย่อย-->\r\n                          <ng-container *ngIf=\"J==0\">\r\n                            &nbsp;\r\n                          </ng-container>\r\n                          <ng-container *ngIf=\"J!=0\">\r\n                            {{data.detail_prznr}}\r\n                          </ng-container>\r\n                        </td>\r\n                      </TR>\r\n                      <TR>\r\n                        <td colspan=\"8\" align=left>\r\n\r\n                          {{data.head_sgtxt}}{{data.detail_sgtxt}} &nbsp;\r\n\r\n                        </td>\r\n\r\n                      </TR>\r\n                    </td>\r\n                    <td style='border-right: 1px solid black;'>\r\n\r\n                    </td>\r\n\r\n                    </tr>\r\n\r\n                </ng-container>\r\n              </TABLE>\r\n\r\n              </tr>\r\n              <tr>\r\n                <footer>\r\n\r\n\r\n                  <TABLE id='mytable' class=sapTxtSml border=0 width=\"100%\" cellpadding=3 cellspacing=0 style=\"background-color: #fff\">\r\n                    <TR class=sapTxtSml align=center>\r\n                      <TD rowspan=1 colspan=\"2\" style='border-top: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;'\r\n                        align=left>&nbsp;&nbsp;&nbsp;หมายเหตุ&nbsp;&nbsp;__________________________________________________________________________________________________________</TD>\r\n                    </TR>\r\n                    <TR class=sapTxtSml align=center>\r\n                      <TD rowspan=1 colspan=\"1\" style='border-left: 1px solid black; ' align=left>&nbsp;&nbsp;&nbsp;ผู้บันทึก&nbsp;&nbsp;________________________________________________________________</TD>\r\n                      <TD rowspan=1 colspan=\"1\" style='border-right: 1px solid black; ' align=left>&nbsp;&nbsp;&nbsp;ผู้อนุมัติ&nbsp;&nbsp;________________________________________________________________</TD>\r\n                    </TR>\r\n                    <TR class=sapTxtSml align=center>\r\n                      <TD rowspan=1 colspan=\"1\" style='border-bottom: 1px solid black;border-left: 1px solid black; ' align=left>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_________________________________________________________)\r\n                        <br>&nbsp;</TD>\r\n                      <TD rowspan=1 colspan=\"1\" style='border-bottom: 1px solid black;border-right: 1px solid black;' align=left>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_________________________________________________________)\r\n                        <br>&nbsp;</TD>\r\n                    </TR>\r\n                  </TABLE>\r\n\r\n\r\n\r\n                </footer>\r\n              </tr>\r\n          </Td>\r\n          </tr>\r\n      </TABLE>\r\n      <table>\r\n        <tr>\r\n          <td>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <!--    <div class=\"divFooter\">UNCLASSIFIED</div> -->\r\n  </td>\r\n  <td>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  </td>\r\n\r\n</TABLE>"

/***/ }),

/***/ "../../../../../src/app/report-report/report-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportReportComponent = (function () {
    function ReportReportComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        // TEST Online =>
        // url = 'http:///52.221.246.71:3000/api/getKb02Header/';
        // url2 = 'http:///52.221.246.71:3000/api/kbo2LogReport/';
        // TEST local =>
        // url = 'http://localhost:3000/api/getKb02Header/';
        // url2 = 'http://localhost:3000/api/kbo2LogReport/';
        this.url = './api/getKb02Header/';
        this.url2 = './api/kbo2LogReport/';
    }
    ReportReportComponent.prototype.getPosts = function (docid) {
        return this.http.get(this.url + docid)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ReportReportComponent.prototype.getPosts2 = function (docid) {
        return this.http.get(this.url2 + docid)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ReportReportComponent.prototype.extractData = function (res) {
        var body = res.json();
        return Array.of(body);
    };
    ReportReportComponent.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    ReportReportComponent.prototype.onGetDocSearch = function (years, docid) {
        this.getPosts(docid);
        this.getPosts2(docid);
    };
    ReportReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .filter(function (params) { return params.docid; })
            .subscribe(function (params) {
            _this.onGetDocSearch(params.years, params.docid); // Get Doc by Doc ID
            _this.docid = params.docid;
        });
        this.observableBooks = this.getPosts(this.docid);
        this.observableBooks.subscribe(function (kb022) { return _this.kb02 = kb022; }, function (error) { return _this.errorMessage = error; });
        this.observableBooks2 = this.getPosts2(this.docid);
        this.observableBooks2.subscribe(function (kb022) { return _this.kb02 = kb022; }, function (error) { return _this.errorMessage = error; });
    };
    return ReportReportComponent;
}());
ReportReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-report-report',
        template: __webpack_require__("../../../../../src/app/report-report/report-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report-report/report-report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ReportReportComponent);

var _a, _b, _c;
//# sourceMappingURL=report-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-login-profile/user-login-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-login-profile/user-login-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"userLogin\" style=\"BACKGROUND-COLOR: #b0bdbe; WIDTH: 150px\">\r\n  <tbody>\r\n  <tr>\r\n    <td align=\"left\" valign=\"top\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"150\">\r\n        <tbody>\r\n        <tr style=\"HEIGHT: 15px\">\r\n          <td style=\"WIDTH: 12px\">&nbsp;</td>\r\n          <td class=\"userLogin\">&nbsp;</td>\r\n          <td class=\"userLoginLabel\" style=\"WIDTH: 69px\">&nbsp; </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"HEIGHT: 19px\">&nbsp;</td>\r\n          <td class=\"userLogin\" colspan=\"2\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px; HEIGHT: 19px;\">รหัสผู้ใช้: <span class=\"userLoginValue\" id=\"ubLoginProfileBCH01_lbUserID\">{{UID}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"HEIGHT: 19px\">&nbsp;</td>\r\n          <td class=\"userLogin\" colspan=\"2\" style=\"FONT-FAMILY: tahoma; FONT-SIZE: 11px; HEIGHT: 19px;\">เข้าสู่ระบบเมื่อ: &nbsp;<span id=\"ubLoginProfileBCH01_lbLoginTime\" style=\"COLOR: #717171\">{{TIMELOGIN}}</span></td>\r\n        </tr>\r\n        <tr id=\"ubLoginProfileBCH01_trLogin\">\r\n          <td>&nbsp;</td>\r\n          <td class=\"userLoginLink\" colspan=\"2\">\r\n            <a class=\"userLoginLink\" href=\"javascript:__doPostBack('ubLoginProfileBCH01$lnkbSignout','')\" id=\"ubLoginProfileBCH01_lnkbSignout\" onclick=\" return confirm('ยืนยันการออกจากระบบ');\">ออกจากระบบ</a> <a class=\"userLoginLink\" href=\"./\" id=\"ubLoginProfileBCH01_hlnkUserProfile\" onclick=\"OpenWindow('http://10.156.0.83:92/GFNETUserProfileWeb/userprofile.aspx?request=49;50;48;48;53;48;48;48;49;49;49;48;59&amp;Section=Edit', 830, 750);return false;\" target=\"_blank\">| ข้อมูลผู้ใช้</a> <a class=\"userLoginLink\" href=\"./\" id=\"ubLoginProfileBCH01_hlnkEditPassword\" onclick=\"OpenWindow('http://10.156.0.83:92/GFNETUserProfileWeb/editpassword.aspx?request=49;50;48;48;53;48;48;48;49;49;49;48;59&amp;Section=EditPassword', 830, 400);return false;\" target=\"_blank\">| แก้ไขรหัสผ่าน</a>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td align=\"middle\" colspan=\"3\"></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-login-profile/user-login-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserLoginProfileComponent = (function () {
    function UserLoginProfileComponent() {
        this.UID = '030020000510';
        this.TIME = new Date();
        this.TIMELOGIN = this.TIME.getHours() + ':' + this.TIME.getMinutes() + ':' + this.TIME.getSeconds();
    }
    UserLoginProfileComponent.prototype.ngOnInit = function () {
    };
    return UserLoginProfileComponent;
}());
UserLoginProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-login-profile',
        template: __webpack_require__("../../../../../src/app/user-login-profile/user-login-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-login-profile/user-login-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserLoginProfileComponent);

//# sourceMappingURL=user-login-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profiles/user-profiles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profiles/user-profiles.component.html":
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"WIDTH: 650px\">\r\n  <tbody>\r\n  <tr style=\"HEIGHT: 12px\">\r\n    <td align=\"left\" style=\"HEIGHT: 12px; WIDTH: 1px;\" valign=\"center\">&nbsp;</td>\r\n    <td align=\"left\" class=\"userProfiles\" style=\"HEIGHT: 12px; WIDTH: 49px;\" valign=\"center\">\r\n      <span id=\"UcUserProfiles1_lbUserType\" style=\"DISPLAY: inline-block; WIDTH: 45px;\">ชื่อผู้ใช้ : </span>\r\n    </td>\r\n    <td align=\"left\" class=\"userProfilesLabel\" style=\"HEIGHT: 12px; WIDTH: 19%;\" valign=\"center\">&nbsp; <span id=\"UcUserProfiles1_lbUserName\">กอล์ฟ กอล์ฟ</span> </td>\r\n    <td align=\"left\" class=\"userProfiles\" style=\"HEIGHT: 12px; WIDTH: 13%;\" valign=\"center\">&nbsp;ตำแหน่ง : </td>\r\n    <td align=\"left\" class=\"userProfilesLabel\" style=\"HEIGHT: 12px; WIDTH: 19%;\" valign=\"center\">&nbsp;<span id=\"UcUserProfiles1_lbUserPosition\">1</span> </td>\r\n    <td align=\"left\" class=\"userProfiles\" style=\"HEIGHT: 12px; PADDING-LEFT: 15px; WIDTH: 50px;\" valign=\"center\">สังกัด&nbsp; : </td>\r\n    <td align=\"left\" class=\"userProfilesLabel\" style=\"HEIGHT: 12px; WIDTH: 50%;\" valign=\"center\">&nbsp;<span id=\"UcUserProfiles1_lbUserSection\">สำนักงานเลขานุการกรม กรมพัฒนาพลังงานทดแทน&amp;อนุร </span></td>\r\n  </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/user-profiles/user-profiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfilesComponent = (function () {
    function UserProfilesComponent() {
    }
    UserProfilesComponent.prototype.ngOnInit = function () {
    };
    return UserProfilesComponent;
}());
UserProfilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-profiles',
        template: __webpack_require__("../../../../../src/app/user-profiles/user-profiles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profiles/user-profiles.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserProfilesComponent);

//# sourceMappingURL=user-profiles.component.js.map

/***/ }),

/***/ "../../../../../src/app/web-browser/check-web/check-web.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-browser/check-web/check-web.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  [Test Service Log] ติดตั้ง <a class=\"LINK-ADD_ON\" (click)=\"redirectTo()\">Add-On {{BROWSER}}</a>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/web-browser/check-web/check-web.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckWebComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckWebComponent = (function () {
    function CheckWebComponent() {
        this.LINK = '';
        this.BROWSER = '';
    }
    CheckWebComponent.prototype.checkWeb = function () {
        var mybrowser = navigator.userAgent;
        console.log(mybrowser);
        if (mybrowser.indexOf('Firefox') > 0) {
            this.BROWSER = 'Firefox';
            this.LINK = 'https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/?src=userprofile';
        }
        if (mybrowser.indexOf('Chrome') > 0) {
            this.BROWSER = 'Chrome';
            this.LINK = 'https://chrome.google.com/webstore/detail/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog';
        }
        if (mybrowser.indexOf('OPR') > 0) {
            this.BROWSER = 'Opera';
            this.LINK = 'https://addons.opera.com/extensions/details/app_id/ficdjbpldagoalnkdoponeaajijkncih';
        }
    };
    CheckWebComponent.prototype.redirectTo = function () {
        window.open(this.LINK, '_blank');
    };
    CheckWebComponent.prototype.ngOnInit = function () {
        this.checkWeb();
    };
    return CheckWebComponent;
}());
CheckWebComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-check-web',
        template: __webpack_require__("../../../../../src/app/web-browser/check-web/check-web.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web-browser/check-web/check-web.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckWebComponent);

//# sourceMappingURL=check-web.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map