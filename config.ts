import IConfig from './src/interfaces/IConfig';

export default {
  services: {
    github: {
      configuration: {
        nickname: 'VoytenkoVitaliyOlegovich',
        sort: {
          repositories: [
            { attr: 'created_at', sortByDesc: true },
            { attr: 'stargazers_count', sortByDesc: true },
          ],
        },
        filter: {
          repositories: [
            [
              { attr: 'owner.login', values: ['Alexeykhr', 'GPortfolio', 'uSchedule', 'uRepairPC'] },
              { attr: 'name', values: ['awesome-vue', 'merge-conflict', 'github-pages-with-jekyll', 'markdown-portfolio'], revert: true },
              { attr: 'fork', values: false }
            ],
          ],
        },
      },
    },
  },
  data: {
    position: 'Front-end Developer',
  },
} as IConfig
