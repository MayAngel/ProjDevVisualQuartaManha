export interface Operacao{
    id?: number;
    usuarioid: number;
    corretoraid: number;
    papelid: number;
    tipoOperacaoid: number;
    valorUnitario: number;
    quantidade: number;
    valorTotal: number;
    CreateDate?: string;
    LastUpdateDate?: string;
}
