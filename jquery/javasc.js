var person = [
    {
    Name : "Nihit",
    Salary : 3000
   },
    {
   Name : "Aarav",
   Salary: 200 
   },
   {
   Name : "Akash",
   Salary: 400
   },
    ];
    let name1 = [];
    for (i in person)
    {
        if (person[i].Salary > 200)
        {
            name1.push(person[i].Name)
        }
    }
    console.log(name1);
