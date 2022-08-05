import { obtenerRobots } from "./array"

describe('pruebas de arregleas ', ()=> {
    it('debe de retornar al menos 3 robots', ()=> {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    it('debe d existir Megaman y Ultron', ()=> {
        const res = obtenerRobots();
        expect(res).toContain('Megaman')
        expect(res).toContain('Ultron')
    })
})