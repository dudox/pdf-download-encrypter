
#!/bin/bash

# deactivate service mode
systemctl stop webhook.service

# update source code
git pull 

# update Node dependencies
npm install --no-interaction --prefer-dist

# activate service mode
systemctl start webhook.service
