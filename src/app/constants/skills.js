import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiRadixui,
  SiMui,
  SiLaravel,
  SiPhp,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiJest,
  SiEslint,
} from 'react-icons/si';
import { TbLanguage, TbUsers, TbTestPipe, TbBraces } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';

export const skills = [
  {
    category: 'Frontend',
    items: [
      { 
        name: 'Next.js 15', 
        details: 'App Router, Server Actions, Standalone deployment',
        icon: SiNextdotjs,
        level: 95,
        experience: '1+ year'
      },
      { 
        name: 'React 18', 
        details: 'Hooks, Context API, Suspense',
        icon: SiReact,
        level: 95,
        experience: '1+ year'
      },
      { 
        name: 'TypeScript',
        details: 'Type-safe development',
        icon: SiTypescript,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'Tailwind CSS',
        details: 'Utility-first CSS framework',
        icon: SiTailwindcss,
        level: 90,
        experience: '1+ year'
      },
      { 
        name: 'Radix UI',
        details: 'Accessible component primitives',
        icon: SiRadixui,
        level: 80,
        experience: '1+ year'
      },
      { 
        name: 'Material UI',
        details: 'React component library',
        icon: SiMui,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'next-intl',
        details: 'Internationalization',
        icon: TbLanguage,
        level: 75,
        experience: '1+ year'
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      { 
        name: 'Laravel',
        details: 'Full-stack PHP framework',
        icon: SiLaravel,
        level: 90,
        experience: '1+ year'
      },
      { 
        name: 'Multi-Tenancy',
        details: 'Stancl Tenancy',
        icon: TbUsers,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'PHP',
        details: 'Server-side scripting',
        icon: SiPhp,
        level: 90,
        experience: '1+ year'
      },
      { 
        name: 'Express.js',
        details: 'Node.js web framework',
        icon: SiExpress,
        level: 80,
        experience: '1+ year'
      },
      { 
        name: 'Node.js',
        details: 'JavaScript runtime',
        icon: SiNodedotjs,
        level: 85,
        experience: '1+ year'
      },
    ],
  },
  {
    category: 'Database',
    items: [
      { 
        name: 'PostgreSQL',
        details: 'Advanced relational database',
        icon: SiPostgresql,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'MySQL',
        details: 'Relational database',
        icon: SiMysql,
        level: 90,
        experience: '1+ year'
      },
      { 
        name: 'SQLite',
        details: 'Embedded database',
        icon: SiSqlite,
        level: 75,
        experience: '1+ year'
      },
      { 
        name: 'Redis',
        details: 'In-memory data store',
        icon: SiRedis,
        level: 80,
        experience: '1+ year'
      },
      { 
        name: 'MongoDB',
        details: 'NoSQL document database',
        icon: SiMongodb,
        level: 75,
        experience: '1+ year'
      },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { 
        name: 'Docker',
        details: 'Containerization platform',
        icon: SiDocker,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'GitHub Actions',
        details: 'CI/CD automation',
        icon: SiGithubactions,
        level: 80,
        experience: '1+ year'
      },
      { 
        name: 'PHPUnit',
        details: 'PHP testing framework',
        icon: TbTestPipe,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'Jest',
        details: 'JavaScript testing',
        icon: SiJest,
        level: 80,
        experience: '1+ year'
      },
      { 
        name: 'PHPStan',
        details: 'PHP static analysis',
        icon: VscCode,
        level: 80,
        experience: '1+ year'
      },
      { 
        name: 'ESLint',
        details: 'JavaScript linting',
        icon: SiEslint,
        level: 85,
        experience: '1+ year'
      },
      { 
        name: 'Laravel Pint',
        details: 'PHP code style fixer',
        icon: TbBraces,
        level: 75,
        experience: '1+ year'
      },
    ],
  },
];

