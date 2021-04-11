function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="FooterYear">
            <p>Copyright {year}</p>
        </footer>
    );
}
export default Footer;