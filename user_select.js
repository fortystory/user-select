window.document.onselectstart = () => true;
window.document.oncopy = () => true;
var _old_style = window.document.body.getAttribute('style');
window.document.body.setAttribute('style', 'user-select: auto; -webkit-user-select: auto; -moz-user-select: auto;'+_old_style);
