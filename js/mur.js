/*
 - Dibuix dels murs de totxo 
 - Tria de nivell i canvi de nivell per botons 
 - Xoc amb els totxos del mur 
 - Xoc amb la pala 
 - Xoc vora inferior, perd vida i reinicialitza 
 - Detecta el final del mur, passant al següent nivell - ???
 - Gestiona el temps de l'animació, parant quan es canvia de mur. - ???
*/

class Mur {
    constructor(given_width, given_height, totxo_height){
        this.colors();
        this.level=level;

        this.playground_width=given_width;
        this.playground_height=given_height;

        this.separacio= 5;//totxo_height;        
        this.totxo_height=totxo_height;
        this.totxo_width=null;
    }

    generate_totxos(level){
        this.level=level;
        this.totxo_width=(this.playground_width-(this.level.pos[0].length-1)*this.separacio)/(this.level.pos[0].length);

        let totxos=[],
            y_cord=40;
        for(let y=0; y<this.level.pos.length; y++){
            y_cord+=this.separacio;
            let x_cord=-this.separacio;
            for(let x=0; x<this.level.pos[y].length; x++){
                x_cord+=this.separacio;
                if(this.level.pos[y][x]!=" "){

                    totxos.push(new Totxo(
                        new Punt(
                            x_cord,
                            y_cord
                        ), 
                        this.totxo_width, this.totxo_height, this.colors[this.level.pos[y][x]]
                    ));
                }
                x_cord+=this.totxo_width;

                // console.log("TOTXO:" ,x_cord, y_cord);
            }
            y_cord+=this.totxo_height;
            // console.log("FI FILA")
        }
        this.totxos=totxos;
        return totxos;
    }

    colors(){
        this.colors={
            "r":"#9e1e0f",
            "g":"#0a8236",
            "b":"#00f",
            "y":"#c6c633",
            "k":"#f0f",
            "u":"#80f",
            "o":"#c28812"
        }
    }
}