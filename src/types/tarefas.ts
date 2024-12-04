export interface ITarefa {
    nome: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    desabilitado?: boolean,
    id: string
}