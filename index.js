var shell = require('shelljs');
const program = require('commander');

program
  .option('-g, --guilt', 'output guilt 1 guilt log down')
  .option('-l, --log', 'output the simple log')
  .option('-c, --config', 'configure global name and email')
  .option('-d, --debug', 'debug');

program.parse(process.argv);

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if(program.debug) {
	console.log(program.opts());
	shell.exit(1);
}

if(program.guilt) {
	shell.exec('git-guilt HEAD~1 HEAD');
}

if(program.log) {
	if (shell.exec('git log --pretty=format:"%h - %an, %ar : %s"').code !== 0) {
	  shell.echo('Error: Git commit failed');
	  shell.exit(1);
	}
}

if(program.config) {
	let name = [];
 	if(program.args.length > 4 || program.args.length < 2) {
	  console.log("Accepts name (with or without quote) and email only");
	  process.exit(1);
	} 
	const args = program.args;
	const numOfArgs = args.length;
	const email = args[numOfArgs - 1];
	console.log("Email:", email);
	for(i = 0; i <= numOfArgs - 2; i++) {
		name.push(args[i]);
	}
	const username =  name.join(" ");
	console.log("Name:", username);
        shell.exec('git config --global user.name "' + username + ' "&& git config --global user.email ' + email);

	process.exit(1);
}




