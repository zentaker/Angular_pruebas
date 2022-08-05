import { JUgador } from "./clase"

describe('Pruebas de clase', ()=> {
    const jugador = new JUgador();
    afterEach( ()=>{
        jugador.hp = 100;
    })
    it('debe de retornar 80, si recibe 20', ()=> {
        
        const resp = jugador.recibedanio(20);

        expect(resp).toBe(80)
    })
    xit('debe de retornar 50, si recibe 50', ()=> {
        
        const resp = jugador.recibedanio(50);

        expect(resp).toBe(50)
    })
    it('debe de retornar 0, si recibe mas d 100', ()=> {
        
        const resp = jugador.recibedanio(100);

        expect(resp).toBe(0)
    })

})