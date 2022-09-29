import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter6 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 6"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
            Your conditions on this map are as follows:<br/>
            <span class="greentext">Victory: Roleck rescues Zade</span><br/>
            <span class="redtext">Defeat: Zade dies, Roleck dies, Aslanne dies</span><br/><br/>

            Note: I strongly recommend deploying both Nelke and Drake for this map. Sheela, Bennette, and Bertoullia are also very useful for the right side section.<br/><br/>

            The following is what the chapter looks like on Turn 1:<br/>
            <img src="./screenshots/chapter6map.png" alt="Chapter Map" /><br/>
            I went through and marked everything of interest on the map as shown here:<br/>
            <img src="./screenshots/chapter6data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Roleck" chartype="ally">
          <p>He has decent defense and good skills as well as the ability to lockpick doors thanks to Cezar. He acts as the main hero unit for this chapter with Zade not being able to be deployed for story reasons. He starts as the advanced General class.</p>
        </Character>
        <Character charname="Aslanne" chartype="ally">
          <p>Looks very much like she did in the original game. Only now you can deploy her on more than the last chapter. Starts off as an advanced class.</p>
        </Character>
        <Character charname="Ezrel" chartype="ally">
          <p>Decent mage. Starts off as an basic class. His First Blood skill is very nice for ensuring he hits first and can even wipe out the enemy before a counter attack.</p>
        </Character>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Roleck can talk to Zade which results in you finishing the map.
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>Like the last chapter there is a Weapon Shop and an Azure Paddock tavern. These shops are within the fortress.</p><br/><br/>
        <ul>
          <li>The weapon shop has some basic weapons. I recommend getting the <Item itemtype={itemtypes[0]}>pilum +1</Item>.</li>
          <li>Like the last chapter you can get buffs on a unit for 200 Denari.</li>
        </ul>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
        As far as I can tell this is the first chapter where there are no items laying out in the field or from examining some secret tile.
        </p><br/>
        <p>As for item drops:</p>
        <ul>
          <li>The town guard deadshot in the courtyard has a <Item itemtype={itemtypes[0]}>Door Key</Item>.</li>
          <li>The necromancer on the bottom left drops <Item itemtype={itemtypes[2]}>Quopri</Item>.</li>
          <li>The necromancer in the middle drops a <Item itemtype={itemtypes[0]}>far healing staff</Item>.</li>
          <li>The sorcerer in Zade's chamber drops a <Item itemtype={itemtypes[0]}>far healing staff +2</Item>.</li>
          <li>Haegel drops a <Item itemtype={itemtypes[2]}>Morning Star</Item> on defeat.</li>
          <li>Marjyle drops a <Item itemtype={itemtypes[2]}>Shamshir</Item> on defeat.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>The village at the bottom is a passage for one light infantry unit to emerge after a few turns on the hole inside the fortress. I used Ashram for this.</li>
          <li>After the light infantry tries enters the passage, the next turn Ezrel and Aslanne will arrive in the fortress.</li>
          <li>Lagniel leaves when you open the door to the throne room.</li>
          <li>The map turns from night to day when you open the second door by the entrance. This also triggers cavalry reinforcements to spawn from the staircase.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          Cavalry will spawn from the staircase when you open the second door near the entrance to the fortress.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Majarle" chartype="enemy"><p>A Swordmaster with a deadly crit rate on the right side of the map. He drops a <Item itemtype={itemtypes[2]}>Shamshir</Item> on defeat.</p></Character>
        <Character charname="Torturer" chartype="enemy"><p>He keeps reducing Zade's health even after everyone else is defeated. You need to take him out before Zade's health reaches 0.</p></Character>
        <Character charname="Haegel" chartype="enemy"><p>The main boss of the chapter. Has decent range and can hit pretty hard.</p></Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
        This is a refreshingly simpler chapter compared to the last one to make an analysis of. The 4 deadshots with scorpions are really the only danger on this chapter. Keep all your units away from the walls near them because they have First Blood and Multistrike meaning they will probably take out anyone without bulk.<br/><br/>
        Have Drake, Sheela, Bennette, Bertoullia, and anyone else who can scale the cliffs take the right side and clear out the enemies including the boss Marjyle over there. Drake can open the doors and all but Bertoullia can enter the building to take out the scorpion deadshot users. Drake is good for this as well plus he needs to unlock the door into the courtyard.<br/><br/>
        While they are doing this you need to take out the necromancers asap as they can revive one unit per turn of who you killed off (except Marjyle). You can get rid of the necromancer and town guard deadshot with a door key using Aslanne and Ezrel if you have someone enter the village secret passageway. Roleck cannot use the passage. I used Ashram for this as he has decent damage now.<br/><br/>
        If you take out the right deadshot archers you can use Roleck to open the doors and Nelke to refresh him to move him back out of danger. Only two of the four deadshot archers have First Blood so you can easily take out the other two with a range unit and have Nelke refresh them out of the First Blood deadshot archers range.<br/><br/>
        Finally just clear up the throne room and the remaining bosses in the torture room. The torturer will only counterattack, not attack or move as his focus is on Zade.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>          
    )
}

export default Chapter6