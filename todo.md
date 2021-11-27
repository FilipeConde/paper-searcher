# CheckList

## Pontos técnicos - Puppeteer

- Acessar elementos (focar)

      await page.focus(locator)

- Clicar em elementos

      await page.click(locator)

- Digitar em elementos (primeiro focar)

      await page.keyboard.type('content')

- Acessar valores de elementos

      await page.$eval(locator, (element) => element.textContent)

## Etapa I

- Acessar site Lume
- Realizar pesquisa genérica
- Ler dados do primeiro resultado
- Salvar dados do primeiro resultado

## Etapa II

- Ler dados de todos os resultados da primeira página
- Salvar dados de todos os resutados lidos

## Etapa III

## Etapa IV

- Criar interface visual para aplicação
