import React from 'react' ;
import { CgProfile } from '@react-icons/all-files/cg/CgProfile' ;
import { SiGoogleanalytics } from '@react-icons/all-files/si/SiGoogleanalytics'
import { IoMdHome } from '@react-icons/all-files/io/IoMdHome'
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
