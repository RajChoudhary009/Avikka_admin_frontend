import { CgFormatJustify } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";

import './index.css'

const Header = () => (
    <div className='header-main-container'>
        <div className='header-home-container'>
            <div className="menu-var-container">
                <h1 style={{ color: "white", marginTop: "28px" }}><CgFormatJustify /></h1>
                <h1 className="version-heading" style={{ color: "white" }}>V.2.5.0</h1>
            </div>
            <div className="language-select-dropdown">
                <select className="language-section">
                    <option>Select Language</option>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Marathi</option>
                </select>
                <h1 className="" style={{ color: "white" }}><IoMdNotificationsOutline/></h1>
                <h1 className="" style={{ color: "white" }}><BiSolidUser/></h1>
            </div>
        </div>
    </div>
)
export default Header