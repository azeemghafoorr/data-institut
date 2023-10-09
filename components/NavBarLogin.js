import Link from 'next/link';

const NavbarLogin = () => {
    return (
        <header>
        <nav className="my-navbar main-container" id="navbar-example2">
            <div className="logo-container">
                <Link href="/" legacyBehavior>
                    <a>
                        <img className="logo-icon" src="/assets/images/logo.svg" alt="" />
                        {/* <h2>DezSol</h2> */}
                    </a>
                </Link>
            </div>
            <div className="hamburger" id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link href="/catalog" legacyBehavior>
                            <a className="nav-link">Catalog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" legacyBehavior>
                            <a className="nav-link">Pricing</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#work" legacyBehavior>
                            <a className="nav-link">For Teams</a>
                        </Link>
                    </li>
                    {/* Additional menu items go here */}
                </ul>
            </div>
            <div className="right-menu">
                <ul>
                    <li className="nav-item dropdown language">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            English
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Arabic - العربية
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Dutch - Nederlands
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="" className="btn btn-outline-primary btn-outline-primary-1 btn-48" style={{ padding: '0 20px' }}>
                            Ask Ameer
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img className="icon-gear" src="/assets/images/icon-gear.svg" alt="" />
                        </a>
                    </li>
                    <li className="notification active">
                        <a href="">
                            <img className="icon-notification" src="/assets/images/icon-notification.svg" alt="" />
                        </a>
                    </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img className="user-icon-img" src="/assets/images/dashboard-user-main.png" alt=""/>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/profile" legacyBehavior>
                                        <a className="dropdown-item">
                                            My Profile
                                        </a>
                                    </Link>

                                </li>
                                <li>
                                    <Link href="/account" legacyBehavior>
                                        <a className="dropdown-item">
                                            Account Setting
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link href="/dashboard" legacyBehavior>
                                        <a className="dropdown-item">
                                            Dashboard
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard-inprogress" legacyBehavior>
                                        <a className="dropdown-item">
                                            Dashboard InProgress
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard-empty" legacyBehavior>
                                        <a className="dropdown-item">
                                            Dashboard Empty
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                        </li>
                </ul>
            </div>
        </nav>
        </header>
    );
};

export default NavbarLogin;
