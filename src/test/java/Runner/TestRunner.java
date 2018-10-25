package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Features/Profile.feature", 
				format = { "pretty", "json:target/Result.json","html:target/site/cucumber-pretty" ,"html:test-output"},
				glue = {"Steps"},
			//	tags = " @Regression",
				strict=true,
				dryRun=false,
				monochrome=true)
public class TestRunner   {



}
