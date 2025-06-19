package ejercicio;

import java.util.Scanner;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String aux, codTrab;
		int opcion, numOperaciones;
		double dinRec;
		
		Caja c = new Caja(7.00);
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("*************************************************************************");
		System.out.println("¡BIENVENIDO AL PROGRAMA QUE GESTIONA LA CAJA DE GANANCIAS DE UNA TIENDA!");
		System.out.println("*************************************************************************");
		
		try {
			do {
				
				System.out.println("""
						\n--------------------------------------------
						SELECCIONE UNA OPCIÓN
						--------------------------------------------
						1 - Hacer de empleado.
						0 - Salir.
						--------------------------------------------
						""");
				
				aux=sc.nextLine();
				opcion=Integer.parseInt(aux);
		
				switch(opcion) {
				
					case 1:
						try {
							System.out.println("Para empezar, introduzca su código de trabajador:");
							codTrab=sc.nextLine();
							//El código de trabajador es: "4lam".
							
							//c.comprobarCodigoTrabajador(codTrab);		Este método funciona raro.
							
							System.out.println("Introduzca la cantidad de dinero recaudado:");
							aux=sc.nextLine();
							dinRec=Double.parseDouble(aux);
							
							c.comprobarDineroRecaudado(dinRec);
							
							System.out.println("Introduzca el número de operaciones realizadas durante el día");
							aux=sc.nextLine();
							numOperaciones=Integer.parseInt(aux);
							
							c.calcularOperaciones(numOperaciones);
							
							System.out.println("\nTodo en orden.");
							
						}catch(CodeException ce) {
							System.out.println(ce.getMessage());
						}catch(CashException e) {
							System.out.println(e.getMessage());
						}catch(OperationNumberException e) {
							System.out.println(e.getMessage());
						}catch(NumberFormatException e) {
							System.out.println("¡Necesita introducir un dato!");
						}catch(RuntimeException e) {
							System.out.println("¡Necesita introducir un elemento para responder!");
						}
						
					case 0:
						break;
					
					default:
						System.out.println("El número introducido no está disponible ¡ESCOJA OTRO!");
						break;
				}
	
			}while(opcion!=0);
		}catch(Exception e){
			System.out.println("¡Necesita introducir un número para acceder a las opciones del menú!");
		}
		
		System.out.println("*******************************************************");
		System.out.println("¡GRACIAS POR USAR EL PROGRAMA! MÁQUINA RECAUDADORA. :P");
		System.out.println("*******************************************************");
		
	}

}
