import Header from "@/components/hr/Header.jsx";
import Sidemenu from "@/components/hr/Sidemenu.jsx";
import Footer from "@/components/hr/Footer.jsx";
import { Space } from "antd";


export default function Performance() {
  return (
    <div>
      <Header></Header>
      <Space className="SidemenuAndPagecontent">
        <Sidemenu></Sidemenu>
        <div>
          <h1>Performance</h1>
        </div>
      </Space>
      <Footer></Footer>
    </div>
  )
}
