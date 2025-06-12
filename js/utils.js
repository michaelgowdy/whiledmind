const getDirections = "https://www.google.com/maps/dir/35.1698944,-101.8560512/7120+I-40+Frontage+Rd+%23460,+Amarillo,+TX+79106/@35.1826058,-101.9576537,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x870150496f960d65:0x211aaeffac2d6686!2m2!1d-101.9156664!2d35.188229?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D";
const scrollDist = 350;
const iterables = [
	{
		id: 'services-list',
		html: '<p class="service-card">$1</p>',
		list: [
			"Grief",
			"Anxiety",
			"Depression",
			"Trauma",
			"Relationship Issues",
			"Body Image Disorders",
			"Pregnancy, Prenatal, Postpartum",
			"Adjustment Disorder",
			"Adoption",
			"Aging",
			"Behavioral Issues",
			"Career Counseling",
			"College Mental Health",
			"Communication Issues",
			"Coping Skills",
			"Life Transitions",
			"Men's Issues",
			"Multicultural Concerns",
			"Peer Relationships",
			"Self Esteem",
			"Social Anxiety",
			"Faith Issues"
		]
	},
	{
		id: 'approaches',
		html: '<p>$1</p>',
		list: [
			"Behavioral Therapy",
			"Cognitive Behavioral Therapy",
			"Restoration Therapy",
			"Experiential Therapy",
			"Compassion Focused",
			"Trauma Focused",
		]
	}
]

// pass in an iterable obj { id: string, html: string, list: string[] }
function loadIterable(item) {
	const parentElement = document.getElementById(item.id);

	item.list.forEach(i => {
		parentElement.insertAdjacentHTML('beforeend', item.html.replace('$1', i));
	});
}

iterables.forEach(iterable => {
	loadIterable(iterable);
});

// Back to top button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > scrollDist || document.documentElement.scrollTop > scrollDist) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}