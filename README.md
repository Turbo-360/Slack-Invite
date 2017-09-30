# slack-invite

Slack Invite is a simple Turbo 360 (https://www.turbo360.co) vector for automating invites to a Slack workspace. Ideal for use when a new user registers to your application - Slack Invite automatically sends an invitation to your Slack channel. A Slack Access Token is required to send invitations. To generate an access token for your workspace, see here: https://api.slack.com/custom-integrations/legacy-tokens

## Documentation
To invite a user to your Slack workspace, query the Slack Invite endpoint with the following url parameters:
- 'email' (email of invitee)
- 'slack' (name of your Slack workspace)
- 'token' (your Slack access token)

### Example
The following example invites 'dkwon@turbo360.co' to the Turbo 360 workspace

```
GET

http://api.turbo360.co/vectors/slack-invite-jofodi/slackInvite?email=dkwon@turbo360.co&slack=turbo-360&token=xoxp-89488687398-89437605251-243287901797-405e48067e6581402ffcaeabf93b6a99
```

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and run npm install:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

