import { incrementar } from "./numeros"

describe('pruebas de numeros', ()=>{
    it('Deve de retonrar 100 si es mayor a 100', ()=> {
        const res = incrementar(300);
        expect(res).toBe(100);
    })
    it('Deve de retonrar el numero mas 1 si no es mayor a 100', ()=> {
        const res = incrementar(50);
        expect(res).toBe(51);
    })
})