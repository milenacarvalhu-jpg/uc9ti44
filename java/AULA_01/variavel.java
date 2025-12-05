
public class variavel {
   public static void main(String[] args) {
    //Declaração de variaveis:
    //let nome_var;
    //var nome_var;

    String nome;
    int x,y;
    String sobreNome;
    int hora, minuto;
    String mensagem;
    String mensagemNova;

    mensagem = "Olá, tudo bem?"; //atribuindo a String
    mensagemNova = "Olá, mais o menos! ";
                                // a variavel mensagem
    hora = 11; //atribuindo o valor 11 a var hora
    minuto = 56; // atribuindo o valor 56 a var minuto
    x=3;
    y=x; //qual o valor y aqui?
    System.out.println(mensagemNova);
        System.out.println(mensagem);

        System.out.println("A hora atual é: ");
        System.out.println(hora);
        System.out.println(":");
        System.out.println(minuto);
        System.out.println(".");



        System.out.println("Número de minutos total: ");
        System.out.println((hora * 60 ) + minuto);

   }
}
        



   
