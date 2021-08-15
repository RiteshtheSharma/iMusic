 

fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5f49130a0cmshb697de5d813ef4cp1d2c20jsn864c085035d4",
		"x-rapidapi-host": "shazam.p.rapidapi.com"
	}
})
.then(response => response.json()).then((data)=>{
Array.from(data.tracks,function(e){console.log(e)});

})
.catch(err => {
	console.error(err);
});
