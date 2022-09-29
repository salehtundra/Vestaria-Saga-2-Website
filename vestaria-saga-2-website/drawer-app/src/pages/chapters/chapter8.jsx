import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter8 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 8"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Visit the elder's house, all refugees escape</span><br/>
          <span class="redtext">Defeat: All your allies die, Elder's house is destroyed, villager/house is destroyed</span><br/><br/>
          Note: All of your units are force deployed, you cannot change them nor can you modify their inventory. You have to use Karajan, Drake, Haldyn, Orphelia, Lilia, Fauve, Lucion, Claude, and Abrahm.<br/><br/>
          THIS CHAPTER IS REALLY GOOD FOR GRINDING LEVELS.<br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter8map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter8data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>
      <SectionBody>
        <Character charname="Haldyn" chartype="ally">
          <p>He is a character from the previous game and as good in this one as he was in the other it seems. Starts with an infinite use personal weapon, the <Item itemtype={itemtypes[1]}>Flamurle*</Item>... on a chapter with 20 turns of reinforcements... which can barely hurt Haldyn after a few level ups. The game's story said he needs to become stronger... hmm... RIP total turn count.</p>
        </Character>
        <Character charname="Orphelia" chartype="ally">
          <p>An eagle rider. She seems decent and can gain quite a few levels on this chapter along with literally everyone else. Celestral Amulet allows her to dismount from her eagle. This can be useful when you take on fliers.</p>
        </Character>
        <Character charname="Fauve" chartype="ally">
          <p>An axemaster who starts with a weak weapon. He can be leveled up quite a bit to become good on this chapter. He needs to visit the village in this chapter to get his personal weapon.</p>
        </Character>
        <Character charname="Lilia" chartype="ally">
          <p>A High Priestess from the previous game. You can get her a decent tome from the village next to Orphelia at the start of the chapter.</p>
        </Character>
        <p>
          Of note:<br/>
          Since the armor knights are really important for blocking the south you get temp armor knights only for this chapter if any of yours are dead. Needless to say this is a 100% guide so we don't want our units dying (none of mine have yet and I don't intend for them to). And since they are only given to you for this chapter they are completely useless in the long run anyway.<br/>
        </p>
        <ul>
          <li>
            Pandell replaces Lucion
          </li>
          <li>
            Montgomery replaces Abrahm
          </li>
          <li>
            Cueger replaces Claude
          </li>                    
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          After you visit the village 3 of the refugees can be talked to. They spawn at specific spots and require specific characters to speak to them. They run away too so you should plant the specific person right next to the house when you visit the villagers.
        </p>
        <ul>
          <li>
            The house in the far left spawns a small girl. Abrahm can talk to the small girl and she will give him an <Item itemtype={itemtypes[0]}>Antidote Herb</Item>, after Abrahm reveals his face.
            <img src="./screenshots/chapter8event1.png" alt="Event 1" />
          </li>
          <li>
            The house in the upper middle by the lake spawns an old man. Orphelia can talk to the old man and he will give her <Item itemtype={itemtypes[0]}>1147 Denari</Item>.
          </li>
          <li>
            The house on the bottom right spawns a small boy. Karajan can speak to the small boy and he will give him his personal weapon <Item itemtype={itemtypes[1]}>Nocturne*</Item>, after he reveals Karajan's face. <Item itemtype={itemtypes[1]}>Nocturne*</Item> is great as it gives Karajan +1 movement +3 defense when equipped. Also Karajan's portrait changes from this point on to reveal his face.
            <img src="./screenshots/chapter8event2.png" alt="Event 2" />
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
            You can get a <Item itemtype={itemtypes[0]}>Chimnir</Item> tome from the house next to Orphelia.
          </li>
          <li>
            You can get a <Item itemtype={itemtypes[0]}>Gold Bullion</Item> by examining the skeleton on the shore.
          </li>
          <li>
            Visiting the village with Fauve gives the <Item itemtype={itemtypes[1]}>Champions Axe*</Item>.
          </li>
          <li>
            The dialogue options give you <Item itemtype={itemtypes[0]}>Antidote</Item>, <Item itemtype={itemtypes[0]}>1147 Denari</Item>, and <Item itemtype={itemtypes[1]}>Nocturne*</Item> as detailed in the dialogue section.
          </li>          
        </ul>
        <p>
          The following lists all the item drops enemies yield in this chapter:
        </p>
        <ul>
          <li>
            Benjamin drops the <Item itemtype={itemtypes[2]}>Ambush tome</Item>.
          </li>
          <li>
            One of the final axemaster reinforcement spawns drops a <Item itemtype={itemtypes[2]}>Gale Axe</Item>.
          </li>
          <li>
            After visiting the village, one of the reinforcements in the south drops a <Item itemtype={itemtypes[0]}>Golden Axe</Item>.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          There are two secret events in this chapter based off things you will most likely do anyway. But if you do them with a specific character you get some extra dialogue and story.
        </p>
        <ul>
          <li>
            The village in the south will spawn a bunch of refugees. However if you visit it with Fauve you get some additional background character story and his weapon the <Item itemtype={itemtypes[1]}>Champion's Axe*</Item>.
          </li>
          <li>
            The red house next to Orphelia gives a <Item itemtype={itemtypes[2]}>Chimnir</Item> tome. However if you visit it with Lilia you get some additional scenes and a continuation of a secret event from the first game.
          </li>          
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          The reinforcements which spawn have a variety of weapons.
        </p>
        <ul>
          <li>
            For the first 20 turns mountaineers will spawn from the caves and behind the boss. This map will be filled with them after a few turns. Haldyn can get a ton of level ups from this as well as everyone else so it is worth grinding out.
          </li>
          <li>
            Near the end of the 20 turns a few axemasters will spawn from the top right caves. They have some <Item itemtype={itemtypes[2]}>Gale Axes</Item> which Orphelia is weak to and one drops a <Item itemtype={itemtypes[2]}>Gale Axe</Item>.
          </li>
          <li>
            When you visit the village most of the bottom section will be filled with mountaineers. Be ready and have strong units at the bottom to protect the houses and refugees before you visit the village. One of the mountaineers has a <Item itemtype={itemtypes[0]}>Golden Axe</Item> drop.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Hydrad Brigand" chartype="enemy">
          <p>A generic who hits pretty hard.</p>
        </Character>
        <Character charname="Benjamin" chartype="enemy">
          <p>A Chief Thief who drops the <Item itemtype={itemtypes[2]}>Ambush Tome</Item> on defeat. Haldyn can easily take care of him but you have to slowly work your way to him because of all the waves of reinforcements which spawn behind him and in nearby caves. Careful as his weapon has 1-3 range.</p>
        </Character>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          This is a very easy chapter but somewhat stressful in that you can get tons of experience on units but you have to decide who you want to get levels on or if you want to spread them evenly. I focused on leveling up Haldyn primarily, Orphelia and Fauve secondly, and Lucion and Claude thirdly. My Haldyin in VS1 had nearly max stats at the end so I have a disposition towards focusing on him now.<br/>
          Move Fauve and Lilia towards the top center of the map away from all the mountaineers and reinforcements. Have Drake lower the bridge so Fauve and Lilia can escape. I had Haldyn choke the bridge point with his infinite use weapon. You can have Lilia visit the red house so her secret event triggers and she gets her tome from the previous game which halves all damage she takes in battle.<br/>
          In the south the 3 armor units can easily tank everything that comes at them. Then they can move up to tank any mountaineers that try to cross. After a bit of turns you can have something that looks like this if you followed what I did.<br/>
          <img src="./screenshots/chapter8strategy.png" alt="Strategy" />
          Once you have exhausted the reinforcements by waiting them out for 20 turns, you can take out Benjamin with Haldyn, or if you want to risk it have him move through the reinforcements and deal with Benjamin early (I did this). I kept Karajan within range to far heal Haldyn. Again without him the game would be much harder as the manual stated.<br/>
          After everyone is dealt with move all your units to the south. Have Abrahm next to the far left house, Orphelia next to the top middle house, and Karajan next to the bottom right house. This will make it easy to have all 3 dialogue conversations and get the reward plus the secret events which are worth it. Have Fauve visit the village to get his backstory and <Item itemtype={itemtypes[1]}>Champion's Axe*</Item>. Then pick whoever you want to deal with the reinforcements. The refugees should be safe as they head north.<br/>
        </p>
      </SectionBody>

      <Footer />
    </div>           
    )
}

export default Chapter8