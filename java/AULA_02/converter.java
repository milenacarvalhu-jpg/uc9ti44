package AULA_02;

/*

    Converte centimetros para pés e polegadas

    adicionar a conversão de polegadas para pés.
    Formula: pes = polega
        
 */
import java.util.Scanner;

public class converter {

    public static void main(String[] args) {
        final double CM_PARA_POL =2.54; 
        final double POL_PARA_PES =12.0;
        double cm,pes;
        double polegadas;
        int pol;
        
        Scanner in = new Scanner(System.in);
        // fim da declarações:

        // entrada de dados:
        System.out.println("Digite um valor EXATO em cm");
        cm = in.nextDouble();

        //converter:
        polegadas = ( cm / CM_PARA_POL);
        pes = (polegadas / POL_PARA_PES );

        //casting:
        pol =(int)polegadas;
        polegadas = pol; //casting não necessário pois int está "contido"
        //no tipo double ""(mais complexo)""
        

        // saida de dados:
        System.out.printf("%.2f cm = %.2f pol = %.2f pés\n",polegadas,cm,pes);
        System.out.printf("%d essa é o valor da variavel pol\n",pol);
    }

}
