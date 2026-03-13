(async function autoQCM() {
	function sleep(ms) {
		return new Promise(r => setTimeout(r, ms));
	}

	while (true) {
		// récupérer toutes les réponses
		const answers = [...document.querySelectorAll('.question-card .space-y-3 button')];

		if (answers.length === 0) {
			console.log("Aucune réponse trouvée");
			break;
		}

		// choisir une réponse aléatoire
		const random = answers[Math.floor(Math.random() * answers.length)];
		random.click();
		console.log("Réponse choisie :", random.innerText);

		await sleep(100);

		// bouton suivant
		const nextBtn = [...document.querySelectorAll('button')]
			.find(b => b.textContent.includes("Suivant"));

		if (!nextBtn) {
			console.log("Fin du QCM");
			break;
		}

		nextBtn.click();

		await sleep(100);
	}
})();



