package ejercicio;

public class CashException extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CashException() {
		super();
	}
	
	public CashException(String mensaje) {
		super(mensaje);
	}
	
}
