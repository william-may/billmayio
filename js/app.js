$(function () {
  // Smooth Scrolling

  $('a[href*="#"]:not([href="#"])').click(function () {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  setPrincipleOfTheDay();

});

function setPrincipleOfTheDay() {

  var principles = [
    { name: "Single Responsibility Principle", description: "A class should have only a single responsibility" },
    { name: "Open Closed Principle", description: "software entities … should be open for extension, but closed for modification." },
    { name: "Liskov Substitution Principle", description: "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." },
    { name: "Interface Segregation Principle", description: "The Interface Segregation Principle states that no client should be forced to depend on methods it does not use.</br> The principle is implemented by splitting interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces. This principle is intended to keep a system decoupled and thus easier to refactor, change, and redeploy." },
    { name: " Dependency Inversion Principle", description: " The dependency inversion principle refers to a specific form of decoupling software modules. </br>When following this principle, the conventional dependency relationships established from high-level, policy-setting modules to low-level, dependency modules are reversed, thus rendering high-level modules independent of the low-level module implementation details." },
    { name: "Don't Repeat Yourself", description: "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. When the DRY principle is applied successfully, a modification of any single element of a system does not require a change in other logically unrelated elements." }
  ];

  var min = Math.ceil(0);
  var max = Math.floor(principles.length);
  var index = Math.floor(Math.random() * (max - min)) + min;

  $(".principleOfTheDay h1").html(principles[index].name);
  $(".principleOfTheDay h4").html(principles[index].description);
}


