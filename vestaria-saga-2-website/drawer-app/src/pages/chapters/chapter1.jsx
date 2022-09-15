import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter1 = () => {
    return (
        <div id="main">
          <SectionTitle title="Chapter 1"/>
          <SectionHeader>
            <h1 class="text-big">
              Map and Details
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
              Your conditions on this map are as follows:<br/>
              <span class="greentext">Victory: Zade arrives at Janneth</span><br/>
              <span class="redtext">Defeat: Zade dies</span><br/><br/>
              Zade is your main hero and you must not let him die on this map or it is game over.<br/><br/>
              The following is what the first chapter looks like on Turn 1:<br/>
            </p>
            <img src="./screenshots/chapter1map.png" alt="Chapter Map" />
            <p>
              I went through and marked everything of interest on the map as shown here:<br/>
            </p>
            <img src="./screenshots/chapter1data.png" alt="Chapter Data" />
          </SectionBody>
          
          <SectionHeader>
            <h1 class="text-big">
              New Recruits
            </h1>
          </SectionHeader>          
          <SectionBody>
            <Character charname="Zade" chartype="ally">
              <p>The main hero. Starts as an advanced class. His personal weapon <Item itemtype={itemtypes[1]}>Edelstein*</Item> is very good so keep it as long as you can. It has a 2x hit effect which lets you hit twice as often. </p>
            </Character>
            <Character charname="Accorte" chartype="ally">
              <p>The mage from the first game. Her personal weapon <Item itemtype={itemtypes[1]}>Nashorne*</Item> is very good and keep that for as long as you can. It also has a 2x hit effect. </p>
            </Character>
            <Character charname="Ashram" chartype="ally">
              <p>A swordmaster new to this game. Starts as an advanced class. He carries an item in this game which gives you a free level up to one unit. Starts without a personal weapon. His personal skill also makes him take 1HP of damage every turn. </p>
            </Character>
            <Character charname="Sujata" chartype="ally">
              <p>A very interesting unit. She cannot die with her personal weapon <Item itemtype={itemtypes[1]}>Prayer Knife*</Item> equipped however if she goes to 1HP she goes berserk. She is the only base class unit in our team as of now. </p>
            </Character>
            <Character charname="Sheela" chartype="ally">
              <p>A deadshot from the first game. Starts as an advanced class. Her personal weapon <Item itemtype={itemtypes[1]}>Soaring Flame*</Item> is pretty good and does magic damage. </p>
            </Character>
            <Character charname="Zayid" chartype="ally">
              <p>A gladiator from the first game. Starts as an advanced class. His <Item itemtype={itemtypes[0]}>Cutlass</Item> has a 2x hit effect. He does not start out with his personal weapon from the previous game. However in the previous game Sheela could not obtain her personal weapon if he obtained his. So it is perhaps a canon story choice that she got her weapon. </p>
            </Character>                                                            
            <p>
              Data Goes Here
            </p>
          </SectionBody>
          
          <SectionHeader>
            <h1 class="text-big">
              Dialogue
            </h1>
          </SectionHeader>          
          <SectionBody>
            <ul>
              <li>Zayid can talk to Ashram. When Zayid talks to Ashram, Ashram gains a <Item itemtype={itemtypes[0]}>Merc Sword</Item> in his inventory.</li>
              <li>Sheela can talk with Zade. After talking she gets a permanent +1 point to her luck stat.</li>
            </ul>
          </SectionBody>
          
          <SectionHeader>
            <h1 class="text-big">
              Items and Item Drops
            </h1>
          </SectionHeader>          
          <SectionBody>
            <ul>
              <li>The lower left house on the map gives you <Item itemtype={itemtypes[0]}>Octavo Herbs.</Item></li>
              <li>The flower near the lower left house gives you an <Item itemtype={itemtypes[0]}>Antidote</Item>.
                <img src="./screenshots/item1-1.png" alt="Treasure 1" />
              </li>
              <li>The house in the top right corner gives you <Item itemtype={itemtypes[0]}>Herbs</Item>.
                <img src="./screenshots/item1-2.png" alt="Treasure 2" />
              </li>
              <li>The house in the top left corner near the grave with a hole gives you an <Item itemtype={itemtypes[0]}>Elixir</Item>.</li>
              <li>The skeleton next to the hole gives you a <Item itemtype={itemtypes[2]}>Divine Sword.</Item> It gives you a choice on whether or not you want to do this. If you do, you get the <Item itemtype={itemtypes[2]}>Divine Sword.</Item> but whichever unit picks it up gets put to sleep and bone soldiers with a 2x hit effect weapon spawn from the hole for about 4 turns. I picked it up with Sujata since she cannot die and used Accorte's fire tome to easily deal with the skeletons at range.
                <img src="./screenshots/item1-3.png" alt="Treasure 3" />
              </li>
              <li>The tome behind the town you need to arrive at with Zade gives you the <Item itemtype={itemtypes[2]}>Potential Tome</Item>. A skill book that is very valuable as it teaches a skill which increases the experience gained from a unit. It appears only Sujata can move over the gray mountains tiles one at a time to get it. I recommend using this on whoever you really want to use for the rest of the game early on. Zade may be a good choice for it.
                <img src="./screenshots/item1-4.png" alt="Treasure 4" />
              </li>
            </ul>
            <br/>
            <ul>
              <li>Odomir drops a <Item itemtype={itemtypes[0]}>Hatchet</Item> upon defeat.</li>
              <li>Nyrobie drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> upon defeat.</li>
              <li>Aristotle drops a <Item itemtype={itemtypes[0]}>Villains Purse</Item> upon defeat.</li>
              <li>A hunter near the top right of the map drops a <Item itemtype={itemtypes[0]}>Hunting Bow</Item> upon defeat.</li>
            </ul>
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Events
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
              As you approach the fort and Zayid and Sheela spawn in front of Janneth. They become playable at this point.
            </p>
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Reinforcements
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
            The only enemy reinforcements we need to deal with on this chapter are the bone soldiers that spawn from the hole if you take the <Item itemtype={itemtypes[2]}>Divine Sword</Item> from the skeleton near it. It also triggers a little scene telling you about the reinforcements.
            </p>
            <img src="./screenshots/event1-1.png" alt="Chapter Data" />
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Bosses
            </h1>
          </SectionHeader>          
          <SectionBody>
            <Character charname="Odamir" chartype="enemy">
              <p>Has a 1-2 range hatchet which he drops. He is of the advanced Berserker class. Drops a  <Item itemtype={itemtypes[0]}>Hatchet</Item> upon defeat. </p>
            </Character>
            <Character charname="Humphrey" chartype="enemy">
              <p>has a 1-2 range <Item itemtype={itemtypes[2]}>Vampire Axe</Item> which can lifesteal on hit.</p>
            </Character>
            <Character charname="Nyrobie" chartype="enemy">
              <p>Your first arbalest user in the game. These units have massive range 3-7 range and can become pretty annoying in later maps. They cannot counter attack at close distances however like 1-2 range. Drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> </p>
            </Character>
            <Character charname="Aristotle" chartype="enemy">
              <p>The deadliest of the four and most likely the real boss of this map. He has 1-2 range and a decently strong weapon. He is of the advanced Chief Thief class. Drops a <Item itemtype={itemtypes[0]}>Villains Purse</Item> upon defeat. </p>
            </Character>                                    
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Guide
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
              This is a pretty easy chapter. I found the easiest way to deal with this was to send Sujata, Accorte, and Zade up and have Ashram move back onto the forest and deal with the three poison knife wielding thieves in the bottom right corner of the map. He had the First Blood skill so he tended to defeat them before he could get poisoned. I interacted with the <Item itemtype={itemtypes[2]}>Divine Sword</Item> with Sujata since she was invicible to death and used Accorte and her fire tome to deal with the continual skeleton spawns at a safe distance. Zade easily took care of the bandits and Odamir and Humphrey. I had Sheela take out Nyrobie as soon as she spawned and she also took out Aristotle when he attacked her. Other than that make sure to get all the items and have Sheela talk to Zade and Zayid talk to Ashram.
            </p>
          </SectionBody>

          <Footer />
        </div>
    )
}

export default Chapter1