
const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer className="text-center w-100 bg-dark text-white">© {date}. All Rights Reserved.</footer>
    )
}

export default Footer;