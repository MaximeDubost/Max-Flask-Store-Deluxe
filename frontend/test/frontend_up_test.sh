# Tests if the frontend of the application is up (status code 200) or not.

status_code=$(curl --write-out %{http_code} --silent --output /dev/null http://127.0.0.1:80/index.html)

if [ "$status_code" -ne 200 ]
then
  if [ "$status_code" -eq 000 ]
  then
    status_code=500
  fi
  echo "Test failed (status code: $status_code)."
else
  echo "Test successed (status code: $status_code)."
fi
