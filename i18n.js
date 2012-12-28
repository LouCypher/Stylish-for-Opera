function loadI18nStrings() {
	var nodes=document.querySelectorAll('.i18n'),c,s,i,j;
	for(i=0;i<nodes.length;i++)
		nodes[i].innerHTML=opera.extension.bgProcess.getI18nString(nodes[i].innerHTML);
}

window.addEventListener('DOMContentLoaded',loadI18nStrings,true);
