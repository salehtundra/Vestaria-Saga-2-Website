import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter11 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 11"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Rescue the children.</span><br/>
          <span class="redtext">Defeat: The children die, Your last ally dies, 30 turns pass.</span><br/><br/>
          After you rescue the children (note turn limit goes away):<br/>
          <span class="greentext">Victory: Everyone escapes including the Children from the south signpost.</span><br/>
          <span class="redtext">Defeat: The children die, Your last ally dies.</span><br/><br/>          
          Note: The units you have available to you are fixed. You cannot change their starting positions. There is no preparations screen, no stockpile, and no way of changing their items. This chapter is really good for grinding levels after you rescue the children.<br/><br/>
          **WARNING** A cutscene plays before you do anything on this chapter. Haldyn gains a new skill after sparring with Ashram however the fight caused Sujata to be berserk and she will attack either Nelke or Karajan depending on what weapon she has equipped before the 1st turn even begins. She can easily kill one of the two before you have any control of the chapter if you leveled her a lot... yep.<br/><br/>
          **WARNING** If Zayid and Penneloupe are alive, they are stuck on the right side of the map. Penneloupe is a red unit who will attack Zayid and has a decent very good of killing him via rng over the next few turns. If Sheela is alive you can make Penneloupe stop and turn back into an ally unit with Sheela after a few turns of surviving with Zayid, but then Penneloupe will be teleported and stuck in a group of enemies and she will be in range of the dragon boss for anyone who comes to rescue her.<br/><br/>
          **WARNING** There is a very good chance you will lose someone in the first 7 turns of this chapter if you did not come with the correct preparations and if you don't have good luck with rng. If you never recruited Karajan (or if Sujata is strong enough to kill him before the map starts); It is going to be hard to keep Sheela, Zayid, and Penneloupe alive and in your army. Be warned!<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter11map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter11data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Sloan joins if Haldyn died prior to this chapter. We are going to ignore him for the purposes of 100% and assume you still have Haldyn.
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          The dialogue options appear over time after certain events in this chapter.
        </p>
        <ul>
          <li>
            Sheela can talk with Zayid to stop Penneloupe from attacking him, however this event will cause Penneloupe to become an ally unit surrounded by Brigands in the top right corner and Sheela and Zayid to fall back to the tunnel.
            <img src="./screenshots/chapter11event.png" alt="Event 1" /><br/>
          </li>
          <li>
            Sheela can talk with Zayid again after Penneloupe becomes an ally again. She gives Zayid his personal weapon <Item itemtype={itemtypes[1]}>Deathseeker*</Item>.
          </li>
          <li>
            Haldyn and Ashram can talk with each other for some backstory.
          </li>
          <li>
            Karajan and Nelke can talk with each other giving a permanent +1 magic to both units.
          </li>
          <li>
            Zayid can talk with Ashram after Ashram slays the Bloodwyrm. This provides a permanent +3 luck to both units.
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
            Examining the skeleton yields an <Item itemtype={itemtypes[0]}>Altium Sword</Item>.
          </li>
          <li>
            Using Drake to open the chest yields a <Item itemtype={itemtypes[2]}>Dragonslayer</Item> (greatsword).
          </li>
        </ul>        
        <p class="text-small">
          The following drops are in this chapter:
        </p>
        <ul>
          <li>
            The barbarian near the beginning drops <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
          </li>
          <li>
            A dullahan (skeleton) near the top drops a <Item itemtype={itemtypes[0]}>Dirk +1</Item>.
          </li>
          <li>
            Chief Gnotas drops a <Item itemtype={itemtypes[0]}>Door Key</Item>.
          </li>
          <li>
            The necromancer near the dragon drops a <Item itemtype={itemtypes[0]}>Bellflower Leaf</Item>.
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
            After a few turns Sheela arrives in the tunnel looking for Zayid.
          </li>
          <li>
            After you talk to Zayid with Sheela, Penneloupe will turn back to a blue ally unit however she will be surrounded by barbarians in the top left corner. The Bloodwyrm won't attack her luckily. If you equip her with <Item itemtype={itemtypes[1]}>Fell Fury*</Item> she has the Lifeseive skill for this one section which will be very helpful. You will still need to use RNG to keep her alive as each of the barbarians have a 50% chance to hit her for roughly 1/4 of her health. Finally Zayid and Sheela will be placed as far back on the right side as possible to make it hard to reach Penneloupe.
          </li>
          <li>
            If Ashram gets in range of the Bloodwyrm a reminder text to a story segment will appear. If Ashram defeats the dragon his debilitating skill Incurable Disease will be cured. The chest containing a <Item itemtype={itemtypes[2]}>Dragonslayer</Item> makes it very easy for Ashram to one round the Bloodwyrm. He has to get the killing blow on player phase, not enemy phase to trigger this.
            <img src="./screenshots/chapter11event2.png" alt="Event 2" /><br/>
          </li>
          <li>
            On turn 10 the passage opens up connecting the left side of the cave to the right side of the cave.
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
            Barbarians will spawn from the top section as you approach the central chamber. Barbarians will also appear in the top right corner surrounding Penneloupe when you trigger the Sheela talk event. Finally the necromancer will revive one barbarian at a time later.
          </li>
          <li>
            The necromancer in the top left corner will continually spawn two bone soldiers.
          </li>
          <li>
            When you unlock the gate for the children, all the top areas of the map will continually spawn barbarians for a little while. Since the turn limit will be removed this is an excellent way to get exp.
          </li>          
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Chief Gnotas" chartype="enemy">
          <p>He is pretty easy and drops a <Item itemtype={itemtypes[0]}>Door Key</Item> in case you don't have Drake to open the door.</p>
        </Character>
        <Character charname="Bloodwyrm" chartype="enemy">
          <p>Decently strong but slow. It has a long range attack and a decently ranged attack which hits harder. You will need to bait some of his attacks on the right side to protect Zayid and Sheela when rescuing Penneloupe.</p>
        </Character> 
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          As you can tell from the map overview section warnings the beginning of this chapter is a beginners trap. If you are under prepared you may have to redo chapter 10 to give everyone new items before they leave.<br/><br/>
          When I did this I had Zayid block the tunnel so Karajan can reach him with a far-healing staff. I also had Nelke on standby for Karajan in case Penneloupe randomly triggered her Multistrike skill and Karajan had to heal Zayid twice per turn. When Sheela arrives have her immediately talk to Zayid. It doesn't matter where anyone is on the right side as everyone will be automatically placed in new locations.<br/>
          On the left side try to rush the skeletons with Ezrel, Drake, Ashram, and Haldyn. Sujata can take a few long range pot shots until she gets Darts +1 from a drop. You want to try to get Ashram or Haldyn in range of the Bloodwyrm in the center room around the time Zayid and Sheela can reach Penneloupe to help free her. Otherwise the Bloodwyrm will target Zayid and Sheela and it is hard for them to survive a second hit. Penneloupe needs to dodge a number of 50% hit chances in order to survive long enough for Sheela and Zayid to catch up to her. It should look something like this.<br/><br/>
          <img src="./screenshots/chapter11strategy.png" alt="Strategy" /><br/><br/>
          When you free Penneloupe, move everyone on the right down to the tunnel, and have everyone on the left start picking off the remainders. Have Ashram deal the killing blow with the <Item itemtype={itemtypes[2]}>Dragonslayer</Item> Drake can retrieve from the chest. You can wait 29 turns on the necromancer near the dragon to get it to keep giving you fodder for Haldyn or Sujata to level up against like I did. While doing this have your best units all guarding the top left entrances and the right side tunnel. These will be the choke points needed when the children have to escape the cave.<br/><br/>
          If you free the children before turn 30 the conditions change. Now you need to escort the children to the start of the cave. You can get tons of levels from the reinforcements that spawn until the children get near the exit. Sujata can even choke a lot of points here without her personal weapon as some of the barbarians have a very low chance of hitting her giving her tons of levels. I took out all the reinforcements before everyone fled to power level a lot of units (Haldyn, Ashram, Sujata, Sheela, Karajan, and Penneloupe).<br/><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Chapter 11 Softlock Warning
        </h1>
      </SectionHeader>          
      <SectionBody>
        If Drake is dead or hasn't been recruited and you put the <Item itemtype={itemtypes[0]}>Door Key</Item> from Chief Gnotas into the stockpile you cannot win this chapter. You can only wait until turn 30 to get a game over as only Drake or a <Item itemtype={itemtypes[0]}>Door Key</Item> can open the door and trigger the second half of the map.
      </SectionBody>

      <Footer />
    </div>          
    )
}

export default Chapter11