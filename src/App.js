import {useState} from "react";
import Axios from "axios";
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchInput,SearchIcon,Container} from './components/headerComponent.js';
import {ParkListContainer,ParkContainer,CoverImage,ParkName,ActivitiesText,WebcamPic,LearnMore,ParkComponent} from './components/parkComponent'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";



const API_KEY = "X94a5W3xgHVUPe0XXBGMaJGhKrlzM8lodlTrnUrP"





function App() {
	//states
	const [timeoutId, updateTimeoutId] = useState();
	const [parkList, updateParkList] = useState([]);
	
	   // api fetch with axios
	const fetchPark = async (searchString) => {
		const response = await Axios.get
	(`https://developer.nps.gov/api/v1/parks?q=${searchString}?&api_key=${API_KEY}`);
	  updateParkList(response.data.data);
	
	
	console.log(response);
};
	
	const onTextChange = (event) => {
		clearTimeout(timeoutId);
	const timeout = setTimeout(() => fetchPark(event.target.value), 700);
		updateTimeoutId(timeout);		
	};
	
	   
	   
	 
	
	
  return (
    <Container>
	<Header>
	
	<AppNameComponent>
	
	<AppIcon src="park.svg"/> 
	
	National Parks and Activity finder
	
	
	</AppNameComponent>
	
	 <SearchComponent>
	    <SearchIcon src="/search-icon.svg"/>
        <SearchInput placeholder="(ex search Aca or National)" onChange={onTextChange}/>	   
	 </SearchComponent>
	 
	</Header>
         <ParkListContainer>
		    {parkList.length && parkList.map((parkObj) => (
			
			<ParkComponent parkObj={parkObj} />
			))}
			
			
		 </ParkListContainer>
	</Container>
	
 );
}

export default App;
