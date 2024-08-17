'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top" style={{ opacity: '80%' }}>
                <div className="container-fluid col-10 text-center">
                    <div className='grey-qo-regular'>
                        <span className="navbar-brand mb-0 h1 sticky-top" style={{ fontSize: '35px', color: 'lightpink' }}>Link Shortener</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={pathname === '/' ? 'nav-link active' : 'nav-link'} href={'/'} passHref> <h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page">Home</h6></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={pathname === '/about' ? 'nav-link active' : 'nav-link'} href={'/about'} passHref><h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={pathname === '/contact' ? 'nav-link active' : 'nav-link'} href={'/contact'} passHref> <h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</h6></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;