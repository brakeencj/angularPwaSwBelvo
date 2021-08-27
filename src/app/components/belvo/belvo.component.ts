import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belvo',
  templateUrl: './belvo.component.html',
  styleUrls: ['./belvo.component.css']
})

export class BelvoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    loadScript('https://cdn.belvo.io/belvo-widget-1-stable.js');
  }
}
// check our node package on github
// https://github.com/belvo-finance/belvo-js
var belvo = require('belvo').default;

var client = new belvo(
  'bf73fb50-62f1-4775-9a71-311d8e8817dd',
  'eiE-xIw8P-Z4COTZlhoZGE5DCTZst5il-I5JXd38-AoQKzXYlPq76GkCtT@2afrR',
  'https://sandbox.belvo.com'
);

client.connect().then(function() {
  client.widgetToken
    .create()
    .then((response: any) => {
      res.json(response);
    })
    .catch((error: any) => {
      res.status(500).send({
        message: error.message
      });
    });
});

// Insert the following code after AppComponent() class from Step 1.
async function createWidget() {
  // Function to call your server-side to generate the access_token and retrieve the your access token
  async function getAccessToken() {
    // Make sure to change /get-access-token to point to your server-side.
    return fetch('http://localhost:3001/auth/token', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error('Error:', error));
  }
  const successCallbackFunction = (link: string, institution: string) => {
    // Do something with the link and institution,
    // such as associate it with your registered user in your database.
  };
  const onExitCallbackFunction = (data: string) => {
    // Do something with the exit data.
  };
  const onEventCallbackFunction = (data: string) => {
    // Do something with the exit data.
  };

  const config = {
    // Add your startup configuration here.

    callback: (link: string, institution: string) =>
      successCallbackFunction(link, institution),
    onExit: (data: string) => onExitCallbackFunction(data),
    onEvent: (data: string) => onEventCallbackFunction(data)
  };
  const { access } = await getAccessToken();
  // @ts-ignore
  window.belvoSDK.createWidget(access, config).build();
}

function loadScript(src: string) {
  let node = document.createElement('script');
  node.src = src;
  node.type = 'text/javascript';
  node.async = true;
  // Assign the callback which will create the Widget
  node.onload = createWidget;
  document.getElementsByTagName('head')[0].appendChild(node);
}
