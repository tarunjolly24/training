let arr=[];

arr=[
    {
        name:'reyna',
        age:'22',
        salary:900,
        DOB:'22-02-1998',
    },
    {
        name:'Pheonix',
        age:'22',
        salary:200,
        DOB:'2-02-1998',
    },
    {
        name:'sage',
        age:'23',
        salary:400,
        DOB:'22-01-1997',
    },
    {
        name:'skye',
        age:'24',
        salary:17000,
        DOB:'22-02-1996',
    },
    {
        name:'sage',
        age:'20',
        salary:1000,
        DOB:'22-02-2000',
    },
    {
        name:'jack',
        age:'25',
        salary:1000,
        DOB:'2-09-1995',
    },
    {
        name:'joey',
        age:'28',
        salary:1500,
        DOB:'25-01-1992',
    },
    {
        name:'rayan',
        age:'30',
        salary:600,
        DOB:'22-02-1990',
    },
    {
        name:'raze',
        age:'27',
        salary:8000,
        DOB:'22-07-1993',
    },
    {
        name:'cypher',
        age:'22',
        salary:9500,
        DOB:'9-03-1998',
    },
]
// console.log(arr);
// console.log(arr.length);

// console.log(arr.filter((x)=>{
//     if(x['salary']>5000) return true;
// }))

// console.log(arr.filter((x)=>{
//     if(x['age']=='22')return true;
// }))

//group by done by presenter in doubt session
function groupByAge(empArray = []) {
    const groupedEmp = {}
    empArray.forEach(emp => {
        if (groupedEmp[emp.age]) {
            groupedEmp[emp.age].push(emp)
        } else {
            groupedEmp[emp.age] = [emp]
        }
    })

    return groupedEmp;
}

groupByAge(arr);

let filtered=arr.filter((x)=>{
    if(x['salary']<1000 && x['age']>20) return true;
})
// console.log(filtered)


console.log(arr.filter((x)=>{
    if(x['salary']<1000 && x['age']>20) return true;
}).map(function(x){
    return x['salary']=x['salary']*5;
}));
console.log(filtered)
