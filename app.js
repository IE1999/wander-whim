const express = require('express');
const app = express();
const port = 3000;

//countries API json data
let countries = {
    'northamerica' : ['Antigua and Barbuda', 'The Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba',
    'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico',
    'Nicaragua', 'Panama', 'Saint Kitts & Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad & Tobago', 'United States'],
    'southamerica' : ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'],
    'africa' : ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central african Republic',
    'Chad', 'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasha)', 'Ivory Coast', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini',
    'Ethiopia', 'Gabon', 'The Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania',
    'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa',
    'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'],
    'asia' : ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus', 'Georgia',
    'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia',
    'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 
    'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'],
    'europe' : ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia',
    'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova',
    'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 
    'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'],
    'oceania' : ['American Samoa', 'Australia', 'Cook Islands', 'Fiji', 'French Polynesia', 'Guam', 'Johnston Atoll', 'Kiribati', 'Marshall Islands', 'Micronesia', 'Nauru', 
    'New Caledonia', 'New Zealand', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Papua New Guinea', 'Pitcairn Islands', 'Samoa', 'Solomon Islands', 'Tonga', 
    'Tokelau', 'Tuvalu', 'Vanuatu', 'Wallis and Futuna'],

};

// Route for countries API
app.get('/countries/:continent', (req, res) => {
    let continent = req.params.continent;
    if(countries[continent]) {
        res.json(countries[continent]);
    } else {
        res.status(404).send('Not found');
    }
});

//Activities API json data
let activities = {
    'relaxation' : ['spa day', 'sunset watching', 'stargazing', 'wine tasting', 'boat cruise','visit botanical gardens', 'nature walk','reading retreat', 'countryside biking', 'lakeside stroll'],
    'beach' : ['windsurfing', 'collecting seashells', 'beach bonfire', 'parasailing', 'jet skiing', 'snorkeling', 'beach volleyball', 'beachcombing', 'swimming', 'sunbathing'],
    'culture' : ['explore historic landmarks', 'attend local festivals', 'try local dishes', 'explore historic towns', 'visit local museums and art galleries', 'take guided city tours',
    'watch cultural performances', 'visit local artisans'],
    'adventure' : ['skydiving', 'paragliding', 'bungee jumping', 'rock climbing', 'spelunking', 'hiking', 'mountain biking', 'zip-lining', 'hang gliding', 'wildlife safari'],
    'sightseeing' : ['visit famous landmarks', 'explore historical sites', 'take a scenic drive', 'view architectural marvels', 'go on a guided city tour', 'visit religious temples',
    'take a river cruise', 'take a scenic countryside drive', 'go on a photography tour', 'explore scenic sites'],
    'nightlife' : ['dancing at nightclubs', 'attend live music concerts', 'bar hopping', 'attend comedy shows', 'Karaoke nights', 'club hopping', 'casino gambling', 
    'watch a cabaret show', 'late-night street food', 'pub quizzes'],
    'nature' : ['birdwatching', 'hiking', 'camping', 'fishing', 'canoeing', 'stargazing in remote areas', 'wildlife watching', 'horseback riding', 
    'berry picking', 'river cruise'],
};
// Route for activities API
app.get('/activities/:activity', (req, res) => {
    let activity = req.params.activity;
    if(activities[activity]) {
        res.json(activities[activity]);
    } else {
        res.status(404).send('Not found');
    }
});

//budget api json data
let budgets = {
    'low' : ['$1,000', '$1,300', '$1,500'],
    'medium' : ['$3,000', '$3,500', '$4,000'],
    'high' : ['$10,000', '$15,000', '$20,000', '$30,000', '$40,000', '$50,000'],
};

// Route for budget API
app.get('/budgets/:budget', (req, res) => {
    let budget = req.params.budget;
    if(budgets[budget]) {
        res.json(budgets[budget]);
    } else {
        res.status(404).send('Not found');
    }
});


//Start the server
app.listen(port, () => {
    console.log('server is running smoothly!');
});