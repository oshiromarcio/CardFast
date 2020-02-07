public void ValidaCartao()
{
	// Aqui é utilizado o procedimento Números mostrado anterior-
	//mente
	String numCartao = Numeros(txtNumCartao.get_Text());
	String numString;       
	int soma = 0;
	//Cartão com seqüências de caracteres menor ou igual a 15 dígitos
	if (numCartao.length() <= 15)
	{
		for(int i = 0; i <= numCartao.length(); i++)
		{
			numString = (numCartao.substring(i,i+1));
			if (i % 2 == 0)
			{
				Soma += (Integer.parseInt(numString) * 1);
			}
			else
			{
				if ((Integer.parseInt(numString) * 2) > 9)
				{
					Soma += ((Integer.parseInt(numString) * 2) - 9);
				}
				else
				{
					Soma += ((Integer.parseInt(numString) * 2));
				}
			}
		}
	}
	//Cartão com seqüências de caracteres maior ou igual a 16 dígitos
	if (numCartao.length() >= 16)
	{
		for(int i = 0; i <= numCartao.length(); i++)
		{
			numString = (numCartao.substring(i,i+1));
			if (i % 2 == 0)
			{                            
				if ((Integer.parseInt(numString) * 2) > 9)
				{
					Soma += ((Integer.parseInt(numString) * 2) - 9);
				}
				else
				{
					Soma += ((Integer.parseInt(numString) * 2));
				}
			}
			else
			{
				Soma +=(Integer.parseInt(numString) * 1);
			}
		}
	}
	if (soma % 10 == 0)
	{
		txtStatus.set_Text("Cartão valido!");
	}
	else
	{
		txtStatus.set_Text("Cartão invalido!");
	}
}