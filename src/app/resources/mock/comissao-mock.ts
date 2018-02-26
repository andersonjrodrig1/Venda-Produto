import { Vendedor } from './../model/vendedor.model';
import { Comissao } from './../model/comissao.model';

export const COMISSAO: Comissao[] = [
  {
    vendedor: {
      cdVendedor: 1,
      nmVendedor: 'José',
      nrTelefone: '34 3434-3434'
    },
    vrTotalVenda: 100.00,
    vrComissao: 10.00
  },
  {
    vendedor: {
      cdVendedor: 1,
      nmVendedor: 'Joana',
      nrTelefone: '34 3434-3434'
    },
    vrTotalVenda: 100.00,
    vrComissao: 10.00
  },
  {
    vendedor: {
      cdVendedor: 3,
      nmVendedor: "João",
      nrTelefone: "34 99977-0909"
    },
    vrTotalVenda: 29.99,
    vrComissao: 2.99
  },
  {
    vendedor: {
      cdVendedor: 4,
      nmVendedor: "Maria",
      nrTelefone: "34 99232-3232"
    },
    vrTotalVenda: 29.99,
    vrComissao: 2.99
  }
];
