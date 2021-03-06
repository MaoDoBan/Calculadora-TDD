# Calculadora com back-end Deno

### Versão 1.0.0

Projeto para treinar TDD em TypeScript no Deno.

---

### Objetivos em mente:

- [x] Back-end com os cálculos, executar por comandos no terminal
- [x] Cálculos: + - * / ^ log raiz
- [x] Front-end: html + css
- [x] Front-end: js
- [x] Websocket para comunicação bilateral front - back
- [ ] Contador de contas já feitas, salvar em .json
- [ ] Migrar contador para sqlite
- [x] Cobertura de testes grande o suficiente
- [ ] Testes para o front?

---

### Tecnologias utilizadas:
- [Deno](https://deno.land/)
- [Deno Testing](https://deno.land/manual/testing)
- TypeScript
- HTML
- CSS
- [Markdown](https://guides.github.com/features/mastering-markdown/)
- [Versionamento](https://semver.org/lang/pt-BR/)
- Commits seguindo meu padrão adaptado

---

### Padrão para commits (prefixo e título):
```
+ adicionando algo
- removendo algo
~ refatorando algo
: arrumando bug
! mensagem (normalmente algo importante)
= estilo ou alteração mínima, não afeta o funcionamento do componente
    renomeando algo: oldName > newName

cada commit tem o nome da(s) classe(s) (ou arquivo(s)) afetado(a)(s)
```

---

### Tutorial para instalar o Deno, necessário para executar o código
https://www.youtube.com/watch?v=2iLeRzHvc10&t=379s

### Comandos para rodar o back-end:
deno run --allow-net --allow-read app.ts
deno run --allow-net --allow-read app.ts calc 2 + 2
deno test --allow-read