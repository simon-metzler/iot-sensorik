import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">AUSGANGSLAGE</h1>
        <p className="mb-4">
          Mittels eines Sensors werden Daten laufend und kontinuierlich erfasst.
          Diese werden mittels eines Netzwerkes oder Kabel ins Backend über eine
          API eingespielt und dort adaptiert, damit diese in der Datenbank
          gespeichert werden können.
        </p>
        <p className="mb-4">
          Ein spezifischer Web-Server greift diese kumulierten Daten auf,
          verarbeitet sie entsprechend für eine webtaugliche Darstellung um
          schlussendlich im Web-Browser eines Benutzers tabellarisch wie auch
          als Grafik (z.B. als Kennlinie) dargestellt zu werden. Der User kann
          sich als „Admin“ oder als „User“ (nur Leserechte) anmelden.
        </p>
        <p className="mb-4">
          Zudem soll dem User eine Export-Funktion im Browser zur Verfügung
          gestellt werden, mittels derer er die Daten als CSV-Datei für eine
          evtl. Auswertung in MS Excel exportieren kann. Siehe untenstehende
          Abbildung1.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Abbildung 1 - Grobkonzept
        </h2>
        <p className="mb-4">
          Im Rahmen des Projektmanagement-Teils des Projekts war es unsere
          Aufgabe, bis zum 17.06.2024 ein vollständiges PM-Handbuch zu
          erstellen. Dieses soll folgende Projektmanagement-Pläne enthalten:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>PA (Projektauftrag)</li>
          <li>OSP (Objektbetrachtungsplan als Mindmap)</li>
          <li>PUA (Projektumweltanalyse)</li>
          <li>PSP (Projektstrukturplan)</li>
          <li>MSP (Projektmeilensteinplan)</li>
        </ul>

        <h1 className="text-2xl font-bold mb-4">AUSARBEITUNG</h1>

        <h2 className="text-xl font-semibold mb-2">Brainstorming</h2>
        <p className="mb-4">
          Um uns einen Überblick zu schaffen, führten wir zunächst als Team ein
          Brainstorming durch. So konnten wir zentral alle Anforderungen und
          Aspekte des Projekts darstellen. Wir erfassten alle Ideen auf einer
          Mindmap, welche wir auf mindmeister.com erstellten.
        </p>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 2 - Brainstorming (erstellt auf mindmeister)
        </h3>

        <h2 className="text-xl font-semibold mb-2">Projektauftrag</h2>
        <p className="mb-4">
          Als das grobe Grundkonzept feststand, konnten wir auch schon mit der
          Erstellung des Projektauftrags beginnen.
        </p>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 3 - Projektauftrag (erstellt auf Word)
        </h3>

        <h2 className="text-xl font-semibold mb-2">Objektstrukturplan</h2>
        <p className="mb-4">
          Wir setzten uns erneut zusammen, um unsere Grundidee ausführlich
          auszuarbeiten. Wir erstellten einen Objektstrukturplan. Wir
          erstellten…
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>den OSP als Baumstruktur auf miro.com.</li>
        </ul>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 4 – Objektstrukturplan - Baumstruktur komplett (erstellt auf
          miro)
        </h3>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 5 – Objektstrukturplan – Baumstruktur Teilansicht 1
        </h3>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 6 – Objektstrukturplan - Baumstruktur Teilansicht 2
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>den OSP als Mindmap auf mindmeister.com.</li>
        </ul>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 7 - Objektstrukturplan - Mindmap (erstellt auf mindmeister)
        </h3>

        <h2 className="text-xl font-semibold mb-2">Design</h2>
        <p className="mb-4">
          Nun begannen wir auch schon mit der Erstellung eines Mockups. Wir
          skizzierten dieses auf Microsoft Paint.
        </p>

        <h2 className="text-xl font-semibold mb-2">Projektumweltanalyse</h2>
        <h3 className="text-lg font-medium mb-2">
          PUA – graphische Darstellung
        </h3>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 8 - Projektumweltanalyse - graphische Darstellung (erstellt
          auf miro)
        </h3>
        <h3 className="text-lg font-medium mb-2">PUA – tabellarische Form</h3>
        <table className="table-auto w-full mb-4 border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Umwelt</th>
              <th className="border border-gray-400 px-4 py-2">Risiko</th>
              <th className="border border-gray-400 px-4 py-2">
                Maßnahme/ Strategie
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                PTM: Dragan, Damien, David, Simon
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Zusammenarbeit funktioniert nicht reibungslos
                <br />
                 Unzufriedenheit in der Aufgaben-Einteilung
                <br /> Zeitdruck
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Teambesprechungen
                <br />
                 Faire und gleichmäßige Aufteilung
                <br /> Klare Ziele und Fristen setzen
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">PL: Raphael</td>
              <td className="border border-gray-400 px-4 py-2">
                 Keine Kontrolle/ Übersicht über die PTM
                <br /> Zeitdruck
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Klare Ziele und Fristen setzen
                <br /> Kommunikation
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                PAG: Bernd Frankenhauser
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Nicht ausreichend Präsenzunterrichtsstunden, um Fragen zu
                klären
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Wichtige Fragen via Teams oder Outlook klären
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Kunden: Klaus B., Diethard K.
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Unzufrieden mit dem Ergebnis
              </td>
              <td className="border border-gray-400 px-4 py-2">
                 Unsicherheiten klären
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mb-2">Projektstrukturplan</h2>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 9 - Projektstrukturplan (erstellt auf miro)
        </h3>

        <h2 className="text-xl font-semibold mb-2">Projektmeilensteinplan</h2>
        <h3 className="text-lg font-medium mb-2">
          Abbildung 10 - Projektmeilensteinplan (erstellt auf Excel)
        </h3>
      </div>
    </main>
  );
}
