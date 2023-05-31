// script.js
document.getElementById('lambdaButton').addEventListener('click', function() {
  // Get values from text boxes
  var userId = document.getElementById('userId').value;
  var xyz = document.getElementById('xyz').value;

  // Configure API Gateway endpoint URL
  var apiEndpoint = 'https://YOUR_API_GATEWAY_ENDPOINT.execute-api.YOUR_AWS_REGION.amazonaws.com/YOUR_API_STAGE';

  // Prepare JSON payload
  var payload = {
    "userid": userId,
    "x|y|z": xyz
  };

  // Make API request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', apiEndpoint, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Lambda function invoked successfully:', xhr.responseText);
        // Handle the response from the Lambda function as needed
      } else {
        console.error('Error invoking Lambda function:', xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(payload));
});
