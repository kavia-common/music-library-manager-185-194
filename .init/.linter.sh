#!/bin/bash
cd /home/kavia/workspace/code-generation/music-library-manager-185-194/simple_music_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

