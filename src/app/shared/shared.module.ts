import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { CustomizerComponent } from './customizer/customizer.component';
import { CommondataService } from './commondata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective, CustomizerComponent,
        NgbModule,
        HttpClientModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective, CustomizerComponent, 
    ],
  providers:[CommondataService]
    
})
export class SharedModule { }
