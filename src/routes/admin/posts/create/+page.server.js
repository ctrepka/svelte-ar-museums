import * as fs from 'fs';

/** @type {import('../../../$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const fd = await request.formData();
		const data = Object.fromEntries(fd);

		fs.writeFile(`./static/content/posts/${data.test}.json`, JSON.stringify(data), (e) => {
			if (e) {
				console.error(e);
			} else {
				console.log('File written successfully\n');
			}
		});
	}
};
