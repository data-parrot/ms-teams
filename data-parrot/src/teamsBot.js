const { TeamsActivityHandler, TurnContext } = require("botbuilder");

class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
    this.onConversationUpdate(async (context, next) => {
      if (context.activity.membersAdded && context.activity.membersAdded.length > 0) {
        for (const member of context.activity.membersAdded) {
          if (member.id !== context.activity.recipient.id) {
            console.log(`App installed by user: ${member.id}`);
          }
        }
      }

      await next();
    });

    this.onMessage(async (context, next) => {
      console.log("TeamsBot onMessage: " + context.activity.text);
      await context.sendActivity("Hello, I'm TeamsBot!");
      await next();
    });

  }


}
module.exports.TeamsBot = TeamsBot;
