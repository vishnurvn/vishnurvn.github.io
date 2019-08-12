// <div class="flex-container item-first">
//                 <div class="experience jumbotron">
//                     <span class="company">Accenture</span>
//                     <span class="designation">ASE</span>
//                     <div class="dates">
//                         <span class="month">SEP</span>
//                         <span class="from-year">2017</span>
//                         <span class="to-year">Present</span>
//                     </div>
//                     <div>
//                         Job Discipline: Currently working as a Python developer and an internal automation consultant. Developing modules for an automation tool and creating proof of concepts for new automation scenarios. Developed and deployed a Q&A dialog system to accelerate the operations internally to reduce team training time. Developed an xPath management tool for renewing and managing existing xpaths after application changes. Currently working on a test automation framework.
//                     </div>
//                 </div>
//             </div>

let data = [
    {
        'company': 'Accenture',
        'designation': 'Application Development Analyst',
        'date': {
            'from': {
                'month': 'SEP',
                'year': 2017
            },
            'to': {
                'month': null,
                'year': null
            }
        },
        'description': {
            'job_discipline': 'Currently working as a Python developer and an internal automation consultant. Developing modules for an automation tool and creating proof of concepts for new automation scenarios. Developed and deployed a Q&A dialog system to accelerate the operations internally to reduce team training time. Developed an xPath management tool for renewing and managing existing xpaths after application changes. Currently working on a test automation framework.'            
        }
    }
]

let skills = {
    'languages': [],
    'techs': [],
    'tools': []
}


let container = document.createElement('div')
container.setAttribute('class', 'flex-container item-first')

let experience = document.createElement('div')
experience.setAttribute('class', 'experience jumbotron')

let company = document.createElement('span')
company.setAttribute('class', 'company')

let designation = document.createElement('span')
designation.setAttribute('class', 'company')