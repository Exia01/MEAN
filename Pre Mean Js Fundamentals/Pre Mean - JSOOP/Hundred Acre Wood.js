var tigger = { character: "Tigger" }; 
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};       
var owl = { character: "Owl"};
var christopher = { character: "Cristopher Robin"};
var rabbit = { character: "Rabbit"};
var bees = { character: "bees" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore"};
var heffalumps = { character: " Heffalumps" };
var player = {
    location: tigger
}
function move(str){
   
    if(str = 'north'){
         player = player.location.str;
    console.log("You are now at " + player + "'s" +  " House.")

}
}
// move('north')
console.log(player.location.character)

tigger.north = pooh;

pooh.west = piglet;
pooh.east = bees;
pooh.north = christopher;
pooh.south = tigger;

piglet.north = owl;
piglet.east = pooh;

owl.south = piglet;
owl.east = christopher;

christopher.west = owl;
christopher.north = kanga;
christopher.east = rabbit;
christopher.south = pooh;

rabbit.west = christopher;
rabbit.east = gopher;
rabbit.south = bees;

bees.west = pooh;
bees.north = rabbit;

gopher.west = rabbit;

kanga.south = christopher;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;
// console.log(christopher)