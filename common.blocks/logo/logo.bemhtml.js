block('logo')(
    content()(function () {
        var mods = this.ctx.mods || false;
        return [
            {
                block: 'image',
                url: '/img/logo.png',
                alt: 'Softex',
                height: 50
            }
        ];
    })
);