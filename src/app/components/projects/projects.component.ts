import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
    title: 'Optimization and decoupling of client accounts',
    logo: 'assets/images/decade.png',
    description:
      'Optimization and decoupling of client accounts from Magento to a frontend interface in Next.js, with secure authentication via AWS Identity Services. Architecture based on GraphQL and API Gateway.',
    tech: ['Next.js', 'Magento', 'AWS', 'GraphQL', 'API Gateway'],
  },
  {
    title: 'Employee Management System',
    logo: 'assets/images/riseup.png', 
    description:
      'A cross-platform mobile app (iOS & Android) and web dashboard for managing employees, absences, and check requests, built with .NET MAUI and ASP.NET Core.',
    tech: ['.NET MAUI', 'ASP.NET Core', 'SQL Server'],
  },
  {
    title: 'Call Center ERP Development',
    logo: 'assets/images/maher.png',
    description:
      'Development of a web-based ERP application for a call center, including account management, campaign management, and authentication.',
    tech: ['Next.js', 'Django', 'PostgreSQL'],
  },
    {
      title: 'Library Management App',
      description:
        'A full-stack web app for managing books, users, and borrowing, with an intuitive admin dashboard and responsive UI.',
      tech: ['Java', 'JavaFx', 'MySQL'],
      github: 'https://github.com/Nourbj/Library-project',
      liveDemo: ''
    },
     {
      title: 'HR Analytics Dashboard',
       description: 'Designed and developed a web-based dashboard to analyze key HR indicators by integrating data from a Human Resource Information System (HRIS).',

      tech: ['React', 'Node.js', 'PostgreSQL'],
      liveDemo: ''
    },
    {
      title: 'Small Business Mobile App',
      description:
        'A cross-platform app for managing sales, clients, and products, designed for small businesses.',
      tech: ['Ionic', 'Django', 'PostgreSQL'],
      github: 'https://github.com/Nourbj/Small-business-mobile-app',
     
    },
    {title: 'Project Management Web App',
      description:
     'Development of a web application to manage projects and their tasks, track the status of each task, and send emails using NodeMailer.',
      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'NodeMailer'],
      github: 'https://github.com/Nourbj/Project-management-web-app',
      },
      {
  title: 'E-Commerce Website ',
  description:
    'Development of a modern e-commerce website using React.js, enabling full management of the purchase process: product catalog, shopping cart, online payment, and order checkout.',
  tech: ['React.js', 'REST APIs'],
  github: 'https://github.com/Nourbj/E-commerce-website-with-React',      
},
{
  title: 'Music Genre Classification ',
  description:
    'Developed a web interface for automatic classification of music genres from audio samples. Performed audio feature extraction and trained SVM and CNN models based on VGG-19 for accurate genre prediction.',
  tech: ['Angular', 'Python', 'Flask', 'Scikit-learn', 'TensorFlow'],
  github: 'https://github.com/Nourbj/Music-classification',      
},
{
  title: 'E-Commerce Website',
  description:
    'Development of the same e-commerce website using Next.js for server-side rendering and SEO optimization, while managing the full purchase workflow: catalog, cart, payment, and checkout.',
  tech: ['Next.js', 'REST APIs'],
  github: 'https://github.com/Nourbj/E-commerce-website-with-Nextjs',     
}

  ]
}
