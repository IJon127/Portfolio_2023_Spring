import "./Footer.css";

function Footer() {
  const linkToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <button onClick={linkToTop}>
        <p className="footer__top">↑ top</p>
      </button>
      <p className="footer__copyright">
        Copyright © I-Jon Hsieh | All right reserved
      </p>
    </div>
  );
}

export default Footer;
