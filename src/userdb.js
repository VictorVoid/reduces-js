let users_values = {
	name: [ 
	  'Victor Igor'
	, 'José Carlos'
	, 'Joao Messias'
	, 'Andy Self'
	, 'Archer Gly'
	],
	username: [
	  'vitus'
	, 'jose123'
	, 'juau'
	, 'joaome'
	, 'andy321'
	]
};

let addUsers = user => user['name']
	.reduce((prev, curr, i, a) => {
		prev.push({
		  name: curr
		, bio: 'place your bio here'
		, dateregister: Date.now()
		, avatarpath: 'place your avatar here'
		, auth: {
		    username: user['username'][i]
		  , email:    user['username'][i]+'@hotmail.com'
		  ,	password: curr + Math.random().toString(36)
		  , online:   true
		  , disabled: false
		  , hashtoken: 'hash()'
		  }
		});
		return prev;
	},[]);
console.log(addUsers(users_values));
