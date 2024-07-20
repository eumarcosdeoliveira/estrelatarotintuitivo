import React from 'react';

const trends = [
  "TRAGA DE VOLTA SEU AMOR",
  "PÃO DE CADA DIA",
  "RIQUEZA E FARTURA",
  "RIQUEZA E FARTURA",
  "CARTAS NA MESA"
];

const TrendItem = ({ number, text }) => (
    <div className="flex items-start space-x-2">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-extrabold text-orange-600 text-2xl whitespace-nowrap">{number} •</span>
      </div>
      <span className="text-orange-600 text-xl underline">{text}</span>
    </div>
  );

const TrendsList = () => {
  return (
    <div className="p-9 bg-gray-100 rounded-3xl mt-8 mx-auto">
      <div className="flex items-center space-x-3 ">
        <span className="text-3xl text-purple-600">🔥</span>
        <span className="text-2xl text-purple-600 font-extrabold">MAIS PEDIDOS</span>
      </div>
      <p className="mt-4 text-gray-500 text-xl font-light">
        Acompanhe suas tendências diariamente e receba conselhos para cada momento.
      </p>
      <div className="mt-5 space-y-4">
        {trends.map((trend, index) => (
          <TrendItem key={index} number={index + 1} text={trend} />
        ))}
      </div>
    </div>
  );
};

export default TrendsList;
