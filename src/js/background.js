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

// Importing the constants
// eslint-disable-next-line no-undef
importScripts("constants.js");

chrome.action.onClicked.addListener(function(tab){
	if(tab.url.match(/^http/i) || tab.url.match(/^file/i)){
		if((new URL(tab.url)).origin != browserstore && tab.url != browsernewtab){
			chrome.scripting.executeScript({
				target: {tabId: tab.id},
				files: ["js/run.js"]
			});
		}
	}
});