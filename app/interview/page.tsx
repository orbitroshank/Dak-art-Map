import { motion } from "framer-motion";

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10 lg:px-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Interview with Mouhamed Jawad Ly
      </h1>
      <div className="space-y-10 max-w-4xl mx-auto">
        <motion.div
          className="bg-gray-50 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="mb-2 font-semibold">
            How do your surroundings or culture influence your work?
          </p>
          <p>Comment ton environnement ou ta culture influence ton travail ?</p>
          <p className="mt-4 text-gray-700">
            Alors faut savoir je suis quelqu&rsquo;un qui aime trop les
            histoires notamment les histoires africaines donc j&rsquo;observe
            l&rsquo;évolution le passé et le présent et le futur du coup je vois
            beaucoup de nouveautés et je vois aussi les choses qu&rsquo;on a un
            peu perdu avec le temps c&rsquo;est pour ça je manque rarement
            d&rsquo;inspiration sur mes œuvres.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-2 font-semibold">
            What does being an artist in Senegal mean to you?
          </p>
          <p>
            Qu&rsquo;est-ce que ça veut dire pour toi d&rsquo;être artiste au
            Sénégal ?
          </p>
          <p className="mt-4 text-gray-700">
            Je pense qu&rsquo;être un artiste est déjà une mission pour moi être
            un artiste ici au Sénégal déjà c&rsquo;est essayer de faire
            comprendre au gens qu&rsquo;est ce que c&rsquo;est l&rsquo;art parce
            que ils ne sont pas habitués à cette univers de l&rsquo;art et aussi
            raconter et immortaliser l&rsquo;histoire du Sénégal à travers mes
            œuvres je pense que tout ça fait partie de mon travail
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-2 font-semibold">
            How would you describe the art scene in Dakar today, and what makes
            it unique?
          </p>
          <p>
            Comment tu décrirais la scène artistique à Dakar aujourd&rsquo;hui,
            et qu&rsquo;est-ce qui la rend unique ?
          </p>
          <p className="mt-4 text-gray-700 whitespace-pre-line">
            La scène artistique à Dakar est vraiment magnifique les artistes
            collaborent souvent et c&rsquo;est quelque choses de très rare dans
            le monde et aussi y la transmission de cette connaissance entre eux
            et aux débutants aussi surtout au débutants je te parle en
            connaissance de cause En plus ce qui le rend unique je pense que ya
            plusieurs aspects mais déjà ce que je viens de dire la ya la
            gratuite entre eux et surtout les espaces publics comme village des
            art déjà quelques années en arrière y&rsquo;avaient des japonais qui
            sont venus au Sénégal pour visiter et ils sont venus au village des
            arts mais ils étaient tous étonnés sur le fait que des artistes
            vivent ensemble dans un espace de travail c&rsquo;est rare de voir
            des artistes accepter de vivre au même endroit je pense que
            c&rsquo;est ce qui le rend unique
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="mb-2 font-semibold">
            What themes do you aim to express in your art?
          </p>
          <p>
            Quels messages ou thèmes tu veux faire passer dans ton travail ?
          </p>
          <p className="mt-4 text-gray-700">
            Y&rsquo;a en beaucoup mais les priorités sont immortalisées nos
            récits historiques l&rsquo;autre est d&rsquo;expliquer les gens
            notre plus grande arme est la connaissance et la recherche de la
            connaissance.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-2 font-semibold">
            What advice would you give to a young person who wants to become an
            artist here?
          </p>
          <p>
            Quel conseil tu donnerais à un jeune qui veut devenir artiste ici ?
          </p>
          <p className="mt-4 text-gray-700">
            Ça bouge beaucoup c&rsquo;est déjà une bonne chose maintenant faut
            savoir les défis à relever si je donne un conseil à un jeune je lui
            dirais d&rsquo;écouter beaucoup et observe et agit si tu as la
            passion même si tu n&rsquo;as pas le talent agit et surtout écoute
            avec beaucoup d&rsquo;attention les prédécesseurs et documente toi
          </p>
        </motion.div>
      </div>
    </div>
  );
}
