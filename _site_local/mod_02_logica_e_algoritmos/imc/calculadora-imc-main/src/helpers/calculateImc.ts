
import { Level } from '@/types/Level';

export const levels: Level[] = [
  {
    title: 'Magreza',
    color: '#96a3ab',
    icon: 'down',
    imc: [0, 18.4],
    description: 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.'
  },
  {
    title: 'Normal',
    color: '#0ead69', icon: 'up',
    imc: [18.5, 24.9],
    description: 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.'
  },
  {
    title: 'Sobrepeso',
    color: '#e2b039',
    icon: 'down',
    imc: [25, 29.9],
    description: 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.'
  },
  {
    title: 'Obesidade grau I',
    color: '#f18500',
    icon: 'down',
    imc: [30, 34.9],
    description: 'Sinal de alerta! É importante rever seus hábitos alimentares, iniciar atividade física regular. Para quem está nesta faixa de peso, há risco maior de doenças cardiovasculares, articulares, distúrbios psiquiátricos, apneia do sono e até certos tipos de câncer.'
  },
  {
    title: 'Obesidade grau II',
    color: '#c3423f',
    icon: 'down',
    imc: [35, 39.9],
    description: 'O risco calculado de desenvolver diabetes chega a 40%, e a chance de surgirem doenças associadas à obesidade, como reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares pode chegar a 50%.'
  },
  {
    title: 'Obesidade grau III',
    color: '#000000',
    icon: 'down',
    imc: [40, 99],
    description: 'O risco de desenvolver doenças associadas ao excesso de peso, como a síndrome metabólica, reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares chega a até 90%.'
  },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = Number(imc.toFixed(1));

      return levels[i];
    };
  };

  return null;
};
