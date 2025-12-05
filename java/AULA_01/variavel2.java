public class variavel2 {
    public static void main(String[] args) {
        String teste, teste1;
        teste = "Hello";
        teste1 = "world";
        /*
         * Não pode
         * "Hello"
         * "mundo" / 123
         * "Hello" * "Mundo"
         */
        System.out.println(1 + 2 + "Hello");//3hello
        System.out.println("Hello" + 1 + 2); //hello12
        //imprimir Hello world usando as var teste e teste
        System.out.println(teste + " " + teste1);
        System.out.println(teste.length());

    }

}
