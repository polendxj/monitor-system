#!/bin/sh
npm run build-dev
ssh mofa.lemontv.me "rm -rf /services/websites/*"
scp mofaweb.tgz mofa.lemontv.me:
ssh mofa.lemontv.me "tar xzvf mofaweb.tgz -C /services/websites/"
ssh mofa.lemontv.me "rm mofaweb.tgz"
rm mofaweb.tgz
