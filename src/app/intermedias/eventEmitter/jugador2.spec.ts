import { Jugador2 } from "./jugador2"

describe('jugador2 emit', ()=> {
    let jugador: Jugador2;
    beforeEach(()=> {
        jugador = new Jugador2();
    })
    it('debe de emitir un evento cuando hace daño ', ()=> {

        let nuevoHP = 0;

        //escucha cuando se ejecute el event emiter
        jugador.hpCambia.subscribe(hp => {
            nuevoHP = hp;
        });
        jugador.recibedanio(1000);

        expect(nuevoHP).toBe(0)
    })
})