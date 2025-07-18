import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';

import { BaseGuard } from '../../services/base.guard';
import { NovoComponent } from '../novo/novo.component';

@Injectable({providedIn: 'root'})
export class ProdutoGuard extends BaseGuard implements CanActivate, CanDeactivate<NovoComponent> {
    constructor(protected override router: Router){ super(router) }

    canDeactivate(component: NovoComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }        
        return true
    }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return super.validarClaims(routeAc);
    }
}