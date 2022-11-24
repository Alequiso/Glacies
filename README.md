<h1 align=center> &star; Boas vindas ao repositório do 1ADSA - Grupo 03 &star;</h1>

<h3 align=center> Aqui é a capa do repositório e nela terá detalhes e regras que podem ser refinadas com o tempo conforme vamos aprendendo mais.</h3>

<hr>

<h1>Regras e padrões ⚠</h1>

- O nome dos arquivos **NÃO** devem conter acentos, espaços e começar com letra maiúscula ou número (há exceções mas não entra no caso);
- A disposição dos arquivos e pastas devem seguir o padrão imposto pela equipe;
- Evitar frases desconexas nas commits, lembre-se que é o nosso log e o ideal é que alguém leia e entenda o que foi feito ali.

<h1>Primeiros passos 👩‍💻👨‍💻</h1>

<h3>Clonando o repositório na máquina</h3>

1. Clique no botão verde `code`
2. Com a aba de `HTTPS` ativa, copie o link que é disponibilizado na janelinha
3. No prompt do **GitBash** ou terminal do VS code, navegue para a pasta que deseja efetuar o clone (usando **cd**) 
4. Após estar no local desejado, execute o comando: `git clone [URL que copiou]`
5. Depois entre no repositório por meio do comando `cd project` e digite `code .` para abrir o código.

<h3>Mandando alterações locais para o repô remoto</h3>

1. No terminal do VS code, caso queira mandar todos os arquivos alterados, use `git add --all` ou `git add .`
 1.2 Ou apenas mandar um arquivo específico `git add [nome do arquivo com a .extensão]`
2. Depois efetue o comando `git commit -m "[Frase descrevendo as alterações]"`
3. E por fim, `git push`

> **OBS:** Boas práticas envolvem usar o `git status` caso se perca na ordem dos comandos git e antes de começar uma tarefa ou mandar as suas alterações, fazer o `git pull` para manter o repô local atualizado com o remoto e assim evitando conflitos futuros.
 
