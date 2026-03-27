// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Buying a product', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('a user is on the login page', null, { page }); 
    await When('the user enters \'<username>\' and <password>\'', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"password"}]},{"cells":[{"value":"standard_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"performance_glitch_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"problem_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"error_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"visual_user"},{"value":"secret_sauce"}]}]}}, { page }); 
    await And('the user clicks on the login button', null, { page }); 
    await Then('the user is logged in succesfully', null, { page }); 
    await And('the user should see the products page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given a user is on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When the user enters '<username>' and <password>'","stepMatchArguments":[{"group":{"start":16,"value":"'<username>'","children":[{"children":[{"children":[]}]},{"start":17,"value":"<username>","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"And the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in succesfully","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"And the user should see the products page","stepMatchArguments":[]}]},
]; // bdd-data-end