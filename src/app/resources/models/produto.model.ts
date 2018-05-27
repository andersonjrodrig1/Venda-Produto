export class Produto {
    public cdProduto: number;
    public nmProduto: string;
    public vrProduto: number;

    constructor(element: any) {
        this.cdProduto = element.cdProduto ? element.cdProduto : null;
        this.nmProduto = element.nmProduto ? element.nmProduto : null;
        this.vrProduto = element.vrProduto ? element.vrProduto : null;
    }
}