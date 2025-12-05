

import java.util.Scanner;

class Atividade1 {

 public static void main(String[] args) {
String Meunome; 
String MeusobreNome;

Scanner in = new Scanner(System.in); //declaração de Scanner

System.out.println("Digite seu nome");
Meunome = in.nextLine();
Meunome = Meunome.toUpperCase();

System.out.println("Digite seu sobrenome");
MeusobreNome = in.nextLine();
MeusobreNome = MeusobreNome.toUpperCase();


System.out.println(Meunome+ " " + MeusobreNome);

in.close();
    
 }

}
