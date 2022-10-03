//================================================
/*

Browser extension starter template
The development ready template for beginner
Copyright (C) 2022 Stefan vd
www.stefanvd.net

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

var redborder = null;

function addElement(id){
	chrome.storage.sync.get(["redborder"], function(response){
		redborder = response["redborder"];

		const newDiv = document.createElement("div");
		newDiv.id = id;
		newDiv.style.width = "100px";
		newDiv.style.height = "100px";
		newDiv.style.background = "blue";
		newDiv.style.color = "white";
		newDiv.style.position = "absolute";
		newDiv.style.top = "0";
		newDiv.style.left = "0";
		newDiv.style.zIndex = "1000";
		if(redborder == true){
			newDiv.style.border = "5px solid red";
		}
		newDiv.innerText = "Element";
		document.body.appendChild(newDiv);
	});
}

function removeElement(id){
	var elem = document.getElementById(id);
	return elem.parentNode.removeChild(elem);
}

if(document.getElementById("starter")){
	removeElement("starter");
}else{
	addElement("starter");
}