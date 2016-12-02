block('body').content()(function() {
    var sites = this.data.sites || [];
    return [
        {
            block: 'web-sites',
            sites: sites
        }
    ];
});
