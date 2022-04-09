export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.itAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
     
    static itAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function;
    }
}