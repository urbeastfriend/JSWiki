let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

employees.push({
    name: 'name4',
    salary: 600
})

let salarysum = 0;
for(employee of employees){
    salarysum+= employee.salary
}

console.log(salarysum)