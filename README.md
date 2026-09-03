# smartMirrorRPi
raspberry pi smart mirror display

Downloaded v24.20 (LTS) for arm64 MAC using nvm including npm.
Dont install. Manually copy hyperlink into terminal
Restart terminal
Install node.js from nvm: ‘run nvm install –lts’
Ensure using LTS: ‘nvm use –lts’
Check node and npm version: node = v24.20.0. Npm = 11.19.0

Phase 1B: write first javascript

mirror.js ( will become magicmirror javascript)
    │
    ▼
  Node.js
    │
    ▼
Terminal output ( will become RPi )



Create mirror directory ‘ mkdir smart-mirror’
Change directory: ‘cd smart-mirror’
Check loci: ‘pwd’
Create JS file: ‘touch mirror.js’
Verify it exists: ‘ls’
Use text editor/vscode/terminal to script: ‘nano mirror.js’n
Create var for mirrorName
Type message in console.
Save using control + O
Enter
Control + X to exit 
Run mirror.js to display message


Phase 2: write smart  mirror stuff
Open file: nano mirror.jc
Create new variables 
Write to console



Phase 3: learn JSON

JSON - a structured way to represent data 
             WEATHER API - from magic mirror 
                  │
                  │ JSON
                  ▼
            Node.js app
                  │
                  ▼
            MagicMirror
                  │
                  ▼
               Display
                  │
                  ▼
    
             72°F
             Sunny
             Humidity 42%

Cd to smart-mirror: “cd ~/smart-mirror
Check where repository is “git rev-parse --show-toplevel
Ensure it has its own folder for smart mirror
cd ~/smart-mirror
rm -rf ~/.git
git init
git rev-parse --show-toplevel
\
Access file using nano mirror.js

