import React from "react";
import "../styles.css";
import { Card, Button } from "react-bootstrap";
import {
  searchExperiences,
  addSelectedData,
  experienceSuccessFetch,
  getEvent
} from "../actions/index";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCard: false,
      filtered: [],
      eventCardInfo: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.experienceSuccessFetch();
    this.setState({
      filtered: this.props.momExperiences
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.momExperiences
    });
  }

  onItemClick = (item, e) => {
    this.props.getEvent(item.id);
  };

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.momExperiences;

      newList = currentList.filter(item => {
        const lcName = item.exp_title.toLowerCase();
        const lcBody = item.exp_desc.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lcName.includes(filter) || lcBody.includes(filter);
      });
    } else {
      newList = this.props.momExperiences;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {
    console.log(this.props.momExperiences);
    return (
      <>
        <div className="viewAllContainer">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search Experiences"
            className="searchExperiences"
          />
        </div>
        <div className="cardDataContainer">
          {this.state.filtered.map((experienceData, i) => {
            let boundItemClick = this.onItemClick.bind(this, experienceData);
            return (
              <div className="cardData" key={i}>
                <Card style={{ width: "25rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/collection/3053437/400x200"
                  />
                  <Card.Body>
                    <Card.Title>{experienceData.exp_title}</Card.Title>
                    <Card.Text>{experienceData.exp_desc}</Card.Text>
                    <div className="DetailsCardButton">
                      <Link to={`/IndividualCard/${experienceData.id}`}>
                        <Button
                          variant="danger"
                          onClick={boundItemClick}
                          key={i}
                        >
                          {" "}
                          Details{" "}
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  momExperiences: state.momExperiences,
  selectedCardData: state.selectedCardData
});
export default withRouter(
  connect(
    mapStateToProps,
    { searchExperiences, experienceSuccessFetch, addSelectedData, getEvent }
  )(Cards)
);
