async function EditStat(character, i, putter, callback) {
	let data = character.stats[i];
    console.log(data);
	let content = await make(`<div class="stat editstat">
    <span> name: ${ data.name } </span> 
    <span> value: ${ ph() } </span> 
    </div>`,
							 //new EditorFor(data.name, "string", putter("name", callback, data)),
							 new EditorFor(data.value, "number", putter(["stats", i, "value"], callback))
							);
	
	return content;
}