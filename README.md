# Calculadora com back-end Deno

### Versão 0.6.2-beta

Projeto para treinar TDD em TypeScript no Deno.

---

### Objetivos em mente:

- [x] Back-end com os cálculos, executar por comandos no terminal
- [x] Cálculos: + - * / ^ log raiz
- [ ] Contador de contas já feitas, salvar em .json
- [ ] Front-end básico
- [ ] Websocket para comunicação bilateral front - back
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

### Comandos para rodar o back-end:
deno run --allow-net app.ts
deno run --allow-net --allow-read server.ts