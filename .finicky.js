// Use https://finicky-kickstart.now.sh to generate basic configuration
// Learn more about configuration options: https://github.com/johnste/finicky/wiki/Configuration

module.exports = {
  defaultBrowser: "Safari",
  handlers: [
    {
      // Open google.com and *.google.com urls in Firefox
      match: [
        "ci-team.asg.com*", // match ci-team.asg.com urls
        finicky.matchDomains(/.*\.ci-team.asg.com/) // use helper function to match on domain only
      ],
      browser: {
        name: "Google Chrome",
        profile: "Profile 1"
      }
    },
    {
      // Open git.rocketsoftware.com and *.git.rocketsoftware.com urls in Firefox
      match: [
        "git.rocketsoftware.com*", // match git.rocketsoftware.com urls
        finicky.matchDomains(/.*\.git.rocketsoftware.com/) // use helper function to match on domain only
      ],
      browser: {
        name: "Google Chrome",
        profile: "Profile 1"
      }
    },
    {
      // Open rocketsoftware.webex.com and *.rocketsoftware.webex.com urls in Firefox
      match: [
        "rocketsoftware.webex.com*", // match rocketsoftware.webex.com urls
        finicky.matchDomains(/.*\.rocketsoftware.webex.com/) // use helper function to match on domain only
      ],
      browser: {
        name: "Google Chrome",
        profile: "Profile 1"
      }
    },
    {
      // Open git.rocketsoftware.com and *.git.rocketsoftware.com urls in Firefox
      match: [
        "*.rocketsoftware.com*", // match *.rocketsoftware.com urls
        finicky.matchDomains(/.*\.*.rocketsoftware.com/) // use helper function to match on domain only
      ],
      browser: {
        name: "Google Chrome",
        profile: "Profile 1"
      }
    },
  ]
}