const { execSync } = require('child_process');

execSync("git add . ; git commit -m 'project updated' ; git push -u origin");
