/*
 - Control de la puntuació 
 - Persistència puntuació

 results
*/

class Display {
    // static?
    static showScreen(i) {
        if($(i).css("display")=="none"){
            $(i).css("display", "block");
        }
    }
    static hideScreen(i) {
        if($(i).css("display")=="block"){
            $(i).css("display", "none");
        }
    }


    static updatePunts(punts){
        Display.blink($("#punts"),100, 1);
        $("#punts").text((punts+1000).toString().slice(1));
    }
    static updateVides(vides){
        Display.blink($("#vides"));
        $("#vides").text((vides+1000).toString().slice(1));
    }

    static blink(element, speed=100, times=3){
        for(let x=0; x<times; x++){
            element.fadeOut(speed).fadeIn(speed);
        }
    }

    static setSound(v){
        // $("#sound_val").text(v ? "🔊":"🔇");
        $("#sound_val img").attr("src",v ? "img/sound_on.png":"img/sound_off.png");
    }


    static updateLevel(l){
        $("#level-info span").text(l);
    }
}