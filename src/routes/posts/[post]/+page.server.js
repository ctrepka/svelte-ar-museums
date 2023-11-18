import * as fs from 'fs';

export const load = async (event) => {
    const paths = event.url.pathname.split("/")
	const fileName = paths[paths.length - 1]
	return loadContent('./static/content/posts', fileName)
};


/**
 * @param {string} contentPath - The file path to content.
 * @param {string} contentId - The file name.
 */
function loadContent(
	contentPath,
	contentId,
) {
	const content = fs.readFileSync(`${contentPath}/${contentId}.json`, 'utf-8')
	return JSON.parse(content)
}