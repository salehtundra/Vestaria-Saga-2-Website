import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter14 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 14"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Zade arrives in Elgin, Roleck arrives in Elgin</span><br/>
          <span class="redtext">Defeat: Zade dies, Roleck dies</span><br/><br/>    
          Everyone is deployed and you will not have access to preparations screen for a while after this; make sure everyone is well equipped before the end of the chapter. This chapter is similar to 15x in the first game.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter14map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter14data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Capturable Units
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Zade can capture every unit which spawns with the Pirate Boss and the pirate ship excluding those two. Each give a specific reward which you cannot see in their inventory.
        </p>
        <ul>
          <li>
            Capturing the pirate with a <Item itemtype={itemtypes[0]}>Warpick</Item> gives the <Item itemtype={itemtypes[0]}>Defense Jolt</Item>.
          </li>
          <li>
            Capturing the pirates with the <Item itemtype={itemtypes[0]}>Battle Axes</Item> give the <Item itemtype={itemtypes[2]}>Esoteric Scripture</Item> and the <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
          </li>
          <li>
            Capturing the pirate with a <Item itemtype={itemtypes[0]}>Hammer</Item> gives the <Item itemtype={itemtypes[2]}>Ward Ring</Item>.
          </li>
          <li>
            Capturing the pirate with a <Item itemtype={itemtypes[0]}>Poison Hurlbat</Item> gives the <Item itemtype={itemtypes[2]}>Liquid Agility</Item>.
          </li>
          <li>
            Capturing the pirate with a <Item itemtype={itemtypes[0]}>Crooked Axe</Item> gives the <Item itemtype={itemtypes[2]}>Wrath Tome</Item> skill book.
          </li>
          <li>
            Capturing the pirate with a <Item itemtype={itemtypes[0]}>Tree-Lovers Axe</Item> gives the <Item itemtype={itemtypes[0]}>Sack of Coin</Item>.
          </li>                                                     
        </ul>
        <p class="text-small">
          I am unsure if there is a prize for capturing all of them at the end of the map or later on. I missed one in my play-through.
        </p>        
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Sheela can talk to Penneloupe after a you deal with the bandit reinforcements or on a certain turn. Sheela gets a permanent +1 Defense and Penneloupe gets a permanent +1 Magic stat bonus.
          </li>
          <li>
            After Sheela talks to Penneloupe, Zayid can talk to Penneloupe and she gains a permanent +1 Strength stat bonus.
          </li>
          <li>
            Zade can capture every pirate that is summoned with the pirate boss and pirate ship. Each one gives a special reward that ranges from a <Item itemtype={itemtypes[2]}>Ward Ring</Item> to a <Item itemtype={itemtypes[0]}>Sack of Coin</Item>.
          </li>          
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Examining the flower yields <Item itemtype={itemtypes[2]}>Liquid Magic</Item>.
          </li>
          <li>
            Examining the skeleton yields <Item itemtype={itemtypes[2]}>Liquid Strength</Item>.
          </li>
          <li>
            Examining the scarecrow yields <Item itemtype={itemtypes[2]}>Tough Love and You</Item> skill book which teaches taskmaster. I recommend Sujata or Barzlephen getting this. Barzlephen gets money per level up whereas Sujata isn't very strong in combat so it is hard for her to level up. Taskmaster generates exp so that is the rationale.
          </li>          
        </ul>        
        <p class="text-small">
          The following is the list of item drops from enemies:
        </p>
        <ul>
          <li>
            The Brigand Boss drops a <Item itemtype={itemtypes[0]}>Catholicon</Item>.
          </li>
          <li>
            The Prowling Wraith drops a <Item itemtype={itemtypes[0]}>Masudian Brand</Item>.
          </li>
          <li>
            Two of the bone soldiers drop <Item itemtype={itemtypes[0]}>Bone Scimitars</Item>.
          </li>   
          <li>
            The Pirate Boss drops a <Item itemtype={itemtypes[0]}>Resistance Jolt</Item>.
          </li>
          <li>
            The pirate ship that spawns with the pirates drops a <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item>.
          </li>
          <li>
            The Savage Chief drops a <Item itemtype={itemtypes[2]}>Blighted Tome</Item> skill book, which forces the bad Imbecile skill on anyone with the book and locked to the inventory of whoever picked it up.
          </li> 
          <li>
            One of the Icewyrms that spawn after the Savage Chief drops a <Item itemtype={itemtypes[2]}>Cephanic Totem</Item>. 
          </li>
          <li>
            The Head Deserter drops a <Item itemtype={itemtypes[0]}>Light Pilum</Item>.
          </li>
          <li>
            The Thief Boss drops a <Item itemtype={itemtypes[0]}>Gemstone</Item> on defeat.
          </li> 
          <li>
            An assassin which spawns with the thieves drops the <Item itemtype={itemtypes[2]}>Critical Edge</Item> skill book on defeat.
          </li>
          <li>
            Two thieves which spawn drop the <Item itemtype={itemtypes[0]}>Jeweled Knife</Item> on defeat.
          </li>
          <li>
            One thief which spawns drops the <Item itemtype={itemtypes[0]}>Villain's Purse</Item> on defeat.
          </li> 
          <li>
            Every generic pirate unit yields an item when captured. Check the captureable units section for that. The rewards are <Item itemtype={itemtypes[0]}>Defense Jolt</Item>, <Item itemtype={itemtypes[2]}>Esoteric Scripture</Item>, <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>, <Item itemtype={itemtypes[2]}>Ward Ring</Item>, <Item itemtype={itemtypes[2]}>Liquid Agility</Item>, <Item itemtype={itemtypes[2]}>Wrath Tome</Item> skill book, and <Item itemtype={itemtypes[0]}>Sack of Coin</Item>. 
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
            If you visit the top left house you are given an option to summon some brigands and the brigand boss from a cave.
          </li>
          <li>
            If you visit the top right red house you are given an option to summon some bone soldiers and a prowling wraith boss from a graveyard.
          </li>
          <li>
            If you visit the middle left house you can summon some pirates, a pirate ship with a dropable <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item>, and a pirate boss in the south beach. Every generic pirate/brigand is captureable.
          </li>
          <li>
            If you visit the bottom left house you can summon some thieves, an assassin with a dropable <Item itemtype={itemtypes[2]}>Critical Edge</Item> skill book, and a thief boss. Also while the thief boss is alive a thief will spawn every turn from the starting area of Zade's army. The thieves will all turn into scenery on the first enemy phase they are summoned for some reason.
          </li>
          <li>
            If you visit the middle right red house you can summon lance knights and the head desterter boss from the starting area of Roleck's army.
          </li>
          <li>
            If you visit the bottom right red house you can summon a bunch of barbarians and the savage chief boss near the volcanoes. After you defeat the savage chief boss, 4 tough icewyrms will spawn on the volcanoes.
          </li>
          <li>
            If you visit the yellow house on the bottom right you can promote either Hestion or Alexander for 1500 Denari. You can only choose one of them as the house closes after promotion.
          </li>                              
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Summoning the thief boss will cause a thief to spawn every turn near the top left of the map. Defeating the thief boss will stop the reinforcements.
          </li>
          <li>
            After defeating the savage chief boss 4 icewyrms will spawn. One of them drops a Cephanic Totem.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          All the bosses are easy and spawn with different groups of reinforcements from the various villages.
        </p>
        <Character charname="Brigand Boss" chartype="enemy">
          <p>Drops a <Item itemtype={itemtypes[0]}>Catholicon</Item> upon defeat.</p>
        </Character>
        <Character charname="Head Deserter" chartype="enemy">
          <p>Drops a <Item itemtype={itemtypes[0]}>Light Pilum</Item> upon defeat.</p>
        </Character>
        <Character charname="Pirate Boss" chartype="enemy">
          <p>Drops a <Item itemtype={itemtypes[0]}>Resistance Jolt</Item> upon defeat.</p>
        </Character>
        <Character charname="Prowling Wraith" chartype="enemy">
          <p>Drops a <Item itemtype={itemtypes[0]}>Masudian Brand</Item> upon defeat.</p>
        </Character>
        <Character charname="Savage Chief" chartype="enemy">
          <p>Drops a <Item itemtype={itemtypes[2]}>Blighted Tome</Item> skill book upon defeat. It is locked to whoever beats him and forcefully gives the Imbecile skill. I highly recommend either Ouron or Barzelphen get the finishing blow because of this. I used Ouron because he is so terrible in combat in my run.</p>
        </Character>
        <Character charname="Thief Boss" chartype="enemy">
          <p>Drops a <Item itemtype={itemtypes[2]}>Gemstone</Item> on defeat after a weird scene with the thieves turning into random things.</p>
        </Character>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          If you have played Chapter 15x in the first game this is very similar. You can move infinitely until enemies appear on the map. You choose what enemies appear and when. Zade and Roleck need to reach the bottom village to end the map and that is all you actually need to do to win (which can be done without a single enemy spawning).<br/><br/>
          There is no strategy to provide; grind whichever unit you want to level up at this point. I recommend ones who have proved difficult to level or are lagging behind like Sujata or Barzelphen. Unlike Chapter 15x in the first game you cannot keep summoning enemies to fight over and over again.<br/><br/>
          You will want to capture the pirate with the <Item itemtype={itemtypes[0]}>Crooked Axe</Item> to get the <Item itemtype={itemtypes[2]}>Wrath Tome</Item> and the oirate with the <Item itemtype={itemtypes[0]}>Hammer</Item> to get the <Item itemtype={itemtypes[2]}>Ward Ring</Item> at the very least. Barzelphen's <Item itemtype={itemtypes[2]}>Axe of Love*</Item> can help here. Make sure to get the <Item itemtype={itemtypes[2]}>Tough Love and You</Item> skill book from the scarecrow and the <Item itemtype={itemtypes[2]}>Critical Edge</Item> skill book from the assassin which spawns. Also the Pirate Ship has a <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item> you will want to swipe.<br/><br/>
          There is no preparations screen for a while after this so make sure everyone is well equipped. Buy a few valuable weapons and items from the shops and make sure everyone has a form of healing item for safety. I recommend buying a few of the valuable magic swords in the shop with Jonathan and giving them to a few units.<br/>
        </p>
      </SectionBody>

      <Footer />
    </div>        
    )
}

export default Chapter14