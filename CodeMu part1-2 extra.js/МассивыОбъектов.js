// Самой распространенной многомерной структурой является 
// массив объектов. 
// У него есть некоторые особенности.

let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];

for(let user of users){
    console.log(`${user.name}  ${user.surn}`)
}