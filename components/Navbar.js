import Link from 'next/link';

function Navbar() {
    return (
        <header>
        <nav className="my-navbar main-container" id="navbar-example2">
            <div className="logo-container">
                <Link href="/" legacyBehavior>
                    <a>
                        <img className="logo-icon" src="/assets/images/logo.svg" alt="" />
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
                </ul>
            </div>
            <div className="right-menu">
                <ul>
                    <li className="nav-item dropdown language margin-large">
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
                    <li className="margin-large">
                        <Link href="/signup" legacyBehavior>
                            <a className="btn btn-brand">Sign up</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" legacyBehavior>
                            <a className="btn btn-brand btn-outline-primary">Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Navbar;
