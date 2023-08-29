import {
  Typography,
  Stack,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";

function Impressum() {
  return (
    <Stack
      gap={3}
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h6" component="div">
        1. Inhalt des Onlineangebotes
      </Typography>
      <Typography variant="subtitle1" component="div">
        Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit,
        Vollständigkeit oder Qualität der bereitgestellten Informationen.
        Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
        oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der
        dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
        unvollständiger Informationen verursacht wurden, sind grundsätzlich
        ausgeschlossen, sofern seitens des Autors kein nachweislich
        vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote
        sind freibleibend und unverbindlich. Der Autor behält es sich
        ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
        gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
        Veröffentlichung zeitweise oder endgültig einzustellen.
      </Typography>
      <Typography variant="h6" component="div">
        2. Verweise und Links
      </Typography>
      <Typography variant="subtitle1" component="div">
        Bei direkten oder indirekten Verweisen auf fremde Webseiten
        ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors
        liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in
        Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm
        technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
        Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum
        Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu
        verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige
        Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften
        Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich
        hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften
        Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung
        gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links
        und Verweise sowie für Fremdeinträge in vom Autor eingerichteten
        Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale,
        fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden,
        die aus der Nutzung oder Nichtnutzung solcherart dargebotener
        Informationen entstehen, haftet allein der Anbieter der Seite, auf
        welche verwiesen wurde, nicht derjenige, der über Links auf die
        jeweilige Veröffentlichung lediglich verweist.
      </Typography>
      <Typography variant="h6" component="div">
        3. Urheber- und Kennzeichenrecht
      </Typography>
      <Typography variant="subtitle1" component="div">
        Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
        verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu
        beachten, von ihm selbst erstellte Grafiken, Tondokumente,
        Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
        Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb
        des Internetangebotes genannten und ggf. durch Dritte geschützten
        Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen
        des jeweils gültigen Kennzeichenrechts und den Besitzrechten der
        jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung
        ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte
        Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor
        selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine
        Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente,
        Videosequenzen und Texte in anderen elektronischen oder gedruckten
        Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht
        gestattet.
      </Typography>
      <Typography variant="h6" component="div">
        4. Datenschutz
      </Typography>
      <Typography variant="subtitle1" component="div">
        Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
        persönlicher oder geschäftlicher Daten (Emailadressen, Namen,
        Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des
        Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und
        Bezahlung aller angebotenen Dienste ist - soweit technisch möglich und
        zumutbar - auch ohne Angabe solcher Daten bzw. unter Angabe
        anonymisierter Daten oder eines Pseudonyms gestattet. Die Nutzung der im
        Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten
        Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie
        Emailadressen durch Drittezur Übersendung vonnicht ausdrücklich
        angeforderten Informationen ist nicht gestattet. Rechtliche Schritte
        gegen die Versender von sogenannten Spam-Mails bei Verstössen gegen
        dieses Verbot sind ausdrücklich vorbehalten.
      </Typography>
      <Typography variant="h6" component="div">
        5. Rechtswirksamkeit dieses Haftungsausschlusses
      </Typography>
      <Typography variant="subtitle1" component="div">
        Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
        betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile
        oder einzelne Formulierungen dieses Textes der geltenden Rechtslage
        nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben
        die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
        davon unberührt.
      </Typography>
    </Stack>
  );
}

export default Impressum;
