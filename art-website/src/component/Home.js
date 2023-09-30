import React from 'react'
import Card from './Card'

function Home() {
  return (
    <div>
      <h1 className="mb-4 mt-4 text-center "  style={{ fontStyle: 'italic' }}>I made these paintings, I'm still happy with them.</h1>
      <div className="row">
        <Card
          imageSrc="/img/nottitled.jpg"
          imageAlt="Not titled"
          title="Not titled"
        />
        <Card imageSrc="/img/noprey.jpg" imageAlt="No prey" title="No prey" />
        <Card imageSrc="/img/viaje.jpg" imageAlt="Viaje" title="Viaje" />
        <Card imageSrc="/img/fixyou.jpg" imageAlt="Fix you" title="Fix you" />
        <Card
          imageSrc="/img/memory.jpg"
          imageAlt="The memory of persistence"
          title="The memory of persistence"
        />

        <Card imageSrc="/img/2.jpg" imageAlt="2" title="2" />

        <Card imageSrc="/img/punto.jpg" imageAlt="?!?!" title="?!?!" />

        <Card
          imageSrc="/img/togetlost.jpg"
          imageAlt="To get lost"
          title="To get lost"
        />

        <Card
          imageSrc="/img/everyman.jpg"
          imageAlt="Every man meets his Waterloo at last"
          title="Every man meets his Waterloo at last"
        />

        <Card
          imageSrc="/img/hiddengem.jpg"
          imageAlt="Hidden gem"
          title="Hidden gem"
        />

        <Card imageSrc="/img/walk.jpg" imageAlt="Walk" title="Walk" />

        <Card imageSrc="/img/notime.jpg" imageAlt="No time" title="No Time" />

        <Card
          imageSrc="/img/kingdom.jpg"
          imageAlt="A Kingdom"
          title="A kingdom"
        />

        <Card imageSrc="/img/erehw.jpg" imageAlt="Erewh" title="Erewh" />

        <Card
          imageSrc="/img/hugging.jpg"
          imageAlt="Hugging you"
          title="Hugging you"
        />

        <Card imageSrc="/img/u.jpg" imageAlt="U." title="U." />

        <Card imageSrc="/img/quite.jpg" imageAlt="Quite." title="Quite." />

        <Card imageSrc="/img/circle.jpg" imageAlt="Circle" title="Circle" />

        <Card imageSrc="/img/time.jpg" imageAlt="Time" title="Time" />

        <Card
          imageSrc="/img/cercavo.jpg"
          imageAlt="Cercavo il mare all'improvviso il cielo"
          title="Cercavo il mare all'improvviso il cielo"
        />

        <Card
          imageSrc="/img/there.jpg"
          imageAlt="There is only one piece of advice in life"
          title="There is only one piece of advice in life"
        />

        <Card
          imageSrc="/img/fault.jpg"
          imageAlt="The fault, dear Brutus, is not our stars, but in ourselves"
          title="The fault, dear Brutus, is not our stars, but in ourselves"
        />

        <Card
          imageSrc="/img/main.jpg"
          imageAlt="Main article"
          title="Main article"
        />

        <Card imageSrc="/img/life.jpg" imageAlt="Life" title="Life" />

        <Card
          imageSrc="/img/soltanto.jpg"
          imageAlt="Soltanto il tuo cuore che arde e niente più"
          title="Soltanto il tuo cuore che arde e niente più"
        />
      </div>
    </div>
  )
}

export default Home
