
import React, { useEffect } from 'react';
import { ADDRESS } from '../constants';
import { ChevronLeft } from 'lucide-react';

interface LegalPageProps {
  title: string;
  type: 'impressum' | 'privacy';
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-texmex-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 mb-12 text-gray-500 hover:text-texmex-red transition-colors uppercase font-bold tracking-widest text-xs"
        >
          <ChevronLeft size={16} /> Zurück
        </button>

        <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-12 border-b border-white/10 pb-6">
          {title}
        </h1>

        <div className="prose prose-invert max-w-none text-gray-400 font-light leading-relaxed space-y-8">
          {type === 'impressum' ? (
            <>
              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Angaben gemäß § 5 TMG / Offenlegung gem. §§ 24, 25 MedG</h2>
                <p>
                  TexMex Steyr<br />
                  Inhaber: [Name des Inhabers]<br />
                  {ADDRESS.street}<br />
                  {ADDRESS.city}<br />
                  Österreich
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Kontakt</h2>
                <p>
                  Telefon: {ADDRESS.phone}<br />
                  E-Mail: {ADDRESS.email}<br />
                  Web: www.texmex.at
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Aufsichtsbehörde / Kammer</h2>
                <p>
                  Wirtschaftskammer Oberösterreich<br />
                  Gewerbeordnung: www.ris.bka.gv.at
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Haftungsausschluss</h2>
                <p>
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Datenschutzerklärung</h2>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Kontakt mit uns</h2>
                <p>
                  Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Ihre Rechte</h2>
                <p>
                  Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
