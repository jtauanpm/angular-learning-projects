import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Produto, Fornecedor } from '../models/produto';
import { BaseService } from "../../services/base-api.service";

@Injectable({providedIn: 'root'})
export class ProdutoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.UrlServiceV1 + "/produtos", super.obterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Produto> {
        return this.http
            .get<Produto>(this.UrlServiceV1 + "/produtos/" + id, super.obterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoProduto(produto: Produto): Observable<Produto> {
        return this.http
            .post(this.UrlServiceV1 + "/produtos", produto, super.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarProduto(produto: Produto): Observable<Produto> {
        return this.http
            .put(this.UrlServiceV1 + "/produtos/" + produto.id, produto, super.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirProduto(id: string): Observable<Produto> {
        return this.http
            .delete(this.UrlServiceV1 + "/produtos/" + id, super.obterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    

    obterFornecedores(): Observable<Fornecedor[]> {
        return this.http
            .get<Fornecedor[]>(this.UrlServiceV1 + "/fornecedores")
            .pipe(catchError(super.serviceError));
    }
}
