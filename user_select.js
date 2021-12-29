window.document.onselectstart = () => true;
window.document.oncopy = () => true;
var _old_style = window.document.body.getAttribute('style');
window.document.body.setAttribute('style', 'user-select: text; -webkit-user-select: text; -moz-user-select: text;'+_old_style);

document.querySelector("body").onselectstart = () => {return true};
