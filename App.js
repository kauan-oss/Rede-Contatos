import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Kauan' />
    <FotoPerfil />

    <CartaoUsuario
      nome='João da Silva'
      descricao='Programador Mobile. Recém-chegado ao Rio de Janeiro. Contato: joao.dasilva@gmail.com | Instagram: @joao.dasilva | Telefone: (21) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Maria da Silva'
      descricao='Médica (Clínica Geral). Passa a maior parte do tempo no Hospital Municipal de São Paulo. Contato: maria.dasilva@gmail.com | Instagram: @maria.dasilva | Telefone: (11) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Pamela Raiane'
      descricao='Desenvolvedora Full-Stack. Lidera uma equipe remota em e-commerce. Mora em Florianópolis/SC. Contato: pamela.raiane@gmail.com | Instagram: @pamela.raiane | Telefone: (48) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Kauan Stipp'
      descricao='Analista de Sistemas Pleno. Residente em Curitiba, trabalha na infraestrutura de TI de uma grande empresa. Contato: kauan.stipp@gmail.com | Instagram: @kauan.stipp | Telefone: (41) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Marlon Ribeiro'
      descricao='Advogado Cível. Especializado em direito da família e sucessões. Mudou-se para Brasília a trabalho. Contato: marlon.ribeiro@gmail.com | Instagram: @marlon.ribeiro | Telefone: (61) 99999-9999'
      img='perfil05'
    />

    <CartaoUsuario
      nome='Sofia Leal'
      descricao='Arquiteta e Urbanista. Seu foco é a bioarquitetura e o uso de materiais regionais na Bahia. Contato: sofia.leal@gmail.com | Instagram: @sofia.leal | Telefone: (71) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Pedro Henrique'
      descricao='Engenheiro Civil. Envolvido em projeto de metrô em Belo Horizonte. É voluntário social. Contato: pedro.henrique@gmail.com | Instagram: @pedro.henrique | Telefone: (31) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Lívia Costa'
      descricao='Designer Gráfico Freelancer. Mora em Olinda/PE. Trabalhos voltados para o setor cultural. Contato: livia.costa@gmail.com | Instagram: @livia.costa | Telefone: (81) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Guilherme Farias'
      descricao='Analista de Dados Júnior (Campinas/SP). Usa Python e pratica fotografia analógica. Contato: guilherme.farias@gmail.com | Instagram: @guilherme.farias | Telefone: (19) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Renata Oliveira'
      descricao='Chef de Cozinha. Especializada em culinária de fusão brasileira. Abriu restaurante em Pinheiros, São Paulo. Contato: renata.oliveira@gmail.com | Instagram: @renata.oliveira | Telefone: (11) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Bruno Souza'
      descricao='Professor de Educação Física. Personal trainer e instrutor de surf em Ipanema. Contato: bruno.souza@gmail.com | Instagram: @bruno.souza | Telefone: (21) 99999-9999'
      img='perfil05'
    />

    <CartaoUsuario
      nome='Camila Santos'
      descricao='Jornalista Investigativa. Cobre política e corrupção. Mantém blog sobre direitos humanos. Contato: camila.santos@gmail.com | Instagram: @camila.santos | Telefone: (11) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Ricardo Gomes'
      descricao='Eletricista Industrial (Manaus). Trabalha na Zona Franca e pratica pesca esportiva no Rio Negro. Contato: ricardo.gomes@gmail.com | Instagram: @ricardo.gomes | Telefone: (92) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Alice Ferreira'
      descricao='Gerente de Marketing. Lidera branding de cosméticos. É vegana e pratica yoga avançada. Contato: alice.ferreira@gmail.com | Instagram: @alice.ferreira | Telefone: (11) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Lucas Martins'
      descricao='Mecânico Automotivo (Niterói/RJ). Restaura carros antigos (década de 70). Contato: lucas.martins@gmail.com | Instagram: @lucas.martins | Telefone: (21) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Mariana Lima'
      descricao='Psicóloga Clínica. Atende em clínica e ONGs. Entusiasta de jardinagem (orquídeas raras). Contato: mariana.lima@gmail.com | Instagram: @mariana.lima | Telefone: (41) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Felipe Rocha'
      descricao='Corretor de Imóveis. Especialista em imóveis de luxo (Riviera de São Lourenço). Gosta de golfe. Contato: felipe.rocha@gmail.com | Instagram: @felipe.rocha | Telefone: (13) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Larissa Alves'
      descricao='Bióloga Marinha. Vive em Fernando de Noronha. Trabalha em conservação de espécies. Contato: larissa.alves@gmail.com | Instagram: @larissa.alves | Telefone: (81) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Daniel Costa'
      descricao='Músico e Produtor Musical (Lapa/RJ). Compõe trilhas e é saxofonista de jazz. Contato: daniel.costa@gmail.com | Instagram: @daniel.costa | Telefone: (21) 99999-9999'
      img='perfil05'
    />

    <CartaoUsuario
      nome='Vitória Nunes'
      descricao='Nutricionista Esportiva. Atende atletas de alta performance (SP). É maratonista amadora. Contato: vitoria.nunes@gmail.com | Instagram: @vitoria.nunes | Telefone: (11) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Thiago Pereira'
      descricao='Técnico em Redes (Porto Alegre/RS). Responsável pela segurança de dados. Ávido jogador de xadrez online. Contato: thiago.pereira@gmail.com | Instagram: @thiago.pereira | Telefone: (51) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Beatriz Almeida'
      descricao='Professora de História (Salvador). Especializada em história afro-brasileira. Faz teatro amador. Contato: beatriz.almeida@gmail.com | Instagram: @beatriz.almeida | Telefone: (71) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Eduardo Guedes'
      descricao='Contador e Auditor Fiscal. Colecionador de moedas antigas. Adora viajar para o Pantanal. Contato: eduardo.guedes@gmail.com | Instagram: @eduardo.guedes | Telefone: (67) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Isabela Soares'
      descricao='Esteticista e Cosmetóloga (Balneário Camboriú/SC). Foco em cosmetologia natural. Contato: isabela.soares@gmail.com | Instagram: @isabela.soares | Telefone: (47) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Rodrigo Silva'
      descricao='Piloto de Avião Comercial. Dedica-se a pilotar pequenos drones e gravar vídeos. Contato: rodrigo.silva@gmail.com | Instagram: @rodrigo.silva | Telefone: (11) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Vanessa Morais'
      descricao='Bibliotecária (Biblioteca Nacional). Poliglota e participa de clubes de leitura. Contato: vanessa.morais@gmail.com | Instagram: @vanessa.morais | Telefone: (21) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Alexandre Castro'
      descricao='Fotógrafo Profissional. Especializado em natureza e vida selvagem (Amazônia/Cerrado). Contato: alexandre.castro@gmail.com | Instagram: @alexandre.castro | Telefone: (61) 99999-9999'
      img='perfil05'
    />

    <CartaoUsuario
      nome='Juliana Dias'
      descricao='Assistente Social (Recife/PE). Coordena projetos sociais e dança frevo. Contato: juliana.dias@gmail.com | Instagram: @juliana.dias | Telefone: (81) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Gustavo Lima'
      descricao='Administrador de Empresas (Logística). Pratica ciclismo de longa distância. Contato: gustavo.lima@gmail.com | Instagram: @gustavo.lima | Telefone: (11) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Patrícia Vieira'
      descricao='Fonoaudióloga (Copacabana). Especialista em reabilitação pós-AVC. Faz aulas de canto lírico. Contato: patricia.vieira@gmail.com | Instagram: @patricia.vieira | Telefone: (21) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Marcelo Pires'
      descricao='Técnico Agrícola. Consultor de plantio e colheita em Goiás. Contato: marcelo.pires@gmail.com | Instagram: @marcelo.pires | Telefone: (62) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Caroline Félix'
      descricao='Tradutora e Intérprete (Campinas). Trabalha para conferências. Escreve poesia. Contato: caroline.felix@gmail.com | Instagram: @caroline.felix | Telefone: (19) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Henrique Neves'
      descricao='Cientista de Materiais (São Carlos/SP). Pesquisa polímeros sustentáveis. Hobby: astronomia. Contato: henrique.neves@gmail.com | Instagram: @henrique.neves | Telefone: (16) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Marina Sales'
      descricao='Estilista de Moda (Porto Alegre). Dona de marca autoral. Defende moda consciente. Contato: marina.sales@gmail.com | Instagram: @marina.sales | Telefone: (51) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='André Luiz'
      descricao='Bombeiro Civil (Recife/PE). Atua em shopping center. Pratica natação em águas abertas. Contato: andre.luiz@gmail.com | Instagram: @andre.luiz | Telefone: (81) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Diana Queiroz'
      descricao='Geógrafa. Mestre em planejamento urbano (Maceió). Gosta de dança de salão (forró). Contato: diana.queiroz@gmail.com | Instagram: @diana.queiroz | Telefone: (82) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Júlio César'
      descricao='Dono de Pet Shop. Especialista em comportamento animal e resgate (SP). Contato: julio.cesar@gmail.com | Instagram: @julio.cesar | Telefone: (11) 99999-9999'
      img='perfil05'
    />

    <CartaoUsuario
      nome='Érica Barbosa'
      descricao='Fisioterapeuta (Vitória/ES). Clínica de reabilitação. Surfista e mergulhadora amadora. Contato: erica.barbosa@gmail.com | Instagram: @erica.barbosa | Telefone: (27) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Sérgio Melo'
      descricao='Policial Federal (Foz do Iguaçu). Atua na fronteira. Praticante assíduo de jiu-jítsu. Contato: sergio.melo@gmail.com | Instagram: @sergio.melo | Telefone: (45) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Natália Cordeiro'
      descricao='Analista de RH (São Paulo). Focada em cultura organizacional. Escreve contos de mistério. Contato: natalia.cordeiro@gmail.com | Instagram: @natalia.cordeiro | Telefone: (11) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Fábio Dantas'
      descricao='Desenvolvedor Backend Sênior (Fintech). Gosta de viajar de motocicleta e acampar. Contato: fabio.dantas@gmail.com | Instagram: @fabio.dantas | Telefone: (11) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Clara Zanetti'
      descricao='Dançarina Profissional (Curitiba). Professora e coreógrafa para espetáculos. Contato: clara.zanetti@gmail.com | Instagram: @clara.zanetti | Telefone: (41) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Murilo Rios'
      descricao='Gestor Financeiro. Trabalha no mercado de capitais (NY). Contato: murilo.rios@gmail.com | Instagram: @murilo.rios | Telefone: (11) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Rosana Freitas'
      descricao='Enfermeira Chefe. Lidera equipe de emergência (Nordeste). Adora pescar em alto-mar. Contato: rosana.freitas@gmail.com | Instagram: @rosana.freitas | Telefone: (81) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Arthur Viana'
      descricao='Ator e Diretor de Teatro (São Paulo). Entusiasta da culinária vegetariana e pães artesanais. Contato: arthur.viana@gmail.com | Instagram: @arthur.viana | Telefone: (11) 99999-9999'
      img='perfil04'
    />

    <CartaoUsuario
      nome='Helena Santos'
      descricao='Engenheira de Produção (Campinas). Colecionadora de vinis e DJ em festas underground. Contato: helena.santos@gmail.com | Instagram: @helena.santos | Telefone: (19) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Diego Azevedo'
      descricao='Técnico em Telecomunicações (Amazonas). Apaixonado por montanhismo e escalada. Contato: diego.azevedo@gmail.com | Instagram: @diego.azevedo | Telefone: (92) 99999-9999'
      img='perfil03'
    />

    <CartaoUsuario
      nome='Lorena Xavier'
      descricao='Chef Pâtissier (Salvador/BA). Confeitaria de doces finos. Tem canal sobre confeitaria molecular. Contato: lorena.xavier@gmail.com | Instagram: @lorena.xavier | Telefone: (71) 99999-9999'
      img='perfil02'
    />

    <CartaoUsuario
      nome='Paulo Mendes'
      descricao='Mestre de Obras. Profissional com 30 anos de experiência (Pernambuco). Contato: paulo.mendes@gmail.com | Instagram: @paulo.mendes | Telefone: (81) 99999-9999'
      img='perfil01'
    />

    <CartaoUsuario
      nome='Viviane Sales'
      descricao='Turismóloga. Guia especializada em ecoturismo (Chapada dos Veadeiros). Contato: viviane.sales@gmail.com | Instagram: @viviane.sales | Telefone: (61) 99999-9999'
      img='perfil03'
    />

  </ScrollView>
}