//console.log('aviso');
		//window.alert('Seja bem vindo!!!!!');

		//console.log(texto);
		//alert("Seja bem-vindo "+ texto);
		// control / para comentarios 

		let texto = prompt('Informe seu nome:')
		let nome = document.querySelector("#nomeUsu");
		nome.textContent = texto;


		// Ação para mostrar os alertas
		document.querySelectorAll('.show-alert-btn').forEach(function (button) {
			button.addEventListener('click', function () {
				const targetId = this.getAttribute('data-target');
				const targetAlert = document.getElementById(targetId);

				// Remove a classe 'hidden' para mostrar o alerta
				targetAlert.classList.remove('hidden');
			});
		});

		// Ação para esconder os alertas
		document.querySelectorAll('.close-btn').forEach(function (button) {
			button.addEventListener('click', function () {
				const alertBox = this.closest('.alert-box');

				// Adiciona a classe 'hidden' para esconder o alerta com animação
				alertBox.classList.add('hidden');
			});
		});

