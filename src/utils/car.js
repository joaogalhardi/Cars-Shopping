import gol from '../assets/images/gol.jpg';
import focus from '../assets/images/focus.jpg';
import palio from '../assets/images/palio.jpg';
import camaro from '../assets/images/camaro.jpg';
import civic from '../assets/images/civic.jpg';
import corolla from '../assets/images/corolla.jpg';

export const cars = [
  {
    id: 1,
    name: 'Volkswagen Gol 1.6',
    price: 'R$3.000',
    color: '#a1a1a1',
    photo: gol,
    ano: '2014',
    descricao:
      'Gol é um automóvel da Volkswagen, desenhado no Brasil e comercializado em vários países sob diversas designações, dentre eles México e Argentina. Lançado em 1980, o Gol é considerado um dos maiores sucessos da Volkswagen do Brasil de todos os tempos. É também o primeiro e único carro produzido no Brasil a ultrapassar a marca de 5 milhões de unidades produzidas até hoje, tornando-se, em fevereiro de 2009, o primeiro e único a superar o Fusca em vendas. Pioneiro a tornar-se modelo de entrada da marca Volkswagen do Brasil em mercados internacionais, e é o modelo mais exportado da história do Brasil, com mais de 1 milhão de unidades vendidas para mais de 50 países, embora nunca tenha sido comercializado na Europa, devido à presença do Volkswagen Polo, que, apesar do preço alto no Brasil, é do mesmo segmento que o Gol.',
    path: '/gol',
  },
  {
    id: 2,
    name: 'Ford Focus 2.0',
    price: 'R$18.000',
    color: '#f2ca5a',
    photo: focus,
    ano: '2012',
    descricao:
      'Focus é um automóvel fabricado pela Ford a partir de 1998 para suceder o Escort e, à época de seu lançamento, disputar mercado com os mais modernos Fiat Brava, Chevrolet Astra (Opel Astra em Portugal) e Volkswagen Golf. Oferecendo motores mais modernos do que o modelo substituído e novo design, a Ford pretendia que Focus alcançasse o mesmo sucesso que o antecessor Escort. Uma de suas inovações na categoria foi a suspensão traseira multibraço, o que permitiu que o Focus disputasse com o Golf a qualificação de hatch que proporciona mais prazer em dirigir. A versão vendida na América do Sul começou a ser produzida em 2000, na fábrica de General Pacheco, Argentina, de onde, desde então, foi exportado ao Brasil. Foi retirado de linha no país e na América do Sul em 2019, pelas baixas vendas e da decadência de hatches médios no continente.',
    path: '/focus',
  },
  {
    id: 3,
    name: 'Fiat Palio 1.0',
    price: 'R$2.000',
    color: '#5863db',
    photo: palio,
    ano: '2016',
    descricao:
      'Palio foi um automóvel compacto produzido pela Fiat, tendo sido projetado para mercados emergentes como América Latina, África do Sul, Leste Europeu e Ásia. Seu projeto foi iniciado em 1992, pelo Centro de Estilo da Fiat do Brasil junto ao estúdio italiano I.DE.A. Foi o primeiro de uma linha de produtos que ainda contaria com uma versão station-wagon, chamada Weekend, lançada em janeiro de 1997, o sedan Siena (Palio Sedan ou Albea em alguns mercados, este último com alterações na traseira), apresentado em agosto de 1997 e a picape Strada, lançada em outubro de 1998. Também sendo eleito pela Revista Autoesporte o Carro do Ano de 2001, 2004 e 2012. Em 2014 ganhou a versão Way, acompanhando o modelo já existente no Fiat Uno. Também em 2014, o Palio foi o carro mais vendido do ano, desbancando a série de 27 anos seguidos do Volkswagen Gol.',
    path: '/paliobatida',
  },
  {
    id: 4,
    name: 'Honda Civic 1.8',
    price: 'R$68.000',
    color: '#121c8a',
    photo: civic,
    ano: '2011',
    descricao:
      'O Honda Civic é um automóvel produzido pela Honda desde 1973. Atualmente encontra-se em sua décima primeira geração. Foi eleito duas vezes o Carro do Ano pela revista Autoesporte, em 2007 e em 2017. Começou a ser importado para o Brasil em 1992 junto com o Honda Accord, sendo produzido no Brasil entre 1997 e 2021. Produzido na unidade da Honda localizada em Sumaré, no estado de São Paulo, foi o sedan médio mais vendido do Brasil no 1° semestre de 2008, superando modelos concorrentes. Atualmente é produzido em dez países: Japão, Inglaterra, Estados Unidos, Canadá, Paquistão, Taiwan, Turquia, Índia, Tailândia e Vietnã.',
    path: '/civic',
  },
  {
    id: 5,
    name: 'Chevrolet Camaro',
    price: 'R$100.000',
    color: '#decb26',
    photo: camaro,
    ano: '2012',
    descricao:
      'O Camaro é um coupé esportivo de porte médio da Chevrolet. Produzido desde 1966, trata-se de muscle car que seria a resposta da General Motors ao Ford Mustang, de 1964. Sua produção foi interrompida em 2002. O ressurgimento do Camaro aconteceu em 2009 e, novamente seguindo o Ford Mustang (dessa vez o de 2005), a nova geração do muscle car é uma releitura de sua primeira geração, vendida entre 1967 e 1969.',
    path: '/camaro',
  },
  {
    id: 6,
    name: 'Toyota Corolla 2.0',
    price: 'R$100.000',
    color: '#decb26',
    photo: corolla,
    ano: '2022',
    descricao:
      'O Toyota Corolla é um modelo compacto da Toyota oferecido em versões sedan, hatchback e perua. Também é o modelo mais vendido da história, com produção nos cinco continentes e vendas totais superiores a 50 milhões de automóveis desde seu lançamento, em 1966. Seu nome provém do Latim e o significado é “Coroa de Flores”, que por sua vez significam felicidade e triunfo. No Brasil o nome do veículo tem sido remetido por muitos como “Carro de Coroa”, em alusão sobretudo ao perfil dos seus compradores: pessoas mais velhas. Ao adotar este nome a Toyota manteve uma tradição da época em que muitos dos nomes dos seus carros começavam por “C” Crown, Corona, Carina, Century, Celica, Camry etc. Apesar da Toyota já não utilizar esta estratégia para dar nomes aos carros, nomes como o Yaris, Auris, Avalon, Etios e Avensis, todos eles derivam ainda do Latim.',
    path: '/corolla',
  },
];
