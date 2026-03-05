function autoQuiz() {
	const interval = setInterval(() => {
		// Récupérer toutes les réponses disponibles
		const answers = document.querySelectorAll(".answer-option");

		if (answers.length === 0) {
			console.log("Quiz terminé !");
			clearInterval(interval);
			return;
		}

		// Choisir une réponse au hasard
		const randomIndex = Math.floor(Math.random() * answers.length);
		const randomAnswer = answers[randomIndex];

		// Cliquer sur la réponse
		randomAnswer.click();
		console.log("Réponse choisie :", randomAnswer.innerText.trim());

		// Attendre un petit délai avant de cliquer sur "Suivant"
		setTimeout(() => {
			const nextButton = Array.from(document.querySelectorAll("button"))
				.find(btn => btn.innerText.includes("Suivant"));

			if (nextButton && !nextButton.disabled) {
				nextButton.click();
				console.log("Question suivante...");
			} else {
				console.log("Bouton suivant désactivé ou fin du quiz.");
				clearInterval(interval);
			}
		}, 400);

	}, 400); // délai entre chaque question
}

// Lancer l'automatisation
autoQuiz();