app.controller('MainController', ['$scope', 
	function($scope){
		$scope.bio = 'A freelance web developer/designer residing in Philadelphia, PA.  I have a passion for art and developing content for web and mobile devices.';
		$scope.logo = 'images/logo334.svg';
		$scope.work = 'images/nateWork.svg';
		$scope.services = [
			{
				title: "Let me Help",
				// subtitle: 'Check out my skills below!',
				explain: "Using a diverse set of skills that include HTML, CSS, and jQuery I exercise the most up to date practices from responsive design to implementing SVG files.  ",
				cover: "images/skills-Logo.svg"
			},
			{
				title: "Like to see more?",
				subtitle: "Check out some of my recent projects",
				// explain: 'by visiting my work page.',
			}
		];
		$scope.contacts =[
			{
				title: "Let's Talk",
				subtitle: "I'm available for freelance work",
				explain: "Are you starting a project?  Need assistance with design, or help with developing an application?  Feel free to reach out and we can discuss while the iron's hot!",
				cover: "images/letter_button.svg",
				subcover: "images/nateMail23.svg"
			}

		];
}]);