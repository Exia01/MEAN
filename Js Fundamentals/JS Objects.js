// Challenge 1
let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];
// // console.log(Object.keys(students[0])[0]);

function printNames(indx) {
    var s = '';
    for (let i = 0; i < indx.length; i++) {
        s += Object.keys(indx[i])[0] + ": " + indx[i].name + ", " + Object.keys(indx[i])[1] + ": " + indx[i].cohort + "\n" //puts together all the results on one string
        //all in seperate lines 
        //key plus values 
    }
    function toTitleCase(b) {
        return b.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    return toTitleCase(s)
}
console.log(printNames(students));

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};



function printNames2(indx) {
    let s = ""
    let a = "\n"
    for (key in indx) {
        s += a + key + "\n" + a
        for (let i = 0; i < indx[key].length; i++) {
            let z = indx[key][i].first_name.length + indx[key][i].last_name.length
            s += i + 1 + " - " + indx[key][i].first_name + " " + indx[key][i].last_name + " - " + z + "\n"
        }
    }
    function toTitleCase(b) {
        return b.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    return toTitleCase(s)
}

console.log(printNames2(users));

// let users = {
//     employees: [
//         {'first_name':  'Miguel', 'last_name' : 'Jones'},
//         {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
//         {'first_name' : 'Nora', 'last_name' : 'Lu'},
//         {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
//     ],
//     managers: [
//        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
//        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
//     ]
//  	};
	
// 		function staff(arr){
// 			let i = "";
// 			for(x = 0; x < arr.length; x++){
// 				console.log(x, " - " + arr[x].first_name + ' ' + arr[x].last_name + " - " , arr[x].first_name.length + arr[x].last_name.length)
// 				i += x + 1 + " - " + arr[x].first_name + " " + arr[x].last_name + " - " + (arr[x].first_name.length + arr[x].last_name.length) + "\n"
// 		}
// 		return i; 
// 	}
// 	console.log(staff(users.employees))
// 	// console.log(staff(users.managers));