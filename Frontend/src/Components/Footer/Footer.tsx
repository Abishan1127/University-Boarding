import "./Footer.css"; 
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from "@ant-design/icons";


const Footer = () => {
  return (
    <div>
       <div className="contact-info">
        <div className="info-item">
          <EnvironmentOutlined className="icon" />
          <h3>Address</h3>
          <p>Unilanka.lk, Kilinochchi, 40000</p>
        </div>
        <div className="info-item">
          <PhoneOutlined className="icon" />
          <h3>Phone</h3>
          <p>+94 764101633</p>
        </div>
        <div className="info-item">
          <MailOutlined className="icon" />
          <h3>Email</h3>
          <p>unilanka.lk</p>
          <p>info@unilanka.com</p>
        </div>
        <div className="info-item">
          <GlobalOutlined className="icon" />
          <h3>Web Address</h3>
          <p>www.unilanka.lk</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
