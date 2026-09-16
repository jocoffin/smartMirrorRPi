## smartMirror RPi - raspberry pi smart mirror display

# phase 1 : install software
Downloaded v24.20 (LTS) for arm64 MAC using nvm including npm.
Install node.js from nvm: ‘run nvm install –lts’
Ensure using LTS: ‘nvm use –lts’
Check node and npm version: node = v24.20.0. Npm = 11.19.0

# Phase 2: write first javascript

mirror.js ( will become magicmirror javascript)
    │
    ▼
  Node.js
    │
    ▼
Terminal output ( will become RPi )

## in terminal
Create mirror directory ‘mkdir smart-mirror’
Change directory: ‘cd smart-mirror’
Check loci: ‘pwd’


Create JS file: ‘touch mirror.js’
Verify it exists: ‘ls’
write: ‘nano mirror.js’n
Create var for mirrorName
    Type message in console, save, exit file
    
Run mirror.js to display message


# Phase 3: write smart  mirror stuff
    Open file: nano mirror.jc
    Create new variables 
    Write to console



# Phase 4: learn JSON

JSON - a structured way to represent data. Java script open network
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

## in terminal
    Cd to smart-mirror: “cd ~/smart-mirror
    Check where repository is “git rev-parse --show-toplevel
    Ensure it has its own folder for smart mirror
    cd ~/smart-mirror
    rm -rf ~/.git
    git init
    git rev-parse --show-toplevel
    Access file using nano mirror.js

