webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routing__ = __webpack_require__("../../../../../src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/components/user/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_create_item_create_item_component__ = __webpack_require__("../../../../../src/app/components/create-item/create-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_edit_item_edit_item_component__ = __webpack_require__("../../../../../src/app/components/edit-item/edit-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_items_list_items_list_component__ = __webpack_require__("../../../../../src/app/components/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/components/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_add_group_add_group_component__ = __webpack_require__("../../../../../src/app/components/add-group/add-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular_star_rating__ = __webpack_require__("../../../../angular-star-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guards_activate_guard__ = __webpack_require__("../../../../../src/app/guards/activate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guards_deactivate_guard__ = __webpack_require__("../../../../../src/app/guards/deactivate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_user_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_user_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_create_item_create_item_component__["a" /* CreateItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_21__components_edit_item_edit_item_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_items_list_items_list_component__["a" /* ItemsListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_item_detail_item_detail_component__["a" /* ItemDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_add_group_add_group_component__["a" /* AddGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__components_user_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_create_item_create_item_component__["a" /* CreateItemComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_edit_item_edit_item_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_add_group_add_group_component__["a" /* AddGroupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_layout__["c" /* LayoutModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_22__services_group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_29__services_mail_service__["a" /* MailService */],
                __WEBPACK_IMPORTED_MODULE_30__guards_activate_guard__["a" /* ActivateGuard */],
                __WEBPACK_IMPORTED_MODULE_31__guards_deactivate_guard__["a" /* DeactivateGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_12__angular_common__["HashLocationStrategy"] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-group/add-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-slider {\r\n    width: 100%;\r\n}\r\n\r\nmat-tab {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-group/add-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title>\n  Groups\n  <mat-tab-group>\n    <mat-tab label=\"Add new group\" *ngIf=\"auth.admin\">\n        <div mat-dialog-content>\n          <mat-form-field>\n            <input type=\"text\" matInput name=\"group\" id=\"group\" [(ngModel)]=\"group\" placeholder=\"Title\">\n          </mat-form-field>\n          <button mat-raised-button (click)=\"onNoClick()\" color=\"accent\"> Cancel </button>\n          <button mat-raised-button (click)=\"addNewGroup()\" color=\"primary\" cdkFocusInitial> Add </button>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Subscribe to new group\">\n      <div mat-dialog-content>\n        <div *ngFor=\"let group of allGroups\">\n          <mat-checkbox [checked]=\"myGroups.includes(group)\" \n          (change)=\"change($event, group)\">\n            {{ group }}\n          </mat-checkbox>\n        </div>\n        <div>\n          <button mat-raised-button (click)=\"onNoClick()\" color=\"accent\"> Cancel </button>\n          <button mat-raised-button (click)=\"onNoClick()\" color=\"primary\" cdkFocusInitial> Save </button>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-group/add-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGroupComponent = (function () {
    function AddGroupComponent(auth, groups, dialogRef) {
        this.auth = auth;
        this.groups = groups;
        this.dialogRef = dialogRef;
        this.allGroups = [];
        this.myGroups = [];
    }
    AddGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groups.getAllGroups().subscribe(function (value) {
            _this.allGroups = value;
        });
        this.auth.myGroups.subscribe(function (value) {
            _this.myGroups = value;
        });
        this.getMyGroups();
    };
    AddGroupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddGroupComponent.prototype.addNewGroup = function () {
        var _this = this;
        this.groups.addNewGroup({ newGroup: this.group.toUpperCase() })
            .subscribe(function (value) {
            _this.allGroups = value;
            _this.onNoClick();
        });
    };
    AddGroupComponent.prototype.getMyGroups = function () {
        var _this = this;
        this.auth.getMyGroups().subscribe(function (value) {
            _this.myGroups = value;
        });
    };
    AddGroupComponent.prototype.change = function (event, group) {
        var _this = this;
        this.auth.updateMyGroups({
            newGroup: group,
            checked: event.checked
        }).subscribe(function (value) {
            _this.myGroups = value;
            _this.auth.myGroups.next(value);
        });
    };
    AddGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-group',
            template: __webpack_require__("../../../../../src/app/components/add-group/add-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-group/add-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */]])
    ], AddGroupComponent);
    return AddGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/create-item/create-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-slider {\r\n    width: 100%;\r\n}\r\n\r\n#action {\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-item/create-item.component.html":
