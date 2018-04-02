import { Vendedor } from './vendedor.model';
import { Produto } from './produto.model';

export class VendaRealizada {
    public produto: Produto;
    public vendedor: Vendedor;
    public cdVenda: number;
    public cdProduto: number;
    public cdVendedor: number;
    public qtdProduto: number;
    public dtVenda: string;
    public ttlVenda: number; 
}