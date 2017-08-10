
const cards = [
  {type: 'sports', name: 'Demaryius Thomas', city:'Denver', sport:'football', college:'Georgia Tech', country:'USA', position:'WR', team:'Broncos', rep:'2'},
  {type: 'sports', name: 'Von Miller', city:'Denver', sport:'football', college:'Texas A&M', country:'USA', position:'LB', team:'Broncos', rep:'4'},
  {type: 'sports', name: 'Russell Wilson', city:'Seattle', sport:'football', college:'Wisconsin', country:'USA', position:'QB', team:'Seahawks', rep:'4'},
  {type: 'sports', name: 'Richard Sherman', city:'Seattle', sport:'football', college:'Stanford', country:'USA', position:'CB', team:'Seahawks', rep:'4'},
  {type: 'sports', name: 'Jordan Howard', city:'Chicago', sport:'football', college:'Alabama', country:'USA', position:'RB', team:'Bears', rep:'1'},
  {type: 'sports', name: 'Mitch Trubisky', city:'Chicago', sport:'football', college:'North Carolina', country:'USA', position:'QB', team:'Bears', rep:'2'},
  {type: 'sports', name: 'Jamal Murray', city:'Denver', sport:'basketball', college:'Kentucky', country:'USA', position:'PG', team:'Nuggets', rep:'1'},
  {type: 'sports', name: 'Nikola Jokic', city:'Denver', sport:'basketball', college:'Int: Serbia', country:'USA', position:'PF', team:'Nuggets', rep:'2'},
  {type: 'sports', name: 'Russell Westbrook', city:'Oklahoma City', sport:'basketball', college:'UCLA', country:'USA', position:'PG', team:'Thunder', rep:'5'},
  {type: 'sports', name: 'Enes Kanter', city:'Oklahoma City', sport:'basketball', college:'Kentucky', country:'USA', position:'C', team:'Thunder', rep:'1'},
  {type: 'sports', name: 'Dwyane Wade', city:'Chicago', sport:'basketball', college:'Marquette', country:'USA', position:'SG', team:'Bulls', rep:'5'},
  {type: 'sports', name: 'Robin Lopez', city:'Chicago', sport:'basketball', college:'Stanford', country:'USA', position:'C', team:'Bulls', rep:'2'}, 
  {type: 'sports', name: 'Kris Bryant', city:'Chicago', sport:'baseball', college:'University of San Diego', country:'USA', position:'3B', team:'Cubs', rep:'2'},
  {type: 'sports', name: 'Kyle Schwarber', city:'Chicago', sport:'baseball', college:'Indiana', country:'USA', position:'C', team:'Cubs', rep:'4'}, 
  {type: 'sports', name: 'Trevor Story', city:'Denver', sport:'baseball', college:'LSU', country:'USA', position:'SS', team:'Rockies', rep:'2'}, 
  {type: 'sports', name: 'Charlie Blackmon', city:'Denver', sport:'baseball', college:'Georgia Tech', country:'USA', position:'CF', team:'Rockies', rep:'2'}, 
  {type: 'sports', name: 'Felix Hernandez', city:'Seattle', sport:'baseball', country:'Venezuela', position:'P', team:'Mariners', rep:'2'},
  {type: 'sports', name: 'Robinson Cano', city:'Seattle', sport:'baseball', country:'Dominican Repulblic', position:'2B', team:'Mariners', rep:'4'},

  {type: 'music', name: 'Kristin Anna Valtysdottir', band:'Mum', city:'Reykjavik', country:'Iceland', decade:'2000', genre:'Experimental Pop', Instrument:'Vocals', gender:'female', rep:'1'},
  {type: 'music', name: 'Jonsi Birgisson', band:'Sigur Ros', city:'Reykjavik', country:'Iceland', decade:'2000', genre:'Post Rock', Instrument:'Guitar', gender:'male', rep:'2'},
  {type: 'music', name: 'Jofridur Akadottir', band:'Samaris', city:'Reykjavik', country:'Iceland', decade:'2010', genre:'EDM', Instrument:'Electronic', gender:'female', rep:'1'},
  {type: 'music', name: 'Damian Kulash', band:'OK Go', city:'Chicago', country:'USA', decade:'2000', genre:'Alternative Rock', Instrument:'Vocals', gender:'male', rep:'2'},
  {type: 'music', name: 'Al Jourgensen', band:'Ministry', city:'Chicago', country:'USA', decade:'1990', genre:'Industrial Metal', Instrument:'Guitar', gender:'male', rep:'4'},
  {type: 'music', name: 'Billy Corgan', band:'Smashing Pumpkins', city:'Chicago', country:'USA', decade:'1990', genre:'Alternative Rock', Instrument:'Guitar', gender:'male', rep:'5'},
  {type: 'music', name: 'Courtney Love', band:'Hole', city:'Seattle', country:'USA', decade:'1990', genre:'Alternative Rock', Instrument:'Vocals', gender:'male', rep:'3'},
  {type: 'music', name: 'Kim Gordon', band:'Sonic Youth', city:'New York City', country:'USA', decade:'1990', genre:'Noise Rock', Instrument:'Guitar', gender:'female', rep:'4'},
  {type: 'music', name: 'Joanna Newsom', city:'Los Angeles', country:'USA', decade:'2000', genre:'Indie Folk', Instrument:'Harp', gender:'female', rep:'2'},
  {type: 'music', name: 'Jeff Tweedy', band:'Wilco', city:'Chicago',country:'USA',  decade:'2000', genre:'Alternative Rock', Instrument:'Guitar', gender:'male', rep:'4'},
  {type: 'music', name: 'Robin Pecknold', band:'Fleet Foxes', city:'Seattle', country:'USA',  decade:'2000', genre:'Indie Folk', Instrument:'Vocals', gender:'male', rep:'3'},
  {type: 'music', name: 'Dave Grohl', band:'Foo Fighters', city:'Seattle', country:'USA',  decade:'2000', genre:'Alternative Rock', Instrument:'Drums', gender:'male', rep:'5'},
  {type: 'music', name: 'Eddie Vedder', band:'Pearl Jam', city:'Seattle', country:'USA',  decade:'1990', genre:'Alternative Rock', Instrument:'Vocals', gender:'male', rep:'5'},
  {type: 'music', name: 'Kurt Cobain', band:'Nirvana', country:'USA', city:'Seattle', decade:'1990', genre:'Alternative Rock', Instrument:'Vocals', gender:'male', rep:'5'},
  {type: 'music', name: 'Jay Z', city:'New York City', country:'USA', decade:'2010', genre:'Hip Hop', Instrument:'Vocals', gender:'male', rep:'5'},
  {type: 'music', name: 'Beyonce', city:'Los Angeles', country:'USA', decade:'2010', genre:'R&B', Instrument:'Vocals', gender:'female', rep:'5'},
  {type: 'music', name: 'Jane Birkin', city:'Paris', country:'France', decade:'1960', genre:'French Pop', Instrument:'Vocals', gender:'female', rep:'1'},

  {type: 'movies', name: 'Scarlett Johansson', movie:'Lost In Translation', country:'USA', decade:'1980', gender:'female', rep:'5'},
  {type: 'movies', name: 'Jennifer Lawrence', movie:'The Hunger Games', country:'USA', decade:'1990', gender:'female', rep:'5'},
  {type: 'movies', name: 'Charlize Theron', movie:'Mad Max', country:'South Africa', decade:'1990', gender:'female', rep:'5'}, 
  {type: 'movies', name: 'Meryl Streep', movie:'The Devil Wears Prada', country:'South Africa', decade:'1950', gender:'female', rep:'5'},  
  {type: 'movies', name: 'Audrey Hepburn', movie:'Breakfast At Tiffanys', country:'Belgium', decade:'1930', gender:'female', rep:'4'}, 
  {type: 'movies', name: 'Natalie Portman', movie:'Star Wars', country:'Israel', decade:'1980', gender:'female', rep:'5'}, 
  {type: 'movies', name: 'Jennifer Aniston', movie:'Office Space', country:'USA', decade:'1960', gender:'female', rep:'4'}, 
  {type: 'movies', name: 'Jenny Agutter', movie:'Logans Run', country:'USA', decade:'1950', gender:'female', rep:'3'},
  {type: 'movies', name: 'Nicole Kidman', movie:'Moulin Rouge', country:'Australia', decade:'1970', gender:'female', rep:'4'},
  {type: 'movies', name: 'Winona Ryder', movie:'Edward Scissorhands', country:'USA', decade:'1970', gender:'female', rep:'5'}, 
  {type: 'movies', name: 'Harrison Ford', movie:'Star Wars', country:'USA', decade:'1970', gender:'male', rep:'5'},
  {type: 'movies', name: 'Mel Gibson', movie:'Mad Max', country:'Australia', decade:'1950', gender:'male', rep:'4'},
  {type: 'movies', name: 'Bill Murray', movie:'Lost In Translation', country:'USA', decade:'1950', gender:'male', rep:'5'},
  {type: 'movies', name: 'Brad Pitt', movie:'Fight Club', country:'USA', decade:'1960', gender:'male', rep:'5'},
  {type: 'movies', name: 'Johnny Depp', movie:'Edward Scissorhands', country:'USA', decade:'1960', gender:'male', rep:'5'},
  {type: 'movies', name: 'George Clooney', movie:'Oceans Eleven', country:'USA', decade:'1960', gender:'male', rep:'5'},  
  {type: 'movies', name: 'George Peppard', movie:'Breakfast At Tiffanys', country:'USA', decade:'1930', gender:'male', rep:'1'}, 
  {type: 'movies', name: 'Stephen Root', movie:'Office Space', country:'USA', decade:'1970', gender:'male', rep:'1'},

  {type: 'city', name: 'Albuquerque', city: 'Albuquerque', state:'New Mexico', country:'USA', rep:'1'},
  {type: 'city', name: 'Chicago', city: 'Chicago', state:'Illinois', country:'USA', team:'Cubs', college:'University of Chicago', rep:'4'},
  {type: 'city', name: 'Los Angeles', city: 'Los Angeles', state:'California', country:'USA', team:'Lakers', college:'University of California', rep:'4'},
  {type: 'city', name: 'Denver', city: 'Denver', state:'Colorado', country:'USA', team:'Broncos', college:'University of Colorado', rep:'3'},
  {type: 'city', name: 'New York City', city: 'New York City', state:'New York', country:'USA', team:'Yankees', college:'New York University', rep:'5'},
  {type: 'city', name: 'Seattle', city: 'Seattle', state:'Washington', country:'USA', team:'Seahawks', college:'University of Washington', rep:'3'},  
  {type: 'city', name: 'Reykjavik', city: 'Reykjavik', country:'Iceland', college:'University of Iceland', rep:'2'},
  {type: 'city', name: 'Mexico City', city: 'Mexico City', country:'Mexico', college:'Universidad Nacional Autonoma de Mexico', rep:'2'},
  {type: 'city', name: 'Paris', city: 'Paris', country:'France', college:'Paris-Sorbonne University', rep:'4'}
];

module.exports = cards;