/***/ (function(module, exports) {

module.exports = "<form #createForm=\"ngForm\">\n  <div mat-dialog-title>\n    Create new item\n  </div>\n  <div mat-dialog-content>\n    <mat-form-field>\n      <input type=\"text\" required matInput name=\"title\" id=\"title\" [(ngModel)]=\"item.name\" placeholder=\"Title\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput required name=\"description\" id=\"description\" [(ngModel)]=\"item.description\" \n      placeholder=\"Description\"></textarea>\n    </mat-form-field>\n    <mat-card-title>\n      Select rating\n    </mat-card-title>\n    <mat-slider min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\" name=\"max_rating\" [(ngModel)]=\"item.max_rating\"></mat-slider>\n    <mat-card-content>\n      <mat-select placeholder=\"Multiplier\" name=\"multiplier\" [(ngModel)]=\"item.multiplier\">\n        <mat-option *ngFor=\"let num of range\" [value]=\"num\">\n          {{ num }}\n        </mat-option>\n      </mat-select>\n    </mat-card-content>\n    <mat-card-subtitle>\n      Max rating: {{ calculateRating() }}\n    </mat-card-subtitle>\n    <mat-form-field>\n      <input matInput required [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"time_limit\" [(ngModel)]=\"item.time_limit\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n    <!-- button to trigger the file upload when submitted -->\n    <button type=\"button\" mat-raised-button (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n          Upload Image\n    </button>\n    <div id=\"action\">\n      <button mat-raised-button (click)=\"onNoClick()\" color=\"accent\"> Cancel </button>\n      <button mat-raised-button (click)=\"createItem()\" color=\"primary\" cdkFocusInitial [disabled]=\"!createForm.valid\"> Create </button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/create-item/create-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logic_Item__ = __webpack_require__("../../../../../src/app/logic/Item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var URL = 'https://item-store.herokuapp.com';
// const URL = "http://localhost:3000";
var CreateItemComponent = (function () {
    function CreateItemComponent(itemService, dialogRef, data) {
        this.itemService = itemService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.range = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL + "/upload", itemAlias: 'photo' });
    }
    CreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__logic_Item__["a" /* Item */]();
        this.item.max_rating = 1;
        this.item.multiplier = 1;
        for (var i = 0; i < 10; i++) {
            this.range.push(i + 1);
        }
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
            _this.item.image = "" + JSON.parse(response).file;
        };
    };
    CreateItemComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateItemComponent.prototype.createItem = function () {
        this.item.max_rating = this.calculateRating();
        this.itemService.createItem({
            name: this.item.name,
            image: this.item.image,
            description: this.item.description,
            max_rating: this.item.max_rating,
            time_limit: this.item.time_limit
        }).subscribe(function (value) {
            // check for error
            console.log(value);
        });
        this.onNoClick();
    };
    CreateItemComponent.prototype.calculateRating = function () {
        return (+this.item.max_rating) * (+this.item.multiplier);
    };
    CreateItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-item',
            template: __webpack_require__("../../../../../src/app/components/create-item/create-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-item/create-item.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], CreateItemComponent);
    return CreateItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\r\n    margin-top: 50px;\r\n    height: 100%;\r\n}\r\n\r\n.list {\r\n    margin: 10px auto;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\nmat-sidenav {\r\n    width: 100vw;\r\n}\r\n\r\n.sidenav {\r\n    width: 100%;\r\n    height: 100%;\r\n    right: 0;\r\n    left: 0;\r\n    top: 50px;\r\n    z-index: 190;\r\n    position: absolute;\r\n}\r\n\r\nmat-sidenav {\r\n    left: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav\">\n    <mat-sidenav *ngIf=\"itemService.sidenav\" mode=\"side\" align=\"end\" opened class=\"mat-elevation-z6\">\n        <div>\n            <mat-tab-group (selectedTabChange)=\"getItems($event)\">\n                <mat-tab label=\"My Items\">\n                    <app-items-list [cols]=\"cols\" [items]=\"items\" (itemEvent)=\"showDetails($event)\"></app-items-list>\n                </mat-tab>\n                <span *ngFor=\"let group of groups\">\n                    <mat-tab label=\"{{ group }}\">\n                        <app-items-list [cols]=\"cols\" [items]=\"items\" (itemEvent)=\"showDetails($event)\"></app-items-list>\n                    </mat-tab>\n                </span>\n                <mat-tab *ngIf=\"auth.admin\" label=\"Need Approval\">\n                    <app-items-list [cols]=\"cols\" [items]=\"items\" (itemEvent)=\"showDetails($event)\"></app-items-list>\n                </mat-tab>\n                <mat-tab *ngIf=\"auth.admin\" label=\"Incomplete\">\n                    <app-items-list [cols]=\"cols\" [items]=\"items\" (itemEvent)=\"showDetails($event)\"></app-items-list>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </mat-sidenav>\n\n    <app-item-detail [model]=\"model\" (approveEvent)=\"approveItem($event)\"  (editEvent)=\"editItemForm(model)\"></app-item-detail>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logic_Item__ = __webpack_require__("../../../../../src/app/logic/Item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_item_edit_item_component__ = __webpack_require__("../../../../../src/app/components/edit-item/edit-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_list_items_list_component__ = __webpack_require__("../../../../../src/app/components/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = (function () {
    function DashboardComponent(itemService, auth, mail, breakpointObserver, dialog) {
        var _this = this;
        this.itemService = itemService;
        this.auth = auth;
        this.mail = mail;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.items = [];
        this.groups = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_5__logic_Item__["a" /* Item */]();
        breakpointObserver.observe([
            __WEBPACK_IMPORTED_MODULE_4__angular_cdk_layout__["b" /* Breakpoints */].HandsetLandscape,
            __WEBPACK_IMPORTED_MODULE_4__angular_cdk_layout__["b" /* Breakpoints */].HandsetPortrait
        ]).subscribe(function (result) {
            if (result.matches) {
                _this.cols = 2;
            }
            else {
                _this.cols = 6;
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.item.subscribe(function (value) {
            var index = _this.items.findIndex(function (elem) {
                return elem._id == value._id;
            });
            // Update item if present in array
            if (index > -1) {
                _this.items[index] = value;
            }
            else {
                // Insert new item
                _this.items.push(value);
            }
            _this.model = value;
            _this.auth.isLoggedIn.subscribe(function (value) {
                console.log(value);
            });
        });
        this.itemService.items.subscribe(function (value) {
            _this.items = value;
        });
        this.auth.myGroups.subscribe(function (value) {
            _this.groups = value;
        });
        this.getItemsCreatedByUser();
        this.getMyGroups();
    };
    DashboardComponent.prototype.getItemsCreatedByUser = function () {
        var _this = this;
        this.itemService.getItemsCreatedByUser()
            .subscribe(function (value) {
            _this.items = value;
        });
    };
    DashboardComponent.prototype.getMyGroups = function () {
        var _this = this;
        this.auth.getMyGroups().subscribe(function (value) {
            _this.groups = value;
        });
    };
    DashboardComponent.prototype.getItems = function (event) {
        this.items = [];
        switch (event.tab.textLabel) {
            case "My Items":
                this.getItemsCreatedByUser();
                break;
            case "Need Approval":
                this.getPendingItems();
                break;
            case "Incomplete":
                this.getIncompleteItems();
                break;
            default:
                this.getItemsByGroup(event.tab.textLabel);
        }
    };
    DashboardComponent.prototype.getPendingItems = function () {
        var _this = this;
        this.itemService.getPendingItems()
            .subscribe(function (value) {
            _this.items = value;
        });
    };
    DashboardComponent.prototype.getIncompleteItems = function () {
        var _this = this;
        this.itemService.getIncompleteItems()
            .subscribe(function (value) {
            _this.items = value;
        });
    };
    DashboardComponent.prototype.getItemsByGroup = function (group) {
        var _this = this;
        this.itemService.getItemsByGroup(group)
            .subscribe(function (value) {
            _this.items = value;
        });
    };
    DashboardComponent.prototype.showDetails = function ($event) {
        this.itemService.sidenav = false;
        this.model = $event;
    };
    DashboardComponent.prototype.editItemForm = function (item) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__edit_item_edit_item_component__["a" /* EditItemComponent */], {
            width: '500px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DashboardComponent.prototype.approveItem = function ($event) {
        var _this = this;
        this.itemService.approveItem($event).subscribe(function (value) {
            var index = _this.items.findIndex(function (elem) {
                return elem._id == value._id;
            });
            var user = '';
            _this.auth.getUser(value.created_by).subscribe(function (value) {
                user = value.email;
                var output = "\n        <h1>Notification from Online stores app</h1>\n        <p> This is to inform you that your item \n        " + _this.items[index].name.toUpperCase() + " \n        has been approved and now available for rating by users.\n        The item is available in groups " + _this.items[index].group.join(', ') + ".</p>\n        <p>Thanks.</p>\n        <p>Online store app</p>\n        ";
                _this.mail.sendMail(output, [user]).subscribe(function (value) {
                    console.log(value);
                });
                _this.items.splice(index, 1);
                _this.itemService.items.next(_this.items);
                _this.model = value;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__items_list_items_list_component__["a" /* ItemsListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__items_list_items_list_component__["a" /* ItemsListComponent */])
    ], DashboardComponent.prototype, "viewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSidenav */])
    ], DashboardComponent.prototype, "sidenav", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_cdk_layout__["a" /* BreakpointObserver */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-item/edit-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-slider {\r\n    width: 100%;\r\n}\r\n\r\nmat-tab {\r\n    width: 100%;\r\n}\r\n\r\n#action {\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-item/edit-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title>\n  Edit item\n  <mat-tab-group>\n    <mat-tab label=\"Edit form\">\n      <form>\n        <div mat-dialog-content>\n          <mat-form-field *ngIf=\"data.created_by == auth._id || auth.admin\">\n            <input type=\"text\" matInput name=\"title\" id=\"title\" [(ngModel)]=\"item.name\" placeholder=\"Title\">\n          </mat-form-field>\n          <mat-form-field *ngIf=\"data.created_by == auth._id || auth.admin\">\n            <textarea matInput name=\"description\" id=\"description\" [(ngModel)]=\"item.description\" \n            placeholder=\"Description\"></textarea>\n          </mat-form-field>\n          <mat-card-title *ngIf=\"data.created_by == auth._id || auth.admin\">\n            Select rating\n          </mat-card-title>\n          <mat-slider *ngIf=\"data.created_by == auth._id || auth.admin\" disabled min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\" name=\"max_rating\" [(ngModel)]=\"item.max_rating\"></mat-slider>\n          <mat-card-content *ngIf=\"data.created_by == auth._id\">\n            <mat-select disabled placeholder=\"Multiplier\" name=\"multiplier\" [(ngModel)]=\"item.multiplier\">\n              <mat-option *ngFor=\"let num of range\" [value]=\"num\">\n                {{ num }}\n              </mat-option>\n            </mat-select>\n          </mat-card-content>\n          <mat-card-subtitle *ngIf=\"data.created_by == auth._id || auth.admin\">\n            Max rating: {{ item.max_rating }}\n          </mat-card-subtitle>\n          <mat-form-field *ngIf=\"data.created_by == auth._id || auth.admin\">\n            <input matInput disabled [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"time_limit\" [(ngModel)]=\"item.time_limit\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <input *ngIf=\"data.created_by == auth._id\" type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n          <!-- button to trigger the file upload when submitted -->\n          <button *ngIf=\"data.created_by == auth._id\" type=\"button\" mat-raised-button (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                Upload Image\n          </button>\n          <div id=\"action\" *ngIf=\"data.created_by == auth._id\">\n            <button mat-raised-button (click)=\"onNoClick()\" color=\"accent\"> Cancel </button>\n            <button mat-raised-button (click)=\"editItem()\" color=\"primary\" cdkFocusInitial> Edit </button>\n          </div>\n        </div>\n      </form>\n    </mat-tab>\n    <mat-tab label=\"Update Group\" *ngIf=\"auth.admin\">\n      <div mat-dialog-content>\n        <div *ngFor=\"let group of groupsList\">\n          <mat-checkbox [checked]=\"data.group.includes(group)\" \n          (change)=\"change($event, group)\">\n            {{ group }}\n          </mat-checkbox>\n        </div>\n      </div>\n      <div id=\"action\">\n        <button mat-raised-button (click)=\"onNoClick()\" color=\"accent\"> Cancel </button>\n        <button mat-raised-button (click)=\"onNoClick()\" color=\"primary\" cdkFocusInitial> Save </button>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-item/edit-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logic_Item__ = __webpack_require__("../../../../../src/app/logic/Item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var URL = 'https://item-store.herokuapp.com';
// const URL = "http://localhost:3000";
var EditItemComponent = (function () {
    function EditItemComponent(auth, itemService, dialogRef, groups, data) {
        this.auth = auth;
        this.itemService = itemService;
        this.dialogRef = dialogRef;
        this.groups = groups;
        this.data = data;
        this.range = [];
        this.groupsList = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL + "/upload", itemAlias: 'photo' });
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__logic_Item__["a" /* Item */]();
        this.item = this.data;
        for (var i = 0; i < 10; i++) {
            this.range.push(i + 1);
        }
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
            _this.item.image = "" + JSON.parse(response).file;
        };
        this.getAllGroups();
    };
    EditItemComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditItemComponent.prototype.editItem = function () {
        this.itemService.editItem(this.item);
        this.onNoClick();
    };
    EditItemComponent.prototype.getAllGroups = function () {
        var _this = this;
        this.groups.getAllGroups().subscribe(function (value) {
            _this.groupsList = value;
        });
    };
    EditItemComponent.prototype.change = function (event, group) {
        var _this = this;
        this.groups.updateItemGroup(this.data._id, { newGroup: group, checked: event.checked }).subscribe(function (value) {
            _this.item = value;
            _this.itemService.item.next(value);
        });
    };
    EditItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__("../../../../../src/app/components/edit-item/edit-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-item/edit-item.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_6__services_group_service__["a" /* GroupService */], Object])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: blue;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <p>Online store</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/item-detail/item-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#model {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n\r\nbutton {\r\n    width: 100%;\r\n    margin-bottom: 3px;\r\n}\r\n#approved {\r\n    color: green;\r\n}\r\n\r\n#pending {\r\n    color: red;\r\n}\r\n\r\n#complete {\r\n    color: green;\r\n}\r\n\r\n#progress {\r\n    color: blue;\r\n}\r\n\r\n#star {\r\n    font-size: 30px !important;\r\n    color: gold;\r\n}\r\n\r\n#span-star {\r\n    font-size: 50px !important;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .model mat-card {\r\n        width: 600px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    #model {\r\n        margin-left: 200px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    #model {\r\n        margin-left: 23.68%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model.name\" class=\"model\">\n  <mat-card>\n        <mat-card-title>{{ model.name }}</mat-card-title>\n        <mat-card-subtitle id=\"complete\" *ngIf=\"isComplete(model)\">\n            COMPLETED\n        </mat-card-subtitle>\n        <mat-card-subtitle id=\"progress\" *ngIf=\"!isComplete(model)\">\n            IN PROGRESS\n        </mat-card-subtitle>\n  </mat-card>\n  <mat-card>\n        <mat-card-content>\n            <mat-progress-bar\n                [color]=\"color\"\n                mode=\"determinate\"\n                [value]=\"model.rating\"\n                bufferValue=\"75\">\n            </mat-progress-bar>\n        </mat-card-content>\n  </mat-card>\n    <mat-card>\n        <img mat-card-image id=\"model\" src=\"http://localhost:3000/{{model.image}}\" alt=\"{{model.name}}\">\n        <mat-card-content>\n            <mat-card-title>Description</mat-card-title>\n            <mat-card-subtitle>{{ model.description }}</mat-card-subtitle>\n        </mat-card-content>\n        <mat-card-content>\n                <p *ngIf=\"model.approved\" id=\"approved\">Item approved</p>\n                <p *ngIf=\"!model.approved\" id=\"pending\">Pending Approval</p>\n                <p>\n                    <mat-icon id=\"star\">star</mat-icon>\n                    <span id=\"span-star\">{{ model.rating | number:'.1-2' }}</span>\n                </p>\n                <mat-card-title *ngIf=\"model.created_by !== auth._id\">\n                    Rate this item\n                </mat-card-title>\n                <mat-card-subtitle *ngIf=\"model.created_by !== auth._id && !model.approved\">\n                    You can rate this item once it is approved.\n                </mat-card-subtitle>\n                <star-rating-comp *ngIf=\"model.created_by !== auth._id && model.approved\"\n                [size]=\"'large'\"\n                [starType]=\"'svg'\"\n                [hoverEnabled]=\"true\"\n                (onClick)=\"onClick($event, model)\">                             \n                </star-rating-comp>\n        </mat-card-content>\n        <mat-card-content>\n            Expires on {{ model.time_limit | date: 'fullDate' }}\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button *ngIf=\"!model.approved && auth.admin\" (click)=\"approveItem(model._id)\">\n                <mat-icon>mode_edit</mat-icon> \n                <span>Approve Item</span>\n            </button>\n        </mat-card-actions>\n        <mat-card-actions>\n            <button mat-raised-button *ngIf=\"(model.created_by == auth._id) || auth.admin\" (click)=\"editItemForm()\">\n                <mat-icon>mode_edit</mat-icon> \n                <span>Edit</span>\n            </button>\n        </mat-card-actions>\n        <mat-card-actions>\n            <button mat-raised-button *ngIf=\"auth.admin && model.approved\" (click)=\"sendEmails(model)\">\n                <mat-icon>send</mat-icon> \n                <span>Email item details</span>\n            </button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailComponent = (function () {
    function ItemDetailComponent(auth, itemService, mail) {
        var _this = this;
        this.auth = auth;
        this.itemService = itemService;
        this.mail = mail;
        this.color = "accent";
        this.users = [];
        this.approveEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClick = function ($event, model) {
            _this.onClickResult = $event;
            _this.itemService.rateItem(_this.onClickResult.rating, model._id)
                .subscribe(function (value) {
                _this.itemService.item.next(value);
                _this.changeColor();
            });
        };
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.prototype.ngOnChanges = function () {
        this.changeColor();
    };
    ItemDetailComponent.prototype.changeColor = function () {
        if (this.model.rating < 30) {
            this.color = "warn";
        }
        else if (this.model.rating > 30 && this.model.rating < 70) {
            this.color = "accent";
        }
        else if (this.model.rating > 70) {
            this.color = "primary";
        }
    };
    ItemDetailComponent.prototype.approveItem = function (itemId) {
        this.approveEvent.emit(itemId);
    };
    ItemDetailComponent.prototype.isComplete = function (model) {
        var modelDate = new Date(model.time_limit);
        // If item has not expired
        if (modelDate.getTime() > Date.now() && model.rating > model.max_rating) {
            return true;
        }
        else {
            // Item expired
            return false;
        }
    };
    ItemDetailComponent.prototype.editItemForm = function () {
        this.editEvent.emit(true);
    };
    ItemDetailComponent.prototype.sendEmails = function (model) {
        var _this = this;
        this.auth.getAllUsers().subscribe(function (value) {
            value.forEach(function (element) {
                _this.users.push(element._id);
            });
            var output = "\n      <h1>Notification from Online stores app</h1>\n      <p> This is to inform you that a new item " + model.name.toUpperCase() + "\n      has been approved. You can now submit your valuable ratings on this item.\n      Thie item is available in groups " + model.group.join(', ') + ".</p>\n      <p>Thanks.</p>\n      <p>Online store app</p>\n      ";
            _this.mail.sendMail(output, _this.users).subscribe(function (value) {
                console.log(value);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ItemDetailComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ItemDetailComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemDetailComponent.prototype, "approveEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemDetailComponent.prototype, "editEvent", void 0);
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item-detail',
            template: __webpack_require__("../../../../../src/app/components/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/item-detail/item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3__services_mail_service__["a" /* MailService */]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\r\n    width: 100%;\r\n}\r\n\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.info, .delete {\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.expired {\r\n    background: rgba(249, 9, 9, 0.38) !important;\r\n}\r\n\r\nmat-grid-tile {\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\nmat-grid-tile:hover {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\nmat-grid-list {\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search\">\n  <input matInput placeholder=\"Search by item name\" [(ngModel)]=\"searchText\">\n</mat-form-field>\n<mat-grid-list [cols]=\"cols\" gutterSize=\"10\" rowHeight=\"250px\">\n  <mat-grid-tile *ngFor=\"let item of items | search : searchText\">\n      <mat-grid-tile-header class=\"expired\" *ngIf=\"checkExpiry(item) && auth.admin\">\n            <button mat-icon-button class=\"delete\" (click)=\"deleteItem(item._id)\">\n                <span matTooltip=\"Delete expired item\">\n                    <mat-icon>delete</mat-icon>\n                </span>\n            </button>\n      </mat-grid-tile-header>\n      <img mat-card-image src=\"http://localhost:3000/{{item.image}}\" alt=\"{{item.name}}\">\n      <mat-grid-tile-footer [ngClass]=\"{'expired': checkExpiry(item)}\">\n          <h3>{{item.name}}</h3>\n          <button class=\"info\" mat-icon-button (click)=\"showDetails(item)\">\n              <mat-icon>info</mat-icon>\n          </button>\n      </mat-grid-tile-footer>\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemsListComponent = (function () {
    function ItemsListComponent(mail, auth, itemService) {
        this.mail = mail;
        this.auth = auth;
        this.itemService = itemService;
        this.items = [];
        this.itemEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ItemsListComponent.prototype.ngOnInit = function () {
    };
    ItemsListComponent.prototype.ngOnChanges = function () {
    };
    ItemsListComponent.prototype.checkExpiry = function (model) {
        var modelDate = new Date(model.time_limit);
        // If item has not expired
        if (modelDate.getTime() < Date.now() && model.rating < model.max_rating) {
            return true;
        }
        else {
            // Item expired
            return false;
        }
    };
    ItemsListComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.itemService.deleteItem(itemId)
            .subscribe(function (value) {
            var user = '';
            var item = value;
            _this.auth.getUser(value.created_by).subscribe(function (value) {
                user = value.email;
                var output = "\n        <h1>Notification from Online stores app</h1>\n        <p> This is to inform you that your item " + item.name.toUpperCase() + "\n        has been deleted from the database since it failed to achieve\n        the maximum rating with the time limit provided.</p>\n        <p>Thanks.</p>\n        <p>Online store app</p>\n        ";
                _this.mail.sendMail(output, [user]).subscribe(function (value) {
                    console.log(value);
                });
            });
        });
        var index = this.items.findIndex(function (elem) {
            return elem._id == itemId;
        });
        this.items.splice(index, 1);
        this.itemService.items.next(this.items);
    };
    ItemsListComponent.prototype.showDetails = function (item) {
        this.itemEvent.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ItemsListComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ItemsListComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemsListComponent.prototype, "itemEvent", void 0);
    ItemsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items-list',
            template: __webpack_require__("../../../../../src/app/components/items-list/items-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items-list/items-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */]])
    ], ItemsListComponent);
    return ItemsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#nav {\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    height: 20px;\r\n    z-index: 200;\r\n    padding-top: 5px;\r\n}\r\n\r\n#menu, #profile, #ico {\r\n    position: absolute;\r\n    float: right;\r\n}\r\n\r\n#menu {\r\n    right: 40px;\r\n}\r\n\r\n#profile {\r\n    right: 100px;\r\n}\r\n\r\n#ico {\r\n    right: 20px;\r\n    bottom: 8px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    #menu {\r\n        bottom: 8px;\r\n    }\r\n    #profile {\r\n        bottom: 8px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"flex-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n  <mat-toolbar color=\"primary\" class=\"mat-elevation-z10\" id=\"nav\">\n    <mat-toolbar-row>\n      Online store\n      <button mat-icon-button id=\"menu\" *ngIf=\"!isLoggedIn\" [matMenuTriggerFor]=\"menu\">\n        Menu\n      </button>\n      <button mat-icon-button id=\"ico\" *ngIf=\"isLoggedIn\" (click)=\"toggleSidenav()\">\n        <i class=\"material-icons\">apps</i>\n      </button>\n      <button mat-icon-button id=\"profile\" *ngIf=\"isLoggedIn\" [matMenuTriggerFor]=\"profile\">\n        {{ name }}\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</section>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item *ngIf=\"!isLoggedIn\" routerLink=\"/signup\">\n    <mat-icon>perm_identity</mat-icon>\n    <span>Sign up</span>\n  </button>\n  <button mat-menu-item *ngIf=\"!isLoggedIn\" routerLink=\"/login\">\n    <mat-icon>lock_open</mat-icon>\n    <span>Log in</span>\n  </button>\n</mat-menu>\n\n<mat-menu #profile=\"matMenu\">\n  <button mat-menu-item (click)=\"editProfileDialog()\">\n    <mat-icon>mode_edit</mat-icon>\n    <span>Edit profile</span>\n  </button>\n  <button mat-menu-item (click)=\"createItemDialog()\">\n    <mat-icon>add</mat-icon>\n    <span>Add new item</span>\n  </button>\n  <button mat-menu-item (click)=\"addGroupDialog()\">\n    <mat-icon>add</mat-icon>\n    <span>Add Group</span>\n  </button>\n  <button mat-menu-item *ngIf=\"isLoggedIn\" (click)=\"logout()\">\n    <mat-icon>lock_outline</mat-icon>\n    <span>Log out</span>\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/components/user/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_item_create_item_component__ = __webpack_require__("../../../../../src/app/components/create-item/create-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_group_add_group_component__ = __webpack_require__("../../../../../src/app/components/add-group/add-group.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavComponent = (function () {
    function NavComponent(auth, itemService, dialog, groups) {
        var _this = this;
        this.auth = auth;
        this.itemService = itemService;
        this.dialog = dialog;
        this.groups = groups;
        this.name = '';
        this.auth.name.subscribe(function (value) {
            _this.name = value;
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn.subscribe(function (value) {
            _this.isLoggedIn = value;
        });
    };
    NavComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavComponent.prototype.editProfileDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__user_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            width: '500px',
            data: { name: this.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavComponent.prototype.createItemDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__create_item_create_item_component__["a" /* CreateItemComponent */], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavComponent.prototype.addGroupDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__add_group_add_group_component__["a" /* AddGroupComponent */], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavComponent.prototype.toggleSidenav = function () {
        this.itemService.sidenav = !this.itemService.sidenav;
    };
    NavComponent.prototype.ngOnDestroy = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__services_group_service__["a" /* GroupService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/edit-user/edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div mat-dialog-title>\n    Edit user\n  </div>\n  <div mat-dialog-content>\n    <mat-form-field>\n      <input matInput placeholder=\"First Name\" type=\"text\" \n      name=\"firstname\" [(ngModel)]=\"user.firstname\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Last Name\" type=\"text\" \n      name=\"lastname\" [(ngModel)]=\"user.lastname\">\n    </mat-form-field>\n    <div>\n      <button mat-raised-button color=\"accent\"\n      (click)=\"onNoClick()\">Cancel</button>\n      <button mat-raised-button color=\"primary\"\n      (click)=\"edit()\" cdkFocusInitial>Edit</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/user/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_User__ = __webpack_require__("../../../../../src/app/logic/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditUserComponent = (function () {
    function EditUserComponent(auth, dialogRef, data) {
        this.auth = auth;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__logic_User__["a" /* User */];
        this.user.firstname = this.data.name.split(' ')[0];
        this.user.lastname = this.data.name.split(' ')[1];
    };
    EditUserComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditUserComponent.prototype.edit = function () {
        this.auth.editProfile(this.user);
        this.onNoClick();
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__("../../../../../src/app/components/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/edit-user/edit-user.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    margin-top: 100px;\r\n}\r\n\r\n.login-card {\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n}\r\n\r\nmat-form-field, button{\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#login {\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .login-card {\r\n        width: 300px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\">\n  <mat-card class=\"login-card\">\n    <mat-card-title id=\"login\">Log in</mat-card-title>\n    <mat-card-content>\n      <p class=\"alertError\" *ngIf=\"error !== ''\">{{ error }}</p>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" type=\"text\" \n        name=\"username\" required [(ngModel)]=\"user.username\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" \n        name=\"password\" required [(ngModel)]=\"user.password\">\n      </mat-form-field>\n    </mat-card-content>\n    \n    <button mat-raised-button color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"logIn()\">Log in</button>\n    <button mat-raised-button color=\"accent\" routerLink=\"/signup\">Sign up Here</button>\n  </mat-card>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_User__ = __webpack_require__("../../../../../src/app/logic/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__logic_User__["a" /* User */]();
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.auth.message.subscribe(function (value) { return _this.error = value; }, function (error) { return _this.error = error; });
        this.auth.login(this.user);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    margin-top: 100px;\r\n}\r\n\r\n.signup-card {\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n}\r\n\r\nmat-form-field, button{\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#signup {\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .signup-card {\r\n        width: 300px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form #signupForm=\"ngForm\">\n  <mat-card class=\"signup-card\">\n    <mat-card-title id=\"signup\">Sign up</mat-card-title>\n    <mat-card-content>\n      <p class=\"alertError\" *ngIf=\"error !== ''\">{{ error }}</p>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" type=\"text\" \n        name=\"username\" [(ngModel)]=\"user.username\" required>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput placeholder=\"Email\" type=\"email\" \n        name=\"email\" [(ngModel)]=\"user.email\" required> \n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"First Name\" type=\"text\" \n        name=\"firstname\" [(ngModel)]=\"user.firstname\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Last Name\" type=\"text\" \n        name=\"lastname\" [(ngModel)]=\"user.lastname\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" \n        name=\"password\" [(ngModel)]=\"user.password\" required>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Re-enter password\" type=\"password\" \n        name=\"repassword\" [(ngModel)]=\"user.repassword\" required>\n      </mat-form-field>\n    </mat-card-content>\n    \n    <button mat-raised-button color=\"primary\" [disabled]=\"!signupForm.valid\" (click)=\"signup()\">Sign up</button>\n    <button mat-raised-button color=\"accent\" routerLink=\"/login\">Log in here</button>\n  </mat-card>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_User__ = __webpack_require__("../../../../../src/app/logic/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(auth) {
        this.auth = auth;
        this.error = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__logic_User__["a" /* User */]();
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.auth.message.subscribe(function (value) { return _this.error = value; }, function (error) { return _this.error = error; });
        if (this.user.password === this.user.repassword) {
            this.auth.register(this.user);
        }
        else {
            this.error = "Passwords don't match";
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/user/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/activate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateGuard = (function () {
    function ActivateGuard(router, auth) {
        this.router = router;
        this.auth = auth;
        this.loggedIn = false;
    }
    ActivateGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.auth.isLoggedIn.subscribe(function (value) {
            _this.loggedIn = value;
        });
        if (this.loggedIn) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    ActivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ActivateGuard);
    return ActivateGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeactivateGuard = (function () {
    function DeactivateGuard() {
    }
    DeactivateGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    DeactivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DeactivateGuard);
    return DeactivateGuard;
}());



/***/ }),

/***/ "../../../../../src/app/logic/Item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
        this.name = '';
        this.description = '';
        this.max_rating = 0;
        this.time_limit = new Date(Date.now());
        this.image = '';
        this.multiplier = 0;
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/logic/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.username = '';
        this.lastname = '';
        this.firstname = '';
        this.email = '';
        this.password = '';
        this.repassword = '';
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_activate_guard__ = __webpack_require__("../../../../../src/app/guards/activate.guard.ts");





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_1__components_user_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_activate_guard__["a" /* ActivateGuard */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/services/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var baseURL = "https://item-store.herokuapp.com";
// const baseURL = "http://localhost:3000";
var GroupService = (function () {
    function GroupService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.groups = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    GroupService.prototype.getAllGroups = function () {
        return this.http.get(baseURL + "/groups")
            .map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    GroupService.prototype.updateItemGroup = function (itemId, newGroup) {
        return this.http.put(baseURL + "/items/" + itemId + "/updateGroup", newGroup, { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    GroupService.prototype.addNewGroup = function (newGroup) {
        return this.http.post(baseURL + "/groups/newGroup", newGroup, { headers: this.auth.headers })
            .map(function (response) {
            return response.json().groups;
        });
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var baseURL = "https://item-store.herokuapp.com";
// const baseURL = "http://localhost:3000";
var ItemService = (function () {
    function ItemService(http, route, auth) {
        this.http = http;
        this.route = route;
        this.auth = auth;
        this.sidenav = true;
        this.items = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.item = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
    }
    ItemService.prototype.createItem = function (model) {
        var _this = this;
        return this.http.post(baseURL + "/items/create", model, { headers: this.auth.headers })
            .map(function (response) {
            var resp = response.json();
            if (response.status === 500) {
                return { message: resp.err, status: 500 };
            }
            else {
                console.log(resp);
                _this.item.next(resp);
            }
        });
    };
    ItemService.prototype.getItemsCreatedByUser = function () {
        return this.http.get(baseURL + "/items/createdBy", { headers: this.auth.headers })
            .map(function (response) {
            var resp = response.json();
            return resp;
        });
    };
    ItemService.prototype.editItem = function (item) {
        var _this = this;
        return this.http.put(baseURL + "/items/edit/item/" + item._id, item, { headers: this.auth.headers })
            .map(function (response) {
            var resp = response.json();
            console.log(resp);
            _this.item.next(resp);
        });
    };
    ItemService.prototype.getPendingItems = function () {
        return this.http.get(baseURL + "/items/pending", { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.getIncompleteItems = function () {
        return this.http.get(baseURL + "/items/incomplete", { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.approveItem = function (itemId) {
        return this.http.put(baseURL + "/items/" + itemId + "/approve", {}, { headers: this.auth.headers })
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    ItemService.prototype.getItemsByGroup = function (group) {
        return this.http.get(baseURL + "/items/groupedBy/" + group, { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    ItemService.prototype.rateItem = function (rating, itemId) {
        return this.http.post(baseURL + "/items/rate/" + itemId, { rating: rating }, { headers: this.auth.headers })
            .map(function (response) {
            return response.json().item;
        });
    };
    ItemService.prototype.deleteItem = function (itemId) {
        return this.http.delete(baseURL + "/items/remove/" + itemId, { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseURL = "https://item-store.herokuapp.com";
// const baseURL = "http://localhost:3000";
var MailService = (function () {
    function MailService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    MailService.prototype.sendMail = function (message, to) {
        return this.http.post(baseURL + "/mail/send", { message: message, to: to }, { headers: this.auth.headers })
            .map(function (response) {
            return response.json().msg;
        });
    };
    MailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var baseURL = "https://item-store.herokuapp.com";
// const baseURL = "http://localhost:3000";
var UserService = (function () {
    function UserService(http, route) {
        this.http = http;
        this.route = route;
        this.TOKEN_KEY = 'Token';
        this.message = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.isLoggedIn = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.isVerified = false;
        this.admin = false;
        this.authToken = undefined;
        this._id = '';
        this.name = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.username = '';
        this.email = '';
        this.myGroups = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    /**
     * Use the credentials for
     * @param credentials
     */
    UserService.prototype.useCredentials = function (credentials) {
        this.isLoggedIn.next(true);
        this.username = credentials.username;
        this.authToken = credentials.token;
        this.admin = credentials.admin;
        this._id = credentials._id;
        this.name.next(credentials.name);
        this.email = credentials.email;
        // Set the token as header for your requests!
        this.headers.append('x-access-token', this.authToken);
    };
    /**
     * Store the user credentials in local storage and use them
     * @param credentials
     */
    UserService.prototype.storeUserCredentials = function (credentials) {
        // this.local.storeObject(this.TOKEN_KEY, credentials);
        this.useCredentials(credentials);
    };
    /**
     * Destroy credentials on logout
     */
    UserService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.username = '';
        this.admin = false;
        this.isLoggedIn.next(false);
        this.name.next('');
        this.headers.delete('x-access-token');
        // this.local.remove(this.TOKEN_KEY);
    };
    /**
     * Register the user based on model data
     * @param model
     */
    UserService.prototype.register = function (model) {
        var _this = this;
        this.message.next('');
        return this.http
            .post(baseURL + '/users/register', model, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.message.next('');
            _this.login({ username: model.username, password: model.password });
        })
            .catch(function (error) {
            _this.message.next(error.json().err);
        });
    };
    /**
     * Log in the user based on model data
     * @param model
     */
    UserService.prototype.login = function (model) {
        var _this = this;
        this.message.next('');
        return this.http.post(baseURL + '/users/login', model, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.message.next('');
            _this.storeUserCredentials({
                name: response.json().name,
                username: model.username,
                token: response.json().token,
                admin: response.json().admin,
                _id: response.json()._id,
                email: response.json().email
            });
            _this.route.navigateByUrl('/dashboard');
        })
            .catch(function (err) {
            console.log(err.json().err.message);
            _this.message.next(err.json().err.message);
        });
    };
    /**
     * Logout the user from the current session
     */
    UserService.prototype.logout = function () {
        var _this = this;
        return this.http.get(baseURL + '/users/logout').toPromise()
            .then(function (response) {
            _this.destroyUserCredentials();
            _this.route.navigateByUrl('/login');
        });
    };
    UserService.prototype.editProfile = function (model) {
        var _this = this;
        return this.http.put(baseURL + "/users/edit/" + this._id, model, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.message.next('');
            _this.name.next(response.json().name);
            console.log(response.json().name);
        })
            .catch(function (err) {
            console.log(err);
            _this.message.next(err.json().err.message);
        });
    };
    UserService.prototype.getMyGroups = function () {
        return this.http.get(baseURL + "/users/myGroups", { headers: this.headers })
            .map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    UserService.prototype.updateMyGroups = function (data) {
        return this.http.put(baseURL + "/users/updateGroups", data, { headers: this.headers })
            .map(function (response) {
            console.log(response);
            return response.json().groups;
        });
    };
    UserService.prototype.getUser = function (uid) {
        return this.http.get(baseURL + "/users/" + uid, { headers: this.headers })
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get(baseURL + "/users/getAll", { headers: this.headers })
            .map(function (response) {
            return response.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map