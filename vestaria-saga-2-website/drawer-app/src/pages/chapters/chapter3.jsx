import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter3 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 3"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
            Your conditions on this map are as follows:<br/>
            <span class="greentext">Victory: The party seizes the pirate fortress, Jonathan reaches Coastus, Zade arrives at Coastus</span><br/>
            <span class="redtext">Defeat: Zade dies, Jonathan dies</span><br/><br/>

            Note: Coastus is the far top right village that Drake is guarding.<br/><br/>

            The following is what the chapter looks like on Turn 1:<br/>
            </p>
            <img src="./screenshots/chapter3map.png" alt="Chapter Map" />
            <p>
              I went through and marked everything of interest on the map as shown here:<br/>
            </p>
            <img src="./screenshots/chapter3data.png" alt="Chapter Data" />
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Hilda" chartype="ally">
          <p>If you rescued her in the previous chapter she is deployed at the start of this chapter with your other units. She has no weapons at the start so trade with her and give her <Item itemtype={itemtypes[1]}>Justitia*</Item> and another axe. Be warned not to use her too much as her description states she will eventually leave the party.</p>
        </Character>
        <Character charname="Baymonk" chartype="ally">
          <p>A new ally introduced in this game. He guards the top center village as a green ally unit. If you talk to him with Zade you can recruit him for 2000 Denari. His personal weapon <Item itemtype={itemtypes[1]}>Euphoria*</Item> has a 2x hit effect. He seems to be well worth the money.</p>
        </Character>
        <Character charname="Drake" chartype="ally">
          <p>Most likely the final recruit of this chapter, he does not seem to attack your units or maybe that is if you initially talk to him with Zade. You can recruit him with Zade if you talk a second time to him while Zade is equipped with the Crested Armlet* (the boss drop of this chapter). He seems to be a very powerful thief which has the ability to move again after an action like mounted units. He comes with his personal weapon <Item itemtype={itemtypes[1]}>Sinagur*</Item>. This weapon is ridiculous with 1-2 range, guaranteed critical counters, and 2x hit effect.</p>
        </Character>
        <Character charname="Karajan" chartype="ally">
          <p>A very useful healer that comes equipped with some great healing staves. The manual for this game states "If you don't capture this unit, the rest of the game will become HORRIFYINGLY difficult." He requires you to use the capturing mechanic which I will explain further down.</p>
        </Character>
        <Character charname="Castore" chartype="ally">
          <p>They function similarly and both require capturing. They are two sailors who will be useful in a few upcoming chapters for being able to traverse water. If captured like Karajan they will be available on the next map.</p>
        </Character>
        <Character charname="Porruck" chartype="ally">
          <p>They function similarly and both require capturing. They are two sailors who will be useful in a few upcoming chapters for being able to traverse water. If captured like Karajan they will be available on the next map.</p>
        </Character>                             
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>Zade can talk to Drake without the <Item itemtype={itemtypes[1]}>Crested Armlet*</Item> to be given the hint to give him the <Item itemtype={itemtypes[1]}>Crested Armlet*</Item>. If you talk to Drake with the <Item itemtype={itemtypes[1]}>Crested Armlet*</Item> you recruit him.</li>
          <li>Zade can talk to Baymonk and pay 2000 Denari to recruit him to the team.</li>
          <li>Zade can talk to Jonathan the rickshaw operator to be given a description of what to expect for this mission. Jonathan will slowly move across the map (4 movement) and must be protected. He tells Zade there is a reward for protecting him.</li>
          <li>After Hilda complains around turn 5 of her Axe being heavy she can talk to Slayne and give him a <Item itemtype={itemtypes[2]}>Penelope's Longbow</Item>.</li>
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>The house closest to your starting area will give you a Tisane healing item and take <Item itemtype={itemtypes[0]}>200 Denari</Item> as payment.</li>
          <li>The northern house gives you a <Item itemtype={itemtypes[0]}>compact bow</Item>.
            <img src="./screenshots/chapter3item1.png" alt="Treasure 1" />
          </li>
          <li>The top left village on this map gives you <Item itemtype={itemtypes[2]}>The Art of War</Item>. Be careful about who this is given to. This item is locked to the inventory of whoever visits the village (no trading). This scroll effectively permanently boosts growth rates like the Crusader Scrolls in Fire Emblem Thracia 776. I personally visited this house with Sheela as I found Dune (her counterpart) to be pretty broken in VS1. Drake, Baymonk, Zade, or Zayid seem like other best choices to me. Hilda seems like a bad choice because of the warning in her description.
            <img src="./screenshots/chapter3item2.png" alt="Treasure 2" />
          </li>
          <li>Technically part of an event and so not on my map but you can get a <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item> from the beach in the top right corner on turn 21 if you keep the dragon alive. This is very easy to do surprisingly. This is a very useful item as it allows you to fully repair the durability of one weapon.
            <img src="./screenshots/chapter3item3.png" alt="Treasure 3" />
          </li>          
        </ul>
        <p>The following lists all the item drops enemies yield in this chapter:</p>
        <br/>
        <ul>
          <li>Captian Rackham drops the <Item itemtype={itemtypes[1]}>Crested Armlet*</Item> upon defeat which is essential for recruiting Drake. Do not put it in the Stockpile as the game warns because you do not have access to it from the map until next chapter.</li>
          <li>Brigand Archer drops a <Item itemtype={itemtypes[0]}>Longbow</Item>, the Dragon will most likely beat this archer before you can get to it and this common weapon will be lost for now (the Dragon kept using Multichance skill on my game). The weapon is common to get later on so don't worry about it.</li>
          <li>A pirate on the western beach drops some <Item itemtype={itemtypes[0]}>Herbs</Item> on defeat.</li>
          <li>A pirate on the western beach drops a <Item itemtype={itemtypes[0]}>Tomahawk</Item> on defeat.</li>
          <li>A berserker drops a <Item itemtype={itemtypes[2]}>Scissor Axe</Item> upon defeat.</li>
          <li>A berserker drops some <Item itemtype={itemtypes[0]}>Herbs</Item> on defeat.</li>
          <li>A berserker drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> on defeat.</li>
          <li>Rackham Lackey the distant archer drops an <Item itemtype={itemtypes[0]}>Arbalest</Item> on defeat. He can be tricky to get to because of his range and the enemies around him.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>If you visited the house Jonathan comes from you can get a permanent +1 to your defense stat to whichever unit visits the house. I used Sheela because of the recruit mechanic I'll explain in the fourth event.</li>
          <li>Talk to Baymonk with Zade for the option to recruit him for 2000 Denari. I believe this is worth the cost easily.</li>
          <li>Capture Karajan with Zade. Ok so here is how the capture mechanic works. The house in the bottom right explains it. You must reduce the health of an enemy with a star in their name like Karajan* to 10HP or less but not kill them. Once their health is low Zade can begin a conversation with them as a capture command is now shown on the menu when Zade is adjacent. A conversation occurs and the unit disappears with a little message saying they have been taken prisoner by you. Karajan is a great healer and very much worth capturing.
            <img src="./screenshots/chapter3event1.png" alt="Event 1" />
          </li>
          <li>Capture Castore and Porruck with Zade. Similar to the previous Zade can initiate a conversation with either pirate when they reach 10HP.
            <img src="./screenshots/chapter3event2.png" alt="Event 2" />
          </li>
          <li>Talk to Drake with the <Item itemtype={itemtypes[1]}>Crested Armlet*</Item> on Zade. Zade can recruit Drake if he wields the <Item itemtype={itemtypes[1]}>Crested Armlet*</Item>. The red house tells you which units can cross collapsed bridges and which cannot. Zade cannot so you will need to use units like Zayid, Ashram, Sheela, or Hilda to get the armlet and ferry it across the bridge to trade it to Zade.
            <img src="./screenshots/chapter3event3.png" alt="Event 3" />
          </li>
          <li>Ignore the dragon for 21 turns to get a <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item>. This one is a weird one that took me a second playthrough of the map to figure out. The first 6 turns the dragon on the top left is in berserk status and will go after every enemy unit on the map. At turn 6 he loses the status and loses interest in everyone. He will go straight to the island and ignore your army. He poses absolutely zero threat to your party. At turn 15 the dragon will eat the ore chunk you cannot reach on the top left island (as Porruck and Castore disappear after being captured). He will fly across the ocean and drop the ore chunk on the top right beach at turn 21. He will stand there and not attack any of your units unless you attack him first so he is also still not a threat. He gives a ton of exp on defeat but is helping you out so it is a moral choice what to do with the dragon.
            <img src="./screenshots/chapter3event4.png" alt="Event 4" />
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
          <li>Bandit pirates will spawn for a few turns out of the three entrances to the caves. There will be quite a few pirates on this map as you approach Coastus.</li>
          <li>I don't quite know the mechanical trigger for this as I only saw it the first time I played the map, not the second but a few pirates can spawn from the black ship near the fort.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Rackham Lackey" chartype="enemy"><p>Rackham Lackey has an arbalest which he drops and is kind of a pain to attack due to his massive range. Ashram, Hilda, or Zayid can easily dodge or even tank the shots and get in fast to one round him.</p></Character>
        <Character charname="Captain Rackham" chartype="enemy"><p>Captain Rackham can attack from 1-2 range and buffs his resistance throughout the map. He is an advanced Chief Thief class. Zayid using the cutlass can easily make short work of him with a 4x hit.</p></Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>This chapter can seem like a step up from the previous chapters as there are lots of side objectives for 100% but it is still fairly easy. However it is a great example of the map design to come in the future. Keep in mind, you still do not have a healer unit and will probably tank a lot of damage on this chapter so some of the healing items from the previous chapter will be needed here. Also of note: talking to Baymonk and talking to Jonathan heal Zade fully for some reason so don't waste healing items on him.</p><br/>
        <p>The first thing I did was move Zade, Sheela, and Sujata to the right villages and get Sheela on the bridge to lure the two pirates. Have Zade talk to Jonathan. The red house mentions Zade cannot cross the rickety bridge so the pirates are not accessible to Zade unless you lure them with someone who preferably cannot fight back or kill them (hence Sheela or Sujata). Equipping Zade with the rusted sword from the previous chapter and having the pirates attack him is the best method as that weapon does not allow an enemy to drop below 1HP from battle. Both pirates AI seem to prioritize attacking Zade over Sheela and Sujata as well. But you need someone who can cross the bridge like Sheela or Sujata to lure them into range of Zade.</p><br/>
        <p>Meanwhile Hilda, Zayid and Ashram can easily take out the enemies on the beach. Leave the dragon alone and let him take care of the archer. If you take out all of the enemies too fast he may start heading for the two pirate brothers which you do not want. On turn 6 he loses interest in everything and flies back to the island. Try to rush over to protect Baymonk however he will receiving healing from the village if damaged during combat every turn. Move Zade over to recruit him or not but talk to him as you get another party member from the conversation in chapter 4.</p><br/>
        <p>Move Zade over to Drake and talk to him then have Zade go over to capture Karajan on the northeast beach. I had Sujata cross the tree border and weaken him with throwing knives to save some time and give her some experience. I haven't found out a good way to level her up as she does such little damage to anything and her personal weapon has such low usage.</p><br/>
        <p>Determine who you want to get the Art of War scroll from the village and make sure they get it. Don't worry about Jonathan catching up with Drake as he will not attack Jonathan or anyone it seems if Zade talked to him (maybe even if Zade didn't). Have Hilda talk to Slayne for a good weapon. Also around turn 21 the dragon you ignored should show up on the northern beach. Examine the ore he drops with one of the units which cannot cross the bridge like Slayne or Accorte.</p><br/>
        <p>Move Ashram, Zayid, Sheela, Baymonk, and Hilda across the collapsed bridge in the top right to attack all the pirate reinforcements and their leader. One of them must also seize the fortress before Zade reaches Coastus or the village will just ignore Zade and tell you to deal with the pirates first. After you beat Captain Rackham take the Crested Armlet* back to Zade and have him speak with Drake to recruit him. Then move Drake out of the way and let Jonathan reach Coastus. Then Zade must visit it to end the map.</p><br/>
        <p>There is a lot to do on this map but it is all pretty straightforward. Also if you haven't already now, is a good time to decide who to give the Potential Skill book to and use it on. I personally chose Drake as thieves are typically hard to level up usually and he seems like a unit who may get very good for combat if he gets enough levels and possibly make future treasure easier to get. Whoever you gave the Art of War to would also be a good choice for making a fast leveling juggernaut. Sujata getting both the Art of War and the Potential Skill book could be make for a very interesting playthrough.</p><br/>
      </SectionBody>

      <Footer />
    </div>           
    )
}

export default Chapter3