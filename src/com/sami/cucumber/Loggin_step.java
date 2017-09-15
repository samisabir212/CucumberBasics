package com.sami.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by sami on 9/14/17.
 */
public class Loggin_step {


    @Given("^user navigates to facebook website1$")
    public void user_navigates_to_facebook_website1() throws Throwable {

        System.out.println("@Given navigate to facebook.com");
    }

    @When("^user \"([a-zA-Z]{1,})\"  the homepage title1$")
    public void user_validates_the_homepage_title1() throws Throwable {
        System.out.println("@when user validates homepage title");

    }

    @Then("^user entered \"([a-zA-Z]{1,})\" username$")
    public void user_entered_valid_username(String username) throws Throwable {

        System.out.println("@Then user enters" + username + "username");

    }

    @And("^user entered \"([a-zA-Z]{1,})\"  password$")
    public void user_entered_valid_password(String password) throws Throwable {

        System.out.println("@And user enters" + password + "password");

    }

    @Then("^user should be successfully logged in$")
    public void user_should_be_successfully_logged_in () throws Throwable {

        System.out.println("@Then user should be successfully logged in");

    }


    /***********invalid data scenerio***********/

    @Given("^user navigates to facebook website2$")
    public void user_navigates_to_facebook_website2() throws Throwable {

        System.out.println("@Given navigate to facebook.com");
    }

    @When("^user validates the homepage title2$")
    public void user_validates_the_homepage_title2() throws Throwable {
        System.out.println("@when user validates homepage title");

    }

    @Then("^user entered \"([a-zA-Z]{1,})\" username$")
    public void user_entered_invalid_username(String username) throws Throwable {

        System.out.println("@Then user enters" + username + "username");

    }

    @And("^user entered \"([a-zA-Z]{1,})\"  password$")
    public void user_entered_invalid_password(String password) throws Throwable {

        System.out.println("@And user enters" + password + "password");

    }

    @Then("^user should not be successfully logged in$")
    public void user_should_not_be_successfully_logged_in () throws Throwable {

        System.out.println("@Then user should be successfully logged in");

    }





}
