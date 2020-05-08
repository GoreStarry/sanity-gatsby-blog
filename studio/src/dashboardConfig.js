export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eb531331dedb39bc49adcfb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wjuyrper',
                  apiId: 'f1ab7c36-04ca-4013-9095-2f835b4d8e39'
                },
                {
                  buildHookId: '5eb5313465fde3ded0243e99',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ntzeqbo5',
                  apiId: 'd0d70ef2-83bd-4649-b20d-4536b17bb1a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GoreStarry/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ntzeqbo5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
