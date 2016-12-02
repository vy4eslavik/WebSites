block('web-sites')(
    tag()('table'),
    content()(function () {
        this.ctx.sites = [
            {
                project: 'BPM_5.4FMCG_Demo',
                bpmVersion: '5.4',
                projectVersion: '1.0',
                workingCopyPath: 'E:\\SVN_Working_Copy\\BPM7.5_Home',
                repositoryUri: 'http://Softex-IIS:8888/svn/BPM7.5_Home/trunk',
                owner: 'vy4eslavik',
                desc: 'Ромашка',
                db: {
                    server: 'softex-sql',
                    name: 'BPM_4.5_Home'
                }
            },
            {
                project: 'BPM_5.4FMCG_Demo',
                bpmVersion: '5.4',
                projectVersion: '1.0',
                workingCopyPath: 'E:\\SVN_Working_Copy\\BPM7.5_Home',
                repositoryUri: 'http://Softex-IIS:8888/svn/BPM7.5_Home/trunk',
                owner: 'vy4eslavik',
                desc: 'Ромашка',
                db: {
                    server: 'softex-sql',
                    name: 'BPM_4.5_Home'
                }
            }
        ];
        var sites = this.ctx.sites;

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