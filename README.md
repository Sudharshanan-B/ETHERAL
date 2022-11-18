# Ethereal

## Setting up the Development Environment
## Pre-Requisite
* npm or yarn must be installed
* Any Unix Based System(Linux, OS x)

## Installing Ganache-Local Blockchain Network
* Download Ganache from [here](https://trufflesuite.com/ganache/)
* Give the Execution permission by opening terminal with the directory where you downloaded the file by the command:

`chmod +x Filename.AppImage` 

## Installing Truffle
* You can install truffle using npm or yarn by the opening the terminal with your project directory and typing the following command:

`npm install truffle` -- for npm

`yarn add truffle` --for yarn

## Installing Dependencies
* Go to the client directory and open the terminal with the client directory and type the following command

`npm install` for npm users

`yarn` for yarn users

## Downloading Metamask
* Download the Metamask from your Browser Extension(Firefox, Brave, Chrome)

## Setting up Metamask to local test environment
* After set up of your Metamask click on top Right Corner Where Ethereum Mainnet is present
* Click on Add Network option
* Go to the Bottom and Find add Network Manually
* Set the Network Name as `Banking test network`
* Set the New RPC URL as `http://127.0.0.1:7545`
* Set the chain id as `1337`
* Set the Currency Symbol as `ETH`
* Click on Save

## Running The Project

## Step 1
* Staring **Ganache** (Linux, OS X etc.), run the command where you downloaded the ganache server in your terminal: 

`./Filename.AppImage `

## Step 2
* Compile the Contracts using the following command in your directory where you have cloned the project:

`truffle migrate --reset` 

## Step 3
* Go to the Clients directory of the proj in terminal and run the following command to start 
the localhost:

`yarn start` --if yarn used

`npm start` --if npm used

## Step 4 

* Metamask promt Enter your Password
* Select The network as Banking test network

## Step 5

* click on import an account in metamask copy the private key of any account in ganache and paste in metamask.