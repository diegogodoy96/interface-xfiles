function iluminar (fila) 
{
	//modifico el color de fondo
	fila.style.background = '#365c55';

}

function apagar (fila) 
{
	//modifico el color de fondo
	fila.style.background = '';	
}

function pintar (celda) 
{
	if (celda.style.background == '#365c55') 
	{
		celda.style.background = '';
	} 
	else
	{
		celda.style.background = '#365c55';
	}
}