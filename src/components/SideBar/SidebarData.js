import React from 'react' ;
import { CgProfile } from 'react-icons/cg' ;
import { SiGoogleanalytics } from 'react-icons/si'
import { IoMdHome } from 'react-icons/io'
import { MdComputer } from 'react-icons/md'

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
