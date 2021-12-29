import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Web3 from 'web3';

import App from '../../App';
import './dashboard.css';

import {
    Card,
    CardBody,
    Col
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
        label: 'My First dataset',
        backgroundColor: brandPrimary,
        borderColor: 'rgba(255,255,255,.55)',
        data: [65, 59, 84, 84, 51, 55, 40],
        },
    ],
};
      
const cardChartOpts1 = {
tooltips: {
    enabled: false,
    custom: CustomTooltips
},
maintainAspectRatio: false,
legend: {
    display: false,
},
scales: {
    xAxes: [
    {
        gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent',
        },
        ticks: {
        fontSize: 2,
        fontColor: 'transparent',
        },

    }],
    yAxes: [
    {
        display: false,
        ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
    }],
},
elements: {
    line: {
    borderWidth: 1,
    },
    point: {
    radius: 4,
    hitRadius: 10,
    hoverRadius: 4,
    },
}
}

class UserDashBoard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            electionCount : 0,
        }
    }

    async loadInstance() {
        var app = new App();
        Dashboard.mainInstance = await app.loadInstance(); 
        const electionCount = await Dashboard.mainInstance.electionID();
        var result = Object.values(electionCount)
        this.setState({electionCount: result})       
    }

    async loadElection(eID) {
        var eAddress = await Dashboard.mainInstance.Elections(eID);
    }

    link(e) {
        window.location = e;
    }

    render() {
        this.loadInstance();
        
        var dashTemp =  
        
            <div className = "">

                <br/>
                <div className="grid-container2">

                    <Col style = {{width:'280px'}}>
                        <Card onClick = {() => {window.location = '/active'}} className="text-white bg-primary" style = {{cursor:'pointer'}}>
                            <CardBody className="pb-0">
                                <h4><b>{this.state.electionCount[1]}</b></h4>
                                Active Elections
                            </CardBody>
                            <br/>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col style = {{width:'280px'}}>
                        <Card className="text-white bg-primary" style = {{cursor:'pointer'}}>
                        <CardBody className="pb-0">
                            <h4><b>3</b></h4>
                            Pending Elections
                        </CardBody>
                        <br/>
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                        </Card>
                    </Col>

                    <Col style = {{width:'280px'}}>
                        <Card className="text-white bg-primary" style = {{cursor:'pointer'}}>
                        <CardBody className="pb-0">
                            <h4><b>2</b></h4>
                            Complete Elections
                        </CardBody>
                        <br/>
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                        </Card>
                    </Col>

                    <Col style = {{width:'280px'}}>
                        <Card className="text-white bg-primary" style = {{cursor:'pointer'}}>
                        <CardBody className="pb-0">
                            <h4><b>11</b></h4>
                            Total Elections
                        </CardBody>
                        <br/>
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                        </Card>
                    </Col>

                </div>
                
                <br/>
                
            </div>

        return(dashTemp);
    }
}

export default UserDashBoard;
/*import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Candidate from '../Components/Candidate';

export default class UserDashBoard extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col><Candidate/></Col>
            <Col>Voting</Col>
            <Col><Candidate/></Col>
          </Row>
        </Container>
      </>
    )
  }
}

/*import React from 'react';
import './dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '../components/voter/voterdrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,Grid} from '@material-ui/core';

function UserDashBoard(props) {
    const container={margin:'100px 10px 10px 10px'}
  const draw ={margin:'0px',width:'30%'}
  const content={margin:'0px 0px 0px 240px',width:'70%'}
  const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: '10px',
    },
  }));
  const classes = useStyles();
    const handlelogout = () =>{
        props.history.push('./Login');
    }
    return (
        <>
        <Grid style={draw}>
    <Drawer  />
    </Grid>
    <Grid style={content} align="left">
    <AppBar position="fixed"  className={classes.appBar}>

    <Toolbar>
        <h1>sdfsaaa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;     </h1>
         <h1> Vote Blocks</h1>

        </Toolbar>        
      </AppBar>
    <div style={container} >
    <main className={classes.content}>
        <div className={classes.toolbar} />
      <h1>Welcome to Dashboard Page</h1>
      </main>
      </div>
      </Grid>

        <div className="dashboard">
            <p>Welcome User!</p><br/><br/>
      <input type="button" onClick={handlelogout} value="Logout" />
        </div>
        </>
    );
}

export default UserDashBoard;
*/
