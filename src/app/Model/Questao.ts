export class Questao{

    public idQuestao: number;
    public codigoQuestao: string;
    public escolaDaProva: string;
    public anoProva: string;
    public numeroQuestao: number;
    public enunciado: string;
    public respostaA: string;
    public respostaB: string;
    public respostaC: string;
    public respostaD: string;
    public respostaE: string;
    public gabarito: string;
    public materia: string;
    public enderecoVideo: string;

    public constructor(){
        this.idQuestao = 0;
        this.codigoQuestao = "";
        this.escolaDaProva = "";
        this.anoProva = "";
        this.numeroQuestao = 0;
        this.enunciado = "";
        this.respostaA = "";
        this.respostaB = "";
        this.respostaC = "";
        this.respostaD = "";
        this.respostaE = "";
        this.gabarito = "";
        this.materia = "";
        this.enderecoVideo = "";
    }
}