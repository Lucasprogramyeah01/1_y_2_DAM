package ejercicio;

public class Caja {

	private double totalRecaudado;

	public Caja(double totalRecaudado) {
		super();
		this.totalRecaudado = totalRecaudado;
	}

	public double getTotalRecaudado() {
		return totalRecaudado;
	}

	public void setTotalRecaudado(double totalRecaudado) {
		this.totalRecaudado = totalRecaudado;
	}

	@Override
	public String toString() {
		return "Caja [totalRecaudado=" + totalRecaudado + "]";
	}
	
	//MÉTODOS
	
	public boolean comprobarCodigoTrabajador (String codTrab) throws CodeException{
		String regex = "[A-Z][0-9]{4}";		//De esta forma se puede utilizar expresiones regulares.
		
		if(codTrab.matches(regex)) {		//El método "matches" comprueba si el string dado se corresponde con la expresión regular impuesta.
			return true;
		}else {
			throw new CodeException("¡El código de un empleado debe de estar compuesto por una letra inicial y cuatro números!");
		}
	}
	
	public void comprobarDineroRecaudado(double dinRec) throws CashException{
		if(dinRec!=totalRecaudado) {
			throw new CashException("¡La cantidad de dinero introducida no se corresponde con lo recaudado en la caja!");
		}
	}
	
	public void calcularOperaciones(int numOperaciones) throws OperationNumberException{
		int cero=0;
		
		if(numOperaciones<cero) {
			throw new OperationNumberException("¡El número de operaciones no puede ser negativo!");
		}
	}
}
