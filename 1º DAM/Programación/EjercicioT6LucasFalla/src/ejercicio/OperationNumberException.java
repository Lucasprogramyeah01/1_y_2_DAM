package ejercicio;

public class OperationNumberException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public OperationNumberException() {
		super();
	}
	
	public OperationNumberException(String mensaje) {
		super(mensaje);
	}
}
