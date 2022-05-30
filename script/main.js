const elSalary = document.querySelector('select[name="salary"]');
const elShopping = document.querySelector('select[name="shopping"]');
const elStatus = document.querySelector('.status > span');

const run = () => {
    const valueSalary = elSalary.value;
    const valueSpopping = elShopping.value;

    if(valueSalary === 'no') {
        elStatus.innerHTML = "You don't have money";
        return;
    }

    if(valueSalary === 'yes') {
        elStatus.innerHTML = "You have money";
        return;
    }

    if(valueSpopping === 'bought') {
        elStatus.innerHTML = "You have sosage in the frige. Have a good meel!";
        return;
    }

    if(valueSpopping === 'forgot') {
        elStatus.innerHTML = "Sleep hungry stupid ass!!!";
        return;
    }

}

run();

elSalary.addEventListener('change', run);
elShopping.addEventListener('change', run);


