import "./Employees.scss";
import Teams from "../Teams/Teams";
import TeamMembers from "../TeamMembers/TeamMembers";
import maleProfile from "../../images/maleProfile.jpg";
import femaleProfile from "../../images/femaleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container text-center">
      <div className="row justify-content-center my-3">
        <div className="col-6  ">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
