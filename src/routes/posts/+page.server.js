import * as fs from 'fs';

export const load = async () => {
	const postsFs = fs.readdirSync('./static/content/posts', {
		encoding: 'utf-8',
		withFileTypes: true
	});

	const posts = postsFs.map((f) => f.name);

	return {
		posts: posts
	};
};
