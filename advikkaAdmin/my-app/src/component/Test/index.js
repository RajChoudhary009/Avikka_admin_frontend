import Sidebar from '../Sidebar'
import Header from '../Header'
import './index.css'

const Dashbord = () => (
    <div className='dashbord-main-container'>
        <div className='dashbord-home-container'>
            <div className='left-sidevar-container'>
                <Sidebar />
            </div>
            <div className='rigth-container-container'>
                <Header />
                <div className='middle-container'>
                    <h1>Mammmmmm</h1>
                </div>

            </div>
        </div>
    </div>

)
export default Dashbord