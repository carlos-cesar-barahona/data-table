    
	//IMPLEMENT EXAMPLE
const headers = [
	"Header 1",
	"Header 2",
	"Header 3",
	...
	"Options",
];

const columns = [
	{ type: 'int', value: FIELD_1 },
	{ type: 'int', value: FIELD_1 },
	{ type: 'string', value: [FIELD_1, FIELD_2] }, //RESULT: FIELD_1 - FIELD_2
	...
	{ type: 'buttons', value: ''}, //BUTTONS OR ICONS FOR OPTIONS HEADER

];
DataTable().init({
	element: "#my-div",
	items: values,
	headers: headers,
	columns: columns,
	itemsPerPage: 15,
	filters: true,
	extraFilters: false,
});