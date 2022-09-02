const shell = require("shelljs")

if (!shell.which("surge")) {
	shell.echo("Sorry, this script requires surge")
	shell.exit(1)
}

module.exports = ({ env }) => {
	const domain = env.FRONTEND_DOMAIN

	shell.cd(__dirname)
	shell.exec("npm run build")
	shell.cp("build/index.html", "build/200.html")
	shell.exec(`surge ./build --domain ${domain}`)
}
