block('page').mod('view', 'index').content()(function() {
    var sites = this.data.sites || [];

    return [
        {
            block: 'header'
        },
        {
            block: 'body',
            sites: sites
        },
        {
            block: 'footer'
        }
    ];
});
