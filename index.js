const StatesCitiesDataProcessor = require('./states-cities-data-processor');

/**
 * 1. Implementar um método que irá criar um arquivo JSON para cada estado representado 
 * no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes 
 * aquele estado, de acordo com o arquivo Cidades.json. 
 */
StatesCitiesDataProcessor.generateFiles();

/**
 * 2. Método que recebe como parâmetro o UF do estado, realize a leitura do arquivo 
 * JSON correspondente e retorne a quantidade de cidades daquele estado.
 */
StatesCitiesDataProcessor.getTotalCitiesByState('rs');

/**
 * 3. Método que imprime no console um array com o UF dos cinco estados que mais 
 * possuem cidades, seguidos da quantidade, em ordem decrescente. 
 */
StatesCitiesDataProcessor.printStatesWithMostCities();

/**
 * 4. Método que imprime no console um array com o UF dos cinco estados que menos 
 * possuem cidades, seguidos da quantidade, em ordem decrescente. 
 * 
 */
StatesCitiesDataProcessor.printStatesWithLessCities();

/**
 * 5.Método que imprime no console um array com a cidade de maior nome de cada estado, 
 * seguida de seu UF. 
 */
StatesCitiesDataProcessor.printBiggestNameCities();

/**
 * 6.Método que imprime no console um array com a cidade de menor nome de cada estado, 
 * seguida de seu UF. 
 */
StatesCitiesDataProcessor.printShortestNameCities();

/**
 * 7. Método que imprime no console a cidade de maior nome entre todos os estados, 
 * seguido do seu UF. 
 */
StatesCitiesDataProcessor.printBiggestNameCity();

/**
 * 8. Método que imprime no console a cidade de menor nome entre todos os estados, 
 * seguido do seu UF. 
 */
StatesCitiesDataProcessor.printShortestNameCity();
