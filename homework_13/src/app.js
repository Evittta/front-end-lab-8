app.controller('Ctrl', function($scope, defaultPosts) {
	const posts = defaultPosts;
	this.allPosts = posts;
	this.isEditing = false;
	this.error = false;

	this.addNewPost = newPost => {
		const post = Object.assign({}, newPost);
		if (!post.url) {
			post.url = `assets/cat.jpg`;
		} else {
			post.url = `assets/${post.url}`;
		}
		post.categories = post.categories.split(' ');
		posts.push(post);
		resetForm(newPost);
		this.categories = addCategoryToList();
	};
	resetForm = post => {
		for (let key in post) {
			post[key] = null;
		}
		this.addingNewPost = false;
	};
	this.editPost = () => {
		this.isEditing = true;
	};
	this.updatePost = newPost => {
		if (!newPost.title || !newPost.description) {
			this.error = true;
			return;
		}
		$scope.post = newPost;
		this.isEditing = false;
	};
	this.filterPost = category => {
		if (category !== 'All') {
			this.allPosts = posts.filter(
				post => post.categories.indexOf(category) !== -1
			);
		} else {
			this.allPosts = posts;
		}
	};
	addCategoryToList = () => {
		const categories = ['All'];
		posts.forEach(item => {
			item.categories.forEach(category => {
				if (categories.indexOf(category) === -1) {
					categories.push(category);
				}
			});
		});
		return categories;
	};
	this.categories = addCategoryToList();
});
