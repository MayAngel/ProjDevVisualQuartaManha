export interface Operacao {
  id?: number;
  usuarioid: number;
  corretoraid: number;
  papelid: number;
  tipooperacaoid: number;
  valorUnitario: number;
  quantidade: number;
  valorTotal: number;
  CreateDate?: string;
  LastUpdateDate?: string;
}
