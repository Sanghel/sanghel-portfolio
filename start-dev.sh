#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 22 --silent
cd /Users/sanghelgonzalez/Documents/projects/sanghel-portfolio
npm run dev -- --port 4321
