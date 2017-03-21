import {Component, Input, Output } from '@angular/core';

@Component({
    selector:"box",
    template : `<div class="box">
                    <div class="box-header">
                    <!-- header slot here -->
                        <ng-content select="box-header"></ng-content>
                    </div>
                    <!-- body slot here -->
                    <ng-content select="box-body"></ng-content>
                    <div class="box-footer">
                    <!-- footer -->
                        <ng-content select="box-footer"></ng-content>
                    </div>
                </div>`,
})

export class Box {
    @Input() headerText:string;
    @Input() footerText:string;
}
