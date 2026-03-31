// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Login with valid credentials', { tag: ['@loginfeature', '@regression', '@sanity', '@validUser'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the login page', null, { page }); 
    await When('the user enters username', null, { page }); 
    await And('the user enters password', null, { page }); 
    await And('clicks the login button', null, { page }); 
    await Then('the user will be logged in successfully', null, { page }); 
    await Then('the user will be redirected to the product page', null, { page }); 
  });

  test('Login with invalid credentials', { tag: ['@loginfeature', '@regression', '@lockedUser'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the login page', null, { page }); 
    await When('the user enters username', null, { page }); 
    await And('the user enters password', null, { page }); 
    await And('clicks the login button', null, { page }); 
    await Then('the user will see an error message', null, { page }); 
    await And('user is back to login page', null, { page }); 
  });

  test('Login with invalid credentials', { tag: ['@loginfeature', '@regression', '@invalidUser'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the login page', null, { page }); 
    await When('the user enters invalid username', null, { page }); 
    await And('the user enters invalid password', null, { page }); 
    await And('clicks the login button', null, { page }); 
    await Then('the user will see an error message as no user found', null, { page }); 
    await And('user is back to login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@loginfeature","@regression","@sanity","@validUser"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user enters username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user enters password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And clicks the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the user will be logged in successfully","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user will be redirected to the product page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@loginfeature","@regression","@lockedUser"],"steps":[{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user enters username","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user enters password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And clicks the login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the user will see an error message","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And user is back to login page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@loginfeature","@regression","@invalidUser"],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user enters invalid username","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And the user enters invalid password","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And clicks the login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the user will see an error message as no user found","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And user is back to login page","stepMatchArguments":[]}]},
]; // bdd-data-end