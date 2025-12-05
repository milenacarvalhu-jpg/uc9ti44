package AULA_02;


import java.util.Scanner;

public class convert2 {

    static final double CM_PARA_POLEGADAS = 2.54;
    static final double POL_PARA_PES = 12.0;

    //variáveis-globais
    static double cm;
    static double polegadas;
    static double pes;
    
    public static void lerCentimetros() {
        Scanner in = new Scanner(System.in);
        System.out.println("Digite um valor EXATO em cm:");
        cm = in.nextDouble();
    }

    public static void converterParaPolegadas() {
        polegadas = cm / CM_PARA_POLEGADAS;
        System.out.printf("%.2f cm = %.2f polegadas\n", cm, polegadas);
    }

    public static void converterParaPes() {
        pes = polegadas / POL_PARA_PES;
        System.out.printf("%.2f polegadas = %.2f pés\n", polegadas, pes);
    }

    public static void main(String[] args) {

        lerCentimetros();               
        converterParaPolegadas();       
        converterParaPes();             
    }
}

