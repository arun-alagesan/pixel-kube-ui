source .env

BRANCH=$(git branch --show-current)

echo $BRANCH

VER=1.0.0

# if [ $BRANCH = 'dev'] || ["$BRANCH" = 'test'] || ["$BRANCH" = 'release']; then
# 	VER=$(npm version minor);
# fi;
VER=$(npm version minor);
echo $VER

read -p "Env File to use    :" ENV_FILE
echo $ENV_FILE

IMAGE_NAME=$DOCKER_ID$APP_NAME:$VER
echo $IMAGE_NAME

VER=$VER ENV_FILE=$ENV_FILE IMAGE_NAME=$IMAGE_NAME docker compose build --no-cache

read -p "Would you like to push the image to the registry? (y/N)    :" push
if [ $push = 'y' ] 
    then 
        VER=$VER ENV_FILE=$ENV_FILE IMAGE_NAME=$IMAGE_NAME  docker compose push
fi

read -p "Would you like to tag or make a GIT release of this build version?(y/N) :" gittag

if [ $gittag = 'y' ] 
    then 
        git push origin $VER
fi
