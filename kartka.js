import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context

kaboom();

loadSprite("tlo","kartkaswiateczna2.png")
loadSprite("obrazek","zadanie.png")
loadSound("muzyka","dzisiaj.mp3")

// add a piece of text at position (120, 80)
// add([
//     text("hello"),
//     pos(120, 80),
// ]);

add([
    sprite("tlo"),
    pos(0,0)
])

const obrazek = add([
    sprite("obrazek"),
    pos(200,50)
])

onUpdate(()=>{
   if(obrazek.pos.x<450)
    obrazek.pos.x=obrazek.pos.x+1
   
       
})

onKeyPress(("space"),()=>{play("muzyka")})
