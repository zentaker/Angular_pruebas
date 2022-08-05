import { EventEmitter } from "@angular/core";

export class Jugador2 {
    hp: number;
    //emite un evento que recive un number
    hpCambia = new EventEmitter<number>();
    constructor(){
        this.hp = 100
    }
    recibedanio(danio: number){
        if (danio >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - danio;
        }

        this.hpCambia.emit(this.hp);
    }
}