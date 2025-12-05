package AULA_02;

import java.util.Scanner;

public class scanbug {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        String nome;
        int idade;

        System.out.print("Digite a sua idade ");
        idade = in.nextInt();
        in.nextLine();
        System.out.print("Digite o seu nome ");
        nome = in.nextLine();

        System.out.printf("Olá %s, sua idade e: %d,\n",nome,idade);
    }
    
}
