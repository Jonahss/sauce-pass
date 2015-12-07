SauceLabs = require('saucelabs')

account = new SauceLabs({
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
})

var passed = process.argv[2] < 1

account.getJobs(function(err, jobs) {
  var id = jobs[0].id
  account.updateJob(id, { passed }, console.log)
})
