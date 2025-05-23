"use client";

import { motion } from "framer-motion";

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-32 md:px-10 lg:px-20">
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
          <p className="italic">
            Comment ton environnement ou ta culture influence ton travail ?
          </p>
          <p className="mt-4 text-gray-700">
            Alors faut savoir je suis quelqu&rsquo;un qui aime trop les
            histoires, notamment les histoires africaines. Donc j&rsquo;observe
            l&rsquo;évolution, le passé, le présent et le futur. Du coup je vois
            beaucoup de nouveautés, et je vois aussi les choses qu&rsquo;on a un
            peu perdu avec le temps. C&rsquo;est pour ça que je manque rarement
            d&rsquo;inspiration sur mes œuvres.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            I&rsquo;m someone who really loves stories, especially African
            stories. I observe the evolution—past, present, and future—so I see
            a lot of new things and also things we&rsquo;ve somewhat lost over
            time. That&rsquo;s why I rarely lack inspiration for my work.
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
          <p className="italic">
            Qu&rsquo;est-ce que ça veut dire pour toi d&rsquo;être artiste au
            Sénégal ?
          </p>
          <p className="mt-4 text-gray-700">
            Je pense qu&rsquo;être un artiste est déjà une mission. Pour moi,
            être un artiste ici au Sénégal, déjà c&rsquo;est essayer de faire
            comprendre aux gens qu&rsquo;est-ce que c&rsquo;est l&rsquo;art,
            parce qu&rsquo;ils ne sont pas habitués à cet univers de
            l&rsquo;art. Et aussi raconter et immortaliser l&rsquo;histoire du
            Sénégal à travers mes œuvres. Je pense que tout ça fait partie de
            mon travail.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            I think being an artist is already a mission. For me, being an
            artist in Senegal means trying to help people understand what art
            is, since they aren&rsquo;t used to this world of art. It also means
            telling and preserving Senegal&rsquo;s history through my work. I
            believe all of that is part of my job.
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
          <p className="italic">
            Comment tu décrirais la scène artistique à Dakar aujourd&rsquo;hui,
            et qu&rsquo;est-ce qui la rend unique ?
          </p>
          <p className="mt-4 text-gray-700 whitespace-pre-line">
            La scène artistique à Dakar est vraiment magnifique. Les artistes
            collaborent souvent et c&rsquo;est quelque chose de très rare dans
            le monde. Il y a aussi la transmission de cette connaissance entre
            eux et aux débutants, surtout aux débutants—je te parle en
            connaissance de cause. En plus, ce qui le rend unique, je pense que
            y&rsquo;a plusieurs aspects. Mais déjà ce que je viens de dire,
            y&rsquo;a la gratuité entre eux et surtout les espaces publics comme
            le Village des Arts. Déjà, quelques années en arrière, y&rsquo;avait
            des Japonais qui sont venus au Sénégal pour visiter, et ils sont
            venus au Village des Arts. Ils étaient tous étonnés du fait que des
            artistes vivent ensemble dans un espace de travail. C&rsquo;est rare
            de voir des artistes accepter de vivre au même endroit. Je pense que
            c&rsquo;est ce qui le rend unique.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            The art scene in Dakar is truly beautiful. Artists often
            collaborate, which is very rare globally. There&rsquo;s also
            knowledge-sharing between them and newcomers—especially beginners. I
            say this from experience. What makes it unique? Many things, but
            what I just said is a big part: there&rsquo;s generosity between
            artists, and public spaces like the Village des Arts. A few years
            ago, some Japanese visitors came to Senegal and visited the Village
            des Arts. They were amazed that artists live and work together in
            the same space. That&rsquo;s rare, and I think it&rsquo;s what makes
            it special.
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
          <p className="italic">
            Quels messages ou thèmes tu veux faire passer dans ton travail ?
          </p>
          <p className="mt-4 text-gray-700">
            Y&rsquo;a en beaucoup, mais les priorités sont d&rsquo;immortaliser
            nos récits historiques. L&rsquo;autre est d&rsquo;expliquer aux
            gens. Notre plus grande arme est la connaissance et la recherche de
            la connaissance.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            There are many, but the priorities are to preserve our historical
            narratives and to educate people. Our greatest weapon is
            knowledge—and the pursuit of it.
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
          <p className="italic">
            Quel conseil tu donnerais à un jeune qui veut devenir artiste ici ?
          </p>
          <p className="mt-4 text-gray-700">
            Ça bouge beaucoup, c&rsquo;est déjà une bonne chose. Maintenant,
            faut savoir les défis à relever. Si je donne un conseil à un jeune,
            je lui dirais d&rsquo;écouter beaucoup, observe, et agit. Si tu as
            la passion, même si tu n&rsquo;as pas le talent, agit. Et surtout,
            écoute avec beaucoup d&rsquo;attention les prédécesseurs et
            documente toi.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            Things are moving a lot, and that&rsquo;s already a good thing. But
            you need to understand the challenges ahead. If I had to give advice
            to a young person, I&rsquo;d say: listen a lot, observe, and act. If
            you have passion—even if you don&rsquo;t have the talent—act. And
            above all, listen carefully to those who came before you and educate
            yourself.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
