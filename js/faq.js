const faqList = [
	{
		question: "Do you accept insurance?",
		answer: "I do not accept insurance"
	},
	{
		question: "What ages do you accept?",
		answer: "Anyone from 9 to 99!"
	},
	{
		question: "What can I expect in my first session?",
		answer: "We will spend some time going over the intake paperwork and then talking through what brings you in."
	}
];

function loadFaq(list) {
	const parentElement = document.getElementById("faq-list");

	list.forEach(i => {
		parentElement.insertAdjacentHTML('beforeend', `<p>${i.question}</p><p>${i.answer}</p>`);
	});
}

// loadFaq(faqList);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}