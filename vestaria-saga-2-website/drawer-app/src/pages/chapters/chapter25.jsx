import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter25 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 25"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This section will be a little different than before. The final map and everything associated with it will be kept a mystery in this guide. So you will have to play it for yourself to see the ending (or watch YouTube I guess). I'll add some of the items, events, and recruits you can find in this chapter. The rest will be up to you.<br/><br/>
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Defeat ?</span><br/>
          <span class="redtext">Defeat: Zade dies, after 15 turns.</span><br/>
            After Emilia talks to Borte:
          <span class="redtext">Defeat: Zade dies, after 20 turns.</span><br/>
          Whoever you fielded on chapter 24 and whatever they have in their inventory will not be available on the this chapter so plan carefully. I recommend using at least Ashram, Sujata, Phoeve, Laffine, Ouron, and Barzlephen on this chapter for rewards.<br/>
        </p>        
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Paulos" chartype="ally">
          <p>Will appear in the preparations screen.</p>
        </Character>
        <Character charname="Athol" chartype="ally">
          <p>A healer from the first game. Joins when Zade is one square diagonally southeast below the boss's head. After Zade takes considerable damage by ending his action on that specific tile, she heals him and buffs him tremendously to take on the boss.</p>
        </Character>
          
        <p class="text-small">
          The following is the list of returning units.
        </p>

        <Character charname="Bennette" chartype="ally">
          <p>Bennette and Roleck will appear if Bennette was allowed to leave in chapter 18.</p>
        </Character>
        <Character charname="Roleck" chartype="ally">
          <p>Bennette and Roleck will appear if Bennette was allowed to leave in chapter 18.</p>
        </Character>
        <Character charname="Porruck" chartype="ally">
          <p>Porruck and Castore appear on turn 6 as pirate ships in the center lake (apparently even if you did not promote them).</p>
        </Character>
        <Character charname="Castore" chartype="ally">
          <p>Porruck and Castore appear on turn 6 as pirate ships in the center lake (apparently even if you did not promote them).</p>
        </Character>          
        <Character charname="Theodel" chartype="ally">
          <p>Theodel, Emilia, Troy, Tasha, Zade appear on turn 11.</p>
        </Character> 
        <Character charname="Emilia" chartype="ally">
          <p>Theodel, Emilia, Troy, Tasha, Zade appear on turn 11.</p>
        </Character> 
        <Character charname="Troy" chartype="ally">
          <p>Theodel, Emilia, Troy, Tasha, Zade appear on turn 11.</p>
        </Character> 
        <Character charname="Tasha" chartype="ally">
          <p>Theodel, Emilia, Troy, Tasha, Zade appear on turn 11.</p>
        </Character>           
        <Character charname="Zade" chartype="ally">
          <p>Theodel, Emilia, Troy, Tasha, Zade appear on turn 11.</p>
        </Character>          
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Lucion can talk to Claude for some character story and a permanent +1 to res and luck stats for both of them.
          </li>
          <li>
            Sheela can talk to Zayid for some character story and a permanent +1 to luck stat for Sheela. Possibly more stats but my Sheela was capped out already on everything but luck and resistance.
          </li>
          <li>
            Zayid can talk to Penneloupe after Sheela talks to her for some character story.
          </li>
          <li>
            Laffine can talk to Phoeve for some character story and a permanent +1 Str for Laffine and a permanent +1 Mag for Phoeve.
          </li>
          <li>
            Emilia can talk to Borte for a scene to play. This extends the turn limit from 15 turns to 20 turns in the defeat conditions.
          </li>
          <li>
            Barzlephen can talk to Bennette to get the Power of Love status on Barzlephen after scene and a conclusion to his character arc.
          </li>
          <li>
            Zade can talk to Vanice to heal Zade and give a buff to Zade.
          </li>
          <li>
            Lilia can talk to Tasha for a different story scene to play out than if you deployed Lilia in chapter 24. 
          </li>
        </ul>      
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          There are a few shops to pick up some last minute things on this chapter.
        </p>
      </SectionBody>
          
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Examine flower in southeast for Royal Jelly.
          </li>
          <li>
            Examine flower in northwest near the boss's tail for <Item itemtype={itemtypes[2]}>Slumbersage</Item>. This is used in the tavern to make the left flank fall asleep.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            In the house in the bottom left you can get a <Item itemtype={itemtypes[2]}>Siurian Staff</Item> if you visit it with a staff user over level 25. Can easily be gotten from Bennette if you leveled her a lot and let her leave in chapter 18.
          </li>
          <li>
            In the far right house you can get the special bow <Item itemtype={itemtypes[1]}>Gunndivia*</Item> if you visit with any female archer (Sheela, Penneloupe, Bennette). Best to get it with Bennette again and use Sheela and Penneloupe on chapter 24.
          </li>
          <li>
            The mansion in the top right corner will allow you to remove the right flank of 12 pirates/savages after multiple turns as long as you don't trigger them before hand. You have to pay 5000 Denari for this however. A scene will play out before they are removed. The remaining flanks will become hostile after this.
          </li>
          <li>
            If you deliver the Slumbersage to the tavern in the middle it will cause the left flank of 12 pirates/savages to be put to sleep for a while.
          </li>
          <li>
            If you go to the Monastary with Phoeve and Accorte never died, you will get <Item itemtype={itemtypes[2]}>Ripwippe</Item> and a scene.
          </li>
          <li>
            If you go to the Middle house with Barzelphen you get a scene and a new personal weapon the <Item itemtype={itemtypes[1]}>Saint's Axe*</Item>. Better late than never I guess.
          </li>
          <li>
            If you go to the house near the southeast you can get Ouron the <Item itemtype={itemtypes[2]}>Industry skill</Item> and a scene will play out with his sister.
          </li>
          <li>
            There is a boss fight with a thief called Mousekid in the top right house. I think you need to use Ashram or Sujata for this fight. When you beat him you get <Item itemtype={itemtypes[0]}>7500 Denari</Item>.  
          </li>
        </ul>         
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Boss, Reinforcements, and Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Nope, you made it this far. You are now on your own. ;)
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter25
