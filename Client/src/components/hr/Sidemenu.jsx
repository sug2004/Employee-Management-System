import { UilDashboard , UilBookmark, UilClock ,UilTachometerFastAlt ,UilFeedback ,UilFileCheckAlt ,UilBell   } from '@iconscout/react-unicons'

import { Menu } from 'antd'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidemenu() {
    const navigate = useNavigate();
    return (
        <div className='Sidemenu'>
            <Menu 
            onClick={(item)=>{
                navigate(item.key);
            }}
                items={[
                    { 
                        label: "Dashboard",
                        icon: <UilDashboard></UilDashboard>,
                        key:'/hr/dashboard',
                    },
                    { 
                        label: "Mark Attendance",
                        icon: <UilBookmark></UilBookmark> ,
                        key:'/hr/dashboard/markattendance',
                    },
                    { 
                        label: "Time management",
                        icon : <UilClock></UilClock>,
                        key:'/hr/dashboard/timemanagement',
                    },
                    { 
                        label: "Performance review list",
                        icon:<UilTachometerFastAlt></UilTachometerFastAlt>,
                        key:'/hr/dashboard/performance',
                    },
                    { 
                        label: "Feedback /complaint form",
                        icon: <UilFeedback ></UilFeedback>,
                        key:'/hr/dashboard/feedback',
                    },
                    { 
                        label: "Task section",
                        icon: <UilFileCheckAlt></UilFileCheckAlt>,
                        key:'/hr/dashboard/tasksection',
                    },
                    { 
                        label: "Notification",
                        icon:<UilBell></UilBell>,
                        key:'/hr/dashboard/notification',
                    }
                ]}
            >

            </Menu>
        </div>
    )
}
