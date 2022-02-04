export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fd2abad1e0cd07dff00fa9',
                  title: 'Sanity Studio',
                  name: 'gaminggruppen-studio',
                  apiId: '012ef09b-ef85-4151-bec4-6653cf6c3cef'
                },
                {
                  buildHookId: '61fd2aba45deba00adb23bcb',
                  title: 'Portfolio Website',
                  name: 'gaminggruppen',
                  apiId: 'a3a22812-aaf0-4242-adfa-f1a30df10681'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GamingGruppen/gaminggruppen',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gaminggruppen.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
