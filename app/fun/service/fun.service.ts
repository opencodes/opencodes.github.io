import { Injectable } from '@angular/core';

import {Fun} from './fun';
import {FUN} from './fun.moc.data';

@Injectable()
export class FunService{
    getFun():Fun[]{
        return FUN;
    }
}