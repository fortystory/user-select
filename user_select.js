window.document.onselectstart = () => true;
window.document.oncopy = () => true;
window.document.body.setAttribute('style', 'user-select: auto; -webkit-user-select: auto; -moz-user-select: auto;');
