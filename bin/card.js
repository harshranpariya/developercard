#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Harsh Ranpariya'),
  handle: chalk.cyan('@harshranpariya'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('Software Developer'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.cyan('https://twitter.com/harsh_ranpariya'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/harshranpariya'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://linkedin.com/in/harshranpariya'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://harsh.tech'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx harshranpariya'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  twittering +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
