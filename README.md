# Interface Web para Geração de Heatmap

## Visão Geral

Este projeto é uma interface web construída usando Next.js e heatmap.js para gerar dinamicamente um mapa de calor sobre uma imagem com base em dados fornecidos em um arquivo JSON. A aplicação processa dados de bounding boxes presentes no JSON, calcula os centróides e gera um mapa de calor correspondente. Os usuários podem baixar a imagem gerada com o mapa de calor em formato PNG, que será reutilizada na próxima visita ao sistema.

## Funcionalidades

- **Upload de JSON**: Permite ao usuário fazer upload de um arquivo JSON que será usado para gerar o heatmap.
- **Geração Dinâmica de Heatmap**: A aplicação processa o JSON e sobrepõe um mapa de calor sobre uma imagem base, permitindo ao usuário baixar a imagem gerada.
- **Redimensionamento da Imagem**: Botões para aumentar e diminuir o tamanho da imagem base, facilitando a visualização do heatmap.
- **Reset de Configurações**: Opção de resetar todas as configurações, deletar a imagem gerada, para simular o projeto desde o inicio.
- **Download de Arquivo JSON**: Página que permite ao usuário baixar o arquivo `response.json` da pasta `public`, facilitando o teste da aplicação.

## Tecnologias Utilizadas

- **Next.js**
- **Tailwind CSS**
- **react-hot-toast**
- **html2canvas**
- **Geist UI**

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seuusuario/heatmap-generator.git
    cd heatmap-generator
    ```

2. **Instale as Dependências**:
    Certifique-se de ter o Node.js (versão 18.0.0 ou superior) e npm instalados. Em seguida, execute:
    ```bash
    npm install
    ```

3. **Inicie o Servidor de Desenvolvimento**:
    ```bash
    npm run dev
    ```

4. **Acesse a Aplicação**:
    Abra seu navegador e vá para `http://localhost:3000` para ver a interface.

## Uso

1. Forneça os dados JSON no campo de entrada designado. Certifique-se de que o formato do JSON esteja correto.
    - **Caso não tenha o Arquivo de entrada**: Vá até a página `/download`, que irá baixar o arquivo `response.json` da pasta `public`.
2. Após enviar o JSON correto, o Heatmap será automaticamente adicionado sobre a imagem.
3. Se necessário, você pode baixar o mapa de calor gerado como uma imagem PNG clicando no botão "Baixar".

## Deploy

A aplicação está disponível online para testes no link abaixo:

[Link do deploy](https://generating-heatmap.vercel.app/)