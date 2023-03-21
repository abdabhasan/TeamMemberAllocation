import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="text-center my-5">
      <h1 className="">Team Member Allocation</h1>
      <h3>
        {selectedTeam} has {teamMemberCount}{" "}
        {teamMemberCount === 1 ? "member" : "members"}
      </h3>
    </header>
  );
};

export default Header;
