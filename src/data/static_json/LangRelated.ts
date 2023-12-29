/**
 * Type definitions for LangRelated children
 */
export interface ChildrenData {
  name: string;
  path: string;
  icon: string;
}

/**
 * Type definitions for LangRelated data
 */
export interface LangRelated {
  name: string;
  children: ChildrenData[];
}

/**
 * LangRelated data
 */
export const LangRelatedData: LangRelated[] = [
  {
    name: "languages",
    children: [
      {
        name: "C",
        path: "2012-07-01-c",
        icon: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
      },
      {
        name: "C++",
        path: "cpp-v2",
        icon: "https://cdn.worldvectorlogo.com/logos/c.svg",
      },
      {
        name: "Bash",
        path: "bash",
        icon: "https://cdn.worldvectorlogo.com/logos/bash-1.svg",
      },
      {
        name: "C#",
        path: "2012-07-01-csharp",
        icon: "https://cdn.worldvectorlogo.com/logos/c--4.svg",
      },
      {
        name: "JavaScript",
        path: "javascript",
        icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      },
      {
        name: "Python",
        path: "python",
        icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      },
      {
        name: "php",
        path: "php-v2",
        icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
      },
      {
        name: "Java",
        path: "java-v2",
        icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
      },
      {
        name: "Go",
        path: "golangv2",
        icon: "https://cdn.worldvectorlogo.com/logos/gopher.svg",
      },
      {
        name: "typescript",
        path: "typescript_v2",
        icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        name: "XML",
        path: "2012-07-01-xml",
        icon: "https://cdn.worldvectorlogo.com/logos/xml-2.svg",
      },
    ],
  },
  {
    name: "databases",
    children: [
      {
        name: "Reddis",
        path: "redis",
        icon: "https://cdn.worldvectorlogo.com/logos/redis.svg",
      },
      {
        name: "MongoDB",
        path: "mongodb",
        icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
      },
      {
        name: "MySQL",
        path: "mysql",
        icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
      },
      {
        name: "PostgreSQL",
        path: "2012-07-01-postgresql",
        icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
      },
      {
        name: "SQLite",
        path: "2012-07-01-sqlite",
        icon: "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
      },
      {
        name: "MariaDB",
        path: "2012-07-01-mariadb",
        icon: "https://cdn.worldvectorlogo.com/logos/mariadb.svg",
      },
      {
        name: "Oracle",
        path: "2012-07-01-oracle",
        icon: "https://cdn.worldvectorlogo.com/logos/oracle-2.svg",
      },
      {
        name: "Cassandra",
        path: "2012-07-01-cassandra",
        icon: "https://cdn.worldvectorlogo.com/logos/cassandra.svg",
      },
      {
        name: "ElasticSearch",
        path: "2012-07-01-elasticsearch",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg",
      },
      {
        name: "Firebase",
        path: "2012-07-01-firebase",
        icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
      },
    ],
  },
  {
    name: "tools",
    children: [
      {
        name: "Git",
        path: "2012-07-01-git",
        icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      },
      {
        name: "Docker",
        path: "2012-07-01-docker",
        icon: "https://cdn.worldvectorlogo.com/logos/docker.svg",
      },
      {
        name: "Kubernetes",
        path: "2012-07-01-kubernetes",
        icon: "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
      },
      {
        name: "Vim",
        path: "2012-07-01-vim",
        icon: "https://cdn.worldvectorlogo.com/logos/vim.svg",
      },
      {
        name: "Xcode",
        path: "2012-07-01-xcode",
        icon: "https://www.vectorlogo.zone/logos/apple_xcode/apple_xcode-icon.svg",
      },
    ],
  },
  {
    name: "frontend",
    children: [
      {
        name: "Angular",
        path: "2012-07-01-angular",
        icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
      },
      {
        name: "React",
        path: "2012-07-01-react",
        icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      },
      {
        name: "Vue",
        path: "2012-07-01-vue",
        icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
      },
      {
        name: "Ember",
        path: "2012-07-01-ember",
        icon: "https://cdn.worldvectorlogo.com/logos/ember.svg",
      },
    ],
  },
  {
    name: "backend",
    children: [
      {
        name: "Node.js",
        path: "2012-07-01-nodejs",
        icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        name: "Express",
        path: "2012-07-01-express",
        icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      },
      {
        name: "Django",
        path: "2012-07-01-django",
        icon: "https://cdn.worldvectorlogo.com/logos/django-community.svg",
      },
      {
        name: "Feathers",
        path: "2012-07-01-feathers",
        icon: "https://cdn.worldvectorlogo.com/logos/feathersjs.svg",
      },
      {
        name: "laravel",
        path: "2012-07-01-laravel",
        icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
      },
      {
        name: "Sails.js",
        path: "2012-07-01-sailsjs",
        icon: "https://cdn.worldvectorlogo.com/logos/sails.svg",
      },
      {
        name: "Moleculer",
        path: "2012-07-01-moleculer",
        icon: "https://static-00.iconduck.com/assets.00/moleculer-icon-512x482-hpdz0dcz.png",
      },
    ],
  },
];
