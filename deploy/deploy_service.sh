echo $GCLOUD_SERVICE_KEY > gcloud-service-key.json

wget https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz

tar zxvf google-cloud-sdk.tar.gz && ./google-cloud-sdk/install.sh --usage-reporting=false --path-update=true

PATH=google-cloud-sdk/bin:$PATH

gcloud --quiet components update

gcloud auth activate-service-account --key-file ./gcloud-service-key.json
echo "done1" 

gcloud config set project $GCLOUD_PROJECT_ID

echo "done2" 
gcloud compute instances update-container portfolio \
    --container-image us.gcr.io/$GCLOUD_PROJECT_ID/$CONTAINER_IMAGE \
    --zone us-central1-a 