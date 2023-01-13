import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter17 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 17"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Zade seizes the throne, Conrad is defeated.</span><br/>
          NOTE: Conrad is defeated gets removed when Conrad disappears, then gets added back when he appears on mount at the end of the chapter.<br/>
          <span class="redtext">Defeat: Zade dies, Bennette dies, Conrad Escapes.</span><br/>
          NOTE: Arielle or Lazeria dies gets added to defeat conditions after they spawn on turn 5. It will be removed when they despawn.<br/><br/>      
          You are given two choices prior to starting this map if Lazeria was spared in chapter 10. On turn 5 you will get either Arielle or Lazeria to spawn on the map as a green unit depending on your choice at the beginning. Arielle puts enemies to sleep, Lazeria attacks enemies at range. I find Arielle to be the better choice personally as she can continuously put the entire north section of the fort to sleep over 24 turns whereas Lazeria only removes the top 4 Ballista and leaves.<br/><br/>
          Sujata, Bennette, and Zade are force deployed on this chapter. This is a complex chapter with a big spike in difficulty. If you spared Lazeria in chapter 10, the 5 Ballista accompanying Belgar in the fort appear making this map harder. I recommend deploying Slayne to deal with this. I also recommend deploying an axe unit (like Fauve, Barzlephen, or Castore/Porruck) with a <Item itemtype={itemtypes[0]}>Hammer</Item> to easily deal with the ships.<br/><br/>
          I highly recommend deploying Ashram, Fauve, Nelke, Sheela, Penneloupe, a flying unit, Barzlephen. Ashram and Sujata have an important event on this chapter. Sheela and Penneloupe have a dialogue on this chapter. Barzlephen and Nelke have a dialogue on this chapter. Nelke's staff is also very useful on this chapter and needed to get around and deal with the ballista safely. You need to visit the house on the top left asap prior to the start of turn 9 to get the <Item itemtype={itemtypes[2]}>Rosen Accolade</Item>.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter17map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter17data.png" alt="Chapter Data" /><br/>
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
            Sheela can talk to Penneloupe. Sheela gains +1 Def and +1 Str permanently
          </li>
          <li>
            Barzlephen can talk to Nelke. Nelke gains the Iron Will skill and +1 Mobility permanently. The Iron Will skill makes Nelke immune to status effects which is excellent for a staff unit.
          </li>
          <li>
            While not on the dialogue list Sujata can talk to Marlena and Beorn. They can initiate the conversation if she is in their range. Doing this shows a touching story event and removes the Broken Heart skill from Sujata.
            <img src="./screenshots/chapter17event1.png" alt="Event 1" /><br/>
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
            The northern weapon shop sells daggers which are great for Sujata. The southern weapon shop sells decent weapons.
          </li>
          <li>
            There is an Azure Paddock in the south.
          </li>
          <li>
            There is an item shop which sells status removal staves and <Item itemtype={itemtypes[2]}>Staff of Enhancing</Item> which is effectively Sigfried's personal staff from the previous game. It buffs a unit's stats for a few turns.
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
            The northwestern village gives a <Item itemtype={itemtypes[2]}>Rosen Accolade</Item> if you reach it before turn 9. This can be traded and boosts growth rates of a unit plus it gives them the Potential skill when holding it. Make sure you get this.
          </li>
          <li>
            The northeastern red house gives <Item itemtype={itemtypes[0]}>1500 Denari</Item> and a permanent +7 Luck to whoever visits this. I chose Alexander for this house in my run.
          </li>
          <li>
            If you give <Item itemtype={itemtypes[0]}>Octavo Herbs</Item> to the southwestern red house you get a permanent +5 Luck to Zade
          </li>
          <li>
            Examining the flower near the road yields an <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
          </li>
          <li>
            Examining the pirate fortress yields a <Item itemtype={itemtypes[0]}>Sack of Coin</Item>.
          </li>
          <li>
            Examining the flower in the lake yields a <Item itemtype={itemtypes[0]}>Bellflower Leaf</Item>.
          </li>
          <li>
            Examining the tower in the bottom left corner of the map yields <Item itemtype={itemtypes[2]}>Nightmare</Item>.
          </li>                   
        </ul>

        <p class="text-small">
          The following is the list of enemy drops on this chapter:
        </p>
        <ul>
          <li>
            An assassin drops the <Item itemtype={itemtypes[2]}>Mage Slayer</Item> dagger.
          </li>
          <li>
            A gold wagon convoy which spawns on turn 25 drops <Item itemtype={itemtypes[0]}>Gold Bullion</Item> when defeated.
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
            At the start of the chapter you have a choice between Cezar getting Arielle or Lazeria to help the fight (if you kept Lazeria alive in chapter 10). Lazeria will operate for a few turns and take out the 4 northern ballista (which only appear if Lazeria was kept alive in chapter 10). Arielle on the other hand will systematically use long range sleep (which lasts 8 turns or so) each unit in the north of the fortress. And when they wake up she will sleep them again. She is the better choice here since you can get exp from beating them when defenseless and she hits the 3 guard bosses with it too.
          </li>
          <li>
            At the end of turn 8 the three bashers will repair the bridges allowing the cavalry knights to attack you. If you take all 3 out before then the cavalry can't go anywhere and will retreat. A scene will play as well. If you don't defeat all 3 bashers but then beat Culvert who leads the cavalry, the will try to retreat and not attack you but they will stay on the map for easy exp.
            <img src="./screenshots/chapter17event4.png" alt="Event 4" /><br/>
          </li>
          <li>
            If you put Sujata in Marlena and Beorn's attack range it will trigger a scene on enemy phase and Sujata will disappear with them for the remainder of the chapter. Doing this event gives a very big reward and can possibly make Sujata and Ashram broken top tier units depending on what skill books you used on them.
          </li>
          <li>
            Visit the southwest village before turn 20 to prevent the gargoyles from moving and aiding the enemy. You also get <Item itemtype={itemtypes[0]}>2500 Denari</Item>. If you get within range of the gargoyles they will still attack like normal but they will go on the offensive if you wait past turn 20.
          </li>
          <li>
            Visiting the northwestern red house will give a permanent +7 to Luck. Give this to whoever needs it.
          </li>
          <li>
            On turn 5 whoever you picked from the Cezar question will spawn at the top middle wall.
            <Character charname="Arielle3" chartype="ally"></Character>
            <Character charname="Lazeria2" chartype="ally"></Character>
          </li>
          <li>
            The Training Rector will whip the farmers into shape and make them spawn from the Barracks at the start of turn 9. You should not let this happen and get the <Item itemtype={itemtypes[2]}>Rosen Accolade</Item> first by visiting the northwest village before turn 9. The farmers will turn on the Training Rector and there will be no weak reinforcements from the east.
          </li>
          <li>
            Visit the southeast village to learn that a wedding ring was stolen in the shrine. Visit the shrine to get the <Item itemtype={itemtypes[2]}>Memento Ring</Item>. It is locked to the inventory of whoever examines the shrine. Have that unit go back to the village to get <Item itemtype={itemtypes[0]}>3000 Denari</Item>. This will trigger Shrine Wraith to spawn from the shrine.
          </li>
          <li>
            If you give <Item itemtype={itemtypes[0]}>Octavo Herbs</Item> to the red house surrounded by the shops, Zade will gain a permanent +5 Luck for some reason.
          </li>
          <li>
            If you visit the mansion in the southeast while Belgar still stands, you can pay 1000 Denari to have him assassinated. If he is already defeated the mansion will tell you to scram. If you take out Belgar or have the mansion do it the southern Ballista will no longer attack you.
            <img src="./screenshots/chapter17event5.png" alt="Event 5" /><br/>
          </li>
          <li>
            On turn 25 a <Item itemtype={itemtypes[0]}>gold bullion</Item> carrying wagon arrives on the southwestern road. Defeat it to get rid of the roseport mercenaries theoretically (story wise that makes sense but I still had to fight them after defeating it).
          </li>
          <li>
            When you enter the fort Conrad will flee and Rohan will replace him.
          </li>
          <li>
            After defeating Rohan, Conrad will spawn again from the cave and try to head out from the southwest road.
          </li>                                 
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          After you give the <Item itemtype={itemtypes[2]}>Memento Ring</Item> to the village in the southeast Shrine Wraiths will keep spawning from the shrine.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Training Rector" chartype="enemy">
          <p>Visting the northwestern village before turn 9 will give a <Item itemtype={itemtypes[2]}>Rosen Accolade</Item> and make the farmers turn on him and take him out easily. It opens up the fence as well for your troops to move through. You can take him out with a flier but just go for the village instead. If you do not visit the village before turn 9 you will have to deal with a lot of weak reinforcements and not get the <Item itemtype={itemtypes[2]}>Rosen Accolade</Item>.</p>
        </Character>
        <Character charname="Culevent" chartype="enemy">
          <p>You can prevent having to fight him and keep him on his little island if you take out all 3 bashers before they fix the bridges. His <Item itemtype={itemtypes[2]}>Iron Duke</Item> makes him very tanky but someone like Phoeve can make short work of him. The enemy cavalry will not attack and try to retreat when he falls in battle.</p>
        </Character>
        <Character charname="Achilles" chartype="enemy">
          <p>Three pirate ships which guard the south lake. They are extremely bulky and are best dealt with from Fauve or Zayid using a <Item itemtype={itemtypes[0]}>Hammer</Item>.</p>
        </Character>
        <Character charname="Neptune" chartype="enemy">
          <p>Three pirate ships which guard the south lake. They are extremely bulky and are best dealt with from Fauve or Zayid using a <Item itemtype={itemtypes[0]}>Hammer</Item>.</p>
        </Character>
        <Character charname="Orion" chartype="enemy">
          <p>Three pirate ships which guard the south lake. They are extremely bulky and are best dealt with from Fauve or Zayid using a <Item itemtype={itemtypes[0]}>Hammer</Item>.</p>
        </Character>
        <Character charname="Labronn" chartype="enemy">
          <p>Guards a village. He is pretty tanky but can easily be taken out from range from Phoeve behind the village.</p>
        </Character>
        <Character charname="Eliott" chartype="enemy">
          <p>A pretty dangerous archer. Best to have Phoeve or someone who hits hard handle him.</p>
        </Character>
        <Character charname="Heron" chartype="enemy">
          <p>A nasty archer protecting the area near the entrance of the fort.</p>
        </Character>
        <Character charname="Khabarov" chartype="enemy">
          <p>An axemaster guarding the southern road. He hits very hard and is bulky so you want to take him out from range.</p>
        </Character>
        <Character charname="Tourniquolla" chartype="enemy">
          <p>Ignore him if you want since when you visit the southwest village before turn 20 he will not attack unless you get close to him. However the tower he is guarding holds the <Item itemtype={itemtypes[2]}>Nightmare</Item> sword and the gargoyles should be easy to get levels off of. He is pretty tough but Sheela and Penneloupe can easily take him out.</p>
        </Character>
        <Character charname="Belgar" chartype="enemy">
          <p>He hits very hard and has massive range. Dealing with him can be problematic. The easiest methods are to pay to have him assassinated by paying 1000 Denari at the bottom left mansion or to have Slayne use the <Item itemtype={itemtypes[2]}>Divine Tincture</Item> (or save scum to proc Multichance) and take him out from range.</p>
        </Character>
        <Character charname="Marlena" chartype="enemy">
          <p>Don't bother fighting them, talk to Beorn and Marlena with Sujata. They will start to move when you have Sujata near them. They will not attack her and will initiate the event conversation when they move into attack range of her.</p>
        </Character>
        <Character charname="Beorn" chartype="enemy">
          <p>Don't bother fighting them, talk to Beorn and Marlena with Sujata. They will start to move when you have Sujata near them. They will not attack her and will initiate the event conversation when they move into attack range of her.</p>
        </Character>
        <Character charname="Gonzales" chartype="enemy">
          <p>Three armored brutes with ranged weapons who defend the north section of the castle. Easy to deal with if you picked the Arielle choice from Cezar at the start of the chapter.</p>
        </Character>
        <Character charname="Ortega" chartype="enemy">
          <p>Three armored brutes with ranged weapons who defend the north section of the castle. Easy to deal with if you picked the Arielle choice from Cezar at the start of the chapter.</p>
        </Character>
        <Character charname="Ramos" chartype="enemy">
          <p>Three armored brutes with ranged weapons who defend the north section of the castle. Easy to deal with if you picked the Arielle choice from Cezar at the start of the chapter.</p>
        </Character>
        <Character charname="Jackale" chartype="enemy">
          <p>A nasty archer protecting the area near Conrad. Use one of your archers like Slayne or Bennette to deal with him.</p>
        </Character>
        <Character charname="Conrad2" chartype="enemy">
          <p>A bit stronger than before until mounted; then he is actually weaker than before. He leaves when you get close.</p>
        </Character>
        <Character charname="Conrad3" chartype="enemy">
          <p>After defeating Rohan he appears from the cave trying to flee but you can easily take him out.</p>
        </Character>
        <Character charname="Rohan" chartype="enemy">
          <p>Replaces Conrad once you enter the fort. Have a strong unit take him on.</p>
        </Character>                                                     
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Ashram and Sujata
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This deserves its own section and part of the guide/walkthrough. Because of how much of a game changer this is and how much easier it makes the game. As of this chapter Ashram and Sujata may become some of the best units in your army if you do a very specific Chapter 17 story event. By having Marlena and Beorn talk to Sujata as discussed earlier in this guide a few things happen.<br/><br/>
          First the Broken Heart skill is removed from Sujata. This skill was the one that caused her to go Berserk at 1HP; so now the <Item itemtype={itemtypes[1]}>Prayer Knife*</Item> effectively makes Sujata immortal on enemy phase with no consequence at all if you made sure not to break it before this point. If you gave Sujata certain skill books such as taskmaster or leveled her up a lot she is now one of the best units in the game. Keep in mind the <Item itemtype={itemtypes[1]}>Prayer Knife*</Item> doesn't counter on enemy phase so if you never use it up on player phase Sujata can basically tank any enemy without issue from this point forward and choke any point on the map. With the Taskmaster skill book used on her, she is effectively an immortal unit who restores the turn of another unit and can be put on the front lines with the other unit.<br/><br/>
          Second Sujata leaves for the remainder of the chapter; however, when she returns she gets another potentially broken personal weapon, the <Item itemtype={itemtypes[1]}>Parry Kalta*</Item>, which functions similar to Aynellia's personal weapon from the first game. It causes Daze 100% of the time and gives her the First Blood skill so she always attacks first. Also of note, later on there is an item in the game which removes durability of whoever holds it in their inventory making Sujata able to use both personal weapons infinitely.<br/><br/>
          <img src="./screenshots/chapter17event3.png" alt="Event 3" /><br/>
          Finally, Ashram's Incurable Disease skill was removed earlier in the game so he no longer loses health. He also gains a good personal weapon, <Item itemtype={itemtypes[1]}>Bathoras*</Item>, at the end of the chapter due to this event. This personal weapon halves all damage taken. Also when put on the battlefield with Sujata they gain some pretty good stat bond bonuses and Sujata is no longer in any danger of death. So now there is little downside to using Ashram apart from his weaker growth rates compared to Haldyn.<br/><br/>
          <img src="./screenshots/chapter17event2.png" alt="Event 2" /><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This chapter is complex from a design perspective and has a lot of optional objectives with a countdown timer but only the first two require rushing for. First off pick Arielle instead of Lazeria after commencing the chapter. Arielle is far more useful to you and stays longer. Second make sure to have a strong axe user with a hammer, and multiple people like Nelke and whoever you gave the taskmaster skill to around for doing multiple things in a single turn.<br/><br/>
          The first challenge is to make it to the top right section of the map while avoiding the ballista. One strategy is use Slayne to destroy the ballista and Nelke to restore him and get him out of range of the other ballista but this can take time you do not have. You can also use the Divine Tincture to make Slayne immortal to make it easier for him to take out the ballista. Alternatively have units with high mobility cross the ballista range one turn at a time and have Nelke ferry them across to safety with the Nelke Staff*. Once you do that rush to the village and take out the bashers to block the cavalry. I left one basher alive actually to fight the boss and get some exp for Phoeve. Visit the northwest village before turn 9 and you get a very useful Rosen Accolade. This also opens up the fences for the left side of the map and lets the green unit farmers deal with the miniboss for you.<br/><br/>
          While doing this have everyone move down and deal with the pirate ships and assassins. Once Arielle shows up Zade gets his lockpick skill back and you can fix the bridges. Or have Drake do it. The pirate ships are annoying and tanky if you do not use the hammer to beat them. Even with the hammer it is highly inaccurate so someone with taskmaster or Nelke is good here for getting multiple attempts at the ships.<br/><br/>
          You should be well on your way to rescuing the southwest village before turn 20 and prevent the Gargoyles from raiding. Visit the nearby village as well to get the quest to return a ring from the shrine before turn 40 which is trivial to do in that time limit. Have your flier get the treasure on the lake and seize the pirate fortress. She can also take on a lot of the gargoyles for exp but the boss hits hard and is dangerous.<br/><br/>
          Work your way through the assassins in the southeast if you want to spend money to get rid of the southern ballista problem. WARNING: Some of the really dangerous ones with status effects are invisible. Have Sujata approach the southern end of the fort to trigger Marlena and Beorn to talk to her. When you reach the northern part of the fortress everyone should be asleep but if anyone wakes up they get one full turn to attack before Arielle puts them back to sleep. You should be doing this before turn 30 otherwise Arielle will break her staff and leave. This part is trivial if Arielle put everyone to sleep.<br/><br/>
          The Roseport mercs in the throne room are a bit dangerous and mostly the same as the previous chapter. In theory, taking out the wagon that spawns on the southwest road on turn 25 should stop them but they do not leave. Conrad flees and Rohan is relatively easy to take out with your toughest units. Conrad then tries to flee to the southern signpost. It is game over if he does leave so take him out by leaving some decent units behind (like the ones you fought the gargoyles with for exp).<br/><br/>
          <img src="./screenshots/chapter17event6.png" alt="Event 6" /><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter17