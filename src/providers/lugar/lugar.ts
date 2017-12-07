import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LugarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LugarProvider {
	lugares = [
		{
			id: "AB",
			nome: "Bloco AB",
			descricao: "Salas do bloco AB",
			infoAdicional: "Salas de Aula;" +
			"Sala dos Professores;" +
			"Sala Verde",
		},
		{
			id: "C",
			nome: "Bloco C",
			descricao: "Auditório",
			infoAdicional: "Auditório;" +
			"Estacionamento;" +
			"Almoxarifado;" +
			"Laboratórios"
		},
		{
			id: "SAN",
			nome: "Santhiago",
			descricao: "Salas-Laboratórios-Áreas Administrativas",
			infoAdicional: "Térreo: " +
			"	Secretaria Acadêmica;" +
			"	Biblioteca;" +
			"	Sala de Estudos;" +
			"	Armários;" +
			"	Achados e perdidos;" +
			"" +
			"1° Andar: " +
			"	Salas de Aula;" +
			"	DTI;" +
			"" +
			"2° Andar:" +
			"	Laboratórios de informática;" +
			"	Salas de Aula;" +
			"	Sessão de Estágios" +
			"" +
			"3° Andar:" +
			"	Salas de Aula"
		},
		{
			id: "PS",
			nome: "Paula Souza",
			descricao: "Conselho Estudantil-Centro Acadêmico",
			infoAdicional: "Cantina - Final do Corredor;" +
			"Salas de recreação;" +
			"Lanchonetes e Bombonieres;" +
			"Xerox"
		},
		{
			id: "OM",
			nome: "Oscar Machado",
			descricao: "Salas",
			infoAdicional: "Salas dos módulos adicionais dos cursos"
		},
		{
			id: "ETE",
			nome: "ETESP",
			descricao: "Ensino Técnico",
			infoAdicional: "Salas dos alunos da ETEC"
		}];



	Trajetos = [
		{
			id: "SAN-PS",
			rota: ["-Saia pelo norte do prédio Santhiago;",
				"-Siga até o prédio em frente.",
				"	<- À esquerda: entrada para CA",
				"	-> Á direita: entrada para o Centro Paula Souza"], imagem: "Santhiago - Paula Souza.png"
		},
		{
			id: "PS-SAN",
			rota: ["-Saia pelo sul do prédio Centro Paula Souza;",
				"-Siga até o prédio em frente.",
				"	Térreo: Sala de estudos, Biblioteca, Secretaria, Armários...",
				"	1°andar: DTI, ",
				"	2°andar: Laboratórios de informática",
				"	3°andar: "], imagem: "Santhiago - Paula Souza.png"
		},
		{
			id: "SAN-OM",
			rota: ["-Saia pelo norte do prédio Santhiago;",
				"-Siga à direta;",
				"-Vire à esquerda e atravesse a pracinha;",
				"-Entrada à direita do prédio Oscar Machado."], imagem: "Santhiago - Oscar Machado.png"
		},
		{
			id: "OM-SAN",
			rota: ["-Saia pelo leste do prédio Oscar Machado;",
				"-Vire à direita e atravesse a pracinha;",
				"-Vire à direita e suba rampa;",
				"-Entrada ao norte do Prédio Santhiago."], imagem: "Santhiago - Oscar Machado.png"
		},
		{
			id: "SAN-ETE",
			rota: ["-Saia pelo norte do prédio Santhiago",
				"-Siga à direita;",
				"-Vire à esquerda e atravesse a pracinha;",
				"-Viré à direita e atravesse o pátio;",
				"-Entrada ao oeste da ETESP."], imagem: "Santhiago - ETESP.png"
		},
		{
			id: "ETE-SAN",
			rota: ["-Saia pelo oeste do prédio da ETESP;",
				"-Atravesse o pátio;",
				"-Vire à esquerda e atravesse a pracinha;",
				"-Vire à direita e suba a rampa;",
				"-Entrada ao norte do Prédio Santhiago."], imagem: "Santhiago - ETESP.png"
		},
		{
			id: "SAN-C",
			rota: ["-Saia pelo norte do prédio Santhiago",
				"-Vire à direita;",
				"-Siga em frente e contorne o bloco C pela esquerda;",
				"-Entrada ao norte do bloco C."], imagem: "Santhiago - C.png"
		},
		{
			id: "C-SAN",
			rota: ["-Saia pelo norte do bloco C;",
				"-Vire à esquerda e contorne o bloco C;",
				"-Vire à direta e suba a rampa;",
				"-Entrada ao norte do Prédio Santhiago."], imagem: "Santhiago - C.png"
		},
		{
			id: "SAN-AB",
			rota: ["-Saia pelo norte do prédio Santhiago;",
				"Vire à direita;",
				"-Siga em frente e contorne o bloco C pela esquerda;",
				"-Vire à direita;",
				"-Siga em frente até a segunda entrada à direita.",
				"-Entrada ao norte do bloco AB"], imagem: "Santhiago - AB.png"
		},
		{
			id: "AB-SAN",
			rota: ["-Saia pelo norte do bloco AB;",
				"-Vire à esquerda e siga até o final do bloco C;",
				"-Contorne à esquerda do bloco C;",
				"-Vire à direita e suba a rampa;",
				"-Entrada ao norte do Prédio santhiago."], imagem: "Santhiago - AB.png"
		},
		{
			id: "PS-OM",
			rota: ["-Saia pelo sul do Centro Paula Souza;",
				"-Vire à esquerda;",
				"-Vire à esquerda e atravesse a pracinha;",
				"-Entrada ao leste do prédio Oscar Machado."], imagem: "Paula Souza - Oscar Machado.png"
		},
		{
			id: "OM-PS",
			rota: ["-Saia pelo leste do prédio Oscar Machado;",
				"-Vire à direita e atravesse a pracinha;",
				"-Vire à direita;",
				"-Entrada ao sul do Centro Paula Souza."], imagem: "Paula Souza - Oscar Machado.png"
		},
		{
			id: "PS-ETE",
			rota: ["-Saia pelo sul do Centro Paula Souza;",
				"-Vire à esquerda;",
				"-Vire à esquerda e atravesse a pracinha;",
				"-Vire à direita e atravesse o pátio;",
				"-Entrada ao oeste do prédio da ETESP."], imagem: "Paula Souza - ETESP.png"
		},
		{
			id: "ETE-PS",
			rota: ["-Saia pelo oeste do prédio da ETESP;",
				"-Atravesse o pátio",
				"-Vire à esquerda e atravesse a pracinha;",
				"-Vire à direita;",
				"-Entrada ao sul do Centro Paula Souza."], imagem: "Paula Souza - ETESP.png"
		},
		{
			id: "PS-C",
			rota: ["-Saia pelo sul do Centro Paula Souza;",
				"-Vire à esquerda;",
				"-Siga em frente e contorne o bloco C pela esquerda;",
				"-Entrada ao norte do bloco C."], imagem: "Paula Souza - C.png"
		},
		{
			id: "C-PS",
			rota: ["-Saia pelo norte do bloco C;",
				"-Vire à esquerda e contorne o bloco C;",
				"-Vire à direita;",
				"-Entrada ao sul do Centro Paula Souza."], imagem: "Paula Souza - C.png"
		},
		{
			id: "OM-ETE",
			rota: ["-Saia pelo leste do prédio Oscar Machado;",
				"-Atravesse o pátio;",
				"-Entrada pelo oeste do prédio da ETESP."], imagem: "Oscar Machado - ETESP.png"
		},
		{
			id: "ETE-OM",
			rota: ["-Saia pelo oeste do prédio da ETESP;",
				"-Atravesse o pátio;",
				"-Entrada pelo leste do prédio Oscar Machado."], imagem: "Oscar Machado - ETESP.png"
		},
		{
			id: "OS-C",
			rota: ["-Saia pelo leste do prédio Oscar Machado;",
				"-Siga em frente e vire à direita;",
				"-Entrada pelo sul do bloco C."], imagem: "Oscar Machado - C.png"
		},
		{
			id: "C-OM",
			rota: ["-Saia pelo norte do bloco C;",
				"-Siga em frente e vire à esquerda;",
				"-Entrada pelo leste do prédio Oscar Machado."], imagem: "Oscar Machado - C.png"
		},
		{
			id: "OM-AB",
			rota: ["-Saia pelo leste do prédio Oscar Machado;",
				"-Siga em frente e vire à direita;",
				"-Vire à esquerda e siga até a segunda entrada à direita",
				"-Entrada pelo norte do bloco AB."], imagem: "Oscar Machado - AB.png"
		},
		{
			id: "AB-OM",
			rota: ["-Saia pelo norte do bloco AB;",
				"-Vire à esquerda e siga em frente;",
				"-Vire à direita;",
				"-Vire à esquerda;",
				"-Entrada pelo leste do prédio Oscar Machado."], imagem: "Oscar Machado - AB.png"
		},
		{
			id: "ETE-C",
			rota: ["-Saia pelo oeste do prédio da ETESP;",
				"-Siga em frente e vire à esquerda;",
				"-Entrada pelo sul do bloco C."], imagem: "Etesp - C.png"
		},
		{
			id: "C-ETE",
			rota: ["-Saia pelo norte do bloco C;",
				"-Siga em frente e vire à direita;",
				"-Entrada pelo oeste do prédio da ETESP."], imagem: "Etesp - C.png"
		},
		{
			id: "AB-PS",
			rota: ["-Saia pelo norte do bloco AB;",
				"-Vire à esquerda e siga até o final do bloco C;",
				"-Contorne à esquerda do bloco C;",
				"-Vire à direita;",
				"-Entrada ao sul do Centro Paula Souza."], imagem: "AB - Paula Souza.png"
		},
		{
			id: "PS-AB",
			rota: ["-Saia pelo sul do Centro Paula Souza;",
				"Vire à esquerda;",
				"-Siga em frente e contorne o bloco C pela esquerda;",
				"-Vire à direita;",
				"-Siga em frente até a segunda entrada à direita.",
				"-Entrada ao norte do bloco AB"], imagem: "AB - Paula Souza.png"
		},
		{
			id: "AB-ETE",
			rota: ["-Saia pelo norte do bloco AB;",
				"-Siga em frente;",
				"-Entrada à direita do prédio da ETESP."], imagem: "AB - ETESP.png"
		},
		{
			id: "ETE-AB",
			rota: ["-Saia pela direita do prédio da ETESP;",
				"-Vire à direita e siga em frente;",
				"-Entrada ao norte do bloco AB."], imagem: "AB - ETESP.png"
		},
		{
			id: "AB-C",
			rota: ["-Siga a passarela interna entre os blocos."], imagem: "AB - C.png"
		},
		{
			id: "C-AB",
			rota: ["-Siga a passarela interna entre os blocos."], imagem: "AB - C.png"
		}
	];
	constructor() {

	}
	getTrajetos() {
		return this.Trajetos;
	}

	getLugares() {
		return this.lugares;
	}

}
