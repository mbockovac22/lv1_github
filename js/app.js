

var btn = document.getElementById("sendButton");

btn.addEventListener("click", function() {
	$(table).find('tbody').insert("<tr><td>Neki Red</td><tr>");

}, false);

function Dodaj(){
	var table = document.getElementById("mainTable");
	var input1=document.getElementById("nazivPredmeta").value;
	var input2=document.getElementById("godina").value;
	var input3=document.getElementById("ECTS").value;
	var row = table.insertRow(1);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

cell1.innerHTML=input1;
cell2.innerHTML=input2;
cell3.innerHTML=input3;
}