import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter18 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 18"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Zade seizes the capital.</span><br/>
          <span class="redtext">Defeat: Zade or Bennette dies, Roswell (NPC) Dies.</span><br/>    
          Your army is split in two in this chapter and will not be able to meet together until the last part. You have the preparations screen and choices on who to deploy again though. I recommend deploying a flier to get the sack in the top right corner of the map and make this map much easier.<br/><br/>
          WARNING: due to a bug in certain versions of the game, do not beat the chapter before turn 8; you lose the units who do not show up until then.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter18map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter18data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Salyna" chartype="ally">
          <p>This is your first new recruit in a long while. She joins underleveled but can visit the southeast house to become immortal and deal with a lot of the enemies approaching from the south fort to power level. After talking with Roswell she gains her personal weapon, the <Item itemtype={itemtypes[1]}>Staff of Silence*</Item>. You need to have her talk to Zade to make her a permanent ally, otherwise she will leave at the end of the map.</p>
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
            If Salyna talks to the green unit Roswell he will give you her personal weapon <Item itemtype={itemtypes[1]}>Staff of Silence*</Item>
          </li>
          <li>
            If Salyna talks with Zade she becomes a permanent recruit in your army and doesn't leave at the end of the chapter
          </li>
          <li>
            Amlute can talk with Roswell to trigger the ability to visit the village Salyna and Roswell come from. There is some good rewards that trigger off this so you want to do this.
          </li>
          <li>
            After visiting the village Amlute can talk to Laffine, Salyna, and Zade. When Amlute talks to Laffine he gives the <Item itemtype={itemtypes[1]}>Mother's Necklace</Item> to her. This personal accessory only she can use makes her immune to paralysis and gives +10 to Luck. When Amlute talks to Salyna it triggers some story. When Amlute talks to Zade it triggers Zade to be able to do an event and dialogue.
          </li>
          <li>
            Zade can talk to Vaughes (if you spared him in chapter 10) after talking with Amlute to get the Dispel Effects skill.
          </li>
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            There are two taverns for temporary stat boosts.
          </li>
          <li>
            There are two weapon shops. The bottom right weapon shop sells very valuable stuff and an expensive staff which functions as two <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item>.
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
            You can get <Item itemtype={itemtypes[0]}></Item>herbs from the flower at the bottom near Salyna.
          </li>
          <li>
            The sack at the top right is a <Item itemtype={itemtypes[2]}>Malodorous Sack</Item> which can only be used on this level and is worth using. It will trigger the two dragons to go berserk and destroy the ballista in the center which hit extremely hard.
          </li>
          <li>
            Every turn Kobach and his minions are in charge they destroy a town square. You get <Item itemtype={itemtypes[0]}>(1000 x the number of town squares remaining) Denari</Item> when you visit the village.
          </li>
          <li>
            If you break the mineral deposit you get a <Item itemtype={itemtypes[2]}>Gemstone</Item>.
          </li>
          <li>
            The chest in the center of the ballista yields an <Item itemtype={itemtypes[2]}>Acumen Tome</Item> upon examining it.
          </li>
          <li>
            The chest in the center of the mountains yields a <Item itemtype={itemtypes[2]}>Staff of Resistance</Item>. You can only open this with a chest key drop and a flier.
          </li>
          <li>
            The book in the forest at the bottom left yields a <Item itemtype={itemtypes[2]}>Dispel Effects Tome</Item> upon examining it.
          </li>        
        </ul>
        <p class="text-small">
          The following drops from enemies:
        </p>
        <ul>
          <li>
            Five of the nine fugitives near the party starting area drop <Item itemtype={itemtypes[0]}>Tisane</Item>, <Item itemtype={itemtypes[0]}>Sack of Coin</Item>, <Item itemtype={itemtypes[0]}>Sack of Coin</Item>, <Item itemtype={itemtypes[0]}>Royal Lance +1</Item>, and <Item itemtype={itemtypes[0]}>Sack of Coin</Item>.
          </li>
          <li>
            The distance archer near Alandon drops an <Item itemtype={itemtypes[0]}>Arbalest</Item>.
          </li>
          <li>
            Of the searchers near Alandon, one archer drops a <Item itemtype={itemtypes[0]}>Royal Bow</Item>, three soldiers drop a <Item itemtype={itemtypes[0]}>Royal Lance</Item>, a <Item itemtype={itemtypes[0]}>Royal Lance +1</Item>, and a <Item itemtype={itemtypes[0]}>Royal Lance +1</Item>. Slayna can easily get these weapons with the power of love status from the house.
          </li>
          <li>
            Phaeton drops a <Item itemtype={itemtypes[2]}>Critical Dodge Tome</Item>.
          </li>
          <li>
            Leander drops a <Item itemtype={itemtypes[2]}>Liquid Agility</Item>.
          </li>
          <li>
            Ajack drops a <Item itemtype={itemtypes[0]}>Hefty Sack of Coin</Item>.
          </li>
          <li>
            Kobach drops a <Item itemtype={itemtypes[2]}>Resistance Jolt</Item>.
          </li>
          <li>
            The deadshot archer across the bridge drops a <Item itemtype={itemtypes[2]}>Swift Bow</Item>.
          </li>
          <li>
            Neyah drops a <Item itemtype={itemtypes[0]}>Chest Key</Item>.
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
            Salyna, Roswell, and Vaughes (if spared in Chapter 10) will appear before the first turn to guard the bottom right corner. Salyna is usable from the start, the other two are NPC green units.
          </li>
          <li>
            If Slayna visits the bottom right red house she gets the power of love status for 5 turns. This is useful for grinding her levels early.
          </li>
          <li>
            On Turn 5: Claude, Lucion, and Abrahm will arrive at the top center of the map.
          </li>
          <li>
            On Turn 6: Phoeve and Fauvre will arrive at the top left of the map.
          </li>
          <li>
            On Turn 8: Amlute, Laffine, and Ouron will appear at the bottom right of the map.
          </li>
          <li>
            The shrine in the forest gives a unit power of love status for 5 turns at the cost of 600 Denari. This will trivialize the enemies in the forest.
          </li>
          <li>
            After Amlute talks with Roswell, Amlute can visit the bottom right village for a story scene and the ability to talk to Laffine, Salyna, and Zade.
          </li>
          <li>
            After Amlute talks with Zade, Zade can visit the bottom right village for a story scene and the <Item itemtype={itemtypes[1]}>Seal of Cordea*</Item> accessory which is a personal accessory for Phoros (who we haven't met yet).
            <img src="./screenshots/chapter18event1.png" alt="Event 1" /><br/>
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
            Cavalry and sorcerers will spawn from the fortress north of Roswell and Salyna. Cavalry will also spawn from the fortress south of Farabia after she is defeated. Both will stop when the fortress is seized.
          </li>
          <li>
            Thief Fighters will spawn from the fortress in the forest until it is seized.
          </li>
          <li>
            On turn 11 Neyah and Sinneas will spawn from the capitol.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Farabia" chartype="enemy">
          <p>After a few turns she will rush you along with her cavalry. She hits pretty hard but can easily be taken out with a <Item itemtype={itemtypes[0]}>Cavalry Lance</Item>. Potentially defeating Kobach and visiting the village may trigger her to stop fighting you but this would be very risky and hard to do.</p>
        </Character>
        <Character charname="Kobach" chartype="enemy">
          <p>He is pretty tanky and strong but easy to take out at range, especially with Phoeve.</p>
        </Character>
        <Character charname="Valentino" chartype="enemy">
          <p>He attacks at range and is pretty tanky. Once you seize his castle the bridge appears to the bottom of the map.</p>
        </Character>
        <Character charname="Frawke" chartype="enemy">
          <p>He is not to difficult to take on especially with the nearby power of love shrine.</p>
        </Character>
        <Character charname="Alandon" chartype="enemy">
          <p>He is actually one of the most difficult bosses you have fought up to this point unless you use Zade with <Item itemtype={itemtypes[1]}>Edelstein*</Item>. He can attack at 1 to 2 range and he has an ability that lets him continue the fight with a chance rate of (2 x HP)%. This means if he attacks you and you can barely damage him because of his bulk he will continue to attack until your unit dies. You want someone who can take him out in a single round of combat ideally like Zade. Also, he does not stay on the fort; he will move if someone is put in his range and most likely take them out on enemy phase.</p>
        </Character>
        <Character charname="Ajack" chartype="enemy">
          <p>The three pirate ships will attack from range. They are all bulky like the previous chapter but can be more difficult to get near the coast for <Item itemtype={itemtypes[0]}>Hammer</Item> range.</p>
        </Character>
        <Character charname="Leander" chartype="enemy">
          <p>The three pirate ships will attack from range. They are all bulky like the previous chapter but can be more difficult to get near the coast for <Item itemtype={itemtypes[0]}>Hammer</Item> range.</p>
        </Character>
        <Character charname="Phaeton" chartype="enemy">
          <p>The three pirate ships will attack from range. They are all bulky like the previous chapter but can be more difficult to get near the coast for <Item itemtype={itemtypes[0]}>Hammer</Item> range.</p>
        </Character>
        <Character charname="Neyah" chartype="enemy">
          <p>Neyah and Sinneas will spawn on turn 11. They have a chance of teleporting directly to your army like the witches in Fire Emblem Echoes. One drops a key which will be needed to open the chest in the mountains.</p>
        </Character>
        <Character charname="Sinneas" chartype="enemy">
          <p>Neyah and Sinneas will spawn on turn 11. They have a chance of teleporting directly to your army like the witches in Fire Emblem Echoes. One drops a key which will be needed to open the chest in the mountains.</p>
        </Character>        
        <Character charname="Sorvaldi" chartype="enemy">
          <p>Long range magic user who can use status effects. Trivial in melee range.</p>
        </Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This chapter can be a little complicated depending on who you have in your party and who you leveled up to become powerhouses. The easiest way to deal with the left side is having Alexander or Hestion use a Cavalry Lance to take out as many cavalry enemies as possible. Then seizing the fort to prevent more from spawning.<br/><br/>
          You want to have a flier go for the sack in the top right corner and use it to remove the very dangerous ballista in the center of the map. You will have to eventually take out the dragons with this approach but that isn't too hard with good archers.<br/><br/>
          Salyna can hold off the enemies on the bottom if she visits the house and gets power of love for 5 turns. Then she needs to back off and let Amlute and Laffine take care of the rest. The shrine in the forest also gives power of love to any unit for the price of 600 Denari. This trivializes the fight around the fort in the forest. I had Baymonk do this to power level him. The thieves in the forest steal 1000 Denari from you if they hit you on enemy phase which you can get back on player phase however if you fight them before they get a chance to hit you, you will get 500 Denari in reward.<br/><br/>
          The southeastern fortress is the hardest part of this map. Laffine and Amlute can take on the reinforcements with hit and run tactics however Alandon will most likely take them out if they get in his range. It is best to seize the fortress in the forest and have Zade cross the newly created bridge to deal with him.<br/><br/>
          Your fliers can take care of the long range sorcerers in the mountains at the end. On turn 10 two new bosses show up but they are pretty easy to deal with and can teleport directly to your army. Sorvaldi is also easy to deal with using a combination of taskmaster and a heavy hitter.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter18