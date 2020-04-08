console.log(`
   ".=========================================.",
   "                ,@@@@@@@,                  ",
   "        ,,,.   ,@@@@@@/@@,  .oo888o.      ",
   "      ,%%&%&&%,@@@@@/@@@@@@,8888\\88/8     ",
   "     ,&%8                         8/8o     ",
   "    ,%&\\  Created By Mohamad Asli  /88'    ",
   "    %&&%8                         8888'    ",
   "    %&&%/ %&%%&&@@\\ V /@@' \`88\\8 \`/88'     ",
   "    \`&%\\ \` /%&'    |.|        \\ '|8'       ",
   "        |o|        | |         | |         ",
   "        |.|        | |         | |         ",
   "",
`);

const util = require(__dirname + '/core/util');
console.log('\tI\'m gonna make you rich', '\n\n');

const dirs = util.dirs();

if(util.launchUI()) {
  return require(util.dirs().web + 'server');
}

const pipeline = require(dirs.core + 'pipeline');
const config = util.getConfig();
const mode = util.gekkoMode();

if(
  config.trader.enabled &&
  !config['I understand that BitBot only automates MY OWN trading strategies']
)
  util.die('Do you understand what BitBot?');

// > Ever wonder why fund managers can't beat the S&P 500?
// > 'Cause they're sheep, and sheep get slaughtered.
pipeline({
  config: config,
  mode: mode
});

