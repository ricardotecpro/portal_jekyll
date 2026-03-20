'use client';

import { Input } from "@/components/Input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import powered from '../assets/powered.png';
import { levels, calculateImc } from "@/helpers/calculateImc";
import upImage from '../assets/up.png';
import downImage from '../assets/down.png';
import { Level } from "@/types/Level";
import leftArrow from '../assets/leftarrow.png';
import Image from "next/image";



export default function Home() {
  const [ height, setHeight ] = useState<number>(0);
  const [ weight, setWeight ] = useState<number>(0);
  const [ showYourLevel, setShowYourLevel ] = useState<Level | null>(null);

  // Funcionalidade input Height
  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.maxLength = 4;

    const value = e.target.value.replace(/[^\d]/g, ''); // Remove todos os caracteres,exceto dígitos
    const formattedValue = Number(value.replace(/(\d{0,1})(\d{0,2})$/, '$1.$2')); // Formatação para 2 casas decimais

    setHeight(formattedValue);
  };
  
  // Funcionalidade input Weight
  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.maxLength = 6;

    const value = e.target.value.replace(/[^\d]/g, ''); // Remove todos os caracteres, exceto dígitos

    const digitCount = value.length;
  
    let formattedValue = value;
    
    if (digitCount === 5) {
      formattedValue = value.replace(/(\d{3})(\d{2})/, '$1.$2'); // Formato para 5 dígitos
    } else if (digitCount === 4) {
      formattedValue = (value.replace(/(\d{2})(\d{2})/, '$1.$2')); // Formato para 4 dígitos
    };
    
    const numericValue = Number(formattedValue);

    setWeight(numericValue);
  };

  // Funcionalidade para calcular o IMC
  const handleClickCalculate = () => {
    if (height && weight) {
      setShowYourLevel(calculateImc(height, weight));
    } else {
      alert('Todos os campos devem ser preenchidos!');
    };
  };

  // Funcionalidade de resetar da left arrow
  const handleArrowReset = () => {
    setShowYourLevel(null);
    setHeight(0);
    setWeight(0);
  };


  return (
    <div className="max-w-4xl mx-auto px-10">
      <header className="my-10 animate-animaTop sm:animate-animaLeft">
        <div>
          <Image 
            src={powered.src}
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
      </header>

      <main className="flex flex-col sm:flex-row gap-14 m-auto">
        {/* Leftside */}
        <section className="flex-1 animate-animaTop sm:animate-animaLeft">
          <h1 className="text-3xl font-bold text-gray-700 mb-3">Calcule o seu IMC</h1>
          <p className="text-gray-500 mb-3">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>
          <Input
            type="text"
            placeholder="Digite a sua altura em metros (Ex.: 1.75)"
            value={height ? height : ''} 
            onChange={handleChangeHeight}
            onKeyUp={(e) => (e.key === 'Enter') && handleClickCalculate()}
            className="w-full mt-7 border-b-2 py-2 px-1"
          />
          <Input
            type="text"
            placeholder="Digite o seu peso em kg (Ex.: 68.3)"
            value={weight ? weight : ''} 
            onChange={handleChangeWeight}
            onKeyUp={(e) => (e.key === 'Enter') && handleClickCalculate()}
            className="w-full my-6 border-b-2 py-2 px-1"
            // mask={weight.length > 3 ? "999.99" : "99.99"}
          />
          <button
            className="block w-full bg-blue-500 p-2 mt-3 rounded-sm font-bold text-white duration-200 hover:opacity-80"
            onClick={handleClickCalculate}
          >
            Calcular
          </button>
        </section>

        {/* Rightside */}
        <section className="flex-1 flex mb-10">
          {/* Card inicial */}
          {
            !showYourLevel &&
            <div className="flex-1 grid grid-cols-2 gap-5 animate-animaDown sm:animate-animaRight">
              {
                levels.map((level, index) => (
                  <div
                    key={index}
                    className='flex flex-col justify-center items-center rounded-xl text-white py-5'
                    style={{ backgroundColor: level.color }}
                  >
                    <div className="flex justify-center items-center w-[4rem] h-[4rem] bg-black/10 rounded-full">
                      <Image
                        src={level.icon === 'up' ? upImage.src : downImage.src}
                        alt="hand"
                        width='30'
                        height={30}
                      />
                      
                    </div>
                    <h2 className="font-bold py-2 text-center md:text-lg px-2">{level.title}</h2>
                    <small className="text-center sm:text-xs md:text-[.8rem]">{level.imc[1] < 40 ? <>IMC entre <strong>{level.imc[0]} e {level.imc[1]}</strong></> : <>IMC maior que <strong>{level.imc[0]}</strong></>}</small>
                  </div>
                ))
              }
            </div>
          }

          {/* Card quando calculado o IMC do usuário */}
          {
            showYourLevel &&  
            <div className="flex-1 flex animate-animaDown sm:animate-animaRight">
              <div
                className="absolute ml-[2rem] mt-[-2rem] rotate-90 sm:ml-[-2rem] sm:mt-[10rem] sm:rotate-0 flex justify-center items-center w-[4rem] h-[4rem] bg-blue-500 rounded-full cursor-pointer duration-200 hover:opacity-90 hover:scale-105"
                onClick={handleArrowReset}
              >
                <Image
                  src={leftArrow.src}
                  alt="left arrow"
                  width='25'
                  height={25}
                />
              </div>
              <div className="flex flex-col justify-center items-center rounded-xl text-white w-full py-5" style={{ backgroundColor: showYourLevel.color }}>
                <div className="flex justify-center items-center w-[4rem] h-[4rem] bg-black/10 rounded-full">
                  <Image
                    src={showYourLevel.icon === 'up' ? upImage.src : downImage.src}
                    alt=""
                    width='30'
                    height={30}
                  />
                </div>
                <h1 className="font-bold text-3xl my-3">{showYourLevel.title}</h1>
                <p className="text-sm mb-4">{showYourLevel.imc[1] < 40 ? <>IMC entre <strong>{showYourLevel.imc[0]} e {showYourLevel.imc[1]}</strong></> : <>IMC maior que <strong>{showYourLevel.imc[0]}</strong></>}</p>
                <p className="mb-6">Seu IMC é de <strong>{showYourLevel.yourImc} kg/m²</strong></p>
                <p className="text-center px-7">{showYourLevel.description}</p>
              </div>
            </div>
          }
        </section>
      </main>
    </div>  
  );
};
