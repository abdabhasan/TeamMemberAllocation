import "./Footer.scss";
let today = new Date();
const Footer = () => {
  return (
    <footer className="text-center my-3">
      <h6>Team Member Allocation App - {today.getFullYear()}</h6>
    </footer>
  );
};

export default Footer;
