block('header').content()(function() {
    return [
        {
            block: 'logo'
        },
        {
            block: 'button',
            mix: {block: 'header', elem: 'new-site'},
            mods: { theme : 'islands', size : 'xl', view : 'action' },
            text: 'Новый сайт'
        }
    ];
});
