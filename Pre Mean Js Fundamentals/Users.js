// User languages and interests
// Notice that in the code snippet below, we have an array of users. Each user is an object. 
// Each user has the key languages, which is associated with an array of strings. 
// Each user also has the key interests, which is associated with an object. 
// There are varying keys within this interests object, and each of those keys is associated with an array of strings.

users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    },
    {
        fname: "Deus",
        lname: "Ex",
        languages: ["Augmented", "English"],
        interests: {
            None: ["Noooo, I never chose this"],
        }
    }
]


function printUsers(indx) {
    var s = ''
    for (var i = 0; i < indx.length; i++) {
        indx[i].languages[indx[i].languages.length - 1] = "and ".concat(indx[i].languages[indx[i].languages.length - 1]) //joins the languages together
        s += indx[i].fname + " " + indx[i].lname + " knows " + indx[i].languages.join(", ") + "\n"
        //searches through the first loop for the languages

        var arr = []
        for(var j = 0; j < Object.keys(indx[i].interests).length; j++){
            //looks for the index --> names 
            for(var k = 0; k < indx[i].interests[Object.keys(indx[i].interests)[j]].length; k++)
            //pulls interests togethere
                arr.push(indx[i].interests[Object.keys(indx[i].interests)[j]][k])
                //pusshes the interests
        }
        arr[arr.length - 1] = "and ".concat(arr[arr.length - 1])
        //concats the interests
        s += indx[i].fname + " is also interested in " + arr.join(', ') + '\n'
    }
    return s
}

console.log(printUsers(users))