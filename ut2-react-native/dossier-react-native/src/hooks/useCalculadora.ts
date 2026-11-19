import { useState } from 'react';

export function useCalculadora() {
  const [pantalla, setPantalla] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);
  const [reiniciarPantalla, setReiniciarPantalla] = useState(false);

  const pulsarNumero = (digito: string) => {
    if (pantalla === '0' || reiniciarPantalla) {
      setPantalla(digito);
      setReiniciarPantalla(false);
    } else {
      setPantalla(pantalla + digito);
    }
  };

  const pulsarOperacion = (op: string) => {
    setNumeroAnterior(parseFloat(pantalla));
    setOperacion(op);
    setReiniciarPantalla(true);
  };

  const calcularResultado = () => {
    if (numeroAnterior === null || operacion === null) return;
    const actual = parseFloat(pantalla);
    let resultado = 0;

    switch (operacion) {
      case '+': resultado = numeroAnterior + actual; break;
      case '-': resultado = numeroAnterior - actual; break;
      case '*': resultado = numeroAnterior * actual; break;
      case '/': resultado = actual !== 0 ? numeroAnterior / actual : 0; break;
    }

    setPantalla(String(resultado));
    setNumeroAnterior(null);
    setOperacion(null);
    setReiniciarPantalla(true);
  };

  const limpiar = () => {
    setPantalla('0');
    setNumeroAnterior(null);
    setOperacion(null);
    setReiniciarPantalla(false);
  };

  return {
    pantalla,
    pulsarNumero,
    pulsarOperacion,
    calcularResultado,
    limpiar,
  };
}
