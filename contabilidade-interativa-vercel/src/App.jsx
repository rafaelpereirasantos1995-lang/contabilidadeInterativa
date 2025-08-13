import React, { useState } from "react";

const lessons = [
  { title: "Débito e Crédito", content: "Débito aumenta ativos e despesas; crédito aumenta passivos, receitas e patrimônio líquido." },
  { title: "Ativo e Passivo", content: "Ativo é tudo que a empresa possui; Passivo é tudo que ela deve." },
  { title: "Patrimônio Líquido", content: "Diferença entre o que a empresa possui e deve." },
];

const quiz = [
  { q: "Débito aumenta ativo?", a: "Sim" },
  { q: "Patrimônio Líquido é Ativo menos Passivo?", a: "Sim" },
  { q: "Crédito sempre aumenta ativo?", a: "Não" },
];

export default function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (ans) => {
    if (ans === quiz[step].a) {
      setScore(score + 1);
    }
    if (step + 1 < quiz.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Contabilidade Interativa</h1>
      <div className="mb-6">
        {lessons.map((l, i) => (
          <div key={i} className="p-4 border rounded mb-2 bg-gray-100">
            <h2 className="font-semibold">{l.title}</h2>
            <p>{l.content}</p>
          </div>
        ))}
      </div>
      {!finished ? (
        <div className="p-4 border rounded bg-white">
          <p className="mb-2 font-medium">{quiz[step].q}</p>
          <div className="flex gap-2">
            <button onClick={() => handleAnswer("Sim")} className="bg-green-500 text-white px-4 py-2 rounded">Sim</button>
            <button onClick={() => handleAnswer("Não")} className="bg-red-500 text-white px-4 py-2 rounded">Não</button>
          </div>
        </div>
      ) : (
        <div className="p-4 border rounded bg-green-100">
          <p className="font-bold">✅ Quiz concluído! Sua pontuação: {score}/{quiz.length}</p>
        </div>
      )}
    </div>
  );
}