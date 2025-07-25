import { Page, Locator } from '@playwright/test';
import * as path from 'path';
import { AppBasePage } from '../app.base.po';

export class AppProdutoPage extends AppBasePage {
  nome: Locator;
  descricao: Locator;
  valor: Locator;
  ativo: Locator;
  botaoProduto: Locator;
  imagemInput: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.nome = page.locator('#nome');
    this.descricao = page.locator('#descricao');
    this.valor = page.locator('#valor');
    this.ativo = page.locator('#ativo');
    this.botaoProduto = page.locator('#cadastroProduto');
    this.imagemInput = page.locator('#imagem');
  }

  async navegarParaProdutos() {
    await this.navegarViaUrl('/produtos/listar-todos');
  }

  async navegarParaNovoProduto() {
    await this.navegarPorLink('Novo Produto');
  }

  async iniciarNavegacao() {
    await this.navegarParaHome();
    await this.login();
    await this.navegarParaProdutos();
  }

  async obterTituloProdutos(): Promise<string | null> {
    const titulo = this.page.locator('xpath=/html/body/app-root/produto-app-root/app-lista/div/h1');
    return await titulo.textContent();
  }

  async selecionarFornecedor(index: number = 2) {
    await this.page.waitForSelector('#fornecedorId');
    const options = await this.page.locator('#fornecedorId option').all();
    const value = await options[index].getAttribute('value');
    await this.page.selectOption('#fornecedorId', value);
  }

  async selecionarImagem() {
    const caminho = path.resolve(__dirname, 'imagem_teste.jpg');
    await this.imagemInput.setInputFiles(caminho);
  }
}