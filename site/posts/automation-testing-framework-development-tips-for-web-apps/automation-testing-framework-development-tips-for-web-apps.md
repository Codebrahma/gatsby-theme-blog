---
templateKey: 'blog-post'
title: 'Automation Testing Framework Development Tips For Web Apps'
date: 2015-12-28
featuredpost: false
description: >-
 Here are some of the tips on automation testing framework development. We help startups with offshore web application development.
keywords:
- automation testing framework
- automation testing
- offshore web development
- offshore mobile app development
- application development company
author: Hemanth 
link: /automation-testing-framework-development-tips-for-web-apps
category:
- Development
tags:
- automation testing
- web application development
---

While every automation tester is familiar with Selenium RC, Selenium IDE and Selenium WebDriver, when it comes to automation framework development a whole new methodology swoops in. How to implement a POM(Page Object Model)? Which unit testing framework to use? Is framework development dependent on every language? Which reporting tool should be included in the framework? Which type of framework needs to be used for different types of applications? etc., are some of the questions that arises when developing a framework. I will continue writing this blog using Java as my language.

![Seleniumlogo][1]  
**Page Object Model**

Firstly, when considering developing a framework we need to first keep into consideration, how to implement Page Object Model. It is a design pattern to create Object Repository for web UI elements(nothing but Page Objects). This design pattern is so popular that it is kind of like a necessity and what someone would hope for in every framework.

There are several ways you can implement Page Object Model.

One simple and classical way is to put all your xpaths or IDs etc. as a key-value pair in a Property File and Read the value using the key inside the Selenium methods.

For Eg: Inside Sample.properties
    
    
```java
  google_Xpath=selenium
  
  public class SearchData {
  
    public static String propertiesReader(String Filename, String key) throws IOException{		
      FileReader reader = new FileReader(Filename);
      Properties properties = new Properties();
      properties.load(reader);
      String s = properties.getProperty(key);
      return s;	
    }
  }
  
  driver.findElement(By.xpath(SearchData.propertiesReader("path of the Sample.properties file","google_Xpath"));
```
For every class, we need to create a property file.

The other way is to use PageFactory class provided by Selenium.Using the constructor, we can initialize the PageObjects of the particular class using the static method initElements of the PageFactory class. Here is what I mean.
    
    
```java   
Class Sample{
  public Sample(WebDriver driver){
  PageFactory.initElements(driver, this);
  }

  @FindBy(xpath="//div[@id='products_page']/ul/li[1]")
  private WebElement firstProduct;
  public void clickProduct(){
    firstProduct.click();
  }
}
```    
    

While creating the object of the class pass the driver inside the constructor.
    
```java    
Sample s = new Sample(driver); 
```
The above line will initialize my Page Objects.

The use of PageFactory would be ofcourse, primarily to implement Page Object Model. But, also there is another advantage that we can notice here. It would be to eliminate the way we conventionally locate Web Elements. Instead of providing driver.findElement(By.xpath("xpath here")), we can instead easily provide an annotation called @FindBy(xpath="xpath here").

**Choosing a Unit Testing Framework**

Secondly, we find ourselves in ambiguity when we are writing a framework about which unit testing framework to use. Ofcourse, most popular and two most common unit testing frameworks are Junit and TestNG.

Most of them would agree including me that by far TestNG is the best unit testing framework in particular writing automation test scripts since it has so many advantages like having its own reporting tool, providing us the capability to implement data-driven testing, having a lot annotations, parallel execution, grouping and so on, over Junit or any other unit testing framework. But that is not the case.

It depends on what type of framework you are going for. In most cases, yes agreed TestNG is the best option. But assume that we are developing a framework using Cucumber and language being Java. Again, yes we can implement Cucumber-TestNG but I would bluntly say it doesn't matter since Cucumber annotations and its features take over. The optimal way to go about is to implement Cucumber-Junit since Cucumber and Junit are tightly coupled.

**Is Automation Testing Framework Development language dependent**

Coming to the next important topic, would be naive in paper but it is a pretty good question. Let me just dive into to the answer. The framework development is NOT dependent on the language, but having said that the way we implement the framework might differ. Here is what I mean, Page Object Model can be achieved using the PageFactory class in Java but WebDriver for Python API doesn't include PageFactory. Having said this it doesn't mean that we cannot implement POM. Here is a [link][2] to implement the same.

 
![night-computer-hdd-hard-drive \(1\)][3]

**Reporting tool**

Next topic that I would like to discuss is about the Reporting tool integration with the framework. Most of the framework developers would agree when I say that this is quite important because the way we provide reports to stakeholders should be lucid enough for them to clearly understand about the test suite. It would simple define how we present ourselves. 

If we are using maven as the build management tool I would highly recommend that the reporting tool to be Allure. It is an elegant reporting tool which provides a lot of clarity about the test suite. The best part is that they have provided their adapters for popular languages like Java, PHP, Ruby, Python and C# test frameworks.

 
If we are using Cucumber, this is the best reporting tool. It provides a separate section for feature files. Right now, I can easily say that Allure is the best reporting tool available. If we are not using Cucumber, then the best reporting tool would be Extent reports by Anshoo Arora. Provides coherence for the testing coverage pretty well. Also one advantage of this reporting tool is that it is independent of the build management tool.

Of course, there are other good reporting tools but in my opinion these two are the best available today.

**Choosing the type of Framework**

Last and the most important question that arises during discussion is to choose the type of framework. This can be achieved based on the size and complexity involved in the project. What I am trying to say is that if your project is a pretty small one, then blindly go for a hybrid framework with Behaviour Driven Development approach being the high priority. One way to implement BDD is to use Cucumber. Since it is a small application, feature files that are involved while writing the suite would be obviously less.

Now a question might arise saying why it is not optimal to follow BDD approach for large complex applications. The answer is simple. If our project is big and complex, feature files and the corresponding methods written for every When,And,Then, etc. will simply increase. Maintaining these methods will be extremely difficult.

If a large complex application involves testing using a lot of test data, then blindly for a hybrid framework with data-driven approach being the high priority. One classical way to implement this is to simply read data from a property file. Another way to implement a data-driven approach and according to me a much better way considering the maintenance of the test data would be read the data from an excel file.  
Using Apache POI or JXL we can write custom libraries to read rows and columns from an excelsheet. By the way, Apache POI has the ability to read data from excel files having .xls and .xlsx extensions whereas JXL has the ability to read data from excel files having .xls extension.

The last thing I would like to say before I end this blog is that the agenda of developing a framework is to make life simple for us. It is a way to organize your code so that whoever views or works on the code should be able understand pretty well. Hence anyone who is thinking about developing an automation framework should primarily consider about the way he is going to organize his data. In simple words, he should think about how to make it easy to write automation scripts for himself and the people working with him.

[1]: ./images/seleniumlogo.png
[2]: https://code.google.com/p/selenium/source/browse/py/test/selenium/webdriver/common/google_one_box.py
[3]: ./images/night-computer-hdd-hard-drive-1-1024x681.jpg

  