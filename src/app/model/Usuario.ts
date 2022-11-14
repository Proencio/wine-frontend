export interface IUsuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    img: string;
    ativo: boolean;
    telefone: string;
    perfil: string;
    data: Date;
  }
  
  export class IUsuarioDTO {
    id: string;
    nome: string;
    email: string;
    senha: string;
    img: string;
    ativo: boolean;
    telefone: string;
    perfil: string;
    data: Date;
  
    constructor(formValue: IUsuario) {
      this.id = formValue.id;
      this.nome = formValue.nome;
      this.email = formValue.email;
      this.senha = formValue.senha;
      this.img = formValue.img;
      this.ativo = formValue.ativo;
      this.data = formValue.data;
      this.telefone = formValue.telefone;
      this.perfil = formValue.perfil;
    }
  }