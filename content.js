function onBeforeUnload(e) {
    e.preventDefault();
    e.returnValue = '';
    return;
}
window.addEventListener('beforeunload', onBeforeUnload);

console.log('BQ Confirm to Close: listener has been added');