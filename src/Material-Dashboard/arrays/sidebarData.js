import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
export const sidebarData =[
   {
    title:'Pages',
    childrens: [
        {   title:'P Profile',
            childrens:[
                {
                    title:'P profile Overview'
                },
                {
                    title:'A All projects'
                }
            ]
        },
        {
            title:'U Users',
            childrens:[
                {
                    title:'N New User'
                },
            
            ]
        },
        {
            title:'A Account',
            icon:<IoIosArrowDown className='icon'/>,
            iconClosed:<IoIosArrowUp className='icon'/>,
            childrens:[
                {
                    title:'S Settings'
                },
                {
                    title:'B Billings'
                },
                {
                    title:'I Invoivs'
                },
            
            ]
        },
        {
            title:'P Projects',
            icon:<IoIosArrowDown className='icon'/>,
            iconClosed:<IoIosArrowUp className='icon'/>,
            childrens:[
                {
                    title:'T Timeline'
                }
            
            ]
        },
        {
            title:' P Pricing Page'
        },
        {
            title:' R RTL'
        },
        {
            title:' W Widgets'
        },
        {
            title:'C Charts'
        },
        {
            title:'N Notifications'
        }

    ]
},
{
    title:'Aplications',
    childrens: [
        {   title:'K Kanban',
           
        },
        {
            title:'W Wisard',
            
        },
        {
            title:'D Data Tables', 
        },
        {
            title:'C Calendar', 
        }
    ]
},
{
    title:'Ecommerce',
    childrens: [
        {   title:'P Products',
            childrens:[
                {
                    title:'N New Product'
                },
                {
                    title:'E Edit Product'
                },
                {
                    title:'P Product Page'
                }
            ]
        },
        {
            title:'O Orders',
            childrens:[
                {
                    title:'O Order List'
                },
                {
                    title:'O Order Details'
                }
            
            ]
        },
    ]
},
{
    title:'Auithentication',
    childrens: [
        {   title:'S Sign In',
            childrens:[
                {
                    title:'B Basic'
                },
                {
                    title:'C Cover'
                },
                {
                    title:'I Ilustration'
                }
            ]
        },
        {
            title:'S Sign Up',
            childrens:[
                {
                    title:'R REset Password',
                    childrens:[
                        {title:'C Cover'}
                    ]
                },
            
            ]
        },
        
    ]
}
]