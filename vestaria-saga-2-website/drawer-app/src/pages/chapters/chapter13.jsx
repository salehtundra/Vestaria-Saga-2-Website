import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter13 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 13"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
      <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Defeat Horatio, Defeat Cordova.</span><br/>
          <span class="redtext">Defeat: Zade dies, Arielle dies, 20 turns pass.</span><br/><br/>    
          You finally have access to the preparations screen again. This chapter is very easy but can be tricky to get all of the items in the 20 turn limit.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter13map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter13data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Zade can talk to Arielle to make her leave the map. You want to do this since defeating her triggers a game over.
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
            Every gold pile yields <Item itemtype={itemtypes[0]}>1500 Denari</Item> directly when examined. You want to examine all of them and make sure no thief picks these up by using Slayne.
          </li>
          <li>
            The far left thief will get a <Item itemtype={itemtypes[0]}>cutlass</Item>, beat her to get it for yourself.
          </li>
          <li>
            Let the bottom most thief go for the <Item itemtype={itemtypes[0]}>Cavalry Lance</Item> then get it for yourself.
          </li>
          <li>
            Let one of the thieves go for the <Item itemtype={itemtypes[0]}>Archbow</Item> in the middle then defeat her to get it.
          </li>
          <li>
            You can have a thief go for the <Item itemtype={itemtypes[2]}>Zephyr sword</Item> at the top of the map then pick her off with Slayne.
          </li>
          <li>
            You will probably need to go for the <Item itemtype={itemtypes[0]}>Altium Axe</Item> on the top left yourself as the thieves tend to go for the gold piles.
          </li>
          <li>
            Because of Baruke's forces you will most likely need to go for the <Item itemtype={itemtypes[0]}>Arbalest +1</Item> for yourself in the bottom right.
          </li>
          <li>
            Same with the <Item itemtype={itemtypes[2]}>Iron Duke</Item>, use a very mobile unit to get to it before turn 20.
          </li>                                                     
        </ul>

        <p class="text-small">
          Cordova drops a villain's purse upon defeat.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your allies Baruke and his Ironbloods leave after so many turns (or possibly the death of a few of them). You can ignore them for the most part.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            An axe wielding enemy will keep spawning from the staircase and the nearby mage will teleport him to a nearby unit. Taking out the mage stops this as the axe wielding enemy stays on the staircase until you open the throne room.
          </li>
          <li>
            Ruffians and thieves spawn from the top right corridor until Baruke leaves. They are mostly there to slow down Baruke's forces.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Arielle" chartype="enemy">
          <p>You can talk to her with Zade, don't bother fighting her. She heals every enemy on the map every turn.</p>
        </Character>
        <Character charname="Horatio" chartype="enemy">
          <p>He is pretty dangerous and moves once you open the door, use a heavy hitter to deal with him.</p>
        </Character>
        <Character charname="Cordova" chartype="enemy">
          <p>He is very tanky but does not move and does not attack from more than 1 range. Use that to your advantage and pick him off at 2 range.</p>
        </Character>                
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
        This is a very easy chapter and a great way for Slayne to level up. Have him use long range weapons to take out any thief going for the gold piles. Let a lot the thieves go for the weapon piles as the thieves will drop the weapon upon defeat saving you the hassle. Make sure to beat them with Slayne before the thieves escape. Use Nelke's staff a lot here to as you only have 20 turns to get every item in this chapter.<br/><br/>
        Ignore Baruke and his troops he will leave after a while and not really interfere. Pick off the mages in the throne room with Slayne and rush with your most mobile units to get any treasure remaining. When you are ready open the door to the throne room and try to take out Horatio instantly. Have Zade talk to Arielle and everyone gang up on Cordova.
        </p>
      </SectionBody>

      <Footer />
    </div>        
    )
}

export default Chapter13