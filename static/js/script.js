function setConfigurate(property) {
    switch (property) {
        case 'theme':
            body.classList.toggle('dark');
            container.classList.toggle('dark');
            for (let i = 0; i < switchControls.length; i++) {
                switchControls[i].classList.toggle('dark');
            }
            for (let i = 0; i < formControls.length; i++) {
                formControls[i].classList.toggle('dark');
            }
            break;
    
        case 'hide_name':
            formControlName.classList.toggle('hide');
            break;

        case 'hide_phone':
            formControlPhone.classList.toggle('hide');
            break;

        case 'hide_form':
            form.classList.toggle('hide');
            break;
    }
}

function bindSwitchs(switchItems) {
    for(let i = 0; i < switchItems.length; i++) {
        const switchItem = switchItems[i];

        switchItem.addEventListener('click', function() {
            switchItem.classList.toggle(classSwitchActive);
            const property = switchItem.getAttribute('data-property');
            setConfigurate(property);
        })
    }
}

bindSwitchs(switchControls);