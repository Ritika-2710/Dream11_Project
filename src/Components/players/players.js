import { useEffect,useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlayerInformation from './playerInformation';
import './players.scss';
import { connect } from 'react-redux'
import { fetchUsers} from "../../Action/fetchAction";

function Players( {userData, fetchUsers })
{
    useEffect(() => {
        fetchUsers()
    }, [])
    const arr = Object.values(userData);
    // console.log(arr)
    return(
        <>
            <section className="players">
              <Container>
                  <Row>
                      <Col lg={12}>
                          <h3 className="universal_heading">Reviews & <span style={{color:"red"}}>Rating</span></h3>
                      </Col>
                  </Row>
                  <Row>
                      <Col lg={12}>
                          <div className="image_div">
                            <img src="../images/players/d11_rating.webp" width="100%"></img>
                          </div>
                      </Col>
                  </Row>
                  <Row className="d-flex justify-content-center">
                      <div className="scrolling-wrapper">   
                      {
                        !arr[1] ? null :arr[1].map((value, index) => {
                            return (
                                <PlayerInformation key={index} playerImage={value[0]} playerName={value[1]}
                                                   playerTeam={value[2]}
                                                   playerPrice={value[3]}
                                                   playerDescription={value[4]}/>
                            )
                        })
                      }
                      </div>
                  </Row>
              </Container>
            </section>
        </>
    )
}
const mapStateToProps = state => {
    // console.log(state)
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players)
