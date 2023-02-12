const fs = require('fs')
const path = require('path')
export const setTitle = (title) => {
	if (process.platform == 'win32') {
		process.title = title;
	} else {
		process.stdout.write('\x1b]2;' + title + '\x1b\x5c');
	}
}

export const getEdgeWindows = () => {
	let suffix = `\\Microsoft\\Edge\\Application\\msedge.exe`;
	let prefixes = [
			process.env.LOCALAPPDATA,
			process.env.PROGRAMFILES,
			process.env["PROGRAMFILES(X86)"],
	].filter((v) => !!v);
	for (let prefix of prefixes) {
			let edgePath = path.join(prefix, suffix);
			if (fs.existsSync(edgePath)) {
					return edgePath;
			}
	}
	return null;
}

