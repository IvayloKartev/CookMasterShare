import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

export default function Header({loginBtn, btnEvent, isLogin}){
    return (
        <header className="navbar navbar-expand-md bg-dark text-light justify-content-between p-2 pe-5">
            <p className="nav-item text-s icon-logo">Cook MasterShare</p>
            <ul className="nav text-light justify-content-end">
                <li className="nav-item"><a className="nav-link text-light" href="#" onClick={isLogin}>Home</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#">Search</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#">Contacts</a></li>
                <button className="btn btn-warning" onClick={() => {btnEvent()}}>{loginBtn}</button>
            </ul>
        </header>
    )
}