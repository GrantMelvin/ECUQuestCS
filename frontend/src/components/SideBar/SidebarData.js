import React from 'react' ;
import { CgProfile } from '@react-icons/all-files/cg/CgProfile' ;
import { SiGoogleanalytics } from '@react-icons/all-files/si/SiGoogleanalytics'
import { IoMdHome } from '@react-icons/all-files/io/IoMdHome'
import { MdComputer } from '@react-icons/all-files/md/MdComputer'

export const SidebarData= [
    {
        title: "Profile",
        icon: <CgProfile/>,
        link: "/Profile"
    },
    {
        title: "Dashboard",
        icon: <IoMdHome/>,
        link: "/Dashboard"
    },
    {
        title: "Analytics",
        icon: <SiGoogleanalytics/>,
        link: "/Analytics"
    },
    {
        title: "CSCI 1010",
        icon: <MdComputer/>,
        link: "/CSCI1010"
    },
    {
        title: "CSCI 2530",
        icon: <MdComputer/>,
        link: "/CSCI2530"
    },
    {
        title: "CSCI 2540",
        icon: <MdComputer/>,
        link: "/CSCI2540"
    }
]
