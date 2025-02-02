class CoffeeMachine {
    #codes = {};
    #capsuleCount = 0;

    aggiungiCapsule(n) {
        this.#capsuleCount += n;
    }
    aggiungiCodice(c) {
        if (c === '') {
            throw new Error('Codice vuoto');
        }
        if (c in this.#codes) {
            throw new Error('Codice già presente');
        }
        this.#codes[c] = 0;
    }
    eroga(n, c) {
        if (!(c in this.#codes)) {
            throw new Error('Codice non presente');
        }
        if (this.#capsuleCount < n) {
            throw new Error('Capsule insufficienti');
        }
        this.#codes[c] += n;
        this.#capsuleCount -= n;
    }
    report(c){
        if (c === undefined) {
            return {
                total: this.#capsuleCount,
            };
        }
        if (!(c in this.#codes)) {
            throw new Error('Codice non presente');
        }

        return {
            total: this.#capsuleCount,
            consumed: this.#codes[c]
        };
    }
}

function coffeeMachineButtonAction(action) {
    const total = document.getElementById('total-capsules');
    const consumed = document.getElementById('user-consumed-capsules');
    const userCode = document.getElementById('user-code');
    const errorLabel = document.getElementById('error');

    return () => {
        try {
            action(userCode.value.trim());

            // report
            const report = coffeeMachine.report(userCode.value.trim());
            total.textContent = report.total.toString();
            consumed.textContent = 'Consumate: ' + report.consumed;
            consumed.hidden = false;

            // hide error
            userCode.classList.remove('error');
            errorLabel.hidden = true;
        } catch (e) {
            // show error
            userCode.classList.add('error');
            errorLabel.textContent = e.message;
            errorLabel.hidden = false;
        }
    };
}

const coffeeMachine = new CoffeeMachine();

document.getElementById('user-code').addEventListener('click',
        event => event.target.classList.remove('error'));

document.getElementById('add-user').addEventListener('click', coffeeMachineButtonAction(
    userCode => coffeeMachine.aggiungiCodice(userCode)
));

document.getElementById('get-coffee').addEventListener('click', coffeeMachineButtonAction(
    userCode => coffeeMachine.eroga(1, userCode)
));

document.getElementById('load-capsules').addEventListener('click', () => {
    const capsuleCount = parseInt(document.getElementById('load-capsules-count').value.trim());
    coffeeMachine.aggiungiCapsule(isNaN(capsuleCount) ? 0 : capsuleCount);
    document.getElementById('total-capsules').textContent = coffeeMachine.report().total.toString();
});