echo $GCLOUD_SERVICE_KEY > gcloud-service-key.json
COPY --from=builder build/* /usr/share/nginx/html
docker login -u _json_key --password-stdin https://us.gcr.io < gcloud-service-key.json
docker build -f deploy/Dockerfile -t $CONTAINER_IMAGE .
docker tag $CONTAINER_IMAGE "us.gcr.io/$GCLOUD_PROJECT_ID/$CONTAINER_IMAGE"
docker push "us.gcr.io/$GCLOUD_PROJECT_ID/$CONTAINER_IMAGE"