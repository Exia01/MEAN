var tigger = {
    character: "Tigger",
    greet: function () {
        return "You wanna know something kid? ..Bush did 9/11";
    }
};

var pooh = {
    character: "Winnie the Pooh",
    greet: function () {
        return "Hey what are you doing with that honey?!";
    }
};

var piglet = {
    character: "Piglet",
    greet: function () {
        return "Ellow There! Wait, whose honey is that???";
    }
};

var owl = {
    character: "Owl",
    greet: function () {
        return "Hoot hoot!";
    }
};

var christopher = {
    character: "Cristopher Robin",
    greet: function () {
        return 'Suhhh dude "\n" Wait...drop the honey!';
    }
};

var rabbit = { 
    character: "Rabbit",
    greet: function () {
        return "It's all fun and games, until they try to get my feet for luck.";
    }
};
var bees = { 
    character: "bees",
    greet: function () {
        return "So that's where the honey went? :o";
    }
};
var gopher = { 
    character: "Gopher",
    greet: function () {
        return "I can make a damm! All by meself mate.";
    } 
};
var kanga = { 
    character: "Kanga",
    greet: function () {
        return "Best pouches in the market, I guarantee it.";
    }

};
var eeyore = { 
    character: "Eeyore",
    greet: function () {
        return "I am not auditioning again.";
    }
 };

var heffalumps = { 
    character: " Heffalumps",
    greet: function () {
        return "You made it! Wait, whose honey is that?";
    }
 };

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

var player = {
    location: tigger
}

function move(str) {
    switch (str) {
        case 'north':
            if (player.location.north) {
                player.location = player.location.north
                str = "You are at " + player.location.character + " 's" + " house";
                break
            }
            else {
                return "You shall not pass! '\n' but like for real, you can't go there"
                break;
            }
        case 'south':
            if (player.location.south) {
                player.location = player.location.south
                str = "You are at " + player.location.character + " 's" + " house"
                break
            }
            else {
                return "You shall not pass! '\n' but like for real, you can't go there"
                break
            }
        case 'east':
            if (player.location.east) {
                player.location = player.location.east
                str = "You are at " + player.location.character + " 's" + " house"
                break
            }
            else {
                str = "You shall not pass! '\n' but like for real, you can't go there"
                break
            }
        case 'west':
            if (player.location.west) {
                player.location = player.location.west
                str = "You are at " + player.location.character + " 's" + " house"
                break
            }
            else {
                str = "You shall not pass! '\n' but like for real, you can't go there"
                break
            }
        default:
            return "INVALID COMMAND"
    }
    return str.concat("\n" + player['location'].greet())
}