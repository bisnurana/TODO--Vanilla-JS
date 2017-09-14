(function(){

var addList = document.getElementById('addList');
var itemList = document.getElementById('itemList');
var searchFilter = document.getElementById('search-filter');


addList.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
searchFilter.addEventListener('keyup', filterLists);




function addItem(e){
	var newItem = document.getElementById('item').value;
	e.preventDefault();

	if(newItem !== "") {


		var li = document.createElement('li');
		li.className = 'list-group-item';
		li.appendChild(document.createTextNode(newItem));
		itemList.appendChild(li);

		var delBtn = document.createElement('button');
		delBtn.className = 'btn btn-danger btn-sm text-white float-right delete';
		delBtn.appendChild(document.createTextNode('Delete'));
		li.appendChild(delBtn);

		var edtBtn = document.createElement('button');
		edtBtn.className = 'btn btn-warning btn-sm mr-1 text-white float-right edit';
		edtBtn.appendChild(document.createTextNode('Edit'));
		li.appendChild(edtBtn);
		addList.reset();

	}

	
}

function removeItem(e){
	if(e.target.classList.contains('delete')) {
		var li = e.target.parentElement;
		itemList.removeChild(li);
	}
}


function filterLists(e){
	var txt = e.target.value.toLowerCase();
	var allItems = itemList.getElementsByTagName('li');
	Array.from(allItems).forEach(function(item){
		var itemName = item.firstChild.textContent;

		if(itemName.toLowerCase().indexOf(txt) !== -1){
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});

}

})();