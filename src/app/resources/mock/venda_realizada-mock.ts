import { VendaRealizada } from './../models/venda_realizada.model';
import { Produto } from './../models/produto.model';
import { Vendedor } from './../models/vendedor.model';

export const VENDA_REALIZADA: VendaRealizada[] = [
  {
    produto: {
      cdProduto: 1,
      nmProduto: "Camisa Regata",
      vrProduto: 29.99
    },
    vendedor: {
      cdVendedor: 1,
      nmVendedor: "João",
      nrTelefone: "34 99977-0909"
    },
    cdVenda: 2,
    cdProduto: 1,
    cdVendedor: 1,
    qtdProduto: 1,
    dtVenda: "2018-03-03",
    ttlVenda: 29.99
  },
  {
    produto: {
      cdProduto: 1,
      nmProduto: "Camisa Regata",
      vrProduto: 29.99
    },
    vendedor: {
      cdVendedor: 2,
      nmVendedor: "Maria",
      nrTelefone: "34 99232-3232"
    },
    cdVenda: 4,
    cdProduto: 1,
    cdVendedor: 2,
    qtdProduto: 1,
    dtVenda: "2018-03-03",
    ttlVenda: 29.99
  },
  {
    produto: {
      cdProduto: 2,
      nmProduto: "Calça Jeans",
      vrProduto: 100
    },
    vendedor: {
      cdVendedor: 1,
      nmVendedor: "José",
      nrTelefone: "34 99977-0909"
    },
    cdVenda: 2,
    cdProduto: 2,
    cdVendedor: 1,
    qtdProduto: 1,
    dtVenda: "2018-03-03",
    ttlVenda: 100
  },
  {
    produto: {
      cdProduto: 2,
      nmProduto: "Calça Jeans",
      vrProduto: 100
    },
    vendedor: {
      cdVendedor: 2,
      nmVendedor: "Joana",
      nrTelefone: "34 99232-3232"
    },
    cdVenda: 4,
    cdProduto: 2,
    cdVendedor: 2,
    qtdProduto: 1,
    dtVenda: "2018-03-03",
    ttlVenda: 100
  }
];