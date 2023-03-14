import React, { useEffect } from 'react'
import Data from '../Data/Data'
import './Kanzlei.css'

function Kanzlei() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='kanzlei'>
        <div className="kanzlei1">
          <h1>Die Kanzlei</h1>
          <h3 className='h31'>In den Bereichen Zivil- & Wirtschaftsrecht</h3>
          <p>begleiten wir Mandanten beratend und wahren Ihre Rechte bei Konflikten vor Gericht. Wir vertreten seit Jahren die Interessen von Privatpersonen und Unternehmen erfolgreich auch bei grenzüberschreitenden Konflikten: Wenden Sie sich vertrauensvoll an einen Rechtsanwalt unserer Kanzlei in Hamburg-Harburg, wenn Sie eine zweisprachige Vertretung (Deutsch-Russisch) wünschen.</p>
          <h3 className='h31'>Rechtsanwalt Ihres Vertrauens in Hamburg Harburg – deutsch-russische Anwaltskanzlei</h3>
          <p>• Rechtsbeistand für Privatpersonen & Unternehmen des Mittelstands <br /> • Arbeit in fachübergreifenden Teams mit Notaren und Steuerberatern <br /> • Grenzübergreifende Wahrung Ihrer Interessen <br /> • Bestmögliche persönliche Beratung</p>
          <p>Seit vielen Jahren sind wir als Ihr Rechtsanwalt in Hamburg-Harburg tätig.</p>
        </div>
        <div className="kanzlei1">
          <h3 className='h32'>In den Bereichen Zivil- & Wirtschaftsrecht begleiten wir Mandanten beratend und wahren Ihre Rechte bei Konflikten vor Gericht</h3>
          <p>Wir vertreten seit Jahren die Interessen von Privatpersonen und Unternehmen erfolgreich auch bei grenzüberschreitenden Konflikten: Wenden Sie sich vertrauensvoll an einen Rechtsanwalt unserer Kanzlei in Hamburg-Harburg, wenn Sie eine zweisprachige Vertretung (Deutsch-Russisch) wünschen</p>
          <h3 className='h31'>Rechtsanwalt Ihres Vertrauens in Hamburg Harburg – deutsch-russische Anwaltskanzlei:</h3>
          <p>Rechtsbeistand für Privatpersonen & Unternehmen des MittelstandsArbeit in fachübergreifenden Teams mit Notaren und SteuerberaternGrenzübergreifende Wahrung Ihrer InteressenBestmögliche persönliche Beratung</p>
          <p>Seit vielen Jahren sind wir als Ihr Rechtsanwalt</p>
        </div>
      </div>
      <Data/>
    </>
  )
}

export default Kanzlei