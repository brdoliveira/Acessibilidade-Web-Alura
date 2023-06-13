var campoEmail = document.querySelector('#email')
var sugestao = document.querySelector('#sugestao')

var domains = ['hotmail.com', 'gmail.com', 'aol.com'];
var topLevelDomains = ["com", "net", "org"];


campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        distanceFunction: superStringDistance,  // optional
        suggested: function(suggestion) {
            sugestao.style.display = 'inline-block';
            sugestao.textContent = 'Você quis dizer: ' + suggestion.full + '?';
            sugestao.parentNode.classList.add('contatoCampo--erro');
            campoEmail.classList.add('contatoCampo--validouErro');
            sugestao.setAttribute('tabindex', '0');
            sugestao.setAttribute('role', 'alert');
        }
    });
});