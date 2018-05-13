let app = angular.module('app', []);
const defaultPosts = [
	{
		title: 'My dog',
		categories: ['Animal', 'Dog'],
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore deserunt 
			officia nesciunt nemo dignissimos illum, quasi eum ipsam quam maxime at eos sit 
			similique, consequatur necessitatibus delectus rerum ex labore cupiditate! Harum, 
			itaque cumque optio commodi ad eius. Perferendis explicabo ullam aspernatur incidunt 
			fugiat blanditiis necessitatibus. Id, sapiente incidunt.`,
		url: 'assets/dog.jpg'
	},
	{
		title: 'My parrot',
		categories: ['Animal', 'Parrot'],
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore deserunt 
			officia nesciunt nemo dignissimos illum, quasi eum ipsam quam maxime at eos sit 
			similique, consequatur necessitatibus delectus rerum ex labore cupiditate! Harum, 
			itaque cumque optio commodi ad eius. Perferendis explicabo ullam aspernatur incidunt 
			fugiat blanditiis necessitatibus. Id, sapiente incidunt.`,
		url: 'assets/parrot.jpg'
	}
];
app.value('defaultPosts', defaultPosts);
