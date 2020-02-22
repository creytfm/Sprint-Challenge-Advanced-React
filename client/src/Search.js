import axios from "axios";
import React from "react";


class Search extends React.Component {
state = {
players: []
};

componentDidMount() {
axios.get("http://localhost:5000/api/players").then(response => {
this.setState({
players: response.data
});
console.log(response.data);
});
}

componentDidUpdate(prevProps, prevState) {
if (prevState.players !== this.state.players) {
console.log("new players state");
}
}

render() {
return (
<body>
<div getAthlete={this.getAthlete} />
{this.state.players.map(name => {
return (
<div key={name.id}>
<h1>{name.name}</h1>
<h3>{name.country}</h3>
</div>
);
})}
</body>
);
}
}
export default Search;