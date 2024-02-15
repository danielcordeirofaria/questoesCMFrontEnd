import { UserRole } from "./UserRole.enum";
import { ColegioEnum } from "./colegio.enum";

export class Usuario {
  nome: string = "";
  email: string = "";
  login: string = "";
  password: string = "";
  dataNascimento: string = "";
  cidade: string = "";
  whatsapp: string = "";
  dataCompra: Date | null = new Date(); // Atribui a data de hoje
  escolaDaProva: ColegioEnum | undefined;
  role: UserRole = UserRole.USER;
}
