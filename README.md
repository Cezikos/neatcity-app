
## Setup & run
#### Tools

1.  [VSC](https://code.visualstudio.com/)
2.  [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pl)
3.  [NodeJS](https://nodejs.org/en/)


#### Building
Type in terminal:
1.  `git clone https://github.com/falseinput/neatcity-app.git`

2.  `cd neatcity-app`

3.  `npm install`
If error occurs probbably you need to run (only on linux):
- `sudo sysctl -w fs.inotify.max_user_instances=1024`
- `sudo sysctl -w fs.inotify.max_user_instances=1024`
4. `npm run start`
Open expo app on the phone, scan QR code displayed in terminal and wait for the app to build & run.

#### Development environment
1. Install Flow `npm install -g flow-bin`
2. Install Eslint `npm install -g eslint`
3. Open VSC and install following plugins: `flowtype.flow-for-vscode`, `dbaeumer.vscode-eslint`
4.  In File -> Preferences -> Setting -> User Settings paste:
```
{
    "javascript.validate.enable": false,
    "eslint.options": {
        "indent": ["error", 2]
    },
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "extensions.ignoreRecommendations": false,
    "editor.tabSize": 2,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
  }
```
5. Restart VSC.
