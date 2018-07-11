app.controller('MainController', ['$scope', 
	function($scope){
		$scope.title = "What I've been up to.";
		$scope.subtitle = 'Here is a few projects Ive recently worked on.  For more up to date work feel free to reach out with an email.';
		$scope.logo = 'images_work/logo3444.svg';
		$scope.contacttitle = 'Say Hello';
		$scope.contactSub = " I'm available for freelance work.";
		$scope.contactMessage = 'If your starting a project, need assistance with development or design I can be reached by email at any time.  Feel free to send me a message.';
		$scope.letter = 'images_work/letterButton.svg';
		$scope.natemail = 'images_work/workWelcome.svg';
		$scope.projects = [
			{
				cover:'images_work/artPort.png',
				button: 'button',
				path: 'http://natesart.site',
				explain: 'Using AnglularJS and Bootstrap I created a Art Portofolio page that displays some of my most recent paintings and projects.  Check it out.'
			},
			{
				cover: 'images_work/mattSite234.png',
				button: 'button',
				path: 'http://test.mattcurranproductions.com',
				explain: 'Using CMS I renovated a video production portfolio.  The purpose was to update the layouts for the site using plugins, CSS, and jQuery to create a smooth navagation for a better user experience',
			},
			{
				cover: 'images_work/comey3344.png',
				button: 'button',
				path: 'http://sketchpadmanifesto.com',
				explain: "A life long passion for painting and drawing led me to creating a art blog.  Using frameworks like AngularJS and Bootstrap I created a blog that provides a skectch every day of 2018.  Check it out."
			},
			{
				cover: 'images_work/enviroAir.png',
				button: 'button',
				explain: 'Using a few pre-selected themes in CMS I updated a site from the early 2000s.  The purpose was to create a updated site that provided easy navagation and user experience.  This requred the use of HTML, CSS, and jQuery.',
			},
			{
				cover: 'images_work/davidSite22.png',
				button: 'button',
				path: 'Game/Index4.html',
				explain: 'Using HTML, CSS, JavaScript I created a game where you must feed David Schwimmer while avoiding trash and Jennfier Aniston.  The purpose of this was to create interaction between divs and allow for points to be collected until the game is over.',
			}
		];
}]);