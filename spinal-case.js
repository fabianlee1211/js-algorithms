function spinalCase(str) {
  // Splits the sentence by capital letters and join them with space 
  str = str.split(/(?=[A-Z])/).join(' ');
  // Replace all non-alphanumerical characters with '-'
  str = str.replace(/[^A-Za-z0-9]/g, '-');
  str = str.split('-');
  // Remove all blank elements
  for(var i = 0; i < str.length; i++) {
	  if(str[i] === '') str.splice(i,1);
  }
  str = str.join('-').toLowerCase();
  return str;
}
