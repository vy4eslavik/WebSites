block('web-sites')(
    tag()('table'),
    content()(function () {
        var sites = this.ctx.sites || false;
        if(!sites) return 'Oops!';

        return [
            {
                elem: 'table-header',
                tag: 'thead',
                content: {
                    elem: 'line',
                    tag: 'tr',
                    content: [
                        {
                            elem: 'project',
                            tag: 'td',
                            content: 'Проект'
                        },
                        {
                            elem: 'bpm-version',
                            tag: 'td',
                            content: 'Версия BPM'
                        },
                        {
                            elem: 'working-copy',
                            tag: 'td',
                            content: 'Рабочая копия'
                        },
                        {
                            elem: 'db-server',
                            tag: 'td',
                            content: 'Сервер БД'
                        },
                        {
                            elem: 'db-name',
                            tag: 'td',
                            content: 'Название БД'
                        },
                        {
                            elem: 'owner',
                            tag: 'td',
                            content: 'Ответственный'
                        },
                        {
                            elem: 'desc',
                            tag: 'td',
                            content: 'Примечания'
                        }
                    ]
                }

            },
            sites.map(function (site) {
                return {
                    elem: 'line',
                    tag: 'tr',
                    content: [
                        {
                            elem: 'project',
                            tag: 'td',
                            content: site.project
                        },
                        {
                            elem: 'bpm-version',
                            tag: 'td',
                            content: site.bpmVersion
                        },
                        {
                            elem: 'working-copy',
                            tag: 'td',
                            content: site.workingCopyPath
                        },
                        {
                            elem: 'db-server',
                            tag: 'td',
                            content: site.db.server
                        },
                        {
                            elem: 'db-name',
                            tag: 'td',
                            content: site.db.name
                        },
                        {
                            elem: 'owner',
                            tag: 'td',
                            content: site.db.name
                        },
                        {
                            elem: 'desc',
                            tag: 'td',
                            content: site.db.name
                        }
                    ]
                };
            }, this)
        ]
    })
);