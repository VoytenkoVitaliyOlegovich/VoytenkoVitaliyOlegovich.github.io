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
      },
    },
  },
  data: {
    position: 'Front-end Developer',
  },
} as IConfig;
