import { motion } from "framer-motion";
import Header from "@/app/components/Header";

const questions = [
  {
    en: "How do your surroundings or culture influence your work?",
    fr: "Comment ton environnement ou ta culture influence ton travail ?",
    answer:
      "Alors faut savoir je suis quelqu&rsquo;un qui aime trop les histoires notamment les histoires africaines donc j&rsquo;observe l&rsquo;&eacute;volution le pass&eacute; et le pr&eacute;sent et le futur du coup je vois beaucoup de nouveaut&eacute;s et je vois aussi les choses qu&rsquo;on a un peu perdu avec le temps c&rsquo;est pour &ccedil;a je manque rarement d&rsquo;inspiration sur mes œuvres.",
  },
  {
    en: "What does being an artist in Senegal mean to you?",
    fr: "Qu’est-ce que ça veut dire pour toi d’être artiste au Sénégal ?",
    answer:
      "Je pense qu&rsquo;&ecirc;tre un artiste est d&eacute;j&agrave; une mission pour moi &ecirc;tre un artiste ici au S&eacute;n&eacute;gal d&eacute;j&agrave; c&rsquo;est essayer de faire comprendre au gens qu&rsquo;est ce que c&rsquo;est l&rsquo;art parce que ils ne sont pas habitu&eacute;s &agrave; cette univers de l&rsquo;art et aussi raconter et immortaliser l&rsquo;histoire du S&eacute;n&eacute;gal &agrave; travers mes œuvres je pense que tout &ccedil;a fait partie de mon travail",
  },
  {
    en: "How would you describe the art scene in Dakar today, and what makes it unique?",
    fr: "Comment tu décrirais la scène artistique à Dakar aujourd’hui, et qu’est-ce qui la rend unique ?",
    answer:
      "La sc&egrave;ne artistique &agrave; Dakar est vraiment magnifique les artistes collaborent souvent et c&rsquo;est quelque choses de tr&egrave;s rare dans le monde et aussi y la transmission de cette connaissance entre eux et aux d&eacute;butants aussi surtout au d&eacute;butants je te parle en connaissance de cause\n\nEn plus ce qui le rend unique je pense que ya plusieurs aspects mais d&eacute;j&agrave; ce que je viens de dire la ya la gratuite entre eux et surtout les espaces publics comme village des art d&eacute;j&agrave; quelques ann&eacute;es en arri&egrave;re y&rsquo;avait des japonais qui sont venus au S&eacute;n&eacute;gal pour visiter et ils sont venus au village des arts mais ils &eacute;taient tous &eacute;tonn&eacute; sur le fait que des artistes vivent ensemble dans un espace de travail c&rsquo;est rare de voir des artistes accepte de vivre au m&ecirc;me endroit je pense que c&rsquo;est ce qui le rend unique",
  },
  {
    en: "What themes do you aim to express in your art?",
    fr: "Quels messages ou thèmes tu veux faire passer dans ton travail ?",
    answer:
      "Y&rsquo;a en beaucoup mais les priorit&eacute;s sont immortalis&eacute;es nos r&eacute;cit historique l&rsquo;autre est d&rsquo;expliquer les gens notre plus grande arme est la connaissance et la recherche de la connaissance.",
  },
  {
    en: "What advice would you give to a young person who wants to become an artist here?",
    fr: "Quel conseil tu donnerais à un jeune qui veut devenir artiste ici ?",
    answer:
      "Ça bouge beaucoup c&rsquo;est d&eacute;j&agrave; une bonne chose maintenant faut savoir les d&eacute;fis &agrave; relever si je donne un conseil &agrave; un jeune je lui dirait d&rsquo;&eacute;couter beaucoup et observe et agit si tu a la passion m&ecirc;me si tu n&rsquo;a pas le talent agit et surtout &eacute;couter avec beaucoup d&rsquo;attention les pr&eacute;d&eacute;cesseurs et documente toi",
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
              🇫🇷 {q.fr}
            </h2>
            <h2 className="text-lg italic text-gray-600 mb-4">🇺🇸 {q.en}</h2>
            <motion.p
              className="text-gray-700 mt-2 whitespace-pre-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {q.answer}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
