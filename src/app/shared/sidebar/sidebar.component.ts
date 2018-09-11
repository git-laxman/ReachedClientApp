import { Component, OnInit } from '@angular/core';
import { ROUTES, SUPERROUTES, APPLICATIONOWNERROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {

        
        $.getScript('./assets/js/app-sidebar.js');
       
         if(this.route.snapshot.url[0].path==="superadmin")
         {
            
            this.menuItems = SUPERROUTES.filter(menuItem => menuItem);

         }else if(this.route.snapshot.url[0].path==="applicationowneradmin"){
            this.menuItems = APPLICATIONOWNERROUTES.filter(menuItem => menuItem);
         }
         else
         {
            this.menuItems = ROUTES.filter(menuItem => menuItem);
         }

        
    }

    //NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }
}
