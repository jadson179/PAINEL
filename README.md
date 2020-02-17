<h1 align="center"> PAINEL DE SALAS</h1>

<p align="center">
  <img width="360" height="300"  src="mobile/assets/icon.png">
</p>

A PROPOSTA DESSA APLICAÇÃO É TORNAR SIMPLES A IDENTIFICAÇÃO DAS EMPRESAS PRESENTES EM EMPREENDIMENTOS QUE SÃO COMERCIAIS 

### REQUISITOS 

[NODEJS > 12.14.1](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/get-npm) ou [YARN](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

[MYSQL](https://www.apachefriends.org/pt_br/download.html)


## PARA COMEÇAR 

INICIE O BANCO DE DADOS 

```yml
    sudo /opt/lampp/./xampp startmysql 
```

ACESSE A PASTA `backend` DO PROJETO

```yml
    yarn install && yarn start 
```

ACESSE A PASTA `fronend` DO PROJETO

```yml
   yarn install && yarn build && yarn server
```


### CRIAÇÃO DO USUÁRIO ADMINISTRADOR E PROVISONAMENTO DO BANCO

Acesse a interface do seu banco mysql http://`seuendereçoip`/phpmyadmin/

Copie o conteúdo do arquivo `PAINEL/provisioning.sql`, cole e execute 

### AUTENTICAÇÃO INICIAL

`Username`: admin

`Password`: admin


### SKETCHES

#### WEB 

<table>
    <tr>
        <td><img style="width=100%; height=300px"  src="frontend/public/login.png"></td>
    </tr>
    <tr>
        <td><img style="width=100%; height=300px"  src="frontend/public/admin-web.png"></td>
    </tr>
     <tr>
        <td><img style="width=100%; height=300px"  src="frontend/public/view-1.png"></td>
    </tr>
     <tr>
        <td><img style="width=100%; height=300px"  src="frontend/public/view-2.png"></td>
    </tr>
</table>

### MOBILE 

<table>
    <tr>
        <td><img style="width:200px; height:400px"  src="mobile/assets/icon.png"></td>
    </tr>
    <tr>
        <td><img style="width:300px; height:500px"  src="mobile/assets/splash.png"></td>
         <td><img style="width:300px; height:500px"  src="frontend/public/login-mobile.png"></td>
    </tr>
     <tr>
        <td><img style="width:300px; height:500px"  src="frontend/public/admin-mobile.png"></td>
        <td><img style="width:300px; height:500px"  src="frontend/public/view-mobile.png"></td>
    </tr>
</table>


`apk:` [address](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jadson179/Painel-5aad65f531a9401dbcda37fd677efc24-signed.apk)

# CONTRIBUIDORES 

<table>
    <tr>
        <td><a href="https://github.com/jadson179"><img width="100" src="https://avatars2.githubusercontent.com/u/42282908?s=460&v=4" /></a></td>
    </tr>
</table>

![](frontend/public/logo.png)
