import Header from "@/components/hr/Header.jsx";
import { Space } from "antd";
import Sidemenu from "@/components/hr/Sidemenu.jsx";
import Pagecontent from "../../../../../hrDash/empty/Pagecontent.jsx";
import Footer from "@/components/hr/Footer.jsx";

export default function HrDash(){
    return(
        <div>
            <Header></Header>
            <Space className="SidemenuAndPagecontent">
                <Sidemenu></Sidemenu>
                <Pagecontent></Pagecontent>
            </Space>
            <Footer></Footer>
        </div>
    )
}