import SectionBody from "../components/guide/SectionBody"
import SectionHeader from "../components/guide/SectionHeader"
import Footer from "../components/guide/Footer"

const GuideOverview = () => {

    return (
        <div id="main">
          <SectionHeader>
            <h1 class="text-big">
              Guide Overview
            </h1>
          </SectionHeader>
          <SectionBody>
            <p>
              I made a few guides on the first game recently and enjoyed doing it so I am going to list some of the interesting stuff I found on a chapter by chapter basis as well as some strategies for beating the chapter. I hope others who are unfamiliar with SRPGs or struggle with these types of games can be helped by this guide. Also for those who want 100% of everything this is for you.
            </p>
            <br/>
            <p>General tips:</p>
            <ul>
              <li>
                Try not to let personal weapons (weapons with a * at the end and can only be used by one individual) break. There are repair stones called Siurian Thaumite throughout the game which can fully restore the durability of these powerful weapons as long as they don't reach 0.
              </li>
              <li>
                Capture everyone who has a * on their name even if it is a pain as the rewards are worth it.
              </li>
              <li>
                If you are not going for 100% but see Siurian Thaumite on the map details section try to get those. It is really invaluable to be able to repair whatever weapon or staff you want for reuse.
              </li>
              <li>
                Unlike a lot of fire emblem style games, most maps have a specific objective which instantly ends it. If you are struggling on a chapter just rush for the objective and ignore the extra things.
              </li>
              <li>
              If you have played Fire Emblem Radiant Dawn you might be familiar with its... unit availabilty **shudders**. Well unfortunately this game does the same thing. Because of this try to level everyone in your army as evenly as you can. On easier chapters feed the exp to weaker units to flush out the party.
              </li>
              <li>
                Promotions in this game do not reset level and are only available to certain units via story event or conversation; promotions do not require you to be at a certain level as a prerequisite. Also, advanced classes get less experience.
              </li>
              <li>
                The strategies I post in the guide sections are the way I got through the chapter relatively easily and are meant to help. There is too much RNG and player choice to really post a strategy that will work 100% of the time for every player. I will also try to refrain from "I gave Sujata all the stat boosters, leveled her up 30 times, and she has max stats and solos this chapter, just do that too" strategies. I also list who I use predominantly in each chapter so my endgame map strategies are a lot more clear for why I did what I did and why I used who I used.
              </li>
              <li>
                I will assume you recruit all characters which are highly missable like Karajan and Penneloupe and don't lose a single unit to perma-death when going over strategies in the map overview and guide sections. Obviously if this is not the case your strategy is going to differ wildly.
              </li>
            </ul>
          </SectionBody>          
          <Footer />
        </div>
    )
}

export default GuideOverview;