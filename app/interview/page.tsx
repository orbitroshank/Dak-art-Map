import { motion } from "framer-motion";
import Header from "@/app/components/Header";

const questions = [
  {
    en: "How do your surroundings or culture influence your work?",
    fr: "Comment ton environnement ou ta culture influence ton travail ?",
    answer:
      "Alors faut savoir je suis quelqu’un qui aime trop les histoires notamment les histoires africaines donc j’observe l’évolution le passé et le présent et le futur du coup je vois beaucoup de nouveautés et je vois aussi les choses qu’on a un peu perdu avec le temps c’est pour ça je manque rarement d’inspiration sur mes œuvres.",
  },
  {
    en: "What does being an artist in Senegal mean to you?",
    fr: "Qu’est-ce que ça veut dire pour toi d’être artiste au Sénégal ?",
    answer:
      "Je pense qu’être un artiste est déjà une mission pour moi être un artiste ici au Sénégal déjà c’est essayer de faire comprendre au gens qu’est ce que c’est l’art parce que ils ne sont pas habitués à cette univers de l’art et aussi raconter et immortaliser l’histoire du Sénégal à travers mes œuvres je pense que tout ça fait partie de mon travail",
  },
  {
    en: "How would you describe the art scene in Dakar today, and what makes it unique?",
    fr: "Comment tu décrirais la scène artistique à Dakar aujourd’hui, et qu’est-ce qui la rend unique ?",
    answer:
      "La scène artistique à Dakar est vraiment magnifique les artistes collaborent souvent et c’est quelque choses de très rare dans le monde et aussi y la transmission de cette connaissance entre eux et aux débutants aussi surtout au débutants je te parle en connaissance de cause \n\nEn plus ce qui le rend unique je pense que ya plusieurs aspects mais déjà ce que je viens de dire la ya la gratuite entre eux et surtout les espaces publics comme village des art déjà quelques années en arrière y’avait des japonais qui sont venus au Sénégal pour visiter et ils sont venus au village des arts mais ils étaient tous étonné sur le fait que des artistes vivent ensemble dans un espace de travail c’est rare de voir des artistes accepte de vivre au même endroit je pense que c’est ce qui le rend unique",
  },
  {
    en: "What themes do you aim to express in your art?",
    fr: "Quels messages ou thèmes tu veux faire passer dans ton travail ?",
    answer:
      "Y’a en beaucoup mais les priorités sont immortalisées nos récit historique l’autre est d’expliquer les gens notre plus grande arme est la connaissance et la recherche de la connaissance.",
  },
  {
    en: "What advice would you give to a young person who wants to become an artist here?",
    fr: "Quel conseil tu donnerais à un jeune qui veut devenir artiste ici ?",
    answer:
      "Ça bouge beaucoup c’est déjà une bonne chose maintenant faut savoir les défis à relever si je donne un conseil à un jeune je lui dirait d’écouter beaucoup et observe et agit si tu a la passion même si tu n’a pas le talent agit et surtout écouter avec beaucoup d’attention les prédécesseurs et documente toi",
  },
];

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10 lg:px-20">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Interview with Mouhamed Jawad Ly
      </h1>
      <div className="space-y-6 max-w-4xl mx-auto">
        {questions.map((q, index) => (
          <motion.div
            key={index}
            className="border rounded-xl p-6 shadow bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🇫🇷{" "}
              {q.fr
                .replace(/’/g, "&rsquo;")
                .replace(/‘/g, "&lsquo;")
                .replace(/“/g, "&ldquo;")
                .replace(/”/g, "&rdquo;")
                .replace(/'/g, "&#39;")}
            </h2>
            <h2 className="text-lg italic text-gray-600 mb-4">
              🇺🇸{" "}
              {q.en
                .replace(/’/g, "&rsquo;")
                .replace(/‘/g, "&lsquo;")
                .replace(/“/g, "&ldquo;")
                .replace(/”/g, "&rdquo;")
                .replace(/'/g, "&#39;")}
            </h2>
            <motion.p
              className="text-gray-700 mt-2 whitespace-pre-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              dangerouslySetInnerHTML={{
                __html: q.answer
                  .replace(/’/g, "&rsquo;")
                  .replace(/‘/g, "&lsquo;")
                  .replace(/“/g, "&ldquo;")
                  .replace(/”/g, "&rdquo;")
                  .replace(/'/g, "&#39;"),
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
