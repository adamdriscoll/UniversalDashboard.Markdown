workflow "New workflow" {
  resolves = ["GitHub Action for npm"]
  on = "repository_vulnerability_alert"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "npm update"
}
