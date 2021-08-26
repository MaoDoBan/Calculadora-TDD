# Calculadora com back-end Deno
## Versão 0.1.0-alpha

Projeto para treinar TDD em TypeScript no Deno.

---

## Objetivos em mente:

- [ ] Front-end básico
- [ ] Websocket para comunicação bilateral front - back
- [ ] Cálculos: + - * / ^ log raiz
- [ ] Contador de contas já feitas, salvo em .json
- [ ] Migrar BD para sqlite
- [ ] Cobertura de testes do back 100%
- [ ] Testes para o front?

---

### Tecnologias utilizadas:
- [Deno](https://deno.land/)
- [Deno Testing](https://deno.land/std/testing)
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
deno run --allow-net src/app.ts