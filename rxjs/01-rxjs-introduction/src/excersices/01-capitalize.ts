/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from, map } from "rxjs";

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() => {
  const names = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

  const capitalize = (name: string) => {
    return name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    // return name.toUpperCase();
  }

  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
  // for (let nombre of names) {
  //   console.log(capitalize(nombre))
  // }

  from(names).pipe(
    map(capitalize)
  ).subscribe(console.log);
})();
