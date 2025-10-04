<div align="center">

# 📝 Note Manager - NodeJS (Gerenciador de Notas Simples com NodeJS)

</div>

Um pequeno projeto de linha de comando (**CLI**) construído em **Node.js** para gerenciar notas de texto simples.

Este projeto é um estudo sobre o uso dos módulos nativos do Node.js (`fs`, `path`, `readline`) e demonstra como implementar um fluxo de trabalho assíncrono usando **Promises** e **`async/await`** para lidar com a interação no terminal.

---

<div align="center">

## 🚀 Como Executar o Projeto

</div>

Para começar a usar o Gerenciador de Notas, você só precisa ter o Node.js instalado em sua máquina.

### Pré-requisitos

* **Node.js** (versão LTS recomendada).

### 1. Instalação

Se você ainda não o fez, clone o repositório para a sua máquina:

```bash
git clone https://github.com/dougpsnts/note-maneger-nodeJS.git
cd nome-do-seu-projeto
````

### 2. Execução

Execute o script diretamente no terminal. O Node.js iniciará o menu principal automaticamente:  

```bash
node quickNotes.js
````
O menu será exibido, permitindo que você interaja com o sistema de notas.

<div align="center">
  
## 💡 Funcionalidades

</div>

O sistema de notas oferece as seguintes opções:

| Opção | Descrição | Módulos Principais |
| :---: | :--- | :--- |
| **1** | **Criar uma nova nota:** Solicita título e conteúdo e salva o arquivo dentro do diretório `notes/`. | `fs.writeFileSync`, `fs.mkdirSync` |
| **2** | **Listar todas as notas:** Exibe todos os títulos de notas (`.txt`) existentes. | `fs.readdirSync` |
| **3** | **Visualizar uma nota:** Solicita um título e exibe o conteúdo completo. | `fs.readFileSync` |
| **4** | **Excluir uma nota:** Solicita um título e apaga o arquivo correspondente. | `fs.unlinkSync` |
| **5** | **Sair:** Encerra a aplicação. | `process.exit(0)` |

As notas são salvas em um diretório chamado `notes`, criado automaticamente na raiz do projeto.



