import java.util.Scanner; // começa com um pacote

public class entrada { // classe principal

  public static void main(String[] args) {

    int i;
    double d;
    String line; //declaração de uma linha
    Scanner in = new Scanner(System.in); // declaração de Scanner
    System.out.println("Digite alguma coisa");
    line = in.nextLine(); // salva o que o user digitar na var line
    System.out.println("Vc disse" + line + "continua");
    //line toUpperCase() // tranforma em maisculas

  }
}

