import React from 'react' ;
import { CgProfile } from 'react-icons/cg' ;
import { SiGoogleanalytics } from 'react-icons/si'
import { IoMdHome } from 'react-icons/io'
export const SidebarData= [
    {
        icon: <CgProfile/>,
        link: "/Profile"
    },
    {
        icon: <IoMdHome/>,
        link: "/Dashboard"
    },
    {
        icon: <SiGoogleanalytics/>,
        link: "/Analytics"
    }
]
