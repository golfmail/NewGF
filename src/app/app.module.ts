import { LogReportComponent } from './log-report/log-report.component';
import { ReportReportComponent } from './report-report/report-report.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Kb02Component } from './kb02/kb02.component';
import { ImageButtonComponent } from './controls/image-button/image-button.component';
import { UserLoginProfileComponent } from './user-login-profile/user-login-profile.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { Kb021Component } from './kb02/kb02-1/kb02-1.component';
import { Kb022Component } from './kb02/kb02-2/kb02-2.component';
import { Kb023Component } from './kb02/kb02-3/kb02-3.component';
import { GridViewComponent } from './controls/grid-view/grid-view.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { LinkButtonComponent } from './controls/link-button/link-button.component';
import { CustomValidatorComponent } from './controls/custom-validator/custom-validator.component';
import { ValidationSummaryComponent } from './controls/validation-summary/validation-summary.component';
import { FooterStyleComponent } from './controls/footer-style/footer-style.component';
import { ItemStyleComponent } from './controls/item-style/item-style.component';
import { HeaderStyleComponent } from './controls/header-style/header-style.component';
import { CommandFieldComponent } from './controls/command-field/command-field.component';
import { BoundFieldComponent } from './controls/bound-field/bound-field.component';
import { ColumnsComponent } from './controls/columns/columns.component';
import { SelectedRowStyleComponent } from './controls/selected-row-style/selected-row-style.component';
import { ImageComponent } from './controls/image/image.component';
import { RequiredFieldValidatorComponent } from './controls/required-field-validator/required-field-validator.component';
import { LabelComponent } from './controls/label/label.component';
import { DropDownListComponent } from './controls/drop-down-list/drop-down-list.component';
import { ListItemComponent } from './controls/list-item/list-item.component';
import { AspButtonComponent } from './controls/asp-button/asp-button.component';
import { HiddenFieldComponent } from './controls/hidden-field/hidden-field.component';
import { ItemTemplateComponent } from './controls/item-template/item-template.component';
import { TemplateFieldComponent } from './controls/template-field/template-field.component';
import { RowStyleComponent } from './controls/row-style/row-style.component';
import { ControlValueBaseComponent } from './controls/control-value-base/control-value-base.component';
import { ListViewComponent } from './controls/list-view/list-view.component';
import { DropDownViewComponent } from './controls/drop-down-view/drop-down-view.component';
import { Tab } from './controls/drop-down-view/drop-down-view.interface';
import { ListDetailComponent } from './controls/list-detail/list-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { JsonpModule } from '@angular/http';
import { MdDialog,
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdDatepickerModule,
  MdInputModule,
  MdTabsModule,
  MdNativeDateModule} from '@angular/material';
import { DialogSearchComponent } from './controls/dialog-search/dialog-search.component';
import { MaterialModule } from '@angular/material';
import { forwardRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DialogSaveComponent } from './controls/dialog-save/dialog-save.component';
import { CheckWebComponent } from './web-browser/check-web/check-web.component';
import { HomeComponent } from './home/home.component';
import { LauncherComponent } from './launcher/launcher.component';


@NgModule({
  declarations: [
    AppComponent,
    Kb02Component,
    ImageButtonComponent,
    UserLoginProfileComponent,
    MenuLeftComponent,
    UserProfilesComponent,
    MenuTopComponent,
    FormHeaderComponent,
    Kb021Component,
    Kb022Component,
    Kb023Component,
    GridViewComponent,
    TextboxComponent,
    LinkButtonComponent,
    CustomValidatorComponent,
    ValidationSummaryComponent,
    FooterStyleComponent,
    ItemStyleComponent,
    HeaderStyleComponent,
    CommandFieldComponent,
    BoundFieldComponent,
    ColumnsComponent,
    SelectedRowStyleComponent,
    ImageComponent,
    RequiredFieldValidatorComponent,
    LabelComponent,
    DropDownListComponent,
    ListItemComponent,
    AspButtonComponent,
    HiddenFieldComponent,
    ItemTemplateComponent,
    TemplateFieldComponent,
    RowStyleComponent,
    ControlValueBaseComponent,
    ListViewComponent,
    DropDownViewComponent,
    ListDetailComponent,
    DialogSearchComponent,
    DialogSaveComponent,
    CheckWebComponent,
    LogReportComponent,
    ReportReportComponent,
    HomeComponent,
    LauncherComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    // MdDialog,
    MdButtonModule, MdCheckboxModule,
    MdTooltipModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    // ReactiveFormsModule
    MdToolbarModule,
    NgxPaginationModule
    //  JsonpModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogSearchComponent, DialogSaveComponent]
})
export class AppModule {
}
