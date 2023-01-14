import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter22 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 22"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Zade arrives at signpost.</span><br/>
          <span class="redtext">Defeat: Zade dies, a bridge is destroyed (counterclockwise order from the closest on turns 10, 15, 20, 25, 30, 35).</span><br/>    
          Phoros will gain taskmaster on this map if you have done the optional story dialogue in chapter 18 and 19. Zade will lose the lockpick skill for this map as Cezar is gone for story reasons. Zade, Alexander, Hestion, Barzelphen, Castore, and Porruck are force deployed on this map.<br/><br/>
          I highly recommend using Slayna or some flier for this map. Also you can promote Castore and Porruck on this map. They can easily grind tons of levels after promotion as well. Barzelphen can also become a much better unit from an event on this map.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter22map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter22data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Barzlephen can enter the cave in the top left of the map and talk to Meg, Aimee, and Beth for some dialogue. He can talk to Hideon to view a story scene and character arc moment. Barzlephen will lose the fetid skill and gain the lockpick skill after this story segment and the cave entrance will be replaced with an open floor tile so any unit can enter this area. Barzlephen will be able to get to the gold pile in the locked room after this scene as well.
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
            The first house gives you <Item itemtype={itemtypes[0]}>Herb Salad</Item> when you visit it.
          </li>
          <li>
            The second house gives you <Item itemtype={itemtypes[2]}>Seabream Cake</Item> when you visit it.
          </li>
          <li>
            The third house gives you an <Item itemtype={itemtypes[0]}>Antidote</Item> when you visit it.
          </li>
          <li>
            You get a <Item itemtype={itemtypes[0]}>Hefty Sack of Coin</Item> for seizing the right most Greatyurt and stop the reinforcements.
          </li>
          <li>
            The final house gives you a <Item itemtype={itemtypes[0]}>Bellflower Leaf</Item> when you visit it.
          </li>
          <li>
            You get <Item itemtype={itemtypes[2]}>Munitions</Item> for seizing the left most Greatyurt and stop the reinforcements.
          </li>
          <li>
            You get <Item itemtype={itemtypes[0]}>7777 Denari</Item> for examining the gold in the cave. You need to do Barzelphen's scene to open the door as Cezar is not with Zade for Zade to lockpick the doors on this chapter.
          </li>
          <li>
            Very sneakily the game gives you the <Item itemtype={itemtypes[1]}>Maiden's Love</Item> accessory in your stockpile by doing the Barzelphen scene. However you won't be able to look for it until Chapter 24. This accessory is only usable by Barzelphen and makes him immune to many status effects.
          </li>
        </ul>        
        <p class="text-small">
          The following is the list of enemy drops:
        </p>
        <ul>
          <li>
            A dark knight drops a <Item itemtype={itemtypes[0]}>Greataxe</Item>.
          </li>
          <li>
            A dark knight drops a <Item itemtype={itemtypes[2]}>Masudian Brand</Item>.
          </li>
          <li>
            The top middle-right savage bombers drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item>.
          </li>
          <li>
            Kro-Zot drops a <Item itemtype={itemtypes[2]}>Sniper's Bow</Item>.
          </li>
          <li>
            A shaman which spawns with Fla-Muz's group drops a <Item itemtype={itemtypes[2]}>Caldra tome</Item>.
          </li>
          <li>
            One of the thaumaturge which spawns with Gee-Nyus group drops a <Item itemtype={itemtypes[0]}>Healing Staff</Item>.
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
            Every savage bomber on each bridge must be taken out before certain turns otherwise they destory the bridge and end the chapter. The bottom right one will blow his bridge up on turn 10. The next on on the top right will blow his bridge up up on turn 15. The top middle-right will blow his bridge up on turn 20, the top middle-left will blow his bridge on turn 25. The top left will blow his bridge on turn 30, and the bottom left will blow his bridge on turn 35. The turn 35 one is the only slightly tricky one you need to plan out or rush for.
          </li>
          <li>
            When you defeat the bottom right savage bomber a group of axefighters and archers spawn with the boss Fla-Muz on the bottom right of the screen where the lily pad is. The bridge also gets repaired resulting in a surprise gotcha for first time players. They spawn in the middle of your player phase.
            <img src="./screenshots/chapter22event1.png" alt="Event 1" /><br/>
          </li>
          <li>
            When you defeat one of the skeletons in the graveyard a dialogue exchange will occur and a skeleton will spawn on the middle beach. Examining it will yield a valuable Imbrued Lance.
            <img src="./screenshots/chapter22event2.png" alt="Event 2" /><br/>
          </li>
          <li>
            When you defeat the top middle-left savage bomber Gee-Nyus and his group of cavalry will spawn on top of the blocked off graveyards. They spawn in the middle of your player phase.
            <img src="./screenshots/chapter22event3.png" alt="Event 3" /><br/>
          </li>
          <li>
            Barzelphen can enter the cave and talk to the people inside to trigger a scene. This changes Barzelphen and removes the negative Fetid skill and replaces it with Lockpick. Also for some reason it spawns a green unit named Jo who looks exactly like Hilda from the Hilda statue apparently to defend the cave. Also the cave becomes a Tavern for food buffs at a cost.
            <img src="./screenshots/chapter22event4.png" alt="Event 4" /><br/>
          </li>
          <li>
            The bottom left signpost is the exit to the map. You have to go all the way around the map to get to it.
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
            Axefighters or Deadshots will spawn from both Greatyurts.
          </li>
          <li>
            Margulian Wraiths or Gargoyles will spawn from the top cave as you approach it.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="The Chi-Ha" chartype="enemy">
          <p>You can capture this with Porruck when it is under 10 HP to promote Porruck. Porruck will change classes to Pirate Ship and gains an <Item itemtype={itemtypes[2]}>Arbalest+2</Item> he can use from this as well.</p>
        </Character>
        <Character charname="The Chi-Ni" chartype="enemy">
          <p>You can capture this with Castore when it is under 10 HP to promote Castore. Castore will change classes to Pirate Ship and gains a <Item itemtype={itemtypes[2]}>Naval Great Flamebow</Item> he can use from this as well.</p>
        </Character>
        <Character charname="Dark Mage" chartype="enemy">
          <p>Technically not a boss and there is another on the bottom left but he can be tricky with his long range sleep tome. Porruck and Castore can easily deal with him once promoted as they are immune to sleep.</p>
        </Character>
        <Character charname="Kro-Zot" chartype="enemy">
          <p>Decently hard hitting sniper, deal with him anyway you want. He starts to move once you take out the first savage bomber.</p>
        </Character>
        <Character charname="Tar-Pan" chartype="enemy">
          <p>Decently hard hitting sniper, deal with him anyway you want. He starts to move once you get far enough on the map.</p>
        </Character>
        <Character charname="Fla-Muz" chartype="enemy">
          <p>A decently strong axemaster. He spawns when you take out the first savage bomber and is a beginners trap since you wont be ready for his group without knowing.</p>
        </Character>
        <Character charname="Gee-Nyus" chartype="enemy">
          <p>Taking out the fourth savage bomber causes his cavalry to appear between your units for a suprise attack. However if you take the savage bomber out with Porruck and Castore early it is easy to not get trapped.</p>
        </Character>                                             
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Castore Porruck Phoros and Barzelphen
        </h1>
      </SectionHeader>
      <SectionBody>
        <p class="text-small">
          Similar to the Sujata and Ashram section earlier the events in this chapter greatly power some of the weakest units in your army. You absolutely want to seize the pirate ships with Castore and Porruck on this chapter.<br/><br/>
          <img src="./screenshots/chapter22event5.png" alt="Event 5" /><br/>
          This will cause them to promote to Pirate Ship class. Castore gains a magical damage <Item itemtype={itemtypes[2]}>Naval Great Flamebow</Item> and Porruck gains a physical damage <Item itemtype={itemtypes[2]}>Arbalest+2</Item>. These will have infinite uses as detailed below.<br/><br/>
          When promoted to Pirate Ship the pirates gain the Regenesis skill to heal 30 HP every turn, the Weaponguard skill to block all durability loss, and the Multichance skill to always strike twice. The Pirate Ship also gains immunity to all status effects. They no longer use axes and have long range weapons which they automatically get. They also automatically dump their current inventory into your stockpile. The only downside is they can only move on water and bridge tiles from this point forward however. But this is a massive improvement and they can easily grind levels on this chapter if you want to do that.<br/><br/>
          They can also easily take out any actual threat on this chapter (even if you barely leveled them) from this point trivializing it. Castore is quite a bit weaker as his weapon scales with magic damage and he has a terrible magic stat.<br/><br/>
          If you did the whole story segment with Amlute in Chapter 18 and talked to Phoros in Chapter 19 with Arielle, Phoros will gain the taskmaster skill. This will create a second or possibly third taskmaster user in your army (depending on if you get Roleck back in chapter 25 or not by sending away Bennette). This can do some pretty gamebreaking things as taskmasters can use their skills on each other. Phoros actually doesn't need this buff as he is quite good without it but with it he becomes a massively useful unit.<br/><br/>
          Finally Barzelphen becomes slightly better on this chapter. He no longer gains the Fetid skill after doing his event and even has a character arc. The Fetid skill debuffed other units he was around so this is good to get rid of. Now he gets the Lockpick skill giving him another unit with thief utility. He may also get improved growth rates from this event. Also without telling you the game gives you the Maiden's Love accessory in your stockpile on chapter 24. This accessory is only usable by Barzelphen and gives him immunity to many status effects. Make sure to equip it to him on chapter 24.<br/><br/>
          <img src="./screenshots/chapter22event6.png" alt="Event 6" /><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This chapter is surprisingly easy if you can get the promotions for Castore and Porruck. By having them go for the ships but keeping a relatively weak unit in range of it, the ship will ignore Castore and Porruck giving them free hits to wail on it. Eventually you can promote Porruck with the bottom left ship and then Castore with the top right ship. Castore is less useful than Porruck but Porruck can easily take out almost anything in one turn once he promotes. You will need to move him into range of all the savage bombers to take them out faster than your land units can reach them. The trickiest one would be the bottom left one as you need to travel the river for that and deal with the dangerous and hard to hit assassin first.<br/><br/>
          Meanwhile with your land units just work your way around the map being cognizant of the first and fourth savage bomber spawning reinforcements. Porruck and Castore taking them out early makes it a easy to not get surprised and surrounded by the reinforcements. Also Castore and Porruck could take out the nastiest enemies (bosses and mages) in the group of reinforcements to make them easier. The swamp graveyard in the middle top of the map is the one of the harder parts to get through because of the reduced movement for everyone. You won't want to fight the Gee-Nyus reinforcements on that. Phoros with taskmaster makes it much easier to ensure units don't end up on poison swamp tiles.<br/><br/>
          Keep in mind the first savage bomber destroys the bridge on turn 10 and each savage bomber is on a timer of +5 turns from the previous one. So you have 35 turns to take out the final savage bomber near the sign post. That one is the only one that caused me slight issue to be able to take him out in time.<br/><br/>
        </p>
      </SectionBody>
      
      <Footer />
    </div>     
    )
}

export default Chapter22