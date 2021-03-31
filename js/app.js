/*

var btn = document.getElementById("sendButton");

btn.addEventListener("click", function() {
	$(table).find('tbody').insert("<tr><td>Neki Red</td><tr>");

}, false);
*/
function Pretrazi(){
	var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("trazeniPojam");
  filter = input.value.toUpperCase();
  table = document.getElementById("mainTable");
  tr = table.getElementsByTagName("tr");


for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}





function promjeniBoju(btn){
	if(document.getElementById('boja').checked){
		var row = btn.parentNode.parentNode;
  		row.style.backgroundColor='Blue';	
	}
	else{
	var row = btn.parentNode.parentNode;
  		row.style.backgroundColor='White';		
	}
	
	
}

function Obrisi(btn){
	 var row = btn.parentNode.parentNode;
  	row.parentNode.removeChild(row);
}


function Dodaj(){
	var table = document.getElementById("mainTable");
	var input1=document.getElementById("nazivPredmeta").value;
	var input2=document.getElementById("godina").value;
	var input3=document.getElementById("ECTS").value;
	var row = table.insertRow(1);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

cell1.innerHTML=input1;
cell2.innerHTML=input2;
cell3.innerHTML=input3;
cell4.innerHTML="<button type='button' onclick='Obrisi(this)' id='obrisiButton'>Obrisi</button>";
cell5.innerHTML="<input type='checkbox' id='boja' onclick='promjeniBoju(this)'>";
}