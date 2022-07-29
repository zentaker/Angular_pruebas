//sirve para agrupar pruebas 
//describe('pruebas de string');
//es una prueba 
//it('deve de regresar un string');

import { mensaje } from "./string"



describe('pruebas de string', ()=>{
    //el mensaje claro que describa la prueba
    it('deve de regresar un string', ()=> {
        //disparar el codigo para evaluar 
        const resp = mensaje('Alejandro');
        //espera que la respuesta es
        expect(typeof resp).toBe('string');
    })
    it('deve retornar con el nombre enviado', ()=> {
        const nombre = 'juan';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre)
    })
})