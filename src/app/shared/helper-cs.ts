
import {Component,Injectable } from "@angular/core";

@Injectable()
export class HelperC {

DataEncoding(obj)
{
    debugger;
        var p = [];
        for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
}

}
