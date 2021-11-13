import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import React from 'react';
export const ParkListContainer = styled.div`


  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
`;

export const ParkContainer = styled.div`
    display: flex;
	border: solid 5px blue;
	flex-direction:  column;
	padding: 10px;
	width: 300px:
	box-shadow: 0 6px 20px 0 #aaa;
	
`;

export const CoverImage = styled.img`
    height: 200px;
	width: 200px;
	
`;

export const ParkName = styled.span`
    font-size: 30px;
	font-weight: bold;
	color: black;
	margin: 10px 0;
	border: solid 3px green;
	cursor: pointer;
	color: green;
	text-align: center;
`;

export const ActivitiesText = styled.span`
    font-size: 30px;
	color: black;
	border: solid 1px green;
	margin: 10px 0;
	cursor: pointer;
	padding: 10px 15px;
	border-radius: 4px;
	color: green;
	text-align: center;
	
`;


export const WebcamPic = styled.span`
    font-size: 18px;
	border: solid 1px green;
	color: black;
	margin: 10px 0;
	cursor: pointer;
	padding: 10px 15px;
	border-radius: 4px;
	color: green;
	text-align: center;
	
`;

export const LearnMore = styled(WebcamPic)`
	color: #eb3300;
	border: solid 1px #eb3300;
	
`;




export const ParkComponent = (props) => {
	const [show, setShow] = React.useState(false);
	const { parkObj } = props;

	return (
	<>
	<Dialog open={show}>
	<DialogTitle id="alert-dialog-slide-title">Activities</DialogTitle>
	<DialogContent>
	   <table>
	      <thead>
		    <th>Activity</th>
			
		  </thead>
		  <tbody>
		      {parkObj.activities.map((activityObj) => (
			         <tr>
						 
			             <td>{ parkObj.activities[0].name}{ parkObj.activities[2].name} { parkObj.activities[1].name} { parkObj.activities[3].name}</td> 
						  
                            		        
			         </tr>
			  ))}
		    
		  </tbody>
	   </table>
	
	</DialogContent>
	
	<DialogActions>
	   <ActivitiesText onClick={() => setShow("")}>Close</ActivitiesText>
	</DialogActions>
	</Dialog>
	
	<ParkContainer>
	   <CoverImage src = {parkObj.images[0].url}/>
        <ParkName>{parkObj.fullName}</ParkName>
        <ActivitiesText onClick={() => setShow(true)}>Activities</ActivitiesText>
	    <LearnMore onClick={() => window.open(parkObj.url)}>LearnMore</LearnMore>
	</ParkContainer>
	</>
	);
};