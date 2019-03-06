# front-end

### Authors & Acknowledgements: Fletcher LaRue, Siobhan Niess, Ryan Gallaway, Michael George, Jared Pattison

### About BuzzCard
BuzzCard is a mobile application made to help people make personal and/or professional connections everyday. An application that anyone can use to help meet new people and exchange information and stay connected with one another. BuzzCard helps you not only get connected and build your network but to also help you reconnect and follow up with them on a later date. Share your social media accounts, email, and other forms of contact.

### Download & Installation
* [Find BUZZCARD in the Google Play store:](https://play.google.com/store/apps/details?id=com.jaredpattison.BUZZCARD)

### Features
* Create a profile to save your contact information ranging from your email and phone number to your social media accounts
  * You are able to edit this information so that you have the choice with each conncetion what you are going to share with them 
* Generate a QR code based off of the contact information that you are wanting to share with someone
* A built in camera that reads QR codes, this is used when someone wants to share with contact information with you via QR code
* History that contains the information from the people that you have connected with when using the application 
  * The history contains the details of each person has shared with you

### Navigation
* Scanner
  * Built in camera used to scan QR codes from a potentail connection
* Profile
  * Edit andUpdate what are wanting to share with someone you are going to share with a connection
* Contacts
  * History of the contacts that you are connected with and their details
* Share 
  * The QR code that is generated based off of the contact information that you have chosen to share 

### Links and Resources
* [repo](https://github.com/401-final-project/front-end)

### License
    * MIT

### Modules
* `App.js` -this is the file that renders the sections of the application ans how they are rendered
* `actions.js` -this is the file that contains the fonctionality for the actions within the application
* `index.js` -this is the file that renders the application
* `components/anchor.js` -this is the file that handles the links that are used for social media connections
* `components/contact-list.js` -this is the file that conatins the contact list that you enerate from making connections
* `components/detailsModal.js` -this is the file that handles the dynamic links to social media shares and the functionality of which of those appear on QR code page based on your preferences 
* `components/qr.js` -this is the file that generates the unique QR code based off of your preferences
* `components/scanner.js` -this is the file that contains the camera to scan the QR code created by who you are connecting with
* `components/share-button.js`-this is the file renders the page with your unique QR code
* `components/share-selector.js` -this is the file where you are able to use the switch button on what ways of contact that you choose to share
* `components/switch.js` -this is the file that contains the functionality for the switch button
* `components/storage.js` -this is the file that holds the functionality for the storage of contacts
* `components/TabBarIcon.js` -this is the file that conatins the icon details 
* `components/urlComments.js` -this is the file contains the titles for each of the personal and media connections
* `conditionals/conditionals.js` -this is the file that conatins the conditionals 
* `navigation/appNavigator.js`-this is the file that conatins the functionality for navigating through the application
* `navigation/mainTabNav.js`-this is the file that contains the titles for each section in the navigation bar at the bottom of the application
* `screens/contactScreen.js` -this is the file that contains the contact screen and renders all of the connections that you have made
* `screens/formScreen.js` -this is the file the contains the form that you will fill out witht he contact information that you will be sharing
* `screens/scanScreen.js` -this is the file that contains the camera to scan other QR codes that your connections have generated
* `screens/shareScreen.js` -this is the file that holds your unique QR code
* `store/actions.js` -this is the file that conatins the list of actions that are used throughout the application
* `store/index.js` -this is the file that renders in the reducer to store information
* `store/reducers.js` -this is the file that holds the functionaity for all of the social media and personal information you select as default and then updates state when new information is rendered 

### Dependencies
* `react`
* `react-native`
* `expo`
* `redux`
* `react-redux`

#### Running the app
* First thing that you will have to do is to download the Expo app on your mobile device 
* Then you are going to want to fork the repo 
  * start the application by running the command `npm start` in your terminal
* Once the new window has appeared, scan the QR code that has been generated with your scanner from the Expo application 
  * Now you are ready to use BuzzCard and make your connections